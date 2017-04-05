(function(){
$('body').html('<table><tr><td id="s1"></td><td id="s2"></td><td id="s3"></td></tr><tr><td id="s4"></td><td id="s5"></td><td id="s6"></td></tr><tr><td id="s7"></td><td id="s8"></td><td id="s9"></td></tr></table>').append('<p id="message"></p>').append('<span id="NG"><a href="#">Нова гра</a></span>')
  $('#message').css({
      marginLeft:910
      , marginTop:400
  })
  $('table').css({
      border: '1px solid black'
      , margin: 'auto'
      , position: 'absolute'
      , left: 800
      , top: 50
  });
  $('td').css({
      border: '1px solid black'
      , textAlign: 'center'
      , width: 100
      , height: 100
      , fontSize: 80
  });
  $('body').prepend('<img id="Xestic" src="X.png"/>')
  $('#Xestic').css({
      position: 'absolute'
      , left: 300
      , top: 100
      , display: 'none'
      
  })
  $('#NG').after('<img id="nolik" src="zero.png"/>')
  $('#nolik').css({
      position: 'absolute'
      , left: 1300
      , top: 50
      , display: 'none'
  })
  $(window).ready(function startGame() {
      var turnX = 'X';
      if (Math.random() < 0.5) {
          turnX = '0';
        $('#nolik').css('display', 'block');
      }else{
        $('#Xestic').css('display', 'block')   
      }
      var winnerTurn = null;
      setMessage('Починає гру ' + turnX);
      $('td').click(function () {
          if (winnerTurn != null) {
              setMessage(winnerTurn + ' Вже переміг!');
          }
          else if ($(this).text() == '') {
              $(this).html(turnX)
              switchTurn();
          }
          else {
              setMessage('Блок вже зайнятий');
          }
      });
      var switchTurn = function () {
          if (checkForWinner(turnX)) {
              alert(turnX + ' Переміг');
              winnerTurn = turnX;
          }
          else if (turnX == 'X') {
              $('#Xestic').css('display', 'none');
              $('#nolik').css('display', 'block');
              turnX = '0';
              setMessage('Черга ' + turnX);
          }
          else {
              $('#Xestic').css('display', 'block');
              $('#nolik').css('display', 'none');
              turnX = 'X';
              setMessage('Черга ' + turnX);
          }
      }
      var checkForWinner = function (move) {
          var result = false;
          if (checkRow(1, 2, 3, move) || checkRow(4, 5, 6, move) || checkRow(7, 8, 9, move) || checkRow(1, 4, 7, move) || checkRow(2, 5, 8, move) || checkRow(3, 6, 9, move) || checkRow(1, 5, 9, move) || checkRow(3, 5, 7, move)) {
              result = true;
          }
          return result;
      }
      var checkRow = function (a, b, c, move) {
          var result = false;
          if (getBox(a) == move && getBox(b) == move && getBox(c) == move) {
              result = true;
          }
          return result;
      }
      var getBox = function (number) {
          return $('#s' + number).text();
      }
      $('#NG').click(function () {
          location.reload();
      }).css({
          marginLeft: 48 + '%'
      })
  });
  var setMessage = function (msg) {
      $('#message').text(msg);
  };
})();
