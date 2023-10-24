var randomNumber1=Math.floor(Math.random()*6) + 1 ;
var randomDiceImage='images/dice'+randomNumber1 +".png";
document.querySelectorAll('img')[0].setAttribute('src',randomDiceImage);



var secondRandomNumber1=Math.floor(Math.random()*6) + 1 ;
var secondRandomDiceImage='images/dice'+ secondRandomNumber1 +".png";
document.querySelectorAll('img')[1].setAttribute('src',secondRandomDiceImage);

if( randomNumber1> secondRandomNumber1){
    document.querySelector('h1').innerHTML='The Winner is User 1'
}
else if(randomNumber1<secondRandomNumber1){
    document.querySelector('h1').innerHTML="The Winner is user 2";
}
else{
    document.querySelector('h1').innerHTML="Its a Draw";
}