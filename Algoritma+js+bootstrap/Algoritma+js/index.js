// 1-Klavyeden girilecek X değerinden N değerine kadar tüm doğal sayıları listeleyen algoritmayı ve js kodunu yazınız.

// let sayiX = parseInt(window.prompt("Başlangıç değerini giriniz"));
// let sayiN = parseInt(window.prompt("Son değeri giriniz"));

// if (isNaN(sayiX) || isNaN(sayiN)) {
//     console.log("Geçerli bir sayı girmelisiniz.");
// } else {
//     for (let i = sayiX; i <= sayiN; i++) {
//         console.log(i);
//     }
// }

// *************************************************************************************************************

// 2-Klavyeden girilecek bir N değerine kadar fibonecci dizisini bulan algoritmayı ve js kodunu yazını. 
// Fibonecci dizisi 1 1 değerleri ile başlar ve yeni değer kendinden öndeki iki değerin toplamı olarak bulunur. (1 1 2 3 5 8 13 21...)

// let n = parseInt(window.prompt("Değer giriniz"));

// function fibonacci(n) {
//     let fibArray = [1, 1];

//     for (let i = 2; i < n; i++) {
//         let nextValue = fibArray[i - 1] + fibArray[i - 2];
//         fibArray.push(nextValue);
//     }

//     return fibArray;
// }

// let result = fibonacci(n);
// console.log(result);
// *************************************************************************************************************

// 3-Klavyeden girilen bir sayının tüm tam bölenlerini bulup listeleyen (Ekrana yazan) algoritmayı ve js kodlarını yazınız.

// let number = parseInt(window.prompt("Sayı giriniz"));

// function tamBolenleriBul(number) {
//     let tamBolenler = [];

//     for (let i = 1; i <= number; i++) {
//         if (sayi % i === 0) {
//             tamBolenler.push(i);
//         }
//     }

//     return tamBolenler;
// }

// let bolenler = tamBolenleriBul(number);
// console.log(`${number} sayısının tam bölenleri: ${bolenler}`);

// *************************************************************************************************************

// 4-Klavyeden girilen üç sayıdan büyüklük sıralamasına göre ortadakini bulup ekrana yazan program için algoritmayı ve js kodunu yazınız.

// let sayi1 = parseInt(window.prompt("ilk sayı"));
// let sayi2 = parseInt(window.prompt("ikinci sayı"));
// let sayi3 = parseInt(window.prompt("üçüncü sayı"));

// function ortadakiSayiyiBul(sayi1, sayi2, sayi3) {
//     if ((sayi1 >= sayi2 && sayi1 <= sayi3) || (sayi1 <= sayi2 && sayi1 >= sayi3)) {
//         return sayi1;
//     } else if ((sayi2 >= sayi1 && sayi2 <= sayi3) || (sayi2 <= sayi1 && sayi2 >= sayi3)) {
//         return sayi2;
//     } else {
//         return sayi3;
//     }
// }

// let ortadakiSayi = ortadakiSayiyiBul(sayi1, sayi2, sayi3);
// console.log(`Girilen sayıların büyüklük sıralamasına göre ortadaki sayı: ${ortadakiSayi}`);

// *************************************************************************************************************

// 5-Klavyeden girilen A ve B gibi iki sayının bölme işlemi kullanmadan sadece toplama ve 
// çıkarma kullanarak kalanlı bölme yapan algoritmayı ve js kodunu yazınız.

// let numA=parseInt(window.prompt("İlk sayi"));
// let numB=parseInt(window.prompt("İkinci sayi"));

// let bolum = 0;
// let kalan = numA;

// if (kalan >= numB) {
//     kalan = kalan - numB;
//     bolum = bolum + 1;
// }

// console.log("Bölüm: " + bolum);
// console.log("Kalan: " + kalan);

// *************************************************************************************************************

// 6-Klavyeden girilen A ve B gibi iki sayıyı, çarpma işlemi kullanmadan sadece toplama ve çıkarma kullanarak çarpıp sonucu ekrana yazan algoritmayı ve js kodunu yazınız.

