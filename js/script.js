let likeCount = 0;
let curtido = false;

function curtir() {
  likeCount++;
  document.getElementById("likeCount").innerText = likeCount;
}

document.getElementById("likeBtn").addEventListener("click", curtir);
