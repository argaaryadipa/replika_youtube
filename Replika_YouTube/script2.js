$.get(
    "https://www.googleapis.com/youtube/v3/channels",{
    part : 'contentDetails', 
    id : 'UCaNuHqbsd3w8Qr48Px00cEw',
    key: 'AIzaSyAIkacs6JYw2_-d61I7_6Qpg1tt0550MAM'},
    function(data) {
       $.each( data.items, function( i, item ) {
           pid = 'PLLgFLh4haEy7ZlSSNJBqrKN0hc2aW798H'; //place actual playlist id here.
           getVids(pid);
       });
   }
 );
 
 //Get Videos
 function getVids(pid){
     $.get(
         "https://www.googleapis.com/youtube/v3/playlistItems",{
         part : 'snippet', 
         maxResults : 20,
         playlistId : pid,
         key: 'AIzaSyAIkacs6JYw2_-d61I7_6Qpg1tt0550MAM'},
         function(data) {
             var results;
             $.each( data.items, function( i, item ) {
                 results = '<li><iframe width="320" height="180" src="https://www.youtube.com/embed/'+ item.snippet.resourceId.videoId +'?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe></li>';
                 $('#results').append(results);
             });
         }
     );
 }
 
 