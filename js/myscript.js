 $( document ).ready(function() {

         var imgarray = [];
         var idarray=[];
         var api_url = "https://api.thecatapi.com/v1/images/search";
            for (var i = 0; i <= 8; i++) {
              $.ajax({
                  type: "GET",
                  url: api_url,
                  async: false,
                  success: function(result){
                   imgarray.push(result['0'].url);
                   idarray.push(result['0'].id);
                  }
               });
            }
           $("#catgrid").html(
            "<div class='card left mt-4 col-xs-4 shadow' style='width: 30%;'>" + 
            "<img src='" + imgarray[0] + "' class='card-img-top width='250px' height='250px'>" +
                "<div class='card-body'>"+
                    "<p class='card-text'> <span class='catid'>Cat ID is : "+ idarray[0] + "</span></p>"+
                "</div>"+"</div>"

                +

            "<div class='card left mt-4 col-xs-4 shadow' style='width: 30%;'>" + 
            "<img src='" + imgarray[1] + "' class='card-img-top width='250px' height='250px'>" +
                "<div class='card-body'>"+
                    "<p class='card-text'> <span class='catid'>Cat ID is : "+ idarray[1] + "</span></p>"+
                "</div>"+"</div>"

                +

            "<div class='card left mt-4 col-xs-4 shadow' style='width: 30%;'>" + 
            "<img src='" + imgarray[2] + "' class='card-img-top width='250px' height='250px'>" +
                "<div class='card-body'>"+
                    "<p class='card-text'> <span class='catid'>Cat ID is : "+ idarray[2] + "</span></p>"+
                "</div>"+"</div>" 

                +

            "<div class='card left mt-4 col-xs-4 shadow' style='width: 30%;'>" + 
            "<img src='" + imgarray[3] + "' class='card-img-top width='250px' height='250px'>" +
                "<div class='card-body'>"+
                    "<p class='card-text'> <span class='catid'>Cat ID is : "+ idarray[3] + "</span></p>"+
                "</div>"+"</div>"

                +

            "<div class='card left mt-4 col-xs-4 shadow' style='width: 30%;'>" + 
            "<img src='" + imgarray[4] + "' class='card-img-top width='250px' height='250px'>" +
                "<div class='card-body'>"+
                    "<p class='card-text'> <span class='catid'>Cat ID is : "+ idarray[4] + "</span></p>"+
                "</div>"+"</div>"

                +

            "<div class='card left mt-4 col-xs-4 shadow' style='width: 30%;'>" + 
            "<img src='" + imgarray[5] + "' class='card-img-top width='250px' height='250px'>" +
                "<div class='card-body'>"+
                    "<p class='card-text'> <span class='catid'>Cat ID is : "+ idarray[5] + "</span></p>"+
                "</div>"+"</div>"

                +

            "<div class='card left mt-4 col-xs-4 shadow' style='width: 30%;'>" + 
            "<img src='" + imgarray[6] + "' class='card-img-top width='250px' height='250px'>" +
                "<div class='card-body'>"+
                    "<p class='card-text'> <span class='catid'>Cat ID is : "+ idarray[6] + "</span></p>"+
                "</div>"+"</div>" 

                +

            "<div class='card left mt-4 col-xs-4 shadow' style='width: 30%;'>" + 
            "<img src='" + imgarray[7] + "' class='card-img-top width='250px' height='250px'>" +
                "<div class='card-body'>"+
                    "<p class='card-text'> <span class='catid'>Cat ID is : "+ idarray[7] + "</span></p>"+
                "</div>"+"</div>"
                
                +

            "<div class='card left mt-4 col-xs-4 shadow' style='width: 30%;'>" + 
            "<img src='" + imgarray[8] + "' class='card-img-top width='250px' height='250px'>" +
                "<div class='card-body'>"+
                    "<p class='card-text'> <span class='catid'>Cat ID is : "+ idarray[8] + "</span></p>"+
                "</div>"+"</div>"
 			); 
      });