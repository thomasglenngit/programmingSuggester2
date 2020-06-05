// this is back-end logic:

// let add = function(remote, city, aid, salary, hours) {
//   return remote + city + aid + salary + hours

// }
    // this is front-end, user-interface code:
$(document).ready(function() {
  $("#profile").submit(function(event) {
    event.preventDefault();
    const firstName = $("input#firstName").val();
    const lastName = $("input#lastName").val();
    const email = $("input#email").val();
    const mobile = $("input#mobile").val();

    $(".firstName").text(firstName);
    $(".lastName").text(lastName);
    $(".email").text(email);
    $(".mobile").text(mobile);

   
    $("#present").show();

    const remote = $("#remote").val();
    const city = $("#city").val();
    const aid = $("#aid").val();
    const salary = $("#salary").val();
    // let day = Date.parse("July 4, 2020");
    const hours = parseInt($("#hours").val());
  
    console.log("for the variables");

    let total = (remote, city, aid, salary, hours);

    if (hours <= 30) {
      let result = "Swift";
      $("#output").text(result);
    } else  {
      let result = "SQL/Python";
      $("#output").text(result);
    }

      console.log();

  });
});

