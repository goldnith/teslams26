document.documentElement.classList.add("js");

const REGISTRATION_URL = "https://docs.google.com/forms/d/e/1FAIpQLSdA5VgO-vaGfnEY8VvnAaKJ9NSaCRkGT28ylm56y9irdd6XBw/viewform?usp=header";
const EVENT_DATE = "12 Sep 2026";
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

const events = [
  {
    name: "Robo Race",
    poster: "assets/images/optimized/events/roborace.webp",
    icon: "R",
    prize: "₹10,000",
    fee: "₹200",
    venue: "EEE Department Ground",
    team: "Maximum 4",
    date: EVENT_DATE,
    brochure: "assets/brochures/robo-race.pdf",
    brochureReady: true
  },
  {
    name: "Robo Soccer",
    poster: "assets/images/optimized/events/robosoccer.webp",
    icon: "S",
    prize: "₹10,000",
    fee: "₹200",
    venue: "EEE Department Ground",
    team: "Maximum 4",
    date: EVENT_DATE,
    brochure: "assets/brochures/robo-soccer.pdf"
  },
  {
    name: "Ampere Arena",
    poster: "assets/images/optimized/events/amperearena.webp",
    icon: "A",
    prize: "₹4,500",
    fee: "₹100",
    venue: "Machine Lab",
    team: "Maximum 3",
    date: EVENT_DATE,
    brochure: "assets/brochures/ampere-arena.pdf",
    brochureReady: true
  },
  {
    name: "Paper Presentation",
    poster: "assets/images/optimized/events/paperpresentation.webp",
    icon: "P",
    prize: "₹4,500",
    fee: "₹100",
    venue: "Simulation Lab",
    team: "Maximum 4",
    date: EVENT_DATE,
    brochure: "assets/brochures/paper-presentation.pdf",
    brochureReady: true
  },
  {
    name: "Fun Finity",
    poster: "assets/images/optimized/events/funfinity.webp",
    icon: "F",
    prize: "₹1,500",
    fee: "Free",
    venue: "Third Floor",
    team: "Maximum 4",
    date: EVENT_DATE
  },
  {
    name: "Cinematrix",
    poster: "assets/images/optimized/events/cinematrix.webp",
    icon: "C",
    prize: "₹1,500",
    fee: "₹50",
    venue: "Robotics Lab",
    team: "Maximum 4",
    date: EVENT_DATE
  },
  {
    name: "Min Twix",
    poster: "assets/images/optimized/events/mintwix-2026.webp",
    icon: "M",
    prize: "₹1,500",
    fee: "₹50",
    venue: "EEE Department · 2nd Floor",
    team: "Maximum 4",
    date: EVENT_DATE
  },
  {
    name: "Tooniverse",
    poster: "assets/images/events/tooniverse.jpeg",
    icon: "T",
    prize: "Details soon",
    fee: "See form",
    venue: "AMSCE",
    team: "Maximum 4",
    date: EVENT_DATE
  }
];

const people = [
  { name: "S.Abdul Rahaman", title: "President", group: "Management", image: "assets/images/students/S.Abdul Rahaman.jpeg" },
  { name: "M.Mohammed Umar", title: "Secretary", group: "Management", image: "assets/images/students/M.Mohammed_Umar.jpg" },
  { name: "M.Mohammed", title: "Treasurer", group: "Management", image: "assets/images/students/M.Mohamed.jpeg" },
  { name: "Ajitha R", title: "Joint Treasurer ", group: "Management", image: "assets/images/students/Ajitha R.jpeg" },
  { name: "Syed Adnan hussain", title: "Event coordinator ", group: "Robo soccer ", image: "assets/images/students/Syed Adnan hussain.jpg" },
  { name: "Mohamed Jasim", title: "Event coordinator ", group: "Robo soccer ", image: "assets/images/students/Mohamed Jasim.jpeg" },
  { name: "Mohammed asif N", title: "Event coordinator ", group: "Robo soccer ", image: "assets/images/students/Mohammed asif N.jpeg" },
  { name: "Nathim", title: "Event coordinator ", group: "Ampere arena ", image: "assets/images/students/Nathim.jpeg" },
  { name: "Anas.s", title: "Event coordinator ", group: "Ampere arena ", image: "assets/images/students/Anas.s.jpeg" },
  { name: "Naveen", title: "Event coordinator ", group: "Ampere arena ", image: "assets/images/students/Naveen.jpeg" },
  { name: "M.Mohammed Sharuk Khan", title: "Event coordinator ", group: "Paper presentation ", image: "assets/images/students/M.Mohammed_Sharuk_Khan.jpg" },
  { name: "Mohamed Sheik Barvees", title: "Event coordinator ", group: "Paper presentation ", image: "assets/images/students/Mohamed Sheik Barvees.jpeg" },
];

