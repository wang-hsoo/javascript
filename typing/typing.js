$(window).ready(function() {
    const ttt = document.querySelector(".ttt");
    var typingCheck = false;
    var typingIdx = 0;
    var typingTxt = $(".typing").text();

    if(typingCheck == false){
        typingCheck = true;

        var tyInt = setInterval(typing,100);
    }

    function typing(){
        if(typingIdx < typingTxt.length){
            ttt.append(typingTxt[typingIdx]);
            typingIdx++
        }else{
            clearInterval(tyInt);
        }
    }
});

$(window).ready(function() {
    var typingBool = false; 
    var typingIdx=0; 
    var liIndex = 0;
    var liLength = $(".typing-txt>ul>li").length;
    var del = -1;
    var tyInt = null;

    var typingTxt = $(".typing-txt>ul>li").eq(liIndex).text(); 
    

    if(typingBool == false){
        typingBool=true; 
        tyInt = setInterval(typing,200);
    }

    function typing(){
        if(typingIdx < typingTxt.length){
            $(".typing2").append(typingTxt[typingIdx]); 
            typingIdx++;
            if(typingIdx  == typingTxt.length){
                clearInterval(tyInt);
                setTimeout(function(){
                    tyInt = setInterval(typing,200);
                }, 1000);
            }
        }else{
            if(-typingTxt.length-1 < del){
                $(".typing2").html(typingTxt.slice(0, del))
                del--;
            }else{
                if(liIndex >= liLength - 1){
                    liIndex = 0;
                }else{
                    liIndex++;
                }
                typingIdx=0;
                del= -1;
                typingTxt = $(".typing-txt>ul>li").eq(liIndex).text(); 

                clearInterval(tyInt);
                setTimeout(function(){
                tyInt = setInterval(typing,200);
                },1000);

            }
        }
    }
});
