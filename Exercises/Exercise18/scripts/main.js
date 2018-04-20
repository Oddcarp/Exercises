$(document).ready(function () {

    //List Titles
    var appendUrl = 'http://jsonplaceholder.typicode.com/posts?userId=1';

    $.get(appendUrl, function (response) {
        let append = $('#append');
        let newList = [];

        for (i = 0; i < response.length; i++) {
            newList += "<li>Index: " + response[i].id + " Title: " + response[i].title + "</li>";
        }
        append.append(newList);
    });

    //
    var prependUrl = 'http://jsonplaceholder.typicode.com/photos?albumId=1';

    $.get(prependUrl, function (response) {
        let prepend = $('#prepend');
        let newList = [];

        for (i = 0; i < response.length; i++) {
            newList += "<li>Index: " + response[i].id + " Title: " + response[i].title + "</li>";
        }
        prepend.prepend(newList);
    });

});