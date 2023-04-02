var modal = document.getElementById("myModal");

var img = document.getElementById("jsImgHeader");
var modalImg = document.getElementById("popImg");
img.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
};

var span = document.getElementsByClassName("close")[0];

span.onclick = function () {
  modal.style.display = "none";
};
