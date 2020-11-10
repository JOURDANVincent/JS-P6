let days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi','Dimanche'];
let eDiv = document.getElementById('eDiv');

days.forEach(item => {

    let lastDiv = eDiv.innerHTML;

    if (item == 'Samedi' | item == 'Dimanche') {
        eDiv.innerHTML = '<div style="color:red;">' + lastDiv + item + '</div>';
    } else {
        eDiv.innerHTML = '<div style="color:black;">' + lastDiv + item + '</div>';
    }
});