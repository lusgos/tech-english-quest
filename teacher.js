/**
 * TEACHER COMMAND CENTER LOGIC
 * Controls quest availability toggles, fetches student submissions, and calculates clinical teaching insights.
 */

const TEACHER_AUTH_KEY = new URLSearchParams(window.location.search).get("auth") || "prof_standup_access_2026";

class TeacherPortal {
  constructor() {
    this.questSettings = {};
    this.submissions = [];

    this.cacheDom();
    this.bindEvents();
    this.initStudentShareUrl();
    this.loadQuestSettings();
    this.loadSubmissions();
  }

  cacheDom() {
    this.studentShareUrl = document.getElementById("studentShareUrl");
    this.copyStudentLinkBtn = document.getElementById("copyStudentLinkBtn");
    this.questControlsGrid = document.getElementById("questControlsGrid");
    this.settingsSaveNotification = document.getElementById("settingsSaveNotification");

    this.teacherFocusTopic = document.getElementById("teacherFocusTopic");
    this.teacherFocusAdvice = document.getElementById("teacherFocusAdvice");
    this.totalSubmissionsCount = document.getElementById("totalSubmissionsCount");
    this.avgAccuracy = document.getElementById("avgAccuracy");
    this.topErrorType = document.getElementById("topErrorType");

    this.teacherSubmissionsList = document.getElementById("teacherSubmissionsList");
    this.refreshSubmissionsBtn = document.getElementById("refreshSubmissionsBtn");
    this.clearSubmissionsBtn = document.getElementById("clearSubmissionsBtn");

    this.submissionDetailDrawer = document.getElementById("submissionDetailDrawer");
    this.detailStudentTitle = document.getElementById("detailStudentTitle");
    this.detailDrawerBody = document.getElementById("detailDrawerBody");
    this.closeDetailDrawerBtn = document.getElementById("closeDetailDrawerBtn");
  }

  bindEvents() {
    this.copyStudentLinkBtn.addEventListener("click", () => this.copyStudentShareLink());
    this.refreshSubmissionsBtn.addEventListener("click", () => this.loadSubmissions());
    this.clearSubmissionsBtn.addEventListener("click", () => this.clearSubmissions());
    this.closeDetailDrawerBtn.addEventListener("click", () => {
      this.submissionDetailDrawer.classList.add("hidden");
    });
  }

  initStudentShareUrl() {
    const studentUrl = `${window.location.origin}/`;
    this.studentShareUrl.textContent = studentUrl;
  }

  copyStudentShareLink() {
    const studentUrl = `${window.location.origin}/`;
    const message = `Hey! I prepared this interactive Daily Standup challenge to test your technical English:\n${studentUrl}\nOpen it on your desktop or mobile browser and complete the quest!`;

    navigator.clipboard.writeText(message).then(() => {
      const orig = this.copyStudentLinkBtn.querySelector("span").textContent;
      this.copyStudentLinkBtn.querySelector("span").textContent = "Link & Message Copied! ✔";
      setTimeout(() => {
        this.copyStudentLinkBtn.querySelector("span").textContent = orig;
      }, 2500);
    }).catch(() => {
      alert(`Student Link:\n${studentUrl}`);
    });
  }

  // ==========================================================================
  // 1. QUEST PERMISSIONS / ACCESS CONTROL
  // ==========================================================================

  loadQuestSettings() {
    fetch("/api/quest-settings")
      .then(res => res.json())
      .then(settings => {
        this.questSettings = settings || {};
        this.renderQuestToggles();
      })
      .catch(err => {
        console.warn("Could not load quest settings, using defaults:", err);
        this.questSettings = { "simple-past": true, "simple-past-101": true, "present-simple-continuous": false, "in-on-at-prepositions": true, "to-vs-for-prepositions": true, "tech-reading-stress": true };
        this.renderQuestToggles();
      });
  }

  renderQuestToggles() {
    this.questControlsGrid.innerHTML = "";

    QUESTS_CATALOG.forEach(quest => {
      const isEnabled = this.questSettings[quest.id] !== false; // Default true if unspecified

      const card = document.createElement("div");
      card.className = `quest-toggle-card ${isEnabled ? "active" : "locked"}`;
      card.id = `card-toggle-${quest.id}`;

      card.innerHTML = `
        <div class="toggle-header">
          <span class="toggle-title">${quest.icon} ${quest.title}</span>
          <label class="switch" title="Toggle student access">
            <input type="checkbox" id="checkbox-${quest.id}" ${isEnabled ? "checked" : ""}>
            <span class="slider"></span>
          </label>
        </div>
        <span class="toggle-status-tag ${isEnabled ? "active" : "locked"}" id="tag-${quest.id}">
          ${isEnabled ? "🟢 UNLOCKED (Student can access)" : "🔒 LOCKED (Unavailable to student)"}
        </span>
        <p class="toggle-desc">${quest.description}</p>
      `;

      const input = card.querySelector(`#checkbox-${quest.id}`);
      input.addEventListener("change", (e) => {
        this.toggleQuestAccess(quest.id, e.target.checked);
      });

      this.questControlsGrid.appendChild(card);
    });
  }

