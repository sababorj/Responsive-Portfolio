var config = {
    apiKey: "AIzaSyBvyQR2SAphRWAi7-gjDqi5Hb1SUc9Wjv8",
    authDomain: "portfolio-b599c.firebaseapp.com",
    databaseURL: "https://portfolio-b599c.firebaseio.com",
    projectId: "portfolio-b599c",
    storageBucket: "portfolio-b599c.appspot.com",
    messagingSenderId: "117547015514"
};
firebase.initializeApp(config);
var database = firebase.database();

$('.navigate').on('click', function (event) {
    event.preventDefault();

    // get value of href. ex: "#page2"
    var targetId = $(this).attr("href");

    // get the top position of our target
    var offset = $(targetId).offset();

    console.log(offset)

    // subtract height of navbar from our target
    var scrollPosition = offset.top - 20 - $("nav").outerHeight(true);

    window.scrollTo({
        top: scrollPosition,
        left: 0,
        behavior: 'smooth'
    });
})

$(document).on("submit", "form", (e) => {
    e.preventDefault();
    database.ref("/messages").push({
        "name": $("#name").val().trim(),
        "email": $("#email").val().trim(),
        "msg": $("#message").val().trim()
    });
    $('#name').val(null);
    $('#email').val(null);
    $('textarea').val(null);

    var newMsg = $("<p>").text("Thank you! I will contact you soon.");
    $("#message").after(newMsg)
})
