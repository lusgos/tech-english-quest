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
  }
];

