const menuToggle = document.querySelector("[data-menu-toggle]");
const filterButtons = document.querySelectorAll("[data-filter]");
const workCards = document.querySelectorAll("[data-category]");
const contactForm = document.querySelector("[data-contact-form]");
const formNote = document.querySelector("[data-form-note]");
const reelFrames = document.querySelectorAll("[data-reel-frame]");
const scrollProgress = document.createElement("div");

scrollProgress.className = "scroll-progress";
document.body.prepend(scrollProgress);

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    document.body.classList.toggle("nav-open");
    menuToggle.textContent = document.body.classList.contains("nav-open") ? "Close" : "Menu";
  });
}

document.querySelectorAll(".main-nav a").forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("nav-open");
    if (menuToggle) menuToggle.textContent = "Menu";
  });
});

const updateScrollEffects = () => {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollable > 0 ? window.scrollY / scrollable : 0;

  scrollProgress.style.transform = `scaleX(${progress})`;
  document.body.style.setProperty("--grid-shift", `${window.scrollY * -0.04}px`);
};

window.addEventListener("scroll", updateScrollEffects, { passive: true });
window.addEventListener("resize", updateScrollEffects);
updateScrollEffects();

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    workCards.forEach((card) => {
      const shouldShow = filter === "all" || card.dataset.category === filter;
      card.style.display = shouldShow ? "" : "none";
    });
  });
});

reelFrames.forEach((frame) => {
  const video = frame.querySelector("[data-reel-video]");
  const playButton = frame.querySelector("[data-reel-play]");

  if (!video || !playButton) return;

  const syncVideoState = () => {
    frame.classList.toggle("is-playing", !video.paused && !video.ended);
    playButton.setAttribute("aria-label", video.paused ? "Play showreel" : "Pause showreel");
    playButton.title = video.paused ? "Play showreel" : "Pause showreel";
  };

  playButton.addEventListener("click", () => {
    if (video.paused) {
      const playRequest = video.play();
      if (playRequest) playRequest.catch(() => {});
    } else {
      video.pause();
    }
  });

  video.addEventListener("play", syncVideoState);
  video.addEventListener("pause", syncVideoState);
  video.addEventListener("ended", syncVideoState);
  syncVideoState();
});

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (formNote) {
      formNote.textContent = "Thanks. Your inquiry is ready to send. Connect this form to your email or backend next.";
    }
    contactForm.reset();
  });
}

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.14 }
);

document.querySelectorAll(".reveal").forEach((item) => revealObserver.observe(item));
