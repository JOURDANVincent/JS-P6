

for (var year = 2020; year <= 2030; year++) {
    if ((year%4==0) && ((year%100!=0) || (year%400==0))) {
        document.write('<div style="color: red;">' + year + '</div>');
    } else { 
        document.write('<div style="color: green;">' + year + '</div>');
    }

}
