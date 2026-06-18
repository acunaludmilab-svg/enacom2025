// Acordeones de subtramas: cada tarjeta se puede abrir y cerrar con clic.
const subthreads = document.querySelectorAll(".subthread");

subthreads.forEach((subthread) => {
  const button = subthread.querySelector(".subthread-button");
  const content = subthread.querySelector(".subthread-content");

  const setHeight = () => {
    if (subthread.classList.contains("open")) {
      content.style.maxHeight = content.scrollHeight + "px";
    } else {
      content.style.maxHeight = null;
    }
  };

  button.addEventListener("click", () => {
    const isOpen = subthread.classList.toggle("open");
    button.setAttribute("aria-expanded", String(isOpen));
    setHeight();
  });

  setHeight();
  window.addEventListener("resize", setHeight);
});