const randomPokemon = Math.floor(Math.random() * 1025)
const main = document.querySelector('main')
main.innerHTML = ""

const info = document.createElement('div')
info.id = "gc"
main.append(info)

const imgDiv = document.createElement('div')
imgDiv.id = "item2"
info.append(imgDiv)

const nameDiv = document.createElement('div')
nameDiv.id = "item1"
info.append(nameDiv)





const Captialize = word => { return word.substring(0, 1).toUpperCase() + word.substring(1) }

;(async () => {


    const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + randomPokemon)
    const pokemon = await response.json()

    console.log(pokemon)

    const pokemonName = document.createElement('h1')
    pokemonName.title = "Pokemon"
    pokemonName.textContent = Captialize(pokemon.species.name)
    nameDiv.append(pokemonName)

    const sprite = document.createElement('img')
    sprite.src = pokemon.sprites.front_default
    sprite.alt = Captialize(pokemon.species.name)
    imgDiv.append(sprite)

    const types = pokemon.types
    const type1 = document.createElement('p')
    type1.textContent = Captialize(types[0].type.name)

    if(types.length === 1){
        const typeDiv = document.createElement('div')
        typeDiv.id = "item3"
        info.append(typeDiv)

        typeDiv.append(type1)
    }else{
        const typeDiv1 = document.createElement('div')
        typeDiv1.id = "item4"
        info.append(typeDiv1)

        const typeDiv2 = document.createElement('div')
        typeDiv2.id = "item5"
        info.append(typeDiv2)

        typeDiv1.append(type1)

        const type2 = document.createElement('p')
        type2.textContent = Captialize(types[1].type.name)
        typeDiv2.append(type2)
    }
})()