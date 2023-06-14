const kopyala = document.querySelectorAll('.fa-copy');
  kopyala.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const koplanacak = e.target.parentElement.previousElementSibling.querySelector('code').innerText;
      let input = document.createElement('textarea');
      input.type = 'text';
      input.value = koplanacak;
      const scrollY = window.scrollY;
      document.body.appendChild(input);
      input.focus();
      input.select();
      input.setSelectionRange(0, input.value.length);
      document.execCommand('copy');
      document.body.removeChild(input);
      window.scrollTo(0, scrollY);
    });
  });


                 // LOADER
   document.addEventListener('click', function(event) {
    const target = event.target;
    if (target.tagName === 'A' && target.getAttribute('href') !== '#') {
      event.preventDefault();

      const loaderContainer = document.createElement('div');
      loaderContainer.classList.add('loader-container');
      loaderContainer.innerHTML = `
        <div class="spinner">
          <div class="n-harfi">N</div>
        </div>
      `;

      document.body.appendChild(loaderContainer);

      setTimeout(() => {
        window.location.href = target.href;
      }, 1000);
    }
  });

  window.addEventListener('load', function() {
    const loaderContainer = document.querySelector('.loader-container');
    if (loaderContainer) {
      loaderContainer.remove();
    }
  }); 


