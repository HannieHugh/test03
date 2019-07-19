var test = document.getElementById('test');
var bt = document.getElementById('bt');

bt.onclick = function () {
  debugger;
  var value = document.getElementById('username').value;
  $.ajax({
    'url':'http://127.0.0.1:8124/getZmkInfo',
    'method':'POST',
    'data':value,
    'async':true,
    'dataType':'JSON',
    'success':function (data) {
      console.log(data)
    }
  });
  /*  var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange=function()
    {
      if (xmlHttp.readyState==4 && xmlHttp.status==200)
      {
        test.innerHTML = xmlHttp.responseText;
      }
    };

    xmlHttp.open('POST', 'http://127.0.0.1:3000/', true);
    xmlHttp.send(value);      //把input框中的value发送过去*/
};
