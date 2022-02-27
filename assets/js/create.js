$('#btn-one').click(function() {
   $('#btn-one').html('<span class="spinner-border spinner-border-sm mr-2" role="status" aria-hidden="true"></span>  Loading...').attr('disabled', true);

  var     data= { 
    "apiKey" : $('input[name="apiKey"]').val() 
    ,"name":$('input[name="name"]').val()
    ,"price":$('input[name="price"]').val()
    ,"number":$('input[name="number"]').val()
  };

  $.ajax({
    type: "POST",
    url: "https://e47wh1jk1b.execute-api.ap-northeast-1.amazonaws.com/prod/create",
    data:JSON.stringify(data),
    dataType : "json",
    contentType: 'application/json',

    success: function(json_data) {   // 200 OK時
      $('#result').html(json_data.paymentUrl);
      $('form').remove();
      $('#resultDiv').show();
  },
  error: function(XMLHttpRequest, textStatus, errorThrown) {         // HTTPエラー時
      alert("Server Error. Please try again later.");
  },
  complete: function() {      // 成功・失敗に関わらず通信が終了した際の処理
    $('#btn-one').html('Click me!').attr('disabled', false);
  }
  })
});

$('.btn-info').click(function() {
    let text = $('#result').text();
    let $textarea = $('<textarea></textarea>');
    $textarea.text(text);
    $(this).append($textarea);
    $textarea.select();
    document.execCommand('copy');
    $textarea.remove();
});