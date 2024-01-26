let uniqueRandomNumber;
function generateUniqueRandomNumber() {
    // Başlangıçta benzersiz sayıyı false olarak ayarla
    let unique = false;
    let randomNumber;

    while (!unique) {
        // Yeni bir rastgele sayı oluştur
        randomNumber = Math.floor(1000 + Math.random() * 9000);

        // Sayının rakamları birbirinden farklı mı kontrol et
        const digits = Array.from(String(randomNumber), Number);
        const uniqueDigits = new Set(digits);

        if (digits.length === uniqueDigits.size) {
            // Eğer rakamlar birbirinden farklı ise, sayı benzersizdir
            unique = true;
        }
    }
    uniqueRandomNumber = randomNumber.toString();
    console.log(uniqueRandomNumber);
    return randomNumber;
}

function disableButton() {
    document.getElementById("myMainButton").classList.add("clicked");
    document.getElementById("myMainButton").innerHTML = (`iyi şanslar!✍`)
    // setTimeout(function() {
    //     document.getElementById("myMainButton").classList.remove("clicked");
    // }, 5000);
    document.getElementById("myMainButton").disabled = true;
}

function myFunction1() {
    //!İLK TAHMİNDEN GELEN SAYI İÇİN DEĞİŞKEN BELİRLENİYOR.
    let inputNumber1 = document.getElementById("myInput1").value;
    //*'GİRİLEN TAHMİN 4 HANELİ Mİ?'-'GİRİLEN TAHMİN İLE SONUÇ BİLİNDİ Mİ?' İLK TEYİD YAPILIYOR.
    if (inputNumber1.length != 4) {
        document.querySelector("#myP1").innerHTML = (`Lütfen 4 haneli bir sayı giriniz.`)
    } else if (inputNumber1 == uniqueRandomNumber) {
        document.querySelector("#myP1").innerHTML = (`Tebrikler! Sayıyı buldunuz. Sayı:${uniqueRandomNumber}`);
        document.querySelector("#myMainButton").innerHTML = (`tebrikler 👏👏👏`);

        //*GİRİLEN TAHMİN İLE İLGİLİ SONUÇLAR GÖSTERİLİYOR.
    } else {
        let matchCount = 0;
        let mismatchCount = 0;
        for (let i = 0; i < 4; i++) {
            // Uyuşan basamakları kontrol et.
            if (inputNumber1[i] == uniqueRandomNumber[i]) {
                matchCount++;
            } else if (uniqueRandomNumber.includes(inputNumber1[i])) {
                // Uyuşmayan basamakları kontrol et
                mismatchCount++;
            }
        }
        // Kullanıcıya geri bildirim ver
        if (matchCount > 0 && mismatchCount > 0) {
            // Her ikisi de sıfır değilse
            document.querySelector("#myP1").innerHTML = `feedback: +${matchCount}, -${mismatchCount}`;
        } else if (matchCount > 0) {
            // Yalnızca uyuşan basamaklar varsa
            document.querySelector("#myP1").innerHTML = `feedback: +${matchCount}`;
        } else if (mismatchCount > 0) {
            // Yalnızca uyuşmayan basamaklar varsa
            document.querySelector("#myP1").innerHTML = `feedback: -${mismatchCount}`;
        } else {
            // Hiçbir uyuşma veya uyuşmama yoksa
            document.querySelector("#myP1").innerHTML = "feedback: no numbers";
        }
    }
}
function handleEnter1(event) {
    // Klavyeden Enter tuşuna basıldığında
    event.key == "Enter" ? myFunction1():console.log("object");
}

