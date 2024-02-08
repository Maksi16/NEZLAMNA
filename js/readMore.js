function readMore() {
  var dots = document.getElementById('dots');
  var more = document.getElementById('more');
  var btn = document.getElementById('btn');

  if (dots.style.display === 'none') {
    dots.style.display = 'inline';
    more.style.display = 'none';
    btn.innerHTML = 'Показати ще';
  } else {
    dots.style.display = 'none';
    more.style.display = 'flex';
    btn.innerHTML = 'Сховати все';
  }
}

function showMoreReporst() {
  var dots = document.getElementById('dots-reports');
  var more = document.getElementById('more-reports');
  var btn = document.getElementById('btn-reports');

  if (dots.style.display === 'none') {
    dots.style.display = 'inline';
    more.style.display = 'none';
    btn.innerHTML = 'Показати ще';
  } else {
    dots.style.display = 'none';
    more.style.display = 'flex';
    btn.innerHTML = 'Сховати все';
  }
}