// let a = parseInt(window.prompt("İlk sayı"));
// let b = parseInt(window.prompt("İkinci sayı"));

// let toplama = 0;
// for (let i = 0; i < Math.abs(b); i++) {
//     if (b > 0) {
//         toplama = toplama + a;
//     } else {
//         toplama = toplama - a;
//     }
// }

// console.log("Çarpma Sonucu: " + toplama);

// *************************************************************************************************************
// 7- Sıfır –0 girilinceye kadar klavyeden okutulan değerlerin ortalamasını hesaplayıp ekrana yazan algoritmayı ve js kodunu yazınız.

// let toplam = 0;
// let adet = 0;
// let sayi;

// do {
//     sayi = parseFloat(window.prompt("Bir sayı girin (Çıkış için 0):"));

//     if (!isNaN(sayi)) {
//         toplam += sayi;
//         adet++;
//     } else {
//         console.log("Geçersiz bir sayı girdiniz. Lütfen tekrar deneyin.");
//     }

// } while (sayi !== 0);

// if (adet === 0) {
//     console.log("Hiç geçerli sayı girilmedi.");
// } else {
//     let ortalama = toplam / adet;
//     console.log("Girilen sayıların Ortalaması: " + ortalama);
// }
// *************************************************************************************************************
// 8-Klavyeden girilecek 20 sayının tek olanlarını ayrı çift olanlarını ayrı toplayıp sonuçları ekrana yazan algoritmayı ve js kodunu yazınız.

// let toplamTek = 0;
// let toplamCift = 0;

// for (let i = 1; i <= 20; i++) {
//     let sayi = parseInt(window.prompt("Sayı girin:"));

//     if (!isNaN(sayi)) {
//         if (sayi % 2 === 0) {
//             toplamCift += sayi;
//         } else {
//             toplamTek += sayi;
//         }
//     } else {
//         console.log("Geçersiz bir sayı girdiniz. Lütfen tekrar deneyin.");
//         i--;
//     }
// }

// console.log("Tek Sayıların Toplamı: " + toplamTek);
// console.log("Çift Sayıların Toplamı: " + toplamCift);


// *************************************************************************************************************
// 9-Klavyeden girilecek iki pozitif tam sayının OBEB (Ortak Bölenlerin En Büyüğü)’ini bulacak algoritmayı ve js kodunu yazınız. 
// Örneğin elimizde 3654 ve 1365 değerleri olsun. Bu değerlerin OBEB’i şu şekilde bulunmaktadır.

// function ebobEkok(a, b) {
//     a = Math.abs(a);
//     b = Math.abs(b);

//     if (b === 0) {
//         return a;
//     }

//     return ebobEkok(b, a % b);
// }

// let sayi1 = parseInt(prompt("Birinci sayıyı girin: "));
// let sayi2 = parseInt(prompt("İkinci sayıyı girin: "));

// let obeb = ebobEkok(sayi1, sayi2);
// console.log("OBEB(" + sayi1 + ", " + sayi2 + ") = " + obeb);



// *************************************************************************************************************
// 10-Klavyeden girilecek bir sayının tek mi çift mi olduğunu bulabilecek bir algoritmayı ve js kodunu yazınız. Bu algoritmayı geliştirirken başvurduğunuz varsayımları da yazınız.
// Kullanıcıdan bir sayı al
// let sayi = parseInt(prompt("Bir sayı girin: "));

// // Sayının çift veya tek olduğunu kontrol et
// if (sayi % 2 === 0) {
//     console.log(sayi + " çift bir sayıdır.");
// } else {
//     console.log(sayi + " tek bir sayıdır.");
// }




// *************************************************************************************************************
// 11- Hafta içi ödev olarak verilen tasarımları hafta sonu bootstrap kullanarak yapınız. Hizalama ve pozisyonlara dikkat ediniz. 
// Sayfa responsive olarak kontrol edilmeli ve her ölçüde ahenk yapısı bozulmamalıdır.