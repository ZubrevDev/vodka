document.querySelectorAll('.hero__promo-copy').forEach(function(btn) {
  btn.addEventListener('click', function() {
    var input = btn.closest('.hero__promo-field').querySelector('.hero__promo-input');
    var original = btn.textContent;

    navigator.clipboard.writeText(input.value).then(function() {
      btn.textContent = 'Скопировано';
      setTimeout(function() {
        btn.textContent = original;
      }, 1500);
    });
  });
});
