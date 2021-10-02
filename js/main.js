function calculateInvoice(starterPrice, maindishPrice, dessertPrice, beveragePrice) {

    let sum = starterPrice + maindishPrice + dessertPrice + beveragePrice;
    return sum;
}


let sumInvoice = calculateInvoice(7, 14, 5, 3);
console.log(`invoice for chickenPasta is: ${sumInvoice}`)

let sumInvoice2 = calculateInvoice(7, 15, 5, 4);
console.log(`invoice for BolonesePasta is: ${sumInvoice2}`)

let sumInvoice3 = calculateInvoice(4, 12, 4, 3);
console.log(`invoice for carbonaraPasta is: ${sumInvoice3}`)


// Student Invoice
function studentInvoice(starterPrice, maindishPrice, dessertPrice, beveragePrice) {

    let sumWithDiscount = ((starterPrice + maindishPrice + dessertPrice) * 90) / 100;
    sumWithDiscount += beveragePrice;

    return sumWithDiscount;
}

let studentInvoiceIs = studentInvoice(7, 14, 5, 3);
console.log(`Student invoice for chickenPasta is: ${studentInvoiceIs}`)

let studentInvoiceIs2 = studentInvoice(7, 15, 5, 4);
console.log(`Student invoice for BolonesePasta is: ${studentInvoiceIs2}`)

let studentInvoiceIs3 = studentInvoice(4, 12, 4, 3);
console.log(`Student invoice for carbonaraPasta is: ${studentInvoiceIs3}`)