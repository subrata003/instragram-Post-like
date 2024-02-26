let con=document.querySelector(".container")
let icon=document.querySelector("i")
let lv=document.querySelector(".love")
con.addEventListener("dblclick",function(){
        console.log("hello")
        icon.style.transform="translate(-50% ,-50%) scale(1)"
        icon.style.opacity="0.9"
       lv.style.color="red"
//        lv.style .transition=" 0.2s ease-in-out "
//        lv.style .transform=" scale(1.5) "
        
        setTimeout(function(){
                icon.style.opacity=0;

        },1000)
        setTimeout(function(){
                icon.style.transform="translate(-50% ,-50%) scale(0)"

        },2000)
})
