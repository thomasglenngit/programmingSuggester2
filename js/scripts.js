
// this is front-end, user-interface code:
$(document).ready(function() {
  $("#profile").submit(function(event) {
    const firstName = $("input#firstName").val();
    const lastName = $("input#lastName").val();
    const email = $("input#email").val();
    const mobile = $("input#mobile").val();

    $(".firstName").text(firstName);
    $(".lastName").text(lastName);
    $(".email").text(email);
    $(".mobile").text(mobile);

    const userInfo = text(firstName, lastName, email, mobile);

    $("#output").text(userInfo);



    // this is back-end code:
    const remote = $("#remote").val();
    const city = $("#city").val();
    const aid = $("#aid").val();
    const salary = $("#salary").val();
    const day = $("#day").val();
    const hours = $("#hours").val();
  })
}
)


// $(document).ready(function() {
//   $("#profile").submit(function(event) {
//     const gender = $("#gender").val();
//     const attribute = $("#attribute").val();



//     if (gender === 'male' && attribute === 'athletic') {
//       let choice = "Arnold Schwartzenegger";
//       $(".choice").text(choice);
//     } else if (gender === 'male' && attribute === 'caring') {
//       let choice = "Brad Pitt";
//       $(".choice").text(choice);
//     } else if (gender === 'male' && attribute === 'rich') {
//       let choice = "Bill Gates";
//       $(".choice").text(choice);
//     } else if (gender === 'female' && attribute === 'intelligent') {
//       let choice = "Madeleine Albright";
//       $(".choice").text(choice);
//     }

//     $("#date").text();
//     event.preventDefault();

//   });
// });

