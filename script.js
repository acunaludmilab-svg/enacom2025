/* =========================================================
   ENACOM 2025
   Interactividad, idiomas, accesibilidad, carrusel y quiz
========================================================= */


/* =========================================================
   ACORDEÓN
========================================================= */

const accordionButtons =
  document.querySelectorAll(".subthread-button");

accordionButtons.forEach((button) => {

  button.addEventListener("click", () => {

    const article = button.closest(".subthread");

    if (!article) return;

    const content =
      article.querySelector(".subthread-content");

    if (!content) return;

    const isOpen =
      article.classList.contains("open");

    article.classList.toggle("open");

    button.setAttribute(
      "aria-expanded",
      String(!isOpen)
    );

    if (!isOpen) {

      content.style.maxHeight =
        content.scrollHeight + "px";

    } else {

      content.style.maxHeight = "0px";

    }

  });

});


/* Abrir correctamente los acordeones que ya están abiertos */

document
  .querySelectorAll(".subthread.open")
  .forEach((article) => {

    const content =
      article.querySelector(".subthread-content");

    if (!content) return;

    content.style.maxHeight =
      content.scrollHeight + "px";

  });



/* =========================================================
   CARRUSEL
========================================================= */

const slides =
  document.querySelectorAll(".carousel-slide");

const prevButton =
  document.querySelector(".carousel-control.prev");

const nextButton =
  document.querySelector(".carousel-control.next");

const dotsContainer =
  document.querySelector(".carousel-dots");

let currentSlide = 0;


/* Solo activar el carrusel si existe */

if (
  slides.length > 0 &&
  dotsContainer &&
  prevButton &&
  nextButton
) {

  /* Crear indicadores */

  slides.forEach((slide, index) => {

    const dot =
      document.createElement("button");

    dot.className = "carousel-dot";

    dot.type = "button";

    dot.setAttribute(
      "aria-label",
      `Ver fotografía ${index + 1}`
    );

    dot.addEventListener("click", () => {

      showSlide(index);

    });

    dotsContainer.appendChild(dot);

  });


  const dots =
    document.querySelectorAll(".carousel-dot");


  function showSlide(index) {

    if (!slides.length) return;

    if (index < 0) {

      index = slides.length - 1;

    }

    if (index >= slides.length) {

      index = 0;

    }

    currentSlide = index;


    slides.forEach((slide, i) => {

      slide.classList.toggle(
        "active",
        i === currentSlide
      );

    });


    dots.forEach((dot, i) => {

      dot.classList.toggle(
        "active",
        i === currentSlide
      );

    });

  }


  prevButton.addEventListener("click", () => {

    showSlide(currentSlide - 1);

  });


  nextButton.addEventListener("click", () => {

    showSlide(currentSlide + 1);

  });


  showSlide(0);


  /* Carrusel automático */

  let carouselTimer =
    setInterval(() => {

      showSlide(currentSlide + 1);

    }, 6500);


  /* Pausar al pasar el mouse */

  const carousel =
    document.querySelector(".carousel");

  if (carousel) {

    carousel.addEventListener(
      "mouseenter",
      () => clearInterval(carouselTimer)
    );


    carousel.addEventListener(
      "mouseleave",
      () => {

        carouselTimer =
          setInterval(() => {

            showSlide(currentSlide + 1);

          }, 6500);

      }
    );

  }

}



/* =========================================================
   IDIOMAS
========================================================= */

