#!/bin/bash
# ==============================================================================
# S23 DEPLOY & CLOUDFLARE TUNNEL RUNNER - TECH ENGLISH QUEST
# Deploys code to S23 (Galaxy S23), starts Python server, and launches Cloudflare Tunnel.
# ==============================================================================

# Detect best connection method (Parents Wi-Fi, Home Wi-Fi, or Tailscale)
if ssh -o ConnectTimeout=1 -o BatchMode=yes -o StrictHostKeyChecking=no -p 8022 u0_a316@192.168.1.15 "exit 0" 2>/dev/null; then
    SSH_CMD="ssh -p 8022 -o StrictHostKeyChecking=no u0_a316@192.168.1.15"
    SCP_TARGET="scp -P 8022 -o StrictHostKeyChecking=no index.html style.css app.js quests_data.js server.py teacher.html teacher.js quest_settings.json u0_a316@192.168.1.15:~/english_quest/"
elif ssh -o ConnectTimeout=1 -o BatchMode=yes "s23-local" "exit 0" 2>/dev/null; then
    SSH_CMD="ssh s23-local"
    SCP_TARGET="scp index.html style.css app.js quests_data.js server.py teacher.html teacher.js quest_settings.json s23-local:~/english_quest/"
elif ssh -o ConnectTimeout=2 -o BatchMode=yes "s23" "exit 0" 2>/dev/null; then
    SSH_CMD="ssh s23"
    SCP_TARGET="scp index.html style.css app.js quests_data.js server.py teacher.html teacher.js quest_settings.json s23:~/english_quest/"
else
    echo "❌ Celular S23 não acessível via SSH (verifique Wi-Fi ou Tailscale)."
    exit 1
fi

echo "📲 Conectado com sucesso ao Samsung Galaxy S23 via SSH!"
echo "📂 Sincronizando arquivos da plataforma..."

$SSH_CMD "mkdir -p ~/english_quest"
eval "$SCP_TARGET >/dev/null 2>&1"

echo "⚡ Iniciando servidor backend e Túnel Cloudflare no S23..."

$SSH_CMD 'cat << "EOF" > ~/english_quest/run_tunnel.sh
#!/data/data/com.termux/files/usr/bin/bash
export PATH="/data/data/com.termux/files/usr/bin:$PATH"
termux-wake-lock 2>/dev/null
pkill -f "server.py 8099" 2>/dev/null
pkill -f "cloudflared.*8099" 2>/dev/null
sleep 1
cd /data/data/com.termux/files/home/english_quest
nohup python3 server.py 8099 >server.log 2>&1 &
nohup cloudflared tunnel --url http://127.0.0.1:8099 --no-autoupdate >tunnel.log 2>&1 &
EOF
chmod +x ~/english_quest/run_tunnel.sh
bash ~/english_quest/run_tunnel.sh
' >/dev/null 2>&1

echo "⏳ Aguardando registro do Túnel Cloudflare no S23..."
PUBLIC_URL=""
for i in {1..8}; do
    sleep 2
    PUBLIC_URL=$($SSH_CMD "export PATH=/data/data/com.termux/files/usr/bin:\$PATH; grep -oE 'https://[a-zA-Z0-9.-]+\.trycloudflare\.com' ~/english_quest/tunnel.log 2>/dev/null | tail -n 1")
    if [ -n "$PUBLIC_URL" ]; then
        break
    fi
done

TEACHER_KEY="prof_standup_access_2026"

if [ -n "$PUBLIC_URL" ]; then
    echo "======================================================================"
    echo " 🚀 PLATAFORMA ATIVA COM TÚNEL CLOUDFLARE (Acesso Mundial)"
    echo "======================================================================"
    echo " 🌐 LINK DO ALUNO (Envie este link):"
    echo "    $PUBLIC_URL"
    echo ""
    echo " 🔑 LINK SECRETO DO PROFESSOR (Apenas para você - protegido):"
    echo "    $PUBLIC_URL/teacher.html?auth=$TEACHER_KEY"
    echo ""
    echo " 🦎 Tailscale S23 (Backup): http://100.80.130.118:8099"
    echo "======================================================================"
    echo ""
    echo "💬 Mensagem pronta para enviar ao seu aluno via WhatsApp/Slack:"
    echo "----------------------------------------------------------------------"
    echo "Fala dev! Preparei este teste gamificado interativo em formato de Daily Standup para avaliarmos o seu inglês técnico:"
    echo "$PUBLIC_URL"
    echo "Basta acessar no navegador do celular ou computador e fazer a quest!"
    echo "----------------------------------------------------------------------"
else
    echo "⚠️ Túnel iniciado no S23. Verifique a URL com:"
    echo "$SSH_CMD 'cat ~/english_quest/tunnel.log'"
fi
