import Principle from '../models/Principle';
import Guideline from '../models/Guideline';
import SuccessCriterion from '../models/SuccessCriterion';
import Quiz from '../models/Quiz';

/*                                PRINCIPLE 1                                 */

// Guideline 1.1: Text Alternatives 
const sc_1_1_1a = new SuccessCriterion(
    '1.1.1a',
    'Imazhet e Produktit',
    'A',
    'Imazhet domethënëse duhet të kenë alt tekst përshkrues që përcjell qëllimin e tyre.',
    {
        type: 'images',
        note: 'Shembuj për 1.1.1a ',
        items: [
            {
                id: 'pass',
                uri: require('../assets/examples/pass_1_1_1_a.png'),
                alt: 'Imazh me alt tekst përshkrues',
                caption: 'Imazhi informues ka alt tekst',
                isPassing: true
            },
            {
                id: 'fail',
                uri: require('../assets/examples/fail_1_1_1_a.png'),
                alt: 'Imazh pa alt tekst',
                caption: 'Nuk është dhënë alt tekst',
                isPassing: false
            },
        ],
    },
    {
        understandingUrl: 'https://www.w3.org/WAI/WCAG21/Understanding/non-text-content.html',
        specUrl: 'https://www.w3.org/TR/WCAG21/#non-text-content',
    }
);

const sc_1_1_1b = new SuccessCriterion(
    '1.1.1b',
    'Kontrollet & Inputet (Butona me Imazh)',
    'A',
    'Kontrollet e bazuara në imazh duhet të ekspozojnë një emër të aksesueshëm që përshkruan veprimin (p.sh., “Search”).',
    {
        type: 'images',
        note: 'Shembuj për 1.1.1b   Kontrollet & inputet',
        items: [
            {
                id: 'pass',
                uri: require('../assets/examples/pass_1_1_1_b.png'),
                alt: 'Buton me ikonë lupë i etiketuar “Search”',
                caption: 'Buton ikone i etiketuar sipas funksionit, jo pamjes.',
                isPassing: true,
            },
            {
                id: 'fail',
                uri: require('../assets/examples/fail_1_1_1_b.png'),
                alt: 'Buton ikonë pa emër të aksesueshëm',
                caption: 'Mbështetet vetëm në ikonë; pa emër të aksesueshëm.',
                isPassing: false,
            },
        ],
    },
    {
        understandingUrl: 'https://www.w3.org/WAI/WCAG21/Understanding/non-text-content.html',
        specUrl: 'https://www.w3.org/TR/WCAG21/#non-text-content',
    }
);

const sc_1_1_1c = new SuccessCriterion(
    '1.1.1c',
    'Imazhe Dekorative',
    'A',
    'Imazhet thjesht dekorative duhet të fshihen nga teknologjitë ndihmëse (alt bosh / jo të fokusueshme).',
    {
        type: 'images',
        note: 'Shembuj për 1.1.1c   Imazhe dekorative',
        items: [
            {
                id: 'pass',
                uri: require('../assets/examples/pass_1_1_1_c.png'),
                alt: '',
                caption: 'Dekori injorohet nga AT (alt bosh).',
                isPassing: true,
            },
            {
                id: 'fail',
                uri: require('../assets/examples/fail_1_1_1_c.png'),
                alt: 'Ilustrim dekorativ i ekspozuar te Teknologjitë Ndihmëse',
                caption: 'Imazhi dekorativ njoftohet pa nevojë.',
                isPassing: false,
            },
        ],
    },
    {
        understandingUrl: 'https://www.w3.org/WAI/WCAG21/Understanding/non-text-content.html',
        specUrl: 'https://www.w3.org/TR/WCAG21/#non-text-content',
    }
);

const quiz_1_1 = new Quiz('1.1', [
    {
        id: 'q1',
        stem: 'Çfarë duhet të përfshijnë imazhet domethënëse për të plotësuar 1.1.1?',
        options: [
            { id: 'a', label: 'Alt tekst përshkrues', isCorrect: true },
            { id: 'b', label: 'Emrin e skedarit si alt', isCorrect: false },
            { id: 'c', label: 'Pa alt tekst', isCorrect: false },
        ],
    },
    {
        id: 'q2',
        stem: 'Si duhet trajtuar një imazh thjesht dekorativ?',
        options: [
            { id: 'a', label: 'Alt tekst “decorative”', isCorrect: false },
            { id: 'b', label: 'Alt bosh (alt="") ose i fshehur nga AT', isCorrect: true },
            { id: 'c', label: 'Përshkruaj në detaje stilin', isCorrect: false },
        ],
    },
    {
        id: 'q3',
        stem: 'Një imazh përdoret si buton Kërkimi (ikonë lupë). Alternativa tekstuale duhet…',
        options: [
            { id: 'a', label: 'Të lihet bosh', isCorrect: false },
            { id: 'b', label: 'Të përshkruajë formën e ikonës', isCorrect: false },
            { id: 'c', label: 'Të emërtojë funksionin: “Search”', isCorrect: true },
        ],
    },
    {
        id: 'q4',
        stem: 'Një grafik përcjell të dhëna të rëndësishme. Qasja më e mirë për 1.1.1?',
        options: [
            { id: 'a', label: 'Alt shumë i gjatë me të gjitha numrat', isCorrect: false },
            { id: 'b', label: 'Ofrimi i një përmbledhjeje tekstuale ose tabele me të dhëna', isCorrect: true },
            { id: 'c', label: 'Të mbështetesh vetëm te ndryshimet e ngjyrës', isCorrect: false },
        ],
    },
    {
        id: 'q5',
        stem: 'Cili alt tekst është i pranueshëm për një logo kompanie që lidh te faqja kryesore?',
        options: [
            { id: 'a', label: 'Emri i kompanisë (p.sh., “Acme Home”)', isCorrect: true },
            { id: 'b', label: 'IMG_00321.png', isCorrect: false },
            { id: 'c', label: 'Logo', isCorrect: false },
        ],
    },
]);

const g_1_1 = new Guideline(
    '1.1',
    'Alternativa Tekstuale',
    'Ofroni alternativa tekstuale për përmbajtjen jo-tekst.',
    [sc_1_1_1a, sc_1_1_1b, sc_1_1_1c],
    quiz_1_1
);


