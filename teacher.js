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
    const message = `Fala dev! Preparei este teste gamificado interativo em formato de Daily Standup para avaliarmos o seu inglês técnico:\n${studentUrl}\nBasta acessar no navegador do celular ou computador e fazer a quest!`;

    navigator.clipboard.writeText(message).then(() => {
      const orig = this.copyStudentLinkBtn.querySelector("span").textContent;
      this.copyStudentLinkBtn.querySelector("span").textContent = "Link & Mensagem Copiados! ✔";
      setTimeout(() => {
        this.copyStudentLinkBtn.querySelector("span").textContent = orig;
      }, 2500);
    }).catch(() => {
      alert(`Link do Aluno:\n${studentUrl}`);
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
        this.questSettings = { "simple-past": true, "present-simple-continuous": false };
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
          <label class="switch" title="Ativar ou desativar acesso para os alunos">
            <input type="checkbox" id="checkbox-${quest.id}" ${isEnabled ? "checked" : ""}>
            <span class="slider"></span>
          </label>
        </div>
        <span class="toggle-status-tag ${isEnabled ? "active" : "locked"}" id="tag-${quest.id}">
          ${isEnabled ? "🟢 LIBERADO (Aluno pode fazer)" : "🔒 BLOQUEADO (Indisponível para o aluno)"}
        </span>
        <p class="toggle-desc">${quest.description}</p>
      `;

      const checkbox = card.querySelector(`#checkbox-${quest.id}`);
      checkbox.addEventListener("change", (e) => {
        this.handleQuestToggle(quest.id, e.target.checked);
      });

      this.questControlsGrid.appendChild(card);
    });
  }

  handleQuestToggle(questId, isChecked) {
    this.questSettings[questId] = isChecked;

    // Update UI card dynamically
    const card = document.getElementById(`card-toggle-${questId}`);
    const tag = document.getElementById(`tag-${questId}`);

    if (card && tag) {
      if (isChecked) {
        card.className = "quest-toggle-card active";
        tag.className = "toggle-status-tag active";
        tag.textContent = "🟢 LIBERADO (Aluno pode fazer)";
      } else {
        card.className = "quest-toggle-card locked";
        tag.className = "toggle-status-tag locked";
        tag.textContent = "🔒 BLOQUEADO (Indisponível para o aluno)";
      }
    }

    // Save to server
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
        this.showSaveNotification();
      })
      .catch(err => {
        console.error("Failed to save quest settings on server:", err);
      });
  }

  showSaveNotification() {
    this.settingsSaveNotification.style.display = "inline-block";
    setTimeout(() => {
      this.settingsSaveNotification.style.display = "none";
    }, 2000);
  }

  // ==========================================================================
  // 2. SUBMISSIONS & CLINICAL INSIGHTS
  // ==========================================================================

  loadSubmissions() {
    fetch(`/api/submissions?auth=${encodeURIComponent(TEACHER_AUTH_KEY)}`, {
      headers: { "Authorization": `Bearer ${TEACHER_AUTH_KEY}` }
    })
      .then(res => {
        if (!res.ok) throw new Error("Unauthorized or server error");
        return res.json();
      })
      .then(submissions => {
        this.submissions = submissions || [];
        this.renderSubmissions();
        this.computeInsights();
      })
      .catch(err => {
        console.warn("Could not fetch submissions from server:", err);
        const localList = JSON.parse(localStorage.getItem("standup_quest_submissions") || "[]");
        this.submissions = localList;
        this.renderSubmissions();
        this.computeInsights();
      });
  }

  computeInsights() {
    this.totalSubmissionsCount.textContent = this.submissions.length;

    if (!this.submissions || this.submissions.length === 0) {
      this.avgAccuracy.textContent = "0%";
      this.topErrorType.textContent = "-";
      this.teacherFocusTopic.textContent = "Nenhum teste realizado ainda";
      this.teacherFocusAdvice.textContent = "Compartilhe o link com o aluno. Assim que ele finalizar o teste, os insights clínicos e pontos cegos aparecerão aqui.";
      return;
    }

    const totalAccuracy = this.submissions.reduce((acc, s) => acc + (s.accuracy || 0), 0);
    const avgAcc = Math.round(totalAccuracy / this.submissions.length);
    this.avgAccuracy.textContent = `${avgAcc}%`;

    const errorCounts = {};
    this.submissions.forEach(sub => {
      (sub.userAnswers || []).forEach(ans => {
        if (!ans.isCorrect && ans.errorLabel) {
          errorCounts[ans.errorLabel] = (errorCounts[ans.errorLabel] || 0) + 1;
        }
      });
    });

    let topError = "-";
    let maxCount = 0;
    Object.keys(errorCounts).forEach(label => {
      if (errorCounts[label] > maxCount) {
        maxCount = errorCounts[label];
        topError = label;
      }
    });

    this.topErrorType.textContent = topError.length > 20 ? topError.substring(0, 18) + "..." : topError;

    if (maxCount > 0) {
      this.teacherFocusTopic.textContent = `Atenção Prioritária: ${topError}`;
      if (topError.toLowerCase().includes("duplo passado")) {
        this.teacherFocusAdvice.innerHTML = `O estudante repetiu a armadilha do <strong>duplo passado</strong> (${maxCount}x).<br>👉 <strong>Recomendação para a próxima aula:</strong> Fazer um drill prático focado na regra: <em>"O auxiliar DID/DIDN'T rouba o passado do verbo principal"</em> (ex: <em>didn't push</em>, nunca <em>didn't pushed</em>).`;
      } else if (topError.toLowerCase().includes("irregular")) {
        this.teacherFocusAdvice.innerHTML = `O estudante tentou aplicar -ed em verbos irregulares fundamentais (${maxCount}x).<br>👉 <strong>Recomendação:</strong> Praticar a lista essencial dos 10 verbos irregulares de TI (write➔wrote, run➔ran, have➔had, find➔found).`;
      } else if (topError.toLowerCase().includes("to be")) {
        this.teacherFocusAdvice.innerHTML = `O estudante confunde o verbo To Be com verbos de ação (${maxCount}x).<br>👉 <strong>Recomendação:</strong> Reforçar a separação: <em>Was/Were</em> nunca usam <em>Did</em>.`;
      } else {
        this.teacherFocusAdvice.innerHTML = `Foram detectados ${maxCount} erros do tipo <em>${topError}</em>. Foco em revisão pontual deste tópico no início do próximo encontro.`;
      }
    } else {
      this.teacherFocusTopic.textContent = "Excelente Domínio Geral";
      this.teacherFocusAdvice.textContent = "O estudante atingiu alta precisão sem erros recorrentes. Pode avançar para tempos contínuos e Present Perfect.";
    }
  }

  renderSubmissions() {
    if (!this.submissions || this.submissions.length === 0) {
      this.teacherSubmissionsList.innerHTML = `<div class="empty-state">Nenhum teste foi realizado ainda. Compartilhe o link com o aluno!</div>`;
      return;
    }

    this.teacherSubmissionsList.innerHTML = "";
    this.submissions.forEach(sub => {
      const row = document.createElement("div");
      row.className = "submission-row";

      const timeStr = sub.timestamp ? new Date(sub.timestamp).toLocaleString("pt-BR", { dateStyle: "short", timeStyle: "short" }) : "Hoje";

      row.innerHTML = `
        <div class="sub-col-student">
          <span class="sub-name">👤 ${sub.studentName || "Aluno"}</span>
          <span class="sub-time">${timeStr} • ${sub.questTitle || "Simple Past"}</span>
        </div>
        <div class="sub-col-score">
          <span class="sub-acc-pill ${sub.isWin ? "win" : "loss"}">${sub.scoreRatio} (${sub.accuracy}%)</span>
          <span class="sub-verdict">${sub.verdict}</span>
          <span style="font-size:0.75rem;color:var(--cyan-neon);font-weight:700;">🔍 Inspecionar</span>
        </div>
      `;

      row.addEventListener("click", () => this.showSubmissionDetail(sub));
      this.teacherSubmissionsList.appendChild(row);
    });
  }

  showSubmissionDetail(sub) {
    this.detailStudentTitle.textContent = `📋 Auditoria de Respostas: ${sub.studentName} — ${sub.questTitle} (${sub.scoreRatio} acertos • ${sub.verdict})`;
    this.detailDrawerBody.innerHTML = "";

    (sub.userAnswers || []).forEach(ans => {
      const item = document.createElement("div");
      item.className = `audit-item ${ans.isCorrect ? "correct" : "wrong"}`;
      item.innerHTML = `
        <div class="audit-item-top">
          <span class="audit-item-title">Nível ${ans.level} • ${ans.categoryLabel}</span>
          <span class="audit-item-badge">${ans.isCorrect ? "✔ ACERTO" : "✖ ERRO"}</span>
        </div>
        <div class="audit-item-context">"${ans.context.replace('<span class="blank-slot">________</span>', '<u>' + ans.chosenText + '</u>')}"</div>
        <div class="audit-item-answers">
          <span>Aluno marcou: <strong>${ans.chosenText}</strong></span>
          ${!ans.isCorrect ? `<span>Correto: <strong style="color:var(--green-neon);">${ans.correctText}</strong></span>` : ""}
        </div>
        ${!ans.isCorrect && ans.errorLabel ? `<div style="color:var(--red-neon);font-size:0.8rem;font-weight:700;margin-top:2px;">⚠️ ${ans.errorLabel}: ${ans.diagnosticNote}</div>` : ""}
      `;
      this.detailDrawerBody.appendChild(item);
    });

    this.submissionDetailDrawer.classList.remove("hidden");
    this.submissionDetailDrawer.scrollIntoView({ behavior: "smooth" });
  }

  clearSubmissions() {
    if (!confirm("Tem certeza que deseja apagar todo o histórico de testes dos alunos?")) return;

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
      .catch(err => alert("Erro ao limpar dados: " + err));
  }
}

document.addEventListener("DOMContentLoaded", () => {
  window.teacherPortal = new TeacherPortal();
});
