function add(remote, city, aid, salary, hours) {
  return remote + city + aid + salary + hours

}
    // this is back-end code:
    const remote = parseInt($("#remote").val());
    const city = parseInt($("#city").val());
    const aid = parseInt($("#aid").val());
    const salary = parseInt($("#salary").val());
    // let day = Date.parse("July 4, 2020");
    const hours = parseInt($("#hours").val());

    let total = add(remote, city, aid, salary, hours);
  console.log();

    if (total > 0 && total <= 30) {
      $("#output").text("Swift");
    } else if (total >=31 && total <= 35) {
      $("#output").text("SQL/Python");
    } else if (total >= 36 && total <= 40) {
      $("#output").text("JavaScript");
    } else (total >= 40) 
    $("#output").text("C#");
    


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
    console.log();

  });
});



 



// {/* <script>
// function myFunction() {
//   var d = Date.parse("March 21, 2012");
//   document.getElementById("demo").innerHTML = d;
// }
// </script> */

