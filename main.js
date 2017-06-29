'use strict'
/*
var zp = +prompt('Введите вашу зароботную плату');
var k = 1, n = 0;


while(zp < 0 || isNaN(zp)){zp=+prompt('Некоректный ввод. Повторите попытку')}
if(zp == 0){console.log('К вам едет ОБЭП')}
if(zp<=300){k=0.8}
if(zp>=301 && zp<=700){k=1.2}
if(zp>=701 && zp<=1500){k=1.8}
if(zp>=1501){k=3.4}

n=(zp*k)/100;

console.log("Зарплата "+zp);
console.log("Налог "+n);
console.log("Чистыми "+ (zp-n));

console.log('--------------------Строка--------------------------');


var x = prompt('Введите 5-значное число');
var sum = 0, pr = 1, k='';

while(x < 0 || isNaN(x) || x==''){x=+prompt('Некоректный ввод. Повторите попытку')}
for(var i = 0; i<x.length; i++) {
	k=+x[i];
	sum+=k;
	pr*=k;
}

console.log("Число = "+x);
console.log("Сумма = "+sum);
console.log("Произведение = "+pr);


console.log('----------------------Через массив----------------------------');

var x = prompt('Введите 5-значное число');
var arr=[], sum = 0, pr = 1;

while(x < 0 || isNaN(x) || x==''){x=+prompt('Некоректный ввод. Повторите попытку')}
for(var i = 0; i<x.length; i++) {
	arr[i] = x[i];
	sum+=+arr[i];
	pr*=+arr[i];
}

console.log("Число = "+x);
console.log("Сумма = "+sum);
console.log("Произведение = "+pr);



console.log('--------------------------Елочка----------------------------------');

var x = 0, sum = 0, k='';

for (var i = 1000; i<1000000; i++) {
	x=''+i;

	for(var j = 0; j<x.length; j++) {
		k=+x[j];
		sum+=k;

	}

	if (sum == 15) {console.log(x)};
	sum = 0;
}


console.log('---------------------------Елочка (отзеркалена) ---------------------------------');

var n = +prompt('Введиет число N');
var str = '', kP = 1 , dStr = n*2-1;

for (var i = 1; i <= n; i++) {
	for (var j=1; j <= dStr; j++){

		if (j < kP) str+=" ";
			else str+="*";

		}

	dStr--;
	kP++;

	console.log(str);
	str = "";

}

kP = n;
dStr = n;

for(var i = 1; i <= n; i++) {
	for(var j=1; j <= dStr; j++){

		if(j < kP) str+=" ";
			else str+="*";

		}

	dStr++
	kP--;

	console.log(str);
	str = "";

}

console.log('---------------------------Елочка (с пробелами) ---------------------------------');

var n = +prompt('Введиет число N');
var str = '', kP = n , dStr = n , l = 1;

for (var i = 1; i <= n; i++) {
	for (var j = 1; j <= dStr; j++){

		if (j < kP) str+=" ";
			else if ( j == dStr-l || j == kP+l ) str+=" ";
				else str+="*";

		}
	l++;
	dStr++;
	kP--;

	console.log(str);
	str = "";

}



console.log('------------------------------------------------------------------------------');

var mass=[], x="", y="";

do {
	mass.push(+prompt("Введите число"));

} while (mass[mass.length-1] != 0)

console.log("Исходный массив " + mass.join(" "));

x=mass.splice(0,1,mass[mass.length-1]);
y=mass.splice(1,1,mass[mass.length-2]);
mass.splice(mass[mass.length-2],1, x);
mass.splice(mass[mass.length-3],1, y);

console.log("Измененный массив " + mass.join(" "));


console.log('------------------------------------------------------------------------------');

var x="", a=[], b=[];

var mass=[], max=[], prom=[], full=[], fullMax=[];

// mass - хранит исходный массив
// max - хранит максимальную последовательность
// prom - массив собирает последовательность в цикле
// full - хранит все последовательности ( для дальнейшей сортировки)
// fullMax - все последовательности по длинее равные максимальной.

do {
	mass.push(+prompt("Введите число. При вводе нуля ввод чисел прервется, а ноль станет последним числом в массиве"));

} while (mass[mass.length-1] != 0);

console.log("Начальный массив = "+mass.join(" "));

for ( var i=0; i<mass.length; i++) {
	if(mass[i] == mass[i+1]-1 && mass[i] != mass[i-1]+1) prom.push(mass[i])       //проверка на начало
	else if (mass[i] == mass[i-1]+1 && mass[i] == mass[i+1]-1) prom.push(mass[i]) //проверка на элемент
	else if (mass[i] == mass[i-1]+1 && mass[i] != mass[i+1]-1) {        //проверка на конец последовательности
		prom.push(mass[i])

		// проверка на то является ли последовательности максимальной

		if(max.length < prom.length) {
			max.length = 0;
			fullMax.length = 0;
			max = max.concat(prom);

			fullMax.push(prom.join(" "));
			full.push(prom.join(" "));
			prom.length = 0;
		}
		else if (max.length == prom.length && max.length != 0) {

				fullMax.push(prom.join(" "));
				full.push(prom.join(" "));
				prom.length = 0;

			}
		else if( max.length > prom.length) {
				full.push(prom.join(" "));
				prom.length = 0;
			}
	}


}

console.log("Максимальная последовательность = "+max.join(" "));
console.log("Последовательности такой же длинны как и максимальная = "+fullMax.join(" ; "))
console.log ("Все последовательности = "+ full.join(" ; "));

// сортировка последовательностей по количеству эелементов ( от меньшего к большему)

for(var j=0; j<full.length; j++) {
	if( j+1 == full.length) {break;}
	a = full[j].split(" ").length;
	b = full[j+1].split(" ").length;
	if(a > b) {
		x = full[j];
		full.splice(j,1, full[j+1]);
		full.splice(j+1,1, x);
		j = -1;
	}
}

console.log ("Все последовательности в порядке возрастания = "+ full.join(" ; "));

/*
console.log('------------------------------------- по возрастанию и убыванию -----------------------------------------');


var mass=[], x='';

do {
	mass.push(+prompt("Введите число. При вводе нуля ввод чисел прервется, а ноль станет последним числом в массиве"));

} while (mass[mass.length-1] != 0);

console.log("Начальный массив = "+mass.join(" "));

for(var i=0; i<mass.length; i++) {
	if(mass[i] > mass[i+1]) {
		x = mass[i];
		mass.splice(i,1, mass[i+1]);
		mass.splice(i+1,1, x);
		i = -1;
	}
}

console.log("В порядке вощрастания = "+ mass.join(" "));

mass.reverse();

console.log("В порядке убывания = "+ mass.join(" "));



console.log('------------------------------------- по возрастанию и убыванию с половиной ------------------------------------');

var mass=[], x='';

do {
	mass.push(+prompt("Введите число. При вводе нуля ввод чисел прервется, а ноль станет последним числом в массиве"));

} while (mass[mass.length-1] != 0);

if(mass.length % 2 != 0) mass.push(1);
console.log("начальный массив = " + mass.join(" "));

var mass1=mass.slice(0, mass.length/2);
var mass2=mass.slice(mass.length/2);


for(var i=0; i<mass1.length; i++) {
	if(mass1[i] > mass1[i+1]) {
		x = mass1[i];
		mass1.splice(i,1, mass1[i+1]);
		mass1.splice(i+1,1, x);
		i = -1;
	}
}
for(var i=0; i<mass2.length; i++) {
	if(mass2[i] > mass2[i+1]) {
		x = mass2[i];
		mass2.splice(i,1, mass2[i+1]);
		mass2.splice(i+1,1, x);
		i = -1;
	}
}
 mass2.reverse();



console.log(mass1);
console.log(mass2);



console.log('------------------------------------- двумерный массив -------------------------------------');

var a, sum=0;

var col=+prompt("Введите число столбцов в матрице", 1);
var row=+prompt("Введите число строц в мтарице", 1);

var mass=[], massSmall=[];

for(var i=0; i<row; i++) {
	for(var j=0; j<col; j++){
		a=+prompt("Заполните массив")
		sum+=a;
		massSmall.push(a);
	}
	mass.push(massSmall.join(" "));
	massSmall.length = 0;
	console.log(mass[i]);
}

console.log("Сумма элементов массива = "+ sum);



console.log('------------------------------------- двумерный массив №2 -------------------------------------');

var a, b, sum=0, sumP=0, sumO=0;

var col=+prompt("Введите число столбцов в матрице", 1);
var row=+prompt("Введите число строц в мтарице", 1);

var mass=[], massSmall=[];

for(var i=0; i<row; i++) {
	for(var j=0; j<col; j++){
		a=+prompt("Заполните массив")
		if( a < 0 ) sumP+=a;
		else if(a > 0) sumO+=a;
		sum+=a;
		massSmall.push(a);
	}
	mass.push(massSmall.join(" "));
	massSmall.length = 0;
	console.log(mass[i]);
}

console.log("");

for(var i=0; i<row; i++) {
	massSmall =  mass[i].split(" ");
	for(var j=0; j<col; j++){
		if( massSmall[j] < 0 )  massSmall.splice(j,1,"$");
		else if(massSmall[j] > 0) massSmall.splice(j,1,"*");
	}
	mass.splice(i,1,massSmall.join(" "));
	console.log(mass[i]);
}


console.log("Сумма положительных элементов массив = "+ sumP);
console.log("Сумма отрицательных элементов массива = " + sumO);
console.log("Сумма элементов массива = "+ sum);



console.log('------------------------------------- двумерный массив спираль-------------------------------------');

var n=1, r=0, l=0, b=0, u=0;

var col=+prompt("Введите число столбцов в матрице", 1);
var row=+prompt("Введите число строц в мтарице", 1);

var mass=[], massSmall=[];

// создание массива со строками

for(var i=0; i<row; i++) {
	for(var j=0; j<col; j++){
		massSmall.push(0);
	}
	mass.push(massSmall.join(" "));
	massSmall.length = 0;
}


// преобразование строк в массивы для получения двухмерного массива

for (var i=0;i<mass.length; i++) {
	mass[i] = mass[i].split(" ");
}

i=0;
j=0;
n=1;

//заполнение по спирали с позиции 0:0 к центру
//откоментировать след. строчку для заполнения от центра к началу, а так же заменить всю инкрементацию n на дикрементацию.

//n=row*col;

for( var a=1; a<=row*col; a++){
	if(j<row-r && i==r){ //для шага вправо
		mass[i][j] = n;
		n++;
		if(j== row-1-r) {
			r++;
			i++;
			j--;
		}
		j++;
	}

	else if(i<row-b && j==row-1-b){ //для шага вниз
		mass[i][j]=n;
		n++;
		if(i == row-1-b){
			b++;
			j--;
			i--;
		}
		i++;
	}

	else if(j>=0+l && i==row-1-l){ //для шага влево
		mass[i][j]=n;
		n++;
		if(j==0+l){
			l++;
			i--;
			j++;
		}
		j--;
  }
	else if (i>=0+u && j==0+u){ //для шага вверх (при рисовании вверх послед.элемент рисуется как первый вправо)
		mass[i][j]=n;
		n++;
		if(i==2+u) {
			u++;
		}
		i--;
	}
}

for(var i = 0 ; i <mass.length; i++){
	if(i==0 && row>=4) console.log(mass[i].join('  '));
	else console.log(mass[i].join(' '));
}


console.log('-------------------------------- вхождение кол-во------------------------------------------');

var str=prompt("Введите строку");
var pos=prompt("Введите последовательность");
var k=0;

console.log(str);

for (var i=0; i<str.length; i++) {

	if(str.indexOf(pos) != -1) {
		k++;
		str=str.slice(pos.length);
		str=str.trim();
		i=-1;
	}


}

console.log(k);



console.log('-------------------------------- кол-во слов------------------------------------------');


var str=prompt("Введите строку");
var k=0;

str=str.trim();
console.log(str);

for (var i=0; i<str.length; i++) {
	if(str[i]==" " && str[i+1] != " "){
		k++;
	}
}

if(k!=0) k++;

console.log("Кол-во слов = "+k);




console.log('-------------------------------- по возрастанию по колву символов ------------------------------------------');

var str=prompt("Введите строку");
str=str.trim();
var mass=str.split(" ");
var a,b,x;

for(var i=0; i<mass.length; i++) {
	if( i+1 == mass.length) {break;}
	a = mass[i].split("").length;
	b = mass[i+1].split("").length;
	if(a > b) {
		x = mass[i];
		mass.splice(i,1, mass[i+1]);
		mass.splice(i+1,1, x);
		i = -1;
	}
}

console.log(mass.join(" "));




console.log('-------------------------------- чтораньше X или Y ------------------------------------------');

var str=prompt('Введите строку');

var x=0, y=0;

for (var i=0; i<str.length; i++){
	if(str[i] == "x") x++;
	else if(str[i] == "y") y++;

	if( x==1 && y==0) {
		console.log("Х встречается раньше ");
		break;
	}
	else if( x==0 && y==1) {
		console.log("Y встречается раньше ");
		break;
	}
}

x=0;
y=0;

for (var i=0; i<str.length; i++) {
	if(str[i] == "x") x++;
	else if(str[i] == "y") y++;
}

if(x==0) console.log("Символ Х не встречается");
if(y==0) console.log("Символ Y не встречается");


console.log('-------------------------------- Вывод большей строки  ------------------------------------------');

var str1=prompt("Введиет строку номер 1 ");
var str2=prompt("Введите строку номер 2");

if(str1.length>str2.length) {
	var x = str1.length-str2.length;
	for(var i=0; i<x; i++){
		console.log(str1);
	}
}
if(str1.length<str2.length) {
	var x = str2.length-str1.length;
	for(var i=0; i<x; i++){
		console.log(str2);
	}
}
if(str1.length==str2.length) console.log("Строки равны");




console.log('-------------------------------- Замена первых символов или добавление в конец ------------------------------------------');


var str=prompt("Введиет строку");

var strChek="";

strChek=str.slice(0,3);
console.log(strChek);
if(strChek == "abc"){
	str= "www"+str.substr(2);
}
else{
	str=str+"zzz"
}

console.log(str);



console.log('-------------------------------- Если больше 10 ------------------------------------------');

var str=prompt("Введиет строку");

if(str.length>10) {
	str=str.slice(0,6);
}
else{
	for(var i=str.length; i<12; i++) {
		str+="o";
	}
}

console.log(str,str.length);



console.log('-------------------------------- замена на А и С + колво цифр в строке ------------------------------------------');

var str=prompt("Введиет строку");
var mass = str.split("");
var k=0, x=0;

console.log(str);
console.log(mass);

for(var i=0; i<mass.length; i++){
	x=+mass[i];
	if(!isNaN(x)) {k++;}
}

console.log("Числе в  строке " + k )

for(var i=0; i<mass.length; i+=2) {
	if(mass[i] !="a" && mass[i]!="b") {
		mass.splice(i,1,"a");
	}
	else{
		mass.splice(i,1,"c");
	}
}

str = mass.join();
console.log(str);



console.log('-------------------------------- только ли ABC ------------------------------------------');

var str=prompt("Введите строку");

for(var i=0; i<str.length; i++) {
	if(str[i]!="a" && str[i]!="b" && str[i]!="c") {
		console.log("Строка содержите не только a b c ");
		break;
	}
}



console.log('-------------------------------- замена word на letter ------------------------------------------');

var str=prompt("Введиет строку");

var mass=str.split("word");
console.log(str);
console.log(mass.join("letter"));



console.log('-------------------------------- удаление иксов и abc ------------------------------------------');

var str=prompt("Введите строку");

var mass1=[];
var mass2=[], massRez=[];

var x=0, k=0;

console.log(str);

do{
	k=0;
	mass1=str.split("abc");

	for(let i=0; i<mass1.length; i++) {
		mass2=mass1[i].split("");
		if( mass2[mass2.length-1] == "x" ){mass2.splice(mass2.length-1,1);}
		massRez.push(mass2.join(""));
	}
	str=massRez.join("abc");

	for(let i=0; i<str.length; i++) {
		if(str[i] == "x") k++;
	}

	mass1.length=0;
	mass2.length=0;
	massRez.length=0;
} while(k!=0);

console.log(str);

mass1=str.split("");

for(let i=0; i<mass1.length; i++) {
	x=+mass1[i];
	if( !isNaN(x) && mass1[i-1] == "c" && mass1[i-2]=="b" && mass1[i-3]=="a") {mass1.splice(i-3,3); i=-1;}
}

console.log(mass1.join(''));



console.log('-------------------------------- цифр в строке ------------------------------------------');


var str=prompt("Введиет строку");
var mass = str.split("");
var k=0, x=0;

console.log(str);

for(var i=0; i<mass.length; i++){
	x=+mass[i];
	if(!isNaN(x)) {k++;}
}

console.log("цифр в  строке " + k )



console.log('-------------------------------- последовательность в тексте ------------------------------------------');

var x="", a=[], b=[], y=0;

var mass=[], max=[], prom=[], full=[], fullMax=[];

// mass - хранит исходный массив
// max - хранит максимальную последовательность
// prom - массив собирает последовательность в цикле
// full - хранит все последовательности ( для дальнейшей сортировки)
// fullMax - все последовательности по длинее равные максимальной.

var str=prompt("Введиет текст");

console.log(str);

mass=str.split("");

for(let i=0; i<mass.length; i++) {
	y=+mass[i];
	if (!isNaN(y)) {
		mass.splice(i,1,y)
	}
	else{mass.splice(i,1,0)}

}

for ( var i=0; i<mass.length; i++) {
		if(mass[i] == mass[i+1]-1 && mass[i] != mass[i-1]+1) prom.push(mass[i])       //проверка на начало
		else if (mass[i] == mass[i-1]+1 && mass[i] == mass[i+1]-1) prom.push(mass[i]) //проверка на элемент
		else if (mass[i] == mass[i-1]+1 && mass[i] != mass[i+1]-1) {        //проверка на конец последовательности
			prom.push(mass[i])

			// проверка на то является ли последовательности максимальной

			if(max.length < prom.length) {
				max.length = 0;
				fullMax.length = 0;
				max = max.concat(prom);

				fullMax.push(prom.join(" "));
				full.push(prom.join(" "));
				prom.length = 0;
			}
			else if (max.length == prom.length && max.length != 0) {

					fullMax.push(prom.join(" "));
					full.push(prom.join(" "));
					prom.length = 0;

				}
			else if( max.length > prom.length) {
					full.push(prom.join(" "));
					prom.length = 0;
				}
		}

}

console.log("Максимальная последовательность = "+max.join(" "));
console.log("Последовательности такой же длинны как и максимальная = "+fullMax.join(" ; "))
console.log ("Все последовательности = "+ full.join(" ; "));



console.log('-------------------------------- сумма цифр в тексте ------------------------------------------');

var mass=[];
var k=0, y=0;

var str=prompt("Введиет текст");

mass=str.split("");

for(let i=0; i<mass.length; i++) {
	y=+mass[i];
	if (!isNaN(y)) {
		mass.splice(i,1,y)
	}
	else{mass.splice(i,1,0)}
}


for(let i=0; i<mass.length; i++) {
	k+=mass[i];
}

console.log("Сумма цифр в массиве = "+k);



console.log('-------------------------------- калькулятор -----------------доделать-------------------------');

function calc(primer) {
	var mas=primer.split('');
	var x=0, znak="", str="";

	// Секция проверки действия;

	for(let i = 0; i<mas.length ; i++){
		x=+mas[i];
		if(isNaN(x)) {
			znak=znak+mas[i];
			break;
		}
	}

	str = mas.join('');
	mas = str.split(znak);

	//секция вычислений;

	var a=+mas[0], b=+mas[1];
	var rez=0;

	if(znak == "+") {
		rez=a+b;
		alert("сумма = " +rez);
	}
	if(znak == "-") {
		rez=a-b;
		alert("разность = " +rez);
	}
	if(znak == "/") {
		rez=a/b;
		alert("частное = " +rez);
	}
	if(znak == "*") {
		rez=a*b;
		alert("произведение = " +rez);
	}
	if(znak == "^") {
		rez=1;
		for (let i=1; i<=b; i++) {
			rez*=a;
		}
		alert(a+" в степени "+b+" = "+rez);
	}
	mas.length = 0;
}

do{
	var a=prompt("Введите пример (типа A+B)");
 	calc(a);
} while(a != "закрыть");

*/























