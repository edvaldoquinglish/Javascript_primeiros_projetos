/* ========= CLIENTE ID ========= */
if (!localStorage.getItem("clientId")) {
  const id = Math.floor(Math.random() * 1000)
  localStorage.setItem("clientId", "Cliente " + id)
}

const clientId = localStorage.getItem("clientId")

/* ========= VIEWS ========= */
let views = Number(localStorage.getItem("postViews")) || 0
views++
localStorage.setItem("postViews", views)

const viewsEl = document.getElementById("views")
if (viewsEl) {
  viewsEl.innerText = `👁️ Visualizações desta página: ${views}`
}

/* ========= LIKES ========= */
let likes = Number(localStorage.getItem("postLikes")) || 0
const likesEl = document.getElementById("likes")
likesEl.innerText = likes

function likePost() {
  likes++
  localStorage.setItem("postLikes", likes)
  likesEl.innerText = likes
}

/* ========= COMENTÁRIOS ========= */
function addComment() {
  const text = document.getElementById("comment").value.trim()
  if (!text) return

  const comments = JSON.parse(localStorage.getItem("postComments")) || []

  comments.push({
    client: clientId,
    text: text,
    date: new Date().toLocaleString()
  })

  localStorage.setItem("postComments", JSON.stringify(comments))
  document.getElementById("comment").value = ""
  renderComments()
}

function renderComments() {
  const comments = JSON.parse(localStorage.getItem("postComments")) || []
  const div = document.getElementById("comments")
  div.innerHTML = "<h4>💬 Comentários</h4>"

  comments.forEach(c => {
    div.innerHTML += `
      <p>
        <strong>${c.client}</strong> <br>
        ${c.text} <br>
        <small style="opacity:0.6;">${c.date}</small>
      </p>
      <hr style="opacity:0.1;">
    `
  })
}

renderComments()
