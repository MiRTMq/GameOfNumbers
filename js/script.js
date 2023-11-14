// script.js

document.addEventListener("DOMContentLoaded", function () {
	let button = document.getElementById('butt');
    let name1 =  document.getElementById('inp1');
    let name2 =  document.getElementById('inp2');
    let scores = document.getElementsByClassName('score');
    
    let num1, num2; //document.getElementById('number2');
    let battle_winner;
    let game_winner;
    let game_count = 0;
    button.addEventListener("click",function(){
        if (name1.value !=='' && name2.value !== '') 
        {game_count++;
            num1 = Math.floor(Math.random() * 11);
            num2 =  Math.floor(Math.random() * 11);
            document.getElementById('number1').textContent = num1;
            document.getElementById('number2').textContent = num2;
            if (num1 !== num2) {
                winner = (num1>num2)?0:1;
            scores[winner].textContent = scores[winner].textContent*1+1;
            }
            
            if(game_count === 3)
            {
                if (scores[0] !== scores[1]) 
                {
                    game_winner = (scores[0].textContent*1 > scores[1].textContent*1)?0:1;
                    scores[game_winner].textContent = "Переможець!";
                }else{
                     alert("Нічия!")
                }  
                setTimeout(function () {
                    game_count = 0;
                    game_winner ='';
                    battle_winner = '';
                    document.getElementById('number1').textContent = '*';
                    document.getElementById('number2').textContent = '*';
                    scores[0].textContent = 0;
                    scores[1].textContent = 0;
                }, 1000);
               
            } 
            
        }else{alert("Введіть імена гравців!");}

       
    })
   
});
