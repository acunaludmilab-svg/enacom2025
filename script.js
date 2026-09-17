/* =========================================================
   ENACOM 2025
   Interactividad, idiomas, accesibilidad, carrusel y quiz
========================================================= */

/* =========================================================
   ACORDEÓN
========================================================= */

const accordionButtons = document.querySelectorAll(".subthread-button");

accordionButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const article = button.closest(".subthread");

    if (!article) return;

    const content = article.querySelector(".subthread-content");

    if (!content) return;

    const isOpen = article.classList.contains("open");

    article.classList.toggle("open");
    button.setAttribute("aria-expanded", String(!isOpen));

    if (!isOpen) {
      content.style.maxHeight = content.scrollHeight + "px";
    } else {
      content.style.maxHeight = "0px";
    }
  });
});

document.querySelectorAll(".subthread.open").forEach((article) => {
  const content = article.querySelector(".subthread-content");

  if (!content) return;

  content.style.maxHeight = content.scrollHeight + "px";
});

/* =========================================================
   CARRUSEL
========================================================= */

const slides = document.querySelectorAll(".carousel-slide");
const prevButton = document.querySelector(".carousel-control.prev");
const nextButton = document.querySelector(".carousel-control.next");
const dotsContainer = document.querySelector(".carousel-dots");

let currentSlide = 0;

