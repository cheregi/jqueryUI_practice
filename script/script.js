$(function () {
    /****************************************************** scroll magic **********************************************/
    let controller = new ScrollMagic.Controller();

    let scene1 = new ScrollMagic.Scene({
        triggerElement: '#trigger1', // starting scene, when reaching this element

    })
        .setTween("#animate1", 0.5, { backgroundColor: "#BDC581", scale: 2.5 })
        // .setIndicators({ name: "1 (duration:0)" })
        .addTo(controller);

    let scene2 = new ScrollMagic.Scene({
        triggerElement: "#trigger2", duration: 300
    })
        .setTween("#animate2", { borderTop: "30px solid #BDC581", backgroundColor: "#82589F", scale: 2.7 })
        // .setIndicators({ name: "2 (duration:300)" })
        .addTo(controller);

    /****************************************************** carousel **********************************************/

    $('[data-jcarousel]').each(function () {
        var el = $(this);
        el.jcarousel(el.data());
    });
    $('[data-jcarousel-control]').each(function () {
        var el = $(this);

        el.jcarouselControl(el.data());

        /************************************************* rotate ****************/
        // // build tween
        // let tween = TweenMax.to("#target3", 1, { rotation: 360, ease: Linear.easeNone });
        // // build scene
        // let scene = new ScrollMagic.Scene({
        //     triggerElement: "#trigger3", duration: 300
        // })
        //     .setTween(tween)
        //     .setPin("#target3", { pushFollowers: false })
        //     // .addIndicators() // add indicators (requires plugin)
        //     .addTo(controller);
    });


    /************************************************* draggable ****************/

    $("#draggable").draggable();
    $("#droppable").droppable({
        drop: function (event, ui) {
            $(this)
                .addClass("ui-state-highlight")
                .find("p")
                .html("Dropped!");
        }
    });
    /************************************************* Color Animation ****************/
    var state = true;
    $("#button").on("click", function () {
        if (state) {
            $("#effect").animate({
                backgroundColor: "#BDC581",
                color: "#fff",
                width: 500
            }, 1000);
        } else {
            $("#effect").animate({
                backgroundColor: "#82589F",
                color: "#000",
                width: 240
            }, 1000);
        }
        state = !state;
    });






})