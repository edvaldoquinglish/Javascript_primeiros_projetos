// Scroll suave
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault()
    document.querySelector(link.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' })
  })
})

// Botão voltar ao topo
const btnTop = document.createElement("button")
btnTop.innerText = "↑"
btnTop.style.position = "fixed"
btnTop.style.bottom = "20px"
btnTop.style.right = "20px"
btnTop.style.padding = "10px 14px"
btnTop.style.borderRadius = "50%"
btnTop.style.border = "none"
btnTop.style.cursor = "pointer"
btnTop.style.display = "none"
btnTop.style.background = "#38bdf8"

document.body.appendChild(btnTop)

window.addEventListener("scroll", () => {
  btnTop.style.display = window.scrollY > 300 ? "block" : "none"
})

btnTop.onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" })
}
// Menu mobile
const toggle = document.getElementById("menu-toggle")
const navLinks = document.querySelector(".nav-links")

if (toggle) {
  toggle.addEventListener("click", () => {
    navLinks.classList.toggle("active")
  })
}
