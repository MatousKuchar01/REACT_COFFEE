import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  benefitImage3,
  benefitImage4,
  benefitImage5,
  benefitImage6,
  benefitImage7,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Nabídka",
    url: "#features",
  },
  {
    id: "1",
    title: "Ceník",
    url: "#pricing",
  },
  {
    id: "2",
    title: "O nás",
    url: "#how-to-use",
  },
  {
    id: "3",
    title: "Proces pražení",
    url: "#roadmap",
  },
  {
    id: "4",
    title: "Založit si účet",
    url: "#signup",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Přihlásit se",
    url: "#login",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];


export const brainwaveServices = [
  "Kávová pražírna",
  "Síť kaváren",
  "Dodavatelé kávy",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Inicializace zrn",
    text: "Výběr těch nejlepších kávových zrn, pečlivě připravených na svou transformační cestu – stejně jako při inicializaci proměnných v kódu.",
    date: "1. KROK",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Debugging chuti",
    text: "Proces pražení, kde odstraňujeme všechny nežádoucí chuťové chyby, dokud nezůstane jen čistá kávová dokonalost.",
    date: "2. KROK",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Kompilace vůní",
    text: "Směs chutí a vůní se skládá dohromady jako perfektní kávový kód, který čeká na svůj finální výstup.",
    date: "3. KROK",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Deploy do šálku",
    text: "Poslední krok – vaše káva je připravena k servírování, nasazena s přesností a láskou, přímo do vašeho šálku.",
    date: "4. KROK",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "Rychle a snadno si objednáte svou oblíbenou kávu, aniž byste museli navštěvovat naši webovou stránku.";

export const collabText2 = 
  "Sledujte stav svých objednávek v reálném čase a mějte přehled o dodání."

export const collabText3 = 
  "Uložte si své oblíbené kávy, recenze a poznámky o každém šálku, abyste si mohli lépe vychutnat svůj kávový zážitek."

export const collabContent = [
  {
    id: "0",
    title: "Jednoduché objednávání",
    text: collabText,
  },
  {
    id: "1",
    title: "Sledování objednávek",
    text: collabText2,
  },
  {
    id: "2",
    title: "Kávový deník",
    text: collabText3,
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Základní",
    description: "Ideální pro každého, kdo si chce dopřát kvalitní kávu na každý den.",
    price: "499,-",
    features: [
      "Měsíční dodávka 1 kg kávy",
      "Výběr z několika základních směsí",
      "Možnost ochutnávkového balení novinek",
    ],
  },
  {
    id: "1",
    title: "Prémiový",
    description: "Pro opravdové milovníky kávy, kteří ocení vylepšenou kvalitu a rozmanitost.",
    price: "799,-",
    features: [
      "Měsíční dodávka 1,5 kg prémiové kávy",
      "Výběr z exkluzivních směsí a limitovaných edic",
      "Přístup k exkluzivním receptům na přípravu kávy",
    ],
  },
  {
    id: "2",
    title: "Individuální",
    description: "Přizpůsobený tarif pro kavárny a podniky, které vyžadují specifické množství a druhy kávy.",
    price: null,
    features: [
      "Osobní konzultace pro výběr kávy a množství",
      "Exkluzivní přístup k novinkám a produktům",
      "Možnost pravidelných dodávek na míru",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "React Roast",
    text: "Káva s vyváženou chutí, která probudí vaše smysly stejně jako React probudí váš kód.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Component Blend",
    text: "Směs kávových zrn perfektně složených dohromady, pro harmonický zážitek s každým douškem.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage3,
    light: true,
  },
  {
    id: "2",
    title: "Script Shot",
    text: "Silný a rychlý kávový zážitek, který vás okamžitě nakopne, stejně jako dobře napsaný skript zvládne svou práci bleskově.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage4,
  },
  {
    id: "3",
    title: "Single-Origin Hook",
    text: "Jednodruhová káva, která vás zahákne svou výraznou chutí a plným tělem.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage5,
    light: true,
  },
  {
    id: "4",
    title: "Prop Drip",
    text: " Káva, která předává energii pomalu, ale jistě, ideální pro dlouhé pracovní dny",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage6,
  },
  {
    id: "5",
    title: "State Espresso",
    text: "Malé, ale silné espresso, které vám dodá energii na řešení těch nejtěžších úkolů, stejně jako dobře nastavený state v Reactu.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage7,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
