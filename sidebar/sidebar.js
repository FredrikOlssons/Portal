// select all elements with descriptions
const elementsWithInfo = document.querySelectorAll(
  ".list-items[data-description]"
);

// loop through each element and add event listener
elementsWithInfo.forEach((elementWithInfo) => {
  const description = elementWithInfo.dataset.description;

  if (description) {
    // Create container div for info-icon and arrow
    const containerDiv = document.createElement("div");
    containerDiv.classList.add("info-arrow-div");
    elementWithInfo.appendChild(containerDiv);

    // Create info-icon element
    const infoIcon = document.createElement("div");
    infoIcon.classList.add("info-icon");
    infoIcon.innerText = "i";
    containerDiv.appendChild(infoIcon);

    // Create info div
    const infoDiv = document.createElement("div");
    infoDiv.classList.add("info");
    infoDiv.innerText = description;

    // Event listener for mouseover on info icon
    infoIcon.addEventListener("mouseover", () => {
      // Delay in milliseconds (e.g., 500ms)
      const delay = 500;
      timeoutId = setTimeout(() => {
        elementWithInfo.appendChild(infoDiv);
      }, delay);
    });

    // Event listener for mouseout on info icon
    infoIcon.addEventListener("mouseout", () => {
      clearTimeout(timeoutId); // cancel the timeout if the mouseout happens before the delay
      infoDiv.remove();
    });
  }
});

// Function to add arrow to expandable items
function addArrow(expandableItem) {
  const arrow = document.createElement("div");
  arrow.classList.add("arrow");
  const infoArrowDiv = expandableItem.querySelector(".info-arrow-div");
  if (infoArrowDiv) {
    infoArrowDiv.appendChild(arrow);
  }
}

// Call the addArrow function for each expandable item
const expandableItems = document.querySelectorAll(".li-expandable-item");
expandableItems.forEach(addArrow);