if (
  slides.length > 0 &&
  dotsContainer &&
  prevButton &&
  nextButton
) {
  slides.forEach((slide, index) => {
    const dot = document.createElement("button");

    dot.className = "carousel-dot";
    dot.type = "button";
    dot.setAttribute("aria-label", `Ver fotografía ${index + 1}`);

    dot.addEventListener("click", () => {
      showSlide(index);
    });

    dotsContainer.appendChild(dot);
  });

  const dots = document.querySelectorAll(".carousel-dot");

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
      slide.classList.toggle("active", i === currentSlide);
    });

    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === currentSlide);
    });
  }

  prevButton.addEventListener("click", () => {
    showSlide(currentSlide - 1);
  });

  nextButton.addEventListener("click", () => {
    showSlide(currentSlide + 1);
  });

  showSlide(0);

  let carouselTimer = null;

  function startCarousel() {
    if (carouselTimer) {
      clearInterval(carouselTimer);
    }

    carouselTimer = setInterval(() => {
      showSlide(currentSlide + 1);
    }, 6500);
  }

  function stopCarousel() {
    if (carouselTimer) {
      clearInterval(carouselTimer);
      carouselTimer = null;
    }
  }

  startCarousel();

  const carousel = document.querySelector(".carousel");

  if (carousel) {
    carousel.addEventListener("mouseenter", stopCarousel);
    carousel.addEventListener("mouseleave", startCarousel);
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

    heroGallery: "Ver fotografías",
    heroExplore: "Explorar el encuentro",

    heroImageCaption:
      "Producciones desarrolladas a partir de los debates y problemáticas abordadas durante el encuentro.",

    countdownTitle: "Días para ENACOM 2026",
    countdownDays: "Días",
    countdownHours: "Horas",
    countdownMinutes: "Minutos",
    countdownSeconds: "Segundos",
    countdownComplete: "El ENACOM 2026 ya comenzó.",

    galleryKicker: "El encuentro en imágenes",
    galleryTitle: "ENACOM 2025 en San Luis",

    galleryText:
      "Una mirada visual sobre las jornadas realizadas en la Facultad de Ciencias Humanas de la Universidad Nacional de San Luis.",

    photo1Title: "Apertura del ENACOM 2025",

    photo1Credit:
      "Fotografía: Noticias UNSL — Universidad Nacional de San Luis.",

    photo2Title: "Participación y encuentro",

    photo2Credit:
      "Fotografía: Noticias UNSL — Universidad Nacional de San Luis.",

    photo3Title: "Comunidad académica",

    photo3Credit:
      "Fotografía: Noticias UNSL — Universidad Nacional de San Luis.",

    photo4Title: "Ponencias y debates",

    photo4Credit:
      "Fotografía: Facultad de Ciencias de la Educación — UNER.",

    photo5Title: "Participantes del encuentro",

    photo5Credit:
      "Fotografía: Facultad de Ciencias de la Educación — UNER.",

    photoNote:
      "Las fotografías se presentan con identificación de su fuente y autoría.",

    axesKicker: "Recorrido conceptual",
    axesTitle: "Ejes temáticos",

    axesIntro:
      "El recorrido reúne algunas de las principales problemáticas abordadas durante el ENACOM 2025.",

    axisMainTitle:
      "Crisis, comunicación y democracia",

    axisMainText:
      "Este eje aborda la relación entre las crisis socioeconómicas y políticas, la comunicación pública, el periodismo, la circulación de información y los desafíos democráticos.",

    problemsKicker: "Debates contemporáneos",
    problemsTitle: "Problemáticas y debates",

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

    viewInfographic: "Ver infografía completa",
    viewPdf: "Ver material completo",

    speakersKicker: "Voces del encuentro",
    speakersTitle: "Ponencias destacadas",

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

    quizKicker: "Participá",

    quizTitle:
      "¿Cuánto sabés sobre comunicación?",

    quizIntro:
      "Poné a prueba lo que aprendiste durante el recorrido.",

    nextQuestion: "Siguiente pregunta",

    socialKicker: "Seguí el encuentro",

    socialTitle:
      "ENACOM también está en redes sociales",

    socialText:
      "Encontrá más información, fotografías y novedades sobre el Encuentro Nacional de Carreras de Comunicación.",

    accessKicker: "Accesibilidad",

    accessTitle:
      "Una página para todas las personas",

    accessText:
      "Utilizá estas herramientas para adaptar la experiencia de lectura según tus necesidades.",

    increaseText: "Aumentar texto",
    decreaseText: "Disminuir texto",
    contrast: "Alto contraste",
    reset: "Restablecer",

    closing:
      "ENACOM 2025 invita a pensar el tiempo de la comunicación como una trama viva: memoria, presente, conflicto, tecnología y derecho a la información en diálogo.",

    footer:
      "Trabajo académico realizado por estudiantes de la carrera de Comunicación Social de la UNNE."
  },

  en: {
    navEjes: "Thematic axes",
    navPonencias: "Featured talks",
    navInteractivo: "Take part",
    navRedes: "Social media",

    kicker:
      "22nd National Meeting of Communication Careers",

    heroTitle:
      "A time for communication. Dialogues between past and present in an accelerated world",

    heroText:
      "A journey through the main debates, talks and productions of ENACOM 2025, held in San Luis, Argentina.",

    heroGallery: "View photographs",
    heroExplore: "Explore the event",

    heroImageCaption:
      "Productions developed from the debates and issues addressed during the event.",

    countdownTitle: "Days until ENACOM 2026",
    countdownDays: "Days",
    countdownHours: "Hours",
    countdownMinutes: "Minutes",
    countdownSeconds: "Seconds",
    countdownComplete: "ENACOM 2026 has begun.",

    galleryKicker: "The event in images",
    galleryTitle: "ENACOM 2025 in San Luis",

    galleryText:
      "A visual look at the sessions held at the Faculty of Human Sciences of the National University of San Luis.",

    photo1Title: "Opening of ENACOM 2025",

    photo1Credit:
      "Photograph: Noticias UNSL — National University of San Luis.",

    photo2Title: "Participation and encounter",

    photo2Credit:
      "Photograph: Noticias UNSL — National University of San Luis.",

    photo3Title: "Academic community",

    photo3Credit:
      "Photograph: Noticias UNSL — National University of San Luis.",

    photo4Title: "Talks and debates",

    photo4Credit:
      "Photograph: Faculty of Education Sciences — UNER.",

    photo5Title: "Event participants",

    photo5Credit:
      "Photograph: Faculty of Education Sciences — UNER.",

    photoNote:
      "Photographs are presented with their source and authorship clearly identified.",

    axesKicker: "Conceptual journey",
    axesTitle: "Thematic axes",

    axesIntro:
      "The journey brings together some of the main issues addressed during ENACOM 2025.",

    axisMainTitle:
      "Crisis, communication and democracy",

    axisMainText:
      "This axis explores the relationship between socioeconomic and political crises, public communication, journalism, information circulation and democratic challenges.",

    problemsKicker: "Contemporary debates",
    problemsTitle: "Issues and debates",

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

    viewPdf: "View complete material",

    speakersKicker: "Voices of the event",
    speakersTitle: "Featured talks",

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

    quizKicker: "Take part",

    quizTitle:
      "How much do you know about communication?",

    quizIntro:
      "Test what you learned during the journey.",

    nextQuestion: "Next question",

    socialKicker: "Follow the event",

    socialTitle:
      "ENACOM is also on social media",

    socialText:
      "Find more information, photographs and news about the National Meeting of Communication Careers.",

    accessKicker: "Accessibility",

    accessTitle:
      "A website for everyone",

    accessText:
      "Use these tools to adapt the reading experience to your needs.",

    increaseText: "Increase text",
    decreaseText: "Decrease text",
    contrast: "High contrast",
    reset: "Reset",

    closing:
      "ENACOM 2025 invites us to think about the time of communication as a living network: memory, present, conflict, technology and the right to information in dialogue.",

    footer:
      "Academic project developed by students of the Social Communication program at UNNE."
  },

  pt: {
    navEjes: "Eixos temáticos",
    navPonencias: "Palestras",
    navInteractivo: "Participe",
    navRedes: "Redes sociais",

    kicker:
      "22º Encontro Nacional de Carreiras de Comunicação",

    heroTitle:
      "Tempo de comunicação. Diálogos entre passado e presente em um mundo acelerado",

    heroText:
      "Um percurso pelos principais debates, palestras e produções do ENACOM 2025, realizado em San Luis, Argentina.",

    heroGallery: "Ver fotografias",
    heroExplore: "Explorar o encontro",

    heroImageCaption:
      "Produções desenvolvidas a partir dos debates e questões abordados durante o encontro.",

    countdownTitle:
      "Dias para o ENACOM 2026",

    countdownDays: "Dias",
    countdownHours: "Horas",
    countdownMinutes: "Minutos",
    countdownSeconds: "Segundos",
    countdownComplete: "O ENACOM 2026 já começou.",

    galleryKicker: "O encontro em imagens",
    galleryTitle: "ENACOM 2025 em San Luis",

    galleryText:
      "Um olhar visual sobre as jornadas realizadas na Faculdade de Ciências Humanas da Universidade Nacional de San Luis.",

    photo1Title: "Abertura do ENACOM 2025",

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

    quizKicker: "Participe",

    quizTitle:
      "Quanto você sabe sobre comunicação?",

    quizIntro:
      "Teste o que você aprendeu durante o percurso.",

    nextQuestion:
      "Próxima pergunta",

    socialKicker:
      "Acompanhe o encontro",

    socialTitle:
      "O ENACOM também está nas redes sociais",

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

Object.assign(translations.es, {
  navSections: "Secciones",
  navHome: "Inicio",
  navHistory: "Historia",
  navGallery: "Galería",
  navProblems: "Problemáticas"
});

Object.assign(translations.en, {
  navSections: "Sections",
  navHome: "Home",
  navHistory: "History",
  navGallery: "Gallery",
  navProblems: "Issues"
});

Object.assign(translations.pt, {
  navSections: "Seções",
  navHome: "Início",
  navHistory: "História",
  navGallery: "Galeria",
  navProblems: "Problemáticas"
});

/* =========================================================
   HISTORIA DEL ENACOM · TRADUCCIONES
========================================================= */

Object.assign(translations.es, {
  historyKicker: "Memoria y recorrido",
  historyTitle: "Historia del ENACOM",
  historyLead: "Un recorrido por los principales momentos que dieron forma al Encuentro Nacional de Carreras de Comunicación y a la articulación federal de las carreras de comunicación en Argentina.",
  historyWhatLabel: "¿Qué es el ENACOM?",
  historyWhatTitle: "Un espacio federal para pensar la comunicación",
  historyWhatP1: "El Encuentro Nacional de Carreras de Comunicación (ENACOM) reúne a estudiantes, docentes, investigadores, graduados y profesionales vinculados al campo de la comunicación social de diferentes universidades del país.",
  historyWhatP2: "A lo largo de sus distintas ediciones, el encuentro se consolidó como un espacio de intercambio académico, producción colectiva y debate sobre las transformaciones sociales, culturales, políticas y tecnológicas que atraviesan a la comunicación.",
  history1983Title: "Creación de AFACOS",
  history1983Sub: "Primer antecedente de articulación federal",
  history1983P1: "Se crea la Asociación Federal de Carreras de Comunicación Social (AFACOS), en el contexto del retorno de la democracia en Argentina.",
  history1983P2: "La organización buscó fortalecer el vínculo entre las carreras de comunicación del país mediante el intercambio académico, la investigación, la reflexión crítica sobre los medios y la formación profesional.",
  history1983P3: "Su creación sentó una de las bases para la posterior conformación de FADECCOS y el desarrollo del ENACOM.",
  history2001Title: "Formalización de FADECCOS",
  history2001Sub: "Una nueva etapa de organización institucional",
  history2001P1: "Se consolida la Federación Argentina de Carreras de Comunicación Social (FADECCOS), continuando el proceso iniciado por AFACOS.",
  history2001P2: "La federación permitió ampliar la representación de las carreras de comunicación, fortalecer el intercambio entre universidades e impulsar investigaciones y encuentros nacionales vinculados al campo.",
  history2002Title: "Primer ENACOM",
  history2002Sub: "Olavarría",
  history2002P1: "En la ciudad de Olavarría se realiza el primer Encuentro Nacional de Carreras de Comunicación.",
  history2002P2: "El encuentro surge como un espacio destinado a reunir estudiantes, docentes, investigadores y graduados de comunicación social de distintos puntos del país.",
  history2002P3: "A partir de esta primera edición comienzan a desarrollarse debates sobre medios, periodismo, políticas de comunicación, cultura, educación y tecnologías.",
  history0210Title: "Expansión federal",
  history0210Sub: "El encuentro comienza a recorrer el país",
  history0210P1: "Durante sus primeras ediciones, el ENACOM comienza a desarrollarse en distintas provincias argentinas, profundizando su carácter federal.",
  history0210P2: "Crece la participación de estudiantes e investigadores, aparecen nuevas discusiones vinculadas con internet y comunicación digital y se incorporan producciones audiovisuales y multimediales.",
  history0210P3: "El encuentro comienza a consolidarse no solamente como un espacio de exposición académica, sino también como un lugar de producción colectiva de conocimientos.",
  history1019Title: "Nuevas agendas",
  history1019Sub: "Transformaciones sociales y digitales",
  history1019P1: "Las transformaciones tecnológicas y sociales amplían progresivamente los debates presentes en el encuentro.",
  history1019P2: "Redes sociales, convergencia digital, desinformación, comunicación política, derechos comunicacionales, comunicación y género y democratización de la palabra comienzan a ocupar un lugar central.",
  history1019P3: "El ENACOM acompaña así las transformaciones del campo profesional y académico de la comunicación.",
  history2020Title: "La pandemia transforma el encuentro",
  history2020Sub: "Nuevas formas de participación",
  history2020P1: "La pandemia de COVID-19 modifica las actividades académicas presenciales y obliga a transformar las dinámicas de intercambio.",
  history2020P2: "La virtualidad, las plataformas digitales y las nuevas formas de circulación de contenidos adquieren un papel todavía más importante dentro del campo de la comunicación.",
  history2021Title: "Reanudación del encuentro",
  history2021Sub: "Mendoza",
  history2021P1: "El ENACOM vuelve a encontrarse presencialmente en Mendoza luego del período más crítico de la pandemia.",
  history2021P2: "Los debates incorporan con mayor fuerza cuestiones como la virtualización de la vida cotidiana, la sobreinformación, las noticias falsas y el papel de los medios durante situaciones de crisis.",
  history2024Title: "San Luis es elegida sede",
  history2024Sub: "Preparación del XXII ENACOM",
  history2024P1: "En septiembre de 2024, la Asamblea de FADECCOS aprueba la candidatura de la Facultad de Ciencias Humanas de la Universidad Nacional de San Luis como sede del ENACOM 2025.",
  history2024P2: "La elección da continuidad al carácter federal del encuentro y reconoce la trayectoria académica de la carrera de Comunicación Social de la universidad.",
  history2025Title: "XXII ENACOM — San Luis",
  history2025Sub: "Tiempo de comunicación",
  history2025P1: "Los días 5, 6 y 7 de noviembre de 2025, la Universidad Nacional de San Luis fue sede del XXII Encuentro Nacional de Carreras de Comunicación.",
  history2025P2: "Bajo el lema ‘Tiempo de comunicación. Diálogos sobre pasado y presente en un mundo acelerado’, la edición puso en diálogo la trayectoria histórica del campo con las transformaciones contemporáneas de la comunicación.",
  history2025P3: "Participaron estudiantes, docentes, investigadores, comunicadores, extensionistas y profesionales provenientes de diferentes provincias y países de América Latina.",
  history2026Title: "XXIII ENACOM — Corrientes",
  history2026Sub: "La historia continúa en la UNNE",
  history2026Badge: "Próxima edición",
  history2026Heading: "Corrientes será sede del XXIII ENACOM",
  history2026P1: "Los días 4, 5 y 6 de noviembre de 2026, la ciudad de Corrientes recibirá el XXIII Encuentro Nacional de Carreras de Comunicación.",
  history2026P2: "La sede será el Campus Cabral de la Universidad Nacional del Nordeste, con la carrera de Comunicación Social de la Facultad de Humanidades como anfitriona.",
  history2026P3: "Esta edición se desarrollará bajo el lema:",
  history2026Quote: "“Pensar la comunicación y la democracia en las encrucijadas del siglo XXI”",
  history2026P4: "El encuentro propone debatir los desafíos contemporáneos de la comunicación y el periodismo, promoviendo espacios de diálogo y nuevas líneas de acción en intervención, docencia e investigación."
});

Object.assign(translations.en, {
  historyKicker: "Memory and journey",
  historyTitle: "History of ENACOM",
  historyLead: "A journey through the key moments that shaped the National Meeting of Communication Programs and the federal coordination of communication programs in Argentina.",
  historyWhatLabel: "What is ENACOM?",
  historyWhatTitle: "A federal space to think about communication",
  historyWhatP1: "The National Meeting of Communication Programs (ENACOM) brings together students, teachers, researchers, graduates and professionals linked to the field of social communication from universities across Argentina.",
  historyWhatP2: "Across its different editions, the meeting has become a space for academic exchange, collective knowledge production and debate about the social, cultural, political and technological transformations affecting communication.",
  history1983Title: "Creation of AFACOS",
  history1983Sub: "First precedent for federal coordination",
  history1983P1: "The Federal Association of Social Communication Programs (AFACOS) was created in the context of Argentina's return to democracy.",
  history1983P2: "The organization sought to strengthen links among communication programs through academic exchange, research, critical reflection on the media and professional training.",
  history1983P3: "Its creation laid part of the groundwork for the later formation of FADECCOS and the development of ENACOM.",
  history2001Title: "Institutionalization of FADECCOS",
  history2001Sub: "A new stage of institutional organization",
  history2001P1: "The Argentine Federation of Social Communication Programs (FADECCOS) was consolidated, continuing the process begun by AFACOS.",
  history2001P2: "The federation expanded representation of communication programs, strengthened exchange among universities and promoted research and national meetings linked to the field.",
  history2002Title: "First ENACOM",
  history2002Sub: "Olavarría",
  history2002P1: "The first National Meeting of Communication Programs was held in the city of Olavarría.",
  history2002P2: "The meeting emerged as a space to bring together students, teachers, researchers and graduates in social communication from different parts of the country.",
  history2002P3: "From this first edition onward, debates developed around media, journalism, communication policies, culture, education and technology.",
  history0210Title: "Federal expansion",
  history0210Sub: "The meeting begins to travel across the country",
  history0210P1: "During its early editions, ENACOM began to take place in different Argentine provinces, deepening its federal character.",
  history0210P2: "Participation by students and researchers grew, new discussions about the internet and digital communication appeared, and audiovisual and multimedia productions were incorporated.",
  history0210P3: "The meeting began to establish itself not only as a space for academic presentations, but also as a place for collective knowledge production.",
  history1019Title: "New agendas",
  history1019Sub: "Social and digital transformations",
  history1019P1: "Technological and social transformations progressively broadened the debates present at the meeting.",
  history1019P2: "Social media, digital convergence, disinformation, political communication, communication rights, communication and gender, and democratization of speech became central topics.",
  history1019P3: "ENACOM thus accompanied changes in both the professional and academic fields of communication.",
  history2020Title: "The pandemic transforms the meeting",
  history2020Sub: "New forms of participation",
  history2020P1: "The COVID-19 pandemic changed in-person academic activities and forced new forms of exchange.",
  history2020P2: "Virtuality, digital platforms and new forms of content circulation became even more important within the field of communication.",
  history2021Title: "The meeting resumes",
  history2021Sub: "Mendoza",
  history2021P1: "ENACOM returned to in-person meetings in Mendoza after the most critical period of the pandemic.",
  history2021P2: "Debates increasingly addressed the virtualization of everyday life, information overload, fake news and the role of the media during crisis situations.",
  history2024Title: "San Luis is chosen as host",
  history2024Sub: "Preparation for the 22nd ENACOM",
  history2024P1: "In September 2024, the FADECCOS Assembly approved the candidacy of the Faculty of Human Sciences of the National University of San Luis as host of ENACOM 2025.",
  history2024P2: "The selection continued the meeting's federal character and recognized the academic trajectory of the university's Social Communication program.",
  history2025Title: "22nd ENACOM — San Luis",
  history2025Sub: "Time of communication",
  history2025P1: "On November 5, 6 and 7, 2025, the National University of San Luis hosted the 22nd National Meeting of Communication Programs.",
  history2025P2: "Under the theme ‘Time of communication. Dialogues on past and present in an accelerated world,’ the edition connected the historical trajectory of the field with contemporary transformations in communication.",
  history2025P3: "Students, teachers, researchers, communicators, university extension workers and professionals from different provinces and Latin American countries took part.",
  history2026Title: "23rd ENACOM — Corrientes",
  history2026Sub: "The story continues at UNNE",
  history2026Badge: "Next edition",
  history2026Heading: "Corrientes will host the 23rd ENACOM",
  history2026P1: "On November 4, 5 and 6, 2026, the city of Corrientes will host the 23rd National Meeting of Communication Programs.",
  history2026P2: "The venue will be the Cabral Campus of the National University of the Northeast, with the Social Communication program of the Faculty of Humanities as host.",
  history2026P3: "This edition will be held under the theme:",
  history2026Quote: "“Thinking communication and democracy at the crossroads of the 21st century”",
  history2026P4: "The meeting proposes to debate contemporary challenges in communication and journalism, promoting spaces for dialogue and new lines of action in intervention, teaching and research."
});

Object.assign(translations.pt, {
  historyKicker: "Memória e percurso",
  historyTitle: "História do ENACOM",
  historyLead: "Um percurso pelos principais momentos que deram forma ao Encontro Nacional de Cursos de Comunicação e à articulação federal dos cursos de comunicação na Argentina.",
  historyWhatLabel: "O que é o ENACOM?",
  historyWhatTitle: "Um espaço federal para pensar a comunicação",
  historyWhatP1: "O Encontro Nacional de Cursos de Comunicação (ENACOM) reúne estudantes, docentes, pesquisadores, graduados e profissionais ligados ao campo da comunicação social de diferentes universidades do país.",
  historyWhatP2: "Ao longo de suas diferentes edições, o encontro se consolidou como um espaço de intercâmbio acadêmico, produção coletiva e debate sobre as transformações sociais, culturais, políticas e tecnológicas que atravessam a comunicação.",
  history1983Title: "Criação da AFACOS",
  history1983Sub: "Primeiro antecedente de articulação federal",
  history1983P1: "É criada a Associação Federal de Cursos de Comunicação Social (AFACOS), no contexto do retorno da democracia na Argentina.",
  history1983P2: "A organização buscou fortalecer os vínculos entre os cursos de comunicação do país por meio do intercâmbio acadêmico, da pesquisa, da reflexão crítica sobre os meios e da formação profissional.",
  history1983P3: "Sua criação lançou parte das bases para a posterior formação da FADECCOS e o desenvolvimento do ENACOM.",
  history2001Title: "Formalização da FADECCOS",
  history2001Sub: "Uma nova etapa de organização institucional",
  history2001P1: "Consolida-se a Federação Argentina de Cursos de Comunicação Social (FADECCOS), dando continuidade ao processo iniciado pela AFACOS.",
  history2001P2: "A federação ampliou a representação dos cursos de comunicação, fortaleceu o intercâmbio entre universidades e impulsionou pesquisas e encontros nacionais ligados ao campo.",
  history2002Title: "Primeiro ENACOM",
  history2002Sub: "Olavarría",
  history2002P1: "Na cidade de Olavarría é realizado o primeiro Encontro Nacional de Cursos de Comunicação.",
  history2002P2: "O encontro surge como um espaço destinado a reunir estudantes, docentes, pesquisadores e graduados em comunicação social de diferentes pontos do país.",
  history2002P3: "A partir dessa primeira edição começam a se desenvolver debates sobre meios, jornalismo, políticas de comunicação, cultura, educação e tecnologias.",
  history0210Title: "Expansão federal",
  history0210Sub: "O encontro começa a percorrer o país",
  history0210P1: "Durante suas primeiras edições, o ENACOM passa a ser realizado em diferentes províncias argentinas, aprofundando seu caráter federal.",
  history0210P2: "Cresce a participação de estudantes e pesquisadores, surgem novas discussões ligadas à internet e à comunicação digital e são incorporadas produções audiovisuais e multimídia.",
  history0210P3: "O encontro começa a se consolidar não apenas como espaço de exposição acadêmica, mas também como lugar de produção coletiva de conhecimentos.",
  history1019Title: "Novas agendas",
  history1019Sub: "Transformações sociais e digitais",
  history1019P1: "As transformações tecnológicas e sociais ampliam progressivamente os debates presentes no encontro.",
  history1019P2: "Redes sociais, convergência digital, desinformação, comunicação política, direitos comunicacionais, comunicação e gênero e democratização da palavra passam a ocupar um lugar central.",
  history1019P3: "O ENACOM acompanha, assim, as transformações do campo profissional e acadêmico da comunicação.",
  history2020Title: "A pandemia transforma o encontro",
  history2020Sub: "Novas formas de participação",
  history2020P1: "A pandemia de COVID-19 modifica as atividades acadêmicas presenciais e obriga a transformar as dinâmicas de intercâmbio.",
  history2020P2: "A virtualidade, as plataformas digitais e as novas formas de circulação de conteúdos ganham um papel ainda mais importante no campo da comunicação.",
  history2021Title: "Retomada do encontro",
  history2021Sub: "Mendoza",
  history2021P1: "O ENACOM volta a se encontrar presencialmente em Mendoza após o período mais crítico da pandemia.",
  history2021P2: "Os debates incorporam com mais força questões como a virtualização da vida cotidiana, a sobreinformação, as notícias falsas e o papel dos meios em situações de crise.",
  history2024Title: "San Luis é escolhida como sede",
  history2024Sub: "Preparação do XXII ENACOM",
  history2024P1: "Em setembro de 2024, a Assembleia da FADECCOS aprova a candidatura da Faculdade de Ciências Humanas da Universidade Nacional de San Luis como sede do ENACOM 2025.",
  history2024P2: "A escolha dá continuidade ao caráter federal do encontro e reconhece a trajetória acadêmica do curso de Comunicação Social da universidade.",
  history2025Title: "XXII ENACOM — San Luis",
  history2025Sub: "Tempo de comunicação",
  history2025P1: "Nos dias 5, 6 e 7 de novembro de 2025, a Universidade Nacional de San Luis sediou o XXII Encontro Nacional de Cursos de Comunicação.",
  history2025P2: "Sob o lema ‘Tempo de comunicação. Diálogos sobre passado e presente em um mundo acelerado’, a edição colocou em diálogo a trajetória histórica do campo com as transformações contemporâneas da comunicação.",
  history2025P3: "Participaram estudantes, docentes, pesquisadores, comunicadores, extensionistas e profissionais de diferentes províncias e países latino-americanos.",
  history2026Title: "XXIII ENACOM — Corrientes",
  history2026Sub: "A história continua na UNNE",
  history2026Badge: "Próxima edição",
  history2026Heading: "Corrientes será sede do XXIII ENACOM",
  history2026P1: "Nos dias 4, 5 e 6 de novembro de 2026, a cidade de Corrientes receberá o XXIII Encontro Nacional de Cursos de Comunicação.",
  history2026P2: "A sede será o Campus Cabral da Universidade Nacional do Nordeste, com o curso de Comunicação Social da Faculdade de Humanidades como anfitrião.",
  history2026P3: "Esta edição será realizada sob o lema:",
  history2026Quote: "“Pensar a comunicação e a democracia nas encruzilhadas do século XXI”",
  history2026P4: "O encontro propõe debater os desafios contemporâneos da comunicação e do jornalismo, promovendo espaços de diálogo e novas linhas de ação em intervenção, docência e pesquisa."
});

const languageButtons = document.querySelectorAll(".language-btn");

function changeLanguage(lang) {
  if (!translations[lang]) {
    lang = "es";
  }

  document.documentElement.lang = lang;

  const elements = document.querySelectorAll("[data-i18n]");

  elements.forEach((element) => {
    const key = element.dataset.i18n;

    if (
      translations[lang] &&
      translations[lang][key] !== undefined
    ) {
      element.textContent = translations[lang][key];
    }
  });

  languageButtons.forEach((button) => {
    button.classList.toggle(
      "active",
      button.dataset.lang === lang
    );
  });

  localStorage.setItem("enacom-language", lang);

  if (
    typeof renderQuestion === "function" &&
    typeof currentQuestion !== "undefined" &&
    currentQuestion < quizQuestions.length
  ) {
    renderQuestion();
  } else if (currentQuestion === quizQuestions.length) {
    showQuizResult();
  }

  updateCountdown();
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    changeLanguage(button.dataset.lang);
  });
});

