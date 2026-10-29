"use strict";
let toastTimer;
function toast(message) {
  const element = document.querySelector('.toast');
  element.textContent = message;
  element.hidden = false;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { element.hidden = true; }, 3500);
}
document.querySelectorAll('[data-copy]').forEach(button => {
  button.addEventListener('click', async () => {
    try { await navigator.clipboard.writeText(button.dataset.copy); toast('SHA256 값을 복사했습니다.'); }
    catch { toast('해시 값을 선택해 직접 복사해 주세요.'); }
  });
});
