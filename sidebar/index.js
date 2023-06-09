const childElements = document.querySelectorAll(".li-item-regular");
let timeoutId;

const addInfoIconAndArrow = () => {
  childElements.forEach(function (childElement) {
    const parentUl = childElement.closest("ul");
  });

  const listItems = document.querySelectorAll("li");

  listItems.forEach((item) => {
    const description = item.getAttribute("data-description");
    const containerDiv = document.createElement("div");

    item.addEventListener("mouseenter", () => {
      const nestedUl = item.querySelector("ul");
      if (nestedUl) {
        nestedUl.classList.add("show");
      }
    });

    item.addEventListener("mouseleave", () => {
      const nestedUl = item.querySelector("ul");

      if (nestedUl) {
        nestedUl.classList.remove("show");
      }
    });

    if (description && description !== "") {
      containerDiv.classList.add("info-arrow-div");
      const infoIcon = document.createElement("div");
      infoIcon.innerText = "i";
      infoIcon.classList.add("info-icon");
      containerDiv.append(infoIcon);
      item.append(containerDiv);
      const infoDiv = document.createElement("div");
      infoDiv.classList.add("info");
      infoDiv.innerText = description;

      infoIcon.addEventListener("mouseenter", () => {
        clearTimeout(timeoutId);
        containerDiv.append(infoDiv);
      });

      infoIcon.addEventListener("mouseleave", () => {
        clearTimeout(timeoutId);
        infoDiv.remove();
      });
    }

    if (item.classList.contains("li-expandable-item")) {
      const arrowIcon = document.createElement("div");
      arrowIcon.classList.add("arrow");
      containerDiv.append(arrowIcon);
      item.append(containerDiv);
    }
  });
};

const keepMenuOpen = () => {
  const listItems = document.querySelectorAll(".list-items");
  const overlay = document.querySelector(".hover");
  let timer;

  listItems.forEach((item) => {
    item.addEventListener("mouseenter", () => {
      clearTimeout(timer);
      overlay.style.display = "none";
    });
  });

  overlay.addEventListener("mouseenter", () => {
    clearTimeout(timer);
  });

  overlay.addEventListener("mouseleave", () => {
    overlay.style.display = "none";
  });
};

window.onload = () => {
  addInfoIconAndArrow();
  keepMenuOpen();
};
