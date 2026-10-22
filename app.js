/**
 * TECH DAILY STANDUP QUEST - STUDENT APPLICATION ENGINE
 * Handles multi-quest gameplay, dynamic quest availability (controlled by teacher),
 * fine-grained diagnostic error reporting, and background sync to server.
 */

// ==========================================================================
// 1. PROCEDURAL SOUND SYNTHESIZER (WEB AUDIO API)
// ==========================================================================

class SoundEngine {
  constructor() {
    this.ctx = null;
    this.isMuted = localStorage.getItem("standup_quest_muted") === "true";
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume();
    }
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    localStorage.setItem("standup_quest_muted", this.isMuted);
    return this.isMuted;
  }

  playSuccess() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    const notes = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6

    notes.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, now + idx * 0.07);

      gain.gain.setValueAtTime(0, now + idx * 0.07);
      gain.gain.linearRampToValueAtTime(0.18, now + idx * 0.07 + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.07 + 0.25);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now + idx * 0.07);
      osc.stop(now + idx * 0.07 + 0.28);
    });
  }

  playError() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = "sawtooth";
    osc.frequency.setValueAtTime(160, now);
    osc.frequency.exponentialRampToValueAtTime(90, now + 0.35);

    gain.gain.setValueAtTime(0.2, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + 0.36);
  }

  playDamage() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = "triangle";
    osc.frequency.setValueAtTime(80, now);
    osc.frequency.exponentialRampToValueAtTime(30, now + 0.4);

    gain.gain.setValueAtTime(0.35, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + 0.42);
  }

  playClick() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(880, now);

    gain.gain.setValueAtTime(0.08, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + 0.06);
  }

  playVictory() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    const fanNotes = [392, 523.25, 659.25, 783.99, 1046.5];

    fanNotes.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = "triangle";
      osc.frequency.setValueAtTime(freq, now + idx * 0.1);

      gain.gain.setValueAtTime(0, now + idx * 0.1);
      gain.gain.linearRampToValueAtTime(0.25, now + idx * 0.1 + 0.03);
      gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.1 + 0.6);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now + idx * 0.1);
      osc.stop(now + idx * 0.1 + 0.65);
    });
  }

  playGameOver() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    const notes = [220, 196, 174.6, 146.8];

    notes.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(freq, now + idx * 0.18);

      gain.gain.setValueAtTime(0.18, now + idx * 0.18);
      gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.18 + 0.3);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now + idx * 0.18);
      osc.stop(now + idx * 0.18 + 0.35);
    });
  }
}

// ==========================================================================
// 2. MAIN APPLICATION STATE & LOGIC
// ==========================================================================

class QuestApp {
  constructor() {
    this.sound = new SoundEngine();
    this.activeQuest = QUESTS_CATALOG[0]; // Default to Simple Past
    this.studentName = localStorage.getItem("standup_quest_student_name") || "Lucas";
    this.questSettings = {}; // loaded from server
    this.currentIndex = 0;
    this.xp = 0;
    this.streak = 0;
    this.maxStreak = 0;
    this.lives = 3;
    this.maxLives = 3;
    this.isAnswering = false;
    this.hasAnswered = false;
    this.userAnswers = [];
    this.startTime = null;
    this.currentSlide = 1;
    this.totalSlides = 6;

    this.cacheDom();
    this.bindEvents();
    this.updateSoundIcon();
    this.updateStudentName(this.studentName);
    this.fetchQuestSettingsAndRender();
  }

