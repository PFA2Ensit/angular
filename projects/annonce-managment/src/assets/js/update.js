$(document).ready(function(){
    $('.edit_btn').click(function(){
    console.log('hello');
    $tr = $(this).closest('tr');
    var data = $tr.children("td").map(function(){
    return $(this).text();
    }).get();
    console.log(data);
    $('#email').val(data[0]);
    $('#phone').val(data[1]);
    
    });
    });