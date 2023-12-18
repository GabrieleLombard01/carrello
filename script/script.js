// let percorso = 'https://randomuser.me/api/';

// fetch(percorso)
// .then(response=>response.json())
// .then(dati=>{
//     console.log(dati);
// })
// .catch(error=>{
//     console.error('errore:',error);
// })
let veicoli = 'globale.json'

function chiamaVeicoli (tipoVeicolo) {
    fetch(veicoli)
    .then(response => response.json())
    .then( dati=> {

        let prova2 = Object.keys(dati).map((key) => [key, dati[key]]);
        let array = prova2[0][1]

        array.forEach(element => {
                if (element.tipo==tipoVeicolo) {
                    document.getElementById(tipoVeicolo).innerHTML+=dati;
                    let idElement = element.id + element.tipo
                    console.log(idElement)
                    creaCard(idElement, element.nome, element.foto)
                }
        });

        function creaCard (id, nome, foto) {
            console.log(nome, foto)

            document.createElement()
            document.getElementById('aggancio-carta').appendChild()

            var childNumber = 3;

            var parent = document.getElementById('aggancio-carta');
            
            var newChild = '<div id="moto" class="card mb-2" style="width: 18rem;" id="'+id+'">';
            parent.insertAdjacentHTML('beforeend', newChild);
            childNumber++;

        }

        //console.log(prova2[0][1][0])

    })
    .catch(error => {
        console.error(error);
    })
}


let showPage = (path, bgcol) => {
    fetch(path)
        .then(response => response.text())
        .then(data => {
            document.getElementById('contentContainer').innerHTML = data;
            document.getElementById('contentContainer').style.backgroundColor = bgcol;
        })
        .catch(error => {
            console.error(error);
        })
}

//showPage('carrello.html','blue')