/*
console.log('-------------------------------- Масиив динамика №1-------------------------');

var mas=[];

function addToMas(){
	let a=+prompt('Введите число');
	mas.push(a);
	showButtons();
	return mas;
}


function showButtons() {
	if(mas.length !=0) {
		max.style.display="block";
		min.style.display="block";
		del.style.display="block";
	}
}

function showMassage() {
	if(mas.length == 0) massage.innerText="Массив пуст"
		else massage.innerText=mas.join(" ");
}

function showMax(){
	let k=mas[0];
	for(let i = 0; i<mas.length; i++){
		if(mas[i]>k) k=mas[i]
	}
	massageMax.innerText="Максимальное значение в массиве = "+k;
}

function showMin(){
	let k=mas[0];
	for(let i = 0; i<mas.length; i++){
		if(mas[i]<k) k=mas[i]
	}
	massageMin.innerText="Минимальное значение в массиве = "+k;
}

function clearMas() {
	mas.length = 0;
}

add.onclick = addToMas;
show.onclick = showMassage;
max.onclick = showMax;
min.onclick = showMin;
del.onclick = clearMas;

*/

/*--------------------------- tab меню -----------------------------
function showTab1() {
	content1.style.display="block";
	content2.style.display="none";
	content3.style.display="none";
	tab1.style.backgroundColor="red";
	tab1.innerText="Открыта";

	tab2.style.backgroundColor="grey";
	tab2.innerText="Показать вкладку 2";

	tab3.style.backgroundColor="grey";
	tab3.innerText="Показать вкладку 3";
}


function showTab2() {
	content2.style.display="block";
	content1.style.display="none";
	content3.style.display="none";
	tab2.style.backgroundColor="blue";
	tab2.innerText="Открыта";

	tab3.style.backgroundColor="grey";
	tab3.innerText="Показать вкладку 3";

	tab1.style.backgroundColor="grey";
	tab1.innerText="Показать вкладку 1";
}

function showTab3() {
	content3.style.display="block";
	content1.style.display="none";
	content2.style.display="none";
	tab3.style.backgroundColor="yellow";
	tab3.innerText="Открыта";

	tab1.style.backgroundColor="grey";
	tab1.innerText="Показать вкладку 1";

	tab2.style.backgroundColor="grey";
	tab2.innerText="Показать вкладку 2";
}

tab1.onclick=showTab1;
tab2.onclick=showTab2;
tab3.onclick=showTab3;
*/

