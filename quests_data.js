/**
 * QUESTS CATALOG & DIAGNOSTIC DISTRACTOR DATABASE
 * Each option contains diagnostic error metadata so teachers know EXACTLY why a student failed.
 */

const QUESTS_CATALOG = [
  {
    id: "simple-past",
    title: "Simple Past: Tech Daily Standup",
    level: "A1 ➔ A2",
    badge: "PASSADO SIMPLES",
    color: "cyan",
    icon: "⚡",
    description: "Avalie o domínio do Simple Past em contexto de Daily Standup com time internacional: flexão de verbos regulares, formas irregulares de alta frequência técnica, concordância do verbo to be e a regra de eliminação do duplo passado com didn't/did.",
    estimatedMinutes: 6,
    totalQuestions: 10,
    targetSkills: [
      "Regras de Sufixo de Verbos Regulares (-ed e -d)",
      "Aplicação de Verbos Irregulares em TI",
      "Concordância do Verbo To Be no Passado (was vs were)",
      "Regra do Auxiliar DID / DIDN'T (verbo na forma base)"
    ],
    questions: [
      {
        id: 1,
        level: 1,
        categoryKey: "regular",
        categoryLabel: "Verbos Regulares (-ed)",
        difficulty: "Nível 1 • Básico",
        ticket: "AUTH-101",
        ticketFile: "auth-service.ts",
        speakerRole: "Scrum Master",
        speakerName: "Carlos (Tech Lead)",
        scrumPrompt: '"Lucas, what did you work on yesterday?"',
        targetSentence: 'Yesterday, I <span class="blank-slot">________</span> (work) on the login screen for five hours.',
        subtext: 'Regra padrão do sufixo -ed no Simple Past:',
        options: [
          {
            text: "worked",
            isCorrect: true,
            errorType: null,
            errorLabel: null,
            diagnosticNote: "Correto! Aplicou a regra padrão adicionando -ed ao verbo regular work."
          },
          {
            text: "work",
            isCorrect: false,
            errorType: "OMISSAO_CONJUGACAO",
            errorLabel: "Omissão de Conjugação (Forma de Presente)",
            diagnosticNote: "Usou a forma no presente/infinitivo sem flexionar no Simple Past, ignorando o advérbio de tempo 'yesterday'."
          },
          {
            text: "workt",
            isCorrect: false,
            errorType: "ERRO_FONETICO",
            errorLabel: "Ortografia Fonética Incorreta",
            diagnosticNote: "Escreveu pelo som da pronúncia /t/ em vez do sufixo ortográfico padrão -ed."
          },
          {
            text: "working",
            isCorrect: false,
            errorType: "GERUNDIO_INDEVIDO",
            errorLabel: "Confusão com Gerúndio (-ing)",
            diagnosticNote: "Usou a forma contínua -ing sem o verbo auxiliar to be (was/were) e sem expressar ação pontual do Simple Past."
          }
        ],
        rule: "Regra padrão: para a maioria dos verbos regulares em inglês, acrescenta-se <strong>-ed</strong> ao infinitivo para formar o Simple Past (<em>work ➔ worked</em>)."
      },
      {
        id: 2,
        level: 2,
        categoryKey: "regular",
        categoryLabel: "Verbos Regulares (-ed)",
        difficulty: "Nível 2 • Terminação em -e",
        ticket: "SPRINT-42",
        ticketFile: "jira-cleanup.sh",
        speakerRole: "Scrum Master",
        speakerName: "Mariana (Agile Coach)",
        scrumPrompt: '"Did we clean up the sprint backlog yesterday before the demo?"',
        targetSentence: 'The sprint ended, so we <span class="blank-slot">________</span> (close) all the completed Jira tickets.',
        subtext: 'Verbo regular que já termina com a letra -e:',
        options: [
          {
            text: "closed",
            isCorrect: true,
            errorType: null,
            errorLabel: null,
            diagnosticNote: "Correto! Verbos terminados em -e recebem apenas -d."
          },
          {
            text: "closeed",
            isCorrect: false,
            errorType: "DUPLICACAO_E",
            errorLabel: "Duplicação Desnecessária de Vogal (-eed)",
            diagnosticNote: "Adicionou -ed completo a um verbo que já terminava em -e, gerando a forma inexistente 'closeed'."
          },
          {
            text: "close",
            isCorrect: false,
            errorType: "OMISSAO_CONJUGACAO",
            errorLabel: "Omissão de Conjugação",
            diagnosticNote: "Deixou o verbo na forma base no presente."
          },
          {
            text: "did close",
            isCorrect: false,
            errorType: "ENFASE_INADEQUADA",
            errorLabel: "Auxiliar DID em Afirmativa Neutra",
            diagnosticNote: "Usou o auxiliar 'did' em oração afirmativa simples onde não cabe ênfase enfática de contraste."
          }
        ],
        rule: "Quando o verbo regular já termina com <strong>-e</strong>, acrescenta-se apenas <strong>-d</strong> (<em>close ➔ closed</em>, nunca 'closeed')."
      },
      {
        id: 3,
        level: 3,
        categoryKey: "irregular",
        categoryLabel: "Verbos Irregulares",
        difficulty: "Nível 3 • Irregular Clássico (Have)",
        ticket: "SYNC-89",
        ticketFile: "meeting-agenda.md",
        speakerRole: "Product Owner",
        speakerName: "David (Product Manager)",
        scrumPrompt: '"Did you sync with the client team before pushing the release?"',
        targetSentence: 'Before the release, we <span class="blank-slot">________</span> (have) a quick sync meeting with the client.',
        subtext: 'Forma no Simple Past do verbo irregular have:',
        options: [
          {
            text: "had",
            isCorrect: true,
            errorType: null,
            errorLabel: null,
            diagnosticNote: "Correto! Had é o passado irregular de have."
          },
          {
            text: "haved",
            isCorrect: false,
            errorType: "REGULARIZACAO_IRREGULAR",
            errorLabel: "Hipergeneralização de -ed em Verbo Irregular",
            diagnosticNote: "Tentou aplicar a terminação regular -ed ao verbo have. A palavra 'haved' não existe em inglês."
          },
          {
            text: "have",
            isCorrect: false,
            errorType: "OMISSAO_CONJUGACAO",
            errorLabel: "Falta de Flexão no Passado",
            diagnosticNote: "Manteve o verbo no presente have."
          },
          {
            text: "was have",
            isCorrect: false,
            errorType: "TO_BE_AUXILIAR_INDEVIDO",
            errorLabel: "Invenção de Estrutura Composta (Was + Verbo)",
            diagnosticNote: "Misturou o verbo to be como falso auxiliar de passado diante de um verbo pleno."
          }
        ],
        rule: "O verbo <strong>have</strong> é irregular fundamental: sua forma no Simple Past é <strong>had</strong> ('haved' não existe em inglês)."
      },
      {
        id: 4,
        level: 4,
        categoryKey: "irregular",
        categoryLabel: "Verbos Irregulares",
        difficulty: "Nível 4 • Verbos de Código (Write / Run)",
        ticket: "CI-CD-204",
        ticketFile: "pipeline.spec.ts",
        speakerRole: "QA Lead",
        speakerName: "Renata (QA Engineer)",
        scrumPrompt: '"What did Sarah execute in the test environment yesterday afternoon?"',
        targetSentence: 'Yesterday afternoon, Sarah <span class="blank-slot">________</span> (write) the script and <span class="blank-slot">________</span> (run) the test suite.',
        subtext: 'Formas de Simple Past para write e run juntas:',
        options: [
          {
            text: "wrote / ran",
            isCorrect: true,
            errorType: null,
            errorLabel: null,
            diagnosticNote: "Correto! Dominou os dois verbos irregulares de código (write ➔ wrote, run ➔ ran)."
          },
          {
            text: "writed / runned",
            isCorrect: false,
            errorType: "REGULARIZACAO_IRREGULAR",
            errorLabel: "Hipergeneralização de -ed em Múltiplos Irregulares",
            diagnosticNote: "Tratou tanto 'write' quanto 'run' como se fossem regulares. Ambos são irregulares clássicos."
          },
          {
            text: "wrote / run",
            isCorrect: false,
            errorType: "INCONSISTENCIA_TEMPORAL",
            errorLabel: "Inconsistência de Paralelismo Temporal",
            diagnosticNote: "Conjugou corretamente o primeiro verbo (wrote), mas esqueceu de conjugar o segundo (manteve 'run')."
          },
          {
            text: "writes / ran",
            isCorrect: false,
            errorType: "MISTURA_PRESENTE_PASSADO",
            errorLabel: "Mistura de Presente (3ª pessoa -s) com Passado",
            diagnosticNote: "Usou 'writes' no presente simples e 'ran' no passado, quebrando a concordância de tempo."
          }
        ],
        rule: "Ambos são verbos irregulares muito comuns em programação: <em>write ➔ wrote</em> e <em>run ➔ ran</em>."
      },
      {
        id: 5,
        level: 5,
        categoryKey: "tobe",
        categoryLabel: "Verbo To Be no passado",
        difficulty: "Nível 5 • To Be Singular",
        ticket: "INCIDENT-503",
        ticketFile: "postgres-cluster.yml",
        speakerRole: "DevOps Engineer",
        speakerName: "Alex (Cloud SRE)",
        scrumPrompt: '"Why did the automated deployment fail this morning?"',
        targetSentence: 'The deployment failed because the database server <span class="blank-slot">________</span> down this morning.',
        subtext: 'Simple Past do verbo to be para 3ª pessoa do singular (the server = it):',
        options: [
          {
            text: "was",
            isCorrect: true,
            errorType: null,
            errorLabel: null,
            diagnosticNote: "Correto! Concordância de 3ª pessoa singular com to be no passado (it was)."
          },
          {
            text: "were",
            isCorrect: false,
            errorType: "CONCORDANCIA_NUMERO",
            errorLabel: "Erro de Concordância Número/Pessoa (Plural vs Singular)",
            diagnosticNote: "Usou 'were' (indicado para plural ou you) com um sujeito singular (the database server = it)."
          },
          {
            text: "did be",
            isCorrect: false,
            errorType: "DID_COM_TO_BE",
            errorLabel: "Uso do Auxiliar DID com o Verbo To Be",
            diagnosticNote: "O verbo to be não aceita o auxiliar did/didn't em nenhuma hipótese em inglês moderno."
          },
          {
            text: "is",
            isCorrect: false,
            errorType: "OMISSAO_CONJUGACAO",
            errorLabel: "Forma de Presente para Evento Passado",
            diagnosticNote: "Usou o presente 'is' para um evento já ocorrido nesta manhã relatado no passado."
          }
        ],
        rule: "Para a 3ª pessoa do singular (the server = it), o passado do verbo <em>to be</em> é <strong>was</strong> (usamos <em>were</em> para plural e <em>you</em>)."
      },
      {
        id: 6,
        level: 6,
        categoryKey: "did",
        categoryLabel: "Auxiliar DID (Negativas e Perguntas)",
        difficulty: "Nível 6 • Negativa Regular (Pegadinha)",
        ticket: "GIT-FLOW-12",
        ticketFile: "git-commit.patch",
        speakerRole: "Tech Lead",
        speakerName: "Carlos (Tech Lead)",
        scrumPrompt: '"Did you push that commit with the unfinished bugfix to main?"',
        targetSentence: 'I noticed a bug in the code, so I <span class="blank-slot">________</span> the changes to the main branch.',
        subtext: 'Evitando o duplo passado na negativa:',
        options: [
          {
            text: "didn't push",
            isCorrect: true,
            errorType: null,
            errorLabel: null,
            diagnosticNote: "Correto! Com didn't, o verbo volta obrigatoriamente para a forma base no infinitivo."
          },
          {
            text: "didn't pushed",
            isCorrect: false,
            errorType: "DUPLO_PASSADO",
            errorLabel: "Armadilha do Duplo Passado (didn't + V2)",
            diagnosticNote: "ERRO CRÍTICO A1 ➔ A2: manteve o sufixo -ed no verbo principal mesmo com o auxiliar didn't presente."
          },
          {
            text: "don't pushed",
            isCorrect: false,
            errorType: "AUXILIAR_PRESENTE_VERBO_PASSADO",
            errorLabel: "Auxiliar de Presente + Verbo no Passado",
            diagnosticNote: "Usou 'don't' (presente) com verbo flexionado no passado (-ed)."
          },
          {
            text: "didn't to push",
            isCorrect: false,
            errorType: "PARTICULA_TO_APOS_AUXILIAR",
            errorLabel: "Uso Indevido da Partícula 'TO' após Auxiliar",
            diagnosticNote: "Adicionou a partícula 'to' após didn't. Auxiliares exigem o infinitivo sem 'to' (bare infinitive)."
          }
        ],
        rule: "<strong>Atenção à regra de ouro:</strong> com o auxiliar <em>didn't</em>, o verbo principal volta obrigatoriamente para a forma base (<em>didn't push</em>, nunca 'didn't pushed')."
      },
      {
        id: 7,
        level: 7,
        categoryKey: "did",
        categoryLabel: "Auxiliar DID (Negativas e Perguntas)",
        difficulty: "Nível 7 • Negativa com Verbo Irregular",
        ticket: "LOGS-808",
        ticketFile: "cloudwatch-stream.log",
        speakerRole: "Security SRE",
        speakerName: "Julia (DevSecOps)",
        scrumPrompt: '"Did the crash dump leave any error traces in CloudWatch?"',
        targetSentence: 'The system crashed, but we <span class="blank-slot">________</span> any error logs in the cloud console.',
        subtext: 'Negativa no passado com o verbo irregular see:',
        options: [
          {
            text: "didn't see",
            isCorrect: true,
            errorType: null,
            errorLabel: null,
            diagnosticNote: "Correto! O verbo irregular também volta à forma base (see) após didn't."
          },
          {
            text: "didn't saw",
            isCorrect: false,
            errorType: "DUPLO_PASSADO_IRREGULAR",
            errorLabel: "Duplo Passado com Verbo Irregular",
            diagnosticNote: "ERRO CRÍTICO A1 ➔ A2: colocou a forma de passado irregular 'saw' após o auxiliar didn't."
          },
          {
            text: "don't saw",
            isCorrect: false,
            errorType: "AUXILIAR_PRESENTE_VERBO_PASSADO",
            errorLabel: "Auxiliar de Presente + Irregular no Passado",
            diagnosticNote: "Combinou auxiliar de presente don't com a forma de passado saw."
          },
          {
            text: "weren't see",
            isCorrect: false,
            errorType: "TO_BE_COMO_AUXILIAR_ACAO",
            errorLabel: "Uso de To Be Negativo como Auxiliar de Ação",
            diagnosticNote: "Tentou usar 'weren't' em vez de didn't para negar um verbo de ação (see)."
          }
        ],
        rule: "Mesmo para verbos irregulares, após <strong>didn't</strong> usamos a forma base infinitiva: <em>didn't see</em> (o passado irregular 'saw' não deve ser duplicado)."
      },
      {
        id: 8,
        level: 8,
        categoryKey: "did",
        categoryLabel: "Auxiliar DID (Negativas e Perguntas)",
        difficulty: "Nível 8 • Pergunta em Standup com DID",
        ticket: "PR-314",
        ticketFile: "review-checklist.md",
        speakerRole: "Peer Developer",
        speakerName: "Felipe (Frontend Dev)",
        scrumPrompt: '"Como você pergunta a um colega em inglês durante a Daily Standup:"',
        targetSentence: 'Hey Carlos, <span class="blank-slot">________</span> the pull request before our meeting yesterday?',
        subtext: 'Estrutura interrogativa no Simple Past com o auxiliar Did:',
        options: [
          {
            text: "Did you review",
            isCorrect: true,
            errorType: null,
            errorLabel: null,
            diagnosticNote: "Correto! Estrutura canônica: Did + sujeito + verbo na forma base."
          },
          {
            text: "Did you reviewed",
            isCorrect: false,
            errorType: "DUPLO_PASSADO_INTERROGATIVO",
            errorLabel: "Duplo Passado em Pergunta Interrogativa",
            diagnosticNote: "ERRO CRÍTICO: colocou -ed no verbo review mesmo tendo iniciado a pergunta com o auxiliar Did."
          },
          {
            text: "Were you review",
            isCorrect: false,
            errorType: "TO_BE_EM_PERGUNTA_ACAO",
            errorLabel: "Substituição Incorreta de DID por Were",
            diagnosticNote: "Usou 'Were' em vez do auxiliar 'Did' para fazer uma pergunta com verbo de ação."
          },
          {
            text: "Have you reviewed",
            isCorrect: false,
            errorType: "TEMPO_VERBAL_INADEQUADO",
            errorLabel: "Present Perfect com Marcador Temporal Definido",
            diagnosticNote: "Com advérbios de tempo específico no passado ('yesterday'), o inglês exige Simple Past, não Present Perfect."
          }
        ],
        rule: "Estrutura correta para perguntas com <strong>Did</strong>: <em>Did + Sujeito + Verbo na forma base</em> (<em>Did you review...?</em>, sem terminação -ed)."
      },
      {
        id: 9,
        level: 9,
        categoryKey: "did",
        categoryLabel: "Auxiliar DID (Negativas e Perguntas)",
        difficulty: "Nível 9 • Pergunta Wh- (Where/What + Did)",
        ticket: "SECRET-77",
        ticketFile: "vault-secrets.env",
        speakerRole: "Staff Engineer",
        speakerName: "Helena (Staff Engineer)",
        scrumPrompt: '"Investigating the backend outage root cause:"',
        targetSentence: 'Where <span class="blank-slot">________</span> the credentials when the backend stopped responding?',
        subtext: 'Pergunta aberta com pronome interrogativo Where + Simple Past:',
        options: [
          {
            text: "did you find",
            isCorrect: true,
            errorType: null,
            errorLabel: null,
            diagnosticNote: "Correto! Wh- word + did + sujeito + verbo base."
          },
          {
            text: "did you found",
            isCorrect: false,
            errorType: "DUPLO_PASSADO_WH",
            errorLabel: "Duplo Passado em Pergunta Wh-",
            diagnosticNote: "Usou a forma de passado 'found' após o auxiliar 'did'. O correto é a forma base find."
          },
          {
            text: "were you find",
            isCorrect: false,
            errorType: "TO_BE_EM_PERGUNTA_ACAO",
            errorLabel: "To Be em Pergunta de Ação",
            diagnosticNote: "Usou 'were' em vez do auxiliar 'did'."
          },
          {
            text: "you did find",
            isCorrect: false,
            errorType: "ORDEM_SEM_INVERSAO",
            errorLabel: "Falta de Inversão Sintática em Pergunta",
            diagnosticNote: "Não inverteu o auxiliar com o sujeito em uma pergunta ('Where you did find' em vez de 'Where did you find')."
          }
        ],
        rule: "Perguntas com Wh- (Where, What, When) no Simple Past seguem: <strong>Wh- + did + sujeito + verbo base</strong> (<em>Where did you find...?</em>)."
      },
      {
        id: 10,
        level: 10,
        categoryKey: "synthesis",
        categoryLabel: "Desafio Integrado (Sintaxe & Combinação)",
        difficulty: "Nível 10 • Desafio Final Multi-Cláusula",
        ticket: "ALL-HANDS-V2",
        ticketFile: "client-demo-call.webrtc",
        speakerRole: "Engineering Director",
        speakerName: "Director Thomas",
        scrumPrompt: '"Select the 100% syntactically correct update for our global client sync:"',
        targetSentence: 'Identifique a frase 100% correta dita em uma reunião com parceiro técnico internacional:',
        subtext: 'Avalia verbos regulares, irregulares e negativas simultaneamente:',
        options: [
          {
            text: '"Yesterday we found the issue, but we didn\'t fix it because we had another meeting."',
            isCorrect: true,
            errorType: null,
            errorLabel: null,
            diagnosticNote: "Perfeito! Combinou irregular afirmativo (found), negativa sem duplo passado (didn't fix) e outro irregular (had)."
          },
          {
            text: '"Yesterday we founded the issue, but we didn\'t fixed it because we had another meeting."',
            isCorrect: false,
            errorType: "DUPLO_PASSADO_E_FORMA_INEXISTENTE",
            errorLabel: "Duplo Passado + Regularização Inexistente",
            diagnosticNote: "Cometeu dois erros graves: usou 'founded' (passado de find é found) e duplo passado em 'didn't fixed'."
          },
          {
            text: '"Yesterday we found the issue, but we didn\'t fix it because we haved another meeting."',
            isCorrect: false,
            errorType: "REGULARIZACAO_IRREGULAR",
            errorLabel: "Hipergeneralização de Have ('haved')",
            diagnosticNote: "Estruturou bem o início da frase, mas errou a terminação de have usando a forma inexistente 'haved'."
          },
          {
            text: '"Yesterday we finded the issue, but we didn\'t fix it because we were have another meeting."',
            isCorrect: false,
            errorType: "MULTIPLOS_ERROS_FUNDAMENTAIS",
            errorLabel: "Invenção de Formas ('finded') + 'were have'",
            diagnosticNote: "Errou a raiz de find ('finded' não existe) e criou a estrutura anômala 'were have'."
          }
        ],
        rule: "Combinação perfeita: verbo irregular afirmativo (<em>found</em>), negativa com auxiliar + verbo base (<em>didn't fix</em>) e verbo irregular (<em>had</em>)."
      }
    ]
  },
  {
    id: "simple-past-101",
    title: "Simple Past 101: Regras & Pronúncia da Aula",
    level: "A1 ➔ A2",
    badge: "REVISÃO DA AULA",
    color: "purple",
    icon: "📖",
    description: "Revisão prática baseada nas regras e na fonética ensinadas na aula: aplicação da regra de ouro do auxiliar DID, mecânica de pronúncia do -ED (/t/ vs /ɪd/), flexão de formas irregulares essenciais e preenchimento de narrativas técnicas de standup.",
    estimatedMinutes: 7,
    totalQuestions: 10,
    targetSkills: [
      "Regra Fundamental do Auxiliar DID (verbo na forma base sem duplo passado)",
      "Regra de Pronúncia /t/: quando omitir a vogal 'e' na terminação -ED",
      "Regra de Pronúncia /ɪd/: sílaba adicional para verbos terminados em som de T ou D",
      "Regra de Pronúncia /d/ suave: continuidade sonora sem sílaba extra",
      "Conjugação de Verbos Irregulares de Alta Frequência",
      "Leitura & Interpretação de Standup (Incidentes e Deploy Flow)"
    ],
    questions: [
      {
        id: 1,
        level: 1,
        categoryKey: "slide2_tobe",
        categoryLabel: "Regra do Verbo To Be no Passado",
        difficulty: "Nível 1 • Was vs Were",
        ticket: "SERVER-STATUS",
        ticketFile: "uptime-monitor.ts",
        speakerRole: "DevOps Engineer",
        speakerName: "Alex (Cloud SRE)",
        scrumPrompt: '"Check the server incident report from yesterday:"',
        targetSentence: 'Today: The server is online. Yesterday: The database server <span class="blank-slot">________</span> (be) down.',
        subtext: 'Concordância correta do verbo to be com sujeito no singular (the database server):',
        options: [
          {
            text: "was",
            isCorrect: true,
            errorType: null,
            errorLabel: null,
            diagnosticNote: "Correto! Slide 2: is ➔ was para sujeitos no singular (the server = it)."
          },
          {
            text: "were",
            isCorrect: false,
            errorType: "CONCORDANCIA_NUMERO",
            errorLabel: "Concordância Singular vs Plural",
            diagnosticNote: "Usou 'were' (indicado para plural ou you) com sujeito singular (the server = it)."
          },
          {
            text: "did be",
            isCorrect: false,
            errorType: "DID_COM_TO_BE",
            errorLabel: "Uso de DID com Verbo To Be",
            diagnosticNote: "O verbo to be é autossuficiente e nunca aceita o auxiliar did/didn't."
          },
          {
            text: "is",
            isCorrect: false,
            errorType: "OMISSAO_CONJUGACAO",
            errorLabel: "Forma de Presente",
            diagnosticNote: "Usou 'is' no presente para um evento já ocorrido ontem."
          }
        ],
        rule: "Slide 2 do PDF: <em>is/are ➔ was/were</em>. Para 'the server' (singular/it), usamos <strong>was</strong> (<em>Yesterday: The server was down</em>)."
      },
      {
        id: 2,
        level: 2,
        categoryKey: "slide2_have",
        categoryLabel: "Verbo Irregular no Passado",
        difficulty: "Nível 2 • Verbo Irregular Have",
        ticket: "DB-INCIDENT",
        ticketFile: "db-sync.log",
        speakerRole: "Tech Lead",
        speakerName: "Carlos (Tech Lead)",
        scrumPrompt: '"What happened during yesterday\'s standup?"',
        targetSentence: 'Today: We have a quick meeting. Yesterday: We <span class="blank-slot">________</span> (have) an issue with the database.',
        subtext: 'Conjugação no Simple Past para o verbo irregular have:',
        options: [
          {
            text: "had",
            isCorrect: true,
            errorType: null,
            errorLabel: null,
            diagnosticNote: "Correto! Slide 2: have ➔ had."
          },
          {
            text: "haved",
            isCorrect: false,
            errorType: "REGULARIZACAO_IRREGULAR",
            errorLabel: "Hipergeneralização de -ed em Have",
            diagnosticNote: "Slide 2: have é irregular! A forma 'haved' não existe em inglês."
          },
          {
            text: "have",
            isCorrect: false,
            errorType: "OMISSAO_CONJUGACAO",
            errorLabel: "Falta de Flexão no Passado",
            diagnosticNote: "Manteve o verbo no presente have."
          },
          {
            text: "was have",
            isCorrect: false,
            errorType: "TO_BE_AUXILIAR_INDEVIDO",
            errorLabel: "Invenção com Was + Verbo",
            diagnosticNote: "Uso indevido de 'was' diante de verbo pleno."
          }
        ],
        rule: "Slide 2 do PDF: o passado de <em>have</em> é <strong>had</strong> (<em>Yesterday: We had an issue with the database</em>)."
      },
      {
        id: 3,
        level: 3,
        categoryKey: "slide2_do",
        categoryLabel: "Verbo Irregular no Passado",
        difficulty: "Nível 3 • Verbo Irregular Do",
        ticket: "DEPLOY-AUTO",
        ticketFile: "cd-pipeline.sh",
        speakerRole: "Release Manager",
        speakerName: "Patricia (Release Manager)",
        scrumPrompt: '"Who ran the deployment yesterday?"',
        targetSentence: 'Today: I do code reviews in the morning. Yesterday: I <span class="blank-slot">________</span> (do) the deployment yesterday.',
        subtext: 'Conjugação no Simple Past para o verbo irregular do:',
        options: [
          {
            text: "did",
            isCorrect: true,
            errorType: null,
            errorLabel: null,
            diagnosticNote: "Correto! Slide 2: do ➔ did."
          },
          {
            text: "doed",
            isCorrect: false,
            errorType: "REGULARIZACAO_IRREGULAR",
            errorLabel: "Tentativa de Adicionar -ed em Do",
            diagnosticNote: "Do é irregular; 'doed' não existe."
          },
          {
            text: "done",
            isCorrect: false,
            errorType: "PARTICIPIO_PASSADO",
            errorLabel: "Particípio Passado em vez de Simple Past",
            diagnosticNote: "'Done' é particípio passado (past participle), não o Simple Past."
          },
          {
            text: "did do",
            isCorrect: false,
            errorType: "DUPLICACAO_AUXILIAR",
            errorLabel: "Duplicação de Auxiliar sem Necessidade",
            diagnosticNote: "Usou did do em afirmação neutra."
          }
        ],
        rule: "Slide 2 do PDF: o passado de <em>do</em> é <strong>did</strong> (<em>Yesterday: I did the deployment yesterday</em>)."
      },
      {
        id: 4,
        level: 4,
        categoryKey: "slide2_rule",
        categoryLabel: "Regra de Ouro do DID",
        difficulty: "Nível 4 • Negativa com DID",
        ticket: "GIT-FLOW",
        ticketFile: "branch-protect.yml",
        speakerRole: "Tech Lead",
        speakerName: "Carlos (Tech Lead)",
        scrumPrompt: '"Applying the golden rule for negative sentences in the past:"',
        targetSentence: 'Regra da aula: "Ao usar did/didn\'t, o passado já está no auxiliar." Complete: I noticed an unstable test, so I <span class="blank-slot">________</span> the branch.',
        subtext: 'Estrutura negativa correta respeitando a regra do verbo na forma base:',
        options: [
          {
            text: "didn't push",
            isCorrect: true,
            errorType: null,
            errorLabel: null,
            diagnosticNote: "Correto! Slide 2: o auxiliar didn't já carrega o passado, o verbo principal segue no presente/base."
          },
          {
            text: "didn't pushed",
            isCorrect: false,
            errorType: "DUPLO_PASSADO",
            errorLabel: "Armadilha do Duplo Passado (didn't + V2)",
            diagnosticNote: "Viola frontalmente a regra do Slide 2: com didn't, as palavras seguintes ficam no presente/forma base."
          },
          {
            text: "don't pushed",
            isCorrect: false,
            errorType: "AUXILIAR_PRESENTE_VERBO_PASSADO",
            errorLabel: "Auxiliar de Presente + Passado",
            diagnosticNote: "Misturou don't com verbo flexionado."
          },
          {
            text: "didn't to push",
            isCorrect: false,
            errorType: "PARTICULA_TO_APOS_AUXILIAR",
            errorLabel: "Partícula 'to' após Didn't",
            diagnosticNote: "Não se usa 'to' após o auxiliar didn't."
          }
        ],
        rule: "Slide 2 do PDF: <em>'Ao usar did, a frase inteira fica no passado e segue com as palavras no presente'</em> ➔ <strong>didn't push</strong>."
      },
      {
        id: 5,
        level: 5,
        categoryKey: "slide3_sound_t",
        categoryLabel: "Regra de Pronúncia: Som /t/",
        difficulty: "Nível 5 • Omissão do 'E' falado (som /t/)",
        ticket: "DAILY-ROUTINE",
        ticketFile: "inbox-fix.ts",
        speakerRole: "Scrum Master",
        speakerName: "Mariana (Agile Coach)",
        scrumPrompt: '"Morning standup report applying the pronunciation rule:"',
        targetSentence: 'Regra fonética da aula: "Se o verbo não termina com som de T ou D, você engole a letra E na fala." Complete a ortografia no Simple Past: In the morning, I <span class="blank-slot">________</span> (check) my emails and <span class="blank-slot">________</span> (fix) the issue.',
        subtext: 'Aplicação da regra ortográfica do Simple Past para verbos com terminação em /t/:',
        options: [
          {
            text: "checked / fixed",
            isCorrect: true,
            errorType: null,
            errorLabel: null,
            diagnosticNote: "Correto! Escrita com terminação -ed; pronúncia engolindo o 'e' com som final /t/."
          },
          {
            text: "checkt / fixt",
            isCorrect: false,
            errorType: "ERRO_FONETICO",
            errorLabel: "Ortografia Fonética /t/",
            diagnosticNote: "Slide 3: Embora tenham som de /t/, a escrita padrão exige -ed!"
          },
          {
            text: "checked / fixxed",
            isCorrect: false,
            errorType: "DUPLICACAO_CONSOANTE_X",
            errorLabel: "Duplicação Desnecessária de X",
            diagnosticNote: "A letra X não é duplicada no Simple Past."
          },
          {
            text: "check / fixed",
            isCorrect: false,
            errorType: "INCONSISTENCIA_TEMPORAL",
            errorLabel: "Inconsistência de Tempo",
            diagnosticNote: "Esqueceu de flexionar o primeiro verbo."
          }
        ],
        rule: "Slide 3 do PDF: <em>work ➔ worked, push ➔ pushed, fix ➔ fixed, check ➔ checked</em> (escrita: <strong>-ed</strong>; som: <strong>/t/</strong>)."
      },
      {
        id: 6,
        level: 6,
        categoryKey: "slide3_sound_d",
        categoryLabel: "Regra de Pronúncia: Som /d/ suave",
        difficulty: "Nível 6 • Som de /d/ suave sem sílaba extra",
        ticket: "CLEANUP-DB",
        ticketFile: "cache-flush.sh",
        speakerRole: "Database Admin",
        speakerName: "Roberto (DBA)",
        scrumPrompt: '"Post-incident cleanup step from yesterday\'s sprint:"',
        targetSentence: 'After solving the memory spike, we <span class="blank-slot">________</span> (clean) all the temporary logs.',
        subtext: 'Ortografia do passado regular para verbos terminados em som sonoro (/d/ suave):',
        options: [
          {
            text: "cleaned",
            isCorrect: true,
            errorType: null,
            errorLabel: null,
            diagnosticNote: "Correto! Slide 3: clean ➔ cleaned com som de /d/ suave."
          },
          {
            text: "cleand",
            isCorrect: false,
            errorType: "OMISSAO_VOGAL_E",
            errorLabel: "Omissão da Letra 'E' na Escrita",
            diagnosticNote: "Engoliu o 'E' na escrita. A terminação escrita é sempre -ed."
          },
          {
            text: "clean",
            isCorrect: false,
            errorType: "OMISSAO_CONJUGACAO",
            errorLabel: "Forma de Presente",
            diagnosticNote: "Verbo sem flexão de passado."
          },
          {
            text: "cleant",
            isCorrect: false,
            errorType: "ERRO_FONETICO",
            errorLabel: "Confusão Fonética /t/ vs /d/",
            diagnosticNote: "Clean termina em som sonoro /n/, logo recebe som de /d/ suave, escrito -ed."
          }
        ],
        rule: "Slide 3 do PDF: <em>clean ➔ cleaned</em> (pronúncia com som de <strong>/d/ suave</strong>, sem criar sílaba extra)."
      },
      {
        id: 7,
        level: 7,
        categoryKey: "slide4_sound_id",
        categoryLabel: "Regra de Pronúncia: Som '-ID' (/ɪd/)",
        difficulty: "Nível 7 • Criação de sílaba extra (/ɪd/)",
        ticket: "TEST-SUITE",
        ticketFile: "jest-runner.js",
        speakerRole: "QA Engineer",
        speakerName: "Renata (QA Engineer)",
        scrumPrompt: '"Regra fonética da aula: pronuncia-se \'-ID\' quando o verbo original já termina com som de T ou D:"',
        targetSentence: 'Before deploying, Sarah <span class="blank-slot">________</span> (test) the code and <span class="blank-slot">________</span> (start) the test suite.',
        subtext: 'Ortografia no Simple Past para verbos cuja pronúncia ganha sílaba extra (/ɪd/):',
        options: [
          {
            text: "tested / started",
            isCorrect: true,
            errorType: null,
            errorLabel: null,
            diagnosticNote: "Correto! Slide 4: test ➔ tested (/ɪd/) e start ➔ started (/ɪd/)."
          },
          {
            text: "test / start",
            isCorrect: false,
            errorType: "OMISSAO_CONJUGACAO",
            errorLabel: "Verbos no Presente",
            diagnosticNote: "Falta de flexão no passado."
          },
          {
            text: "testted / started",
            isCorrect: false,
            errorType: "DUPLICACAO_CONSOANTE_T",
            errorLabel: "Duplicação Indevida de Consoante",
            diagnosticNote: "Test termina em consoante dupla (-st), portanto NÃO duplica o T."
          },
          {
            text: "tested / was start",
            isCorrect: false,
            errorType: "TO_BE_AUXILIAR_INDEVIDO",
            errorLabel: "Uso de 'was start'",
            diagnosticNote: "Invenção de estrutura composta."
          }
        ],
        rule: "Slide 4 do PDF: <em>test ➔ tested (/ɪd/)</em> e <em>start ➔ started (/ɪd/)</em> ganham sílaba extra na fala porque o verbo base já termina com som de T."
      },
      {
        id: 8,
        level: 8,
        categoryKey: "slide4_create",
        categoryLabel: "Regra de Pronúncia: Som '-ID' (/ɪd/)",
        difficulty: "Nível 8 • Verbos terminados em -e com som de T",
        ticket: "DOCKER-FLOW",
        ticketFile: "container-lifecycle.sh",
        speakerRole: "Software Engineer",
        speakerName: "Felipe (Fullstack Dev)",
        scrumPrompt: '"Applying past spelling rules to cloud infrastructure verbs:"',
        targetSentence: 'Yesterday, the team <span class="blank-slot">________</span> (create) the container and <span class="blank-slot">________</span> (restart) the service.',
        subtext: 'Ortografia no Simple Past aplicando as regras de sufixos regulares (-d vs -ed):',
        options: [
          {
            text: "created / restarted",
            isCorrect: true,
            errorType: null,
            errorLabel: null,
            diagnosticNote: "Correto! Create (acrescenta -d) e restart (acrescenta -ed); ambos com som final /ɪd/."
          },
          {
            text: "createed / restarted",
            isCorrect: false,
            errorType: "DUPLICACAO_E",
            errorLabel: "Duplicação de 'E' em Create",
            diagnosticNote: "Create já termina em -e, então recebe apenas -d (created)."
          },
          {
            text: "created / restart",
            isCorrect: false,
            errorType: "INCONSISTENCIA_TEMPORAL",
            errorLabel: "Inconsistência de Tempo",
            diagnosticNote: "Conjugou o primeiro verbo mas esqueceu de conjugar o segundo."
          },
          {
            text: "was create / restarted",
            isCorrect: false,
            errorType: "TO_BE_AUXILIAR_INDEVIDO",
            errorLabel: "Uso de 'was create'",
            diagnosticNote: "Invenção de estrutura anômala com was."
          }
        ],
        rule: "Slide 4 do PDF: <em>create ➔ created</em> (/ɪd/) e <em>restart ➔ restarted</em> (/ɪd/)."
      },
      {
        id: 9,
        level: 9,
        categoryKey: "slide5_reading1",
        categoryLabel: "Desafio de Leitura: Incidente no Standup",
        difficulty: "Nível 9 • Texto Completo de Standup",
        ticket: "READING-01",
        ticketFile: "daily-story-1.txt",
        speakerRole: "Engineering Lead",
        speakerName: "Thomas (Tech Lead)",
        scrumPrompt: '"Complete the incident log narrative from the standup reading practice:"',
        targetSentence: 'Narrativa técnica: "In the afternoon, the build <span class="blank-slot">________</span> (break), so I <span class="blank-slot">________</span> (restart) the server and <span class="blank-slot">________</span> (read) the error logs. Finally, I <span class="blank-slot">________</span> (send) a message on Slack to inform the tech lead."',
        subtext: 'Conjugação no Simple Past dos 4 verbos da narrativa (regulares e irregulares):',
        options: [
          {
            text: "broke / restarted / read / sent",
            isCorrect: true,
            errorType: null,
            errorLabel: null,
            diagnosticNote: "Perfeito! Dominou os irregulares do Slide 5: break ➔ broke, read ➔ read (/rɛd/), send ➔ sent e o regular restart ➔ restarted."
          },
          {
            text: "breaked / restarted / readed / sended",
            isCorrect: false,
            errorType: "REGULARIZACAO_MULTIPLA_IRREGULARES",
            errorLabel: "Adição Incorreta de -ed em Todos os Irregulares",
            diagnosticNote: "Tentou regularizar break, read e send ('breaked', 'readed' e 'sended' não existem)."
          },
          {
            text: "broke / restart / read / sent",
            isCorrect: false,
            errorType: "INCONSISTENCIA_TEMPORAL",
            errorLabel: "Segundo Verbo no Presente",
            diagnosticNote: "Esqueceu de conjugar 'restarted' no passado."
          },
          {
            text: "was break / restarted / was read / sent",
            isCorrect: false,
            errorType: "TO_BE_AUXILIAR_INDEVIDO",
            errorLabel: "Uso Indevido de 'was' diante de Verbos",
            diagnosticNote: "Invenção de 'was break' e 'was read'."
          }
        ],
        rule: "Slide 5 do PDF (Reading 1): <em>break ➔ broke</em>, <em>restart ➔ restarted</em>, <em>read ➔ read</em> (/rɛd/) e <em>send ➔ sent</em>."
      },
      {
        id: 10,
        level: 10,
        categoryKey: "slide6_reading2",
        categoryLabel: "Desafio de Leitura: Fluxo de PR & Deploy",
        difficulty: "Nível 10 • Narrativa Técnica Completa",
        ticket: "READING-02",
        ticketFile: "daily-story-2.txt",
        speakerRole: "Staff Engineer",
        speakerName: "Helena (Staff Engineer)",
        scrumPrompt: '"Complete the full PR & Deploy workflow narrative from standup reading practice:"',
        targetSentence: 'Narrativa técnica: "Yesterday morning, I had a sync call. We <span class="blank-slot">________</span> (find) an error, so I <span class="blank-slot">________</span> (open) the repository and <span class="blank-slot">________</span> (fix) the bug. Then, I <span class="blank-slot">________</span> (run) the tests, pushed the branch, and <span class="blank-slot">________</span> (create) a pull request. In the afternoon, the tech lead <span class="blank-slot">________</span> (approve) my code and we <span class="blank-slot">________</span> (deploy) it to production."',
        subtext: 'Conjugação no Simple Past dos 7 verbos mantendo a consistência temporal da narrativa:',
        options: [
          {
            text: "found / opened / fixed / ran / created / approved / deployed",
            isCorrect: true,
            errorType: null,
            errorLabel: null,
            diagnosticNote: "Sensacional! Dominou a narrativa técnica completa do Slide 6 com verbos regulares e irregulares de computação."
          },
          {
            text: "finded / opened / fixed / runned / created / approved / deployed",
            isCorrect: false,
            errorType: "REGULARIZACAO_IRREGULAR",
            errorLabel: "Errou os Irregulares Find ('finded') e Run ('runned')",
            diagnosticNote: "O passado de find é found e o passado de run é ran."
          },
          {
            text: "founded / opened / fix / ran / create / approved / deploy",
            isCorrect: false,
            errorType: "MULTIPLOS_ERROS_TEMPORAIS",
            errorLabel: "Mistura de Presente e Formas Inexistentes ('founded')",
            diagnosticNote: "Esqueceu de conjugar fix, create e deploy no passado."
          },
          {
            text: "found / open / fixed / was run / created / approved / deployed",
            isCorrect: false,
            errorType: "TO_BE_EM_VERBO_ACAO",
            errorLabel: "Uso de 'was run' e 'open' no Presente",
            diagnosticNote: "Inconsistências no paralelismo temporal da narrativa."
          }
        ],
        rule: "Slide 6 do PDF (Reading 2): Irregulares: <em>found, ran</em>; Regulares com -ed: <em>opened, fixed, created, approved, deployed</em>."
      }
    ]
  },
  {
    id: "present-simple-continuous",
    title: "Present Simple vs Continuous: Bug Triage",
    level: "A1 ➔ A2",
    badge: "ROTINAS VS AGORA",
    color: "green",
    icon: "🐛",
    description: "Diferencie hábitos e rotinas de sistema de eventos e processos em execução em tempo real: regras da 3ª pessoa do singular, regras de formação do Present Continuous e a regra dos stative verbs em contexto de engenharia de software.",
    estimatedMinutes: 5,
    totalQuestions: 8,
    targetSkills: [
      "Regra do Present Simple (hábitos, rotinas e 3ª pessoa do singular)",
      "Regra do Present Continuous (ações em andamento: be + -ing)",
      "Regra dos Stative Verbs (verbos de estado sem forma contínua)",
      "Diferenciação Temporal e Marcadores de Tempo em TI"
    ],
    questions: [
      {
        id: 1,
        level: 1,
        categoryKey: "present_simple",
        categoryLabel: "Rotinas Técnicas (Present Simple)",
        difficulty: "Nível 1 • Hábito do Sistema",
        ticket: "CRON-01",
        ticketFile: "cron-job.sh",
        speakerRole: "DevOps Engineer",
        speakerName: "Rodrigo (Cloud Arch)",
        scrumPrompt: '"How often does the backup script run?"',
        targetSentence: 'Our automated database backup always <span class="blank-slot">________</span> (execute) at midnight.',
        subtext: 'Expressando rotina e fato recorrente com advérbio always:',
        options: [
          { text: "executes", isCorrect: true, errorType: null, errorLabel: null, diagnosticNote: "Correto! Sujeito singular (backup = it) recebe -s no Present Simple." },
          { text: "is executing", isCorrect: false, errorType: "CONFUSAO_ROTINA_CONTINUA", errorLabel: "Uso de Contínuo para Hábito Recorrente", diagnosticNote: "Usou continuous para uma rotina permanente marcada por 'always at midnight'." },
          { text: "execute", isCorrect: false, errorType: "CONCORDANCIA_3A_PESSOA", errorLabel: "Falta de -s na 3ª Pessoa do Singular", diagnosticNote: "Esqueceu o -s em 3ª pessoa do singular (the backup = it)." },
          { text: "executed", isCorrect: false, errorType: "CONFUSAO_TEMPO_PASSADO", errorLabel: "Uso Inadequado do Passado para Rotina", diagnosticNote: "Usou passado para expressar uma rotina diária atual." }
        ],
        rule: "Para rotinas e fatos permanentes na 3ª pessoa do singular (it), acrescenta-se <strong>-s / -es</strong> no Present Simple (<em>it executes</em>)."
      },
      {
        id: 2,
        level: 2,
        categoryKey: "present_continuous",
        categoryLabel: "Ação em Andamento (Present Continuous)",
        difficulty: "Nível 2 • Ação em Tempo Real",
        ticket: "INCIDENT-LIVE",
        ticketFile: "cluster-status.ts",
        speakerRole: "Incident Commander",
        speakerName: "Amanda (Lead SRE)",
        scrumPrompt: '"What is the team doing right now about the memory leak?"',
        targetSentence: 'Right now, the engineering team <span class="blank-slot">________</span> (investigate) the memory leak.',
        subtext: 'Ação que está acontecendo exatamente no momento atual (Right now):',
        options: [
          { text: "is investigating", isCorrect: true, errorType: null, errorLabel: null, diagnosticNote: "Correto! Sujeito coletivo 'the team' com is + verbo-ing para ação em tempo real." },
          { text: "investigates", isCorrect: false, errorType: "PRESENTE_SIMPLES_EM_ACAO_AO_VIVO", errorLabel: "Present Simple em Ação Momentânea", diagnosticNote: "Com marcadores como 'Right now', deve-se usar o Present Continuous." },
          { text: "are investigate", isCorrect: false, errorType: "AUXILIAR_SEM_ING", errorLabel: "To Be sem Terminação -ing", diagnosticNote: "Usou o verbo auxiliar to be mas não acrescentou -ing no verbo principal." },
          { text: "investigating", isCorrect: false, errorType: "OMISSAO_TO_BE_CONTINUO", errorLabel: "Omissão do Verbo To Be no Contínuo", diagnosticNote: "Colocou -ing sem o verbo to be (is/are)." }
        ],
        rule: "Ações em andamento no momento da fala (<em>right now, at the moment</em>) exigem <strong>am/is/are + verbo com -ing</strong>."
      },
      {
        id: 3,
        level: 3,
        categoryKey: "stative",
        categoryLabel: "Stative Verbs (Verbos de Estado em Tech)",
        difficulty: "Nível 3 • Stative Verbs",
        ticket: "ARCH-10",
        ticketFile: "system-design.md",
        speakerRole: "Software Architect",
        speakerName: "Bruno (Principal Architect)",
        scrumPrompt: '"Do we have enough memory allocation for the new microservice?"',
        targetSentence: 'The backend microservice <span class="blank-slot">________</span> (need) more RAM to handle the payload.',
        subtext: 'Verbos de necessidade/estado (need, want, know):',
        options: [
          { text: "needs", isCorrect: true, errorType: null, errorLabel: null, diagnosticNote: "Correto! Need é stative verb e não aceita forma contínua em contextos neutros." },
          { text: "is needing", isCorrect: false, errorType: "STATIVE_VERB_CONTINUO", errorLabel: "Uso Incorreto de Stative Verb no Contínuo", diagnosticNote: "Verbos como need, know e understand expressam estados duradouros e não devem ir para o gerúndio." },
          { text: "need", isCorrect: false, errorType: "CONCORDANCIA_3A_PESSOA", errorLabel: "Falta de -s na 3ª Pessoa", diagnosticNote: "Esqueceu o -s para o sujeito singular (the microservice = it)." },
          { text: "does need", isCorrect: false, errorType: "ENFASE_INADEQUADA", errorLabel: "Auxiliar desnecessário em afirmativa simples", diagnosticNote: "Usou does need sem necessidade de ênfase de contraste." }
        ],
        rule: "<strong>Stative verbs</strong> (como <em>need, understand, know, want</em>) expressam estados mentais ou de necessidade e não são usados com <em>-ing</em>."
      },
      {
        id: 4,
        level: 4,
        categoryKey: "present_simple",
        categoryLabel: "Negativa de Presente (Don't vs Doesn't)",
        difficulty: "Nível 4 • Negativa 3ª Pessoa",
        ticket: "API-GATEWAY",
        ticketFile: "gateway.config.json",
        speakerRole: "Backend Dev",
        speakerName: "Lucas (Backend Dev)",
        scrumPrompt: '"Why is the legacy client receiving 401 Unauthorized?"',
        targetSentence: 'The legacy authentication API <span class="blank-slot">________</span> (not support) OAuth2 tokens.',
        subtext: 'Negativa no Present Simple para sujeito de 3ª pessoa do singular (the API = it):',
        options: [
          { text: "doesn't support", isCorrect: true, errorType: null, errorLabel: null, diagnosticNote: "Correto! 3ª pessoa do singular usa doesn't + verbo base." },
          { text: "don't support", isCorrect: false, errorType: "CONCORDANCIA_AUXILIAR_NEGATIVO", errorLabel: "Uso de Don't em vez de Doesn't", diagnosticNote: "Usou 'don't' para sujeito singular (it). Para he/she/it, a negativa correta é doesn't." },
          { text: "doesn't supports", isCorrect: false, errorType: "DUPLO_S_PRESENTE", errorLabel: "Duplo -s no Verbo Principal", diagnosticNote: "Com o auxiliar doesn't, o verbo principal perde o -s e volta à forma base (support)." },
          { text: "isn't support", isCorrect: false, errorType: "TO_BE_COMO_AUXILIAR_ACAO", errorLabel: "To Be em Negativa de Ação", diagnosticNote: "Usou isn't em vez de doesn't para negar um verbo regular de ação." }
        ],
        rule: "Para negar na 3ª pessoa do singular no Present Simple: <strong>doesn't + verbo na forma base</strong> (sem adicionar -s ao verbo)."
      }
    ]
  },
  {
    id: "in-on-at-prepositions",
    title: "Prepositions in Tech: IN, ON, AT",
    level: "A1 ➔ A2",
    badge: "IN / ON / AT",
    color: "purple",
    icon: "📍",
    description: "Domine o uso cirúrgico de IN, ON e AT em reuniões diárias, agendamento de sprints, deploys em nuvem, comunicação remota e infraestrutura sem cair na armadilha de tradução do português.",
    estimatedMinutes: 6,
    totalQuestions: 10,
    slideDeckId: "in-on-at",
    targetSkills: [
      "Preposições de Tempo (Horas pontuais vs Dias vs Meses)",
      "Preposições de Lugar (Países/Cidades vs Ruas vs Endereços)",
      "Tech & Ambientes Digitais (on GitHub, in database, on screen)",
      "Transporte & Posição de Trabalho (on the train, at home, at my desk)"
    ],
    questions: [
      {
        id: 1,
        level: 1,
        categoryKey: "time_hours",
        categoryLabel: "Horário Pontual (Tempo)",
        difficulty: "Nível 1 • Básico",
        ticket: "DAILY-01",
        ticketFile: "calendar-sync.ts",
        speakerRole: "Scrum Master",
        speakerName: "Ana (Agile Coach)",
        scrumPrompt: '"Lucas, what time does our team standup start every morning?"',
        targetSentence: 'Our daily standup meeting starts <span class="blank-slot">________</span> 9:30 AM sharp.',
        subtext: 'Preposição correta para horários precisos no relógio:',
        options: [
          {
            text: "at",
            isCorrect: true,
            errorType: null,
            errorLabel: null,
            diagnosticNote: "Correto! Usamos sempre AT para horários pontuais e precisos (at 9:30 AM, at noon, at midnight)."
          },
          {
            text: "in",
            isCorrect: false,
            errorType: "CONFUSAO_IN_HORARIO",
            errorLabel: "Uso de IN para Horário Específico",
            diagnosticNote: "Vício de tradução ('em 9:30'). IN é usado apenas para períodos amplos como meses, anos e partes do dia, não para horários de relógio."
          },
          {
            text: "on",
            isCorrect: false,
            errorType: "CONFUSAO_ON_HORARIO",
            errorLabel: "Uso de ON para Horário Específico",
            diagnosticNote: "ON é reservado para dias da semana e datas completas (ex: on Monday, on May 4th), não para horários."
          },
          {
            text: "to",
            isCorrect: false,
            errorType: "PREPOSICAO_DIRECIONAL_ERRADA",
            errorLabel: "Uso de Preposição Direcional (To)",
            diagnosticNote: "To indica direção ou movimento ('ir para'), não localização temporal estática."
          }
        ],
        rule: "Para horas exatas do relógio e momentos precisos: use sempre <strong>AT</strong> (<em>at 9:00 AM, at 3:30 PM, at noon, at midnight</em>)."
      },
      {
        id: 2,
        level: 2,
        categoryKey: "time_days",
        categoryLabel: "Dias da Semana & Datas (Tempo)",
        difficulty: "Nível 2 • Básico",
        ticket: "SPRINT-PLAN",
        ticketFile: "sprint-backlog.md",
        speakerRole: "Product Manager",
        speakerName: "David (PM)",
        scrumPrompt: '"When do we usually run our sprint retrospective and release deploys?"',
        targetSentence: 'We hold our sprint retrospective <span class="blank-slot">________</span> Fridays.',
        subtext: 'Preposição correta para dias da semana:',
        options: [
          {
            text: "on",
            isCorrect: true,
            errorType: null,
            errorLabel: null,
            diagnosticNote: "Correto! Dias da semana e datas do calendário sempre recebem a preposição ON (on Friday, on Mondays, on October 21st)."
          },
          {
            text: "in",
            isCorrect: false,
            errorType: "CONFUSAO_IN_DIA",
            errorLabel: "Uso de IN para Dia da Semana",
            diagnosticNote: "Tradução direta do português ('nas sextas'). Em inglês, o nível intermediário de tempo (dias) exige ON, nunca IN."
          },
          {
            text: "at",
            isCorrect: false,
            errorType: "CONFUSAO_AT_DIA",
            errorLabel: "Uso de AT para Dia da Semana",
            diagnosticNote: "AT é ultra-específico (para horas). Para dias inteiros de 24h, usamos ON."
          },
          {
            text: "by",
            isCorrect: false,
            errorType: "CONFUSAO_DEADLINE",
            errorLabel: "Uso de By (Prazo Limite)",
            diagnosticNote: "By significa 'até / o mais tardar' (ex: by Friday = até sexta), não 'às sextas' de forma recorrente."
          }
        ],
        rule: "Para dias da semana, datas e dias com a palavra 'day': use sempre <strong>ON</strong> (<em>on Monday, on October 21st, on Christmas Day</em>)."
      },
      {
        id: 3,
        level: 3,
        categoryKey: "time_months_years",
        categoryLabel: "Meses, Anos & Períodos Longos (Tempo)",
        difficulty: "Nível 3 • Intermediário",
        ticket: "ROADMAP-2025",
        ticketFile: "roadmap.json",
        speakerRole: "Tech Lead",
        speakerName: "Carlos (Tech Lead)",
        scrumPrompt: '"When is the v2.0 microservice architecture rollout planned?"',
        targetSentence: 'The architecture migration will be completed <span class="blank-slot">________</span> November.',
        subtext: 'Preposição correta para meses e anos:',
        options: [
          {
            text: "in",
            isCorrect: true,
            errorType: null,
            errorLabel: null,
            diagnosticNote: "Correto! Meses, estações, anos e séculos (topo da pirâmide temporal) recebem IN."
          },
          {
            text: "on",
            isCorrect: false,
            errorType: "CONFUSAO_ON_MES",
            errorLabel: "Uso de ON para Mês sem Dia",
            diagnosticNote: "ON só é usado se houver o dia exato (ex: on November 15th). Para o mês sozinho sem dia, usa-se IN (in November)."
          },
          {
            text: "at",
            isCorrect: false,
            errorType: "CONFUSAO_AT_MES",
            errorLabel: "Uso de AT para Período Amplo",
            diagnosticNote: "AT é para pontos exatos no tempo (horas). Um mês tem 30 dias, portanto é um período amplo (IN)."
          },
          {
            text: "during at",
            isCorrect: false,
            errorType: "PREPOSICAO_COMPOSTA_INVALIDA",
            errorLabel: "Construção Preposicional Redundante",
            diagnosticNote: "Não existe a composição 'during at' em inglês."
          }
        ],
        rule: "Para meses sozinhos, anos, séculos e períodos do dia (in the morning/afternoon): use sempre <strong>IN</strong> (<em>in November, in 2025, in the morning</em>)."
      },
      {
        id: 4,
        level: 4,
        categoryKey: "place_city_country",
        categoryLabel: "Países, Cidades & Regiões Amplas (Lugar)",
        difficulty: "Nível 4 • Intermediário",
        ticket: "REMOTE-HUB",
        ticketFile: "team-roster.yaml",
        speakerRole: "HR Lead",
        speakerName: "Clara (People Ops)",
        scrumPrompt: '"Where is our new remote frontend developer currently located?"',
        targetSentence: 'He is currently based <span class="blank-slot">________</span> San Francisco, California.',
        subtext: 'Preposição correta para cidades, estados e países:',
        options: [
          {
            text: "in",
            isCorrect: true,
            errorType: null,
            errorLabel: null,
            diagnosticNote: "Correto! Cidades, estados, países e continentes são espaços geográficos 3D amplos, portanto usamos sempre IN."
          },
          {
            text: "at",
            isCorrect: false,
            errorType: "CONFUSAO_AT_CIDADE",
            errorLabel: "Uso de AT para Cidades",
            diagnosticNote: "AT é para pontos pontuais e endereços com número. Uma cidade inteira é um espaço geográfico delimitado (IN)."
          },
          {
            text: "on",
            isCorrect: false,
            errorType: "CONFUSAO_ON_CIDADE",
            errorLabel: "Uso de ON para Localidade Geográfica",
            diagnosticNote: "ON é para superfícies e ruas. Cidades e países requerem IN."
          },
          {
            text: "inside at",
            isCorrect: false,
            errorType: "PREPOSICAO_COMPOSTA_INCORRETA",
            errorLabel: "Construção Híbrida Desnecessária",
            diagnosticNote: "Expressão inexistente em inglês para localização geográfica padrão."
          }
        ],
        rule: "Para países, estados, cidades, bairros e espaços fechados (salas/prédios): use sempre <strong>IN</strong> (<em>in Brazil, in San Francisco, in the meeting room</em>)."
      },
      {
        id: 5,
        level: 5,
        categoryKey: "place_streets",
        categoryLabel: "Ruas, Avenidas & Superfícies (Lugar)",
        difficulty: "Nível 5 • Intermediário",
        ticket: "OFFICE-MAP",
        ticketFile: "headquarters.json",
        speakerRole: "Facility Manager",
        speakerName: "Roberto (Ops)",
        scrumPrompt: '"Where is our innovation headquarters located in São Paulo?"',
        targetSentence: 'Our tech hub is located <span class="blank-slot">________</span> Paulista Avenue.',
        subtext: 'Preposição correta para ruas e avenidas (sem número):',
        options: [
          {
            text: "on",
            isCorrect: true,
            errorType: null,
            errorLabel: null,
            diagnosticNote: "Correto! Ruas, avenidas e vias públicas (linhas/superfícies) sem número levam a preposição ON."
          },
          {
            text: "in",
            isCorrect: false,
            errorType: "CONFUSAO_IN_RUA",
            errorLabel: "Uso de IN para Rua / Avenida",
            diagnosticNote: "Vício do português ('na Avenida Paulista'). Em inglês, a rua é vista como uma superfície/linha 2D, logo usamos ON."
          },
          {
            text: "at",
            isCorrect: false,
            errorType: "CONFUSAO_AT_SEM_NUMERO",
            errorLabel: "Uso de AT sem Número de Endereço",
            diagnosticNote: "AT só é usado para endereços que contenham o número predial (ex: at 100 Paulista Ave). Para o nome da avenida sozinho, é ON."
          },
          {
            text: "across",
            isCorrect: false,
            errorType: "PREPOSICAO_GEOMETRICA_INVALIDA",
            errorLabel: "Uso de Across (Através / Do Outro Lado)",
            diagnosticNote: "Across significa 'do outro lado de' ou 'atravessando', não indicando o endereço direto."
          }
        ],
        rule: "Para ruas, avenidas e estradas sem número: use <strong>ON</strong> (<em>on Paulista Avenue, on 5th Street</em>). Com número predial exato, use <strong>AT</strong>."
      },
      {
        id: 6,
        level: 6,
        categoryKey: "place_address_point",
        categoryLabel: "Endereço com Número & Ponto Específico (Lugar)",
        difficulty: "Nível 6 • Avançado",
        ticket: "CLIENT-MEET",
        ticketFile: "meeting-agenda.ics",
        speakerRole: "Account Exec",
        speakerName: "Mariana (Sales Lead)",
        scrumPrompt: '"Where is the client onsite meeting happening tomorrow afternoon?"',
        targetSentence: 'The meeting with the fintech client is <span class="blank-slot">________</span> 450 Market Street, 8th floor.',
        subtext: 'Preposição correta para endereço com número predial exato:',
        options: [
          {
            text: "at",
            isCorrect: true,
            errorType: null,
            errorLabel: null,
            diagnosticNote: "Correto! Quando o endereço inclui o número predial exato (450 Market Street), a localização vira um ponto 1D preciso: use AT."
          },
          {
            text: "on",
            isCorrect: false,
            errorType: "CONFUSAO_ON_COM_NUMERO",
            errorLabel: "Uso de ON com Número Predial",
            diagnosticNote: "ON é usado apenas para o nome da rua sem número (on Market Street). A inclusão do número predial exige AT (at 450 Market Street)."
          },
          {
            text: "in",
            isCorrect: false,
            errorType: "CONFUSAO_IN_ENDERECO",
            errorLabel: "Uso de IN para Endereço Específico",
            diagnosticNote: "Tradução de 'no endereço 450'. Endereços com número predial são alvos precisos (AT)."
          },
          {
            text: "under",
            isCorrect: false,
            errorType: "PREPOSICAO_SEM_SENTIDO",
            errorLabel: "Preposição Incompatível (Under)",
            diagnosticNote: "Under significa 'embaixo de', sem sentido para endereços."
          }
        ],
        rule: "Quando houver <strong>número predial</strong> ou for um ponto de encontro no mapa: use <strong>AT</strong> (<em>at 450 Market St, at the bus stop, at the reception</em>)."
      },
      {
        id: 7,
        level: 7,
        categoryKey: "tech_platforms",
        categoryLabel: "Telas, Mídia & Plataformas Digitais (Tech)",
        difficulty: "Nível 7 • Avançado",
        ticket: "PULL-REQUEST-77",
        ticketFile: "ci-pipeline.yml",
        speakerRole: "DevOps Engineer",
        speakerName: "Felipe (DevOps)",
        scrumPrompt: '"Lucas, where can I find the new Docker container configuration?"',
        targetSentence: 'I pushed the commit and opened the pull request <span class="blank-slot">________</span> GitHub.',
        subtext: 'Preposição correta para plataformas online, sites e redes:',
        options: [
          {
            text: "on",
            isCorrect: true,
            errorType: null,
            errorLabel: null,
            diagnosticNote: "Correto! Para websites, mídias e plataformas online (GitHub, AWS, Slack, internet, telas), usamos sempre ON."
          },
          {
            text: "in",
            isCorrect: false,
            errorType: "CONFUSAO_IN_PLATAFORMA",
            errorLabel: "Uso de IN para Plataforma Digital",
            diagnosticNote: "Tradução literal de 'no GitHub'. Sites e redes operam como superfícies digitais (ON the internet, ON GitHub, ON Slack)."
          },
          {
            text: "at",
            isCorrect: false,
            errorType: "CONFUSAO_AT_PLATAFORMA",
            errorLabel: "Uso de AT para Plataforma Web",
            diagnosticNote: "Embora pensemos em um site como um 'endereço web', plataformas e interfaces levam a preposição ON."
          },
          {
            text: "into",
            isCorrect: false,
            errorType: "PREPOSICAO_DINAMICA_INADEQUADA",
            errorLabel: "Uso de Into para Plataforma",
            diagnosticNote: "Into indica inserção física para dentro de algo fechado."
          }
        ],
        rule: "Para telas, interfaces, redes e plataformas online: use sempre <strong>ON</strong> (<em>on GitHub, on AWS, on Slack, on the screen, on the internet</em>)."
      },
      {
        id: 8,
        level: 8,
        categoryKey: "tech_storage",
        categoryLabel: "Armazenamento Interno & Código (Tech)",
        difficulty: "Nível 8 • Avançado",
        ticket: "DB-CACHE-99",
        ticketFile: "session-store.ts",
        speakerRole: "Security Lead",
        speakerName: "Helena (SecOps)",
        scrumPrompt: '"Where are the encrypted user authentication tokens stored?"',
        targetSentence: 'User tokens are stored securely <span class="blank-slot">________</span> the PostgreSQL database.',
        subtext: 'Preposição correta para bancos de dados e memória interna:',
        options: [
          {
            text: "in",
            isCorrect: true,
            errorType: null,
            errorLabel: null,
            diagnosticNote: "Correto! Dados armazenados no interior de um banco de dados, arquivo ou repositório estão contidos 'dentro' dele (IN the database)."
          },
          {
            text: "on",
            isCorrect: false,
            errorType: "CONFUSAO_ON_DATABASE",
            errorLabel: "Uso de ON para Interior de Banco de Dados",
            diagnosticNote: "Dizemos 'on the server' (na máquina física), mas para o banco de dados como estrutura de armazenamento de dados interna usamos 'IN the database'."
          },
          {
            text: "at",
            isCorrect: false,
            errorType: "CONFUSAO_AT_DATABASE",
            errorLabel: "Uso de AT para Banco de Dados",
            diagnosticNote: "AT não expressa continência de dados internos."
          },
          {
            text: "about",
            isCorrect: false,
            errorType: "PREPOSICAO_SEM_SENTIDO",
            errorLabel: "Uso de About (Sobre / A respeito)",
            diagnosticNote: "About significa a respeito de, sem aplicação para armazenamento técnico."
          }
        ],
        rule: "Para dados internos e código-fonte: use <strong>IN</strong> (<em>in the database, in the file, in the repository</em>). Para máquinas e servidores: use <strong>ON</strong> (<em>on the server, on localhost</em>)."
      },
      {
        id: 9,
        level: 9,
        categoryKey: "transportation",
        categoryLabel: "Meios de Transporte (A Regra da Perna Esticada)",
        difficulty: "Nível 9 • Avançado",
        ticket: "COMMUTE-SYNC",
        ticketFile: "slack-status.json",
        speakerRole: "Scrum Master",
        speakerName: "Carlos (Tech Lead)",
        scrumPrompt: '"Why did Lucas join the daily standup with background noise?"',
        targetSentence: 'Sorry guys, I am joining the call from my phone because I am <span class="blank-slot">________</span> the train.',
        subtext: 'Preposição correta para transporte público coletivo (onde se pode andar em pé):',
        options: [
          {
            text: "on",
            isCorrect: true,
            errorType: null,
            errorLabel: null,
            diagnosticNote: "Correto! Em veículos onde você pode ficar em pé e caminhar pelo corredor (trem, metrô, ônibus, avião), usamos ON (on the train)."
          },
          {
            text: "in",
            isCorrect: false,
            errorType: "TRANSPORTE_CARRO_VS_TREM",
            errorLabel: "Confusão Carro (In) vs Transporte Coletivo (On)",
            diagnosticNote: "Pensou em 'dentro do vagão'. Mas em inglês, transporte de grande porte usa ON (on the train, on the bus). IN é exclusivo para veículos pequenos (in a car, in a taxi)."
          },
          {
            text: "at",
            isCorrect: false,
            errorType: "CONFUSAO_AT_TRANSPORTE",
            errorLabel: "Uso de AT para Veículo em Trânsito",
            diagnosticNote: "Dizemos 'at the station' (na estação de trem), mas para estar a bordo do veículo em si usamos ON (on the train)."
          },
          {
            text: "over",
            isCorrect: false,
            errorType: "PREPOSICAO_INCOMPATIVEL",
            errorLabel: "Uso de Over",
            diagnosticNote: "Over significa 'por cima de', sem relação com estar a bordo."
          }
        ],
        rule: "A regra da perna esticada: se você pode ficar em pé e caminhar pelo corredor (trem, ônibus, avião, metrô), use <strong>ON</strong> (<em>on the train</em>). Para veículos pequenos fechados (carro, táxi, Uber), use <strong>IN</strong> (<em>in the car</em>)."
      },
      {
        id: 10,
        level: 10,
        categoryKey: "social_routines",
        categoryLabel: "Trabalho Remoto & Posição de Trabalho",
        difficulty: "Nível 10 • Síntese Avançada",
        ticket: "STANDUP-FINAL",
        ticketFile: "daily-summary.md",
        speakerRole: "VP of Engineering",
        speakerName: "Beatriz (VP)",
        scrumPrompt: '"Lucas, where will you be working from this afternoon to assist the deployment?"',
        targetSentence: 'I will be working <span class="blank-slot">________</span> home, sitting <span class="blank-slot">________</span> my desk all afternoon.',
        subtext: 'Preposições corretas para home office e posição de trabalho:',
        options: [
          {
            text: "at / at",
            isCorrect: true,
            errorType: null,
            errorLabel: null,
            diagnosticNote: "Perfeito! Usamos 'at home' para localização social padrão de casa e 'at my desk' para a posição pontual de trabalho em frente à mesa."
          },
          {
            text: "in / on",
            isCorrect: false,
            errorType: "CONFUSAO_IN_HOME_ON_DESK",
            errorLabel: "Uso de In Home e On Desk",
            diagnosticNote: "'In home' soa antinatural (diz-se sempre 'at home'). E 'on my desk' significaria estar literalmente sentado em cima do tampo de madeira da mesa!"
          },
          {
            text: "on / at",
            isCorrect: false,
            errorType: "CONFUSAO_ON_HOME",
            errorLabel: "Uso de On Home",
            diagnosticNote: "Não usamos 'on home' em inglês. A expressão idiomática padrão é 'at home'."
          },
          {
            text: "to / under",
            isCorrect: false,
            errorType: "PREPOSICOES_INADEQUADAS",
            errorLabel: "Preposições Inadequadas de Contexto",
            diagnosticNote: "'Under my desk' significaria estar debaixo da mesa escondido."
          }
        ],
        rule: "Expressões fixas essenciais de rotina dev: <strong>at home</strong> (trabalhando de casa), <strong>at work</strong> (no trabalho físico), <strong>at my desk</strong> (na minha mesa de trabalho)."
      }
    ]
  },
  {
    id: "to-vs-for-prepositions",
    title: "Prepositions in Tech: TO vs FOR",
    level: "A1 ➔ A2",
    badge: "TO vs FOR",
    color: "emerald",
    icon: "🎯",
    description: "Domine a diferença crucial entre TO e FOR em Daily Standups, Code Reviews e conversas com times internacionais: intenção pessoal (TO + verbo) vs função de ferramentas (FOR + noun/-ing), verbos de transferência, pedidos de favor e o bug clássico do verbo 'explain'.",
    estimatedMinutes: 6,
    totalQuestions: 10,
    slideDeckId: "to-for",
    targetSkills: [
      "Propósito da Ação Pessoal (TO + Base Verb)",
      "Função / Utilidade de Ferramenta (FOR + -ing / Noun)",
      "Verbos de Transferência & Destinatário (send to, explain to)",
      "Pedidos de Favor (for me) e Duração de Tempo (for 40 mins)"
    ],
    questions: [
      {
        id: 1,
        level: 1,
        categoryKey: "purpose_action",
        categoryLabel: "Propósito de Ação (TO + Verbo)",
        difficulty: "Nível 1 • Básico",
        ticket: "DAILY-SYNC-01",
        ticketFile: "auth-service.ts",
        speakerRole: "Scrum Master",
        speakerName: "Carlos (Tech Lead)",
        scrumPrompt: '"Lucas, why did you create a new Git branch yesterday afternoon?"',
        targetSentence: 'I created a new feature branch <span class="blank-slot">________</span> fix the memory leak in the login module.',
        subtext: 'Preposição correta para expressar a intenção/propósito de uma ação com verbo na forma base (fix):',
        options: [
          {
            text: "to",
            isCorrect: true,
            errorType: null,
            errorLabel: null,
            diagnosticNote: "Correto! Quando expressamos a intenção pessoal de realizar uma ação com verbo na forma base (fix), usamos sempre TO (to fix)."
          },
          {
            text: "for",
            isCorrect: false,
            errorType: "CONFUSAO_FOR_COM_VERBO_BASE",
            errorLabel: "Uso de FOR com Verbo na Forma Base",
            diagnosticNote: "Vício clássico do português ('para corrigir'). Em inglês, NUNCA usamos 'for + verbo base'. A intenção da ação é expressa com 'to fix'."
          },
          {
            text: "for to",
            isCorrect: false,
            errorType: "DUPLO_CONECTOR_FOR_TO",
            errorLabel: "Duplo Conector Arcaico (For To)",
            diagnosticNote: "Usou a composição 'for to', que é um erro gramatical no inglês moderno padrão."
          },
          {
            text: "at",
            isCorrect: false,
            errorType: "PREPOSICAO_INCOMPATIVEL",
            errorLabel: "Preposição Incompatível (At)",
            diagnosticNote: "AT indica horário ou local pontual, sem relação com objetivo ou finalidade de uma ação."
          }
        ],
        rule: "Regra de ouro do propósito: quando você explica por que realizou uma ação usando um verbo, use sempre <strong>TO + verbo na forma base</strong> (<em>to fix, to create, to deploy</em>), nunca <em>for + verbo</em>."
      },
      {
        id: 2,
        level: 2,
        categoryKey: "tool_function",
        categoryLabel: "Função de Ferramenta (FOR + -ing)",
        difficulty: "Nível 2 • Básico",
        ticket: "TOOLING-22",
        ticketFile: "docker-compose.yml",
        speakerRole: "DevOps Engineer",
        speakerName: "Felipe (DevOps)",
        scrumPrompt: '"What is this new Python microservice responsible for in our cluster?"',
        targetSentence: 'This microservice is used <span class="blank-slot">________</span> parsing and aggregating real-time server logs.',
        subtext: 'Preposição correta para descrever a função ou utilidade de um objeto/ferramenta com verbo no gerúndio (-ing):',
        options: [
          {
            text: "for",
            isCorrect: true,
            errorType: null,
            errorLabel: null,
            diagnosticNote: "Correto! Para descrever o propósito/função de uma ferramenta, serviço ou objeto acompanhado de verbo com terminação -ing (parsing), usamos FOR."
          },
          {
            text: "to",
            isCorrect: false,
            errorType: "CONFUSAO_TO_COM_GERUNDIO",
            errorLabel: "Uso de TO com Verbo em -ing",
            diagnosticNote: "Se usar TO, o verbo deve estar na forma base ('to parse'). Com o verbo terminado em -ing ('parsing'), a estrutura correta para utilidade de ferramenta é 'for parsing'."
          },
          {
            text: "in",
            isCorrect: false,
            errorType: "CONFUSAO_IN_FINALIDADE",
            errorLabel: "Uso de IN para Finalidade",
            diagnosticNote: "IN indica localização dentro de espaço ou período de tempo, não finalidade funcional."
          },
          {
            text: "with",
            isCorrect: false,
            errorType: "PREPOSICAO_INSTRUMENTAL_ERRADA",
            errorLabel: "Uso Inadequado de With",
            diagnosticNote: "With expressa instrumento ou companhia ('with a tool'), não a função intrínseca do serviço."
          }
        ],
        rule: "Para descrever a finalidade ou função de uma ferramenta/objeto: use <strong>FOR + verbo com -ing</strong> (<em>used for parsing logs</em>) ou <strong>TO + forma base</strong> (<em>used to parse logs</em>). Nunca misture <em>to + -ing</em> neste caso."
      },
      {
        id: 3,
        level: 3,
        categoryKey: "transfer_verbs",
        categoryLabel: "Verbos de Transferência & Destinatário",
        difficulty: "Nível 3 • Básico",
        ticket: "PR-REVIEW-04",
        ticketFile: "slack-message.md",
        speakerRole: "Product Owner",
        speakerName: "Mariana (PO)",
        scrumPrompt: '"Lucas, did you share the updated API payload specifications with the frontend team?"',
        targetSentence: 'Yes, I sent the updated documentation and swagger links <span class="blank-slot">________</span> the frontend lead.',
        subtext: 'Preposição correta para destinatário de envio/comunicação direta (send):',
        options: [
          {
            text: "to",
            isCorrect: true,
            errorType: null,
            errorLabel: null,
            diagnosticNote: "Correto! Verbos de transferência e movimento de informação (send, give, forward, deliver) exigem TO para indicar o destino ou destinatário."
          },
          {
            text: "for",
            isCorrect: false,
            errorType: "CONFUSAO_FOR_DESTINATARIO_DIRETO",
            errorLabel: "Uso de FOR para Destino de Envio",
            diagnosticNote: "Vício de tradução ('enviei para ele'). O alvo de movimento ou entrega direta de um objeto/mensagem recebe TO (sent to him). FOR significaria enviar 'no lugar dele'."
          },
          {
            text: "at",
            isCorrect: false,
            errorType: "CONFUSAO_AT_DIRECAO",
            errorLabel: "Uso de AT para Pessoa",
            diagnosticNote: "AT indica ponto geográfico ou horário, não o destinatário de uma mensagem."
          },
          {
            text: "into",
            isCorrect: false,
            errorType: "PREPOSICAO_INSERCAO_FISICA",
            errorLabel: "Uso de Into para Destinatário",
            diagnosticNote: "Into indica entrada física para dentro de algo fechado."
          }
        ],
        rule: "Verbos de transferência física ou digital (<em>send, forward, give, deliver, pass</em>) exigem <strong>TO</strong> para indicar a pessoa ou destino final (<em>send an email to Carlos</em>)."
      },
      {
        id: 4,
        level: 4,
        categoryKey: "favor_benefit",
        categoryLabel: "Benefício & Pedido de Favor (FOR)",
        difficulty: "Nível 4 • Intermediário",
        ticket: "HOTFIX-78",
        ticketFile: "code-review.ts",
        speakerRole: "Senior Backend Dev",
        speakerName: "Alex (Senior Dev)",
        scrumPrompt: '"Lucas, I have an urgent doctor appointment in 10 minutes. Can you help me out?"',
        targetSentence: 'Can you please review and merge this hotfix branch <span class="blank-slot">________</span> me while I am away?',
        subtext: 'Preposição correta para pedir um favor ou agir no lugar/em benefício de alguém:',
        options: [
          {
            text: "for",
            isCorrect: true,
            errorType: null,
            errorLabel: null,
            diagnosticNote: "Correto! Quando alguém pede um favor, benefício ou para realizar uma tarefa no lugar de outra pessoa, usamos FOR (review this for me)."
          },
          {
            text: "to",
            isCorrect: false,
            errorType: "CONFUSAO_TO_FAVOR",
            errorLabel: "Uso de TO para Pedido de Favor",
            diagnosticNote: "'Review this to me' é incorreto. 'To me' indicaria opinião (ex: to me, it looks good). Fazer um favor ou serviço para alguém exige FOR (do it for me)."
          },
          {
            text: "by",
            isCorrect: false,
            errorType: "CONFUSAO_AGENTE_DA_PASSIVA",
            errorLabel: "Uso de By como Agente",
            diagnosticNote: "By me indicaria autoria ('feita por mim'), incompatível com a solicitação de favor da frase."
          },
          {
            text: "with",
            isCorrect: false,
            errorType: "CONFUSAO_COMPANHIA",
            errorLabel: "Uso de With (Companhia)",
            diagnosticNote: "With me significaria revisar juntos em par, mas o colega está ausente ('while I am away')."
          }
        ],
        rule: "Para favores, serviços feitos em benefício de alguém ou para substituir alguém ausente: use sempre <strong>FOR</strong> (<em>Can you do this for me? / I deployed it for Sarah</em>)."
      },
      {
        id: 5,
        level: 5,
        categoryKey: "explain_trap",
        categoryLabel: "O Bug Clássico do Verbo 'Explain'",
        difficulty: "Nível 5 • Intermediário",
        ticket: "ONBOARDING-15",
        ticketFile: "architecture-overview.md",
        speakerRole: "Junior Developer",
        speakerName: "Gabriel (Junior Dev)",
        scrumPrompt: '"I am new to the repository and having trouble following the microservices event bus."',
        targetSentence: 'Could you please explain the Kafka event consumer logic <span class="blank-slot">________</span> me after the standup?',
        subtext: 'Preposição exigida pelo verbo EXPLAIN ao indicar quem ouve a explicação:',
        options: [
          {
            text: "to",
            isCorrect: true,
            errorType: null,
            errorLabel: null,
            diagnosticNote: "Correto! O verbo 'explain' exige obrigatoriamente a preposição TO antes do ouvinte: explain something TO someone."
          },
          {
            text: "for",
            isCorrect: false,
            errorType: "CONFUSAO_EXPLAIN_FOR",
            errorLabel: "Uso Incorreto de FOR com Explain",
            diagnosticNote: "Vício clássico de tradução ('explicar para mim'). Em inglês, NUNCA se diz 'explain for me'. A direção da explicação exige 'explain to me'."
          },
          {
            text: "at",
            isCorrect: false,
            errorType: "PREPOSICAO_HOSTIL_INADEQUADA",
            errorLabel: "Uso de AT com Verbo de Comunicação",
            diagnosticNote: "'Explain at me' não existe em inglês (at com verbos de comunicação como 'yell at' indica agressividade)."
          },
          {
            text: "with",
            isCorrect: false,
            errorType: "CONFUSAO_WITH_COMUNICACAO",
            errorLabel: "Uso de With com Explain",
            diagnosticNote: "'Explain with me' significaria explicar em dupla com você, o que não faz sentido no contexto de pedir explicação."
          }
        ],
        rule: "⚠️ <strong>Alerta Vermelho do Tech English:</strong> O verbo <em>explain</em> NUNCA aceita <em>for</em> ou ausência de preposição! Diga sempre: <strong>explain something TO someone</strong> (<em>Please explain this to me</em>, nunca <em>explain me</em> ou <em>explain for me</em>)."
      },
      {
        id: 6,
        level: 6,
        categoryKey: "duration_vs_endpoint",
        categoryLabel: "Duração de Tempo (FOR + Período)",
        difficulty: "Nível 6 • Intermediário",
        ticket: "INCIDENT-404",
        ticketFile: "datadog-alerts.json",
        speakerRole: "Site Reliability Engineer",
        speakerName: "Sofia (SRE)",
        scrumPrompt: '"How long was the Redis caching tier unresponsive during the overnight spike?"',
        targetSentence: 'The primary Redis cluster was completely unresponsive <span class="blank-slot">________</span> 40 minutes before recovering.',
        subtext: 'Preposição correta para expressar a duração total de um período de tempo:',
        options: [
          {
            text: "for",
            isCorrect: true,
            errorType: null,
            errorLabel: null,
            diagnosticNote: "Correto! Para indicar a extensão ou duração de um período de tempo (40 minutes, 2 days, 3 years), usamos a preposição FOR."
          },
          {
            text: "to",
            isCorrect: false,
            errorType: "CONFUSAO_TO_DURACAO",
            errorLabel: "Uso de TO para Duração Temporal",
            diagnosticNote: "TO expressa o ponto final de um intervalo (from 2 PM to 3 PM), mas nunca a duração de tempo total contínua. Para duração, usa-se FOR."
          },
          {
            text: "during",
            isCorrect: false,
            errorType: "DURING_COM_QUANTIDADE_NUMERICA",
            errorLabel: "Uso de During com Quantidade de Tempo",
            diagnosticNote: "During é usado com substantivos de eventos (during the meeting, during the night), nunca diretamente com unidades numéricas de tempo como '40 minutes'."
          },
          {
            text: "since",
            isCorrect: false,
            errorType: "CONFUSAO_SINCE_PONTO_INICIAL",
            errorLabel: "Uso de Since para Duração",
            diagnosticNote: "Since indica o ponto inicial específico no passado (since 2 PM, since yesterday), não a duração total decorrida."
          }
        ],
        rule: "Para expressar <strong>duração contínua de tempo</strong>, use sempre <strong>FOR</strong> (<em>for 40 minutes, for 2 weeks, for 5 years</em>). Para limites inicial e final, use <em>from ... to ...</em>."
      },
      {
        id: 7,
        level: 7,
        categoryKey: "purpose_noun",
        categoryLabel: "Finalidade com Substantivo (FOR + Noun)",
        difficulty: "Nível 7 • Avançado",
        ticket: "BUDGET-Q4",
        ticketFile: "cloud-expenses.csv",
        speakerRole: "Engineering Manager",
        speakerName: "David (EM)",
        scrumPrompt: '"Did finance approve our request for extra cloud infrastructure resources?"',
        targetSentence: 'Yes, the management approved additional budget <span class="blank-slot">________</span> new staging servers and GPU clusters.',
        subtext: 'Preposição correta para expressar finalidade ou destinação quando acompanhada de um substantivo (new staging servers):',
        options: [
          {
            text: "for",
            isCorrect: true,
            errorType: null,
            errorLabel: null,
            diagnosticNote: "Correto! Quando a finalidade é expressa por um substantivo (new staging servers, dinner, work), usamos FOR (budget for servers)."
          },
          {
            text: "to",
            isCorrect: false,
            errorType: "CONFUSAO_TO_COM_SUBSTANTIVO_FINALIDADE",
            errorLabel: "Uso de TO com Substantivo de Finalidade",
            diagnosticNote: "Usamos 'to' com verbos (to buy servers). Mas quando o complemento é diretamente um substantivo (servers), usamos FOR (for servers)."
          },
          {
            text: "at",
            isCorrect: false,
            errorType: "CONFUSAO_AT_DESTINACAO",
            errorLabel: "Uso de AT para Alocação",
            diagnosticNote: "AT indica localização pontual, não destinação orçamentária ou finalidade de recursos."
          },
          {
            text: "in",
            isCorrect: false,
            errorType: "CONFUSAO_IN_DESTINACAO",
            errorLabel: "Uso de IN para Finalidade",
            diagnosticNote: "IN indica continência interna, não a finalidade da alocação."
          }
        ],
        rule: "Contraste essencial de finalidade: use <strong>TO + verbo</strong> (<em>money to buy servers</em>) ou <strong>FOR + substantivo</strong> (<em>money for servers</em>)."
      },
      {
        id: 8,
        level: 8,
        categoryKey: "transfer_vs_favor_contrast",
        categoryLabel: "Contraste: Destinatário (TO) vs Beneficiário (FOR)",
        difficulty: "Nível 8 • Avançado",
        ticket: "SPRINT-COLLAB",
        ticketFile: "git-workflow.md",
        speakerRole: "Tech Lead",
        speakerName: "Ana (Agile Coach)",
        scrumPrompt: '"How did the sprint handoff go between the backend and QA teams yesterday?"',
        targetSentence: 'I transferred the database migration scripts <span class="blank-slot">________</span> the QA team, and they ran the regression tests <span class="blank-slot">________</span> us.',
        subtext: 'Selecione o par correto de preposições (destinatário de transferência vs serviço/favor prestado):',
        options: [
          {
            text: "to / for",
            isCorrect: true,
            errorType: null,
            errorLabel: null,
            diagnosticNote: "Perfeito! Você transferiu os scripts para o destino (to the QA team) e eles executaram os testes como um serviço benéfico para o time (for us)."
          },
          {
            text: "for / to",
            isCorrect: false,
            errorType: "INVERSAO_TRANSFERENCIA_BENEFICIO",
            errorLabel: "Inversão entre Transferência e Benefício",
            diagnosticNote: "Inverteu a lógica: transferir algo em direção a um alvo exige TO, enquanto realizar um trabalho em benefício de alguém exige FOR."
          },
          {
            text: "to / to",
            isCorrect: false,
            errorType: "USO_EXCESSIVO_TO",
            errorLabel: "Uso Duplo de TO",
            diagnosticNote: "'Ran the tests to us' soa antinatural em inglês. Fazer o serviço de testar em benefício do time exige FOR (for us)."
          },
          {
            text: "for / for",
            isCorrect: false,
            errorType: "USO_EXCESSIVO_FOR",
            errorLabel: "Uso Duplo de FOR",
            diagnosticNote: "O verbo transfer indica movimento direto até um destinatário, logo requer TO na primeira lacuna."
          }
        ],
        rule: "Fórmula mental rápida: <strong>Transfer / send / give ➔ TO</strong> (direção da entrega). <strong>Do a task / run tests in support ➔ FOR</strong> (benefício gerado para a pessoa/equipe)."
      },
      {
        id: 9,
        level: 9,
        categoryKey: "to_me_vs_for_me",
        categoryLabel: "Nuance Crítica: 'To me' (Opinião) vs 'For me' (Efeito Pessoal)",
        difficulty: "Nível 9 • Avançado",
        ticket: "ARCH-DESIGN",
        ticketFile: "rfc-042.md",
        speakerRole: "Principal Engineer",
        speakerName: "Mateo (Staff Eng)",
        scrumPrompt: '"What is your assessment of migrating our monolithic frontend to micro-frontends?"',
        targetSentence: '<span class="blank-slot">________</span> me, this new architecture looks much cleaner, but this sprint is going to be tough <span class="blank-slot">________</span> our team.',
        subtext: 'Preposições corretas para ponto de vista subjetivo (opinião) vs impacto/efeito em pessoas:',
        options: [
          {
            text: "To / for",
            isCorrect: true,
            errorType: null,
            errorLabel: null,
            diagnosticNote: "Exato! 'To me' expressa o ponto de vista subjetivo ('na minha visão/opinião') e 'tough for our team' expressa o impacto/dificuldade que recai sobre o time."
          },
          {
            text: "For / to",
            isCorrect: false,
            errorType: "INVERSAO_OPINIAO_IMPACTO",
            errorLabel: "Inversão de Opinião e Impacto",
            diagnosticNote: "'To me' inicia frases para indicar ponto de vista opinativo. E adjetivos de dificuldade física/emocional exigem 'for' (tough for us, hard for me)."
          },
          {
            text: "For / for",
            isCorrect: false,
            errorType: "FOR_ME_COMO_OPINIAO",
            errorLabel: "Uso de For Me para Julgamento Estético/Técnico",
            diagnosticNote: "Quando julgamos a aparência ou mérito de uma ideia abstrata ('looks cleaner'), o conector opinativo tradicional em inglês é 'To me' (in my view)."
          },
          {
            text: "To / to",
            isCorrect: false,
            errorType: "TO_COM_ADJETIVO_DIFICULDADE",
            errorLabel: "Uso de To com Adjetivo de Dificuldade Pessoal",
            diagnosticNote: "Dizemos 'difficult/tough FOR someone', nunca 'tough TO someone'."
          }
        ],
        rule: "<strong>TO ME</strong> = na minha opinião / do meu ponto de vista (<em>To me, this solution is better</em>). <strong>FOR ME / FOR US</strong> = no meu caso / afeta a minha vida ou rotina (<em>Working late is tough for me / Exercise is good for you</em>)."
      },
      {
        id: 10,
        level: 10,
        categoryKey: "standup_synthesis",
        categoryLabel: "Síntese em Daily Standup: Propósito + Duração",
        difficulty: "Nível 10 • Síntese Avançada",
        ticket: "DAILY-FINAL",
        ticketFile: "daily-status.yaml",
        speakerRole: "Engineering VP",
        speakerName: "Beatriz (VP)",
        scrumPrompt: '"Lucas, give us your complete status report from yesterday and the stability of the production release."',
        targetSentence: 'Yesterday, I stayed online until 8 PM <span class="blank-slot">________</span> assist the team with the deployment, and the API has remained stable <span class="blank-slot">________</span> over twelve hours.',
        subtext: 'Preposições corretas para propósito da ação pessoal (assist) e duração contínua de estabilidade (over 12 hours):',
        options: [
          {
            text: "to / for",
            isCorrect: true,
            errorType: null,
            errorLabel: null,
            diagnosticNote: "Espetacular! Dominou completamente: 'to assist' expressa o propósito da ação com o verbo no infinitivo base, e 'for over twelve hours' expressa a duração contínua de tempo."
          },
          {
            text: "for / to",
            isCorrect: false,
            errorType: "CONFUSAO_CRUZADA_PROPOSITO_DURACAO",
            errorLabel: "Confusão Cruzada entre Propósito e Duração",
            diagnosticNote: "Inverteu as duas regras fundamentais: intenção com verbo exige TO (to assist), e extensão temporal contínua exige FOR (for twelve hours)."
          },
          {
            text: "for / for",
            isCorrect: false,
            errorType: "CONFUSAO_FOR_COM_VERBO",
            errorLabel: "Uso de FOR com Verbo Base (assist)",
            diagnosticNote: "Não podemos usar 'for assist'. A intenção da pessoa ao ficar online é expressa com 'to assist'."
          },
          {
            text: "to / to",
            isCorrect: false,
            errorType: "CONFUSAO_TO_DURACAO_TEMPO",
            errorLabel: "Uso de TO para Duração Contínua",
            diagnosticNote: "TO não expressa duração contínua de horas. A duração temporal exige FOR."
          }
        ],
        rule: "Síntese magistral da Daily: Ação e motivo pessoal ➔ <strong>TO + verbo base</strong> (<em>stayed late to assist</em>). Duração temporal decorrida ➔ <strong>FOR + período</strong> (<em>stable for twelve hours</em>)."
      }
    ]
  },
  {
    id: "tech-reading-stress",
    title: "Tech Reading & Word Stress (Sílaba Tônica)",
    level: "A1 ➔ A2+",
    badge: "LEITURA & SÍLABA TÔNICA",
    color: "cyan",
    icon: "📖",
    description: "Aperfeiçoe sua leitura técnica de TI e elimine o vício de aplicar a sílaba tônica do português em palavras do inglês. São 3 textos de engenharia (Post-Mortem, CI/CD e AI Pair Programming) com botão interativo para revelar a sílaba tônica, pronúncia em áudio e 9 desafios (2 de gramática e 1 de interpretação por texto).",
    estimatedMinutes: 8,
    totalQuestions: 9,
    slideDeckId: "word-stress",
    targetSkills: [
      "Sílaba Tônica em Termos de TI (Stress Patterns)",
      "Interpretação de Relatórios e Artigos Técnicos",
      "Gramática Contextual (Tenses, Passive, Modals, Prepositions)",
      "Diferenças Fonéticas & Redução Vocálica (Schwa /ə/)"
    ],
    questions: [
      {
        id: 1,
        level: 1,
        categoryKey: "grammar_past_time",
        categoryLabel: "Gramática: Marcadores de Passado",
        difficulty: "Nível 1 • Texto 1 (INC-4091)",
        ticket: "INC-4091",
        ticketFile: "post-mortem-report.md",
        speakerRole: "Reliability Lead",
        speakerName: "Carlos (Lead Engineer)",
        scrumPrompt: '"Carlos, what happened during the peak traffic window last night?"',
        targetSentence: 'Last night at 21:00 UTC, our production cluster <span class="blank-slot">________</span> (suffer) a critical incident.',
        subtext: 'Selecione o tempo verbal correto considerando o marcador temporal "Last night at 21:00 UTC":',
        passageIndex: 0,
        passage: {
          id: "text-1",
          index: 1,
          totalTexts: 3,
          badge: "INCIDENT POST-MORTEM // TICKET INC-4091",
          title: "Incident Post-Mortem: Microservices Outage",
          author: "Carlos (Lead Reliability Engineer)",
          readTime: "2 min read",
          questionType: "Gramática (1/2)",
          questionNumberInText: "Texto 1 de 3 • Desafio 1 de 3",
          paragraphs: [
            'Last night at 21:00 UTC, our production cluster suffered a critical <span class="stress-word" data-word="incident" data-syllables="IN-ci-dent" data-ipa="/ˈɪn.sɪ.dənt/" data-tip="Em português dizemos \'in-ci-DEN-te\' (3ª sílaba). Em inglês a força é na PRIMEIRA sílaba: IN-ci-dent!"><span class="stress-normal">incident</span><span class="stress-highlighted"><span class="tonic-syllable">IN</span>-ci-dent</span></span> after a marketing campaign triggered 50,000 requests per minute. The legacy database <span class="stress-word" data-word="component" data-syllables="com-PO-nent" data-ipa="/kəmˈpəʊ.nənt/" data-tip="Em português dizemos \'com-po-NEN-te\'. Em inglês a tônica está na segunda sílaba: com-PO-nent!"><span class="stress-normal">component</span><span class="stress-highlighted">com-<span class="tonic-syllable">PO</span>-nent</span></span> exceeded its connection pool, creating a near <span class="stress-word" data-word="catastrophe" data-syllables="ca-TAS-tro-phe" data-ipa="/kəˈtæs.trə.fi/" data-tip="Em português dizemos \'ca-TÁS-tro-fe\'. Em inglês a tônica é na 2ª sílaba e o final soa como /fi/: ca-TAS-tro-phe!"><span class="stress-normal">catastrophe</span><span class="stress-highlighted">ca-<span class="tonic-syllable">TAS</span>-tro-phe</span></span> for our payment gateway.',
            'Every backend <span class="stress-word" data-word="developer" data-syllables="de-VEL-op-er" data-ipa="/dɪˈvel.ə.pər/" data-tip="Em português dizemos \'de-sen-vol-ve-DOR\' ou \'de-ve-lo-PER\'. Em inglês a força é sempre na 2ª sílaba: de-VEL-op-er!"><span class="stress-normal">developer</span><span class="stress-highlighted">de-<span class="tonic-syllable">VEL</span>-op-er</span></span> was alerted immediately. To solve the bottleneck, the platform team decided to <span class="stress-word" data-word="prioritize" data-syllables="pri-OR-i-tize" data-ipa="/praɪˈɔːr.ə.taɪz/" data-tip="Em português dizemos \'pri-o-ri-ZAR\'. Em inglês a tônica é na 2ª sílaba: pri-OR-i-tize!"><span class="stress-normal">prioritize</span><span class="stress-highlighted">pri-<span class="tonic-syllable">OR</span>-i-tize</span></span> a query cache optimization. We inspected our cloud <span class="stress-word" data-word="architecture" data-syllables="AR-chi-tec-ture" data-ipa="/ˈɑːr.kə.tek.tʃər/" data-tip="Em português dizemos \'ar-qui-te-TU-ra\'. Em inglês a tônica salta para a PRIMEIRA sílaba: AR-chi-tec-ture!"><span class="stress-normal">architecture</span><span class="stress-highlighted"><span class="tonic-syllable">AR</span>-chi-tec-ture</span></span> and discovered that three microservices were sending duplicate queries.',
            'After deploying the hotfix, the latency dropped from 4,800ms to 42ms. Although this <span class="stress-word" data-word="incident" data-syllables="IN-ci-dent" data-ipa="/ˈɪn.sɪ.dənt/" data-tip="Em inglês a tônica é na primeira sílaba: IN-ci-dent."><span class="stress-normal">incident</span><span class="stress-highlighted"><span class="tonic-syllable">IN</span>-ci-dent</span></span> was stressful, our system is now much more <span class="stress-word" data-word="reliable" data-syllables="re-LI-a-ble" data-ipa="/rɪˈlaɪ.ə.bəl/" data-tip="Em português dizemos \'re-li-Á-vel\' ou \'con-fi-Á-vel\'. Em inglês a tônica é na 2ª sílaba: re-LI-a-ble!"><span class="stress-normal">reliable</span><span class="stress-highlighted">re-<span class="tonic-syllable">LI</span>-a-ble</span></span>. Moving forward, our engineers must follow strict caching standards to prevent similar outages.'
          ]
        },
        options: [
          {
            text: "suffered",
            isCorrect: true,
            errorType: null,
            errorLabel: null,
            diagnosticNote: "Correto! Expressões com ponto específico no passado ('Last night at 21:00 UTC') exigem obrigatoriamente o Simple Past (suffered)."
          },
          {
            text: "has suffered",
            isCorrect: false,
            errorType: "PRESENTE_PERFEITO_COM_TEMPO_DEFINIDO",
            errorLabel: "Present Perfect com Marcador Temporal Definido",
            diagnosticNote: "Usou Present Perfect com um ponto temporal passado específico ('Last night at 21:00 UTC'). Em inglês, tempo determinado no passado exige Simple Past."
          },
          {
            text: "suffer",
            isCorrect: false,
            errorType: "OMISSAO_CONJUGACAO_PASSADO",
            errorLabel: "Omissão de Conjugação no Passado",
            diagnosticNote: "Não flexionou o verbo no passado simples, mantendo a forma de infinitivo/presente para um evento concluído ontem à noite."
          },
          {
            text: "is suffering",
            isCorrect: false,
            errorType: "PRESENTE_CONTINUO_INDEVIDO",
            errorLabel: "Present Continuous em Ação Já Finalizada",
            diagnosticNote: "Usou presente contínuo para descrever um incidente que ocorreu e terminou na noite anterior."
          }
        ],
        rule: "Com marcadores de tempo passado específicos (<em>last night, yesterday, at 21:00 UTC</em>), usa-se obrigatoriamente o <strong>Simple Past</strong> (<em>suffered</em>), e nunca o Present Perfect."
      },
      {
        id: 2,
        level: 2,
        categoryKey: "grammar_verb_complement",
        categoryLabel: "Gramática: Regência Verbal (decide + to)",
        difficulty: "Nível 2 • Texto 1 (INC-4091)",
        ticket: "INC-4091",
        ticketFile: "post-mortem-report.md",
        speakerRole: "Reliability Lead",
        speakerName: "Carlos (Lead Engineer)",
        scrumPrompt: '"How did the platform team address the database connection bottleneck?"',
        targetSentence: 'To solve the bottleneck, the platform team decided <span class="blank-slot">________</span> (prioritize) a query cache optimization.',
        subtext: 'Selecione a forma verbal correta exigida pelo verbo "decided":',
        passageIndex: 0,
        passage: {
          id: "text-1",
          index: 1,
          totalTexts: 3,
          badge: "INCIDENT POST-MORTEM // TICKET INC-4091",
          title: "Incident Post-Mortem: Microservices Outage",
          author: "Carlos (Lead Reliability Engineer)",
          readTime: "2 min read",
          questionType: "Gramática (2/2)",
          questionNumberInText: "Texto 1 de 3 • Desafio 2 de 3",
          paragraphs: [
            'Last night at 21:00 UTC, our production cluster suffered a critical <span class="stress-word" data-word="incident" data-syllables="IN-ci-dent" data-ipa="/ˈɪn.sɪ.dənt/" data-tip="Em português dizemos \'in-ci-DEN-te\' (3ª sílaba). Em inglês a força é na PRIMEIRA sílaba: IN-ci-dent!"><span class="stress-normal">incident</span><span class="stress-highlighted"><span class="tonic-syllable">IN</span>-ci-dent</span></span> after a marketing campaign triggered 50,000 requests per minute. The legacy database <span class="stress-word" data-word="component" data-syllables="com-PO-nent" data-ipa="/kəmˈpəʊ.nənt/" data-tip="Em português dizemos \'com-po-NEN-te\'. Em inglês a tônica está na segunda sílaba: com-PO-nent!"><span class="stress-normal">component</span><span class="stress-highlighted">com-<span class="tonic-syllable">PO</span>-nent</span></span> exceeded its connection pool, creating a near <span class="stress-word" data-word="catastrophe" data-syllables="ca-TAS-tro-phe" data-ipa="/kəˈtæs.trə.fi/" data-tip="Em português dizemos \'ca-TÁS-tro-fe\'. Em inglês a tônica é na 2ª sílaba e o final soa como /fi/: ca-TAS-tro-phe!"><span class="stress-normal">catastrophe</span><span class="stress-highlighted">ca-<span class="tonic-syllable">TAS</span>-tro-phe</span></span> for our payment gateway.',
            'Every backend <span class="stress-word" data-word="developer" data-syllables="de-VEL-op-er" data-ipa="/dɪˈvel.ə.pər/" data-tip="Em português dizemos \'de-sen-vol-ve-DOR\' ou \'de-ve-lo-PER\'. Em inglês a força é sempre na 2ª sílaba: de-VEL-op-er!"><span class="stress-normal">developer</span><span class="stress-highlighted">de-<span class="tonic-syllable">VEL</span>-op-er</span></span> was alerted immediately. To solve the bottleneck, the platform team decided to <span class="stress-word" data-word="prioritize" data-syllables="pri-OR-i-tize" data-ipa="/praɪˈɔːr.ə.taɪz/" data-tip="Em português dizemos \'pri-o-ri-ZAR\'. Em inglês a tônica é na 2ª sílaba: pri-OR-i-tize!"><span class="stress-normal">prioritize</span><span class="stress-highlighted">pri-<span class="tonic-syllable">OR</span>-i-tize</span></span> a query cache optimization. We inspected our cloud <span class="stress-word" data-word="architecture" data-syllables="AR-chi-tec-ture" data-ipa="/ˈɑːr.kə.tek.tʃər/" data-tip="Em português dizemos \'ar-qui-te-TU-ra\'. Em inglês a tônica salta para a PRIMEIRA sílaba: AR-chi-tec-ture!"><span class="stress-normal">architecture</span><span class="stress-highlighted"><span class="tonic-syllable">AR</span>-chi-tec-ture</span></span> and discovered that three microservices were sending duplicate queries.',
            'After deploying the hotfix, the latency dropped from 4,800ms to 42ms. Although this <span class="stress-word" data-word="incident" data-syllables="IN-ci-dent" data-ipa="/ˈɪn.sɪ.dənt/" data-tip="Em inglês a tônica é na primeira sílaba: IN-ci-dent."><span class="stress-normal">incident</span><span class="stress-highlighted"><span class="tonic-syllable">IN</span>-ci-dent</span></span> was stressful, our system is now much more <span class="stress-word" data-word="reliable" data-syllables="re-LI-a-ble" data-ipa="/rɪˈlaɪ.ə.bəl/" data-tip="Em português dizemos \'re-li-Á-vel\' ou \'con-fi-Á-vel\'. Em inglês a tônica é na 2ª sílaba: re-LI-a-ble!"><span class="stress-normal">reliable</span><span class="stress-highlighted">re-<span class="tonic-syllable">LI</span>-a-ble</span></span>. Moving forward, our engineers must follow strict caching standards to prevent similar outages.'
          ]
        },
        options: [
          {
            text: "to prioritize",
            isCorrect: true,
            errorType: null,
            errorLabel: null,
            diagnosticNote: "Correto! O verbo 'decide' rege complemento no infinitivo com 'to' (decide to do something)."
          },
          {
            text: "for prioritize",
            isCorrect: false,
            errorType: "PREPOSICAO_FOR_VERBO_BASE",
            errorLabel: "Uso de FOR com Verbo na Forma Base",
            diagnosticNote: "Erro comum de tradução literal ('para priorizar'). Em inglês, a preposição 'for' nunca é seguida de verbo na forma base."
          },
          {
            text: "for prioritizing",
            isCorrect: false,
            errorType: "FOR_ING_APOS_DECIDE",
            errorLabel: "Uso Incorreto de FOR + -ING após Verbo de Decisão",
            diagnosticNote: "O verbo 'decide' não aceita complemento com 'for + -ing'; a estrutura gramatical padrão exige infinitivo com 'to' (to prioritize)."
          },
          {
            text: "prioritizing",
            isCorrect: false,
            errorType: "GERUNDIO_DIRETO_INDEVIDO",
            errorLabel: "Gerúndio Direto sem Verbo de Preferência",
            diagnosticNote: "Usou gerúndio solto. Verbos de intenção ou decisão futura (decide, plan, hope, choose) exigem o infinitivo com 'to'."
          }
        ],
        rule: "Verbos que expressam decisão ou plano (como <strong>decide, plan, choose, agree</strong>) exigem sempre o complemento com <strong>infinitivo com TO</strong> (<em>decided to prioritize</em>)."
      },
      {
        id: 3,
        level: 3,
        categoryKey: "reading_comprehension",
        categoryLabel: "Interpretação: Causa Raiz do Incidente",
        difficulty: "Nível 3 • Texto 1 (INC-4091)",
        ticket: "INC-4091",
        ticketFile: "post-mortem-report.md",
        speakerRole: "Product Manager",
        speakerName: "Juliana (Product Manager)",
        scrumPrompt: '"Carlos, based on the post-mortem analysis, what was the primary architectural root cause of the outage?"',
        targetSentence: 'According to the post-mortem report, what caused the database connection pool to exceed its capacity?',
        subtext: 'Identifique a causa raiz exata descrita no relatório técnico:',
        passageIndex: 0,
        passage: {
          id: "text-1",
          index: 1,
          totalTexts: 3,
          badge: "INCIDENT POST-MORTEM // TICKET INC-4091",
          title: "Incident Post-Mortem: Microservices Outage",
          author: "Carlos (Lead Reliability Engineer)",
          readTime: "2 min read",
          questionType: "Interpretação de Texto",
          questionNumberInText: "Texto 1 de 3 • Desafio 3 de 3",
          paragraphs: [
            'Last night at 21:00 UTC, our production cluster suffered a critical <span class="stress-word" data-word="incident" data-syllables="IN-ci-dent" data-ipa="/ˈɪn.sɪ.dənt/" data-tip="Em português dizemos \'in-ci-DEN-te\' (3ª sílaba). Em inglês a força é na PRIMEIRA sílaba: IN-ci-dent!"><span class="stress-normal">incident</span><span class="stress-highlighted"><span class="tonic-syllable">IN</span>-ci-dent</span></span> after a marketing campaign triggered 50,000 requests per minute. The legacy database <span class="stress-word" data-word="component" data-syllables="com-PO-nent" data-ipa="/kəmˈpəʊ.nənt/" data-tip="Em português dizemos \'com-po-NEN-te\'. Em inglês a tônica está na segunda sílaba: com-PO-nent!"><span class="stress-normal">component</span><span class="stress-highlighted">com-<span class="tonic-syllable">PO</span>-nent</span></span> exceeded its connection pool, creating a near <span class="stress-word" data-word="catastrophe" data-syllables="ca-TAS-tro-phe" data-ipa="/kəˈtæs.trə.fi/" data-tip="Em português dizemos \'ca-TÁS-tro-fe\'. Em inglês a tônica é na 2ª sílaba e o final soa como /fi/: ca-TAS-tro-phe!"><span class="stress-normal">catastrophe</span><span class="stress-highlighted">ca-<span class="tonic-syllable">TAS</span>-tro-phe</span></span> for our payment gateway.',
            'Every backend <span class="stress-word" data-word="developer" data-syllables="de-VEL-op-er" data-ipa="/dɪˈvel.ə.pər/" data-tip="Em português dizemos \'de-sen-vol-ve-DOR\' ou \'de-ve-lo-PER\'. Em inglês a força é sempre na 2ª sílaba: de-VEL-op-er!"><span class="stress-normal">developer</span><span class="stress-highlighted">de-<span class="tonic-syllable">VEL</span>-op-er</span></span> was alerted immediately. To solve the bottleneck, the platform team decided to <span class="stress-word" data-word="prioritize" data-syllables="pri-OR-i-tize" data-ipa="/praɪˈɔːr.ə.taɪz/" data-tip="Em português dizemos \'pri-o-ri-ZAR\'. Em inglês a tônica é na 2ª sílaba: pri-OR-i-tize!"><span class="stress-normal">prioritize</span><span class="stress-highlighted">pri-<span class="tonic-syllable">OR</span>-i-tize</span></span> a query cache optimization. We inspected our cloud <span class="stress-word" data-word="architecture" data-syllables="AR-chi-tec-ture" data-ipa="/ˈɑːr.kə.tek.tʃər/" data-tip="Em português dizemos \'ar-qui-te-TU-ra\'. Em inglês a tônica salta para a PRIMEIRA sílaba: AR-chi-tec-ture!"><span class="stress-normal">architecture</span><span class="stress-highlighted"><span class="tonic-syllable">AR</span>-chi-tec-ture</span></span> and discovered that three microservices were sending duplicate queries.',
            'After deploying the hotfix, the latency dropped from 4,800ms to 42ms. Although this <span class="stress-word" data-word="incident" data-syllables="IN-ci-dent" data-ipa="/ˈɪn.sɪ.dənt/" data-tip="Em inglês a tônica é na primeira sílaba: IN-ci-dent."><span class="stress-normal">incident</span><span class="stress-highlighted"><span class="tonic-syllable">IN</span>-ci-dent</span></span> was stressful, our system is now much more <span class="stress-word" data-word="reliable" data-syllables="re-LI-a-ble" data-ipa="/rɪˈlaɪ.ə.bəl/" data-tip="Em português dizemos \'re-li-Á-vel\' ou \'con-fi-Á-vel\'. Em inglês a tônica é na 2ª sílaba: re-LI-a-ble!"><span class="stress-normal">reliable</span><span class="stress-highlighted">re-<span class="tonic-syllable">LI</span>-a-ble</span></span>. Moving forward, our engineers must follow strict caching standards to prevent similar outages.'
          ]
        },
        options: [
          {
            text: "Three microservices were sending duplicate queries that overloaded the database connection pool.",
            isCorrect: true,
            errorType: null,
            errorLabel: null,
            diagnosticNote: "Correto! O relatório indica expressamente que três microsserviços estavam emitindo queries duplicadas durante o pico de tráfego."
          },
          {
            text: "A backend developer accidentally deleted the payment gateway database schema at 21:00 UTC.",
            isCorrect: false,
            errorType: "INTERPRETACAO_FALSA",
            errorLabel: "Interpretação Falsa / Distorção de Fatos",
            diagnosticNote: "O relatório não menciona deleção de banco por desenvolvedor; o problema foi de concorrência e queries redundantes."
          },
          {
            text: "The marketing campaign failed completely because the hotfix increased latency to 4,800ms.",
            isCorrect: false,
            errorType: "INVERSAO_CAUSAL",
            errorLabel: "Inversão de Causa e Efeito",
            diagnosticNote: "4,800ms foi a latência ANTES do hotfix. Depois do hotfix, a latência caiu para 42ms e o sistema se estabilizou."
          },
          {
            text: "The engineering team had no monitoring tools or cloud infrastructure configured in production.",
            isCorrect: false,
            errorType: "EXTRAPOLACAO_INDEVIDA",
            errorLabel: "Extrapolação não Apoiada no Texto",
            diagnosticNote: "O texto afirma que inspecionaram a arquitetura em nuvem e alertaram todos os desenvolvedores imediatamente."
          }
        ],
        rule: "Em relatórios de Post-Mortem, a <strong>Root Cause</strong> aponta a falha estrutural primária: no texto, <em>'three microservices were sending duplicate queries'</em> que saturaram o pool de conexões."
      },
      {
        id: 4,
        level: 4,
        categoryKey: "grammar_passive_voice",
        categoryLabel: "Gramática: Voz Passiva em Pipelines",
        difficulty: "Nível 4 • Texto 2 (DEVOPS-204)",
        ticket: "DEVOPS-204",
        ticketFile: "ci-cd-pipeline.yaml",
        speakerRole: "DevOps Engineer",
        speakerName: "Mariana (DevOps Lead)",
        scrumPrompt: '"Mariana, what happens automatically once code is merged into the main branch?"',
        targetSentence: 'Next, Docker containers <span class="blank-slot">________</span> (push) to our production environment.',
        subtext: 'Selecione a voz passiva correta para o sujeito no plural "Docker containers":',
        passageIndex: 1,
        passage: {
          id: "text-2",
          index: 2,
          totalTexts: 3,
          badge: "DEVOPS ENGINEERING // TICKET DEVOPS-204",
          title: "Modernizing DevOps: Automated CI/CD Pipelines",
          author: "Mariana (DevOps Lead)",
          readTime: "2 min read",
          questionType: "Gramática (1/2)",
          questionNumberInText: "Texto 2 de 3 • Desafio 1 de 3",
          paragraphs: [
            'In modern software engineering, companies must continuously adopt newer <span class="stress-word" data-word="technology" data-syllables="tech-NOL-o-gy" data-ipa="/tekˈnɒl.ə.dʒi/" data-tip="Em português dizemos \'tec-no-lo-GI-a\'. Em palavras com -logy em inglês, a tônica cai sempre na sílaba imediatamente anterior: tech-NOL-o-gy!"><span class="stress-normal">technology</span><span class="stress-highlighted">tech-<span class="tonic-syllable">NOL</span>-o-gy</span></span> to stay competitive. Two years ago, our release cycle was slow because engineers manually tested every deployment.',
            'To solve this problem, we decided to <span class="stress-word" data-word="automate" data-syllables="AU-to-mate" data-ipa="/ˈɔː.tə.meɪt/" data-tip="Em português dizemos \'au-to-ma-TI-zar\'. Em inglês, verbos com -ate de 3 sílabas têm a tônica na antepenúltima (1ª sílaba): AU-to-mate!"><span class="stress-normal">automate</span><span class="stress-highlighted"><span class="tonic-syllable">AU</span>-to-mate</span></span> our deployment pipeline. Now, every time code is merged into the <code>main</code> branch, an automated security scanner validates the SSL <span class="stress-word" data-word="certificate" data-syllables="cer-TIF-i-cate" data-ipa="/sərˈtɪf.ɪ.kət/" data-tip="Em português dizemos \'cer-ti-fi-CA-do\'. No substantivo em inglês a força é na 2ª sílaba e o final soa como /kət/: cer-TIF-i-cate!"><span class="stress-normal">certificate</span><span class="stress-highlighted">cer-<span class="tonic-syllable">TIF</span>-i-cate</span></span> and checks dependencies for vulnerabilities.',
            'Next, Docker containers are pushed to our production <span class="stress-word" data-word="environment" data-syllables="en-VI-ron-ment" data-ipa="/ɪnˈvaɪ.rən.mənt/" data-tip="Em português dizemos \'am-bi-EN-te\'. Em inglês a tônica está na 2ª sílaba com som de ditongo /vaɪ/: en-VI-ron-ment!"><span class="stress-normal">environment</span><span class="stress-highlighted">en-<span class="tonic-syllable">VI</span>-ron-ment</span></span>. The system automatically measures server <span class="stress-word" data-word="capacity" data-syllables="ca-PAC-i-ty" data-ipa="/kəˈpæs.ə.ti/" data-tip="Em português dizemos \'ca-pa-ci-DA-de\'. Em palavras com -ity em inglês, a tônica cai sempre na sílaba anterior: ca-PAC-i-ty!"><span class="stress-normal">capacity</span><span class="stress-highlighted">ca-<span class="tonic-syllable">PAC</span>-i-ty</span></span> and scales up new nodes if traffic spikes. Thanks to this modern setup, the <span class="stress-word" data-word="delivery" data-syllables="de-LIV-er-y" data-ipa="/dɪˈlɪv.ər.i/" data-tip="Em inglês a força está na 2ª sílaba: de-LIV-er-y, e não no final \'de-li-ve-RY\'!"><span class="stress-normal">delivery</span><span class="stress-highlighted">de-<span class="tonic-syllable">LIV</span>-er-y</span></span> of new features takes only twelve minutes instead of three days.'
          ]
        },
        options: [
          {
            text: "are pushed",
            isCorrect: true,
            errorType: null,
            errorLabel: null,
            diagnosticNote: "Correto! Na voz passiva no Simple Present com sujeito plural (containers), usamos 'are + particípio' (are pushed)."
          },
          {
            text: "is pushed",
            isCorrect: false,
            errorType: "ERRO_CONCORDANCIA_NUMERO",
            errorLabel: "Erro de Concordância de Número (Singular com Plural)",
            diagnosticNote: "Usou 'is' com o sujeito plural 'Docker containers'. Deveria ter usado 'are pushed'."
          },
          {
            text: "push",
            isCorrect: false,
            errorType: "VOZ_ATIVA_INADEQUADA",
            errorLabel: "Voz Ativa em Ação Passiva",
            diagnosticNote: "Usou voz ativa simples. Containers não empurram a si mesmos; eles 'são enviados/empurrados' (are pushed)."
          },
          {
            text: "are pushing",
            isCorrect: false,
            errorType: "GERUNDIO_ATIVO_INDEVIDO",
            errorLabel: "Present Continuous Ativo em vez de Passivo",
            diagnosticNote: "Usou 'are pushing' (gerúndio ativo: 'estão empurrando'). Na voz passiva técnica, exige-se o particípio passado (pushed)."
          }
        ],
        rule: "Na <strong>voz passiva</strong> em inglês, a fórmula é <strong>verbo to be + particípio passado</strong>. Com sujeito no plural (<em>Docker containers</em>), usa-se <strong>are pushed</strong>."
      },
      {
        id: 5,
        level: 5,
        categoryKey: "grammar_third_person",
        categoryLabel: "Gramática: 3ª Pessoa do Singular (The system measures)",
        difficulty: "Nível 5 • Texto 2 (DEVOPS-204)",
        ticket: "DEVOPS-204",
        ticketFile: "autoscaler-policy.json",
        speakerRole: "Cloud Architect",
        speakerName: "Felipe (Cloud Architect)",
        scrumPrompt: '"How does the cloud cluster know when to scale up new instances?"',
        targetSentence: 'The system automatically <span class="blank-slot">________</span> (measure) server capacity and scales up new nodes if traffic spikes.',
        subtext: 'Selecione a flexão correta do verbo para o sujeito na 3ª pessoa do singular (The system):',
        passageIndex: 1,
        passage: {
          id: "text-2",
          index: 2,
          totalTexts: 3,
          badge: "DEVOPS ENGINEERING // TICKET DEVOPS-204",
          title: "Modernizing DevOps: Automated CI/CD Pipelines",
          author: "Mariana (DevOps Lead)",
          readTime: "2 min read",
          questionType: "Gramática (2/2)",
          questionNumberInText: "Texto 2 de 3 • Desafio 2 de 3",
          paragraphs: [
            'In modern software engineering, companies must continuously adopt newer <span class="stress-word" data-word="technology" data-syllables="tech-NOL-o-gy" data-ipa="/tekˈnɒl.ə.dʒi/" data-tip="Em português dizemos \'tec-no-lo-GI-a\'. Em palavras com -logy em inglês, a tônica cai sempre na sílaba imediatamente anterior: tech-NOL-o-gy!"><span class="stress-normal">technology</span><span class="stress-highlighted">tech-<span class="tonic-syllable">NOL</span>-o-gy</span></span> to stay competitive. Two years ago, our release cycle was slow because engineers manually tested every deployment.',
            'To solve this problem, we decided to <span class="stress-word" data-word="automate" data-syllables="AU-to-mate" data-ipa="/ˈɔː.tə.meɪt/" data-tip="Em português dizemos \'au-to-ma-TI-zar\'. Em inglês, verbos com -ate de 3 sílabas têm a tônica na antepenúltima (1ª sílaba): AU-to-mate!"><span class="stress-normal">automate</span><span class="stress-highlighted"><span class="tonic-syllable">AU</span>-to-mate</span></span> our deployment pipeline. Now, every time code is merged into the <code>main</code> branch, an automated security scanner validates the SSL <span class="stress-word" data-word="certificate" data-syllables="cer-TIF-i-cate" data-ipa="/sərˈtɪf.ɪ.kət/" data-tip="Em português dizemos \'cer-ti-fi-CA-do\'. No substantivo em inglês a força é na 2ª sílaba e o final soa como /kət/: cer-TIF-i-cate!"><span class="stress-normal">certificate</span><span class="stress-highlighted">cer-<span class="tonic-syllable">TIF</span>-i-cate</span></span> and checks dependencies for vulnerabilities.',
            'Next, Docker containers are pushed to our production <span class="stress-word" data-word="environment" data-syllables="en-VI-ron-ment" data-ipa="/ɪnˈvaɪ.rən.mənt/" data-tip="Em português dizemos \'am-bi-EN-te\'. Em inglês a tônica está na 2ª sílaba com som de ditongo /vaɪ/: en-VI-ron-ment!"><span class="stress-normal">environment</span><span class="stress-highlighted">en-<span class="tonic-syllable">VI</span>-ron-ment</span></span>. The system automatically measures server <span class="stress-word" data-word="capacity" data-syllables="ca-PAC-i-ty" data-ipa="/kəˈpæs.ə.ti/" data-tip="Em português dizemos \'ca-pa-ci-DA-de\'. Em palavras com -ity em inglês, a tônica cai sempre na sílaba anterior: ca-PAC-i-ty!"><span class="stress-normal">capacity</span><span class="stress-highlighted">ca-<span class="tonic-syllable">PAC</span>-i-ty</span></span> and scales up new nodes if traffic spikes. Thanks to this modern setup, the <span class="stress-word" data-word="delivery" data-syllables="de-LIV-er-y" data-ipa="/dɪˈlɪv.ər.i/" data-tip="Em inglês a força está na 2ª sílaba: de-LIV-er-y, e não no final \'de-li-ve-RY\'!"><span class="stress-normal">delivery</span><span class="stress-highlighted">de-<span class="tonic-syllable">LIV</span>-er-y</span></span> of new features takes only twelve minutes instead of three days.'
          ]
        },
        options: [
          {
            text: "measures",
            isCorrect: true,
            errorType: null,
            errorLabel: null,
            diagnosticNote: "Correto! 'The system' equivale ao pronome 'it' (3ª pessoa do singular), exigindo a desinência -s no Simple Present (measures)."
          },
          {
            text: "measure",
            isCorrect: false,
            errorType: "OMISSAO_DESINENCIA_3_PESSOA",
            errorLabel: "Omissão do -s na 3ª Pessoa do Singular",
            diagnosticNote: "Esqueceu de adicionar '-s' ao verbo no presente simples com sujeito singular (The system = it)."
          },
          {
            text: "is measure",
            isCorrect: false,
            errorType: "COMBINACAO_INVALIDA_BE_BASE",
            errorLabel: "Construção Agramatical (Be + Forma Base)",
            diagnosticNote: "O verbo 'to be' (is) nunca se conecta diretamente à forma base de outro verbo. O correto é apenas 'measures'."
          },
          {
            text: "measuring",
            isCorrect: false,
            errorType: "GERUNDIO_SOLTO_SEM_BE",
            errorLabel: "Gerúndio sem Verbo Auxiliar",
            diagnosticNote: "Usou -ing sem verbo auxiliar 'is' e sem sentido contínuo. Trata-se de uma rotina automatizada que exige Simple Present."
          }
        ],
        rule: "No Simple Present, quando o sujeito for 3ª pessoa do singular (<em>he, she, it</em> ou qualquer substantivo singular como <em>the system</em>), adiciona-se <strong>-s</strong> ao verbo: <em>The system measures</em>."
      },
      {
        id: 6,
        level: 6,
        categoryKey: "reading_comprehension",
        categoryLabel: "Interpretação: Benefício Quantitativo de DevOps",
        difficulty: "Nível 6 • Texto 2 (DEVOPS-204)",
        ticket: "DEVOPS-204",
        ticketFile: "ci-cd-pipeline.yaml",
        speakerRole: "Agile Coach",
        speakerName: "Mariana (DevOps Lead)",
        scrumPrompt: '"What measurable business outcome was achieved by automating this deployment workflow?"',
        targetSentence: 'Based on the article, what quantitative improvement resulted from automating the pipeline?',
        subtext: 'Identifique o resultado mensurável destacado no texto:',
        passageIndex: 1,
        passage: {
          id: "text-2",
          index: 2,
          totalTexts: 3,
          badge: "DEVOPS ENGINEERING // TICKET DEVOPS-204",
          title: "Modernizing DevOps: Automated CI/CD Pipelines",
          author: "Mariana (DevOps Lead)",
          readTime: "2 min read",
          questionType: "Interpretação de Texto",
          questionNumberInText: "Texto 2 de 3 • Desafio 3 de 3",
          paragraphs: [
            'In modern software engineering, companies must continuously adopt newer <span class="stress-word" data-word="technology" data-syllables="tech-NOL-o-gy" data-ipa="/tekˈnɒl.ə.dʒi/" data-tip="Em português dizemos \'tec-no-lo-GI-a\'. Em palavras com -logy em inglês, a tônica cai sempre na sílaba imediatamente anterior: tech-NOL-o-gy!"><span class="stress-normal">technology</span><span class="stress-highlighted">tech-<span class="tonic-syllable">NOL</span>-o-gy</span></span> to stay competitive. Two years ago, our release cycle was slow because engineers manually tested every deployment.',
            'To solve this problem, we decided to <span class="stress-word" data-word="automate" data-syllables="AU-to-mate" data-ipa="/ˈɔː.tə.meɪt/" data-tip="Em português dizemos \'au-to-ma-TI-zar\'. Em inglês, verbos com -ate de 3 sílabas têm a tônica na antepenúltima (1ª sílaba): AU-to-mate!"><span class="stress-normal">automate</span><span class="stress-highlighted"><span class="tonic-syllable">AU</span>-to-mate</span></span> our deployment pipeline. Now, every time code is merged into the <code>main</code> branch, an automated security scanner validates the SSL <span class="stress-word" data-word="certificate" data-syllables="cer-TIF-i-cate" data-ipa="/sərˈtɪf.ɪ.kət/" data-tip="Em português dizemos \'cer-ti-fi-CA-do\'. No substantivo em inglês a força é na 2ª sílaba e o final soa como /kət/: cer-TIF-i-cate!"><span class="stress-normal">certificate</span><span class="stress-highlighted">cer-<span class="tonic-syllable">TIF</span>-i-cate</span></span> and checks dependencies for vulnerabilities.',
            'Next, Docker containers are pushed to our production <span class="stress-word" data-word="environment" data-syllables="en-VI-ron-ment" data-ipa="/ɪnˈvaɪ.rən.mənt/" data-tip="Em português dizemos \'am-bi-EN-te\'. Em inglês a tônica está na 2ª sílaba com som de ditongo /vaɪ/: en-VI-ron-ment!"><span class="stress-normal">environment</span><span class="stress-highlighted">en-<span class="tonic-syllable">VI</span>-ron-ment</span></span>. The system automatically measures server <span class="stress-word" data-word="capacity" data-syllables="ca-PAC-i-ty" data-ipa="/kəˈpæs.ə.ti/" data-tip="Em português dizemos \'ca-pa-ci-DA-de\'. Em palavras com -ity em inglês, a tônica cai sempre na sílaba anterior: ca-PAC-i-ty!"><span class="stress-normal">capacity</span><span class="stress-highlighted">ca-<span class="tonic-syllable">PAC</span>-i-ty</span></span> and scales up new nodes if traffic spikes. Thanks to this modern setup, the <span class="stress-word" data-word="delivery" data-syllables="de-LIV-er-y" data-ipa="/dɪˈlɪv.ər.i/" data-tip="Em inglês a força está na 2ª sílaba: de-LIV-er-y, e não no final \'de-li-ve-RY\'!"><span class="stress-normal">delivery</span><span class="stress-highlighted">de-<span class="tonic-syllable">LIV</span>-er-y</span></span> of new features takes only twelve minutes instead of three days.'
          ]
        },
        options: [
          {
            text: "The delivery time of new features dropped from three days to just twelve minutes.",
            isCorrect: true,
            errorType: null,
            errorLabel: null,
            diagnosticNote: "Correto! O texto conclui que o tempo de entrega passou de três dias para doze minutos graças ao pipeline moderno."
          },
          {
            text: "The development team completely stopped deploying updates to avoid overloading server capacity.",
            isCorrect: false,
            errorType: "INTERPRETACAO_OPOSITORA",
            errorLabel: "Interpretação Inversa à Realidade do Texto",
            diagnosticNote: "O time não parou de implantar; pelo contrário, o processo ficou contínuo, rápido e seguro."
          },
          {
            text: "Engineers disabled the automated SSL certificate checker to speed up compilation.",
            isCorrect: false,
            errorType: "FALSA_PREMISSA",
            errorLabel: "Premissa Técnica Incorreta",
            diagnosticNote: "O texto afirma que o scanner de segurança valida ativamente os certificados SSL a cada merge no main branch."
          },
          {
            text: "Deployments now require 50,000 manual approvals from QA engineers before releasing.",
            isCorrect: false,
            errorType: "CONFUSAO_DADOS_NUMERICOS",
            errorLabel: "Mistura com Dados de Outro Contexto",
            diagnosticNote: "50,000 foi o número de requisições por minuto do Texto 1. O pipeline deste texto eliminou etapas manuais lentas."
          }
        ],
        rule: "Interpretação de métricas de CI/CD: o ganho quantitativo comprovado no texto foi a redução do tempo de entrega de <strong>três dias</strong> para <strong>doze minutos</strong>."
      },
      {
        id: 7,
        level: 7,
        categoryKey: "grammar_modal_verbs",
        categoryLabel: "Gramática: Verbos Modais e Recomendações (should never)",
        difficulty: "Nível 7 • Texto 3 (AI-GOV-501)",
        ticket: "AI-GOV-501",
        ticketFile: "engineering-handbook.md",
        speakerRole: "VP of Engineering",
        speakerName: "Alex (Engineering Director)",
        scrumPrompt: '"Alex, what is our team policy regarding commits generated directly by AI tools?"',
        targetSentence: 'Code reviews require human vigilance: developers <span class="blank-slot">________</span> (never / commit) generated code without verifying edge cases.',
        subtext: 'Selecione a estrutura gramatical correta com o verbo modal "should" e o advérbio "never":',
        passageIndex: 2,
        passage: {
          id: "text-3",
          index: 3,
          totalTexts: 3,
          badge: "ENGINEERING LEADERSHIP // MEMO AI-GOV-501",
          title: "AI Pair Programming: Speed vs Code Quality",
          author: "Alex (Engineering Director)",
          readTime: "2 min read",
          questionType: "Gramática (1/2)",
          questionNumberInText: "Texto 3 de 3 • Desafio 1 de 3",
          paragraphs: [
            'Our engineering team recently adopted AI coding assistants to accelerate daily development. At first, many engineers thought the tool would instantly solve all programming challenges.',
            'However, my senior <span class="stress-word" data-word="colleague" data-syllables="COL-league" data-ipa="/ˈkɒl.iːɡ/" data-tip="Em português dizemos \'co-LE-ga\' (tônica no \'LE\'). Em inglês a tônica é na PRIMEIRA sílaba: COL-league!"><span class="stress-normal">colleague</span><span class="stress-highlighted"><span class="tonic-syllable">COL</span>-league</span></span> reminded us that AI is an assistant, not an architect. While an AI tool is remarkably <span class="stress-word" data-word="efficient" data-syllables="ef-FI-cient" data-ipa="/ɪˈfɪʃ.ənt/" data-tip="Em português dizemos \'e-fi-ci-EN-te\'. Em inglês a tônica é na 2ª sílaba: ef-FI-cient!"><span class="stress-normal">efficient</span><span class="stress-highlighted">ef-<span class="tonic-syllable">FI</span>-cient</span></span> at generating repetitive boilerplate code, it cannot <span class="stress-word" data-word="communicate" data-syllables="com-MU-ni-cate" data-ipa="/kəˈmjuː.nɪ.keɪt/" data-tip="Em português dizemos \'co-mu-ni-CAR\' (no final). Em inglês a força é na 2ª sílaba: com-MU-ni-cate!"><span class="stress-normal">communicate</span><span class="stress-highlighted">com-<span class="tonic-syllable">MU</span>-ni-cate</span></span> with product managers or understand complex business trade-offs.',
            'We observed a <span class="stress-word" data-word="significant" data-syllables="sig-NIF-i-cant" data-ipa="/sɪɡˈnɪf.ɪ.kənt/" data-tip="Em português dizemos \'sig-ni-fi-ca-TI-vo\'. Em inglês a tônica é na 2ª sílaba: sig-NIF-i-cant!"><span class="stress-normal">significant</span><span class="stress-highlighted">sig-<span class="tonic-syllable">NIF</span>-i-cant</span></span> boost in developer <span class="stress-word" data-word="productivity" data-syllables="pro-duc-TIV-i-ty" data-ipa="/ˌprɒd.ʌkˈtɪv.ə.ti/" data-tip="Em português dizemos \'pro-du-ti-vi-DA-de\'. Em inglês com sufixo -ity, a tônica recai antes: pro-duc-TIV-i-ty!"><span class="stress-normal">productivity</span><span class="stress-highlighted">pro-duc-<span class="tonic-syllable">TIV</span>-i-ty</span></span>, but engineers must remain vigilant. Code reviews require <span class="stress-word" data-word="continuous" data-syllables="con-TIN-u-ous" data-ipa="/kənˈtɪn.ju.əs/" data-tip="Em português dizemos \'con-TÍ-nuo\' ou \'con-ti-nu-I-da-de\'. Em inglês a tônica é na 2ª sílaba: con-TIN-u-ous!"><span class="stress-normal">continuous</span><span class="stress-highlighted">con-<span class="tonic-syllable">TIN</span>-u-ous</span></span> human attention: developers should never commit generated code without verifying tests, security vulnerabilities, and edge cases.'
          ]
        },
        options: [
          {
            text: "should never commit",
            isCorrect: true,
            errorType: null,
            errorLabel: null,
            diagnosticNote: "Correto! O modal 'should' é seguido do advérbio 'never' e do verbo na forma base sem 'to' (should never commit)."
          },
          {
            text: "should never to commit",
            isCorrect: false,
            errorType: "MODAL_COM_INFINITIVO_TO",
            errorLabel: "Uso de 'TO' após Verbo Modal",
            diagnosticNote: "Verbos modais (should, must, can, could) NUNCA admitem a partícula 'to' antes do verbo principal."
          },
          {
            text: "must never commiting",
            isCorrect: false,
            errorType: "MODAL_COM_GERUNDIO_ING",
            errorLabel: "Uso de Gerúndio (-ing) após Modal",
            diagnosticNote: "Modais exigem a forma base do verbo (bare infinitive), e nunca formas com -ing (commiting)."
          },
          {
            text: "don't should commit",
            isCorrect: false,
            errorType: "NEGACAO_AUXILIAR_COM_MODAL",
            errorLabel: "Uso de 'don't' com Verbo Modal",
            diagnosticNote: "Verbos modais não utilizam o auxiliar do/don't para negação. A negação é incorporada ao próprio modal (should not) ou com advérbio (should never)."
          }
        ],
        rule: "Verbos modais como <strong>should</strong> e <strong>must</strong> são seguidos diretamente da <strong>forma base sem TO</strong>: <em>should never commit</em>."
      },
      {
        id: 8,
        level: 8,
        categoryKey: "grammar_preposition_gerund",
        categoryLabel: "Gramática: Preposição + Gerúndio (before merging)",
        difficulty: "Nível 8 • Texto 3 (AI-GOV-501)",
        ticket: "AI-GOV-501",
        ticketFile: "pr-checklist.md",
        speakerRole: "Tech Lead",
        speakerName: "Carlos (Tech Lead)",
        scrumPrompt: '"What must a developer complete before hitting the merge button on a pull request?"',
        targetSentence: 'Developers should always verify unit test assertions before <span class="blank-slot">________</span> (merge) their pull requests.',
        subtext: 'Selecione a terminação verbal correta após a preposição temporal "before":',
        passageIndex: 2,
        passage: {
          id: "text-3",
          index: 3,
          totalTexts: 3,
          badge: "ENGINEERING LEADERSHIP // MEMO AI-GOV-501",
          title: "AI Pair Programming: Speed vs Code Quality",
          author: "Alex (Engineering Director)",
          readTime: "2 min read",
          questionType: "Gramática (2/2)",
          questionNumberInText: "Texto 3 de 3 • Desafio 2 de 3",
          paragraphs: [
            'Our engineering team recently adopted AI coding assistants to accelerate daily development. At first, many engineers thought the tool would instantly solve all programming challenges.',
            'However, my senior <span class="stress-word" data-word="colleague" data-syllables="COL-league" data-ipa="/ˈkɒl.iːɡ/" data-tip="Em português dizemos \'co-LE-ga\' (tônica no \'LE\'). Em inglês a tônica é na PRIMEIRA sílaba: COL-league!"><span class="stress-normal">colleague</span><span class="stress-highlighted"><span class="tonic-syllable">COL</span>-league</span></span> reminded us that AI is an assistant, not an architect. While an AI tool is remarkably <span class="stress-word" data-word="efficient" data-syllables="ef-FI-cient" data-ipa="/ɪˈfɪʃ.ənt/" data-tip="Em português dizemos \'e-fi-ci-EN-te\'. Em inglês a tônica é na 2ª sílaba: ef-FI-cient!"><span class="stress-normal">efficient</span><span class="stress-highlighted">ef-<span class="tonic-syllable">FI</span>-cient</span></span> at generating repetitive boilerplate code, it cannot <span class="stress-word" data-word="communicate" data-syllables="com-MU-ni-cate" data-ipa="/kəˈmjuː.nɪ.keɪt/" data-tip="Em português dizemos \'co-mu-ni-CAR\' (no final). Em inglês a força é na 2ª sílaba: com-MU-ni-cate!"><span class="stress-normal">communicate</span><span class="stress-highlighted">com-<span class="tonic-syllable">MU</span>-ni-cate</span></span> with product managers or understand complex business trade-offs.',
            'We observed a <span class="stress-word" data-word="significant" data-syllables="sig-NIF-i-cant" data-ipa="/sɪɡˈnɪf.ɪ.kənt/" data-tip="Em português dizemos \'sig-ni-fi-ca-TI-vo\'. Em inglês a tônica é na 2ª sílaba: sig-NIF-i-cant!"><span class="stress-normal">significant</span><span class="stress-highlighted">sig-<span class="tonic-syllable">NIF</span>-i-cant</span></span> boost in developer <span class="stress-word" data-word="productivity" data-syllables="pro-duc-TIV-i-ty" data-ipa="/ˌprɒd.ʌkˈtɪv.ə.ti/" data-tip="Em português dizemos \'pro-du-ti-vi-DA-de\'. Em inglês com sufixo -ity, a tônica recai antes: pro-duc-TIV-i-ty!"><span class="stress-normal">productivity</span><span class="stress-highlighted">pro-duc-<span class="tonic-syllable">TIV</span>-i-ty</span></span>, but engineers must remain vigilant. Code reviews require <span class="stress-word" data-word="continuous" data-syllables="con-TIN-u-ous" data-ipa="/kənˈtɪn.ju.əs/" data-tip="Em português dizemos \'con-TÍ-nuo\' ou \'con-ti-nu-I-da-de\'. Em inglês a tônica é na 2ª sílaba: con-TIN-u-ous!"><span class="stress-normal">continuous</span><span class="stress-highlighted">con-<span class="tonic-syllable">TIN</span>-u-ous</span></span> human attention: developers should never commit generated code without verifying tests, security vulnerabilities, and edge cases.'
          ]
        },
        options: [
          {
            text: "merging",
            isCorrect: true,
            errorType: null,
            errorLabel: null,
            diagnosticNote: "Correto! Em inglês, qualquer verbo imediatamente precedido por preposição (before, after, without, for) deve estar no gerúndio (-ing)."
          },
          {
            text: "to merge",
            isCorrect: false,
            errorType: "PREPOSICAO_COM_TO_INFINITIVO",
            errorLabel: "Infinitivo com 'to' após Preposição",
            diagnosticNote: "Erro comum de tradução literal ('antes de mesclar'). Em inglês, não se usa infinitivo após preposição temporal."
          },
          {
            text: "merge",
            isCorrect: false,
            errorType: "FORMA_BASE_APOS_PREPOSICAO",
            errorLabel: "Forma Base após Preposição",
            diagnosticNote: "Em inglês, uma preposição nunca pode ser sucedida diretamente por um verbo na sua forma base."
          },
          {
            text: "merged",
            isCorrect: false,
            errorType: "PARTICIPIO_APOS_PREPOSICAO",
            errorLabel: "Particípio Passado após Preposição",
            diagnosticNote: "Usou terminação de passado (-ed). A regra de regência preposicional exige a terminação -ing (before merging)."
          }
        ],
        rule: "<strong>Regra universal de regência preposicional:</strong> todo verbo imediatamente após preposição (<em>before, after, without, instead of, by</em>) deve vir no <strong>gerúndio (-ing)</strong>: <em>before merging</em>."
      },
      {
        id: 9,
        level: 9,
        categoryKey: "reading_comprehension",
        categoryLabel: "Interpretação: Limitações da IA e Julgamento Humano",
        difficulty: "Nível 9 • Texto 3 (AI-GOV-501)",
        ticket: "AI-GOV-501",
        ticketFile: "engineering-handbook.md",
        speakerRole: "VP of Engineering",
        speakerName: "Alex (Engineering Director)",
        scrumPrompt: '"What is the primary trade-off and risk when developers use AI code assistants without critical review?"',
        targetSentence: 'According to the memo, why is continuous human code review mandatory when using AI coding assistants?',
        subtext: 'Identifique o argumento central apresentado pela liderança de engenharia:',
        passageIndex: 2,
        passage: {
          id: "text-3",
          index: 3,
          totalTexts: 3,
          badge: "ENGINEERING LEADERSHIP // MEMO AI-GOV-501",
          title: "AI Pair Programming: Speed vs Code Quality",
          author: "Alex (Engineering Director)",
          readTime: "2 min read",
          questionType: "Interpretação de Texto",
          questionNumberInText: "Texto 3 de 3 • Desafio 3 de 3",
          paragraphs: [
            'Our engineering team recently adopted AI coding assistants to accelerate daily development. At first, many engineers thought the tool would instantly solve all programming challenges.',
            'However, my senior <span class="stress-word" data-word="colleague" data-syllables="COL-league" data-ipa="/ˈkɒl.iːɡ/" data-tip="Em português dizemos \'co-LE-ga\' (tônica no \'LE\'). Em inglês a tônica é na PRIMEIRA sílaba: COL-league!"><span class="stress-normal">colleague</span><span class="stress-highlighted"><span class="tonic-syllable">COL</span>-league</span></span> reminded us that AI is an assistant, not an architect. While an AI tool is remarkably <span class="stress-word" data-word="efficient" data-syllables="ef-FI-cient" data-ipa="/ɪˈfɪʃ.ənt/" data-tip="Em português dizemos \'e-fi-ci-EN-te\'. Em inglês a tônica é na 2ª sílaba: ef-FI-cient!"><span class="stress-normal">efficient</span><span class="stress-highlighted">ef-<span class="tonic-syllable">FI</span>-cient</span></span> at generating repetitive boilerplate code, it cannot <span class="stress-word" data-word="communicate" data-syllables="com-MU-ni-cate" data-ipa="/kəˈmjuː.nɪ.keɪt/" data-tip="Em português dizemos \'co-mu-ni-CAR\' (no final). Em inglês a força é na 2ª sílaba: com-MU-ni-cate!"><span class="stress-normal">communicate</span><span class="stress-highlighted">com-<span class="tonic-syllable">MU</span>-ni-cate</span></span> with product managers or understand complex business trade-offs.',
            'We observed a <span class="stress-word" data-word="significant" data-syllables="sig-NIF-i-cant" data-ipa="/sɪɡˈnɪf.ɪ.kənt/" data-tip="Em português dizemos \'sig-ni-fi-ca-TI-vo\'. Em inglês a tônica é na 2ª sílaba: sig-NIF-i-cant!"><span class="stress-normal">significant</span><span class="stress-highlighted">sig-<span class="tonic-syllable">NIF</span>-i-cant</span></span> boost in developer <span class="stress-word" data-word="productivity" data-syllables="pro-duc-TIV-i-ty" data-ipa="/ˌprɒd.ʌkˈtɪv.ə.ti/" data-tip="Em português dizemos \'pro-du-ti-vi-DA-de\'. Em inglês com sufixo -ity, a tônica recai antes: pro-duc-TIV-i-ty!"><span class="stress-normal">productivity</span><span class="stress-highlighted">pro-duc-<span class="tonic-syllable">TIV</span>-i-ty</span></span>, but engineers must remain vigilant. Code reviews require <span class="stress-word" data-word="continuous" data-syllables="con-TIN-u-ous" data-ipa="/kənˈtɪn.ju.əs/" data-tip="Em português dizemos \'con-TÍ-nuo\' ou \'con-ti-nu-I-da-de\'. Em inglês a tônica é na 2ª sílaba: con-TIN-u-ous!"><span class="stress-normal">continuous</span><span class="stress-highlighted">con-<span class="tonic-syllable">TIN</span>-u-ous</span></span> human attention: developers should never commit generated code without verifying tests, security vulnerabilities, and edge cases.'
          ]
        },
        options: [
          {
            text: "While AI generates boilerplate quickly, it cannot understand complex business trade-offs, security vulnerabilities, or edge cases.",
            isCorrect: true,
            errorType: null,
            errorLabel: null,
            diagnosticNote: "Correto! O texto destaca que a IA é rápida em tarefas repetitivas, mas carece de visão arquitetural, segurança e julgamento de negócios."
          },
          {
            text: "AI coding assistants are completely incapable of producing any valid syntax or boilerplate code.",
            isCorrect: false,
            errorType: "CONTRADICAO_DIRETA",
            errorLabel: "Contradição Direta ao Texto",
            diagnosticNote: "O texto afirma expressamente o oposto: a ferramenta é 'remarkably efficient at generating repetitive boilerplate code'."
          },
          {
            text: "Senior engineers decided to ban all pull requests and delete all automated test suites.",
            isCorrect: false,
            errorType: "AFIRMACAO_ABSURDA",
            errorLabel: "Afirmação Absurda / Não Baseada no Texto",
            diagnosticNote: "O texto reforça que revisões de código e suítes de testes são indispensáveis e devem ser mantidas rigorosamente."
          },
          {
            text: "The engineering team observed a severe drop in developer productivity after enabling the tool.",
            isCorrect: false,
            errorType: "INVERSAO_DE_METRICA",
            errorLabel: "Inversão de Métrica Relatada",
            diagnosticNote: "O texto relata um 'significant boost in developer productivity', e não uma queda."
          }
        ],
        rule: "Interpretação crítica em TI: a IA acelera a escrita de código básico, mas <strong>não substitui a responsabilidade humana</strong> na análise de segurança, edge cases e regras de negócio."
      }
    ]
  }
];

