const addInfoIconAndArrow = () => {
  const listItems = document.querySelectorAll("li");

  listItems.forEach((item) => {
    const description = item.getAttribute("data-description");

    if (description !== "") {
      const infoIcon = document.createElement("div");

      infoIcon.classList.add("info-icon");
      item.appendChild(infoIcon);
    }

    if (item.classList.contains("li-expandable-item")) {
      const arrowIcon = document.createElement("div");
      arrowIcon.classList.add("arrow");
      item.appendChild(arrowIcon);
    }
  });
};

window.onload = () => {
  addInfoIconAndArrow();
};