const translations = {

  es: {

    navEjes: "Ejes temáticos",

    navPonencias: "Ponencias",

    navInteractivo: "Participá",

    navRedes: "Redes",

    kicker:
      "XXII Encuentro Nacional de Carreras de Comunicación",

    heroTitle:
      "Tiempo de comunicación. Diálogos sobre pasado y presente en un mundo acelerado",

    heroText:
      "Un recorrido por los principales debates, ponencias y producciones del ENACOM 2025, realizado en San Luis.",

    heroGallery:
      "Ver fotografías",

    heroExplore:
      "Explorar el encuentro",

    heroImageCaption:
      "Producciones desarrolladas a partir de los debates y problemáticas abordadas durante el encuentro.",

    countdownTitle: "Días para ENACOM 2026",
    countdownDays: "Días",
    countdownHours: "Horas",
    countdownMinutes: "Minutos",
    countdownSeconds: "Segundos",
    countdownComplete: "El ENACOM 2026 ya comenzó.",

    galleryKicker:
      "El encuentro en imágenes",

    galleryTitle:
      "ENACOM 2025 en San Luis",

    galleryText:
      "Una mirada visual sobre las jornadas realizadas en la Facultad de Ciencias Humanas de la Universidad Nacional de San Luis.",

    photo1Title:
      "Apertura del ENACOM 2025",

    photo1Credit:
      "Fotografía: Noticias UNSL — Universidad Nacional de San Luis.",

    photo2Title:
      "Participación y encuentro",

    photo2Credit:
      "Fotografía: Noticias UNSL — Universidad Nacional de San Luis.",

    photo3Title:
      "Comunidad académica",

    photo3Credit:
      "Fotografía: Noticias UNSL — Universidad Nacional de San Luis.",

    photo4Title:
      "Ponencias y debates",

    photo4Credit:
      "Fotografía: Facultad de Ciencias de la Educación — UNER.",

    photo5Title:
      "Participantes del encuentro",

    photo5Credit:
      "Fotografía: Facultad de Ciencias de la Educación — UNER.",

    photoNote:
      "Las fotografías se presentan con identificación de su fuente y autoría.",

    axesKicker:
      "Recorrido conceptual",

    axesTitle:
      "Ejes temáticos",

    axesIntro:
      "El recorrido reúne algunas de las principales problemáticas abordadas durante el ENACOM 2025.",

    axisMainTitle:
      "Crisis, comunicación y democracia",

    axisMainText:
      "Este eje aborda la relación entre las crisis socioeconómicas y políticas, la comunicación pública, el periodismo, la circulación de información y los desafíos democráticos.",

    problemsKicker:
      "Debates contemporáneos",

    problemsTitle:
      "Problemáticas y debates",

    problemsIntro:
      "Dos de los temas trabajados en nuestro recorrido sobre comunicación, periodismo y democracia.",

    problemA:
      "Ataques a comunicadores y periodistas",

    problemAText:
      "Esta problemática aborda las formas de hostigamiento, censura, violencia simbólica y presión pública que afectan el trabajo periodístico y el derecho social a estar informado.",

    problemB:
      "Desinformación, periodismo y democracia",

    problemBText:
      "La circulación de fake news, la inteligencia artificial y la desinformación transforman la forma en que se produce, distribuye y recibe información.",

    viewInfographic:
      "Ver infografía completa",

    viewPdf:
      "Ver material completo",

    speakersKicker:
      "Voces del encuentro",

    speakersTitle:
      "Ponencias destacadas",

    speakersIntro:
      "Algunas de las mesas y especialistas que participaron del ENACOM 2025.",

    speaker1Title:
      "Cultura, política y comunicación",

    speaker1Subtitle:
      "Para una genealogía del campo: ¿de dónde venimos?",

    speaker2Title:
      "Comunicación, convergencia e inteligencia artificial",

    speaker3Title:
      "Ciencias Sociales y Humanidades",

    speaker4Title:
      "Herencias de la comunicación",

    quizKicker:
      "Participá",

    quizTitle:
      "¿Cuánto sabés sobre comunicación?",

    quizIntro:
      "Poné a prueba lo que aprendiste durante el recorrido.",

    nextQuestion:
      "Siguiente pregunta",

    socialKicker:
      "Seguí el encuentro",

    socialTitle:
      "ENACOM también está en redes",

    socialText:
      "Encontrá más información, fotografías y novedades sobre el Encuentro Nacional de Carreras de Comunicación.",

    accessKicker:
      "Accesibilidad",

    accessTitle:
      "Una página para todas las personas",

    accessText:
      "Utilizá estas herramientas para adaptar la experiencia de lectura según tus necesidades.",

    increaseText:
      "Aumentar texto",

    decreaseText:
      "Disminuir texto",

    contrast:
      "Alto contraste",

    reset:
      "Restablecer",

    closing:
      "ENACOM 2025 invita a pensar el tiempo de la comunicación como una trama viva: memoria, presente, conflicto, tecnología y derecho a la información en diálogo.",

    footer:
      "Trabajo académico realizado por estudiantes de la carrera de Comunicación Social de la UNNE."

  },


  en: {

    navEjes:
      "Thematic axes",

    navPonencias:
      "Featured talks",

    navInteractivo:
      "Take part",

    navRedes:
      "Social media",

    kicker:
      "22nd National Meeting of Communication Careers",

    heroTitle:
      "A time for communication. Dialogues between past and present in an accelerated world",

    heroText:
      "A journey through the main debates, talks and productions of ENACOM 2025, held in San Luis, Argentina.",

    heroGallery:
      "View photographs",

    heroExplore:
      "Explore the event",

    heroImageCaption:
      "Productions developed from the debates and issues addressed during the event.",

    countdownTitle: "Days until ENACOM 2026",
    countdownDays: "Days",
    countdownHours: "Hours",
    countdownMinutes: "Minutes",
    countdownSeconds: "Seconds",
    countdownComplete: "ENACOM 2026 has begun.",

    galleryKicker:
      "The event in images",

    galleryTitle:
      "ENACOM 2025 in San Luis",

    galleryText:
      "A visual look at the sessions held at the Faculty of Human Sciences of the National University of San Luis.",

    photo1Title:
      "Opening of ENACOM 2025",

    photo1Credit:
      "Photograph: Noticias UNSL — National University of San Luis.",

    photo2Title:
      "Participation and encounter",

    photo2Credit:
      "Photograph: Noticias UNSL — National University of San Luis.",

    photo3Title:
      "Academic community",

    photo3Credit:
      "Photograph: Noticias UNSL — National University of San Luis.",

    photo4Title:
      "Talks and debates",

    photo4Credit:
      "Photograph: Faculty of Education Sciences — UNER.",

    photo5Title:
      "Event participants",

    photo5Credit:
      "Photograph: Faculty of Education Sciences — UNER.",

    photoNote:
      "Photographs are presented with their source and authorship clearly identified.",

    axesKicker:
      "Conceptual journey",

    axesTitle:
      "Thematic axes",

    axesIntro:
      "The journey brings together some of the main issues addressed during ENACOM 2025.",

    axisMainTitle:
      "Crisis, communication and democracy",

    axisMainText:
      "This axis explores the relationship between socioeconomic and political crises, public communication, journalism, information circulation and democratic challenges.",

    problemsKicker:
      "Contemporary debates",

    problemsTitle:
      "Issues and debates",

    problemsIntro:
      "Two of the topics explored in our journey through communication, journalism and democracy.",

    problemA:
      "Attacks against communicators and journalists",

    problemAText:
      "This topic addresses harassment, censorship, symbolic violence and public pressure affecting journalistic work and the social right to information.",

    problemB:
      "Disinformation, journalism and democracy",

    problemBText:
      "Fake news, artificial intelligence and disinformation are transforming how information is produced, distributed and received.",

    viewInfographic:
      "View complete infographic",

    viewPdf:
      "View complete material",

    speakersKicker:
      "Voices of the event",

    speakersTitle:
      "Featured talks",

    speakersIntro:
      "Some of the panels and specialists who participated in ENACOM 2025.",

    speaker1Title:
      "Culture, politics and communication",

    speaker1Subtitle:
      "Towards a genealogy of the field: where do we come from?",

    speaker2Title:
      "Communication, convergence and artificial intelligence",

    speaker3Title:
      "Social Sciences and Humanities",

    speaker4Title:
      "Legacies of communication",

    quizKicker:
      "Take part",

    quizTitle:
      "How much do you know about communication?",

    quizIntro:
      "Test what you learned during the journey.",

    nextQuestion:
      "Next question",

    socialKicker:
      "Follow the event",

    socialTitle:
      "ENACOM is also on social media",

    socialText:
      "Find more information, photographs and news about the National Meeting of Communication Careers.",

    accessKicker:
      "Accessibility",

    accessTitle:
      "A website for everyone",

    accessText:
      "Use these tools to adapt the reading experience to your needs.",

    increaseText:
      "Increase text",

    decreaseText:
      "Decrease text",

    contrast:
      "High contrast",

    reset:
      "Reset",

    closing:
      "ENACOM 2025 invites us to think about the time of communication as a living network: memory, present, conflict, technology and the right to information in dialogue.",

    footer:
      "Academic project developed by students of the Social Communication program at UNNE."

  },


  pt: {

    navEjes:
      "Eixos temáticos",

    navPonencias:
      "Palestras",

    navInteractivo:
      "Participe",

    navRedes:
      "Redes sociais",

    kicker:
      "22º Encontro Nacional de Carreiras de Comunicação",

    heroTitle:
      "Tempo de comunicação. Diálogos entre passado e presente em um mundo acelerado",

    heroText:
      "Um percurso pelos principais debates, palestras e produções do ENACOM 2025, realizado em San Luis, Argentina.",

    heroGallery:
      "Ver fotografias",

    heroExplore:
      "Explorar o encontro",

    heroImageCaption:
      "Produções desenvolvidas a partir dos debates e questões abordados durante o encontro.",

    countdownTitle: "Dias para o ENACOM 2026",
    countdownDays: "Dias",
    countdownHours: "Horas",
    countdownMinutes: "Minutos",
    countdownSeconds: "Segundos",
    countdownComplete: "O ENACOM 2026 já começou.",

    galleryKicker:
      "O encontro em imagens",

    galleryTitle:
      "ENACOM 2025 em San Luis",

    galleryText:
      "Um olhar visual sobre as jornadas realizadas na Faculdade de Ciências Humanas da Universidade Nacional de San Luis.",

    photo1Title:
      "Abertura do ENACOM 2025",

    photo1Credit:
      "Fotografia: Noticias UNSL — Universidade Nacional de San Luis.",

    photo2Title:
      "Participação e encontro",

    photo2Credit:
      "Fotografia: Noticias UNSL — Universidade Nacional de San Luis.",

    photo3Title:
      "Comunidade acadêmica",

    photo3Credit:
      "Fotografia: Noticias UNSL — Universidade Nacional de San Luis.",

    photo4Title:
      "Palestras e debates",

    photo4Credit:
      "Fotografia: Faculdade de Ciências da Educação — UNER.",

    photo5Title:
      "Participantes do encontro",

    photo5Credit:
      "Fotografia: Faculdade de Ciências da Educação — UNER.",

    photoNote:
      "As fotografias são apresentadas com sua fonte e autoria devidamente identificadas.",

    axesKicker:
      "Percurso conceitual",

    axesTitle:
      "Eixos temáticos",

    axesIntro:
      "O percurso reúne alguns dos principais temas abordados durante o ENACOM 2025.",

    axisMainTitle:
      "Crise, comunicação e democracia",

    axisMainText:
      "Este eixo aborda a relação entre as crises socioeconômicas e políticas, a comunicação pública, o jornalismo, a circulação de informações e os desafios democráticos.",

    problemsKicker:
      "Debates contemporâneos",

    problemsTitle:
      "Questões e debates",

    problemsIntro:
      "Dois dos temas trabalhados em nosso percurso sobre comunicação, jornalismo e democracia.",

    problemA:
      "Ataques contra comunicadores e jornalistas",

    problemAText:
      "Esta questão aborda as formas de assédio, censura, violência simbólica e pressão pública que afetam o trabalho jornalístico e o direito social à informação.",

    problemB:
      "Desinformação, jornalismo e democracia",

    problemBText:
      "As fake news, a inteligência artificial e a desinformação transformam a maneira como as informações são produzidas, distribuídas e recebidas.",

    viewInfographic:
      "Ver infográfico completo",

    viewPdf:
      "Ver material completo",

    speakersKicker:
      "Vozes do encontro",

    speakersTitle:
      "Palestras em destaque",

    speakersIntro:
      "Algumas das mesas e especialistas que participaram do ENACOM 2025.",

    speaker1Title:
      "Cultura, política e comunicação",

    speaker1Subtitle:
      "Para uma genealogia do campo: de onde viemos?",

    speaker2Title:
      "Comunicação, convergência e inteligência artificial",

    speaker3Title:
      "Ciências Sociais e Humanidades",

    speaker4Title:
      "Heranças da comunicação",

    quizKicker:
      "Participe",

    quizTitle:
      "Quanto você sabe sobre comunicação?",

    quizIntro:
      "Teste o que você aprendeu durante o percurso.",

    nextQuestion:
      "Próxima pergunta",

    socialKicker:
      "Acompanhe o encontro",

    socialTitle:
      "O ENACOM também está nas redes",

    socialText:
      "Encontre mais informações, fotografias e novidades sobre o Encontro Nacional de Carreiras de Comunicação.",

    accessKicker:
      "Acessibilidade",

    accessTitle:
      "Um site para todas as pessoas",

    accessText:
      "Use estas ferramentas para adaptar a experiência de leitura às suas necessidades.",

    increaseText:
      "Aumentar texto",

    decreaseText:
      "Diminuir texto",

    contrast:
      "Alto contraste",

    reset:
      "Restabelecer",

    closing:
      "O ENACOM 2025 convida a pensar o tempo da comunicação como uma trama viva: memória, presente, conflito, tecnologia e direito à informação em diálogo.",

    footer:
      "Trabalho acadêmico realizado por estudantes da carreira de Comunicação Social da UNNE."

  }

};



