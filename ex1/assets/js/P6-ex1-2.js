let eDiv = document.getElementById('emptyDiv');

for (let year = 2020; year <= 2030; year++) {

    let lastDiv = eDiv.innerHTML;

    if ((year%4==0) && ((year%100!=0) || (year%400==0))) {
        eDiv.innerHTML = '<div style="color:red;">' + lastDiv + year + '</div>';
    } else { 
        eDiv.innerHTML = '<div style="color:black;">' + lastDiv + year + '</div>';
    }
}
