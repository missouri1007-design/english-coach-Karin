// 確保 DOM 載入後執行
document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('.slide-item img');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = lightbox.querySelector('img');
  
  // 點擊圖片：打開燈箱
  images.forEach(img => {
    img.addEventListener('click', () => {
      lightbox.style.display = 'flex';
      lightboxImg.src = img.src;
      // 禁止背景滾動
      document.body.style.overflow = 'hidden';
    });
  });
  
  // 點擊燈箱背景：關閉燈箱
  lightbox.addEventListener('click', (e) => {
    // 確保只有點到背景而非圖片時才關閉
    if (e.target !== lightboxImg) {
      lightbox.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  });
});