/* =========================================================
   CAMBIAR IDIOMA
========================================================= */

const languageButtons =
  document.querySelectorAll(".language-btn");


function changeLanguage(lang) {

  if (!translations[lang]) {
    lang = "es";
  }

  document.documentElement.lang = lang;


  const elements =
    document.querySelectorAll("[data-i18n]");


  elements.forEach((element) => {

    const key =
      element.dataset.i18n;

    if (
      translations[lang] &&
      translations[lang][key] !== undefined
    ) {

      element.textContent =
        translations[lang][key];

    }

  });


  languageButtons.forEach((button) => {

    button.classList.toggle(
      "active",
      button.dataset.lang === lang
    );

  });


  localStorage.setItem(
    "enacom-language",
    lang
  );


  /* Actualizar el quiz si está activo */

  if (
    typeof renderQuestion === "function" &&
    typeof currentQuestion !== "undefined" &&
    currentQuestion < quizQuestions.length
  ) {

    renderQuestion();

  }

}


languageButtons.forEach((button) => {

  button.addEventListener(
    "click",
    () => {

      changeLanguage(
        button.dataset.lang
      );

    }
  );

});


const savedLanguage =
  localStorage.getItem(
    "enacom-language"
  ) || "es";



/* =========================================================
   ACCESIBILIDAD
========================================================= */

