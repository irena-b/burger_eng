//console.log('order.js');
//console.log($); //проверяем подключился файл джейквери или нет

$('#order-form').on('submit', submitForm); //обращаемся к форме и навешиваем обработчик событий именно на сабмит а не на клик

function submitForm(ev) {
    //console.log('in submitForm');
    ev.preventDefault();


//нам нужно вытащить данные из формы 

var form = $(ev.target), //в событии ev содержится много всяких данных
    data = form.serialize(), //мы вытаскиваем все данные формы и закодировал все данные для сервера
    url = form.attr('action'); //вытащили наш урл server.php из атрибута action

console.log(form);
console.log(data);
console.log(url);

var request = $.ajax({ //эта функция уже берет результат запроса и помещает в реквест
    type: 'POST',
    dataType: 'JSON',
    url: url,
    data: data
});
request.done(function(msg){ //обрабатываем успех
    var mes = msg.mes,
        status = msg.status;
        
        if (status === 'OK') {
            form.append('<p class="success">' + mes + '</p>');
        } else{
            form.append('<p class="error">' + mes + '</p>');
        }
    
});
request.fail(function(jqXHR, textStatus){ //обрабатываем fail
    alert("Request failed:" +textStatus);
});
};