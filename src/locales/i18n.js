import { createI18n } from 'vue-i18n';

const i18n = createI18n({
    locale: "de",
    messages: {
        de: {
            verkauf: "Verkauf",
            vermietung: "Vermietung",
            kontakt: "Kontakt",
            impressum: "Impressum",
            cookieRichtline: "Cookie Richtline (EU)",
            coomingSoon: "Demnächst",
            working: "Wir arbeiten an unserer Website. Bleiben Sie dran für einige aufregende Updates."
        },
        en: {
            verkauf: "Sale",
            vermietung: "Rental",
            kontakt: "Contact",
            impressum: "Imprint",
            cookieRichtline: "Cookie Policy (EU)",
            coomingSoon: "Cooming soon",
            working: "We are working on our website. Stay stuned for some exciting updates."
        }
    }
})

export default i18n;