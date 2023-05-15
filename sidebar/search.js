const form = document.querySelector(".form");
const input = document.querySelector("#search");

document.addEventListener("DOMContentLoaded", () => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const query = input.value;
    performSearch(query);
  });
});
function performSearch(query) {
  console.log(`Performing search for "${query}"`);
}
