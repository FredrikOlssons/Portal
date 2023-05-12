window.addEventListener("DOMContentLoaded", () => {
  const main = document.querySelector("main");
  let headerHeight = document.querySelector("header").clientHeight;
  main.style.height = `calc(100vh - ${headerHeight}px`;
  const ulElements = document.querySelectorAll("ul");

  const setLiColumns = () => {
    let availableHeight = main.clientHeight;
    const bottomMain = availableHeight - headerHeight;

    /* ulElements.forEach((ul) => {
      const listItems = ul.querySelectorAll(".list-items-regular");
     const listItemsHeight = listItems[0].clientHeight;

      if (listItemsHeight > bottomMain) {
        ul.style.columnCount = 2;
      } else {
        ul.style.columnCount = 1;
      }
    }); */
  };

  setLiColumns();

  window.addEventListener("resize", setLiColumns);
});
