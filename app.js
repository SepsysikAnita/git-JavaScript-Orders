const orders = [
    {
        id: 1,
        hambi: "Retró",
        extra: "bacon",
        ital: "Fanta",
        ar: 2300,
        kep: "https://www.pexels.com/hu-hu/foto/kenyer-elelmiszer-szendvics-zoldsegek-1639557/"

    },

    {
        id: 2,
        hambi: "Vegán",
        extra: "sült hagyma",
        ital: "Mentes ásványvíz",
        ar: 2200,
        kep: "https://www.pexels.com/hu-hu/foto/elelmiszer-ebed-etkezes-vegetarianus-6546024/"

    },

    {
        id: 3,
        hambi: "Csípős",
        extra: "extra csípős szósz",
        ital: "Coca cola",
        ar: 2600,
        kep: "https://www.pexels.com/hu-hu/foto/kenyer-elelmiszer-vacsora-ebed-1633578/"

    },

    {
        id: 4,
        hambi: "Amerikai",
        extra: "Csípős szósz, Bacon",
        ital: "Coca cola Light",
        ar: 3100,
        kep: "https://www.pexels.com/hu-hu/foto/elelmiszer-etkezes-gyorskaja-hamburger-12034622/"

    },

    {
        id: 5,
        hambi: "Sima",
        extra: "Bacon ,sajtszósz",
        ital: "Coca cola Light",
        ar: 3100,
        kep: "https://www.pexels.com/hu-hu/foto/elelmiszer-etkezes-gyorskaja-hamburger-12034622/"

    },


    
    {
        id: 6,
        hambi: "Vegán",
        extra: "",
        ital: "Savas Ásványvíz",
        ar: 2200,
        kep: "https://www.pexels.com/hu-hu/foto/elelmiszer-ebed-etkezes-vegetarianus-6546024/"

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