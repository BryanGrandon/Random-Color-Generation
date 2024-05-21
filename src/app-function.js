const isOnline = () => {
  const $section = document.createElement("section");
  $section.classList.add("status");

  if (navigator.onLine) {
    $section.textContent = `Connection restored`;
    $section.classList.remove("offline");
    $section.classList.add("online");
  } else {
    $section.textContent = `Lost connection`;
    $section.classList.remove("online");
    $section.classList.add("offline");
  }
  document.body.insertAdjacentElement("afterbegin", $section);

  setTimeout(() => document.body.removeChild($section), 1000);
};

export { isOnline };
