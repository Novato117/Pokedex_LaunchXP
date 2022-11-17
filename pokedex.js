const fetchPokemon = async () => {
    const pokeNameInput = document.getElementById("pokeName");
    /* const intro = document.getElementById("intro");
     intro.innerHTML = "hola marte!!!!!!!";*/
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    let data = await fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("./img/sad.gif")
        }
        else {
            return res.json();
        }
    });

    if (data) {
        console.log(data);
        let pokeImg = data.sprites.front_default;
        pokeImage(pokeImg);
        console.log(pokeImg);
        let haby = data.abilities[0].ability.name;
        habilidad(haby);
        console.log(haby);
        let name = data.species.name;
        nombre(name);
        console.log(name);
        let tipo = data.types[0].type.name;
        type(tipo);
        for (const element of tipo) {
            console.log(element);
        }

    }
}

const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}
const habilidad = (url) => {
    const hab = document.getElementById("first");
    hab.innerHTML = url;

}
const nombre = (url) => {
    const nam = document.getElementById("name");
    nam.innerHTML = url;
}
const type = (url) => {
    const type = document.getElementById("type");
    type.innerHTML = url;
}