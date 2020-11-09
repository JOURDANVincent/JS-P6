let days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi','Dimanche'];

days.forEach(item => {
    if (item == 'Samedi' | item == 'Dimanche') {
        document.write('<div style="font-weight:bold;">' + item +'</div>');
    } else {
        document.write('<div>' + item + '</div>');
    }
});