const savedLanguage =
  localStorage.getItem("enacom-language") || "es";

/* =========================================================
   ACCESIBILIDAD
========================================================= */

let textScale =
  parseFloat(localStorage.getItem("enacom-text-scale")) || 1;

document.documentElement.style.setProperty(
  "--text-scale",
  textScale
);

const increaseTextButton = document.getElementById("increase-text");

if (increaseTextButton) {
  increaseTextButton.addEventListener("click", () => {
    textScale = Math.min(textScale + 0.1, 1.5);
    updateTextScale();
  });
}

const decreaseTextButton = document.getElementById("decrease-text");

if (decreaseTextButton) {
  decreaseTextButton.addEventListener("click", () => {
    textScale = Math.max(textScale - 0.1, 0.8);
    updateTextScale();
  });
}

function updateTextScale() {
  document.documentElement.style.setProperty(
    "--text-scale",
    textScale
  );

  localStorage.setItem("enacom-text-scale", textScale);
}

const contrastButton = document.getElementById("contrast-toggle");

if (contrastButton) {
  contrastButton.addEventListener("click", () => {
    document.body.classList.toggle("high-contrast");

    localStorage.setItem(
      "enacom-contrast",
      document.body.classList.contains("high-contrast")
    );
  });
}

if (localStorage.getItem("enacom-contrast") === "true") {
  document.body.classList.add("high-contrast");
}

