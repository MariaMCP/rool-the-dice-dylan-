function rollDice(){
	
  var die1 = document.getElementById("die1");
	var die2 = document.getElementById("die2");
	var status = document.getElementById("status");
				
	var d1 = Math.floor(Math.random()*4) +1;
	var d2 = Math.floor(Math.random()*6) +1;
  var d3 = Math.floor(Math.random()*8) +1;
	var d4 = Math.floor(Math.random()*10) +1;
  var d5 = Math.floor(Math.random()*12) +1;
  var d6 = Math.floor(Math.random()*20) +1;
  
  var diceTotal = "1d4/1d6/1d8/1d10/1d12/1d20";
						
	die1.innerHTML = d1;
	die2.innerHTML = d2;
  die3.innerHTML = d3;
	die4.innerHTML = d4;
  die5.innerHTML = d5;
	die6.innerHTML = d6;
  	status.innerHTML = diceTotal;
}