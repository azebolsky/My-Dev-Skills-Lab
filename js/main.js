let $newLi = $('.new-skill');


$('.btn-add').click(function(evt) {
    $('ul').append($('<li>', {
        text: $('$newLi').val()
    }));
});

