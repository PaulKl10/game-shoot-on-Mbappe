let AllTimers =[];
let configElements =[
    {id:"e1", image:"./img/mbappe.png", posX:1100, posY:Math.floor(Math.random()*500), echelle:130, type:"objet"},
    {id:"e2", image:"./img/mbappe.png", posX:700, posY:Math.floor(Math.random()*500), echelle:130, type:"comete"},
    {id:"e3", image:"./img/mbappe.png", posX:1000, posY:Math.floor(Math.random()*500), echelle:130, type:"objet"},
    {id:"e4", image:"./img/mbappe.png", posX:900, posY:Math.floor(Math.random()*500), echelle:130, type:"objet"},
    {id:"e5", image:"./img/mbappe.png", posX:900, posY:Math.floor(Math.random()*500), echelle:130, type:"planete"},
    {id:"e6", image:"./img/mbappe.png", posX:800, posY:Math.floor(Math.random()*500), echelle:130, type:"planete"},
    {id:"e7", image:"./img/mbappe.png", posX:1000, posY:Math.floor(Math.random()*500), echelle:130, type:"planete"},
    {id:"e8", image:"./img/mbappe.png", posX:1100, posY:Math.floor(Math.random()*500), echelle:130, type:"planete"},
    {id:"e9", image:"./img/mbappe.png", posX:1000, posY:Math.floor(Math.random()*500), echelle:130, type:"planete"},
    {id:"vaisseau", image:"./img/vaisseau.png", posX:0, posY:300, echelle:100, type:"vaisseau"}
];

configElements.forEach(function (configElement,i){
    // création d'élement avant insertion
    let element = document.createElement("img");

    if(configElement.type == "objet"){
        element.className = "objet";
    }
    
    element.classList.add("skyElement");
    if(configElement.type == "vaisseau"){
        element.classList.remove("skyElement");
        element.classList.add("vaisseau");
    }
    element.id = configElement.id
    element.src = configElement.image;
    element.style.width =configElement.echelle+"px";
    element.style.top = configElement.posY+"px";
    element.style.left = configElement.posX+"px";
    document.body.appendChild(element);
    if(configElement.id == 'e1'|| configElement.id == 'e2'|| configElement.id == 'e3'|| configElement.id == 'e4'|| configElement.id == 'e5'|| configElement.id == 'e6'|| configElement.id == 'e7'|| configElement.id == 'e8'|| configElement.id == 'e9'|| configElement.id == 'e10'|| configElement.id == 'e11'|| configElement.id == 'e12'){
        deplacement();
        function deplacement(){
            configElement.posX += -10;
            element.style.left = configElement.posX+"px";
            

            if(Number(element.style.left.replace("px",""))==0){
                document.body.innerHTML=`
                <h1 class="text-danger text-center pt-5 mt-5">You Lose</h1>
                <a href="" class="border bg-white text-center bouton">Try again</a>
                `;
            };
            console.log(configElement.posX);
        }
      var timer = setInterval(deplacement,500);
      AllTimers.push(timer);
    }
    
});

var fuse = document.querySelector('#vaisseau');
var topfuse = 300;
var leftfuse = 0;
var compteur =0;



document.body.addEventListener('keydown', e =>{
            
    if(e.key === 'ArrowUp'){
        topfuse+=-10;
        fuse.style.top = topfuse+"px";
        }
    if(e.key === 'ArrowDown'){
        topfuse+=10;
        fuse.style.top = topfuse+"px";
        }
    if(e.key === 'ArrowRight'){
        leftfuse+=10;
        fuse.style.left = leftfuse+"px";
        }
    if(e.key === 'ArrowLeft'){
        leftfuse+=-10;
        fuse.style.left = leftfuse+"px";
        }
    if(e.key === ' '){
        var leftmissile = 50;
        var element2 = document.createElement("div");
        element2.classList.add("skye");
        element2.style.width ="50px";
        element2.style.height ="6px";
        element2.style.backgroundColor ='red';
        element2.style.top = topfuse+25+"px";
        element2.style.left = leftfuse+leftmissile+"px";
        document.body.appendChild(element2);
        missile();
        setInterval(missile,10);
        
        
        function missile(){
            leftmissile+=5;
            element2.style.left = leftfuse+leftmissile+"px";
            if((Number(element2.style.left.replace("px","")))>1200){
                element2.remove();
            }
            
            var cibles = document.querySelectorAll('.skyElement');
            cibles.forEach(cible => {
                
                if(Number(element2.style.top.replace("px","")) >= Number(cible.style.top.replace("px","")) && Number(element2.style.top.replace("px","")) <= (Number(cible.style.top.replace("px",""))+100)  && Number(element2.style.left.replace("px","")) >= Number(cible.style.left.replace("px",""))){

                    cible.remove();
                    compteur++;
                    console.log(compteur);
                    if(compteur==9){
                    document.body.innerHTML=`
                    <h1 class="text-danger text-center pt-5 mt-5">You Win</h1>
                    <a href="" class="border bg-white text-center bouton">Try again</a>
                    `;
                    AllTimers.forEach(function(timer){clearInterval(timer)});
                    }
                }
            });
        }
        }

    });




