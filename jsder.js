// // console.log("Çalışma Günlüğüm")
// // console.log("1132")
// // console.log(true)


// //Değişken Tanımlama Kuralları
// /****************/
// //Sayısal ifade ile başlayamaz. var1name
// //Komut ifadeleri ile başlayamaz.  var for, var if
// //var name;

// /*Değişken Tanımlama*/
// var x;
// x = 'Zeynep';
// console.log(x);

// var fullname = 'ZeynepAlaka';
// console.log(fullname);

// const email = 'zeynepalaka@gmail.com';
// console.log(email);

// //Değişken Türleri
// //1.Primitive types
// // undefined
// var x;
// //null
// var y = null;
// //string
// var name = 'zeynep'
// //number
// var age = 24;
// //boolean
// var online = true;
// //2.Reference types-object
// //array
// var cars = ['volvo', 'bmx', 'mercedes'];
// //objects
// var person = {
//     name: 'Zeynep',
//     age: 22
// }
// //function
// var isAlive = function () {
//     return 0;
// }

// console.log(typeof isAlive);

// /*Operatörler*/
// //2.Aritmetik Operatörler
// var sonuc;
// const a = 60;
// const b = 50; //const sabit değişken anlamına gelir.
//  let c=7;
// sonuc = a + b;
// sonuc = a - b;
// sonuc = a / b;
// sonuc = a * b;
// sonuc = a % c;
// c++;//sayıyı 1 arttırdı ancak hafızada 8 olarak tuttu.
// ++c;//sayıyı 1 arttırdı ekrana yazdırdı.

// console.log(sonuc);
// console.log(typeof sonuc);

// //1. Atama Operatörleri
// sonuc=a;//60değeri atanır.
// sonuc+=a; //sonuc=sonuc+a;
// sonuc-=a; //sonuc=sonuc-a;

// //3.Karşılaştırma Operatörleri

// sonuc= a==b; //doğru ise true yanlış ise false
// z=9;
// y='9';
// sonuc= z==y;//doğru ise true yanlış ise false
// sonuc= z===y;//typeof kontrol edilıyor.


// //4. Mantıksal Operatörleri 

// //&& And
// //|| Or  

// /*DateObject*/
// //Get metotları ve Set metotları olarak ikiye ayrılıyor.
//  var d=new Date();
//  console.log(d); //Tue Jan 18 2022 22:26:49 GMT+0300 (GMT+03:00) bize bu şekilde çıktı verir.
//  //get metotu
//  console.log(d.getFullYear()); //yıl bilgisini çekebilriz.

//  console.log(d.getMonth());//ay bilgisini, çekebiliriz.

//  console.log(d.getDate());//
//  console.log(d.getHours());//
//  console.log(d.getMinutes());//
//  console.log(d.getSeconds());//
//  console.log(d.getDay());//
// //set
// d.setDate
// d.setFullYear

/*string metotları*/
const ad = 'Zeynep';
const soyad = 'Alaka';

var x = ad + ' ' + soyad;//bu şekilde birşeltirme işlemi yapabiliriz.


//STRİNG CONCAT
     // x=ad.concat(' '+soyad);

//string lenght & uppercase & tolowercase

        // x=ad.length;
        // x=soyad.length;//burada ise uzunlupu öğrenmek istediğimiz kulllanıyoruz.

        // //string uppercase

        // x=ad.toUpperCase();//şu anda bütün ad stringinin harflerini büyüttü.

        // x=soyad.toLowerCase();//burada ise bütün harfleri küçültür.
//string indexof
x= x.indexOf('Alaka'); //bunun çıktısı 6 olur Zeynep yazısından sonra saymnaya başlar ve ilk geldiği yerde ise 6 olur.



