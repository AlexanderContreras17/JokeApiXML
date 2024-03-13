let xhr = new XMLHttpRequest();
 
let url = "https://v2.jokeapi.dev/categories";
 
xhr.open("GET", url, true);
 
// Preparar Callback
xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status <= 300) {
        var response = JSON.parse(xhr.responseText)
        var selectCategory = document.querySelector('#selectCategory');
        response.categories.forEach(category => {
            var option = document.createElement('option');
           
            option.value = category;
            option.textContent = category;
            selectCategory.appendChild(option)
        });
    }
}
 
// Mandar la solicitud
xhr.send();