let textScale =
  parseFloat(
    localStorage.getItem(
      "enacom-text-scale"
    )
  ) || 1;


document.documentElement.style.setProperty(
  "--text-scale",
  textScale
);



/* AUMENTAR TEXTO */

const increaseTextButton =
  document.getElementById("increase-text");


if (increaseTextButton) {

  increaseTextButton.addEventListener(
    "click",
    () => {

      textScale =
        Math.min(
          textScale + 0.1,
          1.5
        );

      updateTextScale();

    }
  );

}



/* DISMINUIR TEXTO */

const decreaseTextButton =
  document.getElementById("decrease-text");


if (decreaseTextButton) {

  decreaseTextButton.addEventListener(
    "click",
    () => {

      textScale =
        Math.max(
          textScale - 0.1,
          0.8
        );

      updateTextScale();

    }
  );

}



function updateTextScale() {

  document.documentElement.style.setProperty(
    "--text-scale",
    textScale
  );


  localStorage.setItem(
    "enacom-text-scale",
    textScale
  );

}



/* ALTO CONTRASTE */

const contrastButton =
  document.getElementById("contrast-toggle");


if (contrastButton) {

  contrastButton.addEventListener(
    "click",
    () => {

      document.body.classList.toggle(
        "high-contrast"
      );


      localStorage.setItem(
        "enacom-contrast",
        document.body.classList.contains(
          "high-contrast"
        )
      );

    }
  );

}



