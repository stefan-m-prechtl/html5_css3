document.addEventListener("DOMContentLoaded", init);

// "JQuery-Ersatz"
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

function init() {
  // Erstes h2-Element
  let h2 = document.querySelector("h2");
  console.log(h2);
  h2.innerHTML = "Hello";

  // Erstes p-Element mit class="js"
  let p = document.querySelector("p.js");
  console.log(p);
  p.innerHTML = "Dieser Inhalt wird dynamisch mit JS erzeugt!";

  // (Erstes) Element mit id="impressum"
  let impressum = document.querySelector("#impressum");
  console.log(impressum);
  // Selektion auf einzelnem Element!
  console.log(impressum.querySelector("p").innerHTML);

  // Alle h3-Elemente
  let allH3 = document.querySelectorAll("h3");
  console.log(allH3);
  console.log(allH3[0].innerHTML);
  console.log(allH3.length);

  const allH3Array = Array.from(allH3);
  allH3Array.forEach((h3) => {
    console.log(h3.innerHTML);
  });

  console.log($$("h3"));

  // Eigenschaften von 'document', z.B.:
  console.log(document.title);
  console.log(document.URL);
}
