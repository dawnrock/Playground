var hoteles = {
    Piramides: {
        name: "Las Piramides",
        location: "Fuengirola",
        img: 
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQSk1vuaydcQG9WfCDH9aYn5lTjUo8Jb3ruPWxlQbMnd8_NCtWw&usqp=CAU"

    },

    Cala: {
        name: "La Cala",
        location: "Mijas",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSmFBVSyNPJOxER94oVpJvtlWquYDKH_6jJ7eNwd-sBXThNohoU&usqp=CAU"
    },

    Torrequebrada: {
        name: "Torrequebrada",
        location: "Benalmadena",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSBJwhPbBbXkwyOqV8lZ1NRu74qWINi_JMjTTXHmam5Cmmkr51S&usqp=CAU"
    },

}

var selectedHotel = prompt("Indique el nombre del hotel: Piramides, Cala o Torrequebrada")

document.getElementById("hotel-name").innerHTML = 
    "Hotel " + hoteles[selectedHotel].name;
document.getElementById("hotel-location").innerHTML = 
    "Ubicado en " + hoteles[selectedHotel].location;
document.getElementById("img-hotel").src = hoteles[selectedHotel].img;

var stars = {
    una:
     "<span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>",
    dos:
     "<span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>",
    tres:
     "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span>",
    cuatro:
     "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span>",
    cinco: 
     "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span>",
}

var rating = prompt("¿Cuántas estrellas?: una, dos, tres, cuatro o cinco?");    

document.getElementById("rating").innerHTML = stars[rating] 

var privacy = confirm("¿Desea que sea anónima?");

document.getElementById("checkbox").checked = privacy;




