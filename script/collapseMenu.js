document.querySelectorAll('[data-bs-toggle="collapse"]').forEach(button => {
  button.addEventListener('click', function() {
    const targetId = this.getAttribute('data-bs-target');
    document.querySelectorAll('.collapse.show').forEach(window => {
      if ('#' + window.getAttribute('id') !== targetId) {
        $(window).collapse('hide');
      }
    });
  });
});