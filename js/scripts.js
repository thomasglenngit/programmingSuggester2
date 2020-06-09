// this is back-end logic:
let add = function(remote, city, aid, salary, hours) {
  return remote + city + aid + salary + hours
}

    // this is front-end, user-interface code:
$(document).ready(function() {
  $("form#profile").submit(function(event) {
    event.preventDefault();
    const firstName = $("input#firstName").val();
    const lastName = $("input#lastName").val();
    const email = $("input#email").val();
    const mobile = $("input#mobile").val();
    const day = $("input#day").val();

    $(".firstName").text(firstName);
    $(".lastName").text(lastName);
    $(".email").text(email);
    $(".mobile").text(mobile);
    $(".day").text(day);


    const remote = parseInt($("#remote").val());
    const city = parseInt($("#city").val());
    const aid = parseInt($("#aid").val());
    const salary = parseInt($("#salary").val());
    
    const hours = parseInt($("#hours").val());

    let total = add(remote, city, aid, salary, hours);

    if (total > 0 && total <= 30) {
      $("#output").text("Swift"); 
    } else if (total >= 31 && total <=35) {
      $("#output").text("PeopleSoft/SQL/Python"); 
    } else if (total >= 36 && total <= 40) {
      $("#output").text("JavaScript");
    } else  {
      $("#output").text("C#");
    }

    $("#present").show();
    $("#output").show();
    $(".day").show();
    $("form#profile").hide();

    console.log();
  });
});

