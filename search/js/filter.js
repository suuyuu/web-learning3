document.addEventListener("DOMContentLoaded", () => {

  // チェックボックス取得
  const authorityCheckboxes = document.querySelectorAll('input[name="authority"]');
  const categoryCheckboxes  = document.querySelectorAll('input[name="category"]');
  const sortSelect = document.querySelector('select[name="sort"]');

  const cardList = document.querySelector(".card-list");
  const cards = Array.from(document.querySelectorAll(".card"));

  // --------------------
  // 絞り込み処理
  // --------------------
  function filterCards() {

    // チェックされている値を配列で取得
    const selectedAuthorities = Array.from(authorityCheckboxes)
      .filter(cb => cb.checked)
      .map(cb => cb.value);

    const selectedCategories = Array.from(categoryCheckboxes)
      .filter(cb => cb.checked)
      .map(cb => cb.value);

    cards.forEach(card => {

      const cardAuthority = card.dataset.authority;
      const cardCategory  = card.dataset.category;

      let visible = true;

      // 課税主体フィルタ
      if (selectedAuthorities.length > 0 &&
          !selectedAuthorities.includes(cardAuthority)) {
        visible = false;
      }

      // 課税対象フィルタ
      if (selectedCategories.length > 0 &&
          !selectedCategories.includes(cardCategory)) {
        visible = false;
      }

      card.style.display = visible ? "block" : "none";
    });
  }

  // --------------------
  // 並び替え処理
  // --------------------
  function sortCards() {
    if (sortSelect.value === "kana") {
      const sorted = [...cards].sort((a, b) => {
        return a.dataset.kana.localeCompare(b.dataset.kana, "ja");
      });
      sorted.forEach(card => cardList.appendChild(card));
    }
  }

  // --------------------
  // イベント登録
  // --------------------
  authorityCheckboxes.forEach(cb => {
    cb.addEventListener("change", filterCards);
  });

  categoryCheckboxes.forEach(cb => {
    cb.addEventListener("change", filterCards);
  });

  sortSelect.addEventListener("change", sortCards);

});
