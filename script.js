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
    	const username=$('#email').val();
    	const pass=$('.pass').val();
        var panjang=0;
        for(let i = 0; i<pass.length;i++){
            panjang++;
        }
        if(panjang < 8){
            $('.koreksi-password').html(`<p style="font-size: 10px; color: red; font-style: italic;">Password kurang dari 8!!</p>`);
        }else{
         alert('username = '+username+' || '+'password = '+pass); 
     } 
 })
    $('.modal-trigger').click(function(){
    	$('.card').css('animation-play-state','running');
    	$('.isi').css('animation-play-state','running');
    	$('.icon-form').css('animation-play-state','running');
        $('.modal-action').css('animation-play-state','running');
    })
});
