let currentPostIndex = null;
let currentImageIndex = 0;
let showAllNews = false; // Status für die Einklapp-Funktion

document.addEventListener('DOMContentLoaded', function() {
    renderNews();
    renderMembers();
    renderActions();
    setupNavigation();
});

// 1. GENERIERE NEUESTEN INFORMATIONEN (MIT "MEHR ANZEIGEN" LOGIK)
function renderNews() {
    const container = document.getElementById('news-container');
    if (!container) return;

    // Standardmäßig nur die letzten 2 Beiträge anzeigen
    const visibleCount = 2; 
    const postsToDisplay = showAllNews ? websiteData.news : websiteData.news.slice(0, visibleCount);

    let html = postsToDisplay.map((item, index) => `
        <article class="news-card clickable-card" onclick="openGallery(${index}, 0)">
            <div class="news-card-content">
                <div class="news-text-side">
                    <span class="news-date">${item.date}</span>
                    <h3>${item.title}</h3>
                    <p class="preview-text">${item.preview}</p>
                    <span class="click-hint">🔍 Klicken für Vollbild & Text</span>
                </div>
                <div class="news-media-side">
                    ${item.images.map((img, imgIdx) => `
                        <img src="${img}" alt="Vorschau" onclick="event.stopPropagation(); openGallery(${index}, ${imgIdx})">
                    `).join('')}
                </div>
            </div>
        </article>
    `).join('');

    // Falls mehr als 2 Beiträge in config.js stehen, Button anzeigen
    if (websiteData.news.length > visibleCount) {
        html += `
            <div class="load-more-box">
                <button id="toggleNewsBtn" class="load-more-btn" onclick="toggleNews()">
                    ${showAllNews ? '▲ Weniger anzeigen' : `▼ Weitere Beiträge anzeigen (${websiteData.news.length - visibleCount} weitere)`}
                </button>
            </div>
        `;
    }

    container.innerHTML = html;
}

// Umschalten zwischen 2 Beiträgen und allen Beiträgen
function toggleNews() {
    showAllNews = !showAllNews;
    renderNews();
}

// 2. GENERIERE SV-MITGLIEDER
function renderMembers() {
    const container = document.getElementById('members-container');
    if (!container) return;

    container.innerHTML = websiteData.members.map(group => `
        ${group.levelTitle !== "Schülersprecher & Stellvertretung" ? `<h2 class="section-title">${group.levelTitle}</h2>` : ''}
        <div class="stufen-block">
            <div class="single-image-box">
                <img src="${group.image}" alt="${group.levelTitle}" class="stufen-foto">
            </div>
            <div class="text-row">
                ${group.roles.map(role => `
                    <div class="member-info">
                        <h3 class="${role.isHauptamt ? 'hauptamt' : ''}">${role.title}</h3>
                        <p class="member-name">${role.name}</p>
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');
}

// 3. GENERIERE AKTIONEN & PLÄNE
function renderActions() {
    const container = document.getElementById('actions-container');
    if (!container) return;

    container.innerHTML = websiteData.actions.map(action => `
        <div class="about-box">
            <h3>${action.icon} ${action.title}</h3>
            ${action.subtitle ? `<p><strong>${action.subtitle}</strong></p>` : ''}
            <p>${action.description}</p>
        </div>
    `).join('');
}

// 4. POPUP & SLIDER FUNKTIONEN
function openGallery(postIndex, startIndex = 0) {
    const post = websiteData.news[postIndex];
    if (!post) return;

    currentPostIndex = postIndex;
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
    if (currentPostIndex === null) return;
    const images = websiteData.news[currentPostIndex].images;

    currentImageIndex += direction;

    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    } else if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }

    updateSliderImage();
}

function updateSliderImage() {
    const post = websiteData.news[currentPostIndex];
    const imgElement = document.getElementById('modalImage');
    const counterElement = document.getElementById('imageCounter');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    imgElement.src = post.images[currentImageIndex];
    counterElement.innerText = `${currentImageIndex + 1} / ${post.images.length}`;

    // Pfeile nur anzeigen, wenn mehr als 1 Bild vorhanden ist
    if (post.images.length <= 1) {
        prevBtn.style.display = 'none';
        nextBtn.style.display = 'none';
    } else {
        prevBtn.style.display = 'block';
        nextBtn.style.display = 'block';
    }
}

// 5. NAVIGATION ZWISCHEN ALL SEITENBEREICHEN
function setupNavigation() {
    const fullMenu = document.getElementById('fullMenu');
    
    const pageMap = {
        'linkStartseite': document.getElementById('startseite'),
        'linkUberUns': document.getElementById('uber-uns'),
        'linkMitglieder': document.getElementById('sv-mitglieder'),
        'linkAktionen': document.getElementById('aktionen'),
        'linkSocial': document.getElementById('social-media'),
        'linkKontakt': document.getElementById('kontakt')
    };

    function hideAllPages() {
        Object.values(pageMap).forEach(page => {
            if (page) page.classList.add('hidden');
        });
    }

    Object.keys(pageMap).forEach(linkId => {
        const link = document.getElementById(linkId);
        if (link) {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                hideAllPages();
                if (pageMap[linkId]) pageMap[linkId].classList.remove('hidden');
                if (fullMenu) fullMenu.classList.add('hidden');
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }
    });
}
