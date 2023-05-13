

//4'den 99'a kadar olan bir sayı aralığı için 
//3 ve 5 ile (her ikisine birden) bölünebilen sayıların toplamını bulan programı yazınız.




sum = 0;
for (let i = 4; i < 100; ++i) {
    if (i % 3 === 0 && i % 5 === 0) {
        sum += i;
    }
}

console.log(sum)