let db = JSON.parse(localStorage.getItem("videosDB")) || {};

document.querySelectorAll(".video-post").forEach(post => {
  const id = post.dataset.id;

  if (!db[id]) {
    db[id] = { likes: 0, views: 0, comments: [] };
  }

  const likesSpan = post.querySelector(".likes");
  const viewsSpan = post.querySelector(".views");
  const likeBtn = post.querySelector(".like-btn");
  const commentBtn = post.querySelector(".comment-btn");
  const commentText = post.querySelector(".comment-text");
  const commentList = post.querySelector(".comment-list");

  // Views
  db[id].views++;
  viewsSpan.innerText = db[id].views;

  // Likes
  likesSpan.innerText = db[id].likes;
  likeBtn.onclick = () => {
    db[id].likes++;
    likesSpan.innerText = db[id].likes;
    saveDB();
  };

  // Comentários
  function renderComments() {
    commentList.innerHTML = "";
    db[id].comments.forEach(c => {
      const p = document.createElement("p");
      p.innerHTML = `<strong>${c.client}:</strong> ${c.text}`;
      commentList.appendChild(p);
    });
  }

  commentBtn.onclick = () => {
    if (!commentText.value.trim()) return;

    db[id].comments.push({
      client: "Cliente " + (db[id].comments.length + 1),
      text: commentText.value
    });

    commentText.value = "";
    renderComments();
    saveDB();
  };

  renderComments();
});

function saveDB() {
  localStorage.setItem("videosDB", JSON.stringify(db));
 
}