  cacheDom() {
    // Top HUD
    this.hudHomeBtn = document.getElementById("hudHomeBtn");
    this.hudActiveQuestBadge = document.getElementById("hudActiveQuestBadge");
    this.hudStudentName = document.getElementById("hudStudentName");
    this.hudLevelTitle = document.getElementById("hudLevelTitle");
    this.hudTicket = document.getElementById("hudTicket");
    this.progressBarFill = document.getElementById("progressBarFill");
    this.progressMilestones = document.getElementById("progressMilestones");
    this.xpCounter = document.getElementById("xpCounter");
    this.xpFloat = document.getElementById("xpFloat");
    this.streakCounter = document.getElementById("streakCounter");
    this.streakPill = document.getElementById("streakPill");
    this.hearts = document.querySelectorAll(".hearts-wrapper .heart");
    this.soundToggleBtn = document.getElementById("soundToggleBtn");
    this.soundIcon = document.getElementById("soundIcon");
    this.menuToggleBtn = document.getElementById("menuToggleBtn");
    this.cheatSheetBtn = document.getElementById("cheatSheetBtn");
    this.studyDeckBtn = document.getElementById("studyDeckBtn");

    // Screens
    this.catalogScreen = document.getElementById("catalogScreen");
    this.introScreen = document.getElementById("introScreen");
    this.gameScreen = document.getElementById("gameScreen");
    this.resultScreen = document.getElementById("resultScreen");

    // Catalog Screen
    this.studentNameInput = document.getElementById("studentNameInput");
    this.questsCatalogGrid = document.getElementById("questsCatalogGrid");
    this.openSlidesBannerBtn = document.getElementById("openSlidesBannerBtn");

    // Intro Screen
    this.introQuestBadge = document.getElementById("introQuestBadge");
    this.introQuestTitle = document.getElementById("introQuestTitle");
    this.introQuestDesc = document.getElementById("introQuestDesc");
    this.introTotalQ = document.getElementById("introTotalQ");
    this.introSkillsSummary = document.getElementById("introSkillsSummary");
    this.introWindowFile = document.getElementById("introWindowFile");
    this.startQuestBtn = document.getElementById("startQuestBtn");
    this.backToCatalogBtn = document.getElementById("backToCatalogBtn");

    // Game Screen
    this.ticketFilename = document.getElementById("ticketFilename");
    this.categoryBadge = document.getElementById("categoryBadge");
    this.difficultyTag = document.getElementById("difficultyTag");
    this.speakerRole = document.getElementById("speakerRole");
    this.speakerName = document.getElementById("speakerName");
    this.scrumPromptText = document.getElementById("scrumPromptText");
    this.questionSentence = document.getElementById("questionSentence");
    this.questionSubtext = document.getElementById("questionSubtext");
    this.optionsGrid = document.getElementById("optionsGrid");

    // Feedback Drawer
    this.feedbackDrawer = document.getElementById("feedbackDrawer");
    this.feedbackStatusBadge = document.getElementById("feedbackStatusBadge");
    this.feedbackStatusIcon = document.getElementById("feedbackStatusIcon");
    this.feedbackStatusTitle = document.getElementById("feedbackStatusTitle");
    this.feedbackXpGain = document.getElementById("feedbackXpGain");
    this.feedbackDiagnosticBanner = document.getElementById("feedbackDiagnosticBanner");
    this.errorDiagLabel = document.getElementById("errorDiagLabel");
    this.errorDiagDesc = document.getElementById("errorDiagDesc");
    this.feedbackRuleText = document.getElementById("feedbackRuleText");
    this.nextQuestionBtn = document.getElementById("nextQuestionBtn");
    this.nextBtnText = document.getElementById("nextBtnText");

    // Result Screen
    this.resultWindowTag = document.getElementById("resultWindowTag");
    this.verdictBanner = document.getElementById("verdictBanner");
    this.verdictIcon = document.getElementById("verdictIcon");
    this.verdictTitle = document.getElementById("verdictTitle");
    this.verdictDescription = document.getElementById("verdictDescription");
    this.serverSyncStatus = document.getElementById("serverSyncStatus");
    this.syncStatusText = document.getElementById("syncStatusText");
    this.resultFinalXp = document.getElementById("resultFinalXp");
    this.resultBonusSub = document.getElementById("resultBonusSub");
    this.resultAccuracy = document.getElementById("resultAccuracy");
    this.resultScoreRatio = document.getElementById("resultScoreRatio");
    this.resultLivesLeft = document.getElementById("resultLivesLeft");
    this.resultLivesSub = document.getElementById("resultLivesSub");
    this.resultSprintStatus = document.getElementById("resultSprintStatus");
    this.areaMetersGrid = document.getElementById("areaMetersGrid");
    this.auditList = document.getElementById("auditList");
    this.auditToggleBtn = document.getElementById("auditToggleBtn");
    this.auditArrow = document.getElementById("auditArrow");
    this.restartQuestBtn = document.getElementById("restartQuestBtn");
    this.returnCatalogBtn = document.getElementById("returnCatalogBtn");
    this.copyReportBtn = document.getElementById("copyReportBtn");
    this.copyBtnText = document.getElementById("copyBtnText");

    // Cheat Sheet Modal
    this.cheatSheetModal = document.getElementById("cheatSheetModal");
    this.closeCheatSheetBtn = document.getElementById("closeCheatSheetBtn");

    // Slide Deck Modal
    this.studyDeckModal = document.getElementById("studyDeckModal");
    this.closeStudyDeckBtn = document.getElementById("closeStudyDeckBtn");
    this.prevSlideBtn = document.getElementById("prevSlideBtn");
    this.nextSlideBtn = document.getElementById("nextSlideBtn");
    this.slideDotsContainer = document.getElementById("slideDotsContainer");
    this.currentSlideNum = document.getElementById("currentSlideNum");
    this.slideFullscreenBtn = document.getElementById("slideFullscreenBtn");
    this.startQuestFromSlidesBtn = document.getElementById("startQuestFromSlidesBtn");
    this.slideDeckCard = document.querySelector(".slide-deck-card");
    this.slidePages = document.querySelectorAll(".slide-page");
    this.slideDots = document.querySelectorAll(".slide-dot");
  }

