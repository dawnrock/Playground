const bookings = [
    { 
        id: 1, 
        price: 45.30, 
        count: 3, 
        room: "standard", 
        prepaid: false,
        succeeded: true 
    },
    { 
        id: 2, 
        price: 92.45, 
        count: 4, 
        room: "superior", 
        prepaid: false,
        succeeded: true 
    },
    { 
        id: 3, 
        price: 63.50, 
        count: 7, 
        room: "standard", 
        prepaid: true,
        succeeded: false 
    },
    { 
        id: 3, 
        price: 37.50, 
        count: 2, 
        room: "standard", 
        prepaid: true,
        succeeded: true 
    },
    { 
        id: 5, 
        price: 87.90, 
        count: 5, 
        room: "superior", 
        prepaid: true,
        succeeded: false }
];

let repetido = false;


for (i = 0; i < bookings.length; i++) {
    const reserva1 = bookings[i];

    for (x = i + 1; x < bookings.length; x++) {
        const reserva2 = bookings[x];
        repetido = repetido || reserva1.id === reserva2.id;
    }
}

console.log("Hay identificadores repetidos: " + repetido);
