// SCRIPT DOS CARROSSEIS
document.addEventListener("DOMContentLoaded", function () {
  var splide = new Splide(".splide.infoBoxes", {
    perPage: 3,
    gap: 20,
    autoplay: true,
    breakpoints: {
    800: {
      perPage: 2,
      autoplay: true,
      inverval: 1000,
    },
    700: {
      perPage: 1,
      autoplay: true,
      rewind: true,
    },
  },
  });
  splide.mount();
  var splide = new Splide(".splide.feedbackReviews", {
    perPage: 3,
    gap: 20,
    rewind: true,
    type: "loop",
    autoplay: true,
    breakpoints: {
    800: {
      perPage: 2,
      autoplay: true,
      inverval: 1000,
    },
    700: {
      perPage: 1,
      autoplay: true,
      rewind: true,
    },
  },
  });
  splide.mount();
});
// MODAL
let triggersModal = document.querySelectorAll("[data-modal]");
let modal = document.querySelector(".js-modal");

function closeModal() {
	modal.classList.remove("is-open");
}

triggersModal.forEach((button) =>
	button.addEventListener("click", (e) => {
		modal.classList.add("is-open");
	})
);

modal.addEventListener("click", function (event) {
	const isOutside = !event.target.closest(".modal__inner");
	const isCloseButton = event.target.matches(".js-close-modal");
	if (isCloseButton || isOutside) {
		closeModal();
	}
});

window.addEventListener("keydown", (event) => {
	if (event.key === "Escape") {
		closeModal();
	}
});
