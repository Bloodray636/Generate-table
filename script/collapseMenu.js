document.querySelectorAll('[data-bs-toggle="collapse"]').forEach(button => {
  button.addEventListener('click', function(event) {
    const targetId = this.getAttribute('data-bs-target');
    const target = document.querySelector(targetId);
    const isAccordionInside = target.closest('.collapse') !== null; // Проверка, является ли цель аккордеоном внутри другого аккордеона
    if (!isAccordionInside && !target.classList.contains('show')) {
      document.querySelectorAll('.collapse.show').forEach(window => {
        if ('#' + window.getAttribute('id') !== targetId) {
          $(window).collapse('hide');
        }
      });
    }
  });
});