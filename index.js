$(".theButton").on("click", function () {
  $("button").css("visibility", "hidden");

  setTimeout(() => {
    $(".loader").css("visibility", "visible");
    $(".loaderP").css("visibility", "visible");
  }, 1000);
  $(".loader").addClass("afterOne");
  $(".loader").addClass("beforeOne");

  setTimeout(() => {
    $(".card").css("visibility", "visible");
    $(".dismiss").css("visibility", "visible");
    $(".loader").css("visibility", "hidden");
    $(".loaderP").css("visibility", "hidden");
  }, 1000 * 5);
});

$(".dismiss").on("click", () => {
  $(".card").css("visibility", "hidden");
  $(".dismiss").css("visibility", "hidden");
  location.reload();
});
