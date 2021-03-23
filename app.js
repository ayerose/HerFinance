// scroll to top btn
const btnScrollToTop = document.querySelector('#btnScrollToTop');
btnScrollToTop.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
});

const btns = document.querySelectorAll('.question-btn');

btns.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    const question = e.currentTarget.parentElement.parentElement;

    question.classList.toggle('show-text');
  });
});
