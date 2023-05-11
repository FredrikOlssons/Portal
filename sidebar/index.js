const addInfoIconAndArrow = () => {
  const listItems = document.querySelectorAll("li");

  listItems.forEach((item) => {
    const description = item.getAttribute("data-description");

    const containerDiv = document.createElement("div");

    if (description !== "") {
      containerDiv.classList.add("info-arrow-div");
      const infoIcon = document.createElement("div");
      infoIcon.innerText = "i";
      infoIcon.classList.add("info-icon");
      containerDiv.append(infoIcon);
      item.append(containerDiv);
      const infoDiv = document.createElement("div");
      infoDiv.classList.add("info");
      infoDiv.innerText = description;
      infoIcon.addEventListener("mouseover", () => {
        const delay = 500;
        timeoutId = setTimeout(() => {
          containerDiv.append(infoDiv);
        }, delay);
        infoIcon.addEventListener("mouseout", () => {
          clearTimeout(timeoutId);
          infoDiv.remove();
        });
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

window.onload = () => {
  addInfoIconAndArrow();
};
