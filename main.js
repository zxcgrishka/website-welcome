window.onscroll = function() {
    scrollFunction();
  };
  
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById('scrollToTopButton').style.display = 'block';
    } else {
        document.getElementById('scrollToTopButton').style.display = 'none';
    }
  }
  
  // Плавный скроллинг при клике на кнопку "Наверх"
  document.getElementById('scrollToTopButton').addEventListener('click', function() {
    scrollToTop();
  });
  
  function scrollToTop() {
    const scrollStep = -window.scrollY / 15;
    const scrollInterval = setInterval(function() {
        if (window.scrollY !== 0) {
            window.scrollBy(0, scrollStep);
        } else {
            clearInterval(scrollInterval);
        }
    }, 15);
  }