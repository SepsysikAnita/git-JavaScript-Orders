const orders = [
    {
        id: 1,
        hambi: "Retró",
        extra: "bacon",
        ital: "Fanta",
        ar: 2300,
        kep: "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?cs=srgb&dl=pexels-valeria-boltneva-1639557.jpg&fm=jpg"

    },

    {
        id: 2,
        hambi: "Vegán",
        extra: "sült hagyma",
        ital: "Mentes ásványvíz",
        ar: 2200,
        kep: "https://images.pexels.com/photos/6546024/pexels-photo-6546024.jpeg?cs=srgb&dl=pexels-alesia-kozik-6546024.jpg&fm=jpg"

    },

    {
        id: 3,
        hambi: "Csípős",
        extra: "extra csípős szósz",
        ital: "Coca cola",
        ar: 2600,
        kep: "https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?cs=srgb&dl=pexels-rajesh-tp-1633578.jpg&fm=jpg"

    },

    {
        id: 4,
        hambi: "Amerikai",
        extra: "Csípős szósz, Bacon",
        ital: "Coca cola Light",
        ar: 3100,
        kep: "https://images.pexels.com/photos/12034622/pexels-photo-12034622.jpeg?cs=srgb&dl=pexels-israel-albornoz-12034622.jpg&fm=jpg"

    },

    {
        id: 5,
        hambi: "Sima",
        extra: "Bacon ,sajtszósz",
        ital: "Coca cola Light",
        ar: 3100,
        kep: "https://images.pexels.com/photos/2702674/pexels-photo-2702674.jpeg?cs=srgb&dl=pexels-anna-tukhfatullina-food-photographerstylist-2702674.jpg&fm=jpg"

    },


    
    {
        id: 6,
        hambi: "Vegán",
        extra: "",
        ital: "Savas Ásványvíz",
        ar: 2200,
        kep: "https://images.pexels.com/photos/6546024/pexels-photo-6546024.jpeg?cs=srgb&dl=pexels-alesia-kozik-6546024.jpg&fm=jpg"

    },
]

let output = "";

orders.forEach((rendeles)=>{

    output += `
        <div class="tetelek">
            <h2>Rendelés szám: ${rendeles.id}</h2>
            <h3>Hamburger: ${rendeles.hambi}</h3>
            <h3>Extra: ${rendeles.extra}</h3>
            <h3>Ital: ${rendeles.ital}</h3>
            <h2>Ár: ${rendeles.ar}</h2>
            <img src='${rendeles.kep}' alt='Hambi' id="kep"/>
        </div>
    
    `;
})

document.querySelector(".container").innerHTML = output;