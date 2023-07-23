//text change 
function textChange(){
	document.getElementById('h2').innerHTML = "Hello there!";
}
//show date
function showDate(){
	document.getElementById('dh2').innerHTML = Date();
}
//variable repeat ex
function dataRepeat(){
	var message ="Welcome to SS";
	document.getElementById('dr').innerHTML = message.repeat(3);
}
//bulb on/off
function bulbOn(){
	document.getElementById('bulb').src = 'images/bulbon.gif';
}
function bulbOff(){
	document.getElementById('bulb').src = 'images/bulboff.gif';
}
//font size change
function fontSize(){
	document.getElementById('fc').style.fontSize = "30px";
}
//show/hide
function textShow(){
	document.getElementById('sh').style.display ="block";	
}
function textHide(){
	document.getElementById('sh').style.display ="none";	
}
//text 
function textShow(){
	var text= "Hello world";
	document.getElementById('tx').innerHTML = text;
}
//add statement
function addValue(){
	let x,y,z;
		x=3;
		y=7;
		z=x+y;
	document.getElementById('ad').innerHTML="The value of z is "+z+".";	
}
//string
function textString(){
	document.getElementById('str').innerHTML ='St Akhter';
}
//variable
function varValue(){
	let x;
		x=100;
	document.getElementById('va').innerHTML = x;
}
//operator
function oppValue(){
	document.getElementById('op').innerHTML=(5+6)*10;
}
// var keyword 
function varKey(){
	var x,y;
		x=5+5;
		y=x*10;
	document.getElementById('vke').innerHTML=y;
}
//js case sensitive
function caseSensitive(){
	let lastname,lastName;
		lastName="Doe";
		lastname="Peter";
	document.getElementById('casen').innerHTML=lastname;	
}
//var example
function vEx(){
	x=15;
	y=10;
	z=x+y;
	document.getElementById('vex').innerHTML="The value of z is:" +z;
}
//const ex
function consVar(){
	const price1=1500;
	const price2=2000;
	let total =price1+price2;
	document.getElementById('cons').innerHTML="The total is:" +total;
}
//const err
function conErr(){
	try{
		const PI=3.555;
		PI=3.55;
	}
	catch (err){
		document.getElementById('cerr').innerHTML=err;
	}
}
//** op
function exOp(){
	let x=7;
	let y=x**2 ;
	document.getElementById('pow').innerHTML=y;
}
//math power
function mpOp(){
	let x=7;
	let y=Math.pow(x,3) ;
	document.getElementById('mp').innerHTML=y;
}
//remainder value
function reOp(){
	let x=7;
	let y=3;
	let z=x%y;
	document.getElementById('re').innerHTML=z;
}
//++ operator
function inOp(){
	let x=7;
		x++;
	let y=x;
	document.getElementById('in').innerHTML=y;
}
//operator precedence
function preOp(){
	document.getElementById('pre').innerHTML=50+10*3;
}
//assignment operator
function asOp(){
	let x=7;
		x+=10;
	document.getElementById('as').innerHTML=x;
}
//boolean datatype
function booleaData(){
	let x=7;
	let y=7;
	let z=9;
	document.getElementById('boolea').innerHTML=(x==y)+ "<br>" +(x==z);
}
