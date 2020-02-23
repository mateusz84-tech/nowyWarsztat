$(function () {

    // // zadanie 1
    // var currentData = $(".current-date");
    //
    // var DATE_API = "http://date.jsontest.com";
    //
    // function fetchDate() {
    //     $.ajax({
    //         url:DATE_API,
    //         type: "GET"
    //     }).done(function (result) {
    //         console.log(result);
    //         currentData.text(result.time + ", " + result.date);
    //     })
    // }
    // fetchDate();
    //
    // // Zadanie 2
    // var starWarsContainer = $(".star-wars");
    // var STARWARS_API = "https://swapi.co/api";
    //
    // function fetchStarsWars() {
    //     $.ajax({
    //         url: STARWARS_API + "/people/4",
    //         type: "GET"
    //     }).done(function (result) {
    //         renderPerson(result);
    //     })
    // }
    // fetchStarsWars();
    //
    // function renderPerson(person) {
    //     var name = $("<strong>").text(person.name);
    //     var height = $("<div>").text(person.height + "cm");
    //
    //     starWarsContainer.append(name,height);
    // }

    // ========= ZADANIE 3 =============

    var container = $(".title");
    var BOOKS_API = "http://localhost:8282";

    function fetchBooks(){
        $.ajax({
            url: BOOKS_API + "/books",
            type: "GET"
            // result zwraca tablice obiektów
        }).done(function (result) {

            readBooks(result);
        })
    }

    fetchBooks();

    function readBooks(books){
        books.forEach(function (element) {
            var title = $("<div>").text(element.title);
            // utworzenie nowego diva
            var newDiv = $("<div>");
            // dodanie tytułu
            newDiv.appendTo(title);
            container.append(title);
        })
    }

});

