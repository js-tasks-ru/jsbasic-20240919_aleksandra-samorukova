function toggleText() {
  const button = document.querySelector('.toggle-text-button');
  const textDiv = document.getElementById('text');
  button.addEventListener('click', function() {
    if (textDiv.hasAttribute('hidden')) {
      textDiv.removeAttribute('hidden');
    } else {
      textDiv.setAttribute('hidden', '');
    }
  });
}
