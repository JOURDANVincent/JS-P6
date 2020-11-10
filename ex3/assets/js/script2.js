let languages = ['html', 'css', 'javascript', 'php', 'mysql', 'c++','ruby','python'];
let eDiv = document.getElementById('eDiv');

languages.forEach(item => 
    {
        let lastDiv = eDiv.innerHTML;
        eDiv.innerHTML = '<div>' + lastDiv + item + '</div>';
    }  
);