var k=360, time=1;


	function spinB() {
		blueSpiner.style.transform ="rotate("+k+"deg)";
		blueSpiner.style.transition=time+"s ease";
		if(time<2) time+=0.2;
		else if(time=>2 && time<30) time++;
		if(time>=30.1){
			time=30;
		}

		k=k*2+Math.round(Math.random()*100);
		let x=Math.ceil((k/360)*2);
		speedCounter.innerText="Максимальная скорость (об/мин): "+x;

		if(x<=1000) speedCounter.style.color="white";
 	  if(x>1000 && x<=100000) speedCounter.style.color="blue";
 	  if(x>100000 && x<1000000) speedCounter.style.color="yellow";
 	  if(x>1000000 && x<100000000) speedCounter.style.color="orange";
 	  if(x>100000000) speedCounter.style.color="red";

		spinerCrashB();
	}

	function stopSpin() {
		blueSpiner.style.transform ="none";
		blueSpiner.style.transition="none";
		yellowSpiner.style.transform ="none";
		yellowSpiner.style.transition="none";
		redSpiner.style.transform ="none";
		redSpiner.style.transition="none";
		speedCounter.style.color="white";
		time=0.1;
	 	k=360;
	}

	function spinerCrashB(){
		if(k>=1000000000){
			bicha.style.display="block";
			setTimeout(function(){
				blueSpiner.style.display ="none";
				yellowSpiner.style.display ="none";
				redSpiner.style.display="none";
				broken.style.display="block";
				bicha.style.width="50px";
				bicha.style.transform="rotate(14400deg) scale(5)"
				bicha.style.transition="3s ease-in";
			}, 5000);
			setTimeout(function(){
				gameOver.style.display="block"
			}, 8000);
		}
	}

 function reset() {
	speedCounter.innerText="Скорость (об/мин): 0";
	blueSpiner.style.display ="none";
	yellowSpiner.style.display ="none";
	redSpiner.style.display="none";
	broken.style.display="none";
	mainMenu.style.display="block";
	choseColorMenu.style.display="block";
	speedCounter.style.color="white";
	bicha.style.display="none";
	bicha.style.width="0px";
	bicha.style.transform="none"
	bicha.style.transition="none";
	gameOver.style.display="none";
 	time=0.1;
 	k=360;
 }


