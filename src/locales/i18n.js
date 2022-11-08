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
        },
        en: {
            verkauf: "Sale",
            vermietung: "Rental",
            kontakt: "Contact",
            impressum: "Imprint",
            cookieRichtline: "Cookie Policy (EU)"
        }
    }
})

export default i18n;