  bindEvents() {
    this.hudHomeBtn.addEventListener("click", () => this.showScreen("catalog"));
    this.menuToggleBtn.addEventListener("click", () => this.showScreen("catalog"));
    this.backToCatalogBtn.addEventListener("click", () => this.showScreen("catalog"));
    this.returnCatalogBtn.addEventListener("click", () => this.showScreen("catalog"));

    this.studentNameInput.addEventListener("input", (e) => {
      this.updateStudentName(e.target.value.trim() || "Lucas");
    });

    this.startQuestBtn.addEventListener("click", () => {
      this.sound.playClick();
      this.startCurrentQuest();
    });

    this.nextQuestionBtn.addEventListener("click", () => {
      this.sound.playClick();
      this.advanceStep();
    });

    this.restartQuestBtn.addEventListener("click", () => {
      this.sound.playClick();
      this.startCurrentQuest();
    });

    this.copyReportBtn.addEventListener("click", () => {
      this.copyDiagnosticReport();
    });

    this.soundToggleBtn.addEventListener("click", () => {
      const isMuted = this.sound.toggleMute();
      this.updateSoundIcon();
      if (!isMuted) this.sound.playClick();
    });

    this.cheatSheetBtn.addEventListener("click", () => {
      this.sound.playClick();
      this.cheatSheetModal.classList.remove("hidden");
    });

    this.closeCheatSheetBtn.addEventListener("click", () => {
      this.cheatSheetModal.classList.add("hidden");
    });

    // Slide Deck Events
    if (this.studyDeckBtn) {
      this.studyDeckBtn.addEventListener("click", () => this.openStudyDeck());
    }

    if (this.openSlidesBannerBtn) {
      this.openSlidesBannerBtn.addEventListener("click", () => this.openStudyDeck());
    }

    const openSlidesFromCheatSheet = document.getElementById("openSlidesFromCheatSheetBtn");
    if (openSlidesFromCheatSheet) {
      openSlidesFromCheatSheet.addEventListener("click", () => {
        this.cheatSheetModal.classList.add("hidden");
        this.openStudyDeck();
      });
    }

    if (this.closeStudyDeckBtn) {
      this.closeStudyDeckBtn.addEventListener("click", () => this.closeStudyDeck());
    }

    if (this.prevSlideBtn) {
      this.prevSlideBtn.addEventListener("click", () => this.navigateSlide(-1));
    }

    if (this.nextSlideBtn) {
      this.nextSlideBtn.addEventListener("click", () => this.navigateSlide(1));
    }

    if (this.slideDotsContainer) {
      this.slideDotsContainer.addEventListener("click", (e) => {
        const dot = e.target.closest(".slide-dot");
        if (dot) {
          const idx = parseInt(dot.getAttribute("data-index"), 10);
          if (!isNaN(idx)) this.goToSlide(idx);
        }
      });
    }

    if (this.slideFullscreenBtn) {
      this.slideFullscreenBtn.addEventListener("click", () => {
        if (this.slideDeckCard) {
          this.slideDeckCard.classList.toggle("fullscreen-mode");
        }
      });
    }

    if (this.startQuestFromSlidesBtn) {
      this.startQuestFromSlidesBtn.addEventListener("click", () => {
        this.closeStudyDeck();
        const prepQuest = QUESTS_CATALOG.find((q) => q.id === "in-on-at-prepositions");
        if (prepQuest) {
          this.selectQuest(prepQuest);
          this.startCurrentQuest();
        }
      });
    }

    // Interactive Ticket Reveal Buttons in Slide 5
    document.querySelectorAll(".ticket-reveal-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const targetId = btn.getAttribute("data-target");
        const sol = document.getElementById(targetId);
        if (sol) {
          sol.classList.toggle("hidden");
          btn.textContent = sol.classList.contains("hidden") ? "🐛 Revelar Debug" : "Ocultar Fix";
          this.sound.playClick();
        }
      });
    });

    // Interactive Pyramid Tiers in Slide 1
    document.querySelectorAll(".pyramid-tier").forEach((tier) => {
      tier.addEventListener("click", () => {
        this.sound.playClick();
      });
    });

    this.auditToggleBtn.addEventListener("click", () => {
      this.auditToggleBtn.classList.toggle("collapsed");
      this.auditList.classList.toggle("hidden");
    });

    window.addEventListener("keydown", (e) => this.handleKeyboard(e));
  }

  updateStudentName(name) {
    this.studentName = name;
    localStorage.setItem("standup_quest_student_name", name);
    this.hudStudentName.textContent = name;
  }

  updateSoundIcon() {
    this.soundIcon.textContent = this.sound.isMuted ? "🔇" : "🔊";
  }

  showScreen(screen) {
    this.catalogScreen.classList.add("hidden");
    this.introScreen.classList.add("hidden");
    this.gameScreen.classList.add("hidden");
    this.resultScreen.classList.add("hidden");

    if (screen === "catalog") {
      this.catalogScreen.classList.remove("hidden");
      this.fetchQuestSettingsAndRender();
    } else if (screen === "intro") {
      this.introScreen.classList.remove("hidden");
    } else if (screen === "game") {
      this.gameScreen.classList.remove("hidden");
    } else if (screen === "result") {
      this.resultScreen.classList.remove("hidden");
    }
  }

  // ==========================================================================
  // 3. CATALOG & TEACHER PERMISSIONS
  // ==========================================================================

  fetchQuestSettingsAndRender() {
    fetch("/api/quest-settings")
      .then(res => res.json())
      .then(settings => {
        this.questSettings = settings || {};
        this.renderCatalog();
      })
      .catch(err => {
        console.warn("Could not fetch quest settings:", err);
        this.questSettings = { "simple-past": true, "present-simple-continuous": false };
        this.renderCatalog();
      });
  }

  renderCatalog() {
    this.questsCatalogGrid.innerHTML = "";
    this.studentNameInput.value = this.studentName;

    QUESTS_CATALOG.forEach((quest) => {
      const isEnabled = this.questSettings[quest.id] !== false; // if teacher sets false, it's locked

      const card = document.createElement("div");
      card.className = `quest-item-card ${isEnabled ? (quest.id === this.activeQuest.id ? "active-quest" : "") : "locked-quest"}`;

      card.innerHTML = `
        <div class="quest-card-top">
          <div class="quest-icon-badge">${quest.icon}</div>
          <div style="display: flex; gap: 6px; align-items: center;">
            ${!isEnabled ? '<span class="quest-locked-tag">🔒 INDISPONÍVEL</span>' : ""}
            <span class="quest-level-badge">${quest.level}</span>
          </div>
        </div>
        <div class="quest-card-meta">
          <h3 class="quest-card-title">${quest.title}</h3>
          <p class="quest-card-desc">${quest.description}</p>
          <div class="quest-skills-list">
            ${quest.targetSkills.map(skill => `<span class="quest-skill-pill">${skill}</span>`).join("")}
          </div>
        </div>
        <div class="quest-card-bottom">
          <div class="quest-metrics">
            <span>⏱️ ~${quest.estimatedMinutes} min</span>
            <span>🎯 ${quest.totalQuestions} Níveis</span>
          </div>
          <button class="btn btn-primary btn-launch-quest ${!isEnabled ? "btn-locked-quest" : ""}" data-id="${quest.id}" ${!isEnabled ? "disabled" : ""}>
            ${isEnabled ? "INICIAR SPRINT ➔" : "BLOQUEADO 🔒"}
          </button>
        </div>
      `;

      if (isEnabled) {
        card.querySelector(".btn-launch-quest").addEventListener("click", () => {
          this.selectQuest(quest);
        });
      } else {
        card.addEventListener("click", (e) => {
          if (e.target.tagName !== "BUTTON") {
            alert("🔒 Este teste ainda não foi liberado pelo seu professor para esta sprint.");
          }
        });
      }

      this.questsCatalogGrid.appendChild(card);
    });
  }

  selectQuest(quest) {
    this.activeQuest = quest;
    this.hudActiveQuestBadge.textContent = quest.level;

    this.introWindowFile.textContent = `~/quests/${quest.id}-briefing.sh`;
    this.introQuestBadge.textContent = `${quest.badge} // ${quest.level} DRILL`;
    this.introQuestTitle.innerHTML = `${quest.title}`;
    this.introQuestDesc.textContent = quest.description;
    this.introTotalQ.textContent = `${quest.totalQuestions} Níveis Progressivos`;
    this.introSkillsSummary.textContent = quest.targetSkills.join(", ");

    this.showScreen("intro");
  }

  // ==========================================================================
  // 4. GAMEPLAY PROGRESSION
  // ==========================================================================

  startCurrentQuest() {
    this.sound.init();
    this.currentIndex = 0;
    this.xp = 0;
    this.streak = 0;
    this.maxStreak = 0;
    this.lives = 3;
    this.userAnswers = [];
    this.startTime = Date.now();

    this.initMilestones();
    this.updateHud();
    this.showScreen("game");
    this.loadQuestion(0);
  }

  initMilestones() {
    this.progressMilestones.innerHTML = "";
    for (let i = 0; i < this.activeQuest.questions.length; i++) {
      const dot = document.createElement("div");
      dot.className = "milestone-node";
      this.progressMilestones.appendChild(dot);
    }
  }

  loadQuestion(index) {
    this.currentIndex = index;
    this.hasAnswered = false;
    this.isAnswering = true;

    const q = this.activeQuest.questions[index];

    this.hudLevelTitle.textContent = `LEVEL ${q.level} / ${this.activeQuest.questions.length}`;
    this.hudTicket.textContent = q.ticket;
    const progressPercent = ((index + 1) / this.activeQuest.questions.length) * 100;
    this.progressBarFill.style.width = `${progressPercent}%`;

    const nodes = this.progressMilestones.querySelectorAll(".milestone-node");
    nodes.forEach((node, i) => {
      node.classList.remove("current", "completed");
      if (i < index) node.classList.add("completed");
      if (i === index) node.classList.add("current");
    });

    this.ticketFilename.textContent = q.ticketFile;
    this.categoryBadge.textContent = q.categoryLabel;
    this.difficultyTag.textContent = q.difficulty;
    this.speakerRole.textContent = q.speakerRole;
    this.speakerName.textContent = q.speakerName;
    this.scrumPromptText.textContent = q.scrumPrompt;
    this.questionSentence.innerHTML = `"${q.targetSentence}"`;
    this.questionSubtext.textContent = q.subtext;

    this.feedbackDrawer.classList.add("hidden");
    this.feedbackDiagnosticBanner.classList.add("hidden");

    const shuffledOptions = [...q.options]
      .map(opt => ({ ...opt }))
      .sort(() => Math.random() - 0.5);

    this.optionsGrid.innerHTML = "";
    const keyLabels = ["1", "2", "3", "4"];

    shuffledOptions.forEach((opt, idx) => {
      const btn = document.createElement("button");
      btn.className = "option-btn";
      btn.dataset.index = idx;
      btn.dataset.isCorrect = opt.isCorrect;

      btn.innerHTML = `
        <div class="option-key">${keyLabels[idx]}</div>
        <div class="option-text">${opt.text}</div>
      `;

      btn.addEventListener("click", () => this.handleOptionSelection(opt, btn, shuffledOptions));
      this.optionsGrid.appendChild(btn);
    });
  }

  handleOptionSelection(chosenOption, chosenBtn, currentOptions) {
    if (this.hasAnswered) return;
    this.hasAnswered = true;
    this.isAnswering = false;

    const q = this.activeQuest.questions[this.currentIndex];
    const isCorrect = chosenOption.isCorrect;

    const allButtons = this.optionsGrid.querySelectorAll(".option-btn");
    allButtons.forEach(btn => (btn.disabled = true));

    const correctOptionObj = currentOptions.find(o => o.isCorrect);

    this.userAnswers.push({
      questionId: q.id,
      level: q.level,
      categoryKey: q.categoryKey,
      categoryLabel: q.categoryLabel,
      context: q.targetSentence,
      chosenText: chosenOption.text,
      correctText: correctOptionObj.text,
      isCorrect: isCorrect,
      errorType: chosenOption.errorType,
      errorLabel: chosenOption.errorLabel,
      diagnosticNote: chosenOption.diagnosticNote,
      rule: q.rule
    });

    if (isCorrect) {
      chosenBtn.classList.add("selected-correct");
      this.sound.playSuccess();

      this.streak++;
      if (this.streak > this.maxStreak) this.maxStreak = this.streak;

      const baseXP = 100;
      const streakBonus = (this.streak - 1) * 25;
      const earnedXP = baseXP + streakBonus;
      this.xp += earnedXP;

      this.triggerXpFloat(`+${earnedXP} XP`);

      this.feedbackStatusBadge.className = "feedback-status-badge correct";
      this.feedbackStatusIcon.textContent = "✅";
      this.feedbackStatusTitle.textContent = "SPRINT UPDATE ACCEPTED!";
      this.feedbackXpGain.className = "feedback-xp-gain correct";
      this.feedbackXpGain.textContent = `+${earnedXP} XP`;
      this.feedbackDiagnosticBanner.classList.add("hidden");
    } else {
      chosenBtn.classList.add("selected-wrong");

      allButtons.forEach(btn => {
        if (btn.dataset.isCorrect === "true") {
          btn.classList.add("reveal-correct");
        }
      });

      this.sound.playError();
      this.sound.playDamage();

      this.lives = Math.max(0, this.lives - 1);
      this.streak = 0;

      this.gameScreen.classList.add("shake-damage");
      setTimeout(() => this.gameScreen.classList.remove("shake-damage"), 450);

      this.feedbackStatusBadge.className = "feedback-status-badge wrong";
      this.feedbackStatusIcon.textContent = "❌";
      this.feedbackStatusTitle.textContent = "SYNTAX ERROR / BUILD FAILED!";
      this.feedbackXpGain.className = "feedback-xp-gain wrong";
      this.feedbackXpGain.textContent = "-1 VIDA";

      this.errorDiagLabel.textContent = `TIPO DE ERRO DETECTADO: ${chosenOption.errorLabel || "ERRO GRAMATICAL"}`;
      this.errorDiagDesc.textContent = chosenOption.diagnosticNote;
      this.feedbackDiagnosticBanner.classList.remove("hidden");
    }

    this.feedbackRuleText.innerHTML = q.rule;

    const isGameOver = this.lives <= 0;
    const isLastQuestion = this.currentIndex >= this.activeQuest.questions.length - 1;

    if (isGameOver) {
      this.nextBtnText.textContent = "SISTEMA FORA DO AR (VER DIAGNÓSTICO)";
    } else if (isLastQuestion) {
      this.nextBtnText.textContent = "CONCLUIR SPRINT & SALVAR";
    } else {
      this.nextBtnText.textContent = "PRÓXIMO TICKET";
    }

    this.updateHud();
    this.feedbackDrawer.classList.remove("hidden");
  }

  advanceStep() {
    if (this.lives <= 0 || this.currentIndex >= this.activeQuest.questions.length - 1) {
      this.finishQuest();
    } else {
      this.loadQuestion(this.currentIndex + 1);
    }
  }

  triggerXpFloat(text) {
    this.xpFloat.textContent = text;
    this.xpFloat.classList.remove("animate");
    void this.xpFloat.offsetWidth;
    this.xpFloat.classList.add("animate");
  }

  updateHud() {
    this.xpCounter.textContent = this.xp.toLocaleString("pt-BR");
    this.streakCounter.textContent = `${this.streak}x`;

    if (this.streak >= 2) {
      this.streakPill.style.borderColor = "var(--amber-neon)";
      this.streakPill.style.boxShadow = "0 0 10px rgba(245, 158, 11, 0.3)";
    } else {
      this.streakPill.style.borderColor = "var(--border-subtle)";
      this.streakPill.style.boxShadow = "none";
    }

    this.hearts.forEach((heartEl, idx) => {
      heartEl.className = idx < this.lives ? "heart active" : "heart lost";
    });
  }

  // ==========================================================================
  // 5. DIAGNOSTIC COMPUTATION & SERVER SYNC
  // ==========================================================================

  finishQuest() {
    const isWin = this.lives > 0;
    const totalAnswered = this.userAnswers.length;
    const totalCorrect = this.userAnswers.filter(a => a.isCorrect).length;
    const accuracy = totalAnswered > 0 ? Math.round((totalCorrect / totalAnswered) * 100) : 0;
    const durationSeconds = Math.round((Date.now() - (this.startTime || Date.now())) / 1000);

    if (isWin && totalCorrect >= Math.round(totalAnswered * 0.8)) {
      this.sound.playVictory();
    } else if (!isWin) {
      this.sound.playGameOver();
    }

    this.resultWindowTag.textContent = isWin ? "DEPLOY SUCCESSFUL" : "SYSTEM CRASH // SPRINT HALTED";
    this.resultWindowTag.style.color = isWin ? "var(--green-neon)" : "var(--red-neon)";

    this.resultFinalXp.textContent = `${this.xp.toLocaleString("pt-BR")} XP`;
    this.resultBonusSub.textContent = `Max Streak: ${this.maxStreak}x • Tempo: ${durationSeconds}s`;
    this.resultAccuracy.textContent = `${accuracy}%`;
    this.resultScoreRatio.textContent = `${totalCorrect} / ${totalAnswered} acertos`;
    this.resultLivesLeft.textContent = `${this.lives} / ${this.maxLives}`;
    this.resultSprintStatus.textContent = isWin ? "COMPLETA" : "FALHA";
    this.resultSprintStatus.style.color = isWin ? "var(--green-neon)" : "var(--red-neon)";

    let verdictKey = "A1 Inicial";
    let verdictTitle = "A1 INICIAL";
    let verdictClass = "initial-a1";
    let verdictIcon = "🥉";
    let verdictDesc = "";

    if (!isWin || accuracy < 60) {
      verdictKey = "A1 Inicial";
      verdictTitle = "A1 INICIAL";
      verdictClass = "initial-a1";
      verdictIcon = "🧱";
      verdictDesc = "Estágio inicial de consolidação. Atenção às regras de sufixação e eliminação do duplo passado (*didn't + verbo base*). O professor receberá o diagnóstico detalhado para orientar a próxima aula.";
    } else if (accuracy >= 60 && accuracy <= 85) {
      verdictKey = "A1 Consolidado";
      verdictTitle = "A1 CONSOLIDADO";
      verdictClass = "consolidated-a1";
      verdictIcon = "🥈";
      verdictDesc = "Boa base gramatical com pequenos pontos de atenção. Você reporta tarefas do dia a dia com boa fluidez, mas teve pequenas oscilações em auxiliares ou verbos irregulares.";
    } else {
      verdictKey = "Pronto para A2";
      verdictTitle = "PRONTO PARA A2";
      verdictClass = "ready-a2";
      verdictIcon = "🏆";
      verdictDesc = "Excelente domínio técnico! Você construiu afirmativas, negativas e perguntas com precisão cirúrgica, evitou o duplo passado e dominou os verbos essenciais de TI.";
    }

    this.verdictBanner.className = `verdict-banner ${verdictClass}`;
    this.verdictIcon.textContent = verdictIcon;
    this.verdictTitle.textContent = verdictTitle;
    this.verdictDescription.textContent = verdictDesc;

    this.buildAreaMeters();
    this.buildAuditList();

    const submissionPayload = {
      studentName: this.studentName,
      questId: this.activeQuest.id,
      questTitle: this.activeQuest.title,
      questLevel: this.activeQuest.level,
      scoreXp: this.xp,
      maxStreak: this.maxStreak,
      accuracy: accuracy,
      scoreRatio: `${totalCorrect}/${totalAnswered}`,
      livesLeft: this.lives,
      isWin: isWin,
      verdict: verdictKey,
      durationSeconds: durationSeconds,
      timestamp: new Date().toISOString(),
      userAnswers: this.userAnswers
    };

    this.syncSubmission(submissionPayload);
    this.showScreen("result");
  }

  buildAreaMeters() {
    this.areaMetersGrid.innerHTML = "";
    const catMap = {};

    this.userAnswers.forEach(ans => {
      if (!catMap[ans.categoryKey]) {
        catMap[ans.categoryKey] = { label: ans.categoryLabel, total: 0, correct: 0 };
      }
      catMap[ans.categoryKey].total++;
      if (ans.isCorrect) catMap[ans.categoryKey].correct++;
    });

    Object.keys(catMap).forEach(key => {
      const data = catMap[key];
      const percent = Math.round((data.correct / data.total) * 100);

      const card = document.createElement("div");
      card.className = "area-card";
      card.innerHTML = `
        <div class="area-card-header">
          <span class="area-name">${data.label}</span>
          <span class="area-score">${data.correct}/${data.total} (${percent}%)</span>
        </div>
        <div class="area-progress-bar">
          <div class="area-progress-fill" style="width: ${percent}%;"></div>
        </div>
      `;
      this.areaMetersGrid.appendChild(card);
    });
  }

  buildAuditList() {
    this.auditList.innerHTML = "";
    this.userAnswers.forEach(ans => {
      const item = document.createElement("div");
      item.className = `audit-item ${ans.isCorrect ? "correct" : "wrong"}`;
      item.innerHTML = `
        <div class="audit-item-top">
          <span class="audit-item-title">Nível ${ans.level} • ${ans.categoryLabel}</span>
          <span class="audit-item-badge">${ans.isCorrect ? "✔ ACERTO (+XP)" : "✖ ERRO (-1 VIDA)"}</span>
        </div>
        <div class="audit-item-context">"${ans.context.replace('<span class="blank-slot">________</span>', '<u>' + ans.chosenText + '</u>')}"</div>
        <div class="audit-item-answers">
          <span>Resposta escolhida: <strong class="audit-user-ans">${ans.chosenText}</strong></span>
          ${!ans.isCorrect ? `<span>Resposta correta: <strong style="color:var(--green-neon);">${ans.correctText}</strong></span>` : ""}
        </div>
        ${!ans.isCorrect && ans.errorLabel ? `<div style="color:var(--red-neon);font-size:0.8rem;font-weight:700;">⚠️ ${ans.errorLabel}: ${ans.diagnosticNote}</div>` : ""}
        <div class="audit-rule-text">💡 ${ans.rule}</div>
      `;
      this.auditList.appendChild(item);
    });
  }

  syncSubmission(payload) {
    const localStoreKey = "standup_quest_submissions";
    let localList = [];
    try {
      localList = JSON.parse(localStorage.getItem(localStoreKey) || "[]");
    } catch (e) { localList = []; }
    localList.unshift(payload);
    localStorage.setItem(localStoreKey, JSON.stringify(localList.slice(0, 50)));

    fetch("/api/submissions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    })
      .then(res => {
        if (!res.ok) throw new Error(`HTTP error ${res.status}`);
        return res.json();
      })
      .then(data => {
        this.syncStatusText.textContent = `💾 Respostas de ${this.studentName} registradas no banco de dados do professor! (ID: ${data.id})`;
        this.serverSyncStatus.style.display = "flex";
      })
      .catch(err => {
        console.warn("Server sync fallback:", err);
        this.syncStatusText.textContent = `💾 Respostas salvas localmente!`;
        this.serverSyncStatus.style.display = "flex";
      });
  }

  copyDiagnosticReport() {
    const isWin = this.lives > 0;
    const totalAnswered = this.userAnswers.length;
    const totalCorrect = this.userAnswers.filter(a => a.isCorrect).length;
    const accuracy = totalAnswered > 0 ? Math.round((totalCorrect / totalAnswered) * 100) : 0;

    const reportMarkdown = `# 🚀 RELATÓRIO DIAGNÓSTICO DO ESTUDANTE // TECH ENGLISH QUEST
**Estudante:** ${this.studentName}
**Quest:** ${this.activeQuest.title} (${this.activeQuest.level})
**Data:** ${new Date().toLocaleDateString("pt-BR")}
**Status:** ${isWin ? "SPRINT CONCLUÍDA" : "FALHA / VIDAS ESGOTADAS"}

---

### 📊 Desempenho Geral
- **Pontuação:** ${this.xp} XP (Max Combo: ${this.maxStreak}x)
- **Precisão:** ${accuracy}% (${totalCorrect} de ${totalAnswered} acertos)
- **Vidas Restantes:** ${this.lives}/3
- **Veredito:** **${this.verdictTitle.textContent}**

### 💡 Diagnóstico Pedagógico:
${this.verdictDescription.textContent}

---
*Gerado via Tech Daily Standup Quest*
`;

    navigator.clipboard.writeText(reportMarkdown).then(() => {
      this.sound.playClick();
      const orig = this.copyBtnText.textContent;
      this.copyBtnText.textContent = "COPIADO! ✔";
      setTimeout(() => (this.copyBtnText.textContent = orig), 2500);
    });
  }

  openStudyDeck(slideIdx = 1) {
    this.sound.playClick();
    this.goToSlide(slideIdx);
    if (this.studyDeckModal) {
      this.studyDeckModal.classList.remove("hidden");
    }
  }

  closeStudyDeck() {
    if (this.studyDeckModal) {
      this.studyDeckModal.classList.add("hidden");
    }
    if (this.slideDeckCard) {
      this.slideDeckCard.classList.remove("fullscreen-mode");
    }
  }

  goToSlide(slideNumber) {
    if (slideNumber < 1) slideNumber = 1;
    if (slideNumber > this.totalSlides) slideNumber = this.totalSlides;
    this.currentSlide = slideNumber;

    if (this.slidePages) {
      this.slidePages.forEach((page) => {
        const pageIdx = parseInt(page.getAttribute("data-slide"), 10);
        page.classList.toggle("active", pageIdx === this.currentSlide);
      });
    }

    if (this.slideDots) {
      this.slideDots.forEach((dot) => {
        const dotIdx = parseInt(dot.getAttribute("data-index"), 10);
        dot.classList.toggle("active", dotIdx === this.currentSlide);
      });
    }

    if (this.currentSlideNum) {
      this.currentSlideNum.textContent = this.currentSlide;
    }

    if (this.prevSlideBtn) {
      this.prevSlideBtn.disabled = this.currentSlide === 1;
      this.prevSlideBtn.style.opacity = this.currentSlide === 1 ? "0.5" : "1";
    }

    if (this.nextSlideBtn) {
      this.nextSlideBtn.textContent = this.currentSlide === this.totalSlides ? "Concluir ✔" : "Próximo ➔";
    }
  }

  navigateSlide(delta) {
    this.sound.playClick();
    if (this.currentSlide + delta > this.totalSlides) {
      this.closeStudyDeck();
      return;
    }
    this.goToSlide(this.currentSlide + delta);
  }

  handleKeyboard(e) {
    if (this.studyDeckModal && !this.studyDeckModal.classList.contains("hidden")) {
      if (e.key === "Escape") {
        this.closeStudyDeck();
        return;
      }
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        this.navigateSlide(-1);
        return;
      }
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        this.navigateSlide(1);
        return;
      }
    }

    if (e.key === "Escape") {
      this.cheatSheetModal.classList.add("hidden");
      return;
    }

    if (e.key === "m" || e.key === "M") {
      const isMuted = this.sound.toggleMute();
      this.updateSoundIcon();
      return;
    }

    if (!this.gameScreen.classList.contains("hidden")) {
      if (this.isAnswering && !this.hasAnswered) {
        let index = -1;
        if (e.key === "1" || e.key.toLowerCase() === "a") index = 0;
        if (e.key === "2" || e.key.toLowerCase() === "b") index = 1;
        if (e.key === "3" || e.key.toLowerCase() === "c") index = 2;
        if (e.key === "4" || e.key.toLowerCase() === "d") index = 3;

        if (index >= 0) {
          const btn = this.optionsGrid.querySelector(`[data-index="${index}"]`);
          if (btn && !btn.disabled) btn.click();
        }
      } else if (this.hasAnswered) {
        if (e.key === " " || e.key === "Enter") {
          e.preventDefault();
          this.advanceStep();
        }
      }
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  window.questApp = new QuestApp();
});
