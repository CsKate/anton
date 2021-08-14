window.onscroll = function () {
  scrollFunction();
};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

var content = document.getElementById("frontpage-content");

function scrollFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    content.classList.add("paddingtop");
  } else {
    header.classList.remove("sticky");
    header.classList.add("paddingtopno");
  }

  console.log("Header: ");
  console.log(header);
  console.log("Sticky: ");
  console.log(sticky);
}
