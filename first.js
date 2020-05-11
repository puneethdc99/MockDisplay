var items = document.querySelectorAll(".circle a");

for (var i = 0, l = items.length; i < l; i++) {
  items[i].style.left =
    (50 - 35 * Math.cos(-0.5 * Math.PI - 2 * (1 / l) * i * Math.PI)).toFixed(
      4
    ) + "%";

  items[i].style.top =
    (50 + 35 * Math.sin(-0.5 * Math.PI - 2 * (1 / l) * i * Math.PI)).toFixed(
      4
    ) + "%";
}

document.querySelector(".menu-button").onclick = function (e) {
  e.preventDefault();
  document.querySelector(".circle").classList.toggle("open");
};

$(document).ready(function () {
  function radialMenu() {
    $(".radial-nav").on("click", function (evt) {
      evt.stopPropagation();
      $(".nav, .item").removeClass("active");
      $(this).toggleClass("expanded");
      $(this).find("li").removeClass("selected");
    });

    $(".radial-nav li")
      .not(".menu")
      .click(function (evt) {
        evt.stopPropagation();
        $(this).addClass("selected");
        $(".nav").addClass("active");
        $(".radial-nav").removeClass("expanded");
        getContent(this);
      });

    function getContent(elem) {
      $("#" + $(elem).attr("data-content")).addClass("active");
    }
  }
  radialMenu();
});
