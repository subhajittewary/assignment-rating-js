import { updateStars } from "./utils.js";

document.addEventListener("DOMContentLoaded", () => {
  const renderRatingComponent = (
    conatainerId = "app",
    defaultRating = 4,
    totalRating = 5
  ) => {
    let hoverCount = null;
    const appDiv = document.getElementById(conatainerId);
    const handleClickedRating = (rating) => {
      defaultRating = rating;
      hoverCount = null; // Reset hover count
      reRenderRatingComponent(hoverCount, defaultRating);
    };

    const handleMouseEnterRating = (rating) => {
      hoverCount = rating;
      reRenderRatingComponent(hoverCount, defaultRating);
    };

    const handleMouseLeaveRating = () => {
      hoverCount = null;
      reRenderRatingComponent(hoverCount, defaultRating);
    };

    if (!appDiv) {
      console.error("Element with ID 'app' not found");
      return;
    }
    appDiv.classList.add("rating-container");

    for (let index = 0; index < totalRating; index++) {
      const rating = index + 1;
      let spanEl = document.createElement("span");
      spanEl.classList.add("star-rating");

      spanEl.addEventListener("click", () => handleClickedRating(rating));
      spanEl.addEventListener("mouseenter", () =>
        handleMouseEnterRating(rating)
      );
      spanEl.addEventListener("mouseleave", handleMouseLeaveRating);
      spanEl = updateStars(spanEl, rating, hoverCount, defaultRating);

      appDiv.appendChild(spanEl);
    }

    const reRenderRatingComponent = (hoverCount, defaultRating) => {
      if (!appDiv) {
        console.error("Element with ID 'app' not found");
        return;
      }

      for (let index = 0; index < appDiv.childNodes.length; index++) {
        let spanEl = appDiv.childNodes[index];
        spanEl.classList.remove("yellow");
        const rating = index + 1;
        spanEl = updateStars(spanEl, rating, hoverCount, defaultRating);
      }
    };
  };

  renderRatingComponent("app", 4, 5);
  renderRatingComponent("second-app", 1, 10);
  renderRatingComponent("third-app", 3, 7);
});
