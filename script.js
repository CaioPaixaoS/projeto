function ToggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img", "#profile img2")

  if (html.classList.contains("light"))
    img.setAttribute("src", "./avatarlight.JPG")
  else {
    img.setAttribute("src", "./234.JPG")
  }
}