function myFunction2() {
    //!TAHMİNDEN GELEN SAYI İÇİN DEĞİŞKEN BELİRLENİYOR.
    let inputNumber2 = document.getElementById("myInput2").value;
    //*'GİRİLEN TAHMİN 4 HANELİ Mİ?'-'GİRİLEN TAHMİN İLE SONUÇ BİLİNDİ Mİ?' İLK TEYİD YAPILIYOR.
    if (inputNumber2.length != 4) {
        document.querySelector("#myP2").innerHTML = (`Lütfen 4 haneli bir sayı giriniz.`)
    } else if (inputNumber2 == uniqueRandomNumber) {
        document.querySelector("#myP2").innerHTML = (`Tebrikler! Sayıyı buldunuz. Sayı:${uniqueRandomNumber}`);
        document.querySelector("#myMainButton").innerHTML = (`tebrikler 👏👏👏`);

        //*GİRİLEN TAHMİN İLE İLGİLİ SONUÇLAR GÖSTERİLİYOR.
    } else {
        let matchCount = 0;
        let mismatchCount = 0;
        for (let i = 0; i < 4; i++) {
            // Uyuşan basamakları kontrol et.
            if (inputNumber2[i] == uniqueRandomNumber[i]) {
                matchCount++;
            } else if (uniqueRandomNumber.includes(inputNumber2[i])) {
                // Uyuşmayan basamakları kontrol et
                mismatchCount++;
            }
        }
        // Kullanıcıya geri bildirim ver
        if (matchCount > 0 && mismatchCount > 0) {
            // Her ikisi de sıfır değilse
            document.querySelector("#myP2").innerHTML = `feedback: +${matchCount}, -${mismatchCount}`;
        } else if (matchCount > 0) {
            // Yalnızca uyuşan basamaklar varsa
            document.querySelector("#myP2").innerHTML = `feedback: +${matchCount}`;
        } else if (mismatchCount > 0) {
            // Yalnızca uyuşmayan basamaklar varsa
            document.querySelector("#myP2").innerHTML = `feedback: -${mismatchCount}`;
        } else {
            // Hiçbir uyuşma veya uyuşmama yoksa
            document.querySelector("#myP2").innerHTML = "feedback: no numbers";
        }
    }
}
function handleEnter2(event) {
    // Klavyeden Enter tuşuna basıldığında
    event.key == "Enter" ? myFunction2():console.log("object");
}

function myFunction3() {
    //!TAHMİNDEN GELEN SAYI İÇİN DEĞİŞKEN BELİRLENİYOR.
    let inputNumber3 = document.getElementById("myInput3").value;
    //*'GİRİLEN TAHMİN 4 HANELİ Mİ?'-'GİRİLEN TAHMİN İLE SONUÇ BİLİNDİ Mİ?' İLK TEYİD YAPILIYOR.
    if (inputNumber3.length != 4) {
        document.querySelector("#myP3").innerHTML = (`Lütfen 4 haneli bir sayı giriniz.`)
    } else if (inputNumber3 == uniqueRandomNumber) {
        document.querySelector("#myP3").innerHTML = (`Tebrikler! Sayıyı buldunuz. Sayı:${uniqueRandomNumber}`);
        document.querySelector("#myMainButton").innerHTML = (`tebrikler 👏👏👏`);

        //*GİRİLEN TAHMİN İLE İLGİLİ SONUÇLAR GÖSTERİLİYOR.
    } else {
        let matchCount = 0;
        let mismatchCount = 0;
        for (let i = 0; i < 4; i++) {
            // Uyuşan basamakları kontrol et.
            if (inputNumber3[i] == uniqueRandomNumber[i]) {
                matchCount++;
            } else if (uniqueRandomNumber.includes(inputNumber3[i])) {
                // Uyuşmayan basamakları kontrol et
                mismatchCount++;
            }
        }
        // Kullanıcıya geri bildirim ver
        if (matchCount > 0 && mismatchCount > 0) {
            // Her ikisi de sıfır değilse
            document.querySelector("#myP3").innerHTML = `feedback: +${matchCount}, -${mismatchCount}`;
        } else if (matchCount > 0) {
            // Yalnızca uyuşan basamaklar varsa
            document.querySelector("#myP3").innerHTML = `feedback: +${matchCount}`;
        } else if (mismatchCount > 0) {
            // Yalnızca uyuşmayan basamaklar varsa
            document.querySelector("#myP3").innerHTML = `feedback: -${mismatchCount}`;
        } else {
            // Hiçbir uyuşma veya uyuşmama yoksa
            document.querySelector("#myP3").innerHTML = "feedback: no numbers";
        }
    }
}
function handleEnter3(event) {
    // Klavyeden Enter tuşuna basıldığında
    event.key == "Enter" ? myFunction3():console.log("object");
}

