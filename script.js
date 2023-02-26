//  hideNavbar
function toggleNavbar() {
  var navbar = document.getElementById("navbarNav");
  if (navbar.classList.contains("show")) {
    navbar.classList.remove("show");
  } else {
    navbar.classList.add("show");
  }
}

function hideNavbar() {
  var navbar = document.getElementById("navbarNav");
  navbar.classList.remove("show");
}

//
jQuery("#frmSubmit").on("submit", function (e) {
  e.preventDefault();
  jQuery("#msg").html("Please wait...");
  jQuery("#btnSubmit").attr("disabled", true);
  jQuery.ajax({
    url: "https://script.google.com/macros/s/AKfycbw0qWAnIwjDQ1zRZNoRNtI75vb4TOgF_RndYBgVG_GfBiz76Zxf_2_Olapg4HTvo8J8/exec",
    type: "post",
    data: jQuery("#frmSubmit").serialize(),
    success: function (result) {
      jQuery("#frmSubmit")[0].reset();
      jQuery("#msg").html("Thank You");
      jQuery("#btnSubmit").attr("disabled", false);
      //window.location.href='';
    },
  });
});
