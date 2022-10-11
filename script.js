const books = 
    [
        {
            "name" : "drawing book",
            "price" : 5000,
            "disc" : 10,
            "tax" : 0.1,
            "available" : true,
            "stock" : 7
        },
        {
            "name" : "kisah 25 nabi",
            "price" : 40000,
            "disc" : 12,
            "tax" : 0.03,
            "available" : true,
            "stock" : 9
        }, 
        {
            "name" : "manual book cooking",
            "price" : 30000,
            "disc" : 15,
            "tax" : 0.1,
            "available" : false,
            "stock" : 12
        },
        {
            "name" : "cara merakit roket dalam 2 hari",
            "price" : 550000,
            "disc" : 0,
            "tax" : 0.5,
            "available" : true,
            "stock" : 6
        }
    ]

const bookPurcasing = function(name, price, disc, tax, available){
    // const disc = 10;
    // const tax = 0.1;

    console.log(available)
    console.log(`Price :Rp. ${price}`)


    if(available) {
        console.log(`Product Name : ${name}`);

        // count amoount discount
        let amountDisc = price * (disc/100);
        console.log(`discount : Rp. ${amountDisc}`)
    
        // Price after disc
        price -= amountDisc;
        console.log(`price after disc : Rp. ${price}`)
    
        // Amount tax
        let amountTax = price * (tax);
        console.log(`total tax : Rp. ${amountTax}`)
    
        // Price after tax
        price += amountTax;
        console.log(`price after tax : Rp. ${price}`)    

    } else {
        console.log(`This book out of stock`)
    }

    let stock = 7
    let buy = 3

    let amountPrice = 0
    for(let i = 0; i < buy; i++){
        amountPrice += price
        console.log(`curent ammount price : ${amountPrice}, ${i} book`)
        if(i > stock){
            console.log(`this book out of stock`)
            break;
        } else {
            console.log(`you can buy again`)
        }
    }

 
    const greet = "thankyou ... back to our store later"
    console.log(greet)

}

bookSelect = 1

let name = books[bookSelect].name
let price = books[bookSelect].price
let disc = books[bookSelect].disc
let tax = books[bookSelect].tax
let available = books[bookSelect].available
bookPurcasing(name, price, disc, tax, available)