function myFunction4() {
    //!TAHMİNDEN GELEN SAYI İÇİN DEĞİŞKEN BELİRLENİYOR.
    let inputNumber4 = document.getElementById("myInput4").value;
    //*'GİRİLEN TAHMİN 4 HANELİ Mİ?'-'GİRİLEN TAHMİN İLE SONUÇ BİLİNDİ Mİ?' İLK TEYİD YAPILIYOR.
    if (inputNumber4.length != 4) {
        document.querySelector("#myP4").innerHTML = (`Lütfen 4 haneli bir sayı giriniz.`)
    } else if (inputNumber4 == uniqueRandomNumber) {
        document.querySelector("#myP4").innerHTML = (`Tebrikler! Sayıyı buldunuz. Sayı:${uniqueRandomNumber}`);
        document.querySelector("#myMainButton").innerHTML = (`tebrikler 👏👏👏`);

        //*GİRİLEN TAHMİN İLE İLGİLİ SONUÇLAR GÖSTERİLİYOR.
    } else {
        let matchCount = 0;
        let mismatchCount = 0;
        for (let i = 0; i < 4; i++) {
            // Uyuşan basamakları kontrol et.
            if (inputNumber4[i] == uniqueRandomNumber[i]) {
                matchCount++;
            } else if (uniqueRandomNumber.includes(inputNumber4[i])) {
                // Uyuşmayan basamakları kontrol et
                mismatchCount++;
            }
        }
        // Kullanıcıya geri bildirim ver
        if (matchCount > 0 && mismatchCount > 0) {
            // Her ikisi de sıfır değilse
            document.querySelector("#myP4").innerHTML = `feedback: +${matchCount}, -${mismatchCount}`;
        } else if (matchCount > 0) {
            // Yalnızca uyuşan basamaklar varsa
            document.querySelector("#myP4").innerHTML = `feedback: +${matchCount}`;
        } else if (mismatchCount > 0) {
            // Yalnızca uyuşmayan basamaklar varsa
            document.querySelector("#myP4").innerHTML = `feedback: -${mismatchCount}`;
        } else {
            // Hiçbir uyuşma veya uyuşmama yoksa
            document.querySelector("#myP4").innerHTML = "feedback: no numbers";
        }
    }
}
function handleEnter4(event) {
    // Klavyeden Enter tuşuna basıldığında
    event.key == "Enter" ? myFunction4():console.log("object");
}

function myFunction5() {
    //!TAHMİNDEN GELEN SAYI İÇİN DEĞİŞKEN BELİRLENİYOR.
    let inputNumber5 = document.getElementById("myInput5").value;
    //*'GİRİLEN TAHMİN 4 HANELİ Mİ?'-'GİRİLEN TAHMİN İLE SONUÇ BİLİNDİ Mİ?' İLK TEYİD YAPILIYOR.
    if (inputNumber5.length != 4) {
        document.querySelector("#myP5").innerHTML = (`Lütfen 4 haneli bir sayı giriniz.`)
    } else if (inputNumber5 == uniqueRandomNumber) {
        document.querySelector("#myP5").innerHTML = (`Tebrikler! Sayıyı buldunuz. Sayı:${uniqueRandomNumber}`);
        document.querySelector("#myMainButton").innerHTML = (`tebrikler 👏👏👏`);

        //*GİRİLEN TAHMİN İLE İLGİLİ SONUÇLAR GÖSTERİLİYOR.
    } else {
        let matchCount = 0;
        let mismatchCount = 0;
        for (let i = 0; i < 4; i++) {
            // Uyuşan basamakları kontrol et.
            if (inputNumber5[i] == uniqueRandomNumber[i]) {
                matchCount++;
            } else if (uniqueRandomNumber.includes(inputNumber5[i])) {
                // Uyuşmayan basamakları kontrol et
                mismatchCount++;
            }
        }
        // Kullanıcıya geri bildirim ver
        if (matchCount > 0 && mismatchCount > 0) {
            // Her ikisi de sıfır değilse
            document.querySelector("#myP5").innerHTML = `feedback: +${matchCount}, -${mismatchCount}`;
        } else if (matchCount > 0) {
            // Yalnızca uyuşan basamaklar varsa
            document.querySelector("#myP5").innerHTML = `feedback: +${matchCount}`;
        } else if (mismatchCount > 0) {
            // Yalnızca uyuşmayan basamaklar varsa
            document.querySelector("#myP5").innerHTML = `feedback: -${mismatchCount}`;
        } else {
            // Hiçbir uyuşma veya uyuşmama yoksa
            document.querySelector("#myP5").innerHTML = "feedback: no numbers";
        }
    }
}
function handleEnter5(event) {
    // Klavyeden Enter tuşuna basıldığında
    event.key == "Enter" ? myFunction5():console.log("object");
}

