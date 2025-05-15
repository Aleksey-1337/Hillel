let savedLink = "";

document.getElementById("set-link").addEventListener("click", function (){
    const input = prompt("Введите ссылку (URL):");
    if (input && input.trim() !== "") {
        savedLink = input.trim();
        alert("Ссылка сохранена!");
    } else {
        alert("Ссылка не введена!");
    }
});

document.getElementById("go-link").addEventListener("click", function (){
    if (savedLink) {
        window.location.href = savedLink;
    } else {
        alert("Ссылка не указана!")
    }
});