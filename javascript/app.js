//array for buttons 
$(document).ready(function () {

    let foods = ["Cats", "Videos-Games", "Anime", "Funny", "Naruto"];
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

     }))
})