/* Recuperar contraste guardado */

if (
  localStorage.getItem(
    "enacom-contrast"
  ) === "true"
) {

  document.body.classList.add(
    "high-contrast"
  );

}



/* RESTABLECER */

const resetAccessibilityButton =
  document.getElementById(
    "reset-accessibility"
  );


if (resetAccessibilityButton) {

  resetAccessibilityButton.addEventListener(
    "click",
    () => {

      textScale = 1;

      updateTextScale();


      document.body.classList.remove(
        "high-contrast"
      );


      localStorage.removeItem(
        "enacom-contrast"
      );

    }
  );

}



/* =========================================================
   QUIZ
========================================================= */

const quizQuestions = [

  {

    question: {

      es:
        "¿Cuál es uno de los principales desafíos de la desinformación?",

      en:
        "What is one of the main challenges posed by disinformation?",

      pt:
        "Qual é um dos principais desafios da desinformação?"

    },


    options: {

      es: [

        "Mejorar automáticamente la calidad de las noticias",

        "Afectar la confianza pública y la circulación de información",

        "Eliminar la necesidad de periodistas"

      ],


      en: [

        "Automatically improve news quality",

        "Affect public trust and the circulation of information",

        "Eliminate the need for journalists"

      ],


      pt: [

        "Melhorar automaticamente a qualidade das notícias",

        "Afetar a confiança pública e a circulação de informações",

        "Eliminar a necessidade de jornalistas"

      ]

    },


    correct: 1

  },


  {

    question: {

      es:
        "¿Qué relación existe entre comunicación y democracia?",

      en:
        "What is the relationship between communication and democracy?",

      pt:
        "Qual é a relação entre comunicação e democracia?"

    },


    options: {

      es: [

        "La comunicación no tiene relación con la democracia",

        "La circulación de información contribuye a la participación y al debate público",

        "La democracia depende únicamente de las redes sociales"

      ],


      en: [

        "Communication has no relationship with democracy",

        "The circulation of information contributes to participation and public debate",

        "Democracy depends only on social media"

      ],


      pt: [

        "A comunicação não tem relação com a democracia",

        "A circulação de informações contribui para a participação e o debate público",

        "A democracia depende apenas das redes sociais"

      ]

    },


    correct: 1

  },


  {

    question: {

      es:
        "¿Qué tecnología plantea nuevos desafíos para el periodismo?",

      en:
        "Which technology creates new challenges for journalism?",

      pt:
        "Qual tecnologia cria novos desafios para o jornalismo?"

    },


    options: {

      es: [

        "La inteligencia artificial",

        "El papel",

        "La radio analógica únicamente"

      ],


      en: [

        "Artificial intelligence",

        "Paper",

        "Analog radio only"

      ],


      pt: [

        "A inteligência artificial",

        "O papel",

        "Apenas o rádio analógico"

      ]

    },


    correct: 0

  },


  {

    question: {

      es:
        "¿Dónde se realizó ENACOM 2025?",

      en:
        "Where was ENACOM 2025 held?",

      pt:
        "Onde foi realizado o ENACOM 2025?"

    },


    options: {

      es: [

        "San Luis",

        "Buenos Aires",

        "Córdoba"

      ],


      en: [

        "San Luis",

        "Buenos Aires",

        "Córdoba"

      ],


      pt: [

        "San Luis",

        "Buenos Aires",

        "Córdoba"

      ]

    },


    correct: 0

  }

];



