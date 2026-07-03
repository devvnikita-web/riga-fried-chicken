(function () {
  "use strict";

  const STORAGE_KEY = "rfc_lang";
  const supportedLangs = ["lv", "ru", "en"];
  let currentLang = localStorage.getItem(STORAGE_KEY) || "lv";
  if (!supportedLangs.includes(currentLang)) currentLang = "lv";

  function getPath(obj, path) {
    return path.split(".").reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : null), obj);
  }

  function applyTranslations(lang) {
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const value = getPath(translations[lang], el.getAttribute("data-i18n"));
      if (value) el.textContent = value;
    });
    document.querySelectorAll(".lang-btn").forEach((btn) => {
      btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
    });
  }

  function setLang(lang) {
    currentLang = lang;
    localStorage.setItem(STORAGE_KEY, lang);
    applyTranslations(lang);
    renderMenu(lang);
  }

  document.getElementById("langSwitch").addEventListener("click", (e) => {
    const btn = e.target.closest(".lang-btn");
    if (!btn) return;
    setLang(btn.getAttribute("data-lang"));
  });

  // Mobile nav toggle
  const burgerBtn = document.getElementById("burgerBtn");
  const mainNav = document.getElementById("mainNav");
  burgerBtn.addEventListener("click", () => {
    mainNav.classList.toggle("open");
    burgerBtn.classList.toggle("open");
  });
  mainNav.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      mainNav.classList.remove("open");
      burgerBtn.classList.remove("open");
    })
  );

  // Sticky header shadow on scroll
  const header = document.querySelector(".site-header");
  window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 10);
  });

  // ---- MENU RENDERING ----
  const tabsEl = document.getElementById("menuTabs");
  const categoriesEl = document.getElementById("menuCategories");
  let activeCategory = menuData[0].id;

  function money(v) {
    return "€" + v.toFixed(2);
  }

  function renderTabs(lang) {
    tabsEl.innerHTML = "";
    menuData.forEach((cat) => {
      const btn = document.createElement("button");
      btn.className = "menu-tab" + (cat.id === activeCategory ? " active" : "");
      btn.type = "button";
      btn.innerHTML = `<img src="${cat.icon}" alt=""><span>${cat.name[lang]}</span>`;
      btn.addEventListener("click", () => {
        activeCategory = cat.id;
        renderMenu(currentLang);
        document.getElementById("menu").scrollIntoView({ behavior: "smooth", block: "start" });
      });
      tabsEl.appendChild(btn);
    });
  }

  function renderCategoryGrid(lang) {
    const cat = menuData.find((c) => c.id === activeCategory);
    categoriesEl.innerHTML = "";
    const grid = document.createElement("div");
    grid.className = "menu-grid";
    cat.items.forEach((item) => {
      const card = document.createElement("article");
      card.className = "menu-card";
      const desc = item.desc && item.desc[lang] ? `<p class="menu-card-desc">${item.desc[lang]}</p>` : "";
      card.innerHTML = `
        <div class="menu-card-img"><img src="${cat.icon}" alt="${item.name[lang]}" loading="lazy"></div>
        <div class="menu-card-body">
          <h3>${item.name[lang]}</h3>
          ${desc}
          <span class="menu-card-price">${money(item.price)}</span>
        </div>`;
      grid.appendChild(card);
    });
    categoriesEl.appendChild(grid);
  }

  function renderMenu(lang) {
    renderTabs(lang);
    renderCategoryGrid(lang);
  }

  // ---- MAP ----
  function initMap() {
    if (typeof L === "undefined") return;
    const rigaCenter = [56.9496, 24.1052];
    const map = L.map("map", {
      scrollWheelZoom: false,
      zoomControl: true,
    }).setView(rigaCenter, 13);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 19,
    }).addTo(map);

    const chickenIcon = L.divIcon({
      className: "map-pin",
      html: '<div class="map-pin-inner">🍗</div>',
      iconSize: [42, 42],
      iconAnchor: [21, 40],
    });

    L.marker(rigaCenter, { icon: chickenIcon })
      .addTo(map)
      .bindPopup("<b>Riga Fried Chicken</b><br>Rīga, Latvija<br><a href='https://food.bolt.eu/en/3-riga/p/179836-riga-fried-chicken/' target='_blank' rel='noopener'>Bolt Food</a>")
      .openPopup();
  }

  document.getElementById("year").textContent = new Date().getFullYear();

  applyTranslations(currentLang);
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    if (btn.getAttribute("data-lang") === currentLang) btn.classList.add("active");
  });
  renderMenu(currentLang);
  initMap();
})();