/* ---------- Guideline 1.2   Time-based Media  ---------- */
const sc_1_2_1 = new SuccessCriterion(
    '1.2.1',
    'Vetëm audio dhe vetëm video (të regjistruara)',
    'A',
    'Ofroni alternativa për përmbajtjen e regjistruar vetëm audio dhe vetëm video.',
    {
        type: '',
        note: 'Shembuj për SC 1.2.1',
        items: [
            { id: 'pass', uri: 'pass_1_2_1.png', alt: 'Transkript për skedarin audio', caption: 'Transkripti e bën audion të aksesueshme', isPassing: true },
            { id: 'fail', uri: 'fail_1_2_1.png', alt: 'Skedar audio pa transkript', caption: 'Nuk është ofruar alternativë', isPassing: false },
        ],
    },
    {
        understandingUrl: 'https://www.w3.org/WAI/WCAG21/Understanding/audio-only-and-video-only-prerecorded.html',
        specUrl: 'https://www.w3.org/TR/WCAG21/#audio-only-and-video-only-prerecorded',
    }
);

const sc_1_2_2 = new SuccessCriterion(
    '1.2.2',
    'Titrat (të regjistruara)',
    'A',
    'Ofroni titra për përmbajtjen audio të regjistruar brenda medias së sinkronizuar.',
    {
        type: '',
        note: 'Shembuj për SC 1.2.2',
        items: [
            { id: 'pass', uri: 'pass_1_2_2.png', alt: 'Video me titra', caption: 'Titra të shfaqur për përmbajtjen e folur', isPassing: true },
            { id: 'fail', uri: 'fail_1_2_2.png', alt: 'Video pa titra', caption: 'Nuk ka titra të disponueshëm', isPassing: false },
        ],
    },
    {
        understandingUrl: 'https://www.w3.org/WAI/WCAG21/Understanding/captions-prerecorded.html',
        specUrl: 'https://www.w3.org/TR/WCAG21/#captions-prerecorded',
    }
);

const sc_1_2_3 = new SuccessCriterion(
    '1.2.3',
    'Përshkrim audio ose alternativë mediatike (të regjistruara)',
    'A',
    'Ofroni përshkrim audio ose një alternativë mediatike për përmbajtjen video.',
    {
        type: '',
        note: 'Shembuj për SC 1.2.3',
        items: [
            { id: 'pass', uri: 'pass_1_2_3.png', alt: 'Në dispozicion pista e përshkrimit audio', caption: 'Përshkrimi audio shpjegon vizualet', isPassing: true },
            { id: 'fail', uri: 'fail_1_2_3.png', alt: 'Pa pistë të përshkrimit audio', caption: 'Vizualet e rëndësishme nuk përshkruhen', isPassing: false },
        ],
    },
    {
        understandingUrl: 'https://www.w3.org/WAI/WCAG21/Understanding/audio-description-or-media-alternative-prerecorded.html',
        specUrl: 'https://www.w3.org/TR/WCAG21/#audio-description-or-media-alternative-prerecorded',
    }
);

const g_1_2 = new Guideline(
    '1.2',
    'Media e bazuar në kohë',
    'Ofroni alternativa për median e bazuar në kohë që informacioni të jetë i aksesueshëm.',
    [sc_1_2_1, sc_1_2_2, sc_1_2_3],
    null
);

/* ---------- Guideline 1.3 — Adaptable (3 SC) ---------- */
const sc_1_3_1 = new SuccessCriterion(
    '1.3.1',
    'Informacioni dhe Marrëdhëniet',
    'A',
    'Përdorni strukturë/semantikë që informacioni dhe marrëdhëniet të jenë të përcaktueshme programatikisht.',
    {
        type: '',
        note: 'Shembuj për SC 1.3.1',
        items: [
            { id: 'pass', uri: 'pass_1_3_1.png', alt: 'Tabelë me headers', caption: 'Marrëdhëniet përcillen programatikisht', isPassing: true },
            { id: 'fail', uri: 'fail_1_3_1.png', alt: 'Tabelë pa headers', caption: 'Marrëdhëniet nuk janë të qarta për AT', isPassing: false },
        ],
    },
    {
        understandingUrl: 'https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html',
        specUrl: 'https://www.w3.org/TR/WCAG21/#info-and-relationships',
    }
);

const sc_1_3_2 = new SuccessCriterion(
    '1.3.2',
    'Rend i Kuptimshëm',
    'A',
    'Kur rendi ndikon në kuptim, rendi i leximit duhet të jetë i përcaktueshëm programatikisht.',
    {
        type: '',
        note: 'Shembuj për SC 1.3.2',
        items: [
            { id: 'pass', uri: 'pass_1_3_2.png', alt: 'Rend logjik i titujve', caption: 'Rendi i leximit është logjik', isPassing: true },
            { id: 'fail', uri: 'fail_1_3_2.png', alt: 'Rendi vizual ndryshon nga DOM-i', caption: 'Rendi programatik i gabuar', isPassing: false },
        ],
    },
    {
        understandingUrl: 'https://www.w3.org/WAI/WCAG21/Understanding/meaningful-sequence.html',
        specUrl: 'https://www.w3.org/TR/WCAG21/#meaningful-sequence',
    }
);

const sc_1_3_3 = new SuccessCriterion(
    '1.3.3',
    'Karakteristikat shqisore',
    'A',
    'Udhëzimet nuk duhet të mbështeten vetëm në formë, vendndodhje, ngjyrë ose tingull.',
    {
        type: '',
        note: 'Shembuj për SC 1.3.3',
        items: [
            { id: 'pass', uri: 'pass_1_3_3.png', alt: 'Tekst + ikona si sinjale', caption: 'Përdoren shumë sinjale, jo vetëm ngjyra', isPassing: true },
            { id: 'fail', uri: 'fail_1_3_3.png', alt: '“Shtyp butonin jeshil”', caption: 'Udhëzimi mbështetet vetëm te ngjyra', isPassing: false },
        ],
    },
    {
        understandingUrl: 'https://www.w3.org/WAI/WCAG21/Understanding/sensory-characteristics.html',
        specUrl: 'https://www.w3.org/TR/WCAG21/#sensory-characteristics',
    }
);

const g_1_3 = new Guideline(
    '1.3',
    'I përshtatshëm',
    'Krijoni përmbajtje që mund të paraqitet në mënyra të ndryshme pa humbur informacion ose strukturë.',
    [sc_1_3_1, sc_1_3_2, sc_1_3_3],
    null
);

