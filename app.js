//funtions
input=(e)=>{
  if(e.target.classList[1]=='x' || e.target.classList[1]=='o' || gameOver==true)
      return;
  if(next)
  {
      turn.innerHTML=' o';
      e.target.classList.add('x');
  }   
  else
  {
      turn.innerHTML=' x';
      e.target.classList.add('o');  
  }
  if(checkwin()){
      gameOver=true;
      stat.innerHTML='Winner -';
      if(next)
      {
          turn.innerHTML=" x";
          turn.style.color='#545454';
          stat.style.color='#545454';
      }
      else
      {
          turn.innerHTML=' o';
          turn.style.color='rgb(255, 255, 220)';
          stat.style.color='rgb(255, 255, 220)';
      }
  }
  if(checkDraw()){
      gameOver=true;
      stat.innerHTML='It\'s a ';
      turn.innerHTML='DRAW';
  }
  next=!next;
}
clear=(e)=>{
  for(let i=0;i<9;++i)
  {
      cells[i].classList.remove('won');
      cells[i].classList.remove('x');
      cells[i].classList.remove('o');
  }
  stat.innerHTML='Turn -';
  turn.innerHTML=' x';
  turn.style.color='#545454'
  stat.style.color='rgb(255, 255, 220)';
  next=true;
  gameOver=false;
}
checkwin = () => {
  const topLeft = cells[0].classList[1];
  const topMiddle = cells[1].classList[1];
  const topRight = cells[2].classList[1];
  const middleLeft = cells[3].classList[1];
  const middleMiddle = cells[4].classList[1];
  const middleRight = cells[5].classList[1];
  const bottomLeft = cells[6].classList[1];
  const bottomMiddle = cells[7].classList[1];
  const bottomRight = cells[8].classList[1];

  // check status
  if (topLeft && topLeft === topMiddle && topLeft === topRight) {
    cells[0].classList.add('won');
    cells[1].classList.add('won');
    cells[2].classList.add('won');
    return true;
  } else if (middleLeft && middleLeft === middleMiddle && middleLeft === middleRight) {
    cells[3].classList.add('won');
    cells[4].classList.add('won');
    cells[5].classList.add('won');
    return true;
  } else if (bottomLeft && bottomLeft === bottomMiddle && bottomLeft === bottomRight) {
    cells[6].classList.add('won');
    cells[7].classList.add('won');
    cells[8].classList.add('won');
    return true;
  } else if (topLeft && topLeft === middleLeft && topLeft === bottomLeft) {
    cells[0].classList.add('won');
    cells[3].classList.add('won');
    cells[6].classList.add('won');
    return true;
  } else if (topMiddle && topMiddle === middleMiddle && topMiddle === bottomMiddle) {
    cells[1].classList.add('won');
    cells[4].classList.add('won');
    cells[7].classList.add('won');
    return true;
  } else if (topRight && topRight === middleRight && topRight === bottomRight) {
    cells[2].classList.add('won');
    cells[5].classList.add('won');
    cells[8].classList.add('won');
    return true;
  } else if (topLeft && topLeft === middleMiddle && topLeft === bottomRight) {
    cells[0].classList.add('won');
    cells[4].classList.add('won');
    cells[8].classList.add('won');
    return true;
  } else if (topRight && topRight === middleMiddle && topRight === bottomLeft) {
    cells[2].classList.add('won');
    cells[4].classList.add('won');
    cells[6].classList.add('won');
    return true;
  } else  return false;
}
checkDraw=()=>{
  for(let cell of cells)
      if(cell.classList[1] == undefined)
          return false;
  for(let cell of cells)
      if(cell.classList[2] == 'won')
          return false;
  return true;
}

//variables
const turn = document.querySelector('.turn');
const reset = document.querySelector('.reset');
const cells = document.querySelectorAll('.board div');
const stat = document.querySelector('.stat');
let gameOver=false;
let next=true;

//eventHandling
for(let i=0;i<9;++i){
  cells[i].addEventListener('click',input);
}
reset.addEventListener('click',clear);