const resetAccessibilityButton =
  document.getElementById("reset-accessibility");

if (resetAccessibilityButton) {
  resetAccessibilityButton.addEventListener("click", () => {
    textScale = 1;

    updateTextScale();

    document.body.classList.remove("high-contrast");

    localStorage.removeItem("enacom-contrast");
  });
}

/* =========================================================
   PREGUNTAS DEL CUESTIONARIO
========================================================= */

const quizQuestions = [
  {
    question: {
      es:
        "¿Cuál es uno de los principales problemas que genera la desinformación?",
      en:
        "What is one of the main problems caused by disinformation?",
      pt:
        "Qual é um dos principais problemas causados pela desinformação?"
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
      es: "¿Dónde se realizó ENACOM 2025?",
      en: "Where was ENACOM 2025 held?",
      pt: "Onde foi realizado o ENACOM 2025?"
    },

    options: {
      es: ["San Luis", "Buenos Aires", "Córdoba"],
      en: ["San Luis", "Buenos Aires", "Córdoba"],
      pt: ["San Luis", "Buenos Aires", "Córdoba"]
    },

    correct: 0
  }
];

/* =========================================================
   EXPLICACIONES
========================================================= */

const quizExplanations = {
  es: [
    "La desinformación dificulta distinguir los hechos de los contenidos falsos o engañosos y puede debilitar la confianza pública en los medios y las instituciones.",
    "El acceso a información confiable permite participar de manera informada y debatir asuntos de interés público, aspectos fundamentales de la democracia.",
    "La inteligencia artificial permite generar y modificar contenidos, por lo que exige verificar su autenticidad y reflexionar sobre su uso ético en el periodismo.",
    "ENACOM 2025 se realizó en San Luis, Argentina, sede del XXII Encuentro Nacional de Carreras de Comunicación."
  ],

  en: [
    "Disinformation makes it harder to distinguish facts from false or misleading content and can weaken public trust in media and institutions.",
    "Access to reliable information supports informed participation and public debate, both essential to democracy.",
    "Artificial intelligence can generate and alter content, making verification and ethical use important for journalism.",
    "ENACOM 2025 was held in San Luis, Argentina, hosting the 22nd National Meeting of Communication Degree Programs."
  ],

  pt: [
    "A desinformação dificulta distinguir fatos de conteúdos falsos ou enganosos e pode enfraquecer a confiança pública nos meios de comunicação e nas instituições.",
    "O acesso a informações confiáveis permite a participação informada e o debate público, fundamentais para a democracia.",
    "A inteligência artificial permite gerar e alterar conteúdos, exigindo verificação de autenticidade e reflexão sobre seu uso ético no jornalismo.",
    "O ENACOM 2025 foi realizado em San Luis, Argentina, sede do XXII Encontro Nacional de Cursos de Comunicação."
  ]
};