const sc_1_4_2 = new SuccessCriterion(
    '1.4.2',
    'Kontrolli i audios',
    'A',
    'Nëse audio luhet automatikisht për më shumë se 3 sekonda, siguroni një mënyrë për pauzim, ndalim ose kontroll volumi.',
    {
        type: '',
        note: 'Shembuj për SC 1.4.2',
        items: [
            { id: 'pass', uri: 'pass_1_4_2.png', alt: 'I pranishëm kontrolli i audios', caption: 'Përdoruesi mund të ndalojë ose të pauzojë', isPassing: true },
            { id: 'fail', uri: 'fail_1_4_2.png', alt: 'Audio auto-play pa kontrolle', caption: 'Pa kontroll përdoruesi mbi audion', isPassing: false },
        ],
    },
    {
        understandingUrl: 'https://www.w3.org/WAI/WCAG21/Understanding/audio-control.html',
        specUrl: 'https://www.w3.org/TR/WCAG21/#audio-control',
    }
);

const sc_1_4_1 = new SuccessCriterion(
    '1.4.1',
    'Përdorimi i ngjyrës',
    'A',
    'Mos u mbështet vetëm te ngjyra për të përcjellë informacion. Ofroni tekst, ikonë ose model si sinjal shtesë.',
    {
        type: '',
        note: 'Shembuj për SC 1.4.1',
        items: [
            {
                id: 'pass',
                uri: 'https://picsum.photos/seed/useofcolor-pass/400/240',
                alt: 'Lidhje me ikonë dhe etiketë të dukshme',
                caption: 'Jo vetëm ngjyrë (ka ikonë/tekst)',
                isPassing: true,
            },
            {
                id: 'fail',
                uri: 'https://picsum.photos/seed/useofcolor-fail/400/240',
                alt: 'Lidhje që ndryshon vetëm ngjyrën pa tekst apo ikonë',
                caption: 'Sinjal vetëm me ngjyrë',
                isPassing: false,
            },
        ],
    },
    {
        understandingUrl: 'https://www.w3.org/WAI/WCAG21/Understanding/use-of-color.html',
        specUrl: 'https://www.w3.org/TR/WCAG21/#use-of-color',
    }
);

const sc_1_4_3 = new SuccessCriterion(
    '1.4.3',
    'Kontrast (Minimal)',
    'AA',
    'Teksti me madhësi normale duhet të ketë të paktën 4.5:1 kontrast. Teksti i madh (≥18pt normal ose ≥14pt bold) mund të ketë 3:1.',
    {
        type: '',
        note: 'Shembuj për SC 1.4.3',
        items: [
            {
                id: 'pass',
                uri: 'https://picsum.photos/seed/contrast-pass/400/240',
                alt: 'Tekst gri e errët mbi sfond të bardhë',
                caption: 'Kaloi: 4.8:1 ≥ 4.5:1',
                isPassing: true,
            },
            {
                id: 'fail',
                uri: 'https://picsum.photos/seed/contrast-fail/400/240',
                alt: 'Tekst gri e çelët mbi sfond të bardhë',
                caption: 'Dështoi: 2.2:1 < 4.5:1',
                isPassing: false,
            },
        ],
    },
    {
        understandingUrl: 'https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html',
        specUrl: 'https://www.w3.org/TR/WCAG21/#contrast-minimum',
    }
);


const quiz_1_4 = new Quiz('1.4', [
    {
        id: 'q1',
        stem: 'Cili është raporti minimal i kontrastit për tekstin e zakonshëm për të përmbushur AA?',
        options: [
            { id: 'a', label: '3:1', isCorrect: false },
            { id: 'b', label: '4.5:1', isCorrect: true },
            { id: 'c', label: '7:1', isCorrect: false },
        ],
    },
    {
        id: 'q2',
        stem: 'Përdorimi vetëm i ngjyrës për të treguar “e detyrueshme” në një fushë formulari është…',
        options: [
            { id: 'a', label: 'Në rregull nëse ngjyra është e kuqe', isCorrect: false },
            { id: 'b', label: 'Jo i mjaftueshëm për WCAG 1.4.1', isCorrect: true },
            { id: 'c', label: 'I lejuar vetëm në celular', isCorrect: false },
        ],
    },
    {
        id: 'q3',
        stem: 'Teksti i madh (18pt ose 14pt bold) duhet të ketë të paktën çfarë kontrasti për AA?',
        options: [
            { id: 'a', label: '3:1', isCorrect: true },
            { id: 'b', label: '4.5:1', isCorrect: false },
            { id: 'c', label: '7:1', isCorrect: false },
        ],
    },
    {
        id: 'q4',
        stem: 'Teksti i madh (18pt ose 14pt bold) duhet të ketë të paktën çfarë kontrasti për AA?',
        options: [
            { id: 'a', label: '3:1', isCorrect: true },
            { id: 'b', label: '4.5:1', isCorrect: false },
            { id: 'c', label: '7:1', isCorrect: false },
        ],
    },
    {
        id: 'q5',
        stem: 'Teksti i madh (18pt ose 14pt bold) duhet të ketë të paktën çfarë kontrasti për AA?',
        options: [
            { id: 'a', label: '3:1', isCorrect: true },
            { id: 'b', label: '4.5:1', isCorrect: false },
            { id: 'c', label: '7:1', isCorrect: false },
        ],
    },
]);

const g_1_4 = new Guideline(
    '1.4',
    'I dallueshëm',
    'Bëjeni më të lehtë për përdoruesit të shohin dhe të dëgjojnë përmbajtjen.',
    [sc_1_4_1, sc_1_4_2, sc_1_4_3],
    quiz_1_4
);

const p1 = new Principle(
    '1',
    'I perceptueshëm',
    'Informacioni dhe komponentët e UI duhet të paraqiten në mënyra që përdoruesit t’i perceptojnë.',
    [g_1_1, g_1_2, g_1_3, g_1_4]
);


/*                                PRINCIPLE 2                                 */

/* ---------- 2.1 Keyboard Accessible ---------- */
const sc_2_1_1 = new SuccessCriterion(
    '2.1.1',
    'Tastiera',
    'A',
    'E gjithë funksionaliteti është i disponueshëm nga tastiera.',
    {
        type: '',
        note: 'Shembuj për SC 2.1.1',
        items: [
            { id: 'pass', uri: 'pass_2_1_1.png', alt: 'Kontrolle interaktive të përdorshme me tastierë', caption: 'Aksesi i plotë me tastierë', isPassing: true },
            { id: 'fail', uri: 'fail_2_1_1.png', alt: 'Kontroll që klikohet vetëm me mi', caption: 'Kurth tastiere ose pa akses', isPassing: false },
        ],
    },
    {
        understandingUrl: 'https://www.w3.org/WAI/WCAG21/Understanding/keyboard.html',
        specUrl: 'https://www.w3.org/TR/WCAG21/#keyboard',
    }
);

