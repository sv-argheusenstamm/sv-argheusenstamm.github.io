// Daten der Beiträge mit genau 3 Bildern für das Fußballturnier
const postsData = {
    fussball: {
        title: "TORRR!! ⚽⚽⚽",
        images: ["fussball-1.jpg", "fussball-2.jpg", "fussball-3.jpg"],
        text: `Gestern am 11.09. haben mehrere Schulen gegeneinander an einem Fußballturnier teilgenommen. Am Ende holte sich unsere Schule den Sieg! 🥇

Nicht nur ein Sieg auf dem Platz, sondern auch ein Gewinn für die Abikasse! Spannung, Schweiß und Siegesjubel – dieser Tag bleibt in Erinnerung! 🥳🎉🏆

Danke an alle, die mitgespielt, angefeurt und unterstützt haben! ❤️ Euer Einsatz hat diesen Tag besonders gemacht. Gemeinsam sind wir stark!!!

Euer SV-Team`
    },
    sitzung: {
        title: "Unsere erste SR-Sitzung im neuen Schuljahr 🎉",
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
};

let currentPostKey = null;
let currentImageIndex = 0;

function openGallery(postKey, startIndex = 0) {
    const post = postsData[postKey];
    if (!post) return;

    currentPostKey = postKey;
    currentImageIndex = startIndex;

    document.getElementById('modalTitle').innerText = post.title;
    document.getElementById('modalText').innerText = post.text;

    updateSliderImage();
    document.getElementById('galleryModal').classList.remove('hidden');
}

function closeGallery() {
    document.getElementById('galleryModal').classList.add('hidden');
}

function changeSlide(direction) {
    if (!currentPostKey) return;
    const images = postsData[currentPostKey].images;

    currentImageIndex += direction;

    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    } else if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }

    updateSliderImage();
}

function updateSliderImage() {
    const post = postsData[currentPostKey];
    const imgElement = document.getElementById('modalImage');
    const counterElement = document.getElementById('imageCounter');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    imgElement.src = post.images[currentImageIndex];
    counterElement.innerText = `${currentImageIndex + 1} / ${post.images.length}`;

    if (post.images.length <= 1) {
        prevBtn.style.display = 'none';
        nextBtn.style.display = 'none';
    } else {
        prevBtn.style.display = 'block';
        nextBtn.style.display = 'block';
    }
}

// Navigation zwischen allen 6 Menüpunkten
document.addEventListener('DOMContentLoaded', function() {
    const fullMenu = document.getElementById('fullMenu');
    
    const linkStartseite = document.getElementById('linkStartseite');
    const linkUberUns = document.getElementById('linkUberUns');
    const linkMitglieder = document.getElementById('linkMitglieder');
    const linkAktionen = document.getElementById('linkAktionen');
    const linkSocial = document.getElementById('linkSocial');
    const linkKontakt = document.getElementById('linkKontakt');

    const pageStartseite = document.getElementById('startseite');
    const pageUberUns = document.getElementById('uber-uns');
    const pageMitglieder = document.getElementById('sv-mitglieder');
    const pageAktionen = document.getElementById('aktionen');
    const pageSocial = document.getElementById('social-media');
    const pageKontakt = document.getElementById('kontakt');

    function hideAllPages() {
        if (pageStartseite) pageStartseite.classList.add('hidden');
        if (pageUberUns) pageUberUns.classList.add('hidden');
        if (pageMitglieder) pageMitglieder.classList.add('hidden');
        if (pageAktionen) pageAktionen.classList.add('hidden');
        if (pageSocial) pageSocial.classList.add('hidden');
        if (pageKontakt) pageKontakt.classList.add('hidden');
    }

    function navigateTo(page) {
        hideAllPages();
        if (page) page.classList.remove('hidden');
        if (fullMenu) fullMenu.classList.add('hidden');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    if (linkStartseite) linkStartseite.addEventListener('click', (e) => { e.preventDefault(); navigateTo(pageStartseite); });
    if (linkUberUns) linkUberUns.addEventListener('click', (e) => { e.preventDefault(); navigateTo(pageUberUns); });
    if (linkMitglieder) linkMitglieder.addEventListener('click', (e) => { e.preventDefault(); navigateTo(pageMitglieder); });
    if (linkAktionen) linkAktionen.addEventListener('click', (e) => { e.preventDefault(); navigateTo(pageAktionen); });
    if (linkSocial) linkSocial.addEventListener('click', (e) => { e.preventDefault(); navigateTo(pageSocial); });
    if (linkKontakt) linkKontakt.addEventListener('click', (e) => { e.preventDefault(); navigateTo(pageKontakt); });
});
