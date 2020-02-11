let $newLi = $('.new-skill');


$('.btn-add').click(function(evt) {
    $('ul').append(`<li class="new-skill"><button class="btn btn-danger">X</button>${$newLi.val()}</li>`);
});

$('ul').on('click', 'button', function() {
    $(this).closest('li').fadeOut(1000, function() {
        $(this).remove();
    });
});
