let count = localStorage.getItem("downloads") || 0;
document.getElementById("count").innerText = count;

function countDownload() {
  count++;
  localStorage.setItem("downloads", count);
}
