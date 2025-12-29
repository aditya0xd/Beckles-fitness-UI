document.querySelectorAll('.options button').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.options button')
      .forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
  });
});
