// `XMLHttpRequest` object is being created and stored in the variable `https`
var https = new XMLHttpRequest();
https.responseType = 'json';
https.open('GET' , 'js/movies.json' );
https.onreadystatechange = _ =>{
    // The if statement is checking the ``readyState`` and ``status`` properties of the ``https`` object.
    if(https.readyState == 4  &&  https.status == 200){
        data = https.response;
        startQueries()
    afficher(data);
// Sort a table , alphabetically from a _ z or z_b methode `sort()`
document.getElementById('SelectTablaeu').onchange=function(){
var SortTablaeu = document.getElementById('SelectTablaeu').value;
if (SortTablaeu == "titre") {
    data.sort(function(a,b) {
        if(a.Titre.toUpperCase() < b.Titre.toUpperCase()) return -1;
        if(a.Titre.toUpperCase() > b.Titre.toUpperCase()) return 1;
        return 0;
    });
    startQueries()
    afficher(data);
}
else if (SortTablaeu == "réalisateur"){
    data.sort(function(a,b) {
        if(a.Réalisateur.toUpperCase() < b.Réalisateur.toUpperCase()) return -1;
        if(a.Réalisateur.toUpperCase() > b.Réalisateur.toUpperCase()) return 1;
        return 0;
    });
    startQueries()
    afficher(data);
}
else if (SortTablaeu == "durée"){
    data.sort(function(a,b) {
        if(a.Durée.toUpperCase() < b.Durée.toUpperCase()) return -1;
        if(a.Durée.toUpperCase() > b.Durée.toUpperCase()) return 1;
        return 0;
    });
    startQueries()
    afficher(data);
}
else if (SortTablaeu == "production"){
    data.sort(function(a,b) {
        if(a.L_année_de_production.toUpperCase() < b.L_année_de_production.toUpperCase()) return -1;
        if(a.L_année_de_production.toUpperCase() > b.L_année_de_production.toUpperCase()) return 1;
        return 0;
    });
    startQueries()
    afficher(data);

}
}}
};



window.addEventListener( 'load', () => {
    startQueries();
    searchData(value);

    })
    const startQueries = () => {
    let newQuery = window.matchMedia( ' ( max-width: 767px ) ' )
    const queryListenChanges = query => {
    if( query.matches ){
        var div = '';
        for (let i = first; i < first + numberOfitems; i++) {
            if(i < data.length){
                div += `
                            <p id='boxmovies' class="align-middle" ><img src="${data[i].Poster}"></p>
                            <p id='boxmovies' class="align-middle">${data[i].Titre}</p>
                            <p id='boxmovies' class="align-middle" id='Durée'>${data[i].Durée}</p>
                            <p id='boxmovies' class="align-middle">${data[i].L_année_de_production}</p>
                            <p id='boxmovies' class="align-middle">${data[i].Festivals}</p>
                            <p id='boxmovies' class="align-middle"><lu>
                                <li  id='boxmovies'>${data[i].Acteurs[0].nom}${data[i].Acteurs[0].prénom}${data[i].Acteurs[0].nationalité},</li><br>
                                <li  id='boxmovies'>${data[i].Acteurs[1].nom}${data[i].Acteurs[1].prénom}${data[i].Acteurs[1].nationalité}</li>
                            </lu></p>
                            <p id='boxmovies' class="align-middle" id='Réalisateur'>${data[i].Réalisateur}</p>
                            <p id='boxmovies' class='braek'>______________________</p>
                        _________________________________________________________
                    `;
            }
            
            document.getElementById('showmovies').innerHTML = div ;
            document.getElementById('tbody').innerHTML = ' ' ;
            document.querySelector('.table').style.display = 'none' ;
            document.querySelector('.searchDataweb').style.display = 'none';
            document.querySelector('.searchDatamobil').style.display = 'block';

        }
    }else{
        document.querySelector('.searchDataweb').style.display = 'block';
        document.querySelector('.searchDatamobil').style.display = 'none';
        document.getElementById('showmovies').innerHTML = '';
        document.querySelector('.table').style.display = 'block' ;
        afficher(data)
        
    }}
    newQuery.addListener( queryListenChanges )
    queryListenChanges( newQuery )
}
https.send();
    function searchDatamobil(value){
        startQueries();
        var div='';
            for (let i = 0; i < data.length; i++) {
                
                if(data[i].Titre.toLowerCase().includes(value.toLowerCase())){
                    div += `

                    <p id='boxmovies' class="align-middle" ><img src="${data[i].Poster}"></p>
                    <p id='boxmovies' class="align-middle">${data[i].Titre}</p>
                    <p id='boxmovies' class="align-middle" id='Durée'>${data[i].Durée}</p>
                    <p id='boxmovies' class="align-middle">${data[i].L_année_de_production}</p>
                    <p id='boxmovies' class="align-middle">${data[i].Festivals}</p>
                    <p id='boxmovies' class="align-middle"><lu>
                        <li  id='boxmovies'>${data[i].Acteurs[0].nom}${data[i].Acteurs[0].prénom}${data[i].Acteurs[0].nationalité},</li><br>
                        <li  id='boxmovies'>${data[i].Acteurs[1].nom}${data[i].Acteurs[1].prénom}${data[i].Acteurs[1].nationalité}</li>
                    </lu></p>
                    <p id='boxmovies' class="align-middle" id='Réalisateur'>${data[i].Réalisateur}</p>
                    <p id='boxmovies' class='braek'>______________________</p>
                _________________________________________________________
            `;
    }
    startQueries();
    document.getElementById('showmovies').innerHTML = div ;
}
}

    function searchDataweb(value){
        var table='';
            for (let i = 0; i < data.length; i++) {
                
                if(data[i].Titre.toLowerCase().includes(value.toLowerCase())){
                    table += `
                    <tr>
                        <td><img class="align-middle" src="${data[i].Poster}"></td>
                        <td class="align-middle">${data[i].Titre}</td>
                        <td class="align-middle" id='Durée'>${data[i].Durée}</td>
                        <td class="align-middle">${data[i].L_année_de_production}</td>
                        <td class="align-middle">${data[i].Festivals}</td>
                        <td class="align-middle"><lu>
                            <li>${data[i].Acteurs[0].nom},${data[i].Acteurs[0].prénom},${data[i].Acteurs[0].nationalité}</li><br>
                            <li>${data[i].Acteurs[1].nom},${data[i].Acteurs[1].prénom},${data[i].Acteurs[1].nationalité}</li>
                        </lu></td>
                        <td class="align-middle">${data[i].Réalisateur}</td>
                    </tr>`;
                }
                document.getElementById('tbody').innerHTML = table;
                showPageInfo();
                
                }
    }

