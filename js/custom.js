//****************** YOUR CUSTOMIZED JAVASCRIPT **********************//
$(function() {
    var output = $('#output'),
        sumWeight = 0;
    //$('#selectlist img').each(function(i, el){
    //        $(this).addClass('img' + i);
    //    });
    $('#selectlist .circle').click(function() {
        var imageClone = $(this).clone()
        output.append(imageClone);
        sumWeight += parseInt( this.id, 10);
        $('#sumcount').text(sumWeight);
    });
    
    output.on('click', '.circle', function() {
        var image = $(this),
            weight = parseInt( this.id, 10 );
        sumWeight -= weight;
        image.remove();
        $('#sumcount').text(sumWeight);
    });
});

var app = angular.module('myApp', []);
 
app.controller('DemoCtrl', function() {
  this.data = [
    { text: 'Ruby' },
    { text: 'Node' },
    { text: 'Go' },
    { text: 'Python' }
  ];
});