const sc_2_1_2 = new SuccessCriterion(
    '2.1.2',
    'Pa Kurth Tastiere',
    'A',
    'Fokusi i tastierës nuk bllokohet te asnjë komponent.',
    {
        type: '',
        note: 'Shembuj për SC 2.1.2',
        items: [
            { id: 'pass', uri: 'pass_2_1_2.png', alt: 'Dialog me fokus që mund të largohet', caption: 'Fokusi lëviz brenda dhe jashtë', isPassing: true },
            { id: 'fail', uri: 'fail_2_1_2.png', alt: 'Fokusi ngec në një widget', caption: 'Nuk mund të dilet me tastierë', isPassing: false },
        ],
    },
    {
        understandingUrl: 'https://www.w3.org/WAI/WCAG21/Understanding/no-keyboard-trap.html',
        specUrl: 'https://www.w3.org/TR/WCAG21/#no-keyboard-trap',
    }
);

const sc_2_1_4 = new SuccessCriterion(
    '2.1.4',
    'Shkurtore me Taste Karaktere',
    'A',
    'Shkurtoret me një tast karakter mund të çaktivizohen, ri-mapohen, ose të jenë aktive vetëm kur kontrolli ka fokus.',
    {
        type: '',
        note: 'Shembuj për SC 2.1.4',
        items: [
            { id: 'pass', uri: 'pass_2_1_4.png', alt: 'UI për personalizim shkurtoreje', caption: 'Shkurtoret mund të ri-mapohen', isPassing: true },
            { id: 'fail', uri: 'fail_2_1_4.png', alt: 'Shkurtore globale me një tast', caption: 'Pa mënyrë për çaktivizim/ri-mapim', isPassing: false },
        ],
    },
    {
        understandingUrl: 'https://www.w3.org/WAI/WCAG21/Understanding/character-key-shortcuts.html',
        specUrl: 'https://www.w3.org/TR/WCAG21/#character-key-shortcuts',
    }
);

const g_2_1 = new Guideline(
    '2.1',
    'I aksesueshëm me tastierë',
    'Bëni të gjithë funksionalitetin të disponueshëm nga tastiera.',
    [sc_2_1_1, sc_2_1_2, sc_2_1_4],
    null
);

/* ---------- 2.2 Enough Time ---------- */
const sc_2_2_1 = new SuccessCriterion(
    '2.2.1',
    'Kohë e Rregullueshme',
    'A',
    'Ofroni mundësi për të fikur, rregulluar ose zgjatur kufijtë kohorë.',
    {
        type: '',
        note: 'Shembuj për SC 2.2.1',
        items: [
            { id: 'pass', uri: 'pass_2_2_1.png', alt: 'Dialog për zgjatje të sesionit', caption: 'Zgjat kohën para skadimit', isPassing: true },
            { id: 'fail', uri: 'fail_2_2_1.png', alt: 'Skadim pa njoftim', caption: 'Përdoruesi humb punën pa paralajmërim', isPassing: false },
        ],
    },
    {
        understandingUrl: 'https://www.w3.org/WAI/WCAG21/Understanding/timing-adjustable.html',
        specUrl: 'https://www.w3.org/TR/WCAG21/#timing-adjustable',
    }
);

const sc_2_2_2 = new SuccessCriterion(
    '2.2.2',
    'Pauzo, Ndal, Fshihe',
    'A',
    'Përmbajtja që lëviz, pulson, rrëshqet ose përditësohet automatikisht mund të pauzohet, ndalet ose fshihet.',
    {
        type: '',
        note: 'Shembuj për SC 2.2.2',
        items: [
            { id: 'pass', uri: 'pass_2_2_2.png', alt: 'Karusel me kontroll pauze', caption: 'Përdoruesi mund të ndalë animacionin', isPassing: true },
            { id: 'fail', uri: 'fail_2_2_2.png', alt: 'Karusel auto-rrotullues', caption: 'Pa kontroll pauzë/ndalim/fshih', isPassing: false },
        ],
    },
    {
        understandingUrl: 'https://www.w3.org/WAI/WCAG21/Understanding/pause-stop-hide.html',
        specUrl: 'https://www.w3.org/TR/WCAG21/#pause-stop-hide',
    }
);

const sc_2_2_6 = new SuccessCriterion(
    '2.2.6',
    'Skadimet (Timeouts)',
    'Users are warned of any inactivity timeout that could result in data loss.',
    {
        type: '',
        note: 'Shembuj për SC 2.2.6 (informativ opsional)',
        items: [
            { id: 'pass', uri: 'pass_2_2_6.png', alt: 'Njoftim për skadim të afërt', caption: 'Përdoruesi paralajmërohet para skadimit', isPassing: true },
            { id: 'fail', uri: 'fail_2_2_6.png', alt: 'Pa njoftim skadimi', caption: 'Humbje e papritur e të dhënave', isPassing: false },
        ],
    },
    {
        understandingUrl: 'https://www.w3.org/WAI/WCAG21/Understanding/timeouts.html',
        specUrl: 'https://www.w3.org/TR/WCAG21/#timeouts',
    }
);

const g_2_2 = new Guideline(
    '2.2',
    'Mjaft kohë',
    'Jepuni përdoruesve kohë të mjaftueshme për të lexuar dhe ndërvepruar.',
    [sc_2_2_1, sc_2_2_2 /*, sc_2_2_6 */],
    null
);

/* ---------- 2.3 Seizures and Physical Reactions ---------- */
const sc_2_3_1 = new SuccessCriterion(
    '2.3.1',
    'Tre Shkëlqime ose Nën Prag',
    'A',
    'Përmbajtja nuk shkëlqen më shumë se tre herë në sekondë, ose është nën pragjet e përgjithshme të shkëlqimit.',
    {
        type: '',
        note: 'Shembuj për SC 2.3.1',
        items: [
            { id: 'pass', uri: 'pass_2_3_1.png', alt: 'Pa shkëlqime', caption: 'Pa shkëlqime që shkaktojnë kriza', isPassing: true },
            { id: 'fail', uri: 'fail_2_3_1.png', alt: 'Përmbajtje me shkëlqime të shpejta', caption: 'Shkëlqimet tejkalojnë pragun', isPassing: false },
        ],
    },
    {
        understandingUrl: 'https://www.w3.org/WAI/WCAG21/Understanding/three-flashes-or-below-threshold.html',
        specUrl: 'https://www.w3.org/TR/WCAG21/#three-flashes-or-below-threshold',
    }
);

