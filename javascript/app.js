//array for buttons 
$(document).ready(function () {

    let gifs = ["Cats", "Videos-Games", "Anime", "Funny", "Naruto"];
    //function to make buttons appear on page 

    function makebuttons(arrayToUse, classToAdd, AreaToAddTo) {
        $(areaToAddTo).empty();
        for (let i = 0; i < arrayToUse.legth; i++) {
            let a = $("<button>");
            a.addClass(classToAdd);
            a.attr("data-type", arrayToUse[i]);
            a.text(arrayToUse[i]);
            $(AreaToAddTo).append(a);

        }
     }
     //function that will make images from giphy
     $(document.onabort("click", "gif-button",function (){
        $("#images").empty();

        $(".gif-button").removeClass("active");
        $(this).addClass("active");

        let type = $(this).attr("data-type");
        let queryURL = "http://api.giphy.com/v1/gifs/search?q=" + type + "&api_key=Zfkrwy1fghnslb0eaoIpCAEVYsIEZz8G";

        //ajax call

        $.ajax({
            url:queryURL,
            method: "GET".
        })
        .
     }))
})