const quizLabels = {
  es: {
    previous: "Pregunta anterior",
    next: "Siguiente pregunta",
    finish: "Ver resultado",
    restart: "Volver a intentar",
    correct: "¡Correcto!",
    incorrect: "Incorrecto.",
    answer: "Respuesta correcta: ",
    progress: "Pregunta",
    of: "de",
    hint:
      "Elegí una respuesta. Podés volver atrás para revisar tus respuestas.",
    result: (n, total) =>
      `Acertaste ${n} de ${total} preguntas.`
  },

  en: {
    previous: "Previous question",
    next: "Next question",
    finish: "See result",
    restart: "Try again",
    correct: "Correct!",
    incorrect: "Incorrect.",
    answer: "Correct answer: ",
    progress: "Question",
    of: "of",
    hint:
      "Choose an answer. You can go back to review your answers.",
    result: (n, total) =>
      `You got ${n} out of ${total} correct.`
  },

  pt: {
    previous: "Pergunta anterior",
    next: "Próxima pergunta",
    finish: "Ver resultado",
    restart: "Tentar novamente",
    correct: "Correto!",
    incorrect: "Incorreto.",
    answer: "Resposta correta: ",
    progress: "Pergunta",
    of: "de",
    hint:
      "Escolha uma resposta. Você pode voltar para revisar suas respostas.",
    result: (n, total) =>
      `Você acertou ${n} de ${total} perguntas.`
  }
};

