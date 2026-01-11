document.addEventListener("DOMContentLoaded", () => {

  const authorityCheckboxes =
    Array.from(document.querySelectorAll('input[name="authority"]'));
  const categoryCheckboxes =
    Array.from(document.querySelectorAll('input[name="category"]'));
  const sortSelect = document.querySelector('select[name="sort"]');

  const cardList = document.querySelector(".card-list");
  const cards = Array.from(document.querySelectorAll(".card"));

  // 絞り込み
  function filterCards() {

    const selectedAuthorities =
      authorityCheckboxes.filter(c => c.checked).map(c => c.value);

    const selectedCategories =
      categoryCheckboxes.filter(c => c.checked).map(c => c.value);

    cards.forEach(card => {

      const cardAuthority = card.dataset.authority;
      const cardCategory = card.dataset.category;

      let visible = true;

      if (selectedAuthorities.length > 0 &&
          !selectedAuthorities.includes(cardAuthority)) {
        visible = false;
      }

      if (selectedCategories.length > 0 &&
          !selectedCategories.includes(cardCategory)) {
        visible = false;
      }

      card.style.display = visible ? "block" : "none";
    });
  }

  // 並び替え
  function sortCards() {
    if (sortSelect.value === "kana") {
      const sorted = [...cards].sort((a, b) => {
        return a.dataset.kana.localeCompare(b.dataset.kana, "ja");
      });
      sorted.forEach(card => cardList.appendChild(card));
    }
  }

  authorityCheckboxes.forEach(cb =>
    cb.addEventListener("change", filterCards)
  );
  categoryCheckboxes.forEach(cb =>
    cb.addEventListener("change", filterCards)
  );
  sortSelect.addEventListener("change", sortCards);
});
