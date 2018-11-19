function toggle(element) {
  console.log(element.nextElementSibling);
  let details = element.nextElementSibling;
  if (details.style.display === "none") {
    details.style.display = "block";
  } else {
    details.style.display = "none"
  }
}