$(document).ready(() => {
    $('.info').on('submit', () => {
        return false;
    });
});

//pressing the button
$('#process_input').click(function(){
    $('.info').submit();
})

//pressing enter
$('.info').keypress((e) => {
    if (e.which === 13) {
        $('.info').submit();
    }
})

//submitting form info
$('form').submit(function (e) {
    e.preventDefault();
    var weight = $('#weight').val();
    var height_ft = $('#height_ft').val();
    var height_in = $('#height_in').val();
    var sex = $('#sex').val();
    var activity_level = $('#activity_level').val();
    var age = $('#age').val();
    var goal = $('#goal').val();

    var data = {
        "weight" : weight,
        "height_ft" : height_ft,
        "height_in" : height_in,
        "sex" : sex,
        "activity_level" : activity_level,
        "age" : age,
        "goal" : goal
    }
    
    console.log(data)
    $.ajax({
        type:'POST',
        url:'/',
        contentType:'application/json;charset=UTF-8',
        data : JSON.stringify(data)
    })
    .done(function(data) {
        console.log(data); // person's goals
    })
})

//get data back from python