document.querySelectorAll("[data-register]").forEach((link) => {
  link.href = REGISTRATION_URL;                                           
});

const eventGrid = document.getElementById("eventGrid");
eventGrid.innerHTML = events.map((event, index) => `
  <article class="flip-card reveal" tabindex="0" aria-label="${event.name}. Activate to view event details" style="transition-delay:${Math.min(index * 55, 220)}ms">
    <div class="flip-card-inner">
      <div class="flip-front">
        <img src="${event.poster}" alt="${event.name} event poster" width="720" height="1000" loading="lazy" decoding="async">
      </div>
      <div class="flip-back">
        <div class="event-back-title">
          <span aria-hidden="true">${event.icon}</span>
          <h3>${event.name}</h3>
        </div>
        <div class="event-details">
          <div class="event-detail"><span>Prize pool</span><strong>${event.prize}</strong></div>
          <div class="event-detail"><span>Entry fee</span><strong>${event.fee}</strong></div>
          <div class="event-detail"><span>Venue</span><strong title="${event.venue}">${event.venue}</strong></div>
          <div class="event-detail"><span>Team size</span><strong>${event.team}</strong></div>
          <div class="event-detail"><span>Date</span><strong>${event.date}</strong></div>
        </div>
        <div class="event-back-actions">
          <a href="${REGISTRATION_URL}" target="_blank" rel="noopener noreferrer" aria-label="Register for ${event.name} on Google Forms">Register Now <i aria-hidden="true">↗</i></a>
          ${event.brochure ? (event.brochureReady
            ? `<a class="brochure-link" href="${event.brochure}" target="_blank" rel="noopener noreferrer" aria-label="Open ${event.name} brochure PDF">Brochure <i aria-hidden="true">↗</i></a>`
            : `<button class="brochure-button" type="button" data-event="${event.name}" data-brochure="${event.brochure}" aria-label="${event.name} brochure coming soon">Brochure <i aria-hidden="true">↗</i></button>`
          ) : ""}
        </div>
      </div>
    </div>
  </article>
`).join("");

const peopleGrid = document.getElementById("peopleGrid");
let revealObserver = null;

function observePersonCards() {
  const cards = peopleGrid.querySelectorAll(".person-card");
  if (!revealObserver) {
    cards.forEach((card) => card.classList.add("visible"));
    return;
  }
  cards.forEach((card) => revealObserver.observe(card));
}

function renderPeople(filter = "all") {
  const filteredPeople = filter === "all" ? people : people.filter((person) => person.group === filter);
  peopleGrid.innerHTML = filteredPeople.map((person, index) => `
    <article class="person-card" style="--delay:${Math.min(index * 35, 245)}ms">
      <img src="${person.image}" alt="${person.name}" width="560" height="720" loading="lazy" decoding="async">
      <div class="person-info">
        <h3 title="${person.name}">${person.name}</h3>
        <p title="${person.group}">${person.title} · ${person.group}</p>
      </div>
    </article>
  `).join("");
  observePersonCards();
}

document.querySelectorAll(".committee-filter").forEach((button) => {
  button.setAttribute("aria-pressed", String(button.classList.contains("active")));
  button.addEventListener("click", () => {
    document.querySelectorAll(".committee-filter").forEach((item) => {
      item.classList.remove("active");
      item.setAttribute("aria-pressed", "false");
    });
    button.classList.add("active");
    button.setAttribute("aria-pressed", "true");
    renderPeople(button.dataset.filter);
  });
});

const toast = document.getElementById("toast");
let toastTimer;

function showToast(message) {
  window.clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add("show");
  toastTimer = window.setTimeout(() => toast.classList.remove("show"), 2800);
}

document.querySelectorAll(".brochure-button").forEach((button) => {
  button.addEventListener("click", (event) => {
    event.stopPropagation();
    showToast(`${button.dataset.event} brochure will be published shortly.`);
  });
});

const touchInterface = window.matchMedia("(hover: none), (pointer: coarse)");
document.querySelectorAll(".flip-card").forEach((card) => {
  card.addEventListener("click", (event) => {
    if (event.target.closest("a, button")) return;
    if (touchInterface.matches) card.classList.toggle("flipped");
  });

  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      card.classList.toggle("flipped");
    }
  });
});

const heroGrid = document.getElementById("heroGrid");
const gridColumns = 18;
const gridRows = 14;
const gridColors = ["#56d9e9", "#8e7ee8", "#f0b233"];
const gridFragment = document.createDocumentFragment();