const sc_2_3_3 = new SuccessCriterion(
    '2.3.3',
    'Animacion nga Ndërveprimet',
    'AAA',
    'Animacioni i lëvizjes i shkaktuar nga ndërveprimi mund të çaktivizohet.',
    {
        type: '',
        note: 'Shembuj për SC 2.3.3 ',
        items: [
            { id: 'pass', uri: 'pass_2_3_3.png', alt: 'Cilësim për reduktim të lëvizjes', caption: 'Përdoruesi mund ta çaktivizojë lëvizjen', isPassing: true },
            { id: 'fail', uri: 'fail_2_3_3.png', alt: 'Pa kontroll mbi lëvizjen', caption: 'Lëvizja nuk mund të çaktivizohet', isPassing: false },
        ],
    },
    {
        understandingUrl: 'https://www.w3.org/WAI/WCAG21/Understanding/animation-from-interactions.html',
        specUrl: 'https://www.w3.org/TR/WCAG21/#animation-from-interactions',
    }
);

const g_2_3 = new Guideline(
    '2.3',
    'Kriza dhe reagime fizike',
    'Mos dizajnoni përmbajtje që shkakton kriza ose reagime fizike.',
    [sc_2_3_1],
    null
);

/* ---------- 2.4 Navigable ---------- */
const sc_2_4_1 = new SuccessCriterion(
    '2.4.1',
    'Anashkalo Blloqet',
    'A',
    'Siguroni një mënyrë për të anashkaluar blloqet e përmbajtjes së përsëritur.',
    {
        type: '',
        note: 'Shembuj për SC 2.4.1',
        items: [
            { id: 'pass', uri: 'pass_2_4_1.png', alt: 'Lidhje “Kalo te përmbajtja” e dukshme në fokus', caption: 'Anashkalo navigimin e përsëritur', isPassing: true },
            { id: 'fail', uri: 'fail_2_4_1.png', alt: 'Pa lidhje për anashkalim', caption: 'Përdoruesit duhet të tabojnë gjithçka', isPassing: false },
        ],
    },
    {
        understandingUrl: 'https://www.w3.org/WAI/WCAG21/Understanding/bypass-blocks.html',
        specUrl: 'https://www.w3.org/TR/WCAG21/#bypass-blocks',
    }
);

const sc_2_4_3 = new SuccessCriterion(
    '2.4.3',
    'Rendi i Fokusit',
    'A',
    'Nëse faqja navigohet në mënyrë sekvenciale dhe rendi ndikon në kuptim, rendi i fokusit ruan kuptimin.',
    {
        type: '',
        note: 'Shembuj për SC 2.4.3',
        items: [
            { id: 'pass', uri: 'pass_2_4_3.png', alt: 'Rend logjik i tabimit', caption: 'Rend i kuptimshëm i fokusit', isPassing: true },
            { id: 'fail', uri: 'fail_2_4_3.png', alt: 'Rend i çrregullt i tabimit', caption: 'Fokusi lëviz në mënyrë të paparashikueshme', isPassing: false },
        ],
    },
    {
        understandingUrl: 'https://www.w3.org/WAI/WCAG21/Understanding/focus-order.html',
        specUrl: 'https://www.w3.org/TR/WCAG21/#focus-order',
    }
);

const sc_2_4_5 = new SuccessCriterion(
    '2.4.5',
    'Mënyra të Shumta',
    'AA',
    'Ofroni më shumë se një mënyrë për të gjetur një faqe (përveç kur është një hap në një proces).',
    {
        type: '',
        note: 'Shembuj për SC 2.4.5',
        items: [
            { id: 'pass', uri: 'pass_2_4_5.png', alt: 'Kërkim, hartë faqeje dhe navigim', caption: 'Mënyra të shumta për të gjetur faqet', isPassing: true },
            { id: 'fail', uri: 'fail_2_4_5.png', alt: 'Vetëm një metodë navigimi', caption: 'Qasje e ngushtë me një rrugë', isPassing: false },
        ],
    },
    {
        understandingUrl: 'https://www.w3.org/WAI/WCAG21/Understanding/multiple-ways.html',
        specUrl: 'https://www.w3.org/TR/WCAG21/#multiple-ways',
    }
);

const g_2_4 = new Guideline(
    '2.4',
    'I navigueshëm',
    'Ndihmoni përdoruesit të navigojnë, të gjejnë përmbajtje dhe të kuptojnë ku ndodhen.',
    [sc_2_4_1, sc_2_4_3, sc_2_4_5],
    null
);

/* ---------- 2.5 Input Modalities ---------- */
const sc_2_5_1 = new SuccessCriterion(
    '2.5.1',
    'Gjeste me tregues (pointer)',
    'A',
    'Çdo funksionalitet që përdor gjeste komplekse mund të operohet me një tregues të vetëm pa gjeste të bazuara në trajektore.',
    {
        type: '',
        note: 'Shembuj për SC 2.5.1',
        items: [
            { id: 'pass', uri: 'pass_2_5_1.png', alt: 'Alternativë ndaj pinch-zoom', caption: 'Ofroni alternativë të thjeshtë me tregues', isPassing: true },
            { id: 'fail', uri: 'fail_2_5_1.png', alt: 'Vetëm gjest i bazuar në trajektore', caption: 'Pa alternativë të thjeshtë', isPassing: false },
        ],
    },
    {
        understandingUrl: 'https://www.w3.org/WAI/WCAG21/Understanding/pointer-gestures.html',
        specUrl: 'https://www.w3.org/TR/WCAG21/#pointer-gestures',
    }
);

