function showDetails(orderId) {
  var details = document.getElementById("chi-tiet-" + orderId);
  if (details.style.display === "none") {
    details.style.display = "block";
  } else {
    details.style.display = "none";
  }
}
// $(".hamburger .hamburger__inner").click(function () {
//     $(".wrapper").toggleClass("active")
// })

// $(".top_navbar .fas").click(function () {
//     $(".profile_dd").toggleClass("active");
// });
