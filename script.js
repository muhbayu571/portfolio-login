 $(document).ready(function(){
    // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
    $('.icon-mata').click(function(){
    	const text = $(this).text();
    	if(text == "visibility"){
    		$(this).text('visibility_off');
    		$('.pass').attr('type','password');
    	}else{
    		$(this).text('visibility');
    		$('.pass').attr('type','text');
    	}
    })
    $('.modal-action').click(function(){
    	const username=$('.username').val();
    	const pass=$('.pass').val();
    	alert('username = '+username+' || '+'password = '+pass);
    })
  });
