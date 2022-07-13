var user = document.querySelector('.userDetails'),
loadBtn = document.querySelector('.loadBtn'),
count = 5 , i=0;

loadBtn.addEventListener('click', function(e) {
    // fetching url
   
    var url = 'https://jsonplaceholder.typicode.com/posts';
    fetch(url)
    .then(function(response) { 
      if (response.status == 200) 
      return response.json(); 
    })
    
    .then(function(data) {
        var span="";
        for ( ; i <= count; i++) {
        span += "<li><h2> USER ID : " + data[i].userId + "</h2>" ;
        span += "<h2> ID : " + data[i].id + "</h2>";
        span += "<h2> TITLE : " + data[i].title + "</h2>";
        span += "<h2> DESCRIPTION : " + data[i].body + "</h2></li>";
        
        }
        count += 5;
        user.innerHTML += span; 
    })
})



















