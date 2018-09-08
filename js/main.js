
  function vibration() {
   var time = 500;
   navigator.vibrate(time);
  }



  var tt = setInterval(load_new_books,120000);


  function load_new_books(){

  	var matric = sessionStorage.getItem("matric");
  	if(matric == ""){
  		return;
  	}

  	if(matric == null){
  		return;
  	}

  	$.ajax({
        url: url,
        type: 'get',
        dataType: 'json',
        crossDomain: true,
        timeout: 45000,
        data: {
            'book_lists': '',
            'matric': matric
        },
        success: function(f) {
	        var books = JSON.stringify(f.books);
	        
	        var saved_books = JSON.stringify(f.saved_books);
	        
	        //console.log(chats_lists);
	        sessionStorage.setItem("books",books);
	        sessionStorage.setItem("saved_books",saved_books);                                                
        },
        error: function(e) {
            
        }
    });
  }

  



document.addEventListener('deviceready', function () {

  //console.log("ready...");
   

}, false);