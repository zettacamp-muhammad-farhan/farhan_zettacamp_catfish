

let submit = document.querySelector('.add-item');

let sImg = document.querySelector('#sImg');
let sTitle = document.querySelector('#sTitle');
let sPrice = document.querySelector('#sPrice');

submit.addEventListener('click', function(){
    let pName = document.querySelector('input[name="pName"]').value;
    let pPrice = document.querySelector('input[name="pPrice"]').value;

    sTitle.innerHTML=pName;
    sPrice.innerHTML=pPrice;


    let pPhoto = document.querySelector('input[name="pPhoto"]');

    const file = pPhoto.files[0];

    let fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = function (){
        sImg.setAttribute('src', fileReader.result);
        // images[0].setAttribute('style', `background-image: url('${fileReader.result}')`);
    }

    alert('success upload data');
    
    document.querySelector('input[name="pName"]').value="";
    document.querySelector('input[name="pPrice"]').value="";
    pPhoto.files="";
})
