/*global $*/
$(document).ready(function(){
    $("button").click(function(){
$.getJSON("https://www.googleapis.com/customsearch/v1",
          {key: "AIzaSyC7Pk7Zep5GwbcDCFY90_8ydyrgjBEaV78",
           cx: "007237555745101227627:s_acmjomrhs",
           q: document.getElementById('textbox_id').value,
           searchType: "image",
           fileType: "jpg",
           imgSize: "small",
           alt: "json"
}, function( data ) {
  var items = [];
  console.log(data.items);
  $.each( data.items, function( i ) {
    items.push( "<li'><img src=" + data.items[i].link + "></li>" );
  });
 
  $( "<ul/>", {
    "class": "my-new-list",
    html: items.join( "" )
  }).appendTo( "body" );
});
    });
});

