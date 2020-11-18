// var guess= prompt('guess a number between 1-100 to determine whether you are hot or cold?')

function hideandSeek(){

        //random number
   var random = Math.floor(Math.random()*100) + 1
   //guess a number
   var guess=  prompt('guess a number?')
   guess==random;
   
  if(isNaN(guess) || guess=="" || guess == null || guess>100 || guess<=0){
alert('input a valid number');
return false;

  }


  
  else if(guess<=40 && guess<40){
    alert('you are getting colder')
    return false;
}

  else if (guess>=40 && guess==50){
      
          alert('you are cold');

         
      }


      else if(guess=50 && guess<100){
          alert('you are getting hotter')
      }

      else{
          alert('you are hot')
      }


     
}
      

hideandSeek();

   







//ask players  to guess a random number between 1-100 and if number is less than 1, 



// NEW GAME ON CLICK


// on click submit after player inputs guess value

document.querySelector('.btn-submit').addEventListener('click', function(){
   
 
      //random number
   var random = Math.floor(Math.random()*100) + 1
   //guess a number
   var guess= document.querySelector('#input').value;
   guess==random;
   
  if(isNaN(guess) || guess=="" || guess == null || guess>100 || guess<=0){
    


alert('input a valid number');
return false;



  }


  
  else if(guess<=40 && guess<40){
    
    document.getElementById('winner').innerHTML='<h4>You are getting colder</h4>';
    document.querySelector('.colder').style.display='block';
    document.querySelector('.colder').classList.add('colder');
   
    return false;
}

  else if (guess==41|| guess==42 ||guess==43 || guess==44 || guess==45 ||  guess==46 || guess==47 || guess==48 
    || guess==49){
    document.getElementById('winner').style.display='block';
    document.querySelector('#winner').classList.add('winner');
  
      }


      else if(guess==50|| guess==51 || guess==52 || guess==53 || guess==54){
        document.getElementById('winner').innerHTML='<h2>You are just right</h2>';
        document.querySelector('.colder').style.display='block';

       return false;
      }
      else if(guess==55 || guess<=99){
        document.getElementById('winner').innerHTML='<h2>You are getting hotter</h2>';
        document.querySelector('.colder').style.display='block';
return false;
       
      }

      else{
        document.getElementById('winner').innerHTML='<h2>You are boiling hot</h2>'
        document.querySelector('.colder').style.display='block';
      }


     
  

   
})

//onclick new game. To empty the value and restart

document.querySelector('.btn-new').addEventListener('click', function(){
  
  newGame();
  
})

function newGame(){
  document.querySelector('.colder').style.display='none';

 guess= document.querySelector('#input').value=''
}