blueSpiner.onclick=spinB;
blueSpiner.ondblclick=spinB;
stopButton.onclick=stopSpin;
resetButton.onclick=reset;


function spinY() {
	yellowSpiner.style.transform ="rotate("+k+"deg)";
	yellowSpiner.style.transition=time+"s ease";
	if(time<2) time+=0.2;
	else if(time=>2 && time<30) time++;
	if(time>=30.1){
		time=30;
	}

	k=k*2+Math.round(Math.random()*100);
	let x=Math.ceil((k/360)*2);
	speedCounter.innerText="Максимальная скорость (об/мин): "+x;

	if(x<=1000) speedCounter.style.color="white";
	if(x>1000 && x<=100000) speedCounter.style.color="blue";
	if(x>100000 && x<1000000) speedCounter.style.color="yellow";
	if(x>1000000 && x<100000000) speedCounter.style.color="orange";
	if(x>100000000) speedCounter.style.color="red";

	spinerCrashY();
}

function spinerCrashY(){
	if(k>=1000000000){
		bicha.style.display="block";
		setTimeout(function(){
			blueSpiner.style.display ="none";
			yellowSpiner.style.display ="none";
			redSpiner.style.display="none";
			broken.style.display="block";
			bicha.style.width="50px";
			bicha.style.transform="rotate(14400deg) scale(5)"
			bicha.style.transition="3s ease-in";
		}, 5000);
		setTimeout(function(){
			gameOver.style.display="block"
		}, 8000);
	}
}

