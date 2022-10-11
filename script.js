const books = 
    [
        {
            "name" : "drawing book",
            "price" : 5000,
            "disc" : 10,
            "tax" : 0.1,
            "available" : true
        },
        {
            "name" : "kisah 25 nabi",
            "price" : 40000,
            "disc" : 12,
            "tax" : 0.03,
            "available" : true
        }, 
        {
            "name" : "manual book cooking",
            "price" : 30000,
            "disc" : 15,
            "tax" : 0.1,
            "available" : false
        },
        {
            "name" : "cara merakit roket dalam 2 hari",
            "price" : 550000,
            "disc" : 0,
            "tax" : 0.5,
            "available" : true
        }
    ]

const bookPurcasing = function(name, price, disc, tax, available){
    // const disc = 10;
    // const tax = 0.1;

    console.log(available ? 'Available' : 'Out of stock')

    console.log(`Product Name : ${name}`);

    console.log(`Price :Rp. ${price}`)

    console.log(`Discount : ${disc}%`)


    if(available) {

        // count amoount discount
        let amountDisc = price * (disc/100);
        console.log(`discount : Rp. ${amountDisc}`)
    
        // Price after disc
        // price = price - amountDisc
        price -= amountDisc;
        console.log(`price after disc : Rp. ${price}`)
    
        // Amount tax
        let amountTax = price * (tax);
        console.log(`total tax : Rp. ${amountTax}`)
    
        // Price after tax
        // price = price + amountDisc
        price += amountTax;
        console.log(`price after tax : Rp. ${price}`)    

    } else {
        console.log(`This book out of stock`)
    }

 
    const greet = "thankyou ... back to our store later"
    console.log(greet)

}

bookSelect = 3

let name = books[bookSelect].name
let price = books[bookSelect].price
let disc = books[bookSelect].disc
let tax = books[bookSelect].tax
let available = books[bookSelect].available
bookPurcasing(name, price, disc, tax, available)
