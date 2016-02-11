$(function() {
  $('#search').on('submit',function(){
    event.preventDefault(); 
    $('#content').empty();   
    var query = $("#city").val();
    $.ajax({
      url: "http://autocomplete.wunderground.com/aq?=",
      method: 'GET', 
      data: {query: query},
      // crossDomain: true,
      dataType: 'jsonp',
      jsonp: 'cb',
      success: function (data) {
        console.log(data);  
        $.each(data.RESULTS, function(index, city){
          var div1 = $('<div>');
          var b1 = $('<button>');             
          b1.append(city.name);          
          div1.append(b1,'<br>');
          b1.addClass('ink-button');
          b1.attr('id',city.name);         
          $('#content').append(div1);
        });         
      }     
    });
  });
  $('body').on('click', 'button', function(){
    var city = event.target.id;
    var link = "http://api.wunderground.com/api/5b618351269994a6/geolookup/conditions/q/"+city+".json";
    $('#content').empty();
    $.ajax({
      url : link,
      dataType : "jsonp",
      success : function(data) {
      var temp = data.current_observation.temp_c;
      var weather = data.current_observation.weather;
      $('#content').empty();
      var p1 = '<p>Temperature (C): ' + temp + '</p>';
      var p2 = '<p>Weather condition: ' + weather + '</p>';
      $('#content').append(p1,p2);
      }
    });
  });
});
