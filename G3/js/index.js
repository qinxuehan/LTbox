$(document).ready(function() {
    $(document).scroll(function() {
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        // console.log(scrollTop)
        if (scrollTop > 400 && scrollTop < 500) {
            $("#img21").animate({ top: "-50px", width: "300px", height: "100px" }, "slow");

        }
        if (scrollTop > 500 && scrollTop < 600) {
            $("#img22").animate({ left: "0px", width: "600px", height: "400px" }, "slow");
            $("#content_detail_box2").animate({ right: "100px", width: "300px", height: "450px" }, "slow")
        }
        //2
        if (scrollTop > 900 && scrollTop < 1000) {
            $("#img31").animate({ top: "-50px", width: "280px", height: "100px" }, "slow");

        }
        if (scrollTop > 1000 && scrollTop < 1100) {
            $("#img32").animate({ left: "0px", width: "570px", height: "400px" }, "slow");
            $("#content_detail_box3").animate({ right: "100px", width: "300px", height: "400px" }, "slow")
        }
        //3
        if (scrollTop > 1400 && scrollTop < 1500) {
            $("#img41").animate({ top: "-50px", width: "280px", height: "100px" }, "slow");

        }
        if (scrollTop > 1500 && scrollTop < 1600) {
            $("#img42").animate({ left: "0px", width: "500px", height: "300px" }, "slow");
            $("#content_detail_box4").animate({ right: "100px", width: "300px", height: "200px" }, "slow")
        }
    })
})




$("#reg_btn").on('click', function() {
    $('#reg_mask').css("display", "block");
    $('#reg_box').css("display", "block");
    return false;
})
$("#reg_close").on('click', function() {
    $('#reg_mask').css("display", "none");
    $('#reg_box').css("display", "none");
    return false;
})




$("#login_btn").on('click', function() {
    $('#login_mask').css("display", "block");
    $('#login_box').css("display", "block");
    return false;
})
$("#login_close").on('click', function() {
    $('#login_mask').css("display", "none");
    $('#login_box').css("display", "none");
    return false;
})
$("#exit_btn").click(function() {
    $.ajax({

        url: './clear_session.php',
        type: 'POST',
        dataType: 'json',
        data: { exit_val: 1 },
        success: function(data) {
            if (data.res == 'success') {
                // alert(00);
                window.location.href = ' ';
            }
        }
    })


})
