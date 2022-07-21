// console.log("ok");

// const links = document.querySelectorAll(".container-content-col-left-sec-3 .btn-dropdown");
// const dropdown = document.querySelectorAll(".navbar-link ul");

// // dropdown.forEach((element) => {
// //   const height = element.offsetHeight;
// //   element.style.marginTop = `${-height}px`;
// // });

// links.forEach((link) => {
//   link.addEventListener("click", function (e) {
//     const target = e.currentTarget;
//     const ele = target.nextElementSibling;

//     dropdown.forEach((element) => {
//       if (element !== ele) {
//         element.previousElementSibling.classList.remove("active");
//         element.classList.remove("dropdown");
//       }
//     });
//     target.classList.toggle("active");
//     ele.classList.toggle("dropdown");
//   });
// });

function myFunction() {
    document.getElementById("btn-dropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('btn-dropdown')) {
      var dropdowns = document.getElementsByClassName("dropdown-container");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
