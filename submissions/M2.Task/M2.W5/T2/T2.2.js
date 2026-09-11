const listEl = document.querySelector("#daftar");

listEl.addEventListener("click", (event) => {
  console.log(event.target.tagName);

  if (event.target.tagName === "LI") {
    console.log("diklik:", event.target.textContent);
  }
});