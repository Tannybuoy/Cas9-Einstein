$(document).ready(function(){
  var imgContainer = [];
  gridInit();
  imgGrid(6);

  $("#colNumber").change(function(){
    var val = $(this).children("option:selected").val();
    if(val != "Choose One"){
      imgGrid(val);
    }
  })

  function gridInit(){
    $(".img-grid").children("img").each(function(){
      imgContainer.push($(this).attr("src"));
    });
    $(".img-grid").html("");
  }

  function imgGrid(col){
    if(col == 1){
      $(".img-grid").html("<div data-col='1' class='grid-1'></div>");
      for(var x = 0; x < imgContainer.length; x++){
        $("[data-col='1']").append("<img src='"+imgContainer[x]+"'>");
      }

    }else if(col == 2){
      $(".img-grid").html("<div data-col='1' class='grid-2'></div><div data-col='2' class='grid-2'></div>");
      var n = 1;
      for(var x = 0; x < imgContainer.length; x++){
        if(n == 3){
          n = 1;
        }
        $("[data-col='"+n+"']").append("<img src='"+imgContainer[x]+"'>");
        n++;
      }
    }else if(col == 3){
      $(".img-grid").html("<div data-col='1' class='grid-3'></div><div data-col='2' class='grid-3'></div><div data-col='3' class='grid-3'></div>");

      var n = 1;
      for(var x = 0; x < imgContainer.length; x++){
        if(n == 4){
          n = 1;
        }
        $("[data-col='"+n+"']").append("<img src='"+imgContainer[x]+"'>");
        n++;
      }

    }else if(col == 4){
      $(".img-grid").html("<div data-col='1' class='grid-4'></div><div data-col='2' class='grid-4'></div><div data-col='3' class='grid-4'></div><div data-col='4' class='grid-4'></div>");

      var n = 1;
      for(var x = 0; x < imgContainer.length; x++){
        if(n == 5){
          n = 1;
        }
        $("[data-col='"+n+"']").append("<img src='"+imgContainer[x]+"'>");
        n++;
      }

    }else if(col == 5){
      $(".img-grid").html("<div data-col='1' class='grid-5'></div><div data-col='2' class='grid-5'></div><div data-col='3' class='grid-5'></div><div data-col='4' class='grid-5'></div><div data-col='5' class='grid-5'></div>");

      var n = 1;
      for(var x = 0; x < imgContainer.length; x++){
        if(n == 6){
          n = 1;
        }
        $("[data-col='"+n+"']").append("<img src='"+imgContainer[x]+"'>");
        n++;
      }
    }else if(col == 6){
      $(".img-grid").html("<div data-col='1' class='grid-6'></div><div data-col='2' class='grid-6'></div><div data-col='3' class='grid-6'></div><div data-col='4' class='grid-6'></div><div data-col='5' class='grid-6'></div><div data-col='6' class='grid-6'></div>");

      var n = 1;
      for(var x = 0; x < imgContainer.length; x++){
        if(n == 7){
          n = 1;
        }
        $("[data-col='"+n+"']").append("<img src='"+imgContainer[x]+"'>");
        n++;
      }
    }
  }
});
