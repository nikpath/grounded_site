/*!
 * Start Bootstrap - Resume v7.0.5 (https://startbootstrap.com/theme/resume)
 * Copyright 2013-2022 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
 */
//
// Scripts
//

window.addEventListener("DOMContentLoaded", (event) => {
  // Activate Bootstrap scrollspy on the main nav element
  const sideNav = document.body.querySelector("#sideNav");
  if (sideNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: "#sideNav",
      offset: 74,
    });
  }

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector(".navbar-toggler");
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll("#navbarResponsive .nav-link")
  );
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener("click", () => {
      if (window.getComputedStyle(navbarToggler).display !== "none") {
        navbarToggler.click();
      }
    });
  });

  // Get the modal
  var measuringModal = document.getElementById("measuringModal");
  var mitigatingModal = document.getElementById("mitigatingModal");
  var designingModal = document.getElementById("designingModal");
  var jan22BlogModal = document.getElementById("jan22BlogModal");
  var feb6BlogModal = document.getElementById("feb6BlogModal");
  var feb12BlogModal = document.getElementById("feb12BlogModal");
  var mar5BlogModal = document.getElementById("mar5BlogModal");

  // Get the button that opens the modal
  var measuringbtn = document.getElementById("measuringBtn");
  var mitigatingbtn = document.getElementById("mitigatingBtn");
  var designingbtn = document.getElementById("designingBtn");
  var jan22BlogBtn = document.getElementById("jan22BlogBtn");
  var feb6BlogBtn = document.getElementById("feb6BlogBtn");
  var nextWeekFeb6Btn = document.getElementById("nextWeekFeb6Btn");
  var feb12BlogBtn = document.getElementById("feb12BlogBtn");
  var nextWeekFeb12Btn = document.getElementById("nextWeekFeb12Btn");
  var mar5BlogBtn = document.getElementById("mar5BlogBtn");
  var nextWeekMar5Btn = document.getElementById("nextWeekMar5Btn");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close");

  // When the user clicks on the button, open the modal
  measuringbtn.onclick = function () {
    measuringModal.style.display = "block";
  };

  mitigatingbtn.onclick = function () {
    mitigatingModal.style.display = "block";
  };

  designingbtn.onclick = function () {
    designingModal.style.display = "block";
  };

  jan22BlogBtn.onclick = function () {
    jan22BlogModal.style.display = "block";
  };

  feb6BlogBtn.onclick = function () {
    feb6BlogModal.style.display = "block";
  };

  nextWeekFeb6Btn.onclick = function () {
    feb6BlogModal.style.display = "block";
    jan22BlogModal.style.display = "none";
  };

  feb12BlogBtn.onclick = function () {
    feb12BlogModal.style.display = "block";
  };

  nextWeekFeb12Btn.onclick = function () {
    feb12BlogModal.style.display = "block";
    feb6BlogModal.style.display = "none";
  };

  mar5BlogBtn.onclick = function () {
    mar5BlogModal.style.display = "block";
  };

  nextWeekMar5Btn.onclick = function () {
    mar5BlogModal.style.display = "block";
    feb12BlogModal.style.display = "none";
  };

  // When the user clicks on <span> (x), close the modal
  span[0].onclick = function () {
    measuringModal.style.display = "none";
  };

  span[1].onclick = function () {
    mitigatingModal.style.display = "none";
  };

  span[2].onclick = function () {
    designingModal.style.display = "none";
  };

  span[3].onclick = function () {
    jan22BlogModal.style.display = "none";
  };

  span[4].onclick = function () {
    feb6BlogModal.style.display = "none";
  };

  span[5].onclick = function () {
    feb12BlogModal.style.display = "none";
  };

  span[6].onclick = function () {
    feb12BlogModal.style.display = "none";
  };

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (
      event.target == measuringModal ||
      event.target == mitigatingModal ||
      event.target == designingModal ||
      event.target == jan22BlogModal ||
      event.target == feb6BlogModal ||
      event.target == feb12BlogModal ||
      event.target == mar5BlogModal
    ) {
      measuringModal.style.display = "none";
      mitigatingModal.style.display = "none";
      designingModal.style.display = "none";
      jan22BlogModal.style.display = "none";
      feb6BlogModal.style.display = "none";
      feb12BlogModal.style.display = "none";
      mar5BlogModal.style.display = "none";
    }
  };
});
