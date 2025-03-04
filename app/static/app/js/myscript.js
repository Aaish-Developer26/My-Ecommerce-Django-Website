$('#slider1, #slider2, #slider3').owlCarousel({
    loop: true,
    margin: 20,
    responsiveClass: true,
    center: true,  // ✅ Ensures the active item stays in the center
    responsive: {
        0: {
            items: 1,
            nav: false,
            autoplay: true,
            center: true  // ✅ Ensures centering on small screens
        },
        600: {
            items: 3,
            nav: true,
            autoplay: true,
            center: true  // ✅ Ensures centering on medium screens
        },
        1000: {
            items: 5,
            nav: true,
            loop: true,
            autoplay: true,
            center: true  // ✅ Ensures centering on large screens
        }
    }
})

$('.plus-cart').click(function(){
    console.log("Plus Clicked")
    var id = $(this).attr("pid").toString();
    // console.log(id)
    $.ajax({
        type:"GET",
        url: "/pluscart",
        data: {
            prod_id : id
        },
        success: function(data){
            console.log(data)
            console.log("Success")
        }   
    })
})
