let music = 
[
    {
        title : "Dear God",
        artist : "Avenged Sevenfold",
        genre : "metal",
        duration : '6.34'
    },
    {
        title : "A Little Piece Of Heaven",
        artist : "Avenged Sevenfold",
        genre : "metal",
        duration : '8.01'
    },
    {
        title : 'Critical Acclaim',
        artist : 'Avenged Sevenfold',
        genre : "metal",
        duration : '5.16'
    },
    {
        title : 'Not Alike',
        artist : "Eminem",
        genre : "hip-hop",
        duration : '4.50'
    },
    {
        title : 'Without Me',
        artist : 'Eminem',
        genre : 'hip-hop',
        duration : '4.52'
    },
    {
        title : 'Beautiful',
        artist : 'Eminem',
        genre : 'hip-hop',
        duration : '6.33'
    },
    {
        title : 'Happier',
        artist : 'Marshmellow',
        genre : 'pop',
        duration : '3.35'
    },
    {
        title : 'Friends',
        artist : 'Marshmellow',
        genre : 'pop',
        duration : '3.23'
    },
    {
        title : 'Allone',
        artist : 'Marshmellow',
        genre : 'pop',
        duration : '3.32'
    },
    {
        title : 'Lily',
        artist : 'Alan Walker',
        genre : 'pop',
        duration : '3.36'
    },
    {
        title : 'Faded',
        artist : 'Alan Walker',
        genre : 'pop',
        duration : '3.33'
    },
    {
        title : 'On My Way',
        artist : 'Alan Walker',
        genre : 'pop',
        duration : '3.37'
    },
    {
        title : 'Bad Guy',
        artist : 'Billie Eilish',
        genre : 'pop',
        duration : '3.15'
    },
    {
        title : 'Happier Than Ever',
        artist : 'Billie Eilish',
        genre : 'pop',
        duration : '4.56'
    },
    {
        title : 'I Love You',
        artist : 'Billie Eilish',
        genre : 'pop',
        duration : '5.10'
    },
    {
        title : 'I Love You',
        artist : 'Billie Eilish',
        genre : 'pop',
        duration : '1.10'
    },

]



const findArtist = (music, artist) => {
    let a = music.filter(music=> music.artist == (artist) )
    console.log(a)
}

let listArtist = findArtist(music, 'Billie Eilish')




function findGenre (music, genre)  {
     return music.filter(music => {return music.genre == genre} )
}

let listGenre =  findGenre(music, 'pop')
console.log(listGenre)

// function playList(){

// }


// for(let i = 0 ; i < music.length; i++){
//     if (duration < 59.59) {
//         // playList[i] = {title : music[i].title, duration : music[i].duration}
//         // console.log(`add new music ${music[i].title}`)
//     }
    
// }


 music = music[Math.floor(Math.random()*music.length)];


let playList = []
// let duration = 0
let amountSec = 0
let amontMinute = 0
for(let i = 0; i < music.length; i++){

    const indRand = Math.floor(Math.random() * music.length);



    // console.log(indRand)

    // if(indRand==playList[])
    // for(let k=0; k < playList.length; k++){
    //     if(indRand !== k){
    //         console.log(`hola `)
    //     }
    // }

    const timez = music[i].duration

    // memsiahkan menit dan detik menjadi array
    let arrTime =timez.split('.')

    // melakukan destrcut array
    let [min, sec] = arrTime
    // console.log(Number(min))

    // mengubah string menit dan detik agar bisa di hitung
    let second = Number(sec)
    let minute = Number(min)

    if( amountSec <= 59 ){
        // amountTime += music[i].duration
        // menambahkan detik ke detik total
        amountSec +=second

        // jika detik lebih dari 59 detik akan di reset ke 0 dan diubah ke menit
        if (amountSec > 59) {
            // menghitung sisa detik
            let secRemain = amountSec % 60

            //memasukan detik yang tersisa
            amountSec = secRemain

            // menit akan ditambah 1 dikarenakan telah melewati 59
            amontMinute += 1
        }
    }


    // menambhakan menit ke waktu total
    if(amontMinute + minute <= 59 ) {
        amontMinute +=minute
        console.log(`your playlist add ${minute} min ${second} sec`)

        // show song
        console.log(music[i].title)

        // memasukan list musik ke dalam objek
        playList[i] = {title : music[i].title, duration : music[i].duration}

    } else {

        let ammountRemain = 59 - amontMinute
        console.log(`Time Remain : ${ammountRemain} minute`)

            // filter lagu dibawah menit sisa yang masih bisa di assign
            let remainSong = music.slice(i, music.length)
            for(let j = 0; j < remainSong.length; j++){
                let time2 = remainSong[j].duration.split('.')
                let[min, sec] = time2
                let minute = Number(min)
                let second = Number(sec)

                let numbb = j+1
                if(minute<ammountRemain){
                    playList.push({title : remainSong[j].title, duration : remainSong[j].duration})
                }
            }
            console.log(remainSong)
            // for( let j = i+1; j < music.length ; j++){
            //    music.find((m)=>{
            //     time2 = m.duration.split('.')
            //     let[min, sec] = time2;
            //     let minute = Number(min)
            //     let second = Number(sec)

            //     minute<=ammountRemain

            //     console.log(m)
            // })
                
            // }


        console.log(`your playlist more than 1 hour`)
        console.log(`your last song add to playlist ${music[i].title} and total duration in playlist ${amontMinute} Minute and ${amountSec} Second`)
        break
    }

}

console.log(playList)