const books = 
    [
        {
            "name" : "drawing book",
            "price" : 5000,
            "disc" : 10,
            "tax" : 0.1,
            "available" : true,
            "stock" : 2
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

const bookPurcasing = function(book, buy){
    // const disc = 10;
    // const tax = 0.1;

    console.log(book.available)
    console.log(`Price :Rp. ${book.price}`)
    let i = 0


    if(book.available) {
        console.log(`Product Name : ${book.name}`);

        // count amoount discount
        let amountDisc = book.price * (book.disc/100);
        console.log(`discount : Rp. ${amountDisc}`)
    
        // Price after disc
        book.price -= amountDisc;
        console.log(`price after disc : Rp. ${book.price}`)
    
        // Amount tax
        let amountTax = book.price * (book.tax);
        console.log(`total tax : Rp. ${amountTax}`)
    
        // Price after tax
        book.price += amountTax;
        console.log(`price after tax : Rp. ${book.price}`)    

        // let stock = 2
        // let buy = 1
        var amountPrice = 0
        for( i = 0; i < buy; i++){
    
            if(i+1 > book.stock){
                console.log(`this book out of stock`)
                break;
            } else {
                console.log(`you can buy again`)
            }
    
            amountPrice += book.price
            console.log(`curent ammount price : ${amountPrice}, ${i+1} book, and ${book.stock-(i+1)} left`)
        }

    } else {
        console.log(`This book out of stock`)
    }
    console.log(`stock left : ${book.stock-i}`)
    console.log(`you must pay : Rp. ${amountPrice}`)
    const greet = "thankyou ... come back to our store later"
    console.log(greet)

}

// quantity buy
let buy = 21

// select book
let bookSelect = 1



bookPurcasing(books[bookSelect], buy)

