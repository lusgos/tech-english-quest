#!/usr/bin/env python3
"""
TECH ENGLISH QUESTS - BACKEND SERVER
Handles student quiz submissions, teacher authentication, and quest access control.
Compatible with Cloudflare Tunnels, Termux on Android (S23), and macOS.
"""

import sys
import os
import json
import time
from datetime import datetime
from http.server import HTTPServer, SimpleHTTPRequestHandler
import urllib.parse

PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 8099
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
DATA_FILE = os.path.join(BASE_DIR, "student_submissions.json")
SETTINGS_FILE = os.path.join(BASE_DIR, "quest_settings.json")

# Secret key required to access the Teacher Portal and Teacher APIs
TEACHER_SECRET_KEY = "prof_standup_access_2026"

# Ensure data files exist
if not os.path.exists(DATA_FILE):
    with open(DATA_FILE, "w", encoding="utf-8") as f:
        json.dump([], f, ensure_ascii=False, indent=2)

if not os.path.exists(SETTINGS_FILE):
    with open(SETTINGS_FILE, "w", encoding="utf-8") as f:
        json.dump({
            "simple-past": True,
            "present-simple-continuous": False
        }, f, ensure_ascii=False, indent=2)

class QuestServerHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=BASE_DIR, **kwargs)

    def end_headers(self):
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, DELETE")
        self.send_header("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Teacher-Auth")
        self.send_header("Cache-Control", "no-cache, no-store, must-revalidate")
        super().end_headers()

    def do_OPTIONS(self):
        self.send_response(200)
        self.end_headers()

    def _is_teacher_authorized(self, query_params):
        # 1. Check URL query param ?auth=...
        auth_param = query_params.get("auth", [None])[0]
        if auth_param == TEACHER_SECRET_KEY:
            return True

        # 2. Check Authorization Header: Bearer <token>
        auth_header = self.headers.get("Authorization", "")
        if auth_header.startswith("Bearer "):
            token = auth_header.split(" ", 1)[1].strip()
            if token == TEACHER_SECRET_KEY:
                return True

        # 3. Check custom header
        custom_header = self.headers.get("X-Teacher-Auth", "").strip()
        if custom_header == TEACHER_SECRET_KEY:
            return True

        return False

    def do_GET(self):
        parsed = urllib.parse.urlparse(self.path)
        path = parsed.path
        query = urllib.parse.parse_qs(parsed.query)

        # ---------------------------------------------------------
        # 1. DEDICATED TEACHER PORTAL ROUTE (PROTECTED)
        # ---------------------------------------------------------
        if path in ["/teacher", "/teacher.html", "/teacher-portal"]:
            if not self._is_teacher_authorized(query):
                # Forbidden for students or unauthorized visitors
                self.send_response(403)
                self.send_header("Content-Type", "text/html; charset=utf-8")
                self.end_headers()
                forbidden_html = """<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>403 - Acesso Restrito</title>
  <style>
    body { background: #070a12; color: #f1f5f9; font-family: sans-serif; display: flex; align-items: center; justify-content: center; height: 100vh; margin: 0; text-align: center; }
    .box { background: rgba(15,23,42,0.9); border: 1px solid rgba(239,68,68,0.4); padding: 36px; border-radius: 14px; max-width: 480px; }
    h1 { color: #ef4444; margin-bottom: 12px; font-size: 1.6rem; }
    p { color: #94a3b8; line-height: 1.5; font-size: 0.95rem; }
    a { display: inline-block; margin-top: 20px; color: #00f0ff; text-decoration: none; font-weight: bold; }
  </style>
</head>
<body>
  <div class="box">
    <h1>🔒 Acesso Restrito ao Professor</h1>
    <p>Esta área é de uso exclusivo da coordenação docente e requer autenticação segura.</p>
    <a href="/">➔ Ir para a Área do Aluno (Fazer Teste)</a>
  </div>
</body>
</html>"""
                self.wfile.write(forbidden_html.encode("utf-8"))
                return

            # Authorized teacher: serve teacher.html
            teacher_path = os.path.join(BASE_DIR, "teacher.html")
            try:
                with open(teacher_path, "rb") as f:
                    content = f.read()
                self.send_response(200)
                self.send_header("Content-Type", "text/html; charset=utf-8")
                self.end_headers()
                self.wfile.write(content)
                return
            except Exception as e:
                self.send_response(500)
                self.end_headers()
                self.wfile.write(f"Error loading teacher portal: {e}".encode("utf-8"))
                return

        # ---------------------------------------------------------
        # 2. QUEST ACCESS SETTINGS API (PUBLIC GET)
        # ---------------------------------------------------------
        if path == "/api/quest-settings":
            self.send_response(200)
            self.send_header("Content-Type", "application/json; charset=utf-8")
            self.end_headers()
            try:
                with open(SETTINGS_FILE, "r", encoding="utf-8") as f:
                    content = f.read()
                self.wfile.write(content.encode("utf-8"))
            except Exception as e:
                self.wfile.write(json.dumps({"error": str(e)}).encode("utf-8"))
            return

        # ---------------------------------------------------------
        # 3. STUDENT SUBMISSIONS API (TEACHER AUTH REQUIRED)
        # ---------------------------------------------------------
        if path == "/api/submissions":
            if not self._is_teacher_authorized(query):
                self.send_response(401)
                self.send_header("Content-Type", "application/json")
                self.end_headers()
                self.wfile.write(json.dumps({"error": "Unauthorized. Teacher secret key required."}).encode("utf-8"))
                return

            self.send_response(200)
            self.send_header("Content-Type", "application/json; charset=utf-8")
            self.end_headers()
            try:
                with open(DATA_FILE, "r", encoding="utf-8") as f:
                    content = f.read()
                self.wfile.write(content.encode("utf-8"))
            except Exception as e:
                self.wfile.write(json.dumps({"error": str(e)}).encode("utf-8"))
            return

        # Status health check
        if path == "/api/status":
            self.send_response(200)
            self.send_header("Content-Type", "application/json")
            self.end_headers()
            self.wfile.write(json.dumps({
                "status": "online",
                "timestamp": datetime.now().isoformat(),
                "submissions_count": self._count_submissions()
            }).encode("utf-8"))
            return

        # Default static file serving for students
        return super().do_GET()

    def do_POST(self):
        parsed = urllib.parse.urlparse(self.path)
        path = parsed.path
        query = urllib.parse.parse_qs(parsed.query)

        # ---------------------------------------------------------
        # 1. UPDATE QUEST ACCESS SETTINGS (TEACHER AUTH REQUIRED)
        # ---------------------------------------------------------
        if path == "/api/quest-settings":
            if not self._is_teacher_authorized(query):
                self.send_response(401)
                self.send_header("Content-Type", "application/json")
                self.end_headers()
                self.wfile.write(json.dumps({"error": "Unauthorized"}).encode("utf-8"))
                return

            content_length = int(self.headers.get("Content-Length", 0))
            body = self.rfile.read(content_length).decode("utf-8")
            try:
                settings_data = json.loads(body)
                temp_file = SETTINGS_FILE + ".tmp"
                with open(temp_file, "w", encoding="utf-8") as f:
                    json.dump(settings_data, f, ensure_ascii=False, indent=2)
                os.replace(temp_file, SETTINGS_FILE)

                print(f"[SETTINGS UPDATED] Quests access updated: {settings_data}")

                self.send_response(200)
                self.send_header("Content-Type", "application/json; charset=utf-8")
                self.end_headers()
                self.wfile.write(json.dumps({
                    "status": "success",
                    "settings": settings_data
                }).encode("utf-8"))
            except Exception as e:
                self.send_response(400)
                self.send_header("Content-Type", "application/json")
                self.end_headers()
                self.wfile.write(json.dumps({"error": str(e)}).encode("utf-8"))
            return

        # ---------------------------------------------------------
        # 2. STUDENT SUBMISSION POST (PUBLICLY ACCESSIBLE FOR STUDENTS)
        # ---------------------------------------------------------
        if path == "/api/submissions":
            content_length = int(self.headers.get("Content-Length", 0))
            body = self.rfile.read(content_length).decode("utf-8")
            try:
                submission_data = json.loads(body)
                submission_data["server_received_at"] = datetime.now().isoformat()
                submission_data["id"] = f"sub_{int(time.time() * 1000)}"

                submissions = []
                if os.path.exists(DATA_FILE):
                    try:
                        with open(DATA_FILE, "r", encoding="utf-8") as f:
                            submissions = json.load(f)
                    except Exception:
                        submissions = []

                submissions.append(submission_data)

                temp_file = DATA_FILE + ".tmp"
                with open(temp_file, "w", encoding="utf-8") as f:
                    json.dump(submissions, f, ensure_ascii=False, indent=2)
                os.replace(temp_file, DATA_FILE)

                print(f"[SUBMISSION SAVED] Student: {submission_data.get('studentName', 'Anonymous')} - Score: {submission_data.get('scoreRatio')} ({submission_data.get('verdict')})")

                self.send_response(201)
                self.send_header("Content-Type", "application/json; charset=utf-8")
                self.end_headers()
                self.wfile.write(json.dumps({
                    "status": "success",
                    "id": submission_data["id"],
                    "message": "Submission recorded successfully"
                }).encode("utf-8"))
            except Exception as e:
                self.send_response(400)
                self.send_header("Content-Type", "application/json")
                self.end_headers()
                self.wfile.write(json.dumps({"status": "error", "message": str(e)}).encode("utf-8"))
            return

        self.send_response(404)
        self.end_headers()

    def do_DELETE(self):
        parsed = urllib.parse.urlparse(self.path)
        query = urllib.parse.parse_qs(parsed.query)

        # Clear submissions requires teacher authorization
        if parsed.path == "/api/submissions":
            if not self._is_teacher_authorized(query):
                self.send_response(401)
                self.send_header("Content-Type", "application/json")
                self.end_headers()
                self.wfile.write(json.dumps({"error": "Unauthorized"}).encode("utf-8"))
                return

            with open(DATA_FILE, "w", encoding="utf-8") as f:
                json.dump([], f, ensure_ascii=False, indent=2)
            self.send_response(200)
            self.send_header("Content-Type", "application/json")
            self.end_headers()
            self.wfile.write(json.dumps({"status": "cleared"}).encode("utf-8"))
            return

        self.send_response(404)
        self.end_headers()

    def _count_submissions(self):
        try:
            if os.path.exists(DATA_FILE):
                with open(DATA_FILE, "r", encoding="utf-8") as f:
                    return len(json.load(f))
        except Exception:
            pass
        return 0

def run():
    server_address = ("0.0.0.0", PORT)
    httpd = HTTPServer(server_address, QuestServerHandler)
    print(f"============================================================")
    print(f" 🚀 TECH ENGLISH QUEST SERVER RUNNING ON PORT {PORT}")
    print(f" 📂 Root: {BASE_DIR}")
    print(f" 🔑 Teacher Auth Key: {TEACHER_SECRET_KEY}")
    print(f" 💾 Submissions Store: {DATA_FILE}")
    print(f" ⚙️  Settings Store: {SETTINGS_FILE}")
    print(f"============================================================")
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nStopping server...")
        httpd.server_close()

if __name__ == "__main__":
    run()
