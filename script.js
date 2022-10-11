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
            "price" : 10000,
            "disc" : 50,
            "tax" : 0.10,
            "available" : true
        }
    ]

const bookPurcasing = function(book){
    // const disc = 10;
    // const tax = 0.1;

    console.log(book.available ? 'Available' : 'Out of stock')

    console.log(`Product Name : ${book.name}`);

    console.log(`Price :Rp. ${book.price}`)

    console.log(`Discount : ${book.disc}%`)


    if(book.available) {

        // count amoount discount
        let amountDisc = book.price * (book.disc/100);
        console.log(`discount : Rp. ${amountDisc}`)
    
        // Price after disc
        // price = price - amountDisc
        book.price -= amountDisc;
        console.log(`price after disc : Rp. ${book.price}`)
    
        // Amount tax
        let amountTax = book.price * (book.tax);
        console.log(`total tax : Rp. ${amountTax}`)
    
        // Price after tax
        // price = price + amountDisc
        book.price += amountTax;
        console.log(`price after tax : Rp. ${book.price}`)    

    } else {
        console.log(`This book out of stock`)
    }

 
    const greet = "thankyou ... back to our store later"
    console.log(greet)

}

bookSelect = 2


bookPurcasing(books[bookSelect])