let currentQuestion = 0;

let score = 0;

let selectedAnswer = null;



const quizContainer =
  document.getElementById(
    "quiz-container"
  );


const quizNext =
  document.getElementById(
    "quiz-next"
  );


const quizResult =
  document.getElementById(
    "quiz-result"
  );



/* =========================================================
   RENDERIZAR PREGUNTA
========================================================= */

function renderQuestion() {

  if (!quizContainer) return;

  if (!quizNext) return;

  if (!quizResult) return;


  selectedAnswer = null;


  const lang =
    document.documentElement.lang || "es";


  const question =
    quizQuestions[currentQuestion];


  if (!question) return;


  quizContainer.innerHTML = "";


  const wrapper =
    document.createElement("div");


  wrapper.className =
    "quiz-question";


  const title =
    document.createElement("h3");


  title.textContent =
    `${currentQuestion + 1}. ${
      question.question[lang] ||
      question.question.es
    }`;


  wrapper.appendChild(title);


  const options =
    document.createElement("div");


  options.className =
    "quiz-options";


  const questionOptions =
    question.options[lang] ||
    question.options.es;


  questionOptions.forEach(
    (option, index) => {

      const button =
        document.createElement("button");


      button.type = "button";


      button.className =
        "quiz-option";


      button.textContent =
        option;


      button.addEventListener(
        "click",
        () => {

          selectedAnswer = index;


          document
            .querySelectorAll(".quiz-option")
            .forEach((item) => {

              item.classList.remove(
                "selected"
              );

            });


          button.classList.add(
            "selected"
          );

        }
      );


      options.appendChild(button);

    }
  );


  wrapper.appendChild(options);


  quizContainer.appendChild(wrapper);


  quizResult.textContent = "";


  quizNext.style.display = "";


  quizNext.disabled = false;

}



