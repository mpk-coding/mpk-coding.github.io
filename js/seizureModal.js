const seizureModal = () => {
  let modal = document.querySelector(".seizureModal");
  let body = document.querySelector("body");
  //
  let modalButton = document.querySelector(".seizureModal a");
  //
  if (document.querySelector(".seizureModal--shown")) {
    body.style.position = "fixed";
    body.style.overflowY = "scroll";
    //
  }
  //
  modal.addEventListener("click", (event) => {
    if (event.target == modalButton) {
      modal.classList.remove("seizureModal--shown");
      //
      setTimeout(() => {
        body.style.position = "static";
        body.style.overflow = "auto";
        //
        modal.style.display = "none";
        //
      }, 1000);
      //
    }
    //
  });
  //
};