/* =========================================================
   ESTADO DEL CUESTIONARIO
========================================================= */

let currentQuestion = 0;

const answers = Array(quizQuestions.length).fill(null);

const quizContainer = document.getElementById("quiz-container");
const quizNext = document.getElementById("quiz-next");
const quizPrevious = document.getElementById("quiz-previous");
const quizRestart = document.getElementById("quiz-restart");
const quizFeedback = document.getElementById("quiz-feedback");
const quizResult = document.getElementById("quiz-result");

function quizLanguage() {
  return quizLabels[document.documentElement.lang]
    ? document.documentElement.lang
    : "es";
}

/* =========================================================
   CORRECCIÓN INMEDIATA
========================================================= */

function updateAnswerFeedback() {
  const lang = quizLanguage();
  const labels = quizLabels[lang];
  const question = quizQuestions[currentQuestion];
  const answer = answers[currentQuestion];

  quizNext.disabled = answer === null;

  quizFeedback.replaceChildren();
  quizFeedback.className = "quiz-feedback";

  if (answer === null) {
    quizFeedback.textContent = labels.hint;
    return;
  }

  const correct = answer === question.correct;

  quizFeedback.classList.add(
    correct ? "correct" : "incorrect"
  );

  const heading = document.createElement("strong");

  heading.textContent = correct
    ? labels.correct
    : labels.incorrect;

  const explanation = document.createElement("p");

  explanation.textContent =
    labels.answer +
    question.options[lang][question.correct] +
    ". " +
    quizExplanations[lang][currentQuestion];

  quizFeedback.append(heading, explanation);

  quizContainer
    .querySelectorAll(".quiz-option")
    .forEach((button, index) => {
      button.setAttribute("aria-disabled", "true");

      button.setAttribute(
        "aria-pressed",
        String(index === answer)
      );

      button.classList.toggle(
        "correct",
        index === question.correct
      );

      button.classList.toggle(
        "incorrect",
        index === answer && !correct
      );

      button.classList.toggle(
        "selected",
        index === answer
      );
    });
}