const sc_2_5_2 = new SuccessCriterion(
    '2.5.2',
    'Anulimi i treguesit',
    'A',
    'Për funksionalitetin që operohet me një tregues të vetëm, të paktën një nga: pa aktivizim në down-event, abort/anulim ose zhbërje.',
    {
        type: '',
        note: 'Shembuj për SC 2.5.2',
        items: [
            { id: 'pass', uri: 'pass_2_5_2.png', alt: 'Konfirmim para prekjes destruktive', caption: 'Lejo anulim/zhbërje', isPassing: true },
            { id: 'fail', uri: 'fail_2_5_2.png', alt: 'Veprimi përfundon në touch down', caption: 'Pa mundësi anulimi', isPassing: false },
        ],
    },
    {
        understandingUrl: 'https://www.w3.org/WAI/WCAG21/Understanding/pointer-cancellation.html',
        specUrl: 'https://www.w3.org/TR/WCAG21/#pointer-cancellation',
    }
);

const sc_2_5_3 = new SuccessCriterion(
    '2.5.3',
    'Etiketa në Emër',
    'A',
    'Emri i aksesueshëm përmban tekstin e paraqitur vizualisht për komponentët e UI me etiketa.',
    {
        type: '',
        note: 'Shembuj për SC 2.5.3',
        items: [
            { id: 'pass', uri: 'pass_2_5_3.png', alt: 'Buton “Search” dhe emri përfshin “Search”', caption: 'Etiketa e dukshme përputhet me emrin', isPassing: true },
            { id: 'fail', uri: 'fail_2_5_3.png', alt: 'Butoni shfaq “Search” por emri është “Go”', caption: 'Mospërputhja ngatërron përdoruesit me zë', isPassing: false },
        ],
    },
    {
        understandingUrl: 'https://www.w3.org/WAI/WCAG21/Understanding/label-in-name.html',
        specUrl: 'https://www.w3.org/TR/WCAG21/#label-in-name',
    }
);

const g_2_5 = new Guideline(
    '2.5',
    'Modalitete të hyrjes',
    'Bëjeni më të lehtë që përdoruesit të operojnë funksionalitetin përmes mënyrave të ndryshme inputi, përtej tastierës.',
    [sc_2_5_1, sc_2_5_2, sc_2_5_3],
    null
);

/* Principle 2 bundle */
const p2 = new Principle(
    '2',
    'I operueshëm',
    'Komponentët e ndërfaqes dhe navigimi duhet të jenë të operueshëm.',
    [g_2_1, g_2_2, g_2_3, g_2_4, g_2_5]
);

/*                               PRINCIPLE 3                                  */

/* ---------- 3.1 Readable ---------- */
const sc_3_1_1 = new SuccessCriterion(
    '3.1.1',
    'Gjuha e Faqes',
    'A',
    'Gjuha e parazgjedhur e faqes mund të përcaktohet programatikisht.',
    {
        type: '',
        note: 'Shembuj për SC 3.1.1',
        items: [
            { id: 'pass', uri: 'pass_3_1_1.png', alt: 'Atributi lang i vendosur në html', caption: 'Gjuha primare është deklaruar', isPassing: true },
            { id: 'fail', uri: 'fail_3_1_1.png', alt: 'Pa atribut lang', caption: 'Gjuha nuk është deklaruar', isPassing: false },
        ],
    },
    {
        understandingUrl: 'https://www.w3.org/WAI/WCAG21/Understanding/language-of-page.html',
        specUrl: 'https://www.w3.org/TR/WCAG21/#language-of-page',
    }
);

const sc_3_1_2 = new SuccessCriterion(
    '3.1.2',
    'Gjuha e Pjesëve',
    'AA',
    'Gjuha njerëzore e çdo pasazhi apo fraze mund të përcaktohet programatikisht.',
    {
        type: '',
        note: 'Shembuj për SC 3.1.2',
        items: [
            { id: 'pass', uri: 'pass_3_1_2.png', alt: 'Fraza inline e shënuar lang="es"', caption: 'Ndryshimet e gjuhës janë të markuara', isPassing: true },
            { id: 'fail', uri: 'fail_3_1_2.png', alt: 'Fraza e huaj pa shenjim', caption: 'AT nuk mund të ndryshojë gjuhën', isPassing: false },
        ],
    },
    {
        understandingUrl: 'https://www.w3.org/W3C/WAI/WCAG21/Understanding/language-of-parts.html',
        specUrl: 'https://www.w3.org/TR/WCAG21/#language-of-parts',
    }
);

const sc_3_1_6 = new SuccessCriterion(
    '3.1.6',
    'Shqiptimi',
    'AAA',
    'Ofroni shqiptim aty ku nevojitet për të sqaruar kuptimin.',
    null,
    null
);

const g_3_1 = new Guideline(
    '3.1',
    'I lexueshëm',
    'Bëni që përmbajtja tekstuale të jetë e lexueshme dhe e kuptueshme.',
    [sc_3_1_1, sc_3_1_2],
    null
);

/* ---------- 3.2 Predictable ---------- */
const sc_3_2_1 = new SuccessCriterion(
    '3.2.1',
    'Në Fokus',
    'A',
    'Kur një komponent merr fokus, ai nuk nxit ndryshim konteksti.',
    {
        type: '',
        note: 'Shembuj për SC 3.2.1',
        items: [
            { id: 'pass', uri: 'pass_3_2_1.png', alt: 'Fokusi nuk shkakton navigim', caption: 'Fokusi është pasiv', isPassing: true },
            { id: 'fail', uri: 'fail_3_2_1.png', alt: 'Fokusi shkakton ndryshim faqeje', caption: 'Ndryshim i papritur i kontekstit', isPassing: false },
        ],
    },
    {
        understandingUrl: 'https://www.w3.org/WAI/WCAG21/Understanding/on-focus.html',
        specUrl: 'https://www.w3.org/TR/WCAG21/#on-focus',
    }
);

const sc_3_2_2 = new SuccessCriterion(
    '3.2.2',
    'Në Input',
    'A',
    'Ndryshimi i cilësimit të një komponenti UI nuk duhet të shkaktojë automatikisht ndryshim konteksti, përveçse kur paralajmërohet.',
    {
        type: '',
        note: 'Shembuj për SC 3.2.2',
        items: [
            { id: 'pass', uri: 'pass_3_2_2.png', alt: 'Input kërkon submit eksplicit', caption: 'Pa auto-ridrejtim në ndryshim', isPassing: true },
            { id: 'fail', uri: 'fail_3_2_2.png', alt: 'Select që navigon automatikisht', caption: 'Ndryshimi shkakton kalim konteksti', isPassing: false },
        ],
    },
    {
        understandingUrl: 'https://www.w3.org/WAI/WCAG21/Understanding/on-input.html',
        specUrl: 'https://www.w3.org/TR/WCAG21/#on-input',
    }
);

