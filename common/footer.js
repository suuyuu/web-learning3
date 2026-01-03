document.addEventListener('DOMContentLoaded', () => {
  fetch('/web-learning3/common/footer.html')
    .then(res => res.text())
    .then(html => {
      document.getElementById('footer').innerHTML = html;
    })
    .catch(err => {
      console.error('フッターの読み込みに失敗しました', err);
    });
});
