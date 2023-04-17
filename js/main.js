const filterBtns = document.querySelectorAll(".our-work .nav .btn");
let navFilterData = localStorage.getItem("nav-filter-data");
window.onload = () => {
  if (navFilterData) {
    document.querySelector(`[data-filter="${navFilterData}"]`).click();
  }
};
document.addEventListener("click", (e) => {
  filterBtns.forEach((filterBtn) => {
    if (e.target === filterBtn && !filterBtn.classList.contains("active")) {
      localStorage.setItem("nav-filter-data", filterBtn.dataset.filter);
      removeActiveClass(".our-work .nav .btn.active");
      filterBtn.classList.add("active");
      filterBtn.ariaSelected = true;
      // Specific Class to hide .all elements
      document.querySelectorAll(".our-work .all").forEach((element) => {
        element.classList.add("hide");
      });
      // Specific Class to show the corresponding filter elements
      document.querySelectorAll(filterBtn.dataset.filter).forEach((element) => {
        element.classList.remove("hide");
      });
      document.querySelectorAll(filterBtn.dataset.filter).forEach((element) => {
        element.classList.add("show");
      });
    }
  });
});
// Header Bg Change While Scrolling
document.addEventListener("scroll", () => {
  if (scrollY >= 70) {
    document.querySelector("header").style.backgroundColor = "#3d3e52";
  } else {
    document.querySelector("header").style.backgroundColor =
      "var(--dark-color)";
  }
});
function removeActiveClass(cssStringQuery) {
  document.querySelector(cssStringQuery).classList.remove("active");
}
