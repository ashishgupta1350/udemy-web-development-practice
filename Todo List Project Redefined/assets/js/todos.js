// alert("connected");

$('ul').on("click","li",function()
{
    // do something
    // add some class
    // $(this).addClass("crossText");
    // $(this).css("color","gray");
    // $(this).css("text-decoration","line-through");
    // if li is gray then turn it to black and remove line through
    // else keep doing what you were doing last time 
    // if($(this).css("color")==="rgb(128, 128, 128)")
    // {
    //     $(this).css({
    //         color:"black",
    //         textDecoration:"none"
    //     })
    // }
    // else{
    //     $(this).css({
    //         color:"gray",
    //         textDecoration:"line-through"
    //     })
    // }

    $(this).toggleClass("completed")


});

// next is to delete the todos
// click on x to delete all todos

$("ul").on("click","span",function(evt)
{
    // alert('span clicked');
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    evt.stopPropagation();
});
// $("body").click(function()
// {
//     alert("body clicked");
        // some theory elements should not be deleted for educantional purposes
// })

$("input[type='text']").keypress(function(event)
{
    var list=document.querySelector("ul");
    if(event.which ===13){
        // $(selector).html(htmlString);
        var todoText = document.getElementById('input').value;
        // $(this).val();
        $("ul").append("<li> <span> <i class='fas fa-trash-alt'></i></span>" + todoText+ "</li>");
        var todoText = document.getElementById('input').value="";
    }
})

$("fa-plus").on("click",function()
{
    $("input[type='text']").fadeToggle();
});
