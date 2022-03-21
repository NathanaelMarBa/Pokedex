    const fetchpokemon = () => {
        const pokeName = document.getElementById('pokeName');
        let pokeInput = pokeName.value.toLowerCase();
        const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
        fetch(url).then((res) => {
    
            if(res.status != "200") {
                console.log(res);
                pokeImag("./IMGS/Pikachusad.jpg");
                document.getElementById('tipo').value = "No existe un tipo";
    
            }else{
                return res.json();
            }
        }).then((data) => {
    
            console.log(data);
            let pokeImage = data.sprites.front_default;
            let tipo = data.types[0].type.name;
            let nombre = data.species.name;
            let nivels0_0 = data.stats[0].stat.name;
            let nivels0 = data.stats[0].base_stat;
            let nivels1_1 = data.stats[1].stat.name;
            let nivels1 = data.stats[1].base_stat;
            let nivels2_2 = data.stats[2].stat.name;
            let nivels2 = data.stats[2].base_stat;
            let nivels3_3 = data.stats[3].stat.name;
            let nivels3 = data.stats[3].base_stat;
            let nivels4_4 = data.stats[4].stat.name;
            let nivels4 = data.stats[4].base_stat;
            let nivels5_5 = data.stats[5].stat.name;
            let nivels5 = data.stats[5].base_stat;
            let move0 = data.moves[0].move.name;
            let move1 = data.moves[1].move.name;
            let move2 = data.moves[2].move.name;
            console.log(pokeImg);
            pokeImag(pokeImage);
            document.getElementById('tipo').innerHTML = tipo;
            document.getElementById('nombre').innerHTML = nombre;
            document.getElementById('nivels0_0').innerHTML = nivels0_0;
            document.getElementById('nivels0').innerHTML = nivels0;
            document.getElementById('nivels1_1').innerHTML = nivels1_1;
            document.getElementById('nivels1').innerHTML = nivels1;
            document.getElementById('nivels2_2').innerHTML = nivels2_2;
            document.getElementById('nivels2').innerHTML = nivels2;
            document.getElementById('nivels3_3').innerHTML = nivels3_3;
            document.getElementById('nivels3').innerHTML = nivels3;
            document.getElementById('nivels4_4').innerHTML = nivels4_4;
            document.getElementById('nivels4').innerHTML = nivels4;
            document.getElementById('nivels5_5').innerHTML = nivels5_5;
            document.getElementById('nivels5').innerHTML = nivels5;
            document.getElementById('move0').innerHTML = move0;
            document.getElementById('move1').innerHTML = move1;
            document.getElementById('move2').innerHTML = move2;
        })
    }
    
    
    const pokeImag = (url) => {
        const pokeimg = document.getElementById("pokeImg");
        pokeimg.src = url;
    }

    /*const ptipo = (url) => {
        const tipo = document.getElementById('tipo');
        tipo.src = url;
    }*/