const buttons = document.querySelectorAll('[data-bs-toggle="collapse"]');
buttons.forEach(button => {
  button.addEventListener('click', function() {
    const targetId = this.getAttribute('data-bs-target');
    const openWindows = document.querySelectorAll('.collapse.show');
    openWindows.forEach(window => {
      const windowId = '#' + window.getAttribute('id');
      if (windowId !== targetId) {
        $(windowId).collapse('hide');
      }
    });
  });
});