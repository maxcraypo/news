// c46f84f1e83a472f825752fba49526d4

$(document).ready(function(){

    $("#go").click(function(){

        // $.ajax({
        //     url:'https://newsapi.org/v2/top-headlines?country=us&apiKey=c46f84f1e83a472f825752fba49526d4',
        //     dataType:"jsonp",
        //     type: "GET",
        //     success:news
        // });


        $.ajax({
            url: 'https://newsapi.org/v2/top-headlines?country=us&apiKey=c46f84f1e83a472f825752fba49526d4',
            dataType: 'JSON',
            jsonpCallback: 'callback',
            type: 'GET',
            success: function (data) {
                console.log(data);
                var headlines=$("#headlines").val();
                for(var i =0; i < headlines;i++){
                    var author=data.list[i].author;
                    console.log(author);

                }

            }
        });


    });




});