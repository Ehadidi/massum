// $(window).on("load", function(){
//     $('.loader').fadeOut("slow" , function (){
//         $( '.loader' ).remove();
//     });
// })

document.getElementById("toggle_slide").onclick = function () {
    document.getElementById("nav_bar").classList.toggle('open');
    document.getElementById("nav_layer").classList.toggle('open');
};


document.getElementById("nav_layer").onclick = function () {
    document.getElementById("nav_bar").classList.toggle('open');
    document.getElementById("nav_layer").classList.toggle('open');
};


// var ls = 0;
// $(window).scroll(function (event){
//     var win = $(window).scrollTop();
//     if(win > ls ) {
//         $(".bottom-nav").addClass("bottom-nav_scroll")
//     }else {
//         $(".bottom-nav").removeClass("bottom-nav_scroll")
//     }
//     ls = win
// });

// $(document).ready(function (){$(".flatpickr").flatpickr({dateFormat: "Y-m-d",});})
// $(document).ready(function(){$('.select2').select2();});
// $(document).ready(function(){$(".niceSelect").niceSelect();})
