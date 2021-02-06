window.addEventListener("DOMContentLoaded", (event) => {
  alert("test")
});
  alert("test")
  const removeElements = (e) => e.forEach(el => el.remove())
  removeElements(document.querySelectorAll(".c-ads"))
  console.log("Que du sale! 01");
  removeElements(document.querySelectorAll(".sidebar-col"))
  console.log("Que du sale! 02");
  removeElements(document.querySelectorAll("#rc-anchor-container"))
  console.log("Que du sale! 03");
  document.querySelectorAll('.btn').disabled = false;
  console.log("Que du sale! 04");

  console.log("Que du sale!");

