document.addEventListener('DOMContentLoaded', () => {
  fetch('/web-learning3/common/header.html')
    .then(res => res.text())
    .then(html => {
      document.getElementById('header').innerHTML = html;
    })
    .catch(err => {
      console.error('ヘッダーの読み込みに失敗しました', err);
    });
});