function myFunction6() {
    //!TAHMİNDEN GELEN SAYI İÇİN DEĞİŞKEN BELİRLENİYOR.
    let inputNumber6 = document.getElementById("myInput6").value;
    //*'GİRİLEN TAHMİN 4 HANELİ Mİ?'-'GİRİLEN TAHMİN İLE SONUÇ BİLİNDİ Mİ?' İLK TEYİD YAPILIYOR.
    if (inputNumber6.length != 4) {
        document.querySelector("#myP6").innerHTML = (`Lütfen 4 haneli bir sayı giriniz.`)
    } else if (inputNumber6 == uniqueRandomNumber) {
        document.querySelector("#myP6").innerHTML = (`Tebrikler! Sayıyı buldunuz. Sayı:${uniqueRandomNumber}`);
        document.querySelector("#myMainButton").innerHTML = (`tebrikler 👏👏👏`);

        //*GİRİLEN TAHMİN İLE İLGİLİ SONUÇLAR GÖSTERİLİYOR.
    } else {
        let matchCount = 0;
        let mismatchCount = 0;
        for (let i = 0; i < 4; i++) {
            // Uyuşan basamakları kontrol et.
            if (inputNumber6[i] == uniqueRandomNumber[i]) {
                matchCount++;
            } else if (uniqueRandomNumber.includes(inputNumber6[i])) {
                // Uyuşmayan basamakları kontrol et
                mismatchCount++;
            }
        }
        // Kullanıcıya geri bildirim ver
        if (matchCount > 0 && mismatchCount > 0) {
            // Her ikisi de sıfır değilse
            document.querySelector("#myP6").innerHTML = `feedback: +${matchCount}, -${mismatchCount}`;
        } else if (matchCount > 0) {
            // Yalnızca uyuşan basamaklar varsa
            document.querySelector("#myP6").innerHTML = `feedback: +${matchCount}`;
        } else if (mismatchCount > 0) {
            // Yalnızca uyuşmayan basamaklar varsa
            document.querySelector("#myP6").innerHTML = `feedback: -${mismatchCount}`;
        } else {
            // Hiçbir uyuşma veya uyuşmama yoksa
            document.querySelector("#myP6").innerHTML = "feedback: no numbers";
        }
    }
}
function handleEnter6(event) {
    // Klavyeden Enter tuşuna basıldığında
    event.key == "Enter" ? myFunction6():console.log("object");
}

