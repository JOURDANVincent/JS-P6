for (let year = 0; year <= 100; year++) {
  if (year%15 == 0 && year != 0) {
      document.write('<div style="color: black; background-color:red">...</div>');
  } else { 
      document.write('<div>' + year + '</div>');
  }
}