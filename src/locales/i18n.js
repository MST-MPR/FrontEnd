import { createI18n } from 'vue-i18n';

const i18n = createI18n({
    locale: "Deutsch",
    messages: {
        Deutsch: {
            /* Navbar */
            verkauf: "Verkauf",
            vermietung: "Vermietung",
            kontakt: "Kontakt",
            impressum: "Impressum",
            cookieRichtline: "Cookie Richtline (EU)",

            /* Footer */
            philosophy:' "Wir sind ein Unternehmen, das seine Tätigkeit im Dienstleistungssektor entwickelt, wir widmen uns hauptsächlich der Gestaltung und Produktion von Szenen, audiovisuellen Produkten, Musik und Veranstaltungen, bei denen eine Vielzahl menschlicher und technologischer Faktoren beteiligt sind, die effizient kombiniert werden müssen erhalten Sie ein Produkt von ausgezeichneter Qualität." ',

            /* Under Construction */
            coomingSoon: "Demnächst",
            working: "Wir arbeiten an unserer Website. Bleiben Sie dran für einige aufregende Updates.",

            /* 404 */
        },
        English: {
            /* Navbar */
            verkauf: "Sale",
            vermietung: "Rental",
            kontakt: "Contact",
            impressum: "Imprint",
            cookieRichtline: "Cookie Policy (EU)",

            /* Footer */
            philosophy: ' "We are a company that develops its activity in the service sector, we are mainly dedicated to the design and production of scenes, audiovisual products, music and events that involve a multitude of human and technological factors that must be combined efficiently to obtain a product of excellent quality."',

            /* Under Construction */
            coomingSoon: "Cooming soon",
            working: "We are working on our website. Stay stuned for some exciting updates.",

            /* 404 */
        }
    }
})

export default i18n;