const sc_3_2_3 = new SuccessCriterion(
    '3.2.3',
    'Navigim i qëndrueshëm',
    'AA',
    'Komponentët e navigimit të përsëritur shfaqen në të njëjtin rend relativ nëpër faqe.',
    {
        type: '',
        note: 'Shembuj për SC 3.2.3',
        items: [
            { id: 'pass', uri: 'pass_3_2_3.png', alt: 'Header me navigim të qëndrueshëm', caption: 'I njëjti rend relativ në çdo faqe', isPassing: true },
            { id: 'fail', uri: 'fail_3_2_3.png', alt: 'Header që ndryshon rendin sipas faqes', caption: 'Rend jo i qëndrueshëm i navigimit', isPassing: false },
        ],
    },
    {
        understandingUrl: 'https://www.w3.org/WAI/WCAG21/Understanding/consistent-navigation.html',
        specUrl: 'https://www.w3.org/TR/WCAG21/#consistent-navigation',
    }
);

const g_3_2 = new Guideline(
    '3.2',
    'I parashikueshëm',
    'Bëni që faqet të duken dhe të funksionojnë në mënyrë të parashikueshme.',
    [sc_3_2_1, sc_3_2_2, sc_3_2_3],
    null
);

/* ---------- 3.3 Input Assistance ---------- */
const sc_3_3_1 = new SuccessCriterion(
    '3.3.1',
    'Identifikimi i Gabimit',
    'A',
    'Nëse një gabim inputi zbulohet automatikisht, elementi në gabim identifikohet dhe gabimi përshkruhet për përdoruesin.',
    {
        type: 'images',
        note: 'Shembuj për SC 3.3.1',
        items: [
            { id: 'pass', uri: require('../assets/examples/pass_3_3_1.png'), alt: 'Gabim inline me tekst', caption: 'Gabimi identifikohet dhe përshkruhet', isPassing: true },
            { id: 'fail', uri: require('../assets/examples/fail_3_3_1.png'), alt: 'Vetëm kufi i kuq', caption: 'Mbështetet vetëm te ngjyra, pa mesazh', isPassing: false },
        ],
    },
    {
        understandingUrl: 'https://www.w3.org/WAI/WCAG21/Understanding/error-identification.html',
        specUrl: 'https://www.w3.org/TR/WCAG21/#error-identification',
    }
);

const sc_3_3_2 = new SuccessCriterion(
    '3.3.2',
    'Etiketa ose Udhëzime',
    'A',
    'Ofroni etiketa ose udhëzime kur përmbajtja kërkon input nga përdoruesi.',
    {
        type: 'image',
        note: 'Shembull për SC 3.3.2',
        item:
            { id: 'pass', uri: require('../assets/examples/pass_3_3_1.png'), alt: 'Etiketa të pranishme në formular', caption: 'Etiketa të qarta dhe të lidhura', isPassing: true }
        ,
    },
    {
        understandingUrl: 'https://www.w3.org/WAI/WCAG21/Understanding/labels-or-instructions.html',
        specUrl: 'https://www.w3.org/TR/WCAG21/#labels-or-instructions',
    }
);

const sc_3_3_3 = new SuccessCriterion(
    '3.3.3',
    'Sugjerim për Gabimin',
    'AA',
    'Nëse një gabim inputi zbulohet automatikisht dhe dihen sugjerime për korrigjim, ato i jepen përdoruesit.',
    {
        type: 'images',
        note: 'Shembuj për SC 3.3.3',
        items: [
            { id: 'pass', uri: require('../assets/examples/pass_3_3_3.png'), alt: 'Mesazh gabimi që sugjeron formatin e vlefshëm', caption: 'Sugjerime të zbatueshme', isPassing: true },
            { id: 'fail', uri: require('../assets/examples/fail_3_3_3.png'), alt: 'Gabim gjenerik pa të dhëna', caption: 'Pa udhëzim për korrigjim', isPassing: false },
        ],
    },
    {
        understandingUrl: 'https://www.w3.org/WAI/WCAG21/Understanding/error-suggestion.html',
        specUrl: 'https://www.w3.org/TR/WCAG21/#error-suggestion',
    }
);

const quiz_3_3 = new Quiz('3.3', [
    {
        id: 'q1',
        stem: 'Një fushë e detyrueshme lihet bosh dhe përdoruesi e dërgon formularin. Për të përmbushur 3.3.1 (Identifikimi i Gabimit) duhet…',
        options: [
            { id: 'a', label: 'Të shfaqësh një toast gjenerik që diçka shkoi keq', isCorrect: false },
            { id: 'b', label: 'Të theksosh fushën dhe të përshkruash problemin pranë saj', isCorrect: true },
            { id: 'c', label: 'Të ndryshosh ngjyrën e kufirit në të kuqe pa mesazh', isCorrect: false },
        ],
    },
    {
        id: 'q2',
        stem: 'Për të plotësuar 3.3.2 (Etiketa ose Udhëzime), cila është më e mira për një fushë telefoni?',
        options: [
            { id: 'a', label: 'Ofroni një etiketë të qartë dhe shembull formati (p.sh., “Telefoni (p.sh., +355 68 000 0000)”)', isCorrect: true },
            { id: 'b', label: 'Mbështetuni vetëm te placeholder-i', isCorrect: false },
            { id: 'c', label: 'Lejoni përdoruesin të hamendësojë formatin', isCorrect: false },
        ],
    },
    {
        id: 'q3',
        stem: 'Për 3.3.3 (Sugjerim për Gabimin), përdoruesi shkruan “name@gmal.com”. Çfarë e plotëson SC-në?',
        options: [
            { id: 'a', label: 'Korrigjo automatikisht pa njoftuar përdoruesin', isCorrect: false },
            { id: 'b', label: 'Ofroni “A deshët të thoni name@gmail.com?” me rregullim me një prekje', isCorrect: true },
            { id: 'c', label: 'Vetëm thuaj “Email i pavlefshëm” pa udhëzim', isCorrect: false },
        ],
    },
    {
        id: 'q4',
        stem: 'Cili model plotëson 3.3.4 (Parandalimi i Gabimit: Ligjor, Financiar, të Dhënash) për një dërgesë të rrezikshme?',
        options: [
            { id: 'a', label: 'Shfaq një hap rishikimi/konfirmimi para finalizimit', isCorrect: true },
            { id: 'b', label: 'Dërgo menjëherë dhe shfaq një toast suksesi', isCorrect: false },
            { id: 'c', label: 'Lejo zhbërje vetëm nëse aplikacioni qëndron i hapur', isCorrect: false },
        ],
    },
    {
        id: 'q5',
        stem: 'Cila është mënyra më e mirë për ta lidhur mesazhin e gabimit me fushën e tij?',
        options: [
            { id: 'a', label: 'Vendosi të gjitha gabimet vetëm në krye të faqes', isCorrect: false },
            { id: 'b', label: 'Lidhe programatikisht tekstin e gabimit me fushën dhe vendose afër', isCorrect: true },
            { id: 'c', label: 'Përdor vetëm ngjyrë për të treguar gabimin', isCorrect: false },
        ],
    },
    {
        id: 'q6',
        stem: 'Cila qasje parandalon më mirë gabimet e inputit që në fillim?',
        options: [
            { id: 'a', label: 'Fshi etiketa për ta mbajtur UI-n të pastër', isCorrect: false },
            { id: 'b', label: 'Lejo përdoruesit të shkruajnë gjithçka dhe valido vetëm pas submit', isCorrect: false },
            { id: 'c', label: 'Përdor etiketa të qarta, këshilla formati dhe kufizime/maska inputi', isCorrect: true },

        ],
    },
]);

