/**
 * QUESTS CATALOG & DIAGNOSTIC DISTRACTOR DATABASE
 * Each option contains diagnostic error metadata so teachers know EXACTLY why a student failed.
 */

const QUESTS_CATALOG = [
  {
    "id": "simple-past",
    "title": "Simple Past: Tech Daily Standup",
    "level": "A1 ➔ A2",
    "badge": "SIMPLE PAST",
    "color": "cyan",
    "icon": "⚡",
    "description": "Assess your command of the Simple Past in international Daily Standups: regular verb suffix rules, high-frequency tech irregular verbs, to be agreement (was vs were), and eliminating the double past with did/didn't.",
    "estimatedMinutes": 6,
    "totalQuestions": 10,
    "targetSkills": [
      "Regular Verb Suffix Rules (-ed and -d)",
      "High-Frequency Tech Irregular Verbs",
      "Past Tense Agreement of To Be (was vs were)",
      "Auxiliary DID / DIDN'T Rule (base infinitive form)"
    ],
    "questions": [
      {
        "id": 1,
        "level": 1,
        "categoryKey": "regular",
        "categoryLabel": "Regular Verbs (-ed)",
        "difficulty": "Level 1 • Basic Suffix",
        "ticket": "AUTH-101",
        "ticketFile": "auth-service.ts",
        "speakerRole": "Scrum Master",
        "speakerName": "Carlos (Tech Lead)",
        "scrumPrompt": "\"Lucas, what did you work on yesterday?\"",
        "targetSentence": "Yesterday, I <span class=\"blank-slot\">________</span> (work) on the login screen for five hours.",
        "subtext": "Standard -ed suffix rule in Simple Past:",
        "options": [
          {
            "text": "worked",
            "isCorrect": true,
            "errorType": null,
            "errorLabel": null,
            "diagnosticNote": "Correct! Applied the standard rule by adding -ed to the regular verb work."
          },
          {
            "text": "work",
            "isCorrect": false,
            "errorType": "OMISSAO_CONJUGACAO",
            "errorLabel": "Conjugation Omission (Present Form)",
            "diagnosticNote": "Used the uninflected base/present form instead of Simple Past, ignoring the time adverb 'yesterday'."
          },
          {
            "text": "workt",
            "isCorrect": false,
            "errorType": "ERRO_FONETICO",
            "errorLabel": "Phonetic Spelling Error",
            "diagnosticNote": "Spelled by the phonetic sound /t/ instead of the standard grammatical suffix -ed."
          },
          {
            "text": "working",
            "isCorrect": false,
            "errorType": "GERUNDIO_INDEVIDO",
            "errorLabel": "Incorrect Gerund Form (-ing)",
            "diagnosticNote": "Used continuous -ing without auxiliary was/were and without expressing a completed past event."
          }
        ],
        "rule": "Standard rule: for most regular verbs in English, add <strong>-ed</strong> to the base form to construct the Simple Past (<em>work ➔ worked</em>)."
      },
      {
        "id": 2,
        "level": 2,
        "categoryKey": "regular",
        "categoryLabel": "Regular Verbs (-ed)",
        "difficulty": "Level 2 • Ending in -e",
        "ticket": "SPRINT-42",
        "ticketFile": "jira-cleanup.sh",
        "speakerRole": "Scrum Master",
        "speakerName": "Mariana (Agile Coach)",
        "scrumPrompt": "\"Did we clean up the sprint backlog yesterday before the demo?\"",
        "targetSentence": "The sprint ended, so we <span class=\"blank-slot\">________</span> (close) all the completed Jira tickets.",
        "subtext": "Regular verb already ending in -e:",
        "options": [
          {
            "text": "closed",
            "isCorrect": true,
            "errorType": null,
            "errorLabel": null,
            "diagnosticNote": "Correct! Regular verbs ending in -e only take -d."
          },
          {
            "text": "closeed",
            "isCorrect": false,
            "errorType": "DUPLICACAO_E",
            "errorLabel": "Unnecessary Vowel Doubling (-eed)",
            "diagnosticNote": "Added -ed to a verb that already ends in -e, creating the non-existent spelling 'closeed'."
          },
          {
            "text": "close",
            "isCorrect": false,
            "errorType": "OMISSAO_CONJUGACAO",
            "errorLabel": "Conjugation Omission",
            "diagnosticNote": "Left the verb uninflected in the present tense."
          },
          {
            "text": "clost",
            "isCorrect": false,
            "errorType": "ERRO_FONETICO",
            "errorLabel": "Invented Phonetic Irregular",
            "diagnosticNote": "Invented an irregular form by phonetic ending /t/."
          }
        ],
        "rule": "Verbs ending in silent <strong>-e</strong>: add only <strong>-d</strong> to build the Simple Past (<em>close ➔ closed, save ➔ saved</em>)."
      },
      {
        "id": 3,
        "level": 3,
        "categoryKey": "irregular",
        "categoryLabel": "Regular Verbs (-ed)",
        "difficulty": "Level 3 • CVC Doubling Rule",
        "ticket": "SYNC-89",
        "ticketFile": "meeting-agenda.md",
        "speakerRole": "Platform Lead",
        "speakerName": "Carlos (Tech Lead)",
        "scrumPrompt": "\"Lucas, why did memory usage drop at 4 PM?\"",
        "targetSentence": "The microservice was leaking memory, so I <span class=\"blank-slot\">________</span> (stop) the container immediately.",
        "subtext": "Monosyllabic verb ending in Consonant-Vowel-Consonant (CVC):",
        "options": [
          {
            "text": "stopped",
            "isCorrect": true,
            "errorType": null,
            "errorLabel": null,
            "diagnosticNote": "Correct! In CVC monosyllabic verbs, double the final consonant before adding -ed."
          },
          {
            "text": "stoped",
            "isCorrect": false,
            "errorType": "OMISSAO_DOBRAMENTO_CVC",
            "errorLabel": "Omission of CVC Consonant Doubling",
            "diagnosticNote": "Forgot to double the final consonant in a CVC verb (stop ➔ stopped)."
          },
          {
            "text": "stop",
            "isCorrect": false,
            "errorType": "OMISSAO_CONJUGACAO",
            "errorLabel": "Conjugation Omission",
            "diagnosticNote": "Did not inflect the verb for a completed past action."
          },
          {
            "text": "stoppen",
            "isCorrect": false,
            "errorType": "SUFIXO_IRREGULAR_FALSO",
            "errorLabel": "Germanic Past Participle Confusion",
            "diagnosticNote": "Added -en as if it were an irregular Germanic participle."
          }
        ],
        "rule": "CVC Rule: Single-syllable verbs ending in <strong>Consonant + Single Vowel + Consonant</strong> double the final consonant before <strong>-ed</strong> (<em>stop ➔ stopped</em>)."
      },
      {
        "id": 4,
        "level": 4,
        "categoryKey": "irregular",
        "categoryLabel": "Tech Irregular Verbs",
        "difficulty": "Level 4 • have ➔ had",
        "ticket": "CI-CD-204",
        "ticketFile": "pipeline.spec.ts",
        "speakerRole": "Engineering Manager",
        "speakerName": "Juliana (Engineering Manager)",
        "scrumPrompt": "\"Lucas, did your squad discuss the new auth architecture yesterday?\"",
        "targetSentence": "Yes! Yesterday morning, we <span class=\"blank-slot\">________</span> (have) a meeting with the DevOps team.",
        "subtext": "Irregular past form of the verb \"have\":",
        "options": [
          {
            "text": "had",
            "isCorrect": true,
            "errorType": null,
            "errorLabel": null,
            "diagnosticNote": "Correct! 'Have' is an irregular verb whose past tense is 'had'."
          },
          {
            "text": "haved",
            "isCorrect": false,
            "errorType": "GENERALIZACAO_REGULAR_INDEVIDA",
            "errorLabel": "Overgeneralization of Regular Rule (-ed)",
            "diagnosticNote": "Treated the irregular verb 'have' as regular by adding -d ('haved')."
          },
          {
            "text": "have",
            "isCorrect": false,
            "errorType": "OMISSAO_CONJUGACAO",
            "errorLabel": "Conjugation Omission",
            "diagnosticNote": "Used the present tense form 'have' with the time marker 'Yesterday morning'."
          },
          {
            "text": "has",
            "isCorrect": false,
            "errorType": "CONFUSAO_PRESENTE_3P",
            "errorLabel": "Present 3rd Person Singular Confusion",
            "diagnosticNote": "Used the 3rd person singular present form 'has' for a past plural subject (we)."
          }
        ],
        "rule": "The verb <strong>have</strong> is irregular: its Simple Past form is <strong>had</strong> for all persons (<em>I had, we had, they had</em>)."
      },
      {
        "id": 5,
        "level": 5,
        "categoryKey": "tobe",
        "categoryLabel": "Tech Irregular Verbs",
        "difficulty": "Level 5 • write ➔ wrote",
        "ticket": "INCIDENT-503",
        "ticketFile": "postgres-cluster.yml",
        "speakerRole": "Scrum Master",
        "speakerName": "Mariana (Agile Coach)",
        "scrumPrompt": "\"Lucas, did you write unit tests for the payment module?\"",
        "targetSentence": "Yes, yesterday I <span class=\"blank-slot\">________</span> (write) 12 integration tests for the Stripe API.",
        "subtext": "Irregular past form of the verb \"write\":",
        "options": [
          {
            "text": "wrote",
            "isCorrect": true,
            "errorType": null,
            "errorLabel": null,
            "diagnosticNote": "Correct! 'Write' is irregular and conjugates to 'wrote' in Simple Past."
          },
          {
            "text": "writed",
            "isCorrect": false,
            "errorType": "GENERALIZACAO_REGULAR_INDEVIDA",
            "errorLabel": "Overgeneralization of Regular Rule (-ed)",
            "diagnosticNote": "Added -ed to the irregular verb 'write', generating the non-existent 'writed'."
          },
          {
            "text": "written",
            "isCorrect": false,
            "errorType": "CONFUSAO_PARTICIPIO_PASSADO",
            "errorLabel": "Past Participle Confusion (V3 instead of V2)",
            "diagnosticNote": "Used the past participle (written) instead of the Simple Past form (wrote)."
          },
          {
            "text": "write",
            "isCorrect": false,
            "errorType": "OMISSAO_CONJUGACAO",
            "errorLabel": "Conjugation Omission",
            "diagnosticNote": "Failed to inflect the verb in the past."
          }
        ],
        "rule": "Simple Past of <strong>write</strong> is <strong>wrote</strong> (V2). The form <em>written</em> is the past participle (V3) and requires an auxiliary verb (have/has/had)."
      },
      {
        "id": 6,
        "level": 6,
        "categoryKey": "did",
        "categoryLabel": "Tech Irregular Verbs",
        "difficulty": "Level 6 • run ➔ ran",
        "ticket": "GIT-FLOW-12",
        "ticketFile": "git-commit.patch",
        "speakerRole": "Platform Lead",
        "speakerName": "Carlos (Tech Lead)",
        "scrumPrompt": "\"Did the automated benchmark suite finish yesterday?\"",
        "targetSentence": "Yes, we <span class=\"blank-slot\">________</span> (run) the load tests on staging yesterday afternoon.",
        "subtext": "Irregular past form of the verb \"run\":",
        "options": [
          {
            "text": "ran",
            "isCorrect": true,
            "errorType": null,
            "errorLabel": null,
            "diagnosticNote": "Correct! The Simple Past of 'run' is 'ran'."
          },
          {
            "text": "runned",
            "isCorrect": false,
            "errorType": "GENERALIZACAO_REGULAR_INDEVIDA",
            "errorLabel": "Overgeneralization of Regular Rule (-ed)",
            "diagnosticNote": "Added -ed to the irregular verb 'run', creating 'runned'."
          },
          {
            "text": "run",
            "isCorrect": false,
            "errorType": "CONFUSAO_FORMA_BASE_PASSADO",
            "errorLabel": "Form Confusion (Base vs Past)",
            "diagnosticNote": "'Run' is base and participle, but Simple Past requires vowel change to 'ran'."
          },
          {
            "text": "running",
            "isCorrect": false,
            "errorType": "GERUNDIO_INDEVIDO",
            "errorLabel": "Incorrect Gerund Form (-ing)",
            "diagnosticNote": "Used -ing without auxiliary were."
          }
        ],
        "rule": "The verb <strong>run</strong> changes its root vowel in the Simple Past: <strong>ran</strong> (<em>Today we run ➔ Yesterday we ran</em>)."
      },
      {
        "id": 7,
        "level": 7,
        "categoryKey": "did",
        "categoryLabel": "Tech Irregular Verbs",
        "difficulty": "Level 7 • find ➔ found",
        "ticket": "LOGS-808",
        "ticketFile": "cloudwatch-stream.log",
        "speakerRole": "Security Engineer",
        "speakerName": "Felipe (Security Eng)",
        "scrumPrompt": "\"Lucas, did you find any vulnerabilities in the third-party dependencies?\"",
        "targetSentence": "During static analysis yesterday, we <span class=\"blank-slot\">________</span> (find) an outdated JWT library.",
        "subtext": "Irregular past form of the verb \"find\":",
        "options": [
          {
            "text": "found",
            "isCorrect": true,
            "errorType": null,
            "errorLabel": null,
            "diagnosticNote": "Correct! 'Find' changes to 'found' in the Simple Past."
          },
          {
            "text": "finded",
            "isCorrect": false,
            "errorType": "GENERALIZACAO_REGULAR_INDEVIDA",
            "errorLabel": "Overgeneralization of Regular Rule (-ed)",
            "diagnosticNote": "Treated 'find' as regular ('finded')."
          },
          {
            "text": "find",
            "isCorrect": false,
            "errorType": "OMISSAO_CONJUGACAO",
            "errorLabel": "Conjugation Omission",
            "diagnosticNote": "Left verb uninflected in the present."
          },
          {
            "text": "founded",
            "isCorrect": false,
            "errorType": "CONFUSAO_VERBO_FUNDAR",
            "errorLabel": "Semantic Confusion (found as base verb = fundar)",
            "diagnosticNote": "'Founded' is the past of the verb 'to found' (establish), not 'find'."
          }
        ],
        "rule": "The Simple Past of <strong>find</strong> is <strong>found</strong> (<em>we found a bug</em>)."
      },
      {
        "id": 8,
        "level": 8,
        "categoryKey": "did",
        "categoryLabel": "Verb To Be in Past",
        "difficulty": "Level 8 • Singular WAS",
        "ticket": "PR-314",
        "ticketFile": "review-checklist.md",
        "speakerRole": "Platform Lead",
        "speakerName": "Carlos (Tech Lead)",
        "scrumPrompt": "\"Why was the notification service unreachable for 10 minutes yesterday?\"",
        "targetSentence": "The Redis cache server <span class=\"blank-slot\">________</span> (to be) down due to network latency.",
        "subtext": "Past tense agreement of \"to be\" with singular subject (The server = it):",
        "options": [
          {
            "text": "was",
            "isCorrect": true,
            "errorType": null,
            "errorLabel": null,
            "diagnosticNote": "Correct! Singular 3rd person subject (The server = it) takes 'was'."
          },
          {
            "text": "were",
            "isCorrect": false,
            "errorType": "CONCORDANCIA_PLURAL_INDEVIDA",
            "errorLabel": "Subject-Verb Agreement Error (Plural for Singular)",
            "diagnosticNote": "Used plural 'were' with singular subject 'The Redis cache server'."
          },
          {
            "text": "is",
            "isCorrect": false,
            "errorType": "CONFUSAO_TEMPO_PRESENTE",
            "errorLabel": "Present Tense with Past Context",
            "diagnosticNote": "Used present 'is' for an outage that occurred yesterday."
          },
          {
            "text": "been",
            "isCorrect": false,
            "errorType": "PARTICIPIO_SEM_AUXILIAR",
            "errorLabel": "Bare Past Participle",
            "diagnosticNote": "Used participle 'been' without auxiliary has/had."
          }
        ],
        "rule": "Concordance of <strong>to be</strong> in Simple Past: singular subjects (<em>I, he, she, it / the server</em>) require <strong>was</strong>."
      },
      {
        "id": 9,
        "level": 9,
        "categoryKey": "did",
        "categoryLabel": "Verb To Be in Past",
        "difficulty": "Level 9 • Plural WERE",
        "ticket": "SECRET-77",
        "ticketFile": "vault-secrets.env",
        "speakerRole": "Engineering Manager",
        "speakerName": "Juliana (Engineering Manager)",
        "scrumPrompt": "\"Where were the backend developers yesterday at 3 PM during the alert?\"",
        "targetSentence": "All the backend engineers <span class=\"blank-slot\">________</span> (to be) in an architecture alignment meeting.",
        "subtext": "Past tense agreement of \"to be\" with plural subject (All the engineers = they):",
        "options": [
          {
            "text": "were",
            "isCorrect": true,
            "errorType": null,
            "errorLabel": null,
            "diagnosticNote": "Correct! Plural subject (All the engineers = they) takes 'were'."
          },
          {
            "text": "was",
            "isCorrect": false,
            "errorType": "CONCORDANCIA_SINGULAR_INDEVIDA",
            "errorLabel": "Subject-Verb Agreement Error (Singular for Plural)",
            "diagnosticNote": "Used singular 'was' with plural subject 'All the backend engineers'."
          },
          {
            "text": "are",
            "isCorrect": false,
            "errorType": "CONFUSAO_TEMPO_PRESENTE",
            "errorLabel": "Present Tense Form",
            "diagnosticNote": "Used present tense 'are' for a meeting yesterday."
          },
          {
            "text": "did be",
            "isCorrect": false,
            "errorType": "INVENCAO_AUXILIAR_TO_BE",
            "errorLabel": "Auxiliary DID with Verb To Be",
            "diagnosticNote": "The verb 'to be' never uses auxiliary did/didn't; it is self-sufficient (was/were)."
          }
        ],
        "rule": "Concordance of <strong>to be</strong> in Simple Past: plural subjects (<em>we, you, they / the engineers</em>) require <strong>were</strong>."
      },
      {
        "id": 10,
        "level": 10,
        "categoryKey": "synthesis",
        "categoryLabel": "Auxiliary DID / DIDN'T",
        "difficulty": "Level 10 • Eliminating Double Past",
        "ticket": "ALL-HANDS-V2",
        "ticketFile": "client-demo-call.webrtc",
        "speakerRole": "Scrum Master",
        "speakerName": "Mariana (Agile Coach)",
        "scrumPrompt": "\"Lucas, did you push the migration script to production yesterday?\"",
        "targetSentence": "No, I <span class=\"blank-slot\">________</span> (not / push) the script because staging tests failed.",
        "subtext": "Negative past sentence with auxiliary didn't:",
        "options": [
          {
            "text": "didn't push",
            "isCorrect": true,
            "errorType": null,
            "errorLabel": null,
            "diagnosticNote": "Correct! With auxiliary 'didn't', the main verb strictly returns to the base infinitive form."
          },
          {
            "text": "didn't pushed",
            "isCorrect": false,
            "errorType": "DUPLO_PASSADO",
            "errorLabel": "Double Past Trap (didn't + V2)",
            "diagnosticNote": "The classic Double Past mistake! With auxiliary 'didn't', never add -ed to the main verb."
          },
          {
            "text": "don't push",
            "isCorrect": false,
            "errorType": "CONFUSAO_PRESENTE_NEGATIVO",
            "errorLabel": "Present Negative (don't) in Past",
            "diagnosticNote": "Used present negative 'don't' instead of past auxiliary 'didn't'."
          },
          {
            "text": "not pushed",
            "isCorrect": false,
            "errorType": "OMISSAO_AUXILIAR_DID",
            "errorLabel": "Auxiliary DID Omission",
            "diagnosticNote": "Negative statements in Simple Past require auxiliary didn't ('not pushed' is ungrammatical)."
          }
        ],
        "rule": "The Golden Rule of the Auxiliary: <strong>didn't</strong> already marks the past tense. The main verb <strong>MUST REMAIN IN ITS BASE FORM</strong> (<em>didn't push</em>, never <em>didn't pushed</em>)."
      }
    ]
  },
  {
    "id": "simple-past-101",
    "title": "Simple Past 101: Rules & Pronunciation Drill",
    "level": "A1 ➔ A2",
    "badge": "FOUNDATIONS 101",
    "color": "purple",
    "icon": "📖",
    "description": "Core rules and phonetics drill: applying auxiliary DID/DIDN'T without double past, pronunciation endings (/t/, /d/, /ɪd/), key irregular verbs, and standup reading comprehension.",
    "estimatedMinutes": 7,
    "totalQuestions": 10,
    "targetSkills": [
      "Auxiliary DID Rule (base verb without double past)",
      "Pronunciation /t/: dropping the 'e' sound in voiceless endings",
      "Pronunciation /ɪd/: extra syllable for verbs ending in T or D sound",
      "Pronunciation /d/: smooth voicing continuation without extra syllable",
      "High-Frequency Irregular Verb Conjugation",
      "Daily Standup Comprehension (Incidents & Deployments)"
    ],
    "questions": [
      {
        "id": 1,
        "level": 1,
        "categoryKey": "slide2_tobe",
        "categoryLabel": "Past Tense of Verb To Be",
        "difficulty": "Level 1 • Was vs Were",
        "ticket": "SERVER-STATUS",
        "ticketFile": "uptime-monitor.ts",
        "speakerRole": "DevOps Engineer",
        "speakerName": "Alex (Cloud SRE)",
        "scrumPrompt": "\"Check the server incident report from yesterday:\"",
        "targetSentence": "Today: The server is online. Yesterday: The database server <span class=\"blank-slot\">________</span> (be) down.",
        "subtext": "Correct agreement of verb to be with singular subject (the database server):",
        "options": [
          {
            "text": "was",
            "isCorrect": true,
            "errorType": null,
            "errorLabel": null,
            "diagnosticNote": "Correct! Slide 2: is ➔ was for singular subjects (the server = it)."
          },
          {
            "text": "were",
            "isCorrect": false,
            "errorType": "CONCORDANCIA_NUMERO",
            "errorLabel": "Singular vs Plural Agreement",
            "diagnosticNote": "Used 'were' (for plural or you) with singular subject (the server = it)."
          },
          {
            "text": "did be",
            "isCorrect": false,
            "errorType": "DID_COM_TO_BE",
            "errorLabel": "Using DID with Verb To Be",
            "diagnosticNote": "The verb to be is self-sufficient and never takes auxiliary did/didn't."
          },
          {
            "text": "is",
            "isCorrect": false,
            "errorType": "OMISSAO_CONJUGACAO",
            "errorLabel": "Present Tense Form",
            "diagnosticNote": "Used 'is' in the present tense for an event that already occurred yesterday."
          }
        ],
        "rule": "Slide 2 rule: <em>is/are ➔ was/were</em>. For 'the server' (singular/it), we use <strong>was</strong> (<em>Yesterday: The server was down</em>)."
      },
      {
        "id": 2,
        "level": 2,
        "categoryKey": "slide2_have",
        "categoryLabel": "Irregular Past Verb (Have)",
        "difficulty": "Level 2 • Irregular Verb Have",
        "ticket": "DB-INCIDENT",
        "ticketFile": "db-sync.log",
        "speakerRole": "Tech Lead",
        "speakerName": "Carlos (Tech Lead)",
        "scrumPrompt": "\"What happened during yesterday's standup?\"",
        "targetSentence": "Today: We have a quick meeting. Yesterday: We <span class=\"blank-slot\">________</span> (have) an issue with the database.",
        "subtext": "Simple Past conjugation for irregular verb have:",
        "options": [
          {
            "text": "had",
            "isCorrect": true,
            "errorType": null,
            "errorLabel": null,
            "diagnosticNote": "Correct! Slide 2: have ➔ had."
          },
          {
            "text": "haved",
            "isCorrect": false,
            "errorType": "REGULARIZACAO_IRREGULAR",
            "errorLabel": "Overgeneralization of -ed on Have",
            "diagnosticNote": "Have is irregular! The form 'haved' does not exist in English."
          },
          {
            "text": "have",
            "isCorrect": false,
            "errorType": "OMISSAO_CONJUGACAO",
            "errorLabel": "Omission of Past Inflection",
            "diagnosticNote": "Kept the verb in present tense have."
          },
          {
            "text": "was have",
            "isCorrect": false,
            "errorType": "TO_BE_AUXILIAR_INDEVIDO",
            "errorLabel": "Ungrammatical 'was' + Verb",
            "diagnosticNote": "Incorrect use of 'was' before an action verb."
          }
        ],
        "rule": "Slide 2 rule: the past of <em>have</em> is <strong>had</strong> (<em>Yesterday: We had an issue with the database</em>)."
      },
      {
        "id": 3,
        "level": 3,
        "categoryKey": "slide2_do",
        "categoryLabel": "Irregular Past Verb (Do)",
        "difficulty": "Level 3 • Irregular Verb Do",
        "ticket": "DEPLOY-AUTO",
        "ticketFile": "cd-pipeline.sh",
        "speakerRole": "Release Manager",
        "speakerName": "Patricia (Release Manager)",
        "scrumPrompt": "\"Who ran the deployment yesterday?\"",
        "targetSentence": "Today: I do code reviews in the morning. Yesterday: I <span class=\"blank-slot\">________</span> (do) the deployment yesterday.",
        "subtext": "Simple Past conjugation for irregular verb do:",
        "options": [
          {
            "text": "did",
            "isCorrect": true,
            "errorType": null,
            "errorLabel": null,
            "diagnosticNote": "Correct! Slide 2: do ➔ did."
          },
          {
            "text": "doed",
            "isCorrect": false,
            "errorType": "REGULARIZACAO_IRREGULAR",
            "errorLabel": "Attempted -ed on Do ('doed')",
            "diagnosticNote": "Do is irregular; 'doed' does not exist."
          },
          {
            "text": "done",
            "isCorrect": false,
            "errorType": "PARTICIPIO_PASSADO",
            "errorLabel": "Past Participle Confusion (done)",
            "diagnosticNote": "'Done' is the past participle (V3) and requires auxiliary have/has/had."
          },
          {
            "text": "did do",
            "isCorrect": false,
            "errorType": "DUPLICACAO_AUXILIAR",
            "errorLabel": "Conjugation Omission (Present Form)",
            "diagnosticNote": "Kept the present form 'do' despite the time marker 'yesterday'."
          }
        ],
        "rule": "Slide 2 rule: the past of <em>do</em> is <strong>did</strong> (<em>Yesterday: I did the deployment</em>)."
      },
      {
        "id": 4,
        "level": 4,
        "categoryKey": "slide2_rule",
        "categoryLabel": "Auxiliary DID / DIDN'T Rule",
        "difficulty": "Level 4 • Negative with DIDN'T",
        "ticket": "GIT-FLOW",
        "ticketFile": "branch-protect.yml",
        "speakerRole": "Tech Lead",
        "speakerName": "Carlos (Tech Lead)",
        "scrumPrompt": "\"Applying the golden rule for negative sentences in the past:\"",
        "targetSentence": "Lesson rule: \"When using did/didn't, the past tense is already in the auxiliary.\" Complete: I noticed an unstable test, so I <span class=\"blank-slot\">________</span> the branch.",
        "subtext": "Negative Simple Past rule with auxiliary didn't:",
        "options": [
          {
            "text": "didn't push",
            "isCorrect": true,
            "errorType": null,
            "errorLabel": null,
            "diagnosticNote": "Correct! Slide 3 Golden Rule: DID/DIDN'T absorbs past tense, so the main verb stays in base form."
          },
          {
            "text": "didn't pushed",
            "isCorrect": false,
            "errorType": "DUPLO_PASSADO",
            "errorLabel": "Double Past Trap (didn't + V2)",
            "diagnosticNote": "Double past error! When didn't is present, the verb cannot take -ed."
          },
          {
            "text": "don't pushed",
            "isCorrect": false,
            "errorType": "AUXILIAR_PRESENTE_VERBO_PASSADO",
            "errorLabel": "Present Negative (don't) in Past",
            "diagnosticNote": "Used present auxiliary 'don't' with past participle instead of past auxiliary 'didn't'."
          },
          {
            "text": "didn't to push",
            "isCorrect": false,
            "errorType": "PARTICULA_TO_APOS_AUXILIAR",
            "errorLabel": "Particle 'to' after Didn't",
            "diagnosticNote": "Do not use 'to' after the auxiliary didn't."
          }
        ],
        "rule": "Slide 3 Golden Rule: <strong>DID / DIDN'T + base verb</strong>. The auxiliary carries the past, so the main verb never changes (<em>didn't crash</em>, not <em>didn't crashed</em>)."
      },
      {
        "id": 5,
        "level": 5,
        "categoryKey": "slide3_sound_t",
        "categoryLabel": "Pronunciation & Phonetics (/t/ sound)",
        "difficulty": "Level 5 • Silent 'E' (/t/ sound)",
        "ticket": "DAILY-ROUTINE",
        "ticketFile": "inbox-fix.ts",
        "speakerRole": "Scrum Master",
        "speakerName": "Mariana (Agile Coach)",
        "scrumPrompt": "\"Morning standup report applying the pronunciation rule:\"",
        "targetSentence": "Phonetics rule: \"If the verb does not end in a T or D sound, the letter E is silent in speech.\" Complete the Simple Past spelling: In the morning, I <span class=\"blank-slot\">________</span> (check) my emails and <span class=\"blank-slot\">________</span> (fix) the issue.",
        "subtext": "Identify the correct phonetic pronunciation rule for regular past endings:",
        "options": [
          {
            "text": "checked / fixed",
            "isCorrect": true,
            "errorType": null,
            "errorLabel": null,
            "diagnosticNote": "Correct! Slide 4: after voiceless consonants /k/, the -ed is pronounced as a sharp /t/, and the letter 'e' is completely silent (/wɜːrkt/)."
          },
          {
            "text": "checkt / fixt",
            "isCorrect": false,
            "errorType": "ERRO_FONETICO",
            "errorLabel": "Phonetic Spelling Error",
            "diagnosticNote": "Spelled phonetically with -t instead of standard regular grammatical suffix -ed."
          },
          {
            "text": "checked / fixxed",
            "isCorrect": false,
            "errorType": "DUPLICACAO_CONSOANTE_X",
            "errorLabel": "Unnecessary Consonant Doubling",
            "diagnosticNote": "The letter x represents two sounds (/ks/) and is never doubled before -ed."
          },
          {
            "text": "check / fixed",
            "isCorrect": false,
            "errorType": "INCONSISTENCIA_TEMPORAL",
            "errorLabel": "Tense Inconsistency",
            "diagnosticNote": "Forgot to inflect the first verb (check) into the past tense."
          }
        ],
        "rule": "Slide 4 Rule: After voiceless sounds like /k/, /p/, /s/, /ʃ/, the suffix -ed sounds like a crisp <strong>/t/</strong> and the 'e' is silent: <em>worked ➔ /wɜːrkt/</em>."
      },
      {
        "id": 6,
        "level": 6,
        "categoryKey": "slide3_sound_d",
        "categoryLabel": "Pronunciation & Phonetics (/d/ sound)",
        "difficulty": "Level 6 • Smooth /d/ Sound without Extra Syllable",
        "ticket": "CLEANUP-DB",
        "ticketFile": "cache-flush.sh",
        "speakerRole": "Database Admin",
        "speakerName": "Roberto (DBA)",
        "scrumPrompt": "\"Post-incident cleanup step from yesterday's sprint:\"",
        "targetSentence": "After solving the memory spike, we <span class=\"blank-slot\">________</span> (clean) all the temporary logs.",
        "subtext": "Identify the correct pronunciation for opened / cleaned / deployed:",
        "options": [
          {
            "text": "cleaned",
            "isCorrect": true,
            "errorType": null,
            "errorLabel": null,
            "diagnosticNote": "Correct! Slide 4: after voiced sounds like /n/ or vowels, -ed sounds like /d/ without creating an extra syllable (/oʊ.pənd/)."
          },
          {
            "text": "cleand",
            "isCorrect": false,
            "errorType": "OMISSAO_VOGAL_E",
            "errorLabel": "Omission of 'e' in -ed",
            "diagnosticNote": "Omitted the letter 'e' from standard regular spelling -ed."
          },
          {
            "text": "clean",
            "isCorrect": false,
            "errorType": "OMISSAO_CONJUGACAO",
            "errorLabel": "Conjugation Omission (Present Form)",
            "diagnosticNote": "Kept the uninflected present base form clean."
          },
          {
            "text": "cleant",
            "isCorrect": false,
            "errorType": "ERRO_FONETICO",
            "errorLabel": "Phonetic Confusion: /t/ vs /d/",
            "diagnosticNote": "Clean ends in voiced sound /n/, taking a smooth /d/ sound, spelled -ed."
          }
        ],
        "rule": "Slide 4 Rule: After voiced consonants and vowel sounds, -ed is pronounced as a smooth <strong>/d/</strong> without adding a syllable: <em>opened ➔ /ˈoʊ.pənd/</em>."
      },
      {
        "id": 7,
        "level": 7,
        "categoryKey": "slide4_sound_id",
        "categoryLabel": "Pronunciation & Phonetics (/ɪd/ sound)",
        "difficulty": "Level 7 • Extra Syllable Creation (/ɪd/)",
        "ticket": "TEST-SUITE",
        "ticketFile": "jest-runner.js",
        "speakerRole": "QA Engineer",
        "speakerName": "Renata (QA Engineer)",
        "scrumPrompt": "\"Phonetics rule: pronounce '-ed' as /ɪd/ only when the base verb already ends in a T or D sound:\"",
        "targetSentence": "Before deploying, Sarah <span class=\"blank-slot\">________</span> (test) the code and <span class=\"blank-slot\">________</span> (start) the test suite.",
        "subtext": "Identify the phonetic condition that creates an extra syllable (/ɪd/):",
        "options": [
          {
            "text": "tested / started",
            "isCorrect": true,
            "errorType": null,
            "errorLabel": null,
            "diagnosticNote": "Correct! Slide 4: only verbs ending in /t/ or /d/ sounds take the /ɪd/ ending, adding an extra syllable (test ➔ test-ed, start ➔ start-ed)."
          },
          {
            "text": "test / start",
            "isCorrect": false,
            "errorType": "OMISSAO_CONJUGACAO",
            "errorLabel": "Conjugation Omission",
            "diagnosticNote": "Omitted past tense inflection for both verbs."
          },
          {
            "text": "testted / started",
            "isCorrect": false,
            "errorType": "DUPLICACAO_CONSOANTE_T",
            "errorLabel": "Unnecessary T Doubling",
            "diagnosticNote": "'Test' already ends in -st (two consonants), so the T is not doubled."
          },
          {
            "text": "tested / was start",
            "isCorrect": false,
            "errorType": "TO_BE_AUXILIAR_INDEVIDO",
            "errorLabel": "Ungrammatical 'was start'",
            "diagnosticNote": "Invented hybrid structure 'was start' instead of standard started."
          }
        ],
        "rule": "Slide 4 Rule: Only when a base verb ends in a <strong>T</strong> or <strong>D</strong> sound do we pronounce <strong>/ɪd/</strong>, creating an extra syllable: <em>tested ➔ /ˈtes.tɪd/</em>, <em>started ➔ /ˈstɑːr.tɪd/</em>."
      },
      {
        "id": 8,
        "level": 8,
        "categoryKey": "slide4_create",
        "categoryLabel": "Pronunciation & Phonetics (/t/ on -e verbs)",
        "difficulty": "Level 8 • Verbs Ending in -e with /t/ Sound",
        "ticket": "DOCKER-FLOW",
        "ticketFile": "container-lifecycle.sh",
        "speakerRole": "Software Engineer",
        "speakerName": "Felipe (Fullstack Dev)",
        "scrumPrompt": "\"Applying past spelling rules to cloud infrastructure verbs:\"",
        "targetSentence": "Yesterday, the team <span class=\"blank-slot\">________</span> (create) the container and <span class=\"blank-slot\">________</span> (restart) the service.",
        "subtext": "Identify the pronunciation of verbs ending in silent -e like 'close', 'release', 'produce':",
        "options": [
          {
            "text": "created / restarted",
            "isCorrect": true,
            "errorType": null,
            "errorLabel": null,
            "diagnosticNote": "Correct! Slide 4: 'released' ends in voiceless /s/, so the -ed ending is pronounced /t/ (/rɪˈliːst/)."
          },
          {
            "text": "createed / restarted",
            "isCorrect": false,
            "errorType": "DUPLICACAO_E",
            "errorLabel": "Double 'E' in Create",
            "diagnosticNote": "Verbs ending in -e simply take -d (create ➔ created), not -eed."
          },
          {
            "text": "created / restart",
            "isCorrect": false,
            "errorType": "INCONSISTENCIA_TEMPORAL",
            "errorLabel": "Tense Inconsistency",
            "diagnosticNote": "Forgot to inflect the second verb restart."
          },
          {
            "text": "was create / restarted",
            "isCorrect": false,
            "errorType": "TO_BE_AUXILIAR_INDEVIDO",
            "errorLabel": "Ungrammatical 'was create'",
            "diagnosticNote": "Invented ungrammatical structure with 'was'."
          }
        ],
        "rule": "Slide 4 Rule: Verbs ending in voiceless /s/ like <em>release</em> take the crisp <strong>/t/</strong> sound: <em>released ➔ /rɪˈliːst/</em>."
      },
      {
        "id": 9,
        "level": 9,
        "categoryKey": "slide5_reading1",
        "categoryLabel": "Standup Reading: Incident Narrative",
        "difficulty": "Level 9 • Full Standup Incident Story",
        "ticket": "READING-01",
        "ticketFile": "daily-story-1.txt",
        "speakerRole": "Engineering Lead",
        "speakerName": "Thomas (Tech Lead)",
        "scrumPrompt": "\"Complete the incident log narrative from the standup reading practice:\"",
        "targetSentence": "Technical narrative: \"In the afternoon, the build <span class=\"blank-slot\">________</span> (break), so I <span class=\"blank-slot\">________</span> (restart) the server and <span class=\"blank-slot\">________</span> (read) the error logs. Finally, I <span class=\"blank-slot\">________</span> (send) a message on Slack to inform the tech lead.\"",
        "subtext": "Simple Past conjugation of the 4 verbs in the incident narrative (regular and irregular):",
        "options": [
          {
            "text": "broke / restarted / read / sent",
            "isCorrect": true,
            "errorType": null,
            "errorLabel": null,
            "diagnosticNote": "Perfect! Mastered the irregulars from Slide 5: break ➔ broke, read ➔ read (/rɛd/), send ➔ sent, and regular restart ➔ restarted."
          },
          {
            "text": "breaked / restarted / readed / sended",
            "isCorrect": false,
            "errorType": "REGULARIZACAO_MULTIPLA_IRREGULARES",
            "errorLabel": "Incorrect -ed on All Irregulars",
            "diagnosticNote": "Attempted to regularize break, read, and send ('breaked', 'readed', and 'sended' do not exist)."
          },
          {
            "text": "broke / restart / read / sent",
            "isCorrect": false,
            "errorType": "INCONSISTENCIA_TEMPORAL",
            "errorLabel": "Present Form in Narrative",
            "diagnosticNote": "Forgot to conjugate 'restart' into the past tense."
          },
          {
            "text": "was break / restarted / was read / sent",
            "isCorrect": false,
            "errorType": "TO_BE_AUXILIAR_INDEVIDO",
            "errorLabel": "Ungrammatical 'was' + Verb",
            "diagnosticNote": "Invented 'was break' and 'was read' instead of standard past forms."
          }
        ],
        "rule": "Slide 5 Rule (Reading 1): <em>break ➔ broke</em>, <em>restart ➔ restarted</em>, <em>read ➔ read</em> (/rɛd/), and <em>send ➔ sent</em>."
      },
      {
        "id": 10,
        "level": 10,
        "categoryKey": "slide6_reading2",
        "categoryLabel": "Standup Reading: PR & Deploy Workflow",
        "difficulty": "Level 10 • Full Technical Workflow Narrative",
        "ticket": "READING-02",
        "ticketFile": "daily-story-2.txt",
        "speakerRole": "Staff Engineer",
        "speakerName": "Helena (Staff Engineer)",
        "scrumPrompt": "\"Complete the full PR & Deploy workflow narrative from standup reading practice:\"",
        "targetSentence": "Technical narrative: \"Yesterday morning, I had a sync call. We <span class=\"blank-slot\">________</span> (find) an error, so I <span class=\"blank-slot\">________</span> (open) the repository and <span class=\"blank-slot\">________</span> (fix) the bug. Then, I <span class=\"blank-slot\">________</span> (run) the tests, pushed the branch, and <span class=\"blank-slot\">________</span> (create) a pull request. In the afternoon, the tech lead <span class=\"blank-slot\">________</span> (approve) my code and we <span class=\"blank-slot\">________</span> (deploy) it to production.\"",
        "subtext": "Simple Past conjugation of the 7 verbs maintaining narrative temporal consistency:",
        "options": [
          {
            "text": "found / opened / fixed / ran / created / approved / deployed",
            "isCorrect": true,
            "errorType": null,
            "errorLabel": null,
            "diagnosticNote": "Outstanding! Fully mastered the technical narrative with regular and irregular computing verbs."
          },
          {
            "text": "finded / opened / fixed / runned / created / approved / deployed",
            "isCorrect": false,
            "errorType": "REGULARIZACAO_IRREGULAR",
            "errorLabel": "Missed Irregulars Find and Run",
            "diagnosticNote": "The past of find is found, and the past of run is ran ('finded' and 'runned' do not exist)."
          },
          {
            "text": "founded / opened / fix / ran / create / approved / deploy",
            "isCorrect": false,
            "errorType": "MULTIPLOS_ERROS_TEMPORAIS",
            "errorLabel": "Mixed Present and Nonexistent Forms",
            "diagnosticNote": "Forgot to conjugate fix, create, and deploy into the past tense."
          },
          {
            "text": "found / open / fixed / was run / created / approved / deployed",
            "isCorrect": false,
            "errorType": "TO_BE_EM_VERBO_ACAO",
            "errorLabel": "Temporal Inconsistency ('was run', 'open')",
            "diagnosticNote": "Inconsistent tense usage disrupting narrative flow."
          }
        ],
        "rule": "Slide 6 Rule (Reading 2): Irregular verbs: <em>found, ran</em>; Regular verbs with -ed: <em>opened, fixed, created, approved, deployed</em>."
      }
    ]
  },
  {
    "id": "present-simple-continuous",
    "title": "Present Simple vs Continuous: Bug Triage",
    "level": "A1 ➔ A2",
    "badge": "PRESENT DRILL",
    "color": "green",
    "icon": "🐛",
    "description": "Differentiate habits and system routines (Present Simple) from ongoing real-time processes and deployments (Present Continuous), plus stative verbs.",
    "estimatedMinutes": 5,
    "totalQuestions": 8,
    "targetSkills": [
      "Present Simple Rule (system routines and 3rd person singular -s)",
      "Present Continuous Rule (in-progress actions: be + -ing)",
      "Stative Verbs (mental/state verbs without continuous form)",
      "Time Markers & DevOps Temporal Context"
    ],
    "questions": [
      {
        "id": 1,
        "level": 1,
        "categoryKey": "present_simple",
        "categoryLabel": "Present Simple: Routine & Habits",
        "difficulty": "Level 1 • System Routine",
        "ticket": "CRON-01",
        "ticketFile": "cron-job.sh",
        "speakerRole": "DevOps Engineer",
        "speakerName": "Rodrigo (Cloud Arch)",
        "scrumPrompt": "\"How often does the backup script run?\"",
        "targetSentence": "Our automated database backup always <span class=\"blank-slot\">________</span> (execute) at midnight.",
        "subtext": "Expressing routine and recurring facts with adverb 'always':",
        "options": [
          {
            "text": "executes",
            "isCorrect": true,
            "errorType": null,
            "errorLabel": null,
            "diagnosticNote": "Correct! Singular subject (backup = it) takes -s in Present Simple."
          },
          {
            "text": "is executing",
            "isCorrect": false,
            "errorType": "CONFUSAO_ROTINA_CONTINUA",
            "errorLabel": "Continuous Form for Recurring Habit",
            "diagnosticNote": "Used continuous for a permanent routine marked by 'always at midnight'."
          },
          {
            "text": "execute",
            "isCorrect": false,
            "errorType": "CONCORDANCIA_3A_PESSOA",
            "errorLabel": "Omission of 3rd Person Singular -s",
            "diagnosticNote": "Omitted -s for third-person singular (the backup = it)."
          },
          {
            "text": "executed",
            "isCorrect": false,
            "errorType": "CONFUSAO_TEMPO_PASSADO",
            "errorLabel": "Past Tense for Current Routine",
            "diagnosticNote": "Used past tense for a recurring daily routine."
          }
        ],
        "rule": "For routines and permanent facts with 3rd person singular (it), add <strong>-s / -es</strong> in Present Simple (<em>it executes</em>)."
      },
      {
        "id": 2,
        "level": 2,
        "categoryKey": "present_continuous",
        "categoryLabel": "Present Continuous: In-Progress Actions",
        "difficulty": "Level 2 • Real-Time Action",
        "ticket": "INCIDENT-LIVE",
        "ticketFile": "cluster-status.ts",
        "speakerRole": "Incident Commander",
        "speakerName": "Amanda (Lead SRE)",
        "scrumPrompt": "\"What is the team doing right now about the memory leak?\"",
        "targetSentence": "Right now, the engineering team <span class=\"blank-slot\">________</span> (investigate) the memory leak.",
        "subtext": "Action occurring at the exact moment of speaking (Right now):",
        "options": [
          {
            "text": "is investigating",
            "isCorrect": true,
            "errorType": null,
            "errorLabel": null,
            "diagnosticNote": "Correct! Collective singular subject 'the team' takes is + verb-ing for real-time actions."
          },
          {
            "text": "investigates",
            "isCorrect": false,
            "errorType": "PRESENTE_SIMPLES_EM_ACAO_AO_VIVO",
            "errorLabel": "Present Simple for Live Momentary Action",
            "diagnosticNote": "With time markers like 'Right now', Present Continuous is required."
          },
          {
            "text": "are investigate",
            "isCorrect": false,
            "errorType": "AUXILIAR_SEM_ING",
            "errorLabel": "To Be Auxiliary without -ing",
            "diagnosticNote": "Used auxiliary to be without adding -ing to the main verb."
          },
          {
            "text": "investigating",
            "isCorrect": false,
            "errorType": "OMISSAO_TO_BE_CONTINUO",
            "errorLabel": "Omission of Auxiliary To Be",
            "diagnosticNote": "Used -ing participle without auxiliary to be (is/are)."
          }
        ],
        "rule": "Actions currently in progress at the time of speaking (<em>right now, at the moment</em>) require <strong>am/is/are + verb-ing</strong>."
      },
      {
        "id": 3,
        "level": 3,
        "categoryKey": "stative",
        "categoryLabel": "Stative Verbs (No -ing)",
        "difficulty": "Level 3 • Stative Verbs",
        "ticket": "ARCH-10",
        "ticketFile": "system-design.md",
        "speakerRole": "Software Architect",
        "speakerName": "Bruno (Principal Architect)",
        "scrumPrompt": "\"Do we have enough memory allocation for the new microservice?\"",
        "targetSentence": "The backend microservice <span class=\"blank-slot\">________</span> (need) more RAM to handle the payload.",
        "subtext": "Verbs of necessity and state (need, want, know):",
        "options": [
          {
            "text": "needs",
            "isCorrect": true,
            "errorType": null,
            "errorLabel": null,
            "diagnosticNote": "Correct! 'Need' is a stative verb and does not take continuous forms in standard context."
          },
          {
            "text": "is needing",
            "isCorrect": false,
            "errorType": "STATIVE_VERB_CONTINUO",
            "errorLabel": "Incorrect Continuous with Stative Verb",
            "diagnosticNote": "Verbs like need, know, and understand express enduring states and do not take gerunds."
          },
          {
            "text": "need",
            "isCorrect": false,
            "errorType": "CONCORDANCIA_3A_PESSOA",
            "errorLabel": "Omission of 3rd Person Singular -s",
            "diagnosticNote": "Omitted -s for singular subject (the microservice = it)."
          },
          {
            "text": "does need",
            "isCorrect": false,
            "errorType": "ENFASE_INADEQUADA",
            "errorLabel": "Unnecessary Auxiliary in Affiramtive",
            "diagnosticNote": "Used 'does need' without contrastive emphasis context."
          }
        ],
        "rule": "<strong>Stative verbs</strong> (such as <em>need, understand, know, want</em>) express mental states or conditions and are not used with <em>-ing</em> in standard contexts."
      },
      {
        "id": 4,
        "level": 4,
        "categoryKey": "present_simple",
        "categoryLabel": "Present Negative: Don't vs Doesn't",
        "difficulty": "Level 4 • 3rd Person Negative",
        "ticket": "API-GATEWAY",
        "ticketFile": "gateway.config.json",
        "speakerRole": "Backend Dev",
        "speakerName": "Lucas (Backend Dev)",
        "scrumPrompt": "\"Why is the legacy client receiving 401 Unauthorized?\"",
        "targetSentence": "The legacy authentication API <span class=\"blank-slot\">________</span> (not support) OAuth2 tokens.",
        "subtext": "Negative Present Simple for 3rd person singular subject (the API = it):",
        "options": [
          {
            "text": "doesn't support",
            "isCorrect": true,
            "errorType": null,
            "errorLabel": null,
            "diagnosticNote": "Correct! 3rd person singular takes doesn't + bare base verb."
          },
          {
            "text": "don't support",
            "isCorrect": false,
            "errorType": "CONCORDANCIA_AUXILIAR_NEGATIVO",
            "errorLabel": "Using Don't instead of Doesn't",
            "diagnosticNote": "Used 'don't' for singular subject (it). He/she/it takes doesn't."
          },
          {
            "text": "doesn't supports",
            "isCorrect": false,
            "errorType": "DUPLO_S_PRESENTE",
            "errorLabel": "Double -s on Main Verb",
            "diagnosticNote": "With auxiliary doesn't, the main verb drops the -s and returns to base form (support)."
          },
          {
            "text": "isn't support",
            "isCorrect": false,
            "errorType": "TO_BE_COMO_AUXILIAR_ACAO",
            "errorLabel": "Using 'isn't' with Action Verb",
            "diagnosticNote": "Used isn't instead of doesn't to negate a regular action verb."
          }
        ],
        "rule": "To form negative sentences in 3rd person singular Present Simple: <strong>doesn't + base verb</strong> (without -s on the main verb)."
      }
    ]
  },
  {
    "id": "in-on-at-prepositions",
    "title": "Prepositions in Tech: IN, ON, AT",
    "level": "A1 ➔ A2",
    "badge": "IN, ON, AT",
    "color": "purple",
    "icon": "📍",
    "description": "Master surgical precision with IN, ON, and AT in daily syncs, sprint planning, and cloud architectures: time from decades to seconds, physical vs digital locations, and dev environments.",
    "estimatedMinutes": 6,
    "totalQuestions": 10,
    "slideDeckId": "in-on-at",
    "targetSkills": [
      "Time Prepositions (Exact hours vs Days vs Months/Years)",
      "Place Prepositions (Cities vs Surfaces/Platforms vs Reference Points)",
      "Tech & Digital Environments (on GitHub, in database, on screen)",
      "Workspaces & Daily Syncs (on the call, at home, at my desk)"
    ],
    "questions": [
      {
        "id": 1,
        "level": 1,
        "categoryKey": "time_hours",
        "categoryLabel": "Prepositions of Time (Exact Hours)",
        "difficulty": "Level 1 • Basic",
        "ticket": "DAILY-01",
        "ticketFile": "calendar-sync.ts",
        "speakerRole": "Scrum Master",
        "speakerName": "Ana (Agile Coach)",
        "scrumPrompt": "\"Lucas, what time does our team standup start every morning?\"",
        "targetSentence": "Our daily standup meeting starts <span class=\"blank-slot\">________</span> 9:30 AM sharp.",
        "subtext": "Select the correct technical preposition for exact clock times:",
        "options": [
          {
            "text": "at",
            "isCorrect": true,
            "errorType": null,
            "errorLabel": null,
            "diagnosticNote": "Correct! We always use AT for precise, point-in-time clock hours (at 9:30 AM, at noon, at midnight)."
          },
          {
            "text": "in",
            "isCorrect": false,
            "errorType": "CONFUSAO_IN_HORARIO",
            "errorLabel": "Using IN for Specific Hour",
            "diagnosticNote": "Translation trap. IN is used for broad periods like months, years, and seasons, never clock times."
          },
          {
            "text": "on",
            "isCorrect": false,
            "errorType": "CONFUSAO_ON_HORARIO",
            "errorLabel": "Using ON for Specific Hour",
            "diagnosticNote": "ON is reserved for calendar days and specific dates (e.g., on Monday, on May 4th), not hours."
          },
          {
            "text": "to",
            "isCorrect": false,
            "errorType": "PREPOSICAO_DIRECIONAL_ERRADA",
            "errorLabel": "Directional Preposition (To)",
            "diagnosticNote": "To indicates directional movement ('go to'), not a static temporal point."
          }
        ],
        "rule": "For exact clock hours and precise moments: always use <strong>AT</strong> (<em>at 9:00 AM, at 3:30 PM, at noon, at midnight</em>)."
      },
      {
        "id": 2,
        "level": 2,
        "categoryKey": "time_days",
        "categoryLabel": "Prepositions of Time (Calendar Days)",
        "difficulty": "Level 2 • Basic",
        "ticket": "SPRINT-PLAN",
        "ticketFile": "sprint-backlog.md",
        "speakerRole": "Product Manager",
        "speakerName": "David (PM)",
        "scrumPrompt": "\"When do we usually run our sprint retrospective and release deploys?\"",
        "targetSentence": "We hold our sprint retrospective <span class=\"blank-slot\">________</span> Fridays.",
        "subtext": "Select the correct technical preposition for days of the week:",
        "options": [
          {
            "text": "on",
            "isCorrect": true,
            "errorType": null,
            "errorLabel": null,
            "diagnosticNote": "Correct! Days of the week and calendar dates always take ON (on Friday, on Mondays, on October 21st)."
          },
          {
            "text": "in",
            "isCorrect": false,
            "errorType": "CONFUSAO_IN_DIA",
            "errorLabel": "Using IN for Days of Week",
            "diagnosticNote": "Direct translation trap. In English, the mid-level time scale (days) requires ON, never IN."
          },
          {
            "text": "at",
            "isCorrect": false,
            "errorType": "CONFUSAO_AT_DIA",
            "errorLabel": "Using AT for Days of Week",
            "diagnosticNote": "AT is ultra-specific (clock hours). For full 24-hour days, use ON."
          },
          {
            "text": "by",
            "isCorrect": false,
            "errorType": "CONFUSAO_DEADLINE",
            "errorLabel": "Using By (Deadline Context)",
            "diagnosticNote": "By means 'no later than' (e.g. by Friday), not recurring meetings on Fridays."
          }
        ],
        "rule": "For days of the week, dates, and days with the word 'day': always use <strong>ON</strong> (<em>on Monday, on October 21st, on Christmas Day</em>)."
      },
      {
        "id": 3,
        "level": 3,
        "categoryKey": "time_months_years",
        "categoryLabel": "Prepositions of Time (Months & Years)",
        "difficulty": "Level 3 • Intermediate",
        "ticket": "ROADMAP-2025",
        "ticketFile": "roadmap.json",
        "speakerRole": "Tech Lead",
        "speakerName": "Carlos (Tech Lead)",
        "scrumPrompt": "\"When is the v2.0 microservice architecture rollout planned?\"",
        "targetSentence": "The architecture migration will be completed <span class=\"blank-slot\">________</span> November.",
        "subtext": "Select the correct technical preposition for months and years:",
        "options": [
          {
            "text": "in",
            "isCorrect": true,
            "errorType": null,
            "errorLabel": null,
            "diagnosticNote": "Correct! Months, seasons, years, and centuries (top of the time pyramid) take IN (in November, in 2025)."
          },
          {
            "text": "on",
            "isCorrect": false,
            "errorType": "CONFUSAO_ON_MES",
            "errorLabel": "Using ON for Standalone Month",
            "diagnosticNote": "ON is only used if a specific day is included (on November 15th). For the month alone, use IN."
          },
          {
            "text": "at",
            "isCorrect": false,
            "errorType": "CONFUSAO_AT_MES",
            "errorLabel": "Using AT for Month/Year",
            "diagnosticNote": "AT is restricted to specific clock times, not broad multi-week periods."
          },
          {
            "text": "during at",
            "isCorrect": false,
            "errorType": "PREPOSICAO_COMPOSTA_INVALIDA",
            "errorLabel": "Directional Preposition (To)",
            "diagnosticNote": "To indicates destination, not temporal containment."
          }
        ],
        "rule": "For standalone months, years, centuries, and parts of the day (in the morning/afternoon): always use <strong>IN</strong> (<em>in November, in 2025, in the morning</em>)."
      },
      {
        "id": 4,
        "level": 4,
        "categoryKey": "place_city_country",
        "categoryLabel": "Prepositions of Place (Cities & Regions)",
        "difficulty": "Level 4 • Intermediate",
        "ticket": "REMOTE-HUB",
        "ticketFile": "team-roster.yaml",
        "speakerRole": "HR Lead",
        "speakerName": "Clara (People Ops)",
        "scrumPrompt": "\"Where is our new remote frontend developer currently located?\"",
        "targetSentence": "He is currently based <span class=\"blank-slot\">________</span> San Francisco, California.",
        "subtext": "Select the correct technical preposition for cities, countries, and geographical regions:",
        "options": [
          {
            "text": "in",
            "isCorrect": true,
            "errorType": null,
            "errorLabel": null,
            "diagnosticNote": "Correct! Cities, countries, states, and enclosed geographic areas take IN (in San Francisco, in Brazil)."
          },
          {
            "text": "at",
            "isCorrect": false,
            "errorType": "CONFUSAO_AT_CIDADE",
            "errorLabel": "Using AT for Large City",
            "diagnosticNote": "AT indicates a specific point or venue, not an entire metropolitan city or region."
          },
          {
            "text": "on",
            "isCorrect": false,
            "errorType": "CONFUSAO_ON_CIDADE",
            "errorLabel": "Using ON for Geographical Region",
            "diagnosticNote": "ON indicates a surface or platform, not a geographic territory."
          },
          {
            "text": "inside at",
            "isCorrect": false,
            "errorType": "PREPOSICAO_COMPOSTA_INCORRETA",
            "errorLabel": "Directional Preposition (To)",
            "diagnosticNote": "To requires dynamic movement verbs (travel to, fly to). With static location 'located', use IN."
          }
        ],
        "rule": "For countries, states, cities, neighborhoods, and enclosed physical spaces: always use <strong>IN</strong> (<em>in Brazil, in San Francisco, in the meeting room</em>)."
      },
      {
        "id": 5,
        "level": 5,
        "categoryKey": "place_streets",
        "categoryLabel": "Prepositions of Place (Streets & Avenues)",
        "difficulty": "Level 5 • Intermediate",
        "ticket": "OFFICE-MAP",
        "ticketFile": "headquarters.json",
        "speakerRole": "Facility Manager",
        "speakerName": "Roberto (Ops)",
        "scrumPrompt": "\"Where is our innovation headquarters located in São Paulo?\"",
        "targetSentence": "Our tech hub is located <span class=\"blank-slot\">________</span> Paulista Avenue.",
        "subtext": "Select the correct technical preposition for streets and avenues without building numbers:",
        "options": [
          {
            "text": "on",
            "isCorrect": true,
            "errorType": null,
            "errorLabel": null,
            "diagnosticNote": "Correct! Streets, avenues, and roads without building numbers take ON (on Market Street, on 5th Avenue)."
          },
          {
            "text": "in",
            "isCorrect": false,
            "errorType": "CONFUSAO_IN_RUA",
            "errorLabel": "Using IN for Streets",
            "diagnosticNote": "Translation trap. In English, you are considered to be 'on' the surface of the street corridor."
          },
          {
            "text": "at",
            "isCorrect": false,
            "errorType": "CONFUSAO_AT_SEM_NUMERO",
            "errorLabel": "Using AT for Street without Number",
            "diagnosticNote": "AT requires an exact street number (e.g. at 500 Market St). Without a number, use ON."
          },
          {
            "text": "across",
            "isCorrect": false,
            "errorType": "PREPOSICAO_GEOMETRICA_INVALIDA",
            "errorLabel": "Incompatible Preposition (Across)",
            "diagnosticNote": "Across means traversing from one side to the other, not general location on a street."
          }
        ],
        "rule": "For streets, avenues, and roads without a building number: use <strong>ON</strong> (<em>on Paulista Avenue, on 5th Street</em>). When an exact building number is present, use <strong>AT</strong>."
      },
      {
        "id": 6,
        "level": 6,
        "categoryKey": "place_address_point",
        "categoryLabel": "Prepositions of Place (Exact Address & Number)",
        "difficulty": "Level 6 • Advanced",
        "ticket": "CLIENT-MEET",
        "ticketFile": "meeting-agenda.ics",
        "speakerRole": "Account Exec",
        "speakerName": "Mariana (Sales Lead)",
        "scrumPrompt": "\"Where is the client onsite meeting happening tomorrow afternoon?\"",
        "targetSentence": "The meeting with the fintech client is <span class=\"blank-slot\">________</span> 450 Market Street, 8th floor.",
        "subtext": "Select the correct technical preposition for an exact address with building number:",
        "options": [
          {
            "text": "at",
            "isCorrect": true,
            "errorType": null,
            "errorLabel": null,
            "diagnosticNote": "Correct! An exact building number makes the location a precise GPS point, requiring AT (at 742 Evergreen Terrace)."
          },
          {
            "text": "on",
            "isCorrect": false,
            "errorType": "CONFUSAO_ON_COM_NUMERO",
            "errorLabel": "Using ON for Address with Number",
            "diagnosticNote": "If the building number is included, the preposition switches from ON to AT."
          },
          {
            "text": "in",
            "isCorrect": false,
            "errorType": "CONFUSAO_IN_ENDERECO",
            "errorLabel": "Using IN for Address with Number",
            "diagnosticNote": "IN is used for cities or room interiors, not standard civic street addresses."
          },
          {
            "text": "under",
            "isCorrect": false,
            "errorType": "PREPOSICAO_SEM_SENTIDO",
            "errorLabel": "Directional Preposition (To)",
            "diagnosticNote": "With static verb 'is located', directional 'to' is ungrammatical."
          }
        ],
        "rule": "When an <strong>exact building number</strong> or designated meeting point is specified: use <strong>AT</strong> (<em>at 450 Market St, at the bus stop, at reception</em>)."
      },
      {
        "id": 7,
        "level": 7,
        "categoryKey": "tech_platforms",
        "categoryLabel": "Tech & Digital Prepositions (Screens & Platforms)",
        "difficulty": "Level 7 • Advanced",
        "ticket": "PULL-REQUEST-77",
        "ticketFile": "ci-pipeline.yml",
        "speakerRole": "DevOps Engineer",
        "speakerName": "Felipe (DevOps)",
        "scrumPrompt": "\"Lucas, where can I find the new Docker container configuration?\"",
        "targetSentence": "I pushed the commit and opened the pull request <span class=\"blank-slot\">________</span> GitHub.",
        "subtext": "Select the correct technical preposition for websites, platforms, and screens:",
        "options": [
          {
            "text": "on",
            "isCorrect": true,
            "errorType": null,
            "errorLabel": null,
            "diagnosticNote": "Correct! Websites, cloud consoles, social networks, and screens take ON (on GitHub, on AWS, on Slack, on screen)."
          },
          {
            "text": "in",
            "isCorrect": false,
            "errorType": "CONFUSAO_IN_PLATAFORMA",
            "errorLabel": "Using IN for Platforms and Websites",
            "diagnosticNote": "Translation trap ('no GitHub'). In English, websites and platforms are surfaces/channels, requiring ON."
          },
          {
            "text": "at",
            "isCorrect": false,
            "errorType": "CONFUSAO_AT_PLATAFORMA",
            "errorLabel": "Using AT for Web Platforms",
            "diagnosticNote": "AT is for physical addresses or email user delimiters (@), not web platforms."
          },
          {
            "text": "into",
            "isCorrect": false,
            "errorType": "PREPOSICAO_DINAMICA_INADEQUADA",
            "errorLabel": "Using By for Digital Hosting",
            "diagnosticNote": "By indicates authorship or proximity, not host platform."
          }
        ],
        "rule": "For screens, digital interfaces, networks, and online platforms: always use <strong>ON</strong> (<em>on GitHub, on AWS, on Slack, on the screen, on the internet</em>)."
      },
      {
        "id": 8,
        "level": 8,
        "categoryKey": "tech_storage",
        "categoryLabel": "Tech & Digital Prepositions (Database vs Server)",
        "difficulty": "Level 8 • Advanced",
        "ticket": "DB-CACHE-99",
        "ticketFile": "session-store.ts",
        "speakerRole": "Security Lead",
        "speakerName": "Helena (SecOps)",
        "scrumPrompt": "\"Where are the encrypted user authentication tokens stored?\"",
        "targetSentence": "User tokens are stored securely <span class=\"blank-slot\">________</span> the PostgreSQL database.",
        "subtext": "Select the correct prepositions for internal data storage (database) vs hardware hosts (server):",
        "options": [
          {
            "text": "in",
            "isCorrect": true,
            "errorType": null,
            "errorLabel": null,
            "diagnosticNote": "Correct! Data is stored IN a database/file, while applications run ON a server/host machine."
          },
          {
            "text": "on",
            "isCorrect": false,
            "errorType": "CONFUSAO_ON_DATABASE",
            "errorLabel": "Inverted Tech Prepositions",
            "diagnosticNote": "Inverted both contexts: we store data IN databases, and host workloads ON servers."
          },
          {
            "text": "at",
            "isCorrect": false,
            "errorType": "CONFUSAO_AT_DATABASE",
            "errorLabel": "Using AT for Internal Data",
            "diagnosticNote": "AT does not express internal containerized data storage."
          },
          {
            "text": "about",
            "isCorrect": false,
            "errorType": "PREPOSICAO_SEM_SENTIDO",
            "errorLabel": "Nonsensical Preposition (About)",
            "diagnosticNote": "About means concerning/regarding, with no technical storage usage."
          }
        ],
        "rule": "For internal data and source code: use <strong>IN</strong> (<em>in the database, in the file, in the repository</em>). For machines, hosts, and servers: use <strong>ON</strong> (<em>on the server, on localhost</em>)."
      },
      {
        "id": 9,
        "level": 9,
        "categoryKey": "transportation",
        "categoryLabel": "Transportation Prepositions (Train vs Car)",
        "difficulty": "Level 9 • Advanced",
        "ticket": "COMMUTE-SYNC",
        "ticketFile": "slack-status.json",
        "speakerRole": "Scrum Master",
        "speakerName": "Carlos (Tech Lead)",
        "scrumPrompt": "\"Why did Lucas join the daily standup with background noise?\"",
        "targetSentence": "Sorry guys, I am joining the call from my phone because I am <span class=\"blank-slot\">________</span> the train.",
        "subtext": "Select the correct preposition for public mass transit vs small private vehicles:",
        "options": [
          {
            "text": "on",
            "isCorrect": true,
            "errorType": null,
            "errorLabel": null,
            "diagnosticNote": "Correct! On vehicles where you can stand up and walk down an aisle (train, bus, subway, plane), use ON (on the train)."
          },
          {
            "text": "in",
            "isCorrect": false,
            "errorType": "TRANSPORTE_CARRO_VS_TREM",
            "errorLabel": "Car (In) vs Mass Transit (On) Confusion",
            "diagnosticNote": "Thought of 'inside the carriage'. In English, mass transit takes ON (on the train, on the bus). IN is for small personal vehicles (in a car, in a taxi)."
          },
          {
            "text": "at",
            "isCorrect": false,
            "errorType": "CONFUSAO_AT_TRANSPORTE",
            "errorLabel": "Using AT for Vehicle in Transit",
            "diagnosticNote": "We say 'at the station', but once aboard the moving transit vehicle we use ON (on the train)."
          },
          {
            "text": "over",
            "isCorrect": false,
            "errorType": "PREPOSICAO_INCOMPATIVEL",
            "errorLabel": "Using Over",
            "diagnosticNote": "Over means above/across, not aboard a vehicle."
          }
        ],
        "rule": "The aisle rule: if you can stand upright and walk along an aisle (train, bus, airplane, subway), use <strong>ON</strong> (<em>on the train</em>). For small enclosed vehicles (car, taxi, Uber), use <strong>IN</strong> (<em>in the car</em>)."
      },
      {
        "id": 10,
        "level": 10,
        "categoryKey": "social_routines",
        "categoryLabel": "Remote Work & Workstation Prepositions",
        "difficulty": "Level 10 • Advanced Synthesis",
        "ticket": "STANDUP-FINAL",
        "ticketFile": "daily-summary.md",
        "speakerRole": "VP of Engineering",
        "speakerName": "Beatriz (VP)",
        "scrumPrompt": "\"Lucas, where will you be working from this afternoon to assist the deployment?\"",
        "targetSentence": "I will be working <span class=\"blank-slot\">________</span> home, sitting <span class=\"blank-slot\">________</span> my desk all afternoon.",
        "subtext": "Select the correct prepositions for remote work setting and workstation position:",
        "options": [
          {
            "text": "at / at",
            "isCorrect": true,
            "errorType": null,
            "errorLabel": null,
            "diagnosticNote": "Perfect! We say 'at home' for the social home base and 'at my desk' for the focused work position."
          },
          {
            "text": "in / on",
            "isCorrect": false,
            "errorType": "CONFUSAO_IN_HOME_ON_DESK",
            "errorLabel": "Using In Home and On Desk",
            "diagnosticNote": "'In home' is unidiomatic (always 'at home'). And 'on my desk' would mean sitting literally on top of the physical wooden surface!"
          },
          {
            "text": "on / at",
            "isCorrect": false,
            "errorType": "CONFUSAO_ON_HOME",
            "errorLabel": "Using On Home",
            "diagnosticNote": "We never say 'on home' in English. The standard idiom is 'at home'."
          },
          {
            "text": "to / under",
            "isCorrect": false,
            "errorType": "PREPOSICOES_INADEQUADAS",
            "errorLabel": "Contextually Incompatible Prepositions",
            "diagnosticNote": "'Under my desk' would mean hiding underneath the desk furniture."
          }
        ],
        "rule": "Essential fixed developer routine expressions: <strong>at home</strong> (working remotely), <strong>at work</strong> (at physical office), <strong>at my desk</strong> (seated at your workstation)."
      }
    ]
  },
  {
    "id": "to-vs-for-prepositions",
    "title": "Prepositions in Tech: TO vs FOR",
    "level": "A1 ➔ A2",
    "badge": "TO vs FOR",
    "color": "emerald",
    "icon": "🎯",
    "description": "Master the crucial difference between TO and FOR in Daily Standups, Code Reviews, and team discussions: personal intention (TO + verb) vs tool utility (FOR + noun/-ing), transfer verbs, favor requests, and the 'explain to' trap.",
    "estimatedMinutes": 6,
    "totalQuestions": 10,
    "slideDeckId": "to-for",
    "targetSkills": [
      "Purpose of an Action (TO + base verb)",
      "Function / Utility of a Tool (FOR + -ing or noun)",
      "Transfer Verbs (send/give TO someone)",
      "Beneficiary & Favors (do a favor FOR someone)",
      "Crucial Verb Idiom: explain TO someone (never 'explain for/me')",
      "Time Duration (stable FOR two hours)"
    ],
    "questions": [
      {
        "id": 1,
        "level": 1,
        "categoryKey": "purpose_action",
        "categoryLabel": "Action Purpose (TO + Verb)",
        "difficulty": "Level 1 • Basic",
        "ticket": "DAILY-SYNC-01",
        "ticketFile": "auth-service.ts",
        "speakerRole": "Scrum Master",
        "speakerName": "Carlos (Tech Lead)",
        "scrumPrompt": "\"Lucas, why did you create a new Git branch yesterday afternoon?\"",
        "targetSentence": "I created a new feature branch <span class=\"blank-slot\">________</span> fix the memory leak in the login module.",
        "subtext": "Select the correct preposition according to technical English rules:",
        "options": [
          {
            "text": "to",
            "isCorrect": true,
            "errorType": null,
            "errorLabel": null,
            "diagnosticNote": "Correct! When expressing personal intention to take action with a base verb (fix), always use TO (to fix)."
          },
          {
            "text": "for",
            "isCorrect": false,
            "errorType": "CONFUSAO_FOR_COM_VERBO_BASE",
            "errorLabel": "Using FOR with Base Verb",
            "diagnosticNote": "Translation trap ('para corrigir'). In English, NEVER use 'for + base verb'. Purpose of an action requires 'to fix'."
          },
          {
            "text": "for to",
            "isCorrect": false,
            "errorType": "DUPLO_CONECTOR_FOR_TO",
            "errorLabel": "Double Connector (For To)",
            "diagnosticNote": "Used 'for to', which is non-standard and ungrammatical in modern English."
          },
          {
            "text": "at",
            "isCorrect": false,
            "errorType": "PREPOSICAO_INCOMPATIVEL",
            "errorLabel": "Incompatible Preposition (At)",
            "diagnosticNote": "AT indicates clock time or point location, unrelated to intention or action purpose."
          }
        ],
        "rule": "Golden rule of purpose: when explaining why you performed an action using a verb, always use <strong>TO + base verb</strong> (<em>to fix, to create, to deploy</em>), never <em>for + verb</em>."
      },
      {
        "id": 2,
        "level": 2,
        "categoryKey": "tool_function",
        "categoryLabel": "Tool Function (FOR + -ing/Noun)",
        "difficulty": "Level 2 • Basic",
        "ticket": "TOOLING-22",
        "ticketFile": "docker-compose.yml",
        "speakerRole": "DevOps Engineer",
        "speakerName": "Felipe (DevOps)",
        "scrumPrompt": "\"What is this new Python microservice responsible for in our cluster?\"",
        "targetSentence": "This microservice is used <span class=\"blank-slot\">________</span> parsing and aggregating real-time server logs.",
        "subtext": "Select the correct preposition according to technical English rules:",
        "options": [
          {
            "text": "for",
            "isCorrect": true,
            "errorType": null,
            "errorLabel": null,
            "diagnosticNote": "Correct! To describe the function/utility of a tool or service followed by a verb ending in -ing (parsing), use FOR (for parsing)."
          },
          {
            "text": "to",
            "isCorrect": false,
            "errorType": "CONFUSAO_TO_COM_GERUNDIO",
            "errorLabel": "Using TO with Gerund (-ing)",
            "diagnosticNote": "If using TO, the verb must be in base form ('to parse'). With an -ing verb ('parsing') indicating tool utility, the correct structure is 'for parsing'."
          },
          {
            "text": "in",
            "isCorrect": false,
            "errorType": "CONFUSAO_IN_FINALIDADE",
            "errorLabel": "Using IN for Purpose",
            "diagnosticNote": "IN indicates spatial or temporal containment, not functional purpose."
          },
          {
            "text": "with",
            "isCorrect": false,
            "errorType": "PREPOSICAO_INSTRUMENTAL_ERRADA",
            "errorLabel": "Misuse of With",
            "diagnosticNote": "With expresses an instrument or accompaniment ('with a tool'), not intrinsic purpose of a service."
          }
        ],
        "rule": "To describe the purpose or function of a tool/object: use <strong>FOR + verb-ing</strong> (<em>used for parsing logs</em>) or <strong>TO + base verb</strong> (<em>used to parse logs</em>). Never mix <em>to + -ing</em> in this structure."
      },
      {
        "id": 3,
        "level": 3,
        "categoryKey": "transfer_verbs",
        "categoryLabel": "Transfer Verbs (TO + Recipient)",
        "difficulty": "Level 3 • Basic",
        "ticket": "PR-REVIEW-04",
        "ticketFile": "slack-message.md",
        "speakerRole": "Product Owner",
        "speakerName": "Mariana (PO)",
        "scrumPrompt": "\"Lucas, did you share the updated API payload specifications with the frontend team?\"",
        "targetSentence": "Yes, I sent the updated documentation and swagger links <span class=\"blank-slot\">________</span> the frontend lead.",
        "subtext": "Select the correct preposition according to technical English rules:",
        "options": [
          {
            "text": "to",
            "isCorrect": true,
            "errorType": null,
            "errorLabel": null,
            "diagnosticNote": "Correct! Verbs of digital or physical transfer (send, forward, give, deliver, transfer) require TO to indicate the destination/recipient (to Carlos)."
          },
          {
            "text": "for",
            "isCorrect": false,
            "errorType": "CONFUSAO_FOR_DESTINATARIO_DIRETO",
            "errorLabel": "Using FOR for Delivery Recipient",
            "diagnosticNote": "Used FOR as if it were a favor. With transmission verbs (send, forward), the directional receiver takes TO."
          },
          {
            "text": "at",
            "isCorrect": false,
            "errorType": "CONFUSAO_AT_DIRECAO",
            "errorLabel": "Using AT with Transfer Verb",
            "diagnosticNote": "AT does not express directional transmission or recipient delivery."
          },
          {
            "text": "into",
            "isCorrect": false,
            "errorType": "PREPOSICAO_INSERCAO_FISICA",
            "errorLabel": "Using Towards for Recipient",
            "diagnosticNote": "Towards expresses physical directional movement towards a place, not sending artifacts to an individual."
          }
        ],
        "rule": "Verbs of physical or digital transfer (<em>send, forward, give, deliver, pass</em>) require <strong>TO</strong> to indicate the recipient or end destination (<em>send an email to Carlos</em>)."
      },
      {
        "id": 4,
        "level": 4,
        "categoryKey": "favor_benefit",
        "categoryLabel": "Favor Requests (FOR + Beneficiary)",
        "difficulty": "Level 4 • Intermediate",
        "ticket": "HOTFIX-78",
        "ticketFile": "code-review.ts",
        "speakerRole": "Senior Backend Dev",
        "speakerName": "Alex (Senior Dev)",
        "scrumPrompt": "\"Lucas, I have an urgent doctor appointment in 10 minutes. Can you help me out?\"",
        "targetSentence": "Can you please review and merge this hotfix branch <span class=\"blank-slot\">________</span> me while I am away?",
        "subtext": "Select the correct preposition according to technical English rules:",
        "options": [
          {
            "text": "for",
            "isCorrect": true,
            "errorType": null,
            "errorLabel": null,
            "diagnosticNote": "Correct! When requesting a favor or task performed on someone's behalf, use FOR (review this PR for me)."
          },
          {
            "text": "to",
            "isCorrect": false,
            "errorType": "CONFUSAO_TO_FAVOR",
            "errorLabel": "Using TO for Favor Beneficiary",
            "diagnosticNote": "Used TO. In English, doing a favor or providing help for someone's benefit requires FOR."
          },
          {
            "text": "by",
            "isCorrect": false,
            "errorType": "CONFUSAO_AGENTE_DA_PASSIVA",
            "errorLabel": "Using With for Beneficiary",
            "diagnosticNote": "With implies collaboration ('with me'), but for a delegated favor on your behalf, FOR is required."
          },
          {
            "text": "with",
            "isCorrect": false,
            "errorType": "CONFUSAO_COMPANHIA",
            "errorLabel": "Using By for Beneficiary",
            "diagnosticNote": "By indicates passive agent ('reviewed by me'), not the person receiving the favor."
          }
        ],
        "rule": "For favors, tasks performed on someone's behalf, or replacing an absent teammate: always use <strong>FOR</strong> (<em>Can you review this for me? / I deployed it for Sarah</em>)."
      },
      {
        "id": 5,
        "level": 5,
        "categoryKey": "explain_trap",
        "categoryLabel": "The Classic 'Explain' Verb Bug",
        "difficulty": "Level 5 • Intermediate",
        "ticket": "ONBOARDING-15",
        "ticketFile": "architecture-overview.md",
        "speakerRole": "Junior Developer",
        "speakerName": "Gabriel (Junior Dev)",
        "scrumPrompt": "\"I am new to the repository and having trouble following the microservices event bus.\"",
        "targetSentence": "Could you please explain the Kafka event consumer logic <span class=\"blank-slot\">________</span> me after the standup?",
        "subtext": "Select the correct preposition according to technical English rules:",
        "options": [
          {
            "text": "to",
            "isCorrect": true,
            "errorType": null,
            "errorLabel": null,
            "diagnosticNote": "Correct! In English, the verb EXPLAIN strictly requires the pattern 'explain something TO someone' (explain the pipeline to me)."
          },
          {
            "text": "for",
            "isCorrect": false,
            "errorType": "CONFUSAO_EXPLAIN_FOR",
            "errorLabel": "Using FOR with Explain",
            "diagnosticNote": "Critical false friend from Portuguese ('explica pra mim'). In English, you NEVER say 'explain for me'! Always say 'explain to me'."
          },
          {
            "text": "at",
            "isCorrect": false,
            "errorType": "PREPOSICAO_HOSTIL_INADEQUADA",
            "errorLabel": "Omitting Preposition after Explain",
            "diagnosticNote": "You cannot say 'explain me the code'! Unlike 'tell me', explain requires preposition TO."
          },
          {
            "text": "with",
            "isCorrect": false,
            "errorType": "CONFUSAO_WITH_COMUNICACAO",
            "errorLabel": "Using With with Explain",
            "diagnosticNote": "Explain does not take 'with' when addressing the listener."
          }
        ],
        "rule": "⚠️ <strong>Tech English Red Alert:</strong> The verb <em>explain</em> NEVER takes <em>for</em> or omission of preposition! Always say: <strong>explain something TO someone</strong> (<em>Please explain this to me</em>, never <em>explain me</em> or <em>explain for me</em>)."
      },
      {
        "id": 6,
        "level": 6,
        "categoryKey": "duration_vs_endpoint",
        "categoryLabel": "Time Duration (FOR + Period)",
        "difficulty": "Level 6 • Intermediate",
        "ticket": "INCIDENT-404",
        "ticketFile": "datadog-alerts.json",
        "speakerRole": "Site Reliability Engineer",
        "speakerName": "Sofia (SRE)",
        "scrumPrompt": "\"How long was the Redis caching tier unresponsive during the overnight spike?\"",
        "targetSentence": "The primary Redis cluster was completely unresponsive <span class=\"blank-slot\">________</span> 40 minutes before recovering.",
        "subtext": "Select the correct preposition according to technical English rules:",
        "options": [
          {
            "text": "for",
            "isCorrect": true,
            "errorType": null,
            "errorLabel": null,
            "diagnosticNote": "Correct! To indicate continuous elapsed time duration, use FOR (for forty minutes)."
          },
          {
            "text": "to",
            "isCorrect": false,
            "errorType": "CONFUSAO_TO_DURACAO",
            "errorLabel": "Using TO for Elapsed Duration",
            "diagnosticNote": "TO marks endpoints or destinations ('from 2 to 3 PM'). Continuous duration of elapsed time requires FOR."
          },
          {
            "text": "during",
            "isCorrect": false,
            "errorType": "DURING_COM_QUANTIDADE_NUMERICA",
            "errorLabel": "Using In for Elapsed Duration",
            "diagnosticNote": "In indicates future completion ('in 40 minutes') or calendar periods, not duration already elapsed."
          },
          {
            "text": "since",
            "isCorrect": false,
            "errorType": "CONFUSAO_SINCE_PONTO_INICIAL",
            "errorLabel": "Using During with Explicit Numbered Duration",
            "diagnosticNote": "During requires an event noun ('during the meeting'), not a bare quantity of time like 'forty minutes'."
          }
        ],
        "rule": "To express <strong>continuous duration of time</strong>, always use <strong>FOR</strong> (<em>for 40 minutes, for 2 weeks, for 5 years</em>). For initial and final boundaries, use <em>from ... to ...</em>."
      },
      {
        "id": 7,
        "level": 7,
        "categoryKey": "purpose_noun",
        "categoryLabel": "Purpose with Nouns (FOR + Noun)",
        "difficulty": "Level 7 • Advanced",
        "ticket": "BUDGET-Q4",
        "ticketFile": "cloud-expenses.csv",
        "speakerRole": "Engineering Manager",
        "speakerName": "David (EM)",
        "scrumPrompt": "\"Did finance approve our request for extra cloud infrastructure resources?\"",
        "targetSentence": "Yes, the management approved additional budget <span class=\"blank-slot\">________</span> new staging servers and GPU clusters.",
        "subtext": "Select the correct preposition according to technical English rules:",
        "options": [
          {
            "text": "for",
            "isCorrect": true,
            "errorType": null,
            "errorLabel": null,
            "diagnosticNote": "Correct! When expressing purpose followed directly by a noun (infrastructure upgrades), use FOR (budget for upgrades)."
          },
          {
            "text": "to",
            "isCorrect": false,
            "errorType": "CONFUSAO_TO_COM_SUBSTANTIVO_FINALIDADE",
            "errorLabel": "Using TO with Bare Noun for Purpose",
            "diagnosticNote": "TO requires a verb infinitive (budget to upgrade). Directly before a noun, purpose requires FOR (budget for upgrades)."
          },
          {
            "text": "at",
            "isCorrect": false,
            "errorType": "CONFUSAO_AT_DESTINACAO",
            "errorLabel": "Using IN for Purpose Allocation",
            "diagnosticNote": "IN indicates physical containment, not financial allocation purpose."
          },
          {
            "text": "in",
            "isCorrect": false,
            "errorType": "CONFUSAO_IN_DESTINACAO",
            "errorLabel": "Using AT for Purpose Allocation",
            "diagnosticNote": "AT indicates location or time point, not dedicated resource purpose."
          }
        ],
        "rule": "Core purpose contrast: use <strong>TO + base verb</strong> (<em>budget to upgrade servers</em>) or <strong>FOR + noun</strong> (<em>budget for server upgrades</em>)."
      },
      {
        "id": 8,
        "level": 8,
        "categoryKey": "transfer_vs_favor_contrast",
        "categoryLabel": "Contrast: Recipient (TO) vs Beneficiary (FOR)",
        "difficulty": "Level 8 • Advanced",
        "ticket": "SPRINT-COLLAB",
        "ticketFile": "git-workflow.md",
        "speakerRole": "Tech Lead",
        "speakerName": "Ana (Agile Coach)",
        "scrumPrompt": "\"How did the sprint handoff go between the backend and QA teams yesterday?\"",
        "targetSentence": "I transferred the database migration scripts <span class=\"blank-slot\">________</span> the QA team, and they ran the regression tests <span class=\"blank-slot\">________</span> us.",
        "subtext": "Select the correct prepositions according to technical English rules:",
        "options": [
          {
            "text": "to / for",
            "isCorrect": true,
            "errorType": null,
            "errorLabel": null,
            "diagnosticNote": "Correct! Directional transmission of access credentials ➔ TO. Task executed as a favor on someone's behalf ➔ FOR."
          },
          {
            "text": "for / to",
            "isCorrect": false,
            "errorType": "INVERSAO_TRANSFERENCIA_BENEFICIO",
            "errorLabel": "Inversion of Transfer and Benefit",
            "diagnosticNote": "Inverted the roles: credentials are sent TO someone, and support tasks are performed FOR someone."
          },
          {
            "text": "to / to",
            "isCorrect": false,
            "errorType": "USO_EXCESSIVO_TO",
            "errorLabel": "Double TO Misuse",
            "diagnosticNote": "Used TO in both. Running tests on someone's behalf is a beneficiary favor, requiring FOR."
          },
          {
            "text": "for / for",
            "isCorrect": false,
            "errorType": "USO_EXCESSIVO_FOR",
            "errorLabel": "Double FOR Misuse",
            "diagnosticNote": "Used FOR in both. Transfer verbs like send require directional TO."
          }
        ],
        "rule": "Quick mental formula: <strong>Transfer / send / give ➔ TO</strong> (direction of delivery). <strong>Do a task / run tests on behalf ➔ FOR</strong> (beneficiary support)."
      },
      {
        "id": 9,
        "level": 9,
        "categoryKey": "to_me_vs_for_me",
        "categoryLabel": "Critical Nuance: 'To me' (Opinion) vs 'For me' (Personal Impact)",
        "difficulty": "Level 9 • Advanced",
        "ticket": "ARCH-DESIGN",
        "ticketFile": "rfc-042.md",
        "speakerRole": "Principal Engineer",
        "speakerName": "Mateo (Staff Eng)",
        "scrumPrompt": "\"What is your assessment of migrating our monolithic frontend to micro-frontends?\"",
        "targetSentence": "<span class=\"blank-slot\">________</span> me, this new architecture looks much cleaner, but this sprint is going to be tough <span class=\"blank-slot\">________</span> our team.",
        "subtext": "Select the correct preposition according to technical English rules:",
        "options": [
          {
            "text": "To / for",
            "isCorrect": true,
            "errorType": null,
            "errorLabel": null,
            "diagnosticNote": "Exact! 'To me' expresses subjective point of view ('in my opinion'), and 'tough for our team' expresses personal impact and difficulty."
          },
          {
            "text": "For / to",
            "isCorrect": false,
            "errorType": "INVERSAO_OPINIAO_IMPACTO",
            "errorLabel": "Inversion of Opinion and Impact",
            "diagnosticNote": "'To me' introduces subjective opinion ('To me, this looks cleaner'). Adjectives of difficulty require 'for' (tough for us)."
          },
          {
            "text": "For / for",
            "isCorrect": false,
            "errorType": "FOR_ME_COMO_OPINIAO",
            "errorLabel": "Using 'For me' for Abstract Opinion",
            "diagnosticNote": "When evaluating the design or quality of an idea ('looks cleaner'), the standard English connector is 'To me' (in my view)."
          },
          {
            "text": "To / to",
            "isCorrect": false,
            "errorType": "TO_COM_ADJETIVO_DIFICULDADE",
            "errorLabel": "Using 'To' with Difficulty Adjectives",
            "diagnosticNote": "We say 'difficult/tough FOR someone', never 'tough TO someone'."
          }
        ],
        "rule": "<strong>TO ME</strong> = in my opinion / from my point of view (<em>To me, this solution is better</em>). <strong>FOR ME / FOR US</strong> = in my case / affects my workload or life (<em>Working late is tough for me / Exercise is good for you</em>)."
      },
      {
        "id": 10,
        "level": 10,
        "categoryKey": "standup_synthesis",
        "categoryLabel": "Daily Standup Synthesis: Purpose & Duration",
        "difficulty": "Level 10 • Advanced Synthesis",
        "ticket": "DAILY-FINAL",
        "ticketFile": "daily-status.yaml",
        "speakerRole": "Engineering VP",
        "speakerName": "Beatriz (VP)",
        "scrumPrompt": "\"Lucas, give us your complete status report from yesterday and the stability of the production release.\"",
        "targetSentence": "Yesterday, I stayed online until 8 PM <span class=\"blank-slot\">________</span> assist the team with the deployment, and the API has remained stable <span class=\"blank-slot\">________</span> over twelve hours.",
        "subtext": "Select the correct preposition according to technical English rules:",
        "options": [
          {
            "text": "to / for",
            "isCorrect": true,
            "errorType": null,
            "errorLabel": null,
            "diagnosticNote": "Spectacular! Fully mastered: 'to assist' expresses action purpose with base infinitive, and 'for over twelve hours' expresses continuous time duration."
          },
          {
            "text": "for / to",
            "isCorrect": false,
            "errorType": "CONFUSAO_CRUZADA_PROPOSITO_DURACAO",
            "errorLabel": "Crossed Confusion: Purpose and Duration",
            "diagnosticNote": "Inverted the two fundamental rules: intention with a verb requires TO (to assist), and continuous time duration requires FOR (for twelve hours)."
          },
          {
            "text": "for / for",
            "isCorrect": false,
            "errorType": "CONFUSAO_FOR_COM_VERBO",
            "errorLabel": "Using FOR with Base Verb",
            "diagnosticNote": "Cannot say 'for assist'. Personal intention when staying online is expressed with 'to assist'."
          },
          {
            "text": "to / to",
            "isCorrect": false,
            "errorType": "CONFUSAO_TO_DURACAO_TEMPO",
            "errorLabel": "Using TO for Continuous Duration",
            "diagnosticNote": "TO does not express continuous duration of hours. Time duration requires FOR."
          }
        ],
        "rule": "Standup master synthesis: Action and personal purpose ➔ <strong>TO + base verb</strong> (<em>stayed late to assist</em>). Elapsed time duration ➔ <strong>FOR + time period</strong> (<em>stable for twelve hours</em>)."
      }
    ]
  },
  {
    "id": "tech-reading-stress",
    "title": "Tech Reading & Word Stress (Primary Stress)",
    "level": "A1 ➔ A2+",
    "badge": "TECH READING & STRESS",
    "color": "cyan",
    "icon": "📖",
    "description": "Sharpen your technical IT reading and eliminate non-native Portuguese stress patterns. Features 3 engineering passages (Post-Mortem, CI/CD, AI Pair Programming) with an interactive word stress toggle, native audio, and 9 diagnostic challenges (2 grammar + 1 comprehension per text).",
    "estimatedMinutes": 8,
    "totalQuestions": 9,
    "slideDeckId": "word-stress",
    "targetSkills": [
      "Word Stress Patterns in Tech Vocabulary",
      "Technical Incident Reports & Architecture Reading",
      "Contextual Engineering Grammar (Tenses, Passive, Modals, Prepositions)",
      "Phonetic Awareness & Vowel Reduction (Schwa /ə/)"
    ],
    "questions": [
      {
        "id": 1,
        "level": 1,
        "categoryKey": "grammar_past_time",
        "categoryLabel": "Grammar: Past Time Markers",
        "difficulty": "Level 1 • Text 1 (INC-4091)",
        "ticket": "INC-4091",
        "ticketFile": "post-mortem-report.md",
        "speakerRole": "Reliability Lead",
        "speakerName": "Carlos (Lead Engineer)",
        "scrumPrompt": "\"Carlos, what happened during the peak traffic window last night?\"",
        "targetSentence": "Last night at 21:00 UTC, our production cluster <span class=\"blank-slot\">________</span> (suffer) a critical incident.",
        "subtext": "Select the correct verb tense for the specific past time expression \"Last night at 21:00 UTC\":",
        "passageIndex": 0,
        "passage": {
          "id": "text-1",
          "index": 1,
          "totalTexts": 3,
          "badge": "INCIDENT POST-MORTEM // TICKET INC-4091",
          "title": "Incident Post-Mortem: Microservices Outage",
          "author": "Carlos (Lead Reliability Engineer)",
          "readTime": "2 min read",
          "questionType": "Grammar (1/2)",
          "questionNumberInText": "Text 1 of 3 • Question 1 of 3",
          "paragraphs": [
            "Last night at 21:00 UTC, our production cluster suffered a critical <span class=\"stress-word\" data-word=\"incident\" data-syllables=\"IN-ci-dent\" data-ipa=\"/ˈɪn.sɪ.dənt/\" data-tip=\"In Portuguese we say 'in-ci-DEN-te' (3rd syllable). In English, word stress is on the FIRST syllable: IN-ci-dent (/ˈɪn.sɪ.dənt/)!\"><span class=\"stress-normal\">incident</span><span class=\"stress-highlighted\"><span class=\"tonic-syllable\">IN</span>-ci-dent</span></span> after a marketing campaign triggered 50,000 requests per minute. The legacy database <span class=\"stress-word\" data-word=\"component\" data-syllables=\"com-PO-nent\" data-ipa=\"/kəmˈpəʊ.nənt/\" data-tip=\"In Portuguese we say 'com-po-NEN-te' (stress on 3rd). In English, stress is on the SECOND syllable: com-PO-nent (/kəmˈpoʊ.nənt/)!\"><span class=\"stress-normal\">component</span><span class=\"stress-highlighted\">com-<span class=\"tonic-syllable\">PO</span>-nent</span></span> exceeded its connection pool, creating a near <span class=\"stress-word\" data-word=\"catastrophe\" data-syllables=\"ca-TAS-tro-phe\" data-ipa=\"/kəˈtæs.trə.fi/\" data-tip=\"In Portuguese we say 'ca-TÁS-tro-fe'. In English, stress is on the 2nd syllable and ends in /fi/: ca-TAS-tro-phe (/kəˈtæs.trə.fi/)!\"><span class=\"stress-normal\">catastrophe</span><span class=\"stress-highlighted\">ca-<span class=\"tonic-syllable\">TAS</span>-tro-phe</span></span> for our payment gateway.",
            "Every backend <span class=\"stress-word\" data-word=\"developer\" data-syllables=\"de-VEL-op-er\" data-ipa=\"/dɪˈvel.ə.pər/\" data-tip=\"In Portuguese we say 'de-ve-lo-PER'. In English, word stress is always on the SECOND syllable: de-VEL-op-er (/dɪˈvel.ə.pər/)!\"><span class=\"stress-normal\">developer</span><span class=\"stress-highlighted\">de-<span class=\"tonic-syllable\">VEL</span>-op-er</span></span> was alerted immediately. To solve the bottleneck, the platform team decided to <span class=\"stress-word\" data-word=\"prioritize\" data-syllables=\"pri-OR-i-tize\" data-ipa=\"/praɪˈɔːr.ə.taɪz/\" data-tip=\"In Portuguese we say 'pri-o-ri-ZAR' (at the end). In English, stress is on the SECOND syllable: pri-OR-i-tize (/praɪˈɔːr.ə.taɪz/)!\"><span class=\"stress-normal\">prioritize</span><span class=\"stress-highlighted\">pri-<span class=\"tonic-syllable\">OR</span>-i-tize</span></span> a query cache optimization. We inspected our cloud <span class=\"stress-word\" data-word=\"architecture\" data-syllables=\"AR-chi-tec-ture\" data-ipa=\"/ˈɑːr.kə.tek.tʃər/\" data-tip=\"In Portuguese we say 'ar-qui-te-TU-ra'. In English, stress jumps to the FIRST syllable: AR-chi-tec-ture (/ˈɑːr.kɪ.tek.tʃər/)!\"><span class=\"stress-normal\">architecture</span><span class=\"stress-highlighted\"><span class=\"tonic-syllable\">AR</span>-chi-tec-ture</span></span> and discovered that three microservices were sending duplicate queries.",
            "After deploying the hotfix, the latency dropped from 4,800ms to 42ms. Although this <span class=\"stress-word\" data-word=\"incident\" data-syllables=\"IN-ci-dent\" data-ipa=\"/ˈɪn.sɪ.dənt/\" data-tip=\"In English, word stress is on the first syllable: IN-ci-dent (/ˈɪn.sɪ.dənt/).\"><span class=\"stress-normal\">incident</span><span class=\"stress-highlighted\"><span class=\"tonic-syllable\">IN</span>-ci-dent</span></span> was stressful, our system is now much more <span class=\"stress-word\" data-word=\"reliable\" data-syllables=\"re-LI-a-ble\" data-ipa=\"/rɪˈlaɪ.ə.bəl/\" data-tip=\"In Portuguese we say 'con-fi-Á-vel'. In English, stress is on the 2nd syllable: re-LI-a-ble (/rɪˈlaɪ.ə.bəl/)!\"><span class=\"stress-normal\">reliable</span><span class=\"stress-highlighted\">re-<span class=\"tonic-syllable\">LI</span>-a-ble</span></span>. Moving forward, our engineers must follow strict caching standards to prevent similar outages."
          ]
        },
        "options": [
          {
            "text": "suffered",
            "isCorrect": true,
            "errorType": null,
            "errorLabel": null,
            "diagnosticNote": "Correct! Specific past time markers ('Last night at 21:00 UTC') strictly require Simple Past (suffered)."
          },
          {
            "text": "has suffered",
            "isCorrect": false,
            "errorType": "PRESENT_PERFECT_WITH_SPECIFIC_PAST",
            "errorLabel": "Present Perfect with Specific Past Time",
            "diagnosticNote": "Used Present Perfect with a defined past time point ('Last night'). In English, specific past time points strictly require Simple Past."
          },
          {
            "text": "suffer",
            "isCorrect": false,
            "errorType": "CONJUGATION_OMISSION",
            "errorLabel": "Conjugation Omission",
            "diagnosticNote": "Used uninflected present tense for an event that concluded yesterday."
          },
          {
            "text": "is suffering",
            "isCorrect": false,
            "errorType": "INCORRECT_PRESENT_CONTINUOUS",
            "errorLabel": "Present Continuous for Completed Past Event",
            "diagnosticNote": "Used continuous present for an outage that finished last night."
          }
        ],
        "rule": "With specific past time expressions (<em>last night, yesterday, at 21:00 UTC</em>), strictly use the <strong>Simple Past</strong> (<em>suffered</em>), never Present Perfect."
      },
      {
        "id": 2,
        "level": 2,
        "categoryKey": "grammar_verb_complement",
        "categoryLabel": "Grammar: Verb Complementation (decide + to)",
        "difficulty": "Level 2 • Text 1 (INC-4091)",
        "ticket": "INC-4091",
        "ticketFile": "post-mortem-report.md",
        "speakerRole": "Reliability Lead",
        "speakerName": "Carlos (Lead Engineer)",
        "scrumPrompt": "\"How did the platform team address the database connection bottleneck?\"",
        "targetSentence": "To solve the bottleneck, the platform team decided <span class=\"blank-slot\">________</span> (prioritize) a query cache optimization.",
        "subtext": "Select the correct complement required by the verb \"decided\":",
        "passageIndex": 0,
        "passage": {
          "id": "text-1",
          "index": 1,
          "totalTexts": 3,
          "badge": "INCIDENT POST-MORTEM // TICKET INC-4091",
          "title": "Incident Post-Mortem: Microservices Outage",
          "author": "Carlos (Lead Reliability Engineer)",
          "readTime": "2 min read",
          "questionType": "Grammar (2/2)",
          "questionNumberInText": "Text 1 of 3 • Question 2 of 3",
          "paragraphs": [
            "Last night at 21:00 UTC, our production cluster suffered a critical <span class=\"stress-word\" data-word=\"incident\" data-syllables=\"IN-ci-dent\" data-ipa=\"/ˈɪn.sɪ.dənt/\" data-tip=\"In Portuguese we say 'in-ci-DEN-te' (3rd syllable). In English, word stress is on the FIRST syllable: IN-ci-dent (/ˈɪn.sɪ.dənt/)!\"><span class=\"stress-normal\">incident</span><span class=\"stress-highlighted\"><span class=\"tonic-syllable\">IN</span>-ci-dent</span></span> after a marketing campaign triggered 50,000 requests per minute. The legacy database <span class=\"stress-word\" data-word=\"component\" data-syllables=\"com-PO-nent\" data-ipa=\"/kəmˈpəʊ.nənt/\" data-tip=\"In Portuguese we say 'com-po-NEN-te' (stress on 3rd). In English, stress is on the SECOND syllable: com-PO-nent (/kəmˈpoʊ.nənt/)!\"><span class=\"stress-normal\">component</span><span class=\"stress-highlighted\">com-<span class=\"tonic-syllable\">PO</span>-nent</span></span> exceeded its connection pool, creating a near <span class=\"stress-word\" data-word=\"catastrophe\" data-syllables=\"ca-TAS-tro-phe\" data-ipa=\"/kəˈtæs.trə.fi/\" data-tip=\"In Portuguese we say 'ca-TÁS-tro-fe'. In English, stress is on the 2nd syllable and ends in /fi/: ca-TAS-tro-phe (/kəˈtæs.trə.fi/)!\"><span class=\"stress-normal\">catastrophe</span><span class=\"stress-highlighted\">ca-<span class=\"tonic-syllable\">TAS</span>-tro-phe</span></span> for our payment gateway.",
            "Every backend <span class=\"stress-word\" data-word=\"developer\" data-syllables=\"de-VEL-op-er\" data-ipa=\"/dɪˈvel.ə.pər/\" data-tip=\"In Portuguese we say 'de-ve-lo-PER'. In English, word stress is always on the SECOND syllable: de-VEL-op-er (/dɪˈvel.ə.pər/)!\"><span class=\"stress-normal\">developer</span><span class=\"stress-highlighted\">de-<span class=\"tonic-syllable\">VEL</span>-op-er</span></span> was alerted immediately. To solve the bottleneck, the platform team decided to <span class=\"stress-word\" data-word=\"prioritize\" data-syllables=\"pri-OR-i-tize\" data-ipa=\"/praɪˈɔːr.ə.taɪz/\" data-tip=\"In Portuguese we say 'pri-o-ri-ZAR' (at the end). In English, stress is on the SECOND syllable: pri-OR-i-tize (/praɪˈɔːr.ə.taɪz/)!\"><span class=\"stress-normal\">prioritize</span><span class=\"stress-highlighted\">pri-<span class=\"tonic-syllable\">OR</span>-i-tize</span></span> a query cache optimization. We inspected our cloud <span class=\"stress-word\" data-word=\"architecture\" data-syllables=\"AR-chi-tec-ture\" data-ipa=\"/ˈɑːr.kə.tek.tʃər/\" data-tip=\"In Portuguese we say 'ar-qui-te-TU-ra'. In English, stress jumps to the FIRST syllable: AR-chi-tec-ture (/ˈɑːr.kɪ.tek.tʃər/)!\"><span class=\"stress-normal\">architecture</span><span class=\"stress-highlighted\"><span class=\"tonic-syllable\">AR</span>-chi-tec-ture</span></span> and discovered that three microservices were sending duplicate queries.",
            "After deploying the hotfix, the latency dropped from 4,800ms to 42ms. Although this <span class=\"stress-word\" data-word=\"incident\" data-syllables=\"IN-ci-dent\" data-ipa=\"/ˈɪn.sɪ.dənt/\" data-tip=\"In English, word stress is on the first syllable: IN-ci-dent (/ˈɪn.sɪ.dənt/).\"><span class=\"stress-normal\">incident</span><span class=\"stress-highlighted\"><span class=\"tonic-syllable\">IN</span>-ci-dent</span></span> was stressful, our system is now much more <span class=\"stress-word\" data-word=\"reliable\" data-syllables=\"re-LI-a-ble\" data-ipa=\"/rɪˈlaɪ.ə.bəl/\" data-tip=\"In Portuguese we say 'con-fi-Á-vel'. In English, stress is on the 2nd syllable: re-LI-a-ble (/rɪˈlaɪ.ə.bəl/)!\"><span class=\"stress-normal\">reliable</span><span class=\"stress-highlighted\">re-<span class=\"tonic-syllable\">LI</span>-a-ble</span></span>. Moving forward, our engineers must follow strict caching standards to prevent similar outages."
          ]
        },
        "options": [
          {
            "text": "to prioritize",
            "isCorrect": true,
            "errorType": null,
            "errorLabel": null,
            "diagnosticNote": "Correct! The verb 'decide' requires a to-infinitive complement (decided to prioritize)."
          },
          {
            "text": "for prioritize",
            "isCorrect": false,
            "errorType": "FOR_WITH_BASE_VERB",
            "errorLabel": "Using FOR with Base Verb",
            "diagnosticNote": "Direct translation trap from Portuguese ('para priorizar'). In English, 'for' is never followed by a base verb."
          },
          {
            "text": "for prioritizing",
            "isCorrect": false,
            "errorType": "FOR_ING_AFTER_DECIDE",
            "errorLabel": "Using FOR + -ing after Decision Verb",
            "diagnosticNote": "The verb 'decide' takes an infinitive with 'to', never 'for + -ing'."
          },
          {
            "text": "prioritizing",
            "isCorrect": false,
            "errorType": "BARE_GERUND",
            "errorLabel": "Bare Gerund after Decision Verb",
            "diagnosticNote": "Verbs expressing intention, plan, or choice (decide, plan, choose) require to-infinitive."
          }
        ],
        "rule": "Verbs expressing decision or future plan (<strong>decide, plan, choose, agree</strong>) strictly require a <strong>to-infinitive complement</strong> (<em>decided to prioritize</em>)."
      },
      {
        "id": 3,
        "level": 3,
        "categoryKey": "reading_comprehension",
        "categoryLabel": "Reading Comprehension: Incident Root Cause",
        "difficulty": "Level 3 • Text 1 (INC-4091)",
        "ticket": "INC-4091",
        "ticketFile": "post-mortem-report.md",
        "speakerRole": "Product Manager",
        "speakerName": "Juliana (Product Manager)",
        "scrumPrompt": "\"Carlos, based on the post-mortem analysis, what was the primary architectural root cause of the outage?\"",
        "targetSentence": "According to the post-mortem report, what caused the database connection pool to exceed its capacity?",
        "subtext": "Identify the primary architectural root cause described in the technical post-mortem:",
        "passageIndex": 0,
        "passage": {
          "id": "text-1",
          "index": 1,
          "totalTexts": 3,
          "badge": "INCIDENT POST-MORTEM // TICKET INC-4091",
          "title": "Incident Post-Mortem: Microservices Outage",
          "author": "Carlos (Lead Reliability Engineer)",
          "readTime": "2 min read",
          "questionType": "Reading Comprehension",
          "questionNumberInText": "Text 1 of 3 • Question 3 of 3",
          "paragraphs": [
            "Last night at 21:00 UTC, our production cluster suffered a critical <span class=\"stress-word\" data-word=\"incident\" data-syllables=\"IN-ci-dent\" data-ipa=\"/ˈɪn.sɪ.dənt/\" data-tip=\"In Portuguese we say 'in-ci-DEN-te' (3rd syllable). In English, word stress is on the FIRST syllable: IN-ci-dent (/ˈɪn.sɪ.dənt/)!\"><span class=\"stress-normal\">incident</span><span class=\"stress-highlighted\"><span class=\"tonic-syllable\">IN</span>-ci-dent</span></span> after a marketing campaign triggered 50,000 requests per minute. The legacy database <span class=\"stress-word\" data-word=\"component\" data-syllables=\"com-PO-nent\" data-ipa=\"/kəmˈpəʊ.nənt/\" data-tip=\"In Portuguese we say 'com-po-NEN-te' (stress on 3rd). In English, stress is on the SECOND syllable: com-PO-nent (/kəmˈpoʊ.nənt/)!\"><span class=\"stress-normal\">component</span><span class=\"stress-highlighted\">com-<span class=\"tonic-syllable\">PO</span>-nent</span></span> exceeded its connection pool, creating a near <span class=\"stress-word\" data-word=\"catastrophe\" data-syllables=\"ca-TAS-tro-phe\" data-ipa=\"/kəˈtæs.trə.fi/\" data-tip=\"In Portuguese we say 'ca-TÁS-tro-fe'. In English, stress is on the 2nd syllable and ends in /fi/: ca-TAS-tro-phe (/kəˈtæs.trə.fi/)!\"><span class=\"stress-normal\">catastrophe</span><span class=\"stress-highlighted\">ca-<span class=\"tonic-syllable\">TAS</span>-tro-phe</span></span> for our payment gateway.",
            "Every backend <span class=\"stress-word\" data-word=\"developer\" data-syllables=\"de-VEL-op-er\" data-ipa=\"/dɪˈvel.ə.pər/\" data-tip=\"In Portuguese we say 'de-ve-lo-PER'. In English, word stress is always on the SECOND syllable: de-VEL-op-er (/dɪˈvel.ə.pər/)!\"><span class=\"stress-normal\">developer</span><span class=\"stress-highlighted\">de-<span class=\"tonic-syllable\">VEL</span>-op-er</span></span> was alerted immediately. To solve the bottleneck, the platform team decided to <span class=\"stress-word\" data-word=\"prioritize\" data-syllables=\"pri-OR-i-tize\" data-ipa=\"/praɪˈɔːr.ə.taɪz/\" data-tip=\"In Portuguese we say 'pri-o-ri-ZAR' (at the end). In English, stress is on the SECOND syllable: pri-OR-i-tize (/praɪˈɔːr.ə.taɪz/)!\"><span class=\"stress-normal\">prioritize</span><span class=\"stress-highlighted\">pri-<span class=\"tonic-syllable\">OR</span>-i-tize</span></span> a query cache optimization. We inspected our cloud <span class=\"stress-word\" data-word=\"architecture\" data-syllables=\"AR-chi-tec-ture\" data-ipa=\"/ˈɑːr.kə.tek.tʃər/\" data-tip=\"In Portuguese we say 'ar-qui-te-TU-ra'. In English, stress jumps to the FIRST syllable: AR-chi-tec-ture (/ˈɑːr.kɪ.tek.tʃər/)!\"><span class=\"stress-normal\">architecture</span><span class=\"stress-highlighted\"><span class=\"tonic-syllable\">AR</span>-chi-tec-ture</span></span> and discovered that three microservices were sending duplicate queries.",
            "After deploying the hotfix, the latency dropped from 4,800ms to 42ms. Although this <span class=\"stress-word\" data-word=\"incident\" data-syllables=\"IN-ci-dent\" data-ipa=\"/ˈɪn.sɪ.dənt/\" data-tip=\"In English, word stress is on the first syllable: IN-ci-dent (/ˈɪn.sɪ.dənt/).\"><span class=\"stress-normal\">incident</span><span class=\"stress-highlighted\"><span class=\"tonic-syllable\">IN</span>-ci-dent</span></span> was stressful, our system is now much more <span class=\"stress-word\" data-word=\"reliable\" data-syllables=\"re-LI-a-ble\" data-ipa=\"/rɪˈlaɪ.ə.bəl/\" data-tip=\"In Portuguese we say 'con-fi-Á-vel'. In English, stress is on the 2nd syllable: re-LI-a-ble (/rɪˈlaɪ.ə.bəl/)!\"><span class=\"stress-normal\">reliable</span><span class=\"stress-highlighted\">re-<span class=\"tonic-syllable\">LI</span>-a-ble</span></span>. Moving forward, our engineers must follow strict caching standards to prevent similar outages."
          ]
        },
        "options": [
          {
            "text": "Three microservices were sending duplicate queries that overloaded the database connection pool.",
            "isCorrect": true,
            "errorType": null,
            "errorLabel": null,
            "diagnosticNote": "Correct! The post-mortem explicitly identifies duplicate queries from three microservices as the root cause."
          },
          {
            "text": "A backend developer accidentally deleted the payment gateway database schema at 21:00 UTC.",
            "isCorrect": false,
            "errorType": "FALSE_INTERPRETATION",
            "errorLabel": "False Claim / Factual Distortion",
            "diagnosticNote": "The report does not mention any deletion; the issue was connection pool exhaustion from duplicate queries."
          },
          {
            "text": "The marketing campaign failed completely because the hotfix increased latency to 4,800ms.",
            "isCorrect": false,
            "errorType": "CAUSAL_INVERSION",
            "errorLabel": "Causal Inversion",
            "diagnosticNote": "4,800ms was latency BEFORE the hotfix. After the hotfix, latency dropped to 42ms."
          },
          {
            "text": "The engineering team had no monitoring tools or cloud infrastructure configured in production.",
            "isCorrect": false,
            "errorType": "UNSUPPORTED_EXTRAPOLATION",
            "errorLabel": "Unsupported Extrapolation",
            "diagnosticNote": "The text states the team inspected cloud architecture and immediately alerted all backend engineers."
          }
        ],
        "rule": "In incident post-mortems, the <strong>Root Cause</strong> identifies the structural failure: here, <em>'three microservices were sending duplicate queries'</em> that saturated the connection pool."
      },
      {
        "id": 4,
        "level": 4,
        "categoryKey": "grammar_passive_voice",
        "categoryLabel": "Grammar: Passive Voice in Pipelines",
        "difficulty": "Level 4 • Text 2 (DEVOPS-204)",
        "ticket": "DEVOPS-204",
        "ticketFile": "ci-cd-pipeline.yaml",
        "speakerRole": "DevOps Engineer",
        "speakerName": "Mariana (DevOps Lead)",
        "scrumPrompt": "\"Mariana, what happens automatically once code is merged into the main branch?\"",
        "targetSentence": "Next, Docker containers <span class=\"blank-slot\">________</span> (push) to our production environment.",
        "subtext": "Select the correct passive voice construction for plural subject \"Docker containers\":",
        "passageIndex": 1,
        "passage": {
          "id": "text-2",
          "index": 2,
          "totalTexts": 3,
          "badge": "DEVOPS ENGINEERING // TICKET DEVOPS-204",
          "title": "Modernizing DevOps: Automated CI/CD Pipelines",
          "author": "Mariana (DevOps Lead)",
          "readTime": "2 min read",
          "questionType": "Grammar (1/2)",
          "questionNumberInText": "Text 2 of 3 • Question 1 of 3",
          "paragraphs": [
            "In modern software engineering, companies must continuously adopt newer <span class=\"stress-word\" data-word=\"technology\" data-syllables=\"tech-NOL-o-gy\" data-ipa=\"/tekˈnɒl.ə.dʒi/\" data-tip=\"In Portuguese we say 'tec-no-lo-GI-a'. In English words with -logy, stress falls immediately before: tech-NOL-o-gy (/tekˈnɑː.lə.dʒi/)!\"><span class=\"stress-normal\">technology</span><span class=\"stress-highlighted\">tech-<span class=\"tonic-syllable\">NOL</span>-o-gy</span></span> to stay competitive. Two years ago, our release cycle was slow because engineers manually tested every deployment.",
            "To solve this problem, we decided to <span class=\"stress-word\" data-word=\"automate\" data-syllables=\"AU-to-mate\" data-ipa=\"/ˈɔː.tə.meɪt/\" data-tip=\"In Portuguese we say 'au-to-ma-TI-zar'. In English 3-syllable verbs with -ate, stress falls on the FIRST syllable: AU-to-mate (/ˈɔː.tə.meɪt/)!\"><span class=\"stress-normal\">automate</span><span class=\"stress-highlighted\"><span class=\"tonic-syllable\">AU</span>-to-mate</span></span> our deployment pipeline. Now, every time code is merged into the <code>main</code> branch, an automated security scanner validates the SSL <span class=\"stress-word\" data-word=\"certificate\" data-syllables=\"cer-TIF-i-cate\" data-ipa=\"/sərˈtɪf.ɪ.kət/\" data-tip=\"In Portuguese we say 'cer-ti-fi-CA-do'. In the English noun, stress is on the 2nd syllable and ends in /kət/: cer-TIF-i-cate (/sərˈtɪf.ə.kət/)!\"><span class=\"stress-normal\">certificate</span><span class=\"stress-highlighted\">cer-<span class=\"tonic-syllable\">TIF</span>-i-cate</span></span> and checks dependencies for vulnerabilities.",
            "Next, Docker containers are pushed to our production <span class=\"stress-word\" data-word=\"environment\" data-syllables=\"en-VI-ron-ment\" data-ipa=\"/ɪnˈvaɪ.rən.mənt/\" data-tip=\"In Portuguese we say 'am-bi-EN-te'. In English, stress is on the 2nd syllable with diphthong /vaɪ/: en-VI-ron-ment (/ɪnˈvaɪ.rən.mənt/)!\"><span class=\"stress-normal\">environment</span><span class=\"stress-highlighted\">en-<span class=\"tonic-syllable\">VI</span>-ron-ment</span></span>. The system automatically measures server <span class=\"stress-word\" data-word=\"capacity\" data-syllables=\"ca-PAC-i-ty\" data-ipa=\"/kəˈpæs.ə.ti/\" data-tip=\"In Portuguese we say 'ca-pa-ci-DA-de'. In English words ending in -ity, stress always precedes the suffix: ca-PAC-i-ty (/kəˈpæs.ə.t̬i/)!\"><span class=\"stress-normal\">capacity</span><span class=\"stress-highlighted\">ca-<span class=\"tonic-syllable\">PAC</span>-i-ty</span></span> and scales up new nodes if traffic spikes. Thanks to this modern setup, the <span class=\"stress-word\" data-word=\"delivery\" data-syllables=\"de-LIV-er-y\" data-ipa=\"/dɪˈlɪv.ər.i/\" data-tip=\"In English, stress is on the 2nd syllable: de-LIV-er-y (/dɪˈlɪv.ər.i/), never at the end 'de-li-ve-RY'!\"><span class=\"stress-normal\">delivery</span><span class=\"stress-highlighted\">de-<span class=\"tonic-syllable\">LIV</span>-er-y</span></span> of new features takes only twelve minutes instead of three days."
          ]
        },
        "options": [
          {
            "text": "are pushed",
            "isCorrect": true,
            "errorType": null,
            "errorLabel": null,
            "diagnosticNote": "Correct! Passive voice with plural subject (containers) in Simple Present takes 'are + past participle' (are pushed)."
          },
          {
            "text": "is pushed",
            "isCorrect": false,
            "errorType": "NUMBER_AGREEMENT_ERROR",
            "errorLabel": "Subject-Verb Number Agreement (Singular for Plural)",
            "diagnosticNote": "Used singular 'is' with plural noun 'Docker containers'."
          },
          {
            "text": "push",
            "isCorrect": false,
            "errorType": "INCORRECT_ACTIVE_VOICE",
            "errorLabel": "Active Voice in Passive Context",
            "diagnosticNote": "Containers do not push themselves; they are pushed by the automated pipeline."
          },
          {
            "text": "are pushing",
            "isCorrect": false,
            "errorType": "ACTIVE_CONTINUOUS",
            "errorLabel": "Active Continuous instead of Passive Participle",
            "diagnosticNote": "Used active continuous (-ing). Technical passive voice requires past participle (-ed)."
          }
        ],
        "rule": "In technical <strong>passive voice</strong>, the formula is <strong>to be + past participle</strong>. With plural subjects (<em>Docker containers</em>), use <strong>are pushed</strong>."
      },
      {
        "id": 5,
        "level": 5,
        "categoryKey": "grammar_third_person",
        "categoryLabel": "Grammar: 3rd Person Singular Agreement",
        "difficulty": "Level 5 • Text 2 (DEVOPS-204)",
        "ticket": "DEVOPS-204",
        "ticketFile": "autoscaler-policy.json",
        "speakerRole": "Cloud Architect",
        "speakerName": "Felipe (Cloud Architect)",
        "scrumPrompt": "\"How does the cloud cluster know when to scale up new instances?\"",
        "targetSentence": "The system automatically <span class=\"blank-slot\">________</span> (measure) server capacity and scales up new nodes if traffic spikes.",
        "subtext": "Select the correct 3rd person singular present inflection for singular subject (The system):",
        "passageIndex": 1,
        "passage": {
          "id": "text-2",
          "index": 2,
          "totalTexts": 3,
          "badge": "DEVOPS ENGINEERING // TICKET DEVOPS-204",
          "title": "Modernizing DevOps: Automated CI/CD Pipelines",
          "author": "Mariana (DevOps Lead)",
          "readTime": "2 min read",
          "questionType": "Grammar (2/2)",
          "questionNumberInText": "Text 2 of 3 • Question 2 of 3",
          "paragraphs": [
            "In modern software engineering, companies must continuously adopt newer <span class=\"stress-word\" data-word=\"technology\" data-syllables=\"tech-NOL-o-gy\" data-ipa=\"/tekˈnɒl.ə.dʒi/\" data-tip=\"In Portuguese we say 'tec-no-lo-GI-a'. In English words with -logy, stress falls immediately before: tech-NOL-o-gy (/tekˈnɑː.lə.dʒi/)!\"><span class=\"stress-normal\">technology</span><span class=\"stress-highlighted\">tech-<span class=\"tonic-syllable\">NOL</span>-o-gy</span></span> to stay competitive. Two years ago, our release cycle was slow because engineers manually tested every deployment.",
            "To solve this problem, we decided to <span class=\"stress-word\" data-word=\"automate\" data-syllables=\"AU-to-mate\" data-ipa=\"/ˈɔː.tə.meɪt/\" data-tip=\"In Portuguese we say 'au-to-ma-TI-zar'. In English 3-syllable verbs with -ate, stress falls on the FIRST syllable: AU-to-mate (/ˈɔː.tə.meɪt/)!\"><span class=\"stress-normal\">automate</span><span class=\"stress-highlighted\"><span class=\"tonic-syllable\">AU</span>-to-mate</span></span> our deployment pipeline. Now, every time code is merged into the <code>main</code> branch, an automated security scanner validates the SSL <span class=\"stress-word\" data-word=\"certificate\" data-syllables=\"cer-TIF-i-cate\" data-ipa=\"/sərˈtɪf.ɪ.kət/\" data-tip=\"In Portuguese we say 'cer-ti-fi-CA-do'. In the English noun, stress is on the 2nd syllable and ends in /kət/: cer-TIF-i-cate (/sərˈtɪf.ə.kət/)!\"><span class=\"stress-normal\">certificate</span><span class=\"stress-highlighted\">cer-<span class=\"tonic-syllable\">TIF</span>-i-cate</span></span> and checks dependencies for vulnerabilities.",
            "Next, Docker containers are pushed to our production <span class=\"stress-word\" data-word=\"environment\" data-syllables=\"en-VI-ron-ment\" data-ipa=\"/ɪnˈvaɪ.rən.mənt/\" data-tip=\"In Portuguese we say 'am-bi-EN-te'. In English, stress is on the 2nd syllable with diphthong /vaɪ/: en-VI-ron-ment (/ɪnˈvaɪ.rən.mənt/)!\"><span class=\"stress-normal\">environment</span><span class=\"stress-highlighted\">en-<span class=\"tonic-syllable\">VI</span>-ron-ment</span></span>. The system automatically measures server <span class=\"stress-word\" data-word=\"capacity\" data-syllables=\"ca-PAC-i-ty\" data-ipa=\"/kəˈpæs.ə.ti/\" data-tip=\"In Portuguese we say 'ca-pa-ci-DA-de'. In English words ending in -ity, stress always precedes the suffix: ca-PAC-i-ty (/kəˈpæs.ə.t̬i/)!\"><span class=\"stress-normal\">capacity</span><span class=\"stress-highlighted\">ca-<span class=\"tonic-syllable\">PAC</span>-i-ty</span></span> and scales up new nodes if traffic spikes. Thanks to this modern setup, the <span class=\"stress-word\" data-word=\"delivery\" data-syllables=\"de-LIV-er-y\" data-ipa=\"/dɪˈlɪv.ər.i/\" data-tip=\"In English, stress is on the 2nd syllable: de-LIV-er-y (/dɪˈlɪv.ər.i/), never at the end 'de-li-ve-RY'!\"><span class=\"stress-normal\">delivery</span><span class=\"stress-highlighted\">de-<span class=\"tonic-syllable\">LIV</span>-er-y</span></span> of new features takes only twelve minutes instead of three days."
          ]
        },
        "options": [
          {
            "text": "measures",
            "isCorrect": true,
            "errorType": null,
            "errorLabel": null,
            "diagnosticNote": "Correct! 'The system' (= it) takes the -s suffix in Simple Present (measures)."
          },
          {
            "text": "measure",
            "isCorrect": false,
            "errorType": "OMISSION_THIRD_PERSON_S",
            "errorLabel": "Omission of 3rd Person Singular -s",
            "diagnosticNote": "Forgot to add -s to the verb with 3rd person singular subject (The system = it)."
          },
          {
            "text": "is measure",
            "isCorrect": false,
            "errorType": "INVALID_VERBAL_CONSTRUCTION",
            "errorLabel": "Ungrammatical Construction (Be + Base Verb)",
            "diagnosticNote": "Auxiliary 'is' cannot connect directly to a base verb form. The correct form is 'measures'."
          },
          {
            "text": "measuring",
            "isCorrect": false,
            "errorType": "BARE_GERUND",
            "errorLabel": "Gerund without Auxiliary",
            "diagnosticNote": "Used -ing without auxiliary 'is' for an automated system routine."
          }
        ],
        "rule": "In Simple Present, singular 3rd person subjects (<em>he, she, it / the system</em>) require the <strong>-s</strong> suffix on the verb: <em>The system measures</em>."
      },
      {
        "id": 6,
        "level": 6,
        "categoryKey": "reading_comprehension",
        "categoryLabel": "Reading Comprehension: DevOps Metrics",
        "difficulty": "Level 6 • Text 2 (DEVOPS-204)",
        "ticket": "DEVOPS-204",
        "ticketFile": "ci-cd-pipeline.yaml",
        "speakerRole": "Agile Coach",
        "speakerName": "Mariana (DevOps Lead)",
        "scrumPrompt": "\"What measurable business outcome was achieved by automating this deployment workflow?\"",
        "targetSentence": "Based on the article, what quantitative improvement resulted from automating the pipeline?",
        "subtext": "Identify the measured quantitative improvement highlighted in the article:",
        "passageIndex": 1,
        "passage": {
          "id": "text-2",
          "index": 2,
          "totalTexts": 3,
          "badge": "DEVOPS ENGINEERING // TICKET DEVOPS-204",
          "title": "Modernizing DevOps: Automated CI/CD Pipelines",
          "author": "Mariana (DevOps Lead)",
          "readTime": "2 min read",
          "questionType": "Reading Comprehension",
          "questionNumberInText": "Text 2 of 3 • Question 3 of 3",
          "paragraphs": [
            "In modern software engineering, companies must continuously adopt newer <span class=\"stress-word\" data-word=\"technology\" data-syllables=\"tech-NOL-o-gy\" data-ipa=\"/tekˈnɒl.ə.dʒi/\" data-tip=\"In Portuguese we say 'tec-no-lo-GI-a'. In English words with -logy, stress falls immediately before: tech-NOL-o-gy (/tekˈnɑː.lə.dʒi/)!\"><span class=\"stress-normal\">technology</span><span class=\"stress-highlighted\">tech-<span class=\"tonic-syllable\">NOL</span>-o-gy</span></span> to stay competitive. Two years ago, our release cycle was slow because engineers manually tested every deployment.",
            "To solve this problem, we decided to <span class=\"stress-word\" data-word=\"automate\" data-syllables=\"AU-to-mate\" data-ipa=\"/ˈɔː.tə.meɪt/\" data-tip=\"In Portuguese we say 'au-to-ma-TI-zar'. In English 3-syllable verbs with -ate, stress falls on the FIRST syllable: AU-to-mate (/ˈɔː.tə.meɪt/)!\"><span class=\"stress-normal\">automate</span><span class=\"stress-highlighted\"><span class=\"tonic-syllable\">AU</span>-to-mate</span></span> our deployment pipeline. Now, every time code is merged into the <code>main</code> branch, an automated security scanner validates the SSL <span class=\"stress-word\" data-word=\"certificate\" data-syllables=\"cer-TIF-i-cate\" data-ipa=\"/sərˈtɪf.ɪ.kət/\" data-tip=\"In Portuguese we say 'cer-ti-fi-CA-do'. In the English noun, stress is on the 2nd syllable and ends in /kət/: cer-TIF-i-cate (/sərˈtɪf.ə.kət/)!\"><span class=\"stress-normal\">certificate</span><span class=\"stress-highlighted\">cer-<span class=\"tonic-syllable\">TIF</span>-i-cate</span></span> and checks dependencies for vulnerabilities.",
            "Next, Docker containers are pushed to our production <span class=\"stress-word\" data-word=\"environment\" data-syllables=\"en-VI-ron-ment\" data-ipa=\"/ɪnˈvaɪ.rən.mənt/\" data-tip=\"In Portuguese we say 'am-bi-EN-te'. In English, stress is on the 2nd syllable with diphthong /vaɪ/: en-VI-ron-ment (/ɪnˈvaɪ.rən.mənt/)!\"><span class=\"stress-normal\">environment</span><span class=\"stress-highlighted\">en-<span class=\"tonic-syllable\">VI</span>-ron-ment</span></span>. The system automatically measures server <span class=\"stress-word\" data-word=\"capacity\" data-syllables=\"ca-PAC-i-ty\" data-ipa=\"/kəˈpæs.ə.ti/\" data-tip=\"In Portuguese we say 'ca-pa-ci-DA-de'. In English words ending in -ity, stress always precedes the suffix: ca-PAC-i-ty (/kəˈpæs.ə.t̬i/)!\"><span class=\"stress-normal\">capacity</span><span class=\"stress-highlighted\">ca-<span class=\"tonic-syllable\">PAC</span>-i-ty</span></span> and scales up new nodes if traffic spikes. Thanks to this modern setup, the <span class=\"stress-word\" data-word=\"delivery\" data-syllables=\"de-LIV-er-y\" data-ipa=\"/dɪˈlɪv.ər.i/\" data-tip=\"In English, stress is on the 2nd syllable: de-LIV-er-y (/dɪˈlɪv.ər.i/), never at the end 'de-li-ve-RY'!\"><span class=\"stress-normal\">delivery</span><span class=\"stress-highlighted\">de-<span class=\"tonic-syllable\">LIV</span>-er-y</span></span> of new features takes only twelve minutes instead of three days."
          ]
        },
        "options": [
          {
            "text": "The delivery time of new features dropped from three days to just twelve minutes.",
            "isCorrect": true,
            "errorType": null,
            "errorLabel": null,
            "diagnosticNote": "Correct! The article explicitly states that delivery now takes only twelve minutes instead of three days."
          },
          {
            "text": "The development team completely stopped deploying updates to avoid overloading server capacity.",
            "isCorrect": false,
            "errorType": "OPPOSITE_INTERPRETATION",
            "errorLabel": "Opposite Interpretation",
            "diagnosticNote": "The team did not stop deployments; the process became continuous, fast, and automated."
          },
          {
            "text": "Engineers disabled the automated SSL certificate checker to speed up compilation.",
            "isCorrect": false,
            "errorType": "FALSE_PREMISE",
            "errorLabel": "False Technical Premise",
            "diagnosticNote": "The scanner actively validates SSL certificates on every merge, it was never disabled."
          },
          {
            "text": "Deployments now require 50,000 manual approvals from QA engineers before releasing.",
            "isCorrect": false,
            "errorType": "NUMERICAL_CONFUSION",
            "errorLabel": "Numerical Confusion with Other Text",
            "diagnosticNote": "50,000 was request traffic from Text 1. The pipeline eliminated slow manual testing."
          }
        ],
        "rule": "Technical reading of DevOps metrics: the measured quantitative benefit was reducing delivery duration from <strong>three days</strong> to <strong>twelve minutes</strong>."
      },
      {
        "id": 7,
        "level": 7,
        "categoryKey": "grammar_modal_verbs",
        "categoryLabel": "Grammar: Modal Verbs (should never)",
        "difficulty": "Level 7 • Text 3 (AI-GOV-501)",
        "ticket": "AI-GOV-501",
        "ticketFile": "engineering-handbook.md",
        "speakerRole": "VP of Engineering",
        "speakerName": "Alex (Engineering Director)",
        "scrumPrompt": "\"Alex, what is our team policy regarding commits generated directly by AI tools?\"",
        "targetSentence": "Code reviews require human vigilance: developers <span class=\"blank-slot\">________</span> (never / commit) generated code without verifying edge cases.",
        "subtext": "Select the correct syntax with modal auxiliary \"should\" and adverb \"never\":",
        "passageIndex": 2,
        "passage": {
          "id": "text-3",
          "index": 3,
          "totalTexts": 3,
          "badge": "ENGINEERING LEADERSHIP // MEMO AI-GOV-501",
          "title": "AI Pair Programming: Speed vs Code Quality",
          "author": "Alex (Engineering Director)",
          "readTime": "2 min read",
          "questionType": "Grammar (1/2)",
          "questionNumberInText": "Text 3 of 3 • Question 1 of 3",
          "paragraphs": [
            "Our engineering team recently adopted AI coding assistants to accelerate daily development. At first, many engineers thought the tool would instantly solve all programming challenges.",
            "However, my senior <span class=\"stress-word\" data-word=\"colleague\" data-syllables=\"COL-league\" data-ipa=\"/ˈkɒl.iːɡ/\" data-tip=\"In Portuguese we say 'co-LE-ga' (stress on LE). In English, stress is on the FIRST syllable: COL-league (/ˈkɑː.liːɡ/)!\"><span class=\"stress-normal\">colleague</span><span class=\"stress-highlighted\"><span class=\"tonic-syllable\">COL</span>-league</span></span> reminded us that AI is an assistant, not an architect. While an AI tool is remarkably <span class=\"stress-word\" data-word=\"efficient\" data-syllables=\"ef-FI-cient\" data-ipa=\"/ɪˈfɪʃ.ənt/\" data-tip=\"In Portuguese we say 'e-fi-ci-EN-te'. In English, stress is on the 2nd syllable: ef-FI-cient (/ɪˈfɪʃ.ənt/)!\"><span class=\"stress-normal\">efficient</span><span class=\"stress-highlighted\">ef-<span class=\"tonic-syllable\">FI</span>-cient</span></span> at generating repetitive boilerplate code, it cannot <span class=\"stress-word\" data-word=\"communicate\" data-syllables=\"com-MU-ni-cate\" data-ipa=\"/kəˈmjuː.nɪ.keɪt/\" data-tip=\"In Portuguese we say 'co-mu-ni-CAR' (at the end). In English, stress is on the 2nd syllable: com-MU-ni-cate (/kəˈmjuː.nə.keɪt/)!\"><span class=\"stress-normal\">communicate</span><span class=\"stress-highlighted\">com-<span class=\"tonic-syllable\">MU</span>-ni-cate</span></span> with product managers or understand complex business trade-offs.",
            "We observed a <span class=\"stress-word\" data-word=\"significant\" data-syllables=\"sig-NIF-i-cant\" data-ipa=\"/sɪɡˈnɪf.ɪ.kənt/\" data-tip=\"In Portuguese we say 'sig-ni-fi-ca-TI-vo'. In English, stress is on the 2nd syllable: sig-NIF-i-cant (/sɪɡˈnɪf.ə.kənt/)!\"><span class=\"stress-normal\">significant</span><span class=\"stress-highlighted\">sig-<span class=\"tonic-syllable\">NIF</span>-i-cant</span></span> boost in developer <span class=\"stress-word\" data-word=\"productivity\" data-syllables=\"pro-duc-TIV-i-ty\" data-ipa=\"/ˌprɒd.ʌkˈtɪv.ə.ti/\" data-tip=\"In Portuguese we say 'pro-du-ti-vi-DA-de'. In English with suffix -ity, stress precedes the suffix: pro-duc-TIV-i-ty (/ˌproʊ.dʌkˈtɪv.ə.t̬i/)!\"><span class=\"stress-normal\">productivity</span><span class=\"stress-highlighted\">pro-duc-<span class=\"tonic-syllable\">TIV</span>-i-ty</span></span>, but engineers must remain vigilant. Code reviews require <span class=\"stress-word\" data-word=\"continuous\" data-syllables=\"con-TIN-u-ous\" data-ipa=\"/kənˈtɪn.ju.əs/\" data-tip=\"In Portuguese we say 'con-TÍ-nuo'. In English, stress is on the 2nd syllable: con-TIN-u-ous (/kənˈtɪn.ju.əs/)!\"><span class=\"stress-normal\">continuous</span><span class=\"stress-highlighted\">con-<span class=\"tonic-syllable\">TIN</span>-u-ous</span></span> human attention: developers should never commit generated code without verifying tests, security vulnerabilities, and edge cases."
          ]
        },
        "options": [
          {
            "text": "should never commit",
            "isCorrect": true,
            "errorType": null,
            "errorLabel": null,
            "diagnosticNote": "Correct! The modal 'should' is followed by adverb 'never' and the bare infinitive 'commit' without 'to'."
          },
          {
            "text": "should never to commit",
            "isCorrect": false,
            "errorType": "MODAL_WITH_TO_INFINITIVE",
            "errorLabel": "Using 'TO' after Modal Auxiliary",
            "diagnosticNote": "Modal verbs (should, must, can, could) are never followed by 'to'."
          },
          {
            "text": "must never commiting",
            "isCorrect": false,
            "errorType": "MODAL_WITH_GERUND",
            "errorLabel": "Using Gerund (-ing) after Modal",
            "diagnosticNote": "Modals require bare infinitive, never continuous -ing."
          },
          {
            "text": "don't should commit",
            "isCorrect": false,
            "errorType": "AUXILIARY_NEGATION_WITH_MODAL",
            "errorLabel": "Using 'don't' with Modal Auxiliary",
            "diagnosticNote": "Modals negate internally (should not / should never), never with auxiliary do/don't."
          }
        ],
        "rule": "Modal auxiliaries such as <strong>should</strong> and <strong>must</strong> are followed directly by the <strong>bare base verb without TO</strong>: <em>should never commit</em>."
      },
      {
        "id": 8,
        "level": 8,
        "categoryKey": "grammar_preposition_gerund",
        "categoryLabel": "Grammar: Preposition + Gerund (-ing)",
        "difficulty": "Level 8 • Text 3 (AI-GOV-501)",
        "ticket": "AI-GOV-501",
        "ticketFile": "pr-checklist.md",
        "speakerRole": "Tech Lead",
        "speakerName": "Carlos (Tech Lead)",
        "scrumPrompt": "\"What must a developer complete before hitting the merge button on a pull request?\"",
        "targetSentence": "Developers should always verify unit test assertions before <span class=\"blank-slot\">________</span> (merge) their pull requests.",
        "subtext": "Select the correct verb form following temporal preposition \"before\":",
        "passageIndex": 2,
        "passage": {
          "id": "text-3",
          "index": 3,
          "totalTexts": 3,
          "badge": "ENGINEERING LEADERSHIP // MEMO AI-GOV-501",
          "title": "AI Pair Programming: Speed vs Code Quality",
          "author": "Alex (Engineering Director)",
          "readTime": "2 min read",
          "questionType": "Grammar (2/2)",
          "questionNumberInText": "Text 3 of 3 • Question 2 of 3",
          "paragraphs": [
            "Our engineering team recently adopted AI coding assistants to accelerate daily development. At first, many engineers thought the tool would instantly solve all programming challenges.",
            "However, my senior <span class=\"stress-word\" data-word=\"colleague\" data-syllables=\"COL-league\" data-ipa=\"/ˈkɒl.iːɡ/\" data-tip=\"In Portuguese we say 'co-LE-ga' (stress on LE). In English, stress is on the FIRST syllable: COL-league (/ˈkɑː.liːɡ/)!\"><span class=\"stress-normal\">colleague</span><span class=\"stress-highlighted\"><span class=\"tonic-syllable\">COL</span>-league</span></span> reminded us that AI is an assistant, not an architect. While an AI tool is remarkably <span class=\"stress-word\" data-word=\"efficient\" data-syllables=\"ef-FI-cient\" data-ipa=\"/ɪˈfɪʃ.ənt/\" data-tip=\"In Portuguese we say 'e-fi-ci-EN-te'. In English, stress is on the 2nd syllable: ef-FI-cient (/ɪˈfɪʃ.ənt/)!\"><span class=\"stress-normal\">efficient</span><span class=\"stress-highlighted\">ef-<span class=\"tonic-syllable\">FI</span>-cient</span></span> at generating repetitive boilerplate code, it cannot <span class=\"stress-word\" data-word=\"communicate\" data-syllables=\"com-MU-ni-cate\" data-ipa=\"/kəˈmjuː.nɪ.keɪt/\" data-tip=\"In Portuguese we say 'co-mu-ni-CAR' (at the end). In English, stress is on the 2nd syllable: com-MU-ni-cate (/kəˈmjuː.nə.keɪt/)!\"><span class=\"stress-normal\">communicate</span><span class=\"stress-highlighted\">com-<span class=\"tonic-syllable\">MU</span>-ni-cate</span></span> with product managers or understand complex business trade-offs.",
            "We observed a <span class=\"stress-word\" data-word=\"significant\" data-syllables=\"sig-NIF-i-cant\" data-ipa=\"/sɪɡˈnɪf.ɪ.kənt/\" data-tip=\"In Portuguese we say 'sig-ni-fi-ca-TI-vo'. In English, stress is on the 2nd syllable: sig-NIF-i-cant (/sɪɡˈnɪf.ə.kənt/)!\"><span class=\"stress-normal\">significant</span><span class=\"stress-highlighted\">sig-<span class=\"tonic-syllable\">NIF</span>-i-cant</span></span> boost in developer <span class=\"stress-word\" data-word=\"productivity\" data-syllables=\"pro-duc-TIV-i-ty\" data-ipa=\"/ˌprɒd.ʌkˈtɪv.ə.ti/\" data-tip=\"In Portuguese we say 'pro-du-ti-vi-DA-de'. In English with suffix -ity, stress precedes the suffix: pro-duc-TIV-i-ty (/ˌproʊ.dʌkˈtɪv.ə.t̬i/)!\"><span class=\"stress-normal\">productivity</span><span class=\"stress-highlighted\">pro-duc-<span class=\"tonic-syllable\">TIV</span>-i-ty</span></span>, but engineers must remain vigilant. Code reviews require <span class=\"stress-word\" data-word=\"continuous\" data-syllables=\"con-TIN-u-ous\" data-ipa=\"/kənˈtɪn.ju.əs/\" data-tip=\"In Portuguese we say 'con-TÍ-nuo'. In English, stress is on the 2nd syllable: con-TIN-u-ous (/kənˈtɪn.ju.əs/)!\"><span class=\"stress-normal\">continuous</span><span class=\"stress-highlighted\">con-<span class=\"tonic-syllable\">TIN</span>-u-ous</span></span> human attention: developers should never commit generated code without verifying tests, security vulnerabilities, and edge cases."
          ]
        },
        "options": [
          {
            "text": "merging",
            "isCorrect": true,
            "errorType": null,
            "errorLabel": null,
            "diagnosticNote": "Correct! In English, any verb immediately following a preposition (before, after, without, for) must take the gerund (-ing)."
          },
          {
            "text": "to merge",
            "isCorrect": false,
            "errorType": "PREPOSITION_WITH_TO_INFINITIVE",
            "errorLabel": "To-Infinitive after Preposition",
            "diagnosticNote": "Literal translation trap from Portuguese ('antes de mesclar'). English prepositions take gerund (-ing), not infinitive."
          },
          {
            "text": "merge",
            "isCorrect": false,
            "errorType": "BASE_FORM_AFTER_PREPOSITION",
            "errorLabel": "Base Form after Preposition",
            "diagnosticNote": "Prepositions cannot be directly followed by bare base verb forms."
          },
          {
            "text": "merged",
            "isCorrect": false,
            "errorType": "PARTICIPLE_AFTER_PREPOSITION",
            "errorLabel": "Past Form after Preposition",
            "diagnosticNote": "Prepositions require -ing, not past inflection -ed."
          }
        ],
        "rule": "<strong>Universal Preposition Rule:</strong> Any verb immediately preceded by a preposition (<em>before, after, without, instead of, by</em>) must take the <strong>gerund (-ing)</strong>: <em>before merging</em>."
      },
      {
        "id": 9,
        "level": 9,
        "categoryKey": "reading_comprehension",
        "categoryLabel": "Reading Comprehension: AI Limitations",
        "difficulty": "Level 9 • Text 3 (AI-GOV-501)",
        "ticket": "AI-GOV-501",
        "ticketFile": "engineering-handbook.md",
        "speakerRole": "VP of Engineering",
        "speakerName": "Alex (Engineering Director)",
        "scrumPrompt": "\"What is the primary trade-off and risk when developers use AI code assistants without critical review?\"",
        "targetSentence": "According to the memo, why is continuous human code review mandatory when using AI coding assistants?",
        "subtext": "Identify the core trade-off and argument presented by engineering leadership:",
        "passageIndex": 2,
        "passage": {
          "id": "text-3",
          "index": 3,
          "totalTexts": 3,
          "badge": "ENGINEERING LEADERSHIP // MEMO AI-GOV-501",
          "title": "AI Pair Programming: Speed vs Code Quality",
          "author": "Alex (Engineering Director)",
          "readTime": "2 min read",
          "questionType": "Reading Comprehension",
          "questionNumberInText": "Text 3 of 3 • Question 3 of 3",
          "paragraphs": [
            "Our engineering team recently adopted AI coding assistants to accelerate daily development. At first, many engineers thought the tool would instantly solve all programming challenges.",
            "However, my senior <span class=\"stress-word\" data-word=\"colleague\" data-syllables=\"COL-league\" data-ipa=\"/ˈkɒl.iːɡ/\" data-tip=\"In Portuguese we say 'co-LE-ga' (stress on LE). In English, stress is on the FIRST syllable: COL-league (/ˈkɑː.liːɡ/)!\"><span class=\"stress-normal\">colleague</span><span class=\"stress-highlighted\"><span class=\"tonic-syllable\">COL</span>-league</span></span> reminded us that AI is an assistant, not an architect. While an AI tool is remarkably <span class=\"stress-word\" data-word=\"efficient\" data-syllables=\"ef-FI-cient\" data-ipa=\"/ɪˈfɪʃ.ənt/\" data-tip=\"In Portuguese we say 'e-fi-ci-EN-te'. In English, stress is on the 2nd syllable: ef-FI-cient (/ɪˈfɪʃ.ənt/)!\"><span class=\"stress-normal\">efficient</span><span class=\"stress-highlighted\">ef-<span class=\"tonic-syllable\">FI</span>-cient</span></span> at generating repetitive boilerplate code, it cannot <span class=\"stress-word\" data-word=\"communicate\" data-syllables=\"com-MU-ni-cate\" data-ipa=\"/kəˈmjuː.nɪ.keɪt/\" data-tip=\"In Portuguese we say 'co-mu-ni-CAR' (at the end). In English, stress is on the 2nd syllable: com-MU-ni-cate (/kəˈmjuː.nə.keɪt/)!\"><span class=\"stress-normal\">communicate</span><span class=\"stress-highlighted\">com-<span class=\"tonic-syllable\">MU</span>-ni-cate</span></span> with product managers or understand complex business trade-offs.",
            "We observed a <span class=\"stress-word\" data-word=\"significant\" data-syllables=\"sig-NIF-i-cant\" data-ipa=\"/sɪɡˈnɪf.ɪ.kənt/\" data-tip=\"In Portuguese we say 'sig-ni-fi-ca-TI-vo'. In English, stress is on the 2nd syllable: sig-NIF-i-cant (/sɪɡˈnɪf.ə.kənt/)!\"><span class=\"stress-normal\">significant</span><span class=\"stress-highlighted\">sig-<span class=\"tonic-syllable\">NIF</span>-i-cant</span></span> boost in developer <span class=\"stress-word\" data-word=\"productivity\" data-syllables=\"pro-duc-TIV-i-ty\" data-ipa=\"/ˌprɒd.ʌkˈtɪv.ə.ti/\" data-tip=\"In Portuguese we say 'pro-du-ti-vi-DA-de'. In English with suffix -ity, stress precedes the suffix: pro-duc-TIV-i-ty (/ˌproʊ.dʌkˈtɪv.ə.t̬i/)!\"><span class=\"stress-normal\">productivity</span><span class=\"stress-highlighted\">pro-duc-<span class=\"tonic-syllable\">TIV</span>-i-ty</span></span>, but engineers must remain vigilant. Code reviews require <span class=\"stress-word\" data-word=\"continuous\" data-syllables=\"con-TIN-u-ous\" data-ipa=\"/kənˈtɪn.ju.əs/\" data-tip=\"In Portuguese we say 'con-TÍ-nuo'. In English, stress is on the 2nd syllable: con-TIN-u-ous (/kənˈtɪn.ju.əs/)!\"><span class=\"stress-normal\">continuous</span><span class=\"stress-highlighted\">con-<span class=\"tonic-syllable\">TIN</span>-u-ous</span></span> human attention: developers should never commit generated code without verifying tests, security vulnerabilities, and edge cases."
          ]
        },
        "options": [
          {
            "text": "While AI generates boilerplate quickly, it cannot understand complex business trade-offs, security vulnerabilities, or edge cases.",
            "isCorrect": true,
            "errorType": null,
            "errorLabel": null,
            "diagnosticNote": "Correct! The memo emphasizes that AI accelerates routine boilerplate, but lacks human architectural judgment, security vigilance, and business context."
          },
          {
            "text": "AI coding assistants are completely incapable of producing any valid syntax or boilerplate code.",
            "isCorrect": false,
            "errorType": "DIRECT_CONTRADICTION",
            "errorLabel": "Direct Contradiction of Text",
            "diagnosticNote": "The text explicitly states AI is 'remarkably efficient at generating repetitive boilerplate code'."
          },
          {
            "text": "Senior engineers decided to ban all pull requests and delete all automated test suites.",
            "isCorrect": false,
            "errorType": "ABSURD_CLAIM",
            "errorLabel": "Absurd Claim / Unsupported Statement",
            "diagnosticNote": "The text emphasizes that peer review and automated testing are more crucial than ever."
          },
          {
            "text": "The engineering team observed a severe drop in developer productivity after enabling the tool.",
            "isCorrect": false,
            "errorType": "METRIC_INVERSION",
            "errorLabel": "Metric Inversion",
            "diagnosticNote": "The memo reported a 'significant boost in developer productivity', not a drop."
          }
        ],
        "rule": "Critical thinking in engineering AI adoption: AI accelerates routine boilerplate, but <strong>human engineers remain strictly responsible</strong> for security, edge cases, and business logic."
      }
    ]
  }
];
