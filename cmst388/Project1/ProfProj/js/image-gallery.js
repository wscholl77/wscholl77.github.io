function swap1(image) {
  var pic1 = document.getElementById("a").src;
  document.getElementById("photo1").src = pic1;
  }
  function swap2(image) {
  var pic2 = document.getElementById("b").src;
  document.getElementById("photo1").src = pic2;
  }
  function swap3(image) {
  var pic3 = document.getElementById("c").src;
  document.getElementById("photo1").src = pic3;
  }
  function swap4(image) {
  var pic4 = document.getElementById("d").src;
  document.getElementById("photo1").src = pic4;
  }
  function swap5(image) {
  var pic5 = document.getElementById("e").src;
  document.getElementById("photo1").src = pic5;
  }

caption.addEventListener("mouseover",function (event) {
  caption.className = "featured caption";
});
caption.addEventListener("mouseout", function (event) {
  caption.className = "featured caption";
  caption.style.opacity = "0.5";
});
