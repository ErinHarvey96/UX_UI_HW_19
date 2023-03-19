console.log("Your index.js file is loaded correctly!");

$("li").on("hover", function(){
    $("li").hover("ContactList");
    if ($("li").hasClass("ContactList")) {
      $("li").css("color","#BE8069");
    }
    else {
      $("li").css("color", "white");

    }
  });
