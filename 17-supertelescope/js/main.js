let configElements = [
    {id:"e1", image:"img/astre1.png", posX:0, posY:100, echelle:0.8, type:"astre"},
    {id:"e2", image:"img/astre2.png", posX:10, posY:200, echelle:0.5, type:"astre"},
    {id:"e3", image:"img/etoile1.png", posX:15, posY:500, echelle:0.2, type:"etoile"},
    {id:"e4", image:"img/etoile2.png", posX:20, posY:600, echelle:0.3, type:"etoile"},
    {id:"e5", image:"img/etoile3.png", posX:30, posY:700, echelle:0.4, type:"etoile"},
    {id:"e6", image:"img/objet1.png", posX:40, posY:100, echelle:0.4, type:"objet"},
    {id:"e7", image:"img/objet2.png", posX:45, posY:300, echelle:0.5, type:"objet"},
    {id:"e8", image:"img/objet3.png", posX:30, posY:400, echelle:0.2, type:"objet"},
    {id:"e9", image:"img/objet4.png", posX:60, posY:150, echelle:0.1, type:"objet"},
    {id:"e10", image:"img/planete1.png", posX:70, posY:100, echelle:0.2, type:"planete"},
    {id:"e11", image:"img/planete2.png", posX:75, posY:200, echelle:0.1, type:"planete"},
    {id:"e12", image:"img/planete3.png", posX:20, posY:300, echelle:0.2, type:"planete"},
    {id:"e13", image:"img/planete4.png", posX:70, posY:500, echelle:0.3, type:"planete"}
];
// console.table(configElements);

// par défaut, on affiche tous les éléments
majInterface("");

// fonction qui met à jour l'interface en affichant seulement les éléments du type demandé
function majInterface(typeDemande){
    
    // console.log(typeDemande);

    // on efface tous les éléments éventuellement déja présents
    let skyElements = document.querySelectorAll(".skyElement");
    skyElements.forEach(function(element){
        element.remove();
    });
    
    // si le type demandé est vide, le tableau filtré est exactement le tableau configElements...
    if(typeDemande=="") {
        var configElementsFiltres=configElements;
    }else{
        // sinon, on prépare un tableau en filtrant le tableau configElements. Seulement les objets
        // ayant une propriété type égale au type demandé seront présents dans configElementsFiltres 
        var configElementsFiltres = configElements.filter(function(configElement,i){
            return configElement.type==typeDemande;
        });
    }
    
    console.table(configElementsFiltres);

    // AFFICHAGE DE TOUS LES ELEMENTS
    // pour chaque éléments du tableau configElements...
    configElementsFiltres.forEach(function(laconfig,i){
        // console.log(i,configElement);
        afficherElement(laconfig);
    });

}



// AFFICHAGE SEULEMENT DU PREMIER ELEMENT
// afficherElement(configElements[0]);

// affiche l'élément configuré dans le tableau configElements, à la case i passée en paramètre
function afficherElement(configElement){

    // création d'élément avant insertion dans la page
    let element = document.createElement("img");                    // <img>
    element.id = configElement.id;                                  // <img id="e1">
    element.className = "skyElement "+ configElement.type;          // <img id="e1" class="skyElement astre">
    element.setAttribute("src",configElement.image);                // <img id="e1" class="skyElement astre" src="img/astre1.png">
    element.style.left=configElement.posX+"%";                     // <img id="e1" class="skyElement astre" src="img/astre1.png" style="left:100px;">
    element.style.top=configElement.posY+"px";                      // <img id="e1" class="skyElement astre" src="img/astre1.png" style="left:100px;top:100px;">
    element.style.transform=`scale(${configElement.echelle})`;                  // <img id="e1" class="skyElement astre" src="img/astre1.png" style="left:100px;top:100px;transform:scale(0.8);">

    // insertion de l'élément préparé dans la page
    document.body.appendChild(element);

}
