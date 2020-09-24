console.log("document, the OG way to manipulate HTML", document)


const title = document.getElementById("title");

console.log("title element:", title);
title.innerHTML = "Hello <del>Surge</del> JS Experts!"

title.addEventListener("click", (event) => {
  console.log("title was clicked! event obj:", event)
  console.log("something often used, event.target:", event.target)
  title.setAttribute("class", "test")
})

let subTitle = document.createElement("p")
subTitle.innerHTML = "hello world"
subTitle.style.color = "blue"
document.body.appendChild(subTitle)