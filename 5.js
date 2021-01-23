"use strict"
//Задание 1
function a() {
	alert( " Моськин Иван Александрович " );
}
//Задание 2
function as() {
	var text=document.getElementById('f');
	text.value=Math.round(Math.random() * 10);
}
//Задание 3
function asd() {
	 
	 var pole1=document.getElementById('pole1'); 
	var  pole2=document.getElementById('pole2');
	if (pole1.value=='') {
		alert("Введите текст в первое поле!");
	}
	else {
	pole2.value=pole1.value;
	}
}
function clasd(){
	 
	 pole1=document.getElementById('pole1'); 
	 pole1.value='';
	 pole2=document.getElementById('pole2');
	 pole2.value='';

}
//Задание 4


function table() {
	var a=document.getElementById('row').value;
	var b=document.getElementById('col').value;
	var tbody = document.getElementById('form1');
	if (a>=1,b>=1) {
		tbody = document.getElementById('table1');
			for (i=1;i<=a;i++) {
				var row = document.createElement("TR");
				for (j=1;j<=b;j++) {
				var	td1 = document.createElement("TD");
					td1.appendChild(document.createTextNode(Math.round(Math.random() * 10)));
					row.appendChild(td1);
					tbody.appendChild(row);
				}
			
			}
	}
	else {
		alert('Введите значения > 0	');
	}
    
}
//Задание 5
function result() {
	var edic=document.getElementById('answer');var res=0;
	var znak=edic.value.slice(edic.value.indexOf(' ')+1,edic.value.indexOf(' ')+2);
	var numone=edic.value.slice(0 , edic.value.indexOf(' '));
	var numdva=edic.value.slice(edic.value.indexOf(' ') + 2,edic.value.length );
	if (znak=='*') {
		res=Number(numdva) * Number(numone);edic.value=res;
	}
	else {
		if (znak == '/') {
			if (Number(numdva)==0) {
				alert('На ноль делить нельзя');
				cleand();
			}
			else{
			res=Number(numone) / Number(numdva);edic.value=res;}
		}
		else {
			if (znak == '+') {
			 res=Number(numone)+Number(numdva);edic.value=res;
			}
			else {
				if (znak == '-') {
				res=Number(numone)-Number(numdva);edic.value=res;
				}

			}

		}
	}
	
}
function minus() {
	var edic=document.getElementById('answer');
	if (edic.value!=''){
		if (edic.value.slice(edic.value.indexOf(' ')+1,edic.value.indexOf(' ')+2)=='*' ||
		 edic.value.slice(edic.value.indexOf(' ')+1,edic.value.indexOf(' ')+2)=='/' ||
		  edic.value.slice(edic.value.indexOf(' ')+1,edic.value.indexOf(' ')+2)=='+' ||
		   edic.value.slice(edic.value.indexOf(' ')+1,edic.value.indexOf(' ')+2)=='-') {

				} else{
	edic.value=edic.value + " - ";}}


}
function plus() {
	var edic=document.getElementById('answer');
	if (edic.value!=''){
		if (edic.value.slice(edic.value.indexOf(' ')+1,edic.value.indexOf(' ')+2)=='*' ||
		 edic.value.slice(edic.value.indexOf(' ')+1,edic.value.indexOf(' ')+2)=='/' ||
		  edic.value.slice(edic.value.indexOf(' ')+1,edic.value.indexOf(' ')+2)=='+' ||
		   edic.value.slice(edic.value.indexOf(' ')+1,edic.value.indexOf(' ')+2)=='-') {

				} else{
	edic.value=edic.value + " + ";}}
}
function mnog() {
	var edic=document.getElementById('answer');
	if (edic.value!=''){
		if (edic.value.slice(edic.value.indexOf(' ')+1,edic.value.indexOf(' ')+2)=='*' ||
		 edic.value.slice(edic.value.indexOf(' ')+1,edic.value.indexOf(' ')+2)=='/' ||
		  edic.value.slice(edic.value.indexOf(' ')+1,edic.value.indexOf(' ')+2)=='+' ||
		   edic.value.slice(edic.value.indexOf(' ')+1,edic.value.indexOf(' ')+2)=='-') {

				} else{
	edic.value=edic.value + " * ";}}
}
function delit() {
	var edic=document.getElementById('answer');
	if (edic.value!=''){
		if (edic.value.slice(edic.value.indexOf(' ')+1,edic.value.indexOf(' ')+2)=='*' ||
		 edic.value.slice(edic.value.indexOf(' ')+1,edic.value.indexOf(' ')+2)=='/' ||
		  edic.value.slice(edic.value.indexOf(' ')+1,edic.value.indexOf(' ')+2)=='+' ||
		   edic.value.slice(edic.value.indexOf(' ')+1,edic.value.indexOf(' ')+2)=='-') {

				} else{
	edic.value=edic.value + " / ";}}
}
function cleand() {
	var edic=document.getElementById('answer');
	edic.value='';

}
function vosem() {
	var edic=document.getElementById('answer');
	edic.value = edic.value + "8";

}
function nina() {
	var edic=document.getElementById('answer');
	edic.value=edic.value + "9";
}
function sem() {
	var edic=document.getElementById('answer');
	edic.value=edic.value + "7";
}
function six() {
	var edic=document.getElementById('answer');
	edic.value=edic.value + "6";
}
function pyat() {
	var edic=document.getElementById('answer');
	edic.value=edic.value + "5";
}
function chet() {
	var edic=document.getElementById('answer');
	edic.value=edic.value + "4";
}
function tri() {
	var edic=document.getElementById('answer');
	edic.value=edic.value + "3";
}
function dva() {
	var edic=document.getElementById('answer');
	edic.value=edic.value + "2";
}
function odin() {
	var edic=document.getElementById('answer');
	edic.value=edic.value + "1";
}
function nul() {
	var edic=document.getElementById('answer');
	if (edic.value!='')
	edic.value=edic.value + "0";
}