/* =========================================================
   MOSTRAR PREGUNTA
========================================================= */

function renderQuestion(focus = false) {
  if (!quizContainer) return;

  const lang = quizLanguage();
  const labels = quizLabels[lang];
  const question = quizQuestions[currentQuestion];

  if (!question) return;

  quizContainer.replaceChildren();

  const progress = document.createElement("p");

  progress.className = "quiz-progress";
  progress.textContent =
    `${labels.progress} ${currentQuestion + 1} ` +
    `${labels.of} ${quizQuestions.length}`;

  const title = document.createElement("h3");

  title.id = "quiz-question-title";
  title.tabIndex = -1;
  title.textContent = question.question[lang];

  const wrapper = document.createElement("div");
  wrapper.className = "quiz-question";

  const options = document.createElement("div");

  options.className = "quiz-options";
  options.setAttribute("role", "group");
  options.setAttribute("aria-labelledby", title.id);

  question.options[lang].forEach((option, index) => {
    const button = document.createElement("button");

    button.type = "button";
    button.className = "quiz-option";
    button.textContent = option;
    button.setAttribute("aria-pressed", "false");

    button.addEventListener("click", () => {
      // Conserva la primera respuesta para mantener el puntaje.
      if (answers[currentQuestion] !== null) return;

      answers[currentQuestion] = index;

      updateAnswerFeedback();
    });

    options.appendChild(button);
  });

  wrapper.append(progress, title, options);
  quizContainer.appendChild(wrapper);

  quizResult.textContent = "";

  quizNext.hidden = false;

  quizNext.textContent =
    currentQuestion === quizQuestions.length - 1
      ? labels.finish
      : labels.next;

  quizPrevious.textContent = labels.previous;
  quizPrevious.disabled = currentQuestion === 0;

  quizRestart.hidden = true;

  updateAnswerFeedback();

  if (focus) {
    title.focus({ preventScroll: true });
  }
}