  toggleQuestAccess(questId, enabled) {
    this.questSettings[questId] = enabled;

    const card = document.getElementById(`card-toggle-${questId}`);
    const tag = document.getElementById(`tag-${questId}`);

    if (enabled) {
      card.classList.remove("locked");
      card.classList.add("active");
      tag.className = "toggle-status-tag active";
      tag.textContent = "🟢 UNLOCKED (Student can access)";
    } else {
      card.classList.remove("active");
      card.classList.add("locked");
      tag.className = "toggle-status-tag locked";
      tag.textContent = "🔒 LOCKED (Unavailable to student)";
    }

    // Persist to server
    fetch(`/api/quest-settings?auth=${encodeURIComponent(TEACHER_AUTH_KEY)}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${TEACHER_AUTH_KEY}`
      },
      body: JSON.stringify(this.questSettings)
    })
      .then(res => res.json())
      .then(() => {
        this.showSavedPill();
      })
      .catch(err => {
        console.error("Failed to save quest settings to server:", err);
        // Fallback to local storage
        localStorage.setItem("standup_quest_settings", JSON.stringify(this.questSettings));
        this.showSavedPill();
      });
  }

  showSavedPill() {
    this.settingsSaveNotification.classList.add("show");
    setTimeout(() => {
      this.settingsSaveNotification.classList.remove("show");
    }, 2000);
  }

  // ==========================================================================
  // 2. SUBMISSIONS FETCHING & CLINICAL DIAGNOSTICS
  // ==========================================================================

  loadSubmissions() {
    fetch(`/api/submissions?auth=${encodeURIComponent(TEACHER_AUTH_KEY)}`)
      .then(res => res.json())
      .then(data => {
        this.submissions = Array.isArray(data) ? data : [];
        this.computeInsights();
        this.renderSubmissions();
      })
      .catch(err => {
        console.warn("Could not fetch remote submissions, reading localStorage:", err);
        const local = localStorage.getItem("standup_quest_submissions");
        this.submissions = local ? JSON.parse(local) : [];
        this.computeInsights();
        this.renderSubmissions();
      });
  }

  computeInsights() {
    const total = this.submissions.length;
    this.totalSubmissionsCount.textContent = total;

    if (total === 0) {
      this.avgAccuracy.textContent = "0%";
      this.topErrorType.textContent = "-";
      this.teacherFocusTopic.textContent = "No Submissions Yet";
      this.teacherFocusAdvice.textContent = "Share the link with your student. Once they finish the quest, clinical insights and blind spots will appear here.";
      return;
    }

    // Calculate Average Accuracy
    const totalAcc = this.submissions.reduce((acc, cur) => acc + (cur.accuracy || 0), 0);
    const avg = Math.round(totalAcc / total);
    this.avgAccuracy.textContent = `${avg}%`;

    // Map error patterns
    const errorCounts = {};
    this.submissions.forEach(sub => {
      if (Array.isArray(sub.userAnswers)) {
        sub.userAnswers.forEach(ans => {
          if (!ans.isCorrect && ans.errorLabel) {
            errorCounts[ans.errorLabel] = (errorCounts[ans.errorLabel] || 0) + 1;
          }
        });
      }
    });

    let topError = "-";
    let maxCount = 0;
    for (const [errLabel, count] of Object.entries(errorCounts)) {
      if (count > maxCount) {
        maxCount = count;
        topError = errLabel;
      }
    }

    this.topErrorType.textContent = topError !== "-" ? `${topError} (${maxCount}x)` : "None detected";

    // Build pedagogical action plan
    if (topError !== "-" && maxCount > 0) {
      this.teacherFocusTopic.textContent = `Priority Focus: ${topError}`;

      if (topError.toLowerCase().includes("duplo passado") || topError.toLowerCase().includes("double past")) {
        this.teacherFocusAdvice.innerHTML = `The student repeatedly triggered the <strong>double past</strong> trap (${maxCount}x).<br>👉 <strong>Recommendation for next class:</strong> Run a rapid-fire drill on the rule: <em>"Auxiliary DID/DIDN'T absorbs past tense from the main verb"</em> (e.g. <em>didn't push</em>, never <em>didn't pushed</em>).`;
      } else if (topError.toLowerCase().includes("irregular")) {
        this.teacherFocusAdvice.innerHTML = `The student attempted to append -ed to fundamental irregular verbs (${maxCount}x).<br>👉 <strong>Recommendation:</strong> Drill the top 10 tech irregular verbs (write➔wrote, run➔ran, have➔had, find➔found).`;
      } else if (topError.toLowerCase().includes("to be")) {
        this.teacherFocusAdvice.innerHTML = `The student confused verb To Be with action verbs (${maxCount}x).<br>👉 <strong>Recommendation:</strong> Reinforce separation: <em>Was/Were</em> never use auxiliary <em>Did</em>.`;
      } else {
        this.teacherFocusAdvice.innerHTML = `Detected ${maxCount} errors of type <em>${topError}</em>. Focus on a quick recap of this concept at the start of your next class.`;
      }
    } else {
      this.teacherFocusTopic.textContent = "Excellent Overall Mastery";
      this.teacherFocusAdvice.textContent = "The student demonstrated high precision with no recurring error patterns. Ready to advance to continuous tenses and Present Perfect.";
    }
  }

  renderSubmissions() {
    if (!this.submissions || this.submissions.length === 0) {
      this.teacherSubmissionsList.innerHTML = `<div class="empty-state">No quests have been completed yet. Share the link with your student!</div>`;
      return;
    }

    this.teacherSubmissionsList.innerHTML = "";
    this.submissions.forEach(sub => {
      const row = document.createElement("div");
      row.className = "submission-row";

      const timeStr = sub.timestamp ? new Date(sub.timestamp).toLocaleString("en-US", { dateStyle: "short", timeStyle: "short" }) : "Today";

      row.innerHTML = `
        <div class="sub-col-student">
          <span class="sub-name">👤 ${sub.studentName || "Student"}</span>
          <span class="sub-time">${timeStr} • ${sub.questTitle || "Simple Past"}</span>
        </div>
        <div class="sub-col-score">
          <span class="sub-acc-pill ${sub.isWin ? "win" : "loss"}">${sub.scoreRatio} (${sub.accuracy}%)</span>
          <span class="sub-verdict">${sub.verdict}</span>
          <span style="font-size:0.75rem;color:var(--cyan-neon);font-weight:700;">🔍 Inspect</span>
        </div>
      `;

      row.addEventListener("click", () => this.showSubmissionDetail(sub));
      this.teacherSubmissionsList.appendChild(row);
    });
  }

  showSubmissionDetail(sub) {
    this.detailStudentTitle.textContent = `📋 Answer Audit: ${sub.studentName} — ${sub.questTitle} (${sub.scoreRatio} correct • ${sub.verdict})`;
    this.detailDrawerBody.innerHTML = "";

    (sub.userAnswers || []).forEach(ans => {
      const item = document.createElement("div");
      item.className = `audit-item ${ans.isCorrect ? "correct" : "wrong"}`;
      item.innerHTML = `
        <div class="audit-item-top">
          <span class="audit-item-title">Level ${ans.level} • ${ans.categoryLabel}</span>
          <span class="audit-item-badge">${ans.isCorrect ? "✔ CORRECT" : "✖ INCORRECT"}</span>
        </div>
        <div class="audit-item-context">"${ans.context.replace('<span class="blank-slot">________</span>', '<u>' + ans.chosenText + '</u>')}"</div>
        <div class="audit-item-answers">
          <span>Student selected: <strong>${ans.chosenText}</strong></span>
          ${!ans.isCorrect ? `<span>Correct: <strong style="color:var(--green-neon);">${ans.correctText}</strong></span>` : ""}
        </div>
        ${!ans.isCorrect && ans.errorLabel ? `<div style="color:var(--red-neon);font-size:0.8rem;font-weight:700;margin-top:2px;">⚠️ ${ans.errorLabel}: ${ans.diagnosticNote}</div>` : ""}
      `;
      this.detailDrawerBody.appendChild(item);
    });

    this.submissionDetailDrawer.classList.remove("hidden");
    this.submissionDetailDrawer.scrollIntoView({ behavior: "smooth" });
  }

  clearSubmissions() {
    if (!confirm("Are you sure you want to delete all student test history?")) return;

    fetch(`/api/submissions?auth=${encodeURIComponent(TEACHER_AUTH_KEY)}`, {
      method: "DELETE",
      headers: { "Authorization": `Bearer ${TEACHER_AUTH_KEY}` }
    })
      .then(() => {
        localStorage.removeItem("standup_quest_submissions");
        this.submissions = [];
        this.renderSubmissions();
        this.computeInsights();
      })
      .catch(err => alert("Error clearing data: " + err));
  }
}

document.addEventListener("DOMContentLoaded", () => {
  window.teacherPortal = new TeacherPortal();
});