yellowSpiner.onclick=spinY;
yellowSpiner.ondblclick=spinY;


function spinR(a) {
	redSpiner.style.transform ="rotate("+k+"deg)";
	redSpiner.style.transition=time+"s ease";
	if(time<2) time+=0.2;
	else if(time=>2 && time<30) time++;
	if(time>=30.1){
		time=30;
	}

	k=k*2+Math.round(Math.random()*100);
	let x=Math.ceil((k/360)*2);
	speedCounter.innerText="Максимальная скорость (об/мин): "+x;

	if(x<=1000) speedCounter.style.color="white";
	if(x>1000 && x<=100000) speedCounter.style.color="blue";
	if(x>100000 && x<1000000) speedCounter.style.color="yellow";
	if(x>1000000 && x<100000000) speedCounter.style.color="orange";
	if(x>100000000) speedCounter.style.color="red";

	spinerCrashR();
}

function spinerCrashR(){
	if(k>=1000000000){
		bicha.style.display="block";
		setTimeout(function(){
			blueSpiner.style.display ="none";
			yellowSpiner.style.display ="none";
			redSpiner.style.display="none";
			broken.style.display="block";
			bicha.style.width="50px";
			bicha.style.transform="rotate(14400deg) scale(5)"
			bicha.style.transition="3s ease-in";
		}, 5000);
		setTimeout(function(){
			gameOver.style.display="block"
		}, 8000);
	}
}

redSpiner.onclick=spinR;
redSpiner.ondblclick=spinR;
