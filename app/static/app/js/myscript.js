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
    // console.log("Plus Clicked")
    var id = $(this).attr("pid").toString();
    var eml = this.parentNode.children[2]
    // console.log(id)
    $.ajax({
        type:"GET",
        url: "/pluscart",
        data: {
            prod_id : id
        },
        success: function(data){
            // console.log(data)
            // console.log("Success")
            eml.innerText = data.quantity
            document.getElementById("amount").innerText = data.amount
            document.getElementById("totalamount").innerText = data.totalamount
        }   
    })
})

$('.minus-cart').click(function(){
    // console.log("Plus Clicked")
    var id = $(this).attr("pid").toString();
    var eml = this.parentNode.children[2]
    // console.log(id)
    $.ajax({
        type:"GET",
        url: "/minuscart",
        data: {
            prod_id : id
        },
        success: function(data){
            // console.log(data)
            // console.log("Success")
            eml.innerText = data.quantity
            document.getElementById("amount").innerText = data.amount
            document.getElementById("totalamount").innerText = data.totalamount
        }   
    })
})

$('.remove-cart').click(function(){
    // console.log("Plus Clicked")
    var id = $(this).attr("pid").toString();
    var eml = this
    // console.log(id)
    $.ajax({
        type:"GET",
        url: "/removecart",
        data: {
            prod_id : id
        },
        success: function(data){
            // console.log(data)
            // console.log("Success")
            document.getElementById("amount").innerText = data.amount
            document.getElementById("totalamount").innerText = data.totalamount
            eml.parentNode.parentNode.parentNode.parentNode.remove()
        }   
    })
})
