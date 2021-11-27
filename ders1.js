//document.write("İlk Javascript kodlarım.");//ekrana yazdırma kodu.

//alert("This is the way.");

/*FONKSİYON*/
function Proccess (){
    document.getElementById('result').innerHTML='Javascript içeriğe ulaştı ve değiştirdi.'
}//BU KISIMDA HTML İÇERİĞİNE ULAŞIR VE ONUN İÇERİĞİNİ JS KODALARINDA YAZDIĞIMIZ ŞEKİLDE DEĞİŞTİRİR. Burada fonksiyon tanımladık ve fonksiyon ismi ile gönderdik.

function OpenLight(){
    document.getElementById('picture').src="img/on.png";
}
function CloseLight(){
    document.getElementById('picture').src="img/of.png";
}
/*Change Css: Burada fonksiyonlarla yapmak  istediğimiz h2 verdiğimiz başlığın style değiştirmektir.*/
function changeCss(){
    document.getElementById('resultCss').style.color="purple";
    document.getElementById('resultCss').style.fontSize="35px";
}