function myFunction7() {
    //!TAHMİNDEN GELEN SAYI İÇİN DEĞİŞKEN BELİRLENİYOR.
    let inputNumber7 = document.getElementById("myInput7").value;
    //*'GİRİLEN TAHMİN 4 HANELİ Mİ?'-'GİRİLEN TAHMİN İLE SONUÇ BİLİNDİ Mİ?' İLK TEYİD YAPILIYOR.
    if (inputNumber7.length != 4) {
        document.querySelector("#myP7").innerHTML = (`Lütfen 4 haneli bir sayı giriniz.`)
    } else if (inputNumber7 == uniqueRandomNumber) {
        document.querySelector("#myP7").innerHTML = (`Tebrikler! Sayıyı buldunuz. Sayı:${uniqueRandomNumber}`);
        document.querySelector("#myMainButton").innerHTML = (`tebrikler 👏👏👏`);

        //*GİRİLEN TAHMİN İLE İLGİLİ SONUÇLAR GÖSTERİLİYOR.
    } else {
        let matchCount = 0;
        let mismatchCount = 0;
        for (let i = 0; i < 4; i++) {
            // Uyuşan basamakları kontrol et.
            if (inputNumber7[i] == uniqueRandomNumber[i]) {
                matchCount++;
            } else if (uniqueRandomNumber.includes(inputNumber7[i])) {
                // Uyuşmayan basamakları kontrol et
                mismatchCount++;
            }
        }
        // Kullanıcıya geri bildirim ver
        if (matchCount > 0 && mismatchCount > 0) {
            // Her ikisi de sıfır değilse
            document.querySelector("#myP7").innerHTML = `feedback: +${matchCount}, -${mismatchCount}`;
        } else if (matchCount > 0) {
            // Yalnızca uyuşan basamaklar varsa
            document.querySelector("#myP7").innerHTML = `feedback: +${matchCount}`;
        } else if (mismatchCount > 0) {
            // Yalnızca uyuşmayan basamaklar varsa
            document.querySelector("#myP7").innerHTML = `feedback: -${mismatchCount}`;
        } else {
            // Hiçbir uyuşma veya uyuşmama yoksa
            document.querySelector("#myP7").innerHTML = "feedback: no numbers";
        }
    }
}
function handleEnter7(event) {
    // Klavyeden Enter tuşuna basıldığında
    event.key == "Enter" ? myFunction7():console.log("object");
}

function myFunction8() {
    //!TAHMİNDEN GELEN SAYI İÇİN DEĞİŞKEN BELİRLENİYOR.
    let inputNumber8 = document.getElementById("myInput8").value;
    //*'GİRİLEN TAHMİN 4 HANELİ Mİ?'-'GİRİLEN TAHMİN İLE SONUÇ BİLİNDİ Mİ?' İLK TEYİD YAPILIYOR.
    if (inputNumber8.length != 4) {
        document.querySelector("#myP8").innerHTML = (`Lütfen 4 haneli bir sayı giriniz.`)
    } else if (inputNumber8 == uniqueRandomNumber) {
        document.querySelector("#myP8").innerHTML = (`Tebrikler! Sayıyı buldunuz. Sayı:${uniqueRandomNumber}`);
        document.querySelector("#myMainButton").innerHTML = (`tebrikler 👏👏👏`);

        //*GİRİLEN TAHMİN İLE İLGİLİ SONUÇLAR GÖSTERİLİYOR.
    } else {
        let matchCount = 0;
        let mismatchCount = 0;
        for (let i = 0; i < 4; i++) {
            // Uyuşan basamakları kontrol et.
            if (inputNumber8[i] == uniqueRandomNumber[i]) {
                matchCount++;
            } else if (uniqueRandomNumber.includes(inputNumber8[i])) {
                // Uyuşmayan basamakları kontrol et
                mismatchCount++;
            }
        }
        // Kullanıcıya geri bildirim ver
        if (matchCount > 0 && mismatchCount > 0) {
            // Her ikisi de sıfır değilse
            document.querySelector("#myP8").innerHTML = `feedback: +${matchCount}, -${mismatchCount}`;
        } else if (matchCount > 0) {
            // Yalnızca uyuşan basamaklar varsa
            document.querySelector("#myP8").innerHTML = `feedback: +${matchCount}`;
        } else if (mismatchCount > 0) {
            // Yalnızca uyuşmayan basamaklar varsa
            document.querySelector("#myP8").innerHTML = `feedback: -${mismatchCount}`;
        } else {
            // Hiçbir uyuşma veya uyuşmama yoksa
            document.querySelector("#myP8").innerHTML = "feedback: no numbers";
        }
    }
}
function handleEnter8(event) {
    // Klavyeden Enter tuşuna basıldığında
    event.key == "Enter" ? myFunction8():console.log("object");
    }

