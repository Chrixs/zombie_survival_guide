$(function() {
    var update = function() {
        $('#serializearray').text(
            JSON.stringify($('.question1').serializeArray())
        );

    };
    update();
    $('.question1').change(update);
})
