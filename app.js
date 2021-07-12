const d = document,
  $inputs = d.querySelectorAll("input");

d.addEventListener("click", (e) => {
  if (!e.target.matches("input")) return;

  $inputs.forEach((el) => {
    if (el.checked) {
      el.checked = false;
      e.target.checked = true;
    }
  });
});