/* =========================================================
   BOTONES DEL CUESTIONARIO
========================================================= */

quizNext?.addEventListener("click", () => {
  if (answers[currentQuestion] === null) return;

  currentQuestion++;

  if (currentQuestion === quizQuestions.length) {
    showQuizResult(true);
  } else {
    renderQuestion(true);
  }
});

quizPrevious?.addEventListener("click", () => {
  if (currentQuestion > 0) {
    currentQuestion--;
    renderQuestion(true);
  }
});

quizRestart?.addEventListener("click", () => {
  answers.fill(null);
  currentQuestion = 0;

  renderQuestion(true);
});

/* =========================================================
   RESULTADO FINAL
========================================================= */

function showQuizResult(focus = false) {
  const labels = quizLabels[quizLanguage()];

  const score = answers.reduce((total, answer, index) => {
    return total +
      (answer === quizQuestions[index].correct ? 1 : 0);
  }, 0);

  quizContainer.replaceChildren();
  quizFeedback.replaceChildren();

  quizFeedback.className = "quiz-feedback";

  quizNext.hidden = true;

  quizPrevious.disabled = false;
  quizPrevious.textContent = labels.previous;

  quizRestart.hidden = false;
  quizRestart.textContent = labels.restart;

  quizResult.textContent = labels.result(
    score,
    quizQuestions.length
  );

  if (focus) {
    quizResult.focus({ preventScroll: true });
  }
}

/* =========================================================
   CUENTA REGRESIVA · ENACOM 2026
========================================================= */

const countdownTarget =
  new Date("2026-11-04T08:00:00-03:00").getTime();

const countdownDays = document.getElementById("countdown-days");
const countdownHours = document.getElementById("countdown-hours");
const countdownMinutes = document.getElementById("countdown-minutes");
const countdownSeconds = document.getElementById("countdown-seconds");
const countdownStatus = document.getElementById("countdown-status");

function updateCountdown() {
  if (
    !countdownDays ||
    !countdownHours ||
    !countdownMinutes ||
    !countdownSeconds
  ) {
    return false;
  }

  const remaining = countdownTarget - Date.now();

  if (remaining <= 0) {
    countdownDays.textContent = "0";
    countdownHours.textContent = "0";
    countdownMinutes.textContent = "0";
    countdownSeconds.textContent = "0";

    if (countdownStatus) {
      const lang = document.documentElement.lang || "es";

      countdownStatus.textContent =
        translations[lang].countdownComplete;
    }

    return true;
  }

  const totalSeconds = Math.floor(remaining / 1000);

  const days = Math.floor(totalSeconds / 86400);

  const hours = Math.floor(
    (totalSeconds % 86400) / 3600
  );

  const minutes = Math.floor(
    (totalSeconds % 3600) / 60
  );

  const seconds = totalSeconds % 60;

  countdownDays.textContent = String(days);

  countdownHours.textContent =
    String(hours).padStart(2, "0");

  countdownMinutes.textContent =
    String(minutes).padStart(2, "0");

  countdownSeconds.textContent =
    String(seconds).padStart(2, "0");

  if (countdownStatus) {
    countdownStatus.textContent = "";
  }

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

/* =========================================================
   NAVEGACIÓN FLOTANTE
========================================================= */

const quickNavigation =
  document.querySelector(".quick-navigation");

quickNavigation
  ?.querySelectorAll("a")
  .forEach((link) => {
    link.addEventListener("click", () => {
      quickNavigation.open = false;

      document
        .querySelector(".quick-navigation summary")
        .focus({ preventScroll: true });
    });
  });

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && quickNavigation?.open) {
    quickNavigation.open = false;

    quickNavigation.querySelector("summary").focus();
  }
});

document.addEventListener("click", (event) => {
  if (
    quickNavigation &&
    !quickNavigation.contains(event.target)
  ) {
    quickNavigation.open = false;
  }
});

/* Evita que el encabezado tape las secciones al navegar. */

const header = document.querySelector(".site-header");

if (header && typeof ResizeObserver !== "undefined") {
  new ResizeObserver(() => {
    document.documentElement.style.setProperty(
      "--header-height",
      `${header.offsetHeight}px`
    );
  }).observe(header);
}
