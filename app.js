const $ = (id) => document.getElementById(id);
const loadQuote = () => {
  $("loading").style.display = "inline";
  $("aero").style.display = "none";
  let quote;
  fetch("https://api.kanye.rest")
    .then((res) => res.json())
    .then((data) => (quote = data.quote));
  setTimeout(() => {
    $("loading").style.display = "none";
    $("quote").innerText = quote;
    $("aero").style.display = "inline";
  }, 500);
  $("writer").innerText = "- Kanye West 🐶";
};
