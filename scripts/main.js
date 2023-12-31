const closeBtn = document.querySelector(".close-btn");
const openBtn = document.querySelector(".open-btn");
const sidebar = document.querySelector(".sidebar");
const dashboardContainer = document.querySelector(".dashboard-container");
const submodule = document.querySelector(".submodule");

closeBtn.addEventListener("click", () => {
  sidebar.style.width = "0";
  dashboardContainer.style.margin = "0";
  closeBtn.style.display = "none";
  openBtn.style.display = "block";
});

openBtn.addEventListener("click", () => {
  sidebar.style.width = "300px";
  dashboardContainer.style.margin = "0 0 0 300px";
  closeBtn.style.display = "block";
  openBtn.style.display = "none";
});

function toggleActive(element) {
  element.classList.toggle("active");

  const chevron = element.querySelector(".material-symbols-outlined");
  if (chevron) {
    chevron.classList.toggle("down");
  }

  const sublist = element.nextElementSibling;
  if (sublist && sublist.tagName === "UL") {
    sublist.classList.toggle("expand");
  }

  const listItems = document.querySelectorAll("ul.sub-item li");
  listItems.forEach(function (li) {
    if (li !== element.parentElement) {
      li.classList.remove("active");
      const otherChevron = li.querySelector(".material-symbols-outlined");
      if (otherChevron) {
        otherChevron.classList.remove("down");
      }
      const otherSublist = li.nextElementSibling;
      if (otherSublist && otherSublist.tagName === "UL") {
        otherSublist.classList.remove("expand");
      }
    }
  });
}

function toggleActiveSubitem(element) {
  // Remove the active class from all list items
  const listItems = document.querySelectorAll(".sub-item li");
  listItems.forEach((item) => item.classList.remove("active"));

  // Add the active class to the clicked element
  element.classList.add("active");
}
