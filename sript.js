document.querySelectorAll('.faq-header').forEach(header => {
  header.addEventListener('click', () => {
    const parent = header.parentElement;
    const content = parent.querySelector('.faq-content');

    document.querySelectorAll('.faq-item').forEach(item => {
      if (item !== parent) item.classList.remove('active');
    });

    parent.classList.toggle('active');
  });
});