/* =========================================================
   SIGUIENTE PREGUNTA
========================================================= */

if (quizNext) {

  quizNext.addEventListener(
    "click",
    () => {

      if (selectedAnswer === null) {

        const lang =
          document.documentElement.lang ||
          "es";


        if (quizResult) {

          if (lang === "pt") {

            quizResult.textContent =
              "Escolha uma resposta antes de continuar.";

          } else if (lang === "en") {

            quizResult.textContent =
              "Choose an answer before continuing.";

          } else {

            quizResult.textContent =
              "Elegí una respuesta antes de continuar.";

          }

        }

        return;

      }



      if (
        selectedAnswer ===
        quizQuestions[currentQuestion].correct
      ) {

        score++;

      }


      currentQuestion++;


      if (
        currentQuestion >=
        quizQuestions.length
      ) {

        showQuizResult();

      } else {

        renderQuestion();

      }

    }
  );

}



/* =========================================================
   RESULTADO DEL QUIZ
========================================================= */

function showQuizResult() {

  if (!quizContainer) return;

  if (!quizNext) return;

  if (!quizResult) return;


  const lang =
    document.documentElement.lang || "es";


  quizContainer.innerHTML = "";


  quizNext.style.display =
    "none";


  let message = "";


  if (lang === "en") {

    message =
      `You got ${score} out of ${quizQuestions.length} correct.`;

  } else if (lang === "pt") {

    message =
      `Você acertou ${score} de ${quizQuestions.length} perguntas.`;

  } else {

    message =
      `Acertaste ${score} de ${quizQuestions.length} preguntas.`;

  }


  quizResult.textContent =
    message;

}


/* =========================================================
   CUENTA REGRESIVA · ENACOM 2026
========================================================= */

const countdownTarget = new Date("2026-11-04T08:00:00-03:00").getTime();
const countdownDays = document.getElementById("countdown-days");
const countdownHours = document.getElementById("countdown-hours");
const countdownMinutes = document.getElementById("countdown-minutes");
const countdownSeconds = document.getElementById("countdown-seconds");
const countdownStatus = document.getElementById("countdown-status");

function updateCountdown() {
  if (!countdownDays || !countdownHours || !countdownMinutes || !countdownSeconds) {
    return;
  }

  const remaining = countdownTarget - Date.now();

  if (remaining <= 0) {
    countdownDays.textContent = "0";
    countdownHours.textContent = "0";
    countdownMinutes.textContent = "0";
    countdownSeconds.textContent = "0";

    if (countdownStatus) {
      const lang = document.documentElement.lang || "es";
      countdownStatus.textContent = translations[lang].countdownComplete;
    }

    return true;
  }

  const totalSeconds = Math.floor(remaining / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  countdownDays.textContent = String(days);
  countdownHours.textContent = String(hours).padStart(2, "0");
  countdownMinutes.textContent = String(minutes).padStart(2, "0");
  countdownSeconds.textContent = String(seconds).padStart(2, "0");

  return false;
}



/* =========================================================
   INICIAR
========================================================= */

changeLanguage(savedLanguage);

renderQuestion();

if (!updateCountdown()) {
  const countdownTimer = setInterval(() => {
    if (updateCountdown()) {
      clearInterval(countdownTimer);
    }
  }, 1000);
}
