const sidebar = document.querySelector(".sidebar");
const sidebarToggle = document.querySelector(".sidebar-toggle");
const closeButton = document.querySelector(".close-btn");

sidebarToggle.addEventListener("click", function(){
  // if (sidebar.classList.contains("show-sidebar")) {
  //   sidebar.classList.remove();
  // }  else {
  //   sidebar.classList.add("show-sidebar");
  // }
  sidebar.classList.toggle("show-sidebar");
});

closeButton.addEventListener("click", function(){
  sidebar.classList.remove("show-sidebar");
});