let numberOfitems = 3 ;
let first = 0 ;
let actualpage = 1 ;


afficher(data);

function nextPage() {
if(first + numberOfitems <= data.length ) {
    first += numberOfitems ;
    actualpage++;
    startQueries();
    afficher(data)
}
nextPagestop() 
}

function firstPage() {
first = 0;
actualpage = 1 ;
afficher(data)
startQueries();
}

function previous() {
if(first - numberOfitems >= 0) {
    first -=numberOfitems;
    actualpage--;
    afficher(data)
    startQueries();
}
}

function lastPage() {
let topnextpage = Math.ceil(data.length / numberOfitems);
first = (topnextpage * numberOfitems) - numberOfitems;
actualpage = topnextpage ;
afficher(data)
startQueries();
}

function afficher(data){
var table = '';
        for (let i = first; i < first + numberOfitems; i++) {
            if(i < data.length){
            table += `
                        <tr>
                            <td class="align-middle" ><img src="${data[i].Poster}"></td>
                            <td class="align-middle">${data[i].Titre}</td>
                            <td class="align-middle" id='Durée'>${data[i].Durée}</td>
                            <td class="align-middle">${data[i].L_année_de_production}</td>
                            <td class="align-middle">${data[i].Festivals}</td>
                            <td class="align-middle"><lu>
                                <li>${data[i].Acteurs[0].nom}${data[i].Acteurs[0].prénom}${data[i].Acteurs[0].nationalité},</li><br>
                                <li>${data[i].Acteurs[1].nom}${data[i].Acteurs[1].prénom}${data[i].Acteurs[1].nationalité}</li>
                            </lu></td>
                            <td class="align-middle" id='Réalisateur'>${data[i].Réalisateur}</td>
                        </tr>
                    `;
            }
            document.getElementById('tbody').innerHTML = table ; 
            showPageInfo()
            
        }
    }

function showPageInfo() {
let topnextpage = Math.ceil(data.length / numberOfitems);
document.getElementById('pageinfo').innerHTML = `
Page ${actualpage} / ${topnextpage}
`;
}