function resultOfDices() {

    function tossingDice1() {
    var diceNum1 = Math.random();
    diceNum1 = (Math.floor(diceNum1*6))+1;
    console.log(diceNum1);
//     document.querySelector('img.img1').setAttribute('src','images/dice'+diceNum1+'.png');
       if(diceNum1===1){
          document.querySelector('img.img1').setAttribute('src','images/dice1.png');
       }else if(diceNum1===2){
          document.querySelector('img.img1').setAttribute('src','images/dice2.png');
       }else if(diceNum1===3){
          document.querySelector('img.img1').setAttribute('src','images/dice3.png');
       }else if(diceNum1===4){
          document.querySelector('img.img1').setAttribute('src','images/dice4.png');
       }else if(diceNum1===5){
          document.querySelector('img.img1').setAttribute('src','images/dice5.png');
       }else{
          document.querySelector('img.img1').setAttribute('src','images/dice6.png');
       }

       return diceNum1
    
    }
   function tossingDice2() {
    var diceNum2 = Math.random();
    diceNum2 = Math.floor(diceNum2*6)+1;
    console.log(diceNum2);
//     document.querySelector('img.img2').setAttribute('src','images/dice'+diceNum2+'.png');
        
        if(diceNum2===1){
            document.querySelector('img.img2').setAttribute('src','images/dice1.png');
        }else if(diceNum2===2){
            document.querySelector('img.img2').setAttribute('src','images/dice2.png');
        }else if(diceNum2===3){
            document.querySelector('img.img2').setAttribute('src','images/dice3.png');
        }else if(diceNum2===4){
            document.querySelector('img.img2').setAttribute('src','images/dice4.png');
        }else if(diceNum2===5){
            document.querySelector('img.img2').setAttribute('src','images/dice5.png');
        }else{
            document.querySelector('img.img2').setAttribute('src','images/dice6.png');
        }

        return diceNum2
    }

    const dice1 = tossingDice1()
    const dice2 = tossingDice2()

//     const dice1 = Math.floor(diceNum2*6)+1 
//     const dice2 = Math.floor(diceNum2*6)+1
//     document.querySelector('img.img1').setAttribute('src','images/dice'+diceNum1+'.png');
//     document.querySelector('img.img2').setAttribute('src','images/dice'+diceNum2+'.png');
        
   if( dice1 >  dice2 ){
        document.querySelector('h1').innerHTML='Player 1 wins.'
   } else if(dice1=== dice2){
        document.querySelector('h1').innerHTML='Draw between both'
   } else{
        document.querySelector('h1').innerHTML='Player 2 wins.'
   }
}

resultOfDices();


// var randomNumberDice1 = Math.floor(Math.random()*6)+1;
// var dice1Image = "dice"+randomNumberDice1+".png";
// var dice1ImageSource = "images/"+dice1Image;

// document.querySelector("img.img1").setAttribute("src",dice1ImageSource);


// var randomNumberDice2 = Math.floor(Math.random()*6)+1;
// var dice2Image = "dice"+randomNumberDice2+".png";
// var dice2ImageSource = "images/" + dice2Image;

// document.querySelector("img.img2").setAttribute("src",dice2ImageSource);

// if(randomNumberDice1>randomNumberDice2){
//     document.querySelector("h1").innerHTML=" 🚩Player 1 wins!"
// } else if(randomNumberDice1===randomNumberDice2){
//     document.querySelector("h1").innerHTML=" 🚩 Draw 🚩"
// } else{
//     document.querySelector("h1").innerHTML="Player 2 wins! 🚩"
// }




