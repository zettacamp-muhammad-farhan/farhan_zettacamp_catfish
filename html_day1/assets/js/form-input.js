$('#submit').click(function(e){
    e.preventDefault()
    let fn = $('#first-name').val()
    let ln = $('#last-name').val()
    $('#fullname').html(`${fn} ${ln}`)

    let age = $('#age').val()
    $('.age').html(`${age}`)

    let gender = $('#gender').val()
    $('.gender').html(`${gender}`)

    let email = $('#email').val()
    $('.email').html(`${email}`)

    let address = $('#address').val()
    $('.address').html(`${address}`)

    let phone = $('#phone').val()
    $('.phone').html(`${phone}`)

    let describe = $('#describe').val()
    $('.describe').html(`${describe}`)

    let hobby = [];
    $.each($("input[name='hobby']:checked"), function(){
        hobby.push($(this).val());
    });
    $('.hobby').html(hobby.join(", ")) 

    let country = $('input[name="country"]:checked').val()
    if(country){
        $('.country').html(`${country}`)
    }

    let birthday = $('#birthday').val()
    if (birthday != ""){
        $('.birthday').html(`${birthday}`)
    }

    // let image = $('#image').val()
    // if(image != ""){
    //     $('.image').attr("src", './assets/img/profile.jpg')
    // }



    // let image = $('#image');
    // imgData = getBase64Image(image);
    // localStorage.setItem("imgData", imgData);

    // function getBase64Image(img) {
    //     let canvas = document.createElement('canvas');
    //     canvas.width = img.width;
    //     canvas.height = img.height;

    //     let ctx = canvas.getContext("2d");
    //     ctx.drawImage(img, 0, 0);
    
    //     var dataURL = canvas.toDataURL("image/png");
    
    //     return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
    // }

    //     let dataImage = localStorage.getItem('imgData');
    //     bannerImg = document.getElementById('image');
    //     bannerImg.src = "data:image/png;base64," + dataImage;

    let data = {
        name : "name",
        age: "age",
        birthday: "birthday",
        country: "country",
        hobby: "hobby",
        gender: "gender",
        email: "email",
        address:"address",
        phone:"phone",
        about:"about",
        image:"image"
    
    }

    localStorage.removeItem(data.name);
    localStorage.removeItem(data.age);
    localStorage.removeItem(data.birthday);
    localStorage.removeItem(data.country);
    localStorage.removeItem(data.hobby);
    localStorage.removeItem(data.gender);
    localStorage.removeItem(data.email);
    localStorage.removeItem(data.address);
    localStorage.removeItem(data.phone);
    localStorage.removeItem(data.about);
    localStorage.removeItem(data.image);

    localStorage.setItem(data.name, $('#first-name').val() + $('#last-name').val());
    localStorage.setItem(data.age,  $('#age').val());
    localStorage.setItem(data.birthday, $('#birthday').val());
    localStorage.setItem(data.country, $('input[name="country"]:checked').val());
    localStorage.setItem(data.hobby, hobby);
    localStorage.setItem(data.gender, $('#gender').val());
    localStorage.setItem(data.email, $('#email').val());
    localStorage.setItem(data.address, $('#address').val());
    localStorage.setItem(data.phone, $('#phone').val());
    localStorage.setItem(data.about, $('#describe').val());
    localStorage.setItem(data.image, $('#image').val());
})

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            // console.log(e.target.result)
            $('.image').attr('src', e.target.result);
        }

        reader.readAsDataURL(input.files[0]);
    }
}


$("#image").change(function(){
    readURL(this);
});


