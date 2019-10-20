import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      "nav-my-habits": "My Habits",
      "nav-history": "History",
      "nav-profile": "Profile",

      "my-habits-title": "What have you done this week{{username}}?",
      "my-habits-new-habit": "I'll add a new habit!",

      "save-habit-title": "Nice, what will it be?",
      "save-habit-name": "Name:",
      "save-habit-name-validation": 'Hey! Trying to commit to "Blank"?',
      "save-habit-type": "Type:",
      "save-habit-type-validation": "Common... Help me help you!",
      "save-habit-type-options": [
        { key: "Health", label: "Health" },
        { key: "Social", label: "Social" },
        { key: "Career", label: "Career" },
        { key: "Hobbies", label: "Hobbies" }
      ],
      "save-habit-frequency": "Frequency:",
      "save-habit-frequency-validation": "Funny, that's an easy way to ace it!",
      "save-habit-save": "Let's start!",
      "save-habit-delete": "Let's scrap this!",
      "save-habit-cancel": "Maybe tomorrow...",

      "history-title": "Here is your progress so far:",
      "history-title-empty-data": "You just started, come back next week!",

      "profile-title": "Super hero who?",
      "profile-name": "Name:",
      "profile-name-validation":
        "What an honor! The invisible habit geek among us?",
      "profile-avatar": "Avatar:",
      "profile-avatar-alt-desc": "Avatar, not really important. Don't worry!",
      "profile-save": "Done!",

      "date-days-short": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      "date-months-short": [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
      ]
    }
  },

  pt: {
    translation: {
      "nav-my-habits": "Meus hábitos",
      "nav-history": "Histórico",
      "nav-profile": "Perfil",

      "my-habits-title": "O que você fez nessa semana{{username}}?",
      "my-habits-new-habit": "Bora novo hábito!",

      "save-habit-title": "Legal, qual vai ser?",
      "save-habit-name": "Nome:",
      "save-habit-name-validation": "Ei! E o nome?",
      "save-habit-type": "Tipo:",
      "save-habit-type-validation": "Ele é importante porque?",
      "save-habit-type-options": [
        { key: "Health", label: "Saúde" },
        { key: "Social", label: "Social" },
        { key: "Career", label: "Carreira" },
        { key: "Hobbies", label: "Hobbies" }
      ],
      "save-habit-frequency": "Frequência:",
      "save-habit-frequency-validation":
        "Hábito sem frequência? Aí fica fácil!",
      "save-habit-save": "Bora!",
      "save-habit-delete": "Não agrega mais!",
      "save-habit-cancel": "Ops, quero voltar...",

      "history-title": "Esse é o seu progresso até agora:",
      "history-title-empty-data": "Aparece aqui na semana que vem!",

      "profile-title": "Quem é você na fila do pão?",
      "profile-name": "Nome:",
      "profile-name-validation":
        "Que honra! Um habit geeker invisível no meio de nós?",
      "profile-avatar": "Avatar:",
      "profile-avatar-alt-desc":
        "Avatar, não é muito importante. Não se preocupe!",
      "profile-save": "Feito!",

      "date-days-short": ["Seg", "Ter", "Qua", "Qui", "Sex", "Sab", "Dom"],
      "date-months-short": [
        "Jan",
        "FeV",
        "Mar",
        "Abr",
        "Mai",
        "Jun",
        "Jul",
        "Ago",
        "Set",
        "Out",
        "Nov",
        "Dez"
      ]
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    keySeparator: false,
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
