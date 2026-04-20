let data = JSON.parse(localStorage.getItem("postData")) || {
  likes: 0,
  comments: []
};

function likePost() {
  data.likes++;
  document.getElementById("likes").innerText = data.likes;
  save();
}

function addComment() {
  let txt = commentText.value;
  if (!txt) return;

  data.comments.push("Cliente " + data.comments.length + ": " + txt);
  commentText.value = "";
  render();
  save();
}

function render() {
  comments.innerHTML = data.comments.map(c => `<p>${c}</p>`).join("");
}

function save() {
  localStorage.setItem("postData", JSON.stringify(data));
}

document.getElementById("likes").innerText = data.likes;
render();
