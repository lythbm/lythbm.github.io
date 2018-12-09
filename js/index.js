(function() {
  var oToTop = document.getElementById("toTop");

  function showTop() {
    var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
    if (currentScroll > 300) {
      oToTop.style.display = "block";
    } else {
      oToTop.style.display = "none";
    }
  }

  showTop();

  document.addEventListener("scroll", function() {
    showTop();
  }, false);

  function smoothscroll() {
    var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
    if (currentScroll > 0) {
      window.requestAnimationFrame(smoothscroll);
      window.scrollTo(0, currentScroll - currentScroll / 5);
    }
  }

  oToTop.addEventListener("click", smoothscroll, false);
})();
