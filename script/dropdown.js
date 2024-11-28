document.querySelectorAll('.navCollapsible').forEach(item => {
    item.addEventListener('click', function () {
      this.classList.toggle('navExpanded');
    });
  });
  