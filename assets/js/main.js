 $(document).ready(function(){
 	/* funcion sirve para una vez escrito el mensaje en el input , cree el mensaje y se muestra abajo con check y el basurero*/
 	$('#items').click(function(){
        var mensaje = $('input[name=tarea]').val();
         	if(mensaje){
				$('#items').append("<li><input type='checkbox' class='filled-in' id='filled-in-box' checked='checked' /><label for='filled-in-box'></label>" + mensaje + "<a class='remove'><i class='fa fa-trash basurero' aria-hidden='true'></a><hr></li>");
         		 $('#tarea').val("");
         }


        });
    /*funcion sirve para remover al hacer click en el basurero*/   
    $(document).on('click', '.remove', function(){
		
		$(this).parent().remove();
		
	});


    /*funcion sirve para que cuando se hace enter se guarde la tarea*/
       $("input[name=tarea]").keyup(function(event){
          if(event.keyCode == 13){
            $("#items").click();
          }         
      });

 });
