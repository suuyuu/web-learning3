document.addEventListener("DOMContentLoaded", () => {
  const holidayCheckbox = document.querySelector('input[name="holiday"]');
  const zoromeCheckbox = document.querySelector('input[name="zorome"]');
  const sortSelect = document.querySelector('select[name="sort"]');
  const cardList = document.querySelector(".card-list");
  const cards = Array.from(document.querySelectorAll(".card"));

  function filterCards() {
    cards.forEach(card => {
      const isHoliday = card.dataset.holiday === "true";
      const isZorome = card.dataset.zorome === "true";

      let visible = true;

      if (holidayCheckbox.checked && !isHoliday) {
        visible = false;
      }
      if (zoromeCheckbox.checked && !isZorome) {
        visible = false;
      }

      card.style.display = visible ? "block" : "none";
    });
  }

  function sortCards() {
    const value = sortSelect.value;
    const sortedCards = [...cards].sort((a, b) => {
      if (value === "kana") {
        return a.dataset.kana.localeCompare(b.dataset.kana, "ja");
      }
      if (value === "date") {
        return a.dataset.date.localeCompare(b.dataset.date);
      }
      return 0;
    });

    sortedCards.forEach(card => cardList.appendChild(card));
  }

  holidayCheckbox.addEventListener("change", () => {
    filterCards();
  });

  zoromeCheckbox.addEventListener("change", () => {
    filterCards();
  });

  sortSelect.addEventListener("change", () => {
    sortCards();
  });
});
