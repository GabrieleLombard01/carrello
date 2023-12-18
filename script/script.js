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
                    let idElement =   element.tipo+element.id
                    let Originalid = element.id
                    creaCard(idElement, element.nome, element.foto,element.descrizione,element.prezzo,Originalid)
                }
                
        });
        function creaCard(id, nome, foto, descrizione,prezzo,Originalid) {
            console.log('Nome:', nome);
            console.log('Foto:', foto);
            console.log('id', Originalid);
        
            var parentRow = document.getElementById('aggancio-carta-row');
        
            // Crea la carta 
            var newCardDiv = document.createElement('div');
            newCardDiv.id = id;  // id di ogni carta sommato
            newCardDiv.className = 'card col-3 my-2 mx-2';
            newCardDiv.style.width = '18rem';
        
            // internocarta
            var cardHTML = `
                <img src="${foto }" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${nome}</h5>
                    <p class="card-text">Product Id=${Originalid  }</p>
                    <p class="card-text">${descrizione ||'quello che vuoi se manca descrizione' }</p>
                    <p class="card-text">$${prezzo}.00</p>
                    <input type="number" name="" id="${newCardDiv.id} ">
                    <button type="button" class="mt-3">Inserisci quantità nel carrello</button>
                </div>
            `;
        
            newCardDiv.innerHTML = cardHTML;
        
            parentRow.appendChild(newCardDiv);


            
          
        }
        // elimina il primo risultato patcha il bug
        
        var elimina = document.getElementById(tipoVeicolo);
            elimina.remove();
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

