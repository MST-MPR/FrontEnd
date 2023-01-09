import { createI18n } from 'vue-i18n';

const i18n = createI18n({
    locale: "Deutsch",
    messages: {
        Deutsch: {
            /* HOME*/
            fullServiceGrid: "Wir verstehen uns als Full-Service-Dienstleister, d.h. wir stellen nicht nur die notwendigen technischen Geräte zur Verfügung, sondern sorgen auch dafür, dass sie perfekt für den jeweiligen Anlass installiert werden.",
            verkaufGrid: "Nutzen Sie unsere kostenlose unverbindliche Bedarfsanalyse vor Ort. Wir erstellen Ihnen Ihre individuelle Lösung und machen Ihnen einen guten Preis. Bevorzugen Sie ein superaktuelles Neugerät oder tut es auch ein gepflegtes Gebrauchtes?.",
            vermietungGrid: "Seien Sie gewiß, dass die zu leihenden Geräte immer in einwandfreiem Zustand sind. Alle Mietgegenstände werden regelmäßig gewartet. Die Mietpreise verstehen sich zzgl. der gesetzlichen MwSt., ab unserem Lager.",
            streamingGrid: "Wir entwickeln und gestalten Ihr individuelles Portal mit Log-In Zertifizierung und weiteren technischen Finessen für einen problemlosen, attraktiven Stream ihres Events.",
            smartHomeGrid: "Wir automatisieren ihr Privat- oder Bürogebäude von der zentralen Lichtsteuerung bis hin zum komplett smart aufgebautem Gebäude. Hierbei setzen wir primär auf LOXONE – Home Server und entsprechende Peripheriegeräte.",
            prof1: "Professionell Event...",
            prof2: "professionell gestreamt...",
            prof3: "Wir bieten nicht nur Planung und Betreuung von Veranstaltungen an, sondern vermieten und/oder verkaufen auch das notwendige Equipment dafür. Auch hierbei stehen wir Ihnen gern beratend zur Seite und bieten hochwertige Technik zu fairen Preisen.",
            überUns1: "Über uns",
            überUns2: "Egal ob Sie klassische audiovisuelle Präsentationsformen wählen oder modernste EDV-Technik einsetzen möchten, wir beraten Sie partnerschaftlich und finden die beste Lösung für Ihre Veranstaltung. Uns ist vor allem wichtig, Ihre Vorstellungen kreativ, flexibel, zuverlässig und zur gleichen Zeit budgetgerecht umzusetzen. Neben der technischen Ausstattung für Veranstaltungen bieten wir Ihnen selbstverständlich auch die Umsetzung von Festinstallationen im privaten oder geschäftlichen Bereich. Von der einfachen Präsentationswand mit Beamer und Laptop richten wir Ihnen auch komplette Dolby-Kinos, optional auch mit 3D-Technik ein, ganz nach Ihren Vorstellungen und Wünschen. Natürlich gleich so, dass Sie einfach loslegen können. Keine Probleme mehr mit der Technik – versprochen! Sprechen Sie uns an und lassen Sie sich unverbindlich beraten. Ob Licht, Ton oder Technik – wir finden für Sie gemeinsam die optimale Lösung.",
            team: "Triff unser Team",
            franz: "Geschäftsführer",
            marco: "Projektleitung",
            marco2: "Videotechnik",
            philipp: "Projektleitung",
            philipp2: "Live und Hybrid",
            miguel: "Programmierer",
            fabian: "Lagerist",
            sekretärin: "Sachbearbeitung",
            techniker: "Veranstaltungstechnik",
            bewird: "Bewirb dich jetzt!",
            freuen: "Wir freuen was auf deine Bewerbung per email an: ",
            oder: "oder ruf uns an: ",
            partners: "Unsere Partner",
            email: "Ihre E-Mail",
            message: "Ihre Nachricht",
            send: "Schicken",

            /* FULL SERVICE */
            konferenz: "KONFERENZ- UND PRÄSENTATIONSTECHNIK",
            konferenzP: "Wir verstehen uns als Fullservice-Dienstleister, d.h. wir stellen nicht nur jegliche notwendige technische Geräte zur Verfügung, sondern sorgen auch dafür, dass sie perfekt für den jeweiligen Anlass installiert sind.",
            beleuchtung: "BELEUCHTUNG",
            beleuchtungP: "Ob für eine spektakuläre Show, für Messestände oder um Architektur prominent in Szene zu setzen, wir haben die passende Beleuchtung.",
            beschallung: "BESCHALLUNG",
            beschallungP:"Wir sorgen dafür, dass Sie in Konferenzräumen, Außenanlagen oder Arenen den richtigen Ton treffen. Uns ist es wichtig, dass etwas weder zu laut noch zu leise ist, denn nur ein perfekt akustisch ausgerichteter Raum, kann die Zuhörer fesseln.",
            edv: "EDV",
            edvP: "Wir sind mit den neuesten technischen Standards bestens vertraut, beraten und installieren, was benötigt wird. Audio-Video-Bearbeitung sowie alle Schritte der Film-Postproduktion gehören zu unseren Dienstleistungen.", 
            dokumentation: "DOKUMENTATION",
            dokumentationP: "Die Veranstaltung war perfekt, doch keiner hat auch nur ein Foto oder eine Videoaufzeichnung davon gemacht? Damit das nicht passiert, bieten wir eine komplette Dokumentation an.",
            möblierung: "VERANSTALATUNGSMÖBLIERUNG",
            möblierungP: "Als Fullservice-Dienstleister sorgen wir auch für den richtigen Sitz! Sie brauchen Tische, Stühle, Pulte oder ähnliches? Auch der Aufbau und/oder Verleih von passendem Mobiliar erfolgt durch uns.",

            /**VERKAUF*/
            verkaufView: "Nutzen Sie unsere kostenlose, unverbindliche Bedarfsanalyse vor Ort. Wir erstellen Ihnen Ihre individuelle Lösung und machen Ihnen einen guten Preis. Bevorzugen Sie ein superaktuelles Neugerät oder tut es auch ein gepflegtes Gebrauchtes? Diese auch aus den Messe- und Demopools von Lenovo und HP mit voller Herstellergarantie und optionalen vor Ort-Service. Wir bieten ebenso Gebraucht- und Demogeräte von Kundengeräte in Kommision an.",

            /* VERMIETUNG */
            vermietungView: "Seien Sie gewiß, dass die zu leihenden Geräte immer in einwandfreiem Zustand sind. Alle Mietgegenstände werden regelmäßig gewartet.",
            vermietungView2: "Die Mietpreise verstehen sich zzgl. der gesetzlichen Mehrwertsteuer, ab unserem Lager. Sehen Sie hierzu auch unsere AGB.",
            vermietungView3: "Sie sind sich nicht sicher, was Sie für einen Event benötigen? Kontaktieren Sie uns, wir beraten Sie gern.",
            vermietungView4: "Wir haben nachfolgend bereits einige Punkte zusammengetragen, die Ihnen eine Mietanfrage bei uns erleichtern: Wann findet die Veranstaltung statt (Datum und Uhrzeit von Beginn und Ende)?",
            vermietungView5: "Um was für eine Art Veranstaltung handelt es sich? – (Konferenz / Tagung, Messe / Ausstellung, Konzert / Theater, Feier)",
            vermietungView6: "Wo findet die Veranstaltung statt? - (Drinnen / Draußen, Größe des Raumes (Anzahl der Besucher?)",
            vermietungView7: "Was wird für die Veranstaltung benötigt? - (Licht / Ton / Musik / Mobiliar)",
            vermietungView8: "Wie soll Anfahrt und Abtransport der Mietgegenstände erfolgen? - (Selbstabholung / durch uns; Wird Hilfe bei Transport/ Auf-/ Abbau/ Installation benötigt?)",
            vermietungView9: "Wann werden die Mietgegenstände benötigt (Mietbeginn und -rückgabe)?",

            /* SMART HOME */
            smartHomeView: "Wir automatisieren ihr privat- oder Bürogebäude von der zentralen Lichtsteuerung bis hin zum voll smart aufgebautem Gebäude.",
            smartHomeView2: "Hierbei setzen wir primär auf LOXONE – Home Server und entsprechende Peripheriegeräte.",

            /* IMPRESSUM */
            anschrift: "Anschrift",
            kontaktdaten: "Kontaktdaten",
            telefon: "Telefon",
            geschäftsführer: "Geschäftsführer",
            umsatzsteuer: "Umsatzsteuer-Identifikationsnummer",
            inhaltlich: "Inhaltlich verantwortlich",
            konzeption: "Konzept, Gestaltung und Realisierung",
            streitschlichtung: "Streitschlichtung",
            streitschlichtung2: "Unsere E-Mail-Adresse finden Sie oben im Impressum. Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.",
            streitschlichtung3: "Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:",
            haftungInhalte: "Haftung für Inhalte",
            haftungInhalte2: "Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.",
            haftungInhalte3: "Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.",
            haftungLink: "Haftung für links",
            haftungLink2: "Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.",
            haftungLink3: "Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden werden wir derartige Links umgehend entfernen.",
            urheberrecht: "Urheberrecht",
            urheberrecht2: "Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.",
            urheberrecht3: "Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehgend entfernen.",

            /*COOKIES*/
            oktober: "''Diese Cookie-Richtlinie wurde zuletzt am 2 de Oktober de 2022 aktualisiert und gilt für Bürger und Einwohner mit ständigem Wohnsitz im Europäischen Wirtschaftsraum und der Schweiz''",
            einfürung: "Einführung",
            einfürung2: "Unsere Website, https://mst-extra.net (im folgenden: „Die Website“) verwendet Cookies und ähnliche Technologien (der Einfachheit halber werden all diese unter „Cookies“ zusammengefasst). Cookies werden außerdem von uns beauftragten Drittparteien platziert. In dem unten stehendem Dokument informieren wir dich über die Verwendung von Cookies auf unserer Website.",
            was: "Was sind Cookies?",
            was2: "Ein Cookie ist eine einfache kleine Datei, die gemeinsam mit den Seiten einer Internetadresse versendet und vom Webbrowser auf dem PC oder einem anderen Gerät gespeichert werden kann. Die darin gespeicherten Informationen können während folgender Besuche zu unseren oder den Servern relevanter Drittanbieter gesendet werden.",
            skripte: "Was sind Skripte?",
            skripte2: "Ein Script ist ein Stück Programmcode, das benutzt wird, um unserer Website Funktionalität und Interaktivität zu ermöglichen. Dieser Code wird auf unseren Servern oder auf deinem Gerät ausgeführt.",
            cookies: "Technische oder funktionelle Cookies. Einige Cookies stellen sicher, dass Teile unserer Website richtig funktionieren und deine Nutzervorlieben bekannt bleiben. Durch das Platzieren funktionaler Cookies machen wir es dir einfacher unsere Website zu besuchen. Auf diese Weise musst du bei Besuchen unserer Website nicht wiederholt die gleichen Informationen eingeben, oder deine Gegenstände bleiben beispielsweise in deinem Warenkorb bis du bezahlst. Wir können diese Cookies ohne dein Einverständnis platzieren.",
            platzierte: "Platzierte Cookies",
            zustimmung: "Zustimmung",
            zustimmung2: "Wenn du unsere Website das erste Mal besuchst, zeigen wir dir ein Pop-Up mit einer Erklärung über Cookies. Sobald du auf „Einstellungen speichern“ klickst, gibst du uns dein Einverständnis, alle von dir gewählten Kategorien von Cookies und Plugins wie in dieser Cookie-Erklärung beschrieben zu verwenden. Du kannst die Verwendung von Cookies über deinen Browser deaktivieren, aber bitte beachte, dass unsere Website dann unter Umständen nicht richtig funktioniert.",
            zustimmung3: "Verwalte deine Zustimmungseinstellungen. Die technische Speicherung oder der Zugang ist unbedingt erforderlich für den rechtmäßigen Zweck, die Nutzung eines bestimmten Dienstes zu ermöglichen, der vom Teilnehmer oder Nutzer ausdrücklich gewünscht wird, oder für den alleinigen Zweck, die Übertragung einer Nachricht über ein elektronisches Kommunikationsnetz durchzuführen.",
            aktivierung: "Aktivierung/Deaktivierung und Löschen von Cookies",
            aktivierung2: "Du kannst deinen Internetbrowser verwenden um automatisch oder manuell Cookies zu löschen. Du kannst außerdem spezifizieren ob spezielle Cookies nicht platziert werden sollen. Eine andere Möglichkeit ist es deinen Internetbrowser derart einzurichten, dass du jedes Mal benachrichtigt wirst, wenn ein Cookie platziert wird. Für weitere Information über diese Möglichkeiten beachte die Anweisungen in der Hilfesektion deines Browsers.",
            aktivierung3: "Bitte nimm zur Kentniss, dass unsere Website möglicherweise nicht richtig funktioniert wenn alle Cookies deaktiviert sind. Wenn du die Cookies in deinem Browser löscht, werden diese neuplatziert wenn du unsere Website erneut besuchst.",
            rechte: "Deine Rechte in Bezug auf persönliche Daten",
            rechte2: "Du hast in Bezug auf deine persönlichen Daten die folgenden Rechte:",
            rechte3: "Du hast das Recht zu wissen, warum deine persönlichen Daten gebraucht werden, was mit ihnen passiert und wie lange diese verwahrt werden.",
            rechte4: "Zugriffsrecht: Du hast das Recht deine uns bekannten persönliche Daten einzusehen.",
            rechte5: "Recht auf Berichtigung: Du hast das Recht wann immer du wünscht, deine persönlichen Daten zu ergänzen, zu korrigieren sowie gelöscht oder blockiert zu bekommen.",
            rechte6: "Wenn du uns dein Einverständnis zur Verarbeitung deiner Daten gegeben hast, hast du das Recht dieses Einverständnis zu widerrufen und deine persönlichen Daten löschen zu lassen.",
            rechte7: "Recht auf Datentransfer deiner Daten: Du hast das Recht, alle deine persönlichen Daten von einem Kontrolleur anzufordern und in ihrer Gesamtheit zu einem anderen Kontrolleur zu transferieren.",
            rechte8: "Widerspruchsrecht: Du kannst der Verarbeitung deiner Daten widersprechen. Wir entsprechen dem, es sei denn es gibt berechtigte Gründe für die Verarbeitung.",
            rechte9: "Um diese Rechte auszuüben kontaktiere uns bitte. Bitte beziehe dich auf die Kontaktdaten am Ende dieser Cookie-Erklärung. Wenn du eine Beschwerde darüber hast, wie wir deine Daten behandeln, würden wir diese gerne hören, aber du hast auch das Recht diese an die Aufsichtsbehörde (der Datenschutzbehörde) zu richten.",
            cookieKontaktdaten: "Für Fragen und/oder Kommentare über unsere Cookie-Richtlinien und diese Aussage kontaktiere uns bitte mittels der folgenden Kontaktdaten:",

            /* BUTTONS*/
            verkauf: "VERKAUF",
            vermietung: "VERMIETUNG",
            kontakt: "KONTAKT",
            impressum: "IMPRESSUM",
            cookieRichtline: "COOKIE RICHTLINE (EU)",

            /* HEADERS */
            verkaufH: "Verkauf",
            vermietungH: "Vermietung",

            /* FOOTER */
            philosophy: ' "Wir sind ein Unternehmen, das seine Tätigkeit im Dienstleistungssektor entwickelt, wir widmen uns hauptsächlich der Gestaltung und Produktion von Szenen, audiovisuellen Produkten, Musik und Veranstaltungen, bei denen eine Vielzahl menschlicher und technologischer Faktoren beteiligt sind, die effizient kombiniert werden müssen erhalten Sie ein Produkt von ausgezeichneter Qualität." ',

            /* UNDER CONSTRUCTION */
            coomingSoon: "Demnächst",
            working: "Wir arbeiten an unserer Website. Bleiben Sie dran für einige aufregende Updates.",

            /* 404 */
            error: "Fehler 404 - Die Seite wurde nicht gefunden",
            errorB: "Zurück nach Home",
        },
        English: {
            /* HOME*/
            fullServiceGrid: "We see ourselves as a full-service provider, i.e. we not only provide the necessary technical equipment, but also ensure that it is perfectly installed for the respective occasion.",
            verkaufGrid: "Use our free non-binding needs analysis on site. We create your individual solution and give you a good price. Do you prefer an up-to-the-minute new device or would a well-kept used one also do?",
            vermietungGrid: "Rest assured that the equipment you rent is always in perfect condition. All rental items are serviced regularly. The rental prices do not include statutory VAT, ex our warehouse.",
            streamingGrid: "We develop and design your individual portal with log-in certification and other technical refinements for a problem-free, attractive stream of your event.",
            smartHomeGrid: "We automate your private or office building from the central lighting control to a completely smart building. We primarily rely on LOXONE – Home Server and the corresponding peripheral devices.",
            prof1: "Professional event...",
            prof2: "professionally streamed...",
            prof3: "We not only offer planning and supervision of events, but also rent and/or sell the necessary equipment therefore. Here, too, we are happy to advise you offer high-quality technology at fair prices.",
            überUns1: "About us",
            überUns2: "Regardless of whether you choose classic audiovisual forms of presentation or want to use the latest IT technology, we will advise you as a partner and find the best solution for your event. Above all, it is important to us to implement your ideas creatively, flexibly, reliably and at the same time within budget. In addition to the technical equipment for events, we also offer you the implementation of permanent installations in the private or business sector. From the simple presentation wall with beamer and laptop, we can also set up complete Dolby cinemas, optionally with 3D technology, according to your ideas and wishes. Of course, so that you can just get started. No more problems with the technology – we promise! Talk to us and let us advise you without obligation. Whether light, sound or technology - together we will find the optimal solution for you.",
            team: "Meet Our Team",
            franz: "General Manager",
            marco: "Project management",
            marco2: "Video technology",
            philipp: "Project management",
            philipp2: "Live and hybrid",
            miguel: "Programmer",
            fabian: "Storekeeper",
            sekretärin: "Processing",
            techniker: "Event technology",
            bewird: "Apply now!",
            freuen: "We look forward to receiving your application by email to: ",
            oder: "or call us: ",
            partners: "Our partners",
            email: "Your E-mail",
            message: "Your message",
            send: "Send",

            /* FULL SERVICE */
            konferenz: "CONFERENCE AND PRESENTATION TECHNOLOGY",
            konferenzP: "We see ourselves as a full-service provider, i.e. we not only provide all the necessary technical equipment, but also ensure that it is perfectly installed for the respective occasion.",
            beleuchtung: "LIGHTING",
            beleuchtungP: "Whether for a spectacular show, for trade fair stands or to prominently showcase architecture, we have the right lighting.",
            beschallung: "SOUND",
            beschallungP: "We make sure that you hit the right note in conference rooms, outdoor facilities or arenas. It is important to us that something is neither too loud nor too quiet, because only a perfectly acoustically aligned room, can captivate the audience.",
            edv: "IT",
            edvP: "We are very familiar with the latest technical standards, advise and install what is needed. Audio-video processing as well as all steps of film post-production are part of our services.",
            dokumentation: "DOCUMENTATION",
            dokumentationP: "The event was perfect, but no one even took a photo or video recording of it? So that this does not happen, we offer a complete documentation.",
            möblierung: "EVENT FURNITURE",
            möblierungP: "As a full-service provider, we also ensure the right seat! You need tables, chairs, desks or similar? We also take care of the assembly and/or rental of suitable furniture.",

            /*VERKAUF*/
            verkaufView: "Take advantage of our free, no-obligation on-site needs analysis. We will create your individual solution and give you a good price. Do you prefer a brand new device or a well-maintained used one? These are also available from the Lenovo and HP trade fair and demo pools with full manufacturer's warranty and optional on-site service. We also offer used and demo devices from customer devices in commission.",

            /* VERMIETUNG */
            vermietungView: "Be assured that the equipment to be rented is always in perfect condition. All rental items are serviced regularly.",
            vermietungView2: "The rental prices are exclusive of VAT, ex our warehouse. See also our terms and conditions.",
            vermietungView3: "You are not sure what you need for an event? Contact us, we will be happy to advise you.",
            vermietungView4: "We have already compiled some points below that will make it easier for you to make a rental request with us: When will the event take place (date and time of start and end)?",
            vermietungView5: "What kind of event is it? - (Conference / meeting, fair / exhibition, concert / theater, celebration)",
            vermietungView6: "Where will the event take place? - (Indoors / outdoors, size of the room (number of visitors?)",
            vermietungView7: "What is needed for the event? - (Light / sound / music / furniture)",
            vermietungView8: "How should the rental items be transported to and from the event? - (Self-collection / by us; Is help needed with transport / set-up / dismantling / installation?)",
            vermietungView9: "When are the rental items needed (rental start and return)?",

            /* SMART HOME */
            smartHomeView: "We automate your private or office building from the central lighting control to the fully smart building.",
            smartHomeView2: "Here we primarily rely on LOXONE - Home Server and corresponding peripheral devices.",

            /* IMPRESSUM */
            anschrift: "Address",
            kontaktdaten: "Contact details",
            telefon: "Phone",
            geschäftsführer: "Managing Director",
            umsatzsteuer: "Sales tax identification number",
            inhaltlich: "Responsible for content",
            konzeption: "Concept, design and realization",
            streitschlichtung: "Dispute resolution",
            streitschlichtung2: "You can find our e-mail address in the imprint above. We are not willing or obliged to participate in dispute resolution proceedings before a consumer arbitration board.",
            streitschlichtung3: "The European Commission provides a platform for online dispute resolution (OS):",
            haftungInhalte: "Liability for content",
            haftungInhalte2: "As a service provider, we are responsible for our own content on these pages in accordance with general legislation pursuant to Section 7 (1) of the German Telemedia Act (TMG). According to §§ 8 to 10 TMG, however, we are not obligated as a service provider to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity.",
            haftungInhalte3: "Obligations to remove or block the use of information according to general laws remain unaffected. However, liability in this regard is only possible from the time of knowledge of a concrete infringement. If we become aware of such infringements, we will remove this content immediately.",
            haftungLink: "Liability for links",
            haftungLink2: "Our offer contains links to external websites of third parties, on whose contents we have no influence. Therefore, we cannot assume any liability for these external contents. The respective provider or operator of the pages is always responsible for the content of the linked pages. The linked pages were checked for possible legal violations at the time of linking. Illegal contents were not recognizable at the time of linking.",
            haftungLink3: "However, a permanent control of the contents of the linked pages is not reasonable without concrete evidence of a violation of the law. If we become aware of any infringements, we will remove such links immediately.",
            urheberrecht: "Copyright",
            urheberrecht2: "The content and works created by the site operators on these pages are subject to German copyright law. The reproduction, editing, distribution and any kind of exploitation outside the limits of copyright require the written consent of the respective author or creator. Downloads and copies of this site are only permitted for private, non-commercial use.",
            urheberrecht3: "Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehgend entfernen.",

            /*COOKIES*/
            oktober: "''This Cookie Policy was last updated on 2 de October de 2022 and applies to citizens and permanent residents of the European Economic Area and Switzerland''",
            einfürung: "Introduction",
            einfürung2: "Our website, https://mst-extra.net (hereinafter:''The Website'') uses cookies and similar technologies (for convenience, all of these are collectively referred to as ''cookies''). Cookies are also placed by third parties contracted by us. In the document below we inform you about the use of cookies on our website.",
            was: "What are cookies?",
            was2: "A cookie is a simple small file that can be sent together with the pages of an Internet address and stored by the web browser on the PC or other device. The information stored in it may be sent to our servers or the servers of relevant third parties during subsequent visits.",
            skripte: "What are scripts?",
            skripte2: "A script is a piece of program code used to provide functionality and interactivity to our website. This code is executed on our servers or on your device.",
            cookies: "Technical or functional cookies. Some cookies ensure that parts of our website work properly and keep your user preferences known. By placing functional cookies, we make it easier for you to visit our website. This way, you do not have to repeatedly enter the same information when visiting our website, or your items remain in your shopping cart until you pay, for example. We may place these cookies without your consent.",
            platzierte: "Placed cookies",
            zustimmung: "Consent",
            zustimmung2: "When you visit our website for the first time, we will show you a pop-up with an explanation about cookies. Once you click on ''Save setting'', you give us your consent to use all the categories of cookies and plugins you have chosen as described in this cookie statement. You can disable the use of cookies through your browser, but please note that our website may not function properly if you do so.",
            zustimmung3: "Manage your consent settings. Technical storage or access is strictly necessary for the lawful purpose of enabling the use of a particular service expressly requested by the subscriber or user, or for the sole purpose of carrying out the transmission of a message over an electronic communications network.",
            aktivierung: "Activation/deactivation and deletion of cookies",
            aktivierung2: "You can use your internet browser to automatically or manually delete cookies. You can also specify whether specific cookies should not be placed. Another option is to set your Internet browser to notify you each time a cookie is placed. For more information about these options, see the instructions in the help section of your browser.",
            aktivierung3: "Please note that our website may not function properly if all cookies are disabled. If you delete the cookies in your browser, they will be placed again when you visit our website.",
            rechte: "Your rights regarding personal data",
            rechte2: "You have the following rights with respect to your personal information:",
            rechte3: "You have the right to know why your personal information is needed, what happens to it, and how long it is kept.",
            rechte4: "Right of access: You have the right to access your personal data known to us.",
            rechte5: "Right to rectification: You have the right whenever you wish to amend, correct, and have your personal information deleted or blocked.",
            rechte6: "If you have given us your consent to process your data, you have the right to withdraw this consent and have your personal data deleted.",
            rechte7: "Right to transfer your data: You have the right to request all of your personal data from one controller and transfer it in its entirety to another controller.",
            rechte8: "Right to object: You can object to the processing of your data. We will comply with this unless there are legitimate grounds for the processing.",
            rechte9: "To exercise these rights, please contact us. Please refer to the contact details at the end of this Cookie Policy. If you have a complaint about how we handle your data, we would like to hear it, but you also have the right to address it to the supervisory authority (the Data Protection Authority).",
            cookieKontaktdaten: "For questions and/or comments about our cookie policy and this statement, please contact us using the contact information below:",

            /* BUTTONS */
            verkauf: "SALE",
            vermietung: "RENTAL",
            kontakt: "CONTACT",
            impressum: "IMPRINT",
            cookieRichtline: "COOKIE POLICY (EU)",

            /* HEADERS */
            verkaufH: "Sale",
            vermietungH: "Rental",

            /* FOOTER */
            philosophy: ' "We are a company that develops its activity in the service sector, we are mainly dedicated to the design and production of scenes, audiovisual products, music and events that involve a multitude of human and technological factors that must be combined efficiently to obtain a product of excellent quality."',

            /* UNDER CONSTRUCTION */
            coomingSoon: "Cooming soon",
            working: "We are working on our website. Stay stuned for some exciting updates.",

            /* 404 */
            error: "Error 404 - The page was not found",
            errorB: "Back to the Home",

        }
    }
})

export default i18n;