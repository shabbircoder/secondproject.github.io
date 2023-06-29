
function openMenu (){
    document.getElementById('navbar').style.left = "0px"
}
function closeMenu (){
    document.getElementById('navbar').style.left = "-280px"
}


function changeBG(color) {
    document.body.style.backgroundColor = color
    let txt = document.getElementsByClassName('text')

    if(color == '#000000'){
        for(let elm of txt){
            elm.style.color = "white" ;
        }     
    }

    else{
        for(let elm of txt){
            elm.style.color = "black" ;
        }     
    }

}

