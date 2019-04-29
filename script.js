// c46f84f1e83a472f825752fba49526d4

$(document).ready(function(){

    $("#go").click(function(){

        $("#clear").click(function(){
           $("#news").empty();
        });
        var country= $("#countries").val();
        var topic= $("#topic").val();
        $.ajax({

            url: 'https://newsapi.org/v2/top-headlines?country=' + country+ '&category=' + topic +'&apiKey=c46f84f1e83a472f825752fba49526d4',
            dataType: 'JSON',
            jsonpCallback: 'callback',
            type: 'GET',
            success: news

        });

        function news(data){
            console.log(data);
            var headlines=$("#headlines").val();

            for(var i =0; i < headlines;i++){

                var title=data.articles[i].title;
                var dis=data.articles[i].description;
                var url=data.articles[i].url;
                var str= "  Read the Full Article";
                var link= str.link( url);

                $("#news").append(title+ "<br>");
                $("#news").append("  " + dis + "<br>");
                $("#news").append(link + "<br><br>");


                $("#translate").click(function(data){

                    for(var i=0;i < headlines;i++)
                        var text=data.articles[i].title;
                    var lang=$("#countries").val();
                    $.ajax({
                        url: "https://translate.yandex.net/api/v1.5/tr.json/translate?&key=trnsl.1.1.2" +
                        "0190410T211120Z.1ba9f462610b1621.bac935779dd2eb48263752fa11e08d330a572a71&" +
                        "text="+ text+"&lang=en-"+lang,
                        dataType: "jsonp",
                        method: "GET",
                        success:translate




                    });
                    function translate (data) {
                        console.log(data);

                    }



                })


            }

        }


        })


    });



