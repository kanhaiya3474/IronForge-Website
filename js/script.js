// --- 1. Header Scroll Effect ---
const header = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("shadow");
  } else {
    header.classList.remove("shadow");
  }
});

// 1. Define your image paths here
const sectorImages = {
  // Use your actual file paths here. I added placeholders for demonstration.
  firstImage: "/images/cover-img1.jpg",
  secondImage: "/images/cover-img2.jpg",
  thirdImage: "/images/cover-img3.jpg",
  fourthImage: "/images/cover-img4.jpg",
  fifthImage: "/images/cover-img5.jpg",
};

// 2. The function to switch the image
function changeIndustryImage(sectorKey) {
  const imageElement = document.getElementById("main-industry-image");

  // Check if the image exists in our list before switching
  if (sectorImages[sectorKey]) {
    imageElement.src = sectorImages[sectorKey];
  } else {
    console.log("Image key not found:", sectorKey);
  }
}
// Project Counter

const counters = document.querySelectorAll(".counter");
const duration = 8000; // 2 seconds for all counters

const startCounters = () => {
  const startTime = performance.now();

  counters.forEach((counter) => {
    counter._target = +counter.getAttribute("data-target");
    counter._suffix = counter.getAttribute("data-suffix") || "";
  });

  const animate = (currentTime) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    counters.forEach((counter) => {
      const value = Math.floor(counter._target * progress);
      counter.innerText = value + counter._suffix;
    });

    if (progress < 1) {
      requestAnimationFrame(animate);
    } else {
      counters.forEach((counter) => {
        counter.innerText = counter._target + counter._suffix;
      });
    }
  };

  requestAnimationFrame(animate);
};

startCounters();

function showMaterial(id) {
  // hide all content
  document.querySelectorAll(".material-box").forEach((box) => {
    box.classList.remove("active");
  });

  // remove active from tabs
  document.querySelectorAll(".material-tabs li").forEach((tab) => {
    tab.classList.remove("active");
  });

  // show selected
  document.getElementById(id).classList.add("active");

  // add active tab
  event.target.classList.add("active");
}
