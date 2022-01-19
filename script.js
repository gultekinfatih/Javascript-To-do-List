//DOMLAR
let inputDOM = document.querySelector('#task') //İnput alanı
let addBtnDOM = document.querySelector('#liveToastBtn') //add buttonu
let listDOM = document.querySelector('#list') //görev listesi
let ullength = document.querySelectorAll('li') //tüm li'lere erişildi

//CLOSE BUTONU
for(let i=0; i < ullength.length;i++){ 
    let closeButton = document.createElement("span"); //close butonunu koyabilmek için span etiketi oluşturup closeButton değişkenine atadık
    closeButton.textContent = "\u00D7"; // lilere gelen span içerisine çarpı işareti ekler "\u00D7" kullandık / unicode 
    closeButton.classList.add("close"); // butona close class'ı eklendi
    closeButton.onclick = removeButton; // close butonuna tıklanınca remove fonksiyonunu çalıştır
    ullength[i].append(closeButton); // ullength[i] ile tüm lilere ulaşmıştık ve for döngüsü ile close butonunu ekledik
    ullength[i].onclick = check; // lilere tıklanınca check fonksiyonunu çalıştır
}

//EVENTLER

// addBtnDOM.addEventListener("click", newElement) //ekle butonuna tıklanınca newElement fonksiyonunu çalıştır
//HTML içerisinde span'a onclick="newElement()" atandığından yukarıdaki dinleyiciye gerek yok

//FONKSİYONLAR

function check() {
    this.classList.toggle("checked")
} //toggle; checked class'ını ekleyip kaldırmaya yarıyor / "checked" class'ı varsa siliyor yoksa ekliyor

function removeButton(){
  this.parentElement.remove(); //tıklanınca 'this=bu elementin' parent elementini sil
} 



function newElement() {

    if(inputDOM.value === "") { //input değeri boş ise
        //console.log("bu bos") test
        $(".error").toast("show");
    } else {
        $(".success").toast("show");
        let liDOM = document.createElement('li') //li elementi oluştur ve liDOM'a ata
        listDOM.appendChild(liDOM) //liDOM listDOM a dahil olsun
        liDOM.innerText = inputDOM.value //liDOM değeri inputa yazılan değerle eşleştir
        inputDOM.value = "" //input bilgisi listeye eklendikten sonra input alanını sıfırla


        //HTML içerisinde olmayan bizim sonradan eklediğimiz maddeleri silmek için gereken işlemler:
        
        liDOM.onclick = check; //liDOM yani li'lere tıklanınca check fonksiyon çalışsın
        
        let closeButton = document.createElement("span"); //yukarıda önceden var olan lilere close buton eklenmişti / burada yeni oluşturulanlara ekleniyor
        closeButton.textContent = "\u00D7"; //unicode x sembolü ekle
        closeButton.classList.add("close"); //close class'ını ekle
        closeButton.onclick = removeButton; //close butonuna tıklanınca remove fonksiyonu çalıştır
        
        liDOM.append(closeButton); //closeButton değişkenini liDOM'lara ekle
        listDOM.append(liDOM); //liDOM değişkenini listDOM'a ekle 
        
    }
        
    }


    //Localstorage için geri döneceğim..
