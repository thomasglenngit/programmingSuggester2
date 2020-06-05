// this is back-end logic:

let add = function(remote, city, aid, salary, hours) {
  return remote + city + aid + salary + hours

}
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

    const remote = parseInt($("#remote").val());
    const city = parseInt($("#city").val());
    const aid = parseInt($("#aid").val());
    const salary = parseInt($("#salary").val());
    // let day = Date.parse("July 4, 2020");
    const hours = parseInt($("#hours").val());
  
    console.log("for the variables");

    let total = add(remote, city, aid, salary, hours);

    if (total > 0 && total <= 30) {
      let result = "Swift";
      $("#output").text(result); 
    } else if (total >= 31 && total <=35) {
      let result = "PeopleSoft/SQL/Python";
      $("#output").text(result); 
    } else if (total >= 36 && total <= 40) {
        let result = "JavaScript"
        $("#output").text(result);
    } else  {
      let result = "C#";
      $("#output").text(result);
    }

      console.log();

  });
});

