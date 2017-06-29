 $(document).ready(function(){
 	$('#items').click(function(){
        var mensaje = $('input[name=tarea]').val();
         	if(mensaje){
				$('#items').append("<li><input type='checkbox' class='filled-in' id='filled-in-box' checked='checked' /><label for='filled-in-box'></label>" + mensaje + "<a class='remove'><i class='fa fa-trash basurero' aria-hidden='true'></a><hr></li>");
         		 $('#tarea').val("");
         }


        });
       
    $(document).on('click', '.remove', function(){
		
		$(this).parent().remove();
		
	});



       $("input[name=tarea]").keyup(function(event){
          if(event.keyCode == 13){
            $("#items").click();
          }         
      });

 });



/*
if(item) 
		{
			$('#list-items').append("<li><input class='checkbox' type='checkbox'/>" + item + "<a class='remove'>x</a><hr></li>");
			
			localStorage.setItem('listItems', $('#list-items').html());
			
			$('#todo-list-item').val("");
		}
		
	});

/*
 		$('#tarea').keyup(function(e){
 		e.preventDefault();
    	if(e.keyCode == 13) {
        	alert('Has presionado ENTER');
    		}
    	}

    	$('input[name=ListItem]').val();
                 $('ol').append('<li>' + toAdd + '</li>');
            });
       

  	var mensaje= $('#tarea').val();
		if(mensaje ==""){
			alert("Debes escribir una nombre");
		}else{
			$('#tarea').val();
			$('ol').append('<li>' + mensaje + '</li>');
		}
	});
});

*/


