

let button = document.querySelectorAll('.btn');
let a = button.forEach(
    function(e){
        e.addEventListener('click', function(ev){
            let modal = document.querySelector('.modal')
            modal.classList.remove('hide')

            let urutan = e.getAttribute('name')
            console.log(urutan);


            let ajax = new XMLHttpRequest();
            ajax.open('GET', './assets/js/data.json', true);

            ajax.onload = function() {
                if(ajax.status >= 200 && ajax.status < 400) {
                    let data = JSON.parse(ajax.responseText);
                    console.log(data.content[urutan])

                    let title = data.content[urutan].title;
                    let content1 = data.content[urutan].content;
                    let content2 = data.content[urutan].content2;
                    let gbr = data.content[urutan].img;
                    

                    let judul = document.querySelector('#title-mod')
                    let con1 = document.querySelector('#con1')
                    let con2 = document.querySelector('#con2')
                    let img = document.querySelector('.title>.img>img')
                    let blur = document.querySelector('.overlay')

                    blur.classList.remove('hide')

                    judul.innerHTML=title
                    con1.innerHTML=content1
                    con2.innerHTML=content2
                    img.setAttribute("src", gbr)

                } else {
                    console.log('errno')
                }
            }

            ajax.send();

            

        })
        
    }
)

