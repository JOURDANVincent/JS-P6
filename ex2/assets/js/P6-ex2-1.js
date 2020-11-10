let eDiv = document.getElementById('eDiv');


for (let year = 0; year <= 100; year++) {

  let lastDiv = eDiv.innerHTML;

  if (year %15 == 0 && year != 0) {
      eDiv.innerHTML = '<div>' + lastDiv + '...' + '</div>';
  } else { 
    eDiv.innerHTML = '<div>' + lastDiv + year + '</div>';
  }

}