function animateOnScroll(selector) {
  const items = document.querySelectorAll(selector);
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        observer.unobserve(entry.target); // Отключаем наблюдение после появления
      }
    });
  }, { threshold: 0.1 });

  items.forEach((item) => {
    item.style.opacity = "0";
    item.style.transform = "translateY(20px)";
    item.style.transition = "opacity 0.5s ease, transform 0.5s ease";
    observer.observe(item);
  });
}

// Использование для любых элементов
animateOnScroll(".grid-container");
