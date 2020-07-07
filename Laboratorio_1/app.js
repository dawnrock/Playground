var hotel = {
    name: "",
    location:""
};

hotel.name = prompt("Introduce el nombre del Hotel");
document.getElementById("hotel-name").innerHTML = "Hotel " + hotel.name;

hotel.location = prompt("Introduce ubicación del hotel");
document.getElementById("hotel-location").innerHTML = hotel.location;


