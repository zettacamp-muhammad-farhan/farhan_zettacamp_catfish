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

const term = {
    long : null,
    startFrom : null
}

const month = 
[
    {
        month: 1,
        monthName : "january"
    },
    {
        month: 2,
        monthName : "Februrary"
    },
    {
        month: 3,
        monthName : "March"
    },
    {
        month: 4,
        monthName : "April"
    },
    {
        month: 5,
        monthName : "May"
    },
    {
        month: 6,
        monthName : "June"
    },
    {
        month: 7,
        monthName : "July"
    },
    {
        month: 8,
        monthName : "August"
    },
    {
        month: 9,
        monthName : "September"
    },
    {
        month: 10,
        monthName : "October"
    },
    {
        month: 11,
        monthName : "November"
    },
    {
        month: 12,
        monthName : "December"
    }
]

console.log(month.filter((e)=>{e.month<=4}))


const bookPurcasing = function(book, buy, term){
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

    // information pay of credit


    const greet = "thankyou ... come back to our store later"
    console.log(greet)


        
    const pay = amountPrice;
    // long time of credit
    let termOfCredit = term.long;
    // start from month (ex : 1, 2, 3)
    let monthStart = term.startFrom;

    // count pay / month
    let creditPay = pay/termOfCredit;
    creditPay = creditPay.toFixed(0);
    console.log(creditPay*termOfCredit)
    let credit = [
        {

        }
    ]

    let monthName = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'oktober', 'november', 'descember']

    let monthIndex = monthName[monthStart-1]
    let monthStartName = monthName.find((e)=>{return e === monthIndex})
    console.log(` -=-=-=-=-You choose month ${monthStartName}`)

    console.log(`=== You choose to pay w/ credit for ${termOfCredit} month, and you pay from ${monthName[monthStart-1]}, every month you must pay Rp.${creditPay} === `)


    monthStart-=2
    // make a object to pay
    for(let i = 0; i < termOfCredit; i++){
        credit[i] = {'month' : i+1, 'credit' : creditPay}

        monthStart ++
        let month = monthStart%12
        // console.log(`${i} : ${monthStart}`)
        credit[i].monthName = monthName[month]
    }

    console.log(credit)

    let totalAmountPaid = amountPrice-(creditPay*termOfCredit)

    if(totalAmountPaid > 0) {
        credit[termOfCredit-1].month=termOfCredit;
        credit[termOfCredit-1].credit=`Rp. ${creditPay} + Rp. ${totalAmountPaid}(previous deficiency)`;
        console.log(`In the end of pay you must pay Rp. ${totalAmountPaid}`)
    } else if(totalAmountPaid < 0) {
        console.log(`In the end of pay we will return Rp. ${-(totalAmountPaid)}`)
    } else {
        console.log(`pass`)
    }
    

    let paidRecap = credit.map((e)=>{return e.credit})
    console.log(paidRecap)


    //destructure
    let [a, b, c] = paidRecap

    console.log(`at first month you must pay Rp. ${a}`)

    // spread
    const objMonthName = {...monthName}
    console.log(monthName)


}

// quantity buy
let buy = 4

// select book
let bookSelect = 1


// you can assign long time of credit (ex: 1, 2, 3)
 term.long = 3

 //you can assign month from
 term.startFrom = 3

 bookPurcasing(books[bookSelect], buy, term)

// console.log(month)


// const findMonth = month.find(function(e){
//     return e.monthName = 'sss'
// })

// console.log(findMonth)


// let arr = ['a','b','c','d']

// const arr2 = arr.filter((e)=>{e==='c'})
// console.log(arr2)