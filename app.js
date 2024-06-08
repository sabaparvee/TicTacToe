let boxes=document.querySelectorAll('.box');
let resetBtn=document.querySelector('#reset-btn');
let newGameBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turnO=true;
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetGame=()=>{
    turnO=true;
    count=0;
    enabledBoxes();
    msgContainer.classList.add("hide");
}
let count=0;
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        //console.log("box was clicked");
        count=count+1;
        if(turnO){
            box.innerText="O";
            box.style.color="#008147";
            turnO=false;
        }else{
            box.innerText="X";
            box.style.color='#b0413e';
            turnO=true;
        }
        box.disabled=true;
        if (count===9){
            draw();

        }
        else{
            checkWinner();
        }
    });
});

const disabledBoxes=()=>{
    for (let box of boxes){
        box.disabled=true;

    }
}
const enabledBoxes=()=>{
    for (let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const showWinner=(winner)=>{
    msg.innerText=`Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledBoxes();
};
const draw=()=>{
    msg.innerText=`Draw`;
    msgContainer.classList.remove("hide");
    disabledBoxes();
}


const checkWinner=()=>{
    for (let pattern of winPatterns){
            
        let pos1val=boxes[pattern[0]].innerText;
        let b1=(boxes[pattern[0]]);
    
        let pos2val=boxes[pattern[1]].innerText;
        let b2=(boxes[pattern[1]]);

        let pos3val=boxes[pattern[2]].innerText;
        let b3=(boxes[pattern[2]]);

    
    if(pos1val!="" && pos2val!="" && pos3val!=""){
        if(pos1val===pos2val && pos2val===pos3val){
            //console.log("winner",pos1val);
            
            showWinner(pos1val);
            //showWinner(pos1val);
        }
    }
    
    }
};
newGameBtn.addEventListener('click',resetGame);
resetBtn.addEventListener('click',resetGame);
