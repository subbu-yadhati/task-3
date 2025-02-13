let count=0
let turn="X"
let gameover=false
function changeturn(){
    turn=(turn==="X") ? "O":"X"
}
let winset=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
let cells=document.querySelectorAll(".cells")
let box=document.getElementById("box")
        
function checkwin(){
    for(let set of winset){
        let [a,b,c] = set
        if(cells[a].innerText!=="" && 
            cells[a].innerText === cells[b].innerText && 
            cells[a].innerText === cells[c].innerText){
            box.innerText = turn + " 's win"
            let top=document.getElementById("top")
            top.innerText=turn + " 's win"
            box.innerText="Game Over"
            cells[a].style.backgroundColor = `rgb(148, 255, 148)`;
            cells[b].style.backgroundColor = `rgb(148, 255, 148)`;
            cells[c].style.backgroundColor = `rgb(148, 255, 148)`;
            gameover=true
            return true;
        }
    }
    return false;
}
cells.forEach(cell =>{
    cell.addEventListener('click' ,()=>{
        if(gameover){
            return
        }
        if(cell.innerText===""){
            cell.innerText=turn
            if(checkwin()){
                return
            }
            count++
             changeturn()
            box.innerText=turn+" ' s turn"
        }
        if(count===9){
            box.innerText="Draw"
        }
        
        
    })
})
function restart(){
    cells.forEach(element => {
        element.innerText="" 
        element.style.backgroundColor="white"               
    });
    count=0
    turn="X"
    gameover=false
    box.innerText="X ' s turn"
    let top=document.getElementById("top")
    top.innerText = null

}