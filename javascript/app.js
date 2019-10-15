//array for buttons 
$(document).ready(function () {

    let gifs = [];
    //function to make buttons appear on page 

    function populateButtons(arrayToUse, classToAdd, areaToAddTo) {
        $(areaToAddTo).empty();
        for (let i = 0; i < arrayToUse.length; i++) {
            let a = $("<button>");
            a.addClass(classToAdd);
            a.attr("data-type", arrayToUse[i]);
            a.text(arrayToUse[i]);
            $(areaToAddTo).append(a);

        }
    }
    //function that will make images from giphy
    $(document).on("click", ".gif-button", function () {
        $("#images").empty();

        $(".gif-button").removeClass("active");
        $(this).addClass("active");

        let type = $(this).attr("data-type");
        let queryURL = "https://api.giphy.com/v1/gifs/search?q=" + type + "&api_key=Zfkrwy1fghnslb0eaoIpCAEVYsIEZz8G&limit=50";

        //ajax call

        $.ajax({
            url:queryURL,
            method: "GET"
        })
            .then(function (response) {
                let results = response.data;

                for (var i = 0; i < results.length; i++) {
                    let gifDiv = $("<div class=\"gif-item\">");

                    let rating = results[i].rating;

                    let p = $("<p>").text("Rating: " + rating);

                    let animated = results[i].images.fixed_height.url;
                    let still = results[i].images.fixed_height_still.url;

                    let gifImage = $("<img>");
                    gifImage.attr("src", still);
                    gifImage.attr("data-still", still);
                    gifImage.attr("data-animate", animated);
                    gifImage.attr("data-state", "still");
                    gifImage.addClass("gif-image");

                    gifDiv.append(p);
                    gifDiv.append(gifImage);

                    $("#images").append(gifDiv);
                }
            });
    });
    // Make Gifs move and stop
    $(document).on("click", ".gif-image", function () {
        let state = $(this).attr("data-state");

        if (state === "still") {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
        }
        else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");

        }

    });

    $("#add-gif").on("click", function (event) {
        event.preventDefault();
        let newGif = $("input").eq(0).val();

        if (newGif.length > 2) {
            gifs.push(newGif);
        }

        populateButtons(gifs, "gif-button", "#gif-buttons");
    });
    populateButtons(gifs, "gif-button", "#gif-buttons");
})