const g_3_3 = new Guideline(
    '3.3',
    'Asistencë në input',
    'Ndihmoni përdoruesit të shmangin dhe të korrigjojnë gabimet.',
    [sc_3_3_1, sc_3_3_2, sc_3_3_3],
    quiz_3_3
);

/* Principle 3 bundle */
const p3 = new Principle(
    '3',
    'I kuptueshëm',
    'Informacioni dhe operimi i ndërfaqes duhet të jenë të kuptueshëm.',
    [g_3_1, g_3_2, g_3_3]
);

/*                                PRINCIPLE 4                                 */

/* ---------- 4.1 Compatible ---------- */
const sc_4_1_1 = new SuccessCriterion(
    '4.1.1',
    'Parsing (Analizë sintaksore)',
    'A',
    'Siguroni që përmbajtja të përpunohet nga user agents: pa ID të dyfishta, elementë të folezuar saktë, markup i vlefshëm.',
    {
        type: '',
        note: 'Shembuj për SC 4.1.1',
        items: [
            { id: 'pass', uri: 'pass_4_1_1.png', alt: 'Markup i vlefshëm', caption: 'Pa gabime validimi', isPassing: true },
            { id: 'fail', uri: 'fail_4_1_1.png', alt: 'Etiketa të prishura', caption: 'Gabimet në markup prishin parsing-un', isPassing: false },
        ],
    },
    {
        understandingUrl: 'https://www.w3.org/WAI/WCAG21/Understanding/parsing.html',
        specUrl: 'https://www.w3.org/TR/WCAG21/#parsing',
    }
);

const sc_4_1_2 = new SuccessCriterion(
    '4.1.2',
    'Emri, Roli, Vlera',
    'A',
    'Për të gjithë komponentët e UI, emri, roli, vlera, gjendjet dhe vetitë mund të përcaktohen dhe vendosen programatikisht.',
    {
        type: '',
        note: 'Shembuj për SC 4.1.2',
        items: [
            { id: 'pass', uri: 'pass_4_1_2.png', alt: 'Kontroll me ARIA të saktë', caption: 'Ekspozon emër, rol, vlerë', isPassing: true },
            { id: 'fail', uri: 'fail_4_1_2.png', alt: 'Kontroll custom pa role', caption: 'AT nuk mund të ndërveprojë siç duhet', isPassing: false },
        ],
    },
    {
        understandingUrl: 'https://www.w3.org/WAI/WCAG21/Understanding/name-role-value.html',
        specUrl: 'https://www.w3.org/TR/WCAG21/#name-role-value',
    }
);

const sc_4_1_3 = new SuccessCriterion(
    '4.1.3',
    'Mesazhe Statusi',
    'AA',
    'Mesazhet e statusit mund të përcaktohen programatikisht përmes rolit ose vetive pa marrë fokusin.',
    {
        type: '',
        note: 'Shembuj për SC 4.1.3',
        items: [
            { id: 'pass', uri: 'pass_4_1_3.png', alt: 'Zonë live që njofton përditësimin', caption: 'Njoftime pa ndryshuar fokusin', isPassing: true },
            { id: 'fail', uri: 'fail_4_1_3.png', alt: 'Ndryshim i heshtur i përmbajtjes', caption: 'Pa status programatik', isPassing: false },
        ],
    },
    {
        understandingUrl: 'https://www.w3.org/WAI/WCAG21/Understanding/status-messages.html',
        specUrl: 'https://www.w3.org/TR/WCAG21/#status-messages',
    }
);


const g_4_1 = new Guideline(
    '4.1',
    'I përputhshëm',
    'Maksimizoni përputhshmërinë me agjentët aktualë dhe të ardhshëm të përdoruesit, përfshirë teknologjitë ndihmëse.',
    [sc_4_1_1, sc_4_1_2, sc_4_1_3],
    quiz_3_3
);

/* Principle 4 bundle */
const p4 = new Principle(
    '4',
    'I qëndrueshëm (Robust)',
    'Përmbajtja duhet të jetë mjaft e qëndrueshme që të interpretohet nga një shumëllojshmëri agjentësh përdoruesi, përfshirë teknologjitë ndihmëse.',
    [g_4_1]
);


/* -------------------------------------------------------------------------- */

const PRINCIPLES = [p1, p2, p3, p4];

export function getPrinciples() {
    return PRINCIPLES;
}

export function getGuidelinesByPrinciple(principleId) {
    const p = PRINCIPLES.find((x) => x.id === String(principleId));
    return p ? p.guidelines : [];
}

export function getGuideline(principleId, guidelineId) {
    const gs = getGuidelinesByPrinciple(principleId);
    return gs.find((g) => g.id === String(guidelineId)) || null;
}

export function getSCs(principleId, guidelineId) {
    const g = getGuideline(principleId, guidelineId);
    return g ? g.successCriteria : [];
}

export function getSC(principleId, guidelineId, scId) {
    const list = getSCs(principleId, guidelineId);
    return list.find((x) => x.id === String(scId)) || null;
}
