/* 
<i class="fa-solid fa-circle-notch"></i> */
let startpage= document.querySelector("#startpage");
let choose= document.querySelectorAll(".choose");
let changeTurn =null;
let bg=document.querySelector("#cont");
let main= document.querySelector("#main");
let show= document.querySelector("#showChange");
let box= document.querySelectorAll(".box");
let winner= document.querySelector("#win");
let winName= document.querySelector("#winName");
let quit= document.querySelector("#quit");
let rep= document.querySelector("#rep");


choose.forEach(chooseNow =>{
    chooseNow.addEventListener("click", ()=>{
        if(chooseNow.id==="playerX"){
            changeTurn=false;
            show.style.left ='0px';
        }else {
            changeTurn=true;
            show.style.left ='160px';
        }
        startpage.style.display="none";
        main.style.display="block";

    })
    
});

box.forEach(items =>{
    items.addEventListener("click",()=>{
        if(changeTurn==false){
            items.innerHTML='<i class="fa fa-times"></i>';
            items.id='X';
            items.style.pointerEvents="none";
            show.style.left='145px';
            changeTurn=true;
        }
        else{
            items.innerHTML='<i class="fa fa-circle-notch"></i>';
            items.id='O';
            items.style.pointerEvents="none";
            show.style.left='0px';
            items.style.color='#e02929';
            changeTurn=false;
        }
        win();
        draw();
    })
});

let winCombo=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
let win = () =>{
    for(let a=0;a<=7;a++){
        let b=winCombo[a];
        console.log(b);
        if(box[b[0]].id == "" || box[b[1]].id == "" ||box[b[2]].id == "" ){
            continue;
        }else if(box[b[0]].id == "X" && box[b[1]].id == "X" && box[b[2]].id == "X"){
            // console.log("X is the Winner");
            winName.innerText='Player X won the Game!';

            main.style.display="none";
            winner.style.display="block";
            
        }
        else if(box[b[0]].id == "O" && box[b[1]].id == "O" && box[b[2]].id == "O"){
            // console.log("O is the Winner");
            winName.innerText='Player O won the Game!';

            main.style.display="none";
            winner.style.display="block";
        }
        else{
            continue;
        }
    }
}
//Match draw

let draw =()=>{
    if(box[0].id != "" && box[1].id!=""&&
    box[2].id != "" && box[3].id != "" && 
    box[4].id != "" && box[5].id != "" && 
    box[6].id != "" && box[7].id != ""&&  box[8].id != "") {
        winName.innerText='Match Draw!';

        main.style.display="none";
        winner.style.display="block";
    }
 
    
}
quit.addEventListener("click",() =>{
   window.location.reload();
});
rep.addEventListener("click",() =>{
    window.close();
 });

