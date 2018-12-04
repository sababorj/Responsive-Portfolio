$('a').on('click', function(event) { 
    event.preventDefault();

    // get value of href. ex: "#page2"
    var targetId = $(this).attr("href"); 

    // get the top position of our target
    var offset = $(targetId).offset();

    console.log(offset)

    // subtract height of navbar from our target
    var scrollPosition = offset.top - $("nav").outerHeight(true);

    window.scrollTo({
        top: scrollPosition,
        left: 0,
        behavior: 'smooth'
    });
})
