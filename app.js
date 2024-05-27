const elementA = document.getElementById("a");
const elementB = document.getElementById("b");
const elementC = document.getElementById("c");
const elementD = document.getElementById("d");
const elementE = document.getElementById("e")
const elementF = document.getElementById("f")
const elementG = document.getElementById("g")

let a = true;
let b = true;
let c = true;
let d = true;
let e = true;
let f = true;
let g = true;
let count = 0

function Count(){
    document.getElementById("p").innerHTML = count%128

}

function set() {
    if (!a) {
    
        elementA.style.backgroundColor = "red";
    } else {
        
        elementA.style.backgroundColor = "blue";
    }

    if (!b) {
    
        elementB.style.backgroundColor = "red";
    } else {
        
        elementB.style.backgroundColor = "blue";
    }

    if (!c) {
    
        elementC.style.backgroundColor = "red";
    } else {
        
        elementC.style.backgroundColor = "blue";
    }

    if (!d) {
    
        elementD.style.backgroundColor = "red";
    } else {
        
        elementD.style.backgroundColor = "blue";
    }
    if (!e) {
    
        elementE.style.backgroundColor = "red";
    } else {
        
        elementE.style.backgroundColor = "blue";
    }
    if (!f) {
    
        elementF.style.backgroundColor = "red";
    } else {
        
        elementF.style.backgroundColor = "blue";
    }
    if (!g) {
    
        elementG.style.backgroundColor = "red";
    } else {
        
        elementG.style.backgroundColor = "blue";
    }
}

function oneUp(){

    a=!a
    if(a){
        b=!b
        if(b){
            c=!c
            if(c){
                d=!d
                if(d){
                    e=!e
                    if(e){
                        f=!f
                        if(f){
                            g=!g
                        }
                    }
                }
            }
        }
    }


set();
count++
Count();
}
let lol = document.getElementById("numper")

function countNow(number) {
    if(number == 0){
        number = 128;
    }

    for (let i = 0; i < number; i++) {
        setTimeout(oneUp, i * 50)
    }
}
    