for (let index = 0; index < gridColumns * gridRows; index += 1) {
  const cell = document.createElement("span");
  cell.className = "grid-cell";
  cell.dataset.index = String(index);
  cell.style.setProperty("--cell-color", gridColors[(Math.floor(index / gridColumns) + index) % gridColors.length]);
  gridFragment.appendChild(cell);
}
heroGrid.appendChild(gridFragment);

let litCells = [];
function clearLitCells() {
  litCells.forEach((cell) => cell?.classList.remove("lit"));
  litCells = [];
}

heroGrid.addEventListener("pointerover", (event) => {
  const cell = event.target.closest(".grid-cell");
  if (!cell) return;
  clearLitCells();
  const index = Number(cell.dataset.index);
  const nearby = [index, index - 1, index + 1, index - gridColumns, index + gridColumns];
  litCells = nearby.map((item) => heroGrid.children[item]).filter(Boolean);
  litCells.forEach((item, position) => {
    item.classList.add("lit");
    item.style.opacity = String(Math.max(.5, .96 - position * .12));
  });
});

heroGrid.addEventListener("pointerleave", () => {
  litCells.forEach((cell) => cell.style.removeProperty("opacity"));
  clearLitCells();
});

const heroSparks = document.getElementById("heroSparks");
const sparkPalette = ["#59d9e9", "#f2b532", "#f13992", "#b5a9ff"];
const sparkFragment = document.createDocumentFragment();

for (let index = 0; index < 24; index += 1) {
  const spark = document.createElement("span");
  spark.style.setProperty("--spark-x", `${8 + Math.random() * 88}%`);
  spark.style.setProperty("--spark-y", `${8 + Math.random() * 84}%`);
  spark.style.setProperty("--spark-size", `${2 + Math.random() * 4}px`);
  spark.style.setProperty("--spark-color", sparkPalette[index % sparkPalette.length]);
  spark.style.setProperty("--spark-delay", `${-Math.random() * 6}s`);
  spark.style.setProperty("--spark-duration", `${3.5 + Math.random() * 4.5}s`);
  sparkFragment.appendChild(spark);
}
heroSparks.appendChild(sparkFragment);

const siteHeader = document.getElementById("siteHeader");
const primaryNav = document.getElementById("primaryNav");
const menuButton = document.getElementById("menuButton");
const backToTop = document.getElementById("backToTop");
const scrollProgress = document.querySelector("#scrollProgress span");
const hero = document.getElementById("home");
const navLinks = [...document.querySelectorAll(".nav-link")];
const navIndicator = document.getElementById("navIndicator");
let headerCompact = null;
let resizeFrame = 0;
let scrollFrame = 0;

function positionNavIndicator(link = document.querySelector(".nav-link.active")) {
  if (!link || window.innerWidth <= 860) return;
  const navigationBox = primaryNav.getBoundingClientRect();
  const linkBox = link.getBoundingClientRect();
  navIndicator.style.width = `${linkBox.width}px`;
  navIndicator.style.transform = `translate(${linkBox.left - navigationBox.left}px, -50%)`;
  navIndicator.classList.add("ready");
}

function closeMenu() {
  primaryNav.classList.remove("open");
  menuButton.classList.remove("active");
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", "Open navigation");
  document.body.classList.remove("menu-open");
}

menuButton.addEventListener("click", () => {
  const open = primaryNav.classList.toggle("open");
  menuButton.classList.toggle("active", open);
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
  document.body.classList.toggle("menu-open", open);
});

primaryNav.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
navLinks.forEach((link) => {
  link.addEventListener("pointerenter", () => positionNavIndicator(link));
  link.addEventListener("focus", () => positionNavIndicator(link));
});
primaryNav.addEventListener("pointerleave", () => positionNavIndicator());
window.addEventListener("resize", () => {
  if (resizeFrame) return;
  resizeFrame = window.requestAnimationFrame(() => {
    if (window.innerWidth > 860) closeMenu();
    positionNavIndicator();
    updateScrollUI();
    resizeFrame = 0;
  });
});

function updateScrollUI() {
  scrollFrame = 0;
  const scrollTop = window.scrollY;
  const scrollRange = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
  const compact = scrollTop > 100;
  siteHeader.classList.toggle("scrolled", compact);
  backToTop.classList.toggle("show", scrollTop > 640);
  scrollProgress.style.transform = `scaleX(${Math.min(scrollTop / scrollRange, 1)})`;
  if (!prefersReducedMotion.matches && scrollTop < hero.offsetHeight * 1.1) {
    hero.style.setProperty("--hero-shift", `${Math.min(scrollTop * .045, 34)}px`);
  }
  if (compact !== headerCompact) {
    headerCompact = compact;
    window.requestAnimationFrame(() => positionNavIndicator());
  }
}

function scheduleScrollUI() {
  if (!scrollFrame) scrollFrame = window.requestAnimationFrame(updateScrollUI);
}

window.addEventListener("scroll", scheduleScrollUI, { passive: true });
updateScrollUI();
backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: prefersReducedMotion.matches ? "auto" : "smooth" });
});
window.requestAnimationFrame(() => positionNavIndicator());
siteHeader.addEventListener("animationend", () => positionNavIndicator());
siteHeader.addEventListener("transitionend", (event) => {
  if (event.propertyName === "width" || event.propertyName === "top") positionNavIndicator();
});

if ("IntersectionObserver" in window) {
  const navObserver = new IntersectionObserver((entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!visible) return;
    navLinks.forEach((link) => {
      const active = link.getAttribute("href") === `#${visible.target.id}`;
      link.classList.toggle("active", active);
      if (active) link.setAttribute("aria-current", "location");
      else link.removeAttribute("aria-current");
    });
    positionNavIndicator();
  }, { rootMargin: "-30% 0px -58%", threshold: [0, .2, .5] });

  document.querySelectorAll("main section[id]").forEach((section) => navObserver.observe(section));

  revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
        if (entry.target.classList.contains("person-card")) {
          window.setTimeout(() => entry.target.style.setProperty("--delay", "0ms"), 900);
        }
      }
    });
  }, { threshold: .12, rootMargin: "0px 0px -40px" });

  document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));
} else {
  document.querySelectorAll(".reveal").forEach((element) => element.classList.add("visible"));
}

renderPeople();

const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");
const contactCard = document.querySelector(".contact-card");
const contactParticles = document.getElementById("contactParticles");
const particlePalette = ["#f13693", "#7869dd", "#e9a900"];
const particleFragment = document.createDocumentFragment();

for (let index = 0; index < 28; index += 1) {
  const particle = document.createElement("span");
  particle.style.setProperty("--particle-x", `${4 + Math.random() * 92}%`);
  particle.style.setProperty("--particle-y", `${4 + Math.random() * 38}%`);
  particle.style.setProperty("--particle-size", `${1 + Math.random() * 2.5}px`);
  particle.style.setProperty("--particle-color", particlePalette[index % particlePalette.length]);
  particle.style.setProperty("--particle-duration", `${2.8 + Math.random() * 4.2}s`);
  particle.style.setProperty("--particle-delay", `${-Math.random() * 5}s`);
  particleFragment.appendChild(particle);
}
contactParticles.appendChild(particleFragment);

if (window.matchMedia("(hover: hover) and (pointer: fine)").matches && !prefersReducedMotion.matches) {
  let contactFrame = 0;
  contactCard.addEventListener("pointermove", (event) => {
    if (contactFrame) return;
    contactFrame = window.requestAnimationFrame(() => {
      const box = contactCard.getBoundingClientRect();
      const x = (event.clientX - box.left) / box.width;
      const y = (event.clientY - box.top) / box.height;
      contactCard.style.setProperty("--spot-x", `${x * 100}%`);
      contactCard.style.setProperty("--spot-y", `${y * 100}%`);
      contactCard.style.setProperty("--contact-rx", `${(0.5 - y) * 1.8}deg`);
      contactCard.style.setProperty("--contact-ry", `${(x - 0.5) * 1.8}deg`);
      contactFrame = 0;
    });
  });
  contactCard.addEventListener("pointerleave", () => {
    if (contactFrame) window.cancelAnimationFrame(contactFrame);
    contactFrame = 0;
    contactCard.style.setProperty("--spot-x", "50%");
    contactCard.style.setProperty("--spot-y", "10%");
    contactCard.style.setProperty("--contact-rx", "0deg");
    contactCard.style.setProperty("--contact-ry", "0deg");
  });
}

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!contactForm.reportValidity()) return;
  const formData = new FormData(contactForm);
  const name = String(formData.get("name") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const message = String(formData.get("message") || "").trim();
  const subject = `TESLAMS '26 enquiry from ${name}`;
  const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
  const submitButton = contactForm.querySelector('button[type="submit"]');
  submitButton.classList.add("sending");
  formStatus.textContent = "Opening your email app with the message prepared…";
  formStatus.classList.add("show");
  window.setTimeout(() => {
    submitButton.classList.remove("sending");
    window.location.href = `mailto:amseeesymposium@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }, 220);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeMenu();
});

document.addEventListener("pointerdown", (event) => {
  if (primaryNav.classList.contains("open") && !siteHeader.contains(event.target)) closeMenu();
});
