/* =========================
   PROJECT DATA
   ========================= */

const projects = {
  "project-1": {
    title: "4-Room HDB · Punggol",
    desc: "A warm and functional home makeover, designed to support comfort and daily living for a family of five.",
    images: [
      "assets/images/projects/p1/1.jpg",
      "assets/images/projects/p1/2.jpg",
      "assets/images/projects/p1/3.jpg",
      "assets/images/projects/p1/4.jpg",
      "assets/images/projects/p1/5.jpg",
      "assets/images/projects/p1/6.jpg",
      "assets/images/projects/p1/7.jpg",
      "assets/images/projects/p1/8.jpg"
    ]
  },
  "project-2": {
    title: "Bathroom Renovation",
    desc: "Compact bathroom renovation with improved layout and storage.",
    images: [
      "assets/images/projects/p2/1.jpg",
      "assets/images/projects/p2/2.jpg",
      "assets/images/projects/p2/3.jpg"
    ]
  },
  "project-3": {
    title: "Custom Carpentry",
    desc: "Built-in cabinets and carpentry works tailored to the homeowner’s needs.",
    images: [
      "assets/images/projects/p3/1.jpg",
      "assets/images/projects/p3/2.jpg",
      "assets/images/projects/p3/3.jpg",
      "assets/images/projects/p3/4.jpg",
      "assets/images/projects/p3/5.jpg",
      "assets/images/projects/p3/6.jpg",
      "assets/images/projects/p3/7.jpg",
      "assets/images/projects/p3/8.jpg"
    ]
  },
  "project-4": {
    title: "Kitchen Revamp · Bukit Panjang",
    desc: "A completed kitchen revamp in the West, thoughtfully designed to balance functionality and style for everyday living.",
    images: [
      "assets/images/projects/p4/1.jpg",
      "assets/images/projects/p4/2.jpg",
      "assets/images/projects/p4/3.jpg"
    ]
  },
  "project-5": {
    title: "3-Room Condo · Pasir Ris",
    desc: "A modern condo renovation in Pasir Ris, showcasing a well-balanced wet and dry kitchen layout with soothing tones and refined detailing.",
    images: [
      "assets/images/projects/p5/1.jpg",
      "assets/images/projects/p5/2.jpg",
      "assets/images/projects/p5/3.jpg",
      "assets/images/projects/p5/4.jpg",
      "assets/images/projects/p5/5.jpg",
      "assets/images/projects/p5/6.jpg"
    ]
  }
};

/* =========================
   ELEMENTS
   ========================= */

const modal = document.querySelector(".project-modal");
const modalInner = document.querySelector(".project-modal-inner");
const titleEl = document.getElementById("project-title");
const descEl = document.getElementById("project-desc");
const imgEl = document.getElementById("project-image");
const closeBtn = document.querySelector(".project-close");
const nextBtn = document.querySelector(".carousel-btn.next");
const prevBtn = document.querySelector(".carousel-btn.prev");

let currentImages = [];
let currentIndex = 0;
let lastFocusedElement = null;

/* =========================
   KEYBOARD HANDLER
   ========================= */

function handleKeydown(e) {
  if (e.key === "Escape") {
    closeModal();
  }

  if (e.key === "ArrowRight") {
    nextBtn.click();
  }

  if (e.key === "ArrowLeft") {
    prevBtn.click();
  }
}

/* =========================
   OPEN MODAL
   ========================= */

function openModal(project) {
  lastFocusedElement = document.activeElement;

  currentImages = project.images;
  currentIndex = 0;

  titleEl.textContent = project.title;
  descEl.textContent = project.desc;
  imgEl.src = currentImages[0];
  imgEl.alt = project.title + " renovation photo";

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";

  document.addEventListener("keydown", handleKeydown);

  // Move focus into modal
  closeBtn.focus();
}

/* =========================
   CLOSE MODAL
   ========================= */

function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";

  document.removeEventListener("keydown", handleKeydown);

  if (lastFocusedElement) {
    lastFocusedElement.focus();
    lastFocusedElement = null;
  }
}

/* =========================
   CARD CLICK BINDING
   ========================= */

document.querySelectorAll(".project-card").forEach(card => {
  card.addEventListener("click", () => {
    const project = projects[card.dataset.project];
    if (!project) return;
    openModal(project);
  });
});

/* =========================
   BUTTON CONTROLS
   ========================= */

closeBtn.addEventListener("click", closeModal);

nextBtn.addEventListener("click", () => {
  if (!currentImages.length) return;
  currentIndex = (currentIndex + 1) % currentImages.length;
  imgEl.src = currentImages[currentIndex];
});

prevBtn.addEventListener("click", () => {
  if (!currentImages.length) return;
  currentIndex =
    (currentIndex - 1 + currentImages.length) % currentImages.length;
  imgEl.src = currentImages[currentIndex];
});