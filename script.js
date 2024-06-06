let bookCount = prompt("Kitab sayini qeyd edin: ");
let grade = parseInt(bookCount);
let price = 5;
let discountRate;

if (isNaN(grade)) {
  alert("regem daxil edin");
} else if (grade <= 19) {
  discountRate = 5;
} else if (grade <= 49) {
  discountRate = 10;
} else if (grade <= 99) {
  discountRate = 15;
} else if (grade >= 100) {
  discountRate = 25;
}

alert(
  `Sfarish ededi ${grade}, 
    1 eded qiymeti ${price} azn,
    Toplam qiymet ${price * grade} azn, 
    Endirim faizi ${discountRate} %,
    Endirim tutari ${(grade * price * discountRate) / 100},
    Endirimli meblegi ${ grade * price - (grade * price * discountRate) / 100} azn`
);