function myFunction9() {
    let inputNumber9 = document.getElementById("myInput9").value;
    if (inputNumber9.length != 4) {
        document.querySelector("#myP9").innerHTML = (`Lütfen 4 haneli bir sayı giriniz.`)
    } else if (inputNumber9 == uniqueRandomNumber) {
        document.querySelector("#myP9").innerHTML = (`Tebrikler! Sayıyı buldunuz. Sayı:${uniqueRandomNumber}`);
        document.querySelector("#myMainButton").innerHTML = (`tebrikler 👏👏👏`);

        //*GİRİLEN TAHMİN İLE İLGİLİ SONUÇLAR GÖSTERİLİYOR.
    } else {
        let matchCount = 0;
        let mismatchCount = 0;
        for (let i = 0; i < 4; i++) {
            // Uyuşan basamakları kontrol et.
            if (inputNumber9[i] == uniqueRandomNumber[i]) {
                matchCount++;
            } else if (uniqueRandomNumber.includes(inputNumber9[i])) {
                // Uyuşmayan basamakları kontrol et
                mismatchCount++;
            }
        }
        // Kullanıcıya geri bildirim ver
        if (matchCount > 0 && mismatchCount > 0) {
            // Her ikisi de sıfır değilse
            document.querySelector("#myP9").innerHTML = `feedback: +${matchCount}, -${mismatchCount}`;
        } else if (matchCount > 0) {
            // Yalnızca uyuşan basamaklar varsa
            document.querySelector("#myP9").innerHTML = `feedback: +${matchCount}`;
        } else if (mismatchCount > 0) {
            // Yalnızca uyuşmayan basamaklar varsa
            document.querySelector("#myP9").innerHTML = `feedback: -${mismatchCount}`;
        } else {
            // Hiçbir uyuşma veya uyuşmama yoksa
            document.querySelector("#myP9").innerHTML = "feedback: no numbers";
        }
    }
}
function handleEnter9(event) {
    // Klavyeden Enter tuşuna basıldığında
    event.key == "Enter" ? myFunction9():console.log("object");
    }

function myFunctionY(y) {
    y.style.background = "yellow";
}
function myFunctionX(x) {
    x.style.background = "black";
}

let yellowBall = document.getElementById("yellow");
let purpleBall = document.getElementById("purple");
yellowBall.addEventListener("click", clickEvent);
purpleBall.addEventListener("click", clickEvent);
function clickEvent() {
    this.id == "yellow" ? 
    (yellowBall.style.backgroundColor == "red" ? yellowBall.style.backgroundColor = "green" : yellowBall.style.backgroundColor = "red", purpleBall.style.backgroundColor == "green" ? purpleBall.style.backgroundColor = "red" : purpleBall.style.backgroundColor = "green") 
    : 
    (purpleBall.style.backgroundColor == "red" ? purpleBall.style.backgroundColor = "green" : purpleBall.style.backgroundColor = "red", yellowBall.style.backgroundColor == "green" ? yellowBall.style.backgroundColor = "red" : yellowBall.style.backgroundColor = "green")
}
// yellowBall.onclick = function() {
// yellowBall.style.backgroundColor == "red" ? yellowBall.style.backgroundColor = "blue" : yellowBall.style.backgroundColor = "red";
// yellowBall.style.backgroundColor == "red" ? yellowBall.style.backgroundColor = "blue" : yellowBall.style.backgroundColor = "red";
// }
// generateUniqueRandomNumber();
// let uniqueRandomNumber;
//! function myFunction() {
//     let sayi1 = document.getElementById("myMainInput").value;
//     if (sayi1.length == 4 &&
//         sayi1[0] != sayi1[1] &&
//         sayi1[0] != sayi1[2] &&
//         sayi1[0] != sayi1[3] &&
//         sayi1[1] != sayi1[2] &&
//         sayi1[1] != sayi1[3] &&
//         sayi1[2] != sayi1[3]) {
//         document.querySelector("#myMainP").innerHTML = (`Sayı girişi başarılı. ${sayi1}`);
//     } else if (sayi1 == "", sayi1.length != 4) {
//         document.querySelector("#myMainP").innerHTML = (`Lütfen 4 haneli bir sayı giriniz.`);
//     } else {
//         document.querySelector("#myMainP").innerHTML = (`Girdiğiniz sayıyı kontrol ediniz. Rakamlar 1 defa kullanılmalıdır.`);
//     }
//     uniqueRandomNumber = sayi1
// }