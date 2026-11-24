// =========================================================
// ZENTRALE DATEN-KONFIGURATION
// =========================================================

const websiteData = {
    // 1. SV-MITGLIEDER
    members: [
        {
            levelTitle: "Schülersprecher & Stellvertretung",
            image: "schuelersprecher-team.jpg",
            roles: [
                { title: "Schulsprecher", name: "Rasmi", isHauptamt: true },
                { title: "Stellv. Schulsprecherin", name: "Lina", isHauptamt: false }
            ]
        },
        {
            levelTitle: "Oberstufe",
            image: "oberstufe-team.jpg",
            roles: [
                { title: "Stellv. Oberstufensprecher", name: "Luis", isHauptamt: false },
                { title: "Oberstufensprecherin", name: "Aniella", isHauptamt: true },
                { title: "Stellv. Oberstufensprecher", name: "Lais", isHauptamt: false }
            ]
        },
        {
            levelTitle: "Mittelstufe",
            image: "mittelstufe-team.jpg",
            roles: [
                { title: "Stellv. Mittelstufensprecher", name: "Delcan", isHauptamt: false },
                { title: "Mittelstufensprecher", name: "Ole", isHauptamt: true }
            ]
        },
        {
            levelTitle: "Unterstufe",
            image: "unterstufe-team.jpg",
            roles: [
                { title: "Unterstufensprecher", name: "Viaan", isHauptamt: true },
                { title: "Stellv. Unterstufensprecher", name: "Ioannis", isHauptamt: false }
            ]
        }
    ],

    // 2. NEUESTEN INFORMATIONEN (NEWS & SLIDER)
    news: [
        {
            id: "fussball",
            date: "12. September 2026",
            title: "TORRR!! ⚽⚽⚽",
            preview: "Gestern am 11.09. haben mehrere Schulen gegeneinander an einem Fußballturnier teilgenommen. Am Ende holte sich unsere Schule den Sieg! 🥇",
            images: ["fussball-1.jpg", "fussball-2.jpg"],
            text: `Gestern am 11.09. haben mehrere Schulen gegeneinander an einem Fußballturnier teilgenommen. Am Ende holte sich unsere Schule den Sieg! 🥇

Nicht nur ein Sieg auf dem Platz, sondern auch ein Gewinn für die Abikasse! Spannung, Schweiß und Siegesjubel – dieser Tag bleibt in Erinnerung! 🥳🎉🏆

Danke an alle, die mitgespielt, angefeurt und unterstützt haben! ❤️ Euer Einsatz hat diesen Tag besonders gemacht. Gemeinsam sind wir stark!!!

Euer SV-Team`
        },
        {
            id: "sitzung",
            date: "07. September 2026",
            title: "Unsere erste SR-Sitzung im neuen Schuljahr 🎉",
            preview: "In der ersten SR-Sitzung des neuen Schuljahres am 04.09 wurden viele wichtige Themen besprochen und bestimmte Ämter gewählt...",
            images: ["sitzung-1.jpg"],
            text: `In der ersten SR-Sitzung des neuen Schuljahres am 04.09 wurden viele wichtige Themen besprochen und bestimmte Ämter gewählt. Das SV-Team ist motiviert und freut sich auf die gemeinsame Zusammenarbeit in diesem Schuljahr 🤗🤝

Themen der SR-Sitzung waren:

- SV-Team
- Wahlergebnisse der Schülsprecher- und Stufensprecherwahl
- KSR Deligiertenwahl -> Hauptdeligierte: Aniella und Lina; KSR stellvertretende Deligierte: Rasmi, Miro und Lais
- Beisitzendewahl -> Assala, Kristina, Aylin, Behnam, Omar, Sami, Meher, Julia, Luis, Adam, Miro und Nina
- SV-Reform: Modell für mehr Austausch und verbesserte Kommunikationsstrukturen zwischen Schülerschaft, Klassensprecher/innen und der SV
- Rückblick auf die SV Arbeiten im vergangenen Schuljahr
- Schulfest und Workshops
- Das Social Media Team: Werbung für Instagram und Tiktok Account Tiktok: @schulervertretung1arg (folgt uns gerne)

Wir wünschen euch außerdem einen tollen Start ins neue Schuljahr und ganz viel Erfolg 🤞🏼

Euer SV Team`
        }
    ],

    // 3. AKTIONEN & PLÄNE
    actions: [
        {
            icon: "🍞",
            title: "Brot für Hilfsbedürftige",
            subtitle: "Termin: Voraussichtlich spätestens Februar",
            description: "Ein Projekt zur Unterstützung hilfsbedürftiger Menschen in unserer Gemeinschaft."
        },
        {
            icon: "🌍",
            title: "Schulfest",
            subtitle: "Thema: „Länder und Kulturen“",
            description: "Ein buntes Schulfest rund um Vielfalt, internationale Kultur und Gemeinschaft."
        },
        {
            icon: "🕊️",
            title: "Austausch unter Religionen",
            subtitle: "",
            description: "Religionen mit Respekt begegnen und Unterschiede sowie Gemeinsamkeiten verstehen."
        },
        {
            icon: "🎄",
            title: "Weihnachtsbaum",
            subtitle: "Ort: C-Bau",
            description: "Traditionell stellen und schmücken wir zur Weihnachtszeit wieder einen Weihnachtsbaum im C-Bau."
        }
    ]
};