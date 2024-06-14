 // Apply the yellow class based on defaultRating or hoverCount
 export const updateStars = (spanEl, rating, hoverCount, defaultRating) => {
    if (spanEl) {
      if (hoverCount !== null) {
        if (rating <= hoverCount) {
          spanEl.classList.add("yellow");
        }
      } else {
        if (rating <= defaultRating) {
          spanEl.classList.add("yellow");
        }
      }
    }
    return spanEl;
  };