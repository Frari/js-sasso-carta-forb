// chiedo a utente cosa vuole lanciare
var utente=parseInt(prompt('cosa vuoi lanciare? 1=sasso, 2=carta o 3=forbice?'));
console.log(utente);

// lancio random del computer
var computer=Math.floor(Math.random()*3)+1;
console.log(computer);

function risultato(computer, utente){
  if(computer==1&&utente==2){
    console.log('computer lancia sasso');
    console.log('hai vinto');
  }else if(computer==2&&utente==1){
    console.log('computer lancia carta');
    console.log('Hai perso');
  }else if(computer==3&&utente==1){
    console.log('computer lancia forbici');
    console.log('hai vinto');
  }else if(computer==2&&utente==3){
    console.log('computer lancia carta');
    console.log('hai vinto');
  }else if(computer==1&&utente==3){
    console.log('computer lancia sasso');
    console.log('hai vinto');
  }else if(computer==3&&utente==2){
    console.log('computer lancia forbici');
    console.log('hai perso');
  }else{
    console.log('avete lanciato lo stesso segno');
    console.log('siete pari');
  }
}

// varie combinazioni lanci con rispettivi risultati
