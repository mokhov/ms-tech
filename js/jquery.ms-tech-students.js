$(function(){
    /* Анимация логотипов */
    var isAnimated = false;

    $('.b-students').mouseover(function(){
        if (!isAnimated)
        {
            isAnimated = true;
            setTimeout(function(){
                isAnimated = false;
            });
            var _this = $(this);

            var thisOffset = $(this).offset();
            var hCenter = _this.width() / 2;

            var busySectors = [];


            _this.next('.b-logos').show().find('.b-logos__item').each(function(){
                /*console.log('logos animation + ' + busySectors.length)*/
                var isBusy = true;

                //var curX = (Math.random()*_this.width() + hCenter * 3) / 4;
                //var curY = (Math.random()*_this.height() / 5);
                curX = hCenter;
                curY = _this.height() / 20;

                $(this).css({
                    /* width: 200
                     * width/2: 100
                     * 75-125 */

                    'left': curX + "px",
                    'top' : curY + "px"
                });

                var toX, toY;

                while (isBusy)
                {

                    if (_this.hasClass('b-students_1'))
                    {
                        toX = (Math.random()* 727) - 121;
                        toY = Math.abs((Math.random()* 200) - 50) -  74;
                    }
                    else
                    {
                        toX = (Math.random() * 300) + 50 - 230;
                        toY = Math.abs((Math.random()* 200) - 50) -  40;
                    }

                    isBusy = false;

                    //console.log(busySectors + ":::len:::" + busySectors.length);

                    if (busySectors.length > 0)
                    {
                        for (var i in busySectors)
                        {
                            //console.log(busySectors[i].x + "-" + toX + " && " + busySectors[i].y + "-" + toY);
                            //console.log(Math.abs(busySectors[i].x - toX));
                            if (Math.sqrt((busySectors[i].x - toX) * (busySectors[i].x - toX) + (busySectors[i].y - toY) * (busySectors[i].y - toY)) < 50 || Math.sqrt((toX - curX) * (toX - curX)/10 + (toY - curY) * (toY - curY) * 2) < 70)
                            {
                                isBusy = true;
                                /*continue;*/
                            }

                            //console.log(isBusy);
                        }
                    }
                }

                busySectors.push({'x' : toX, 'y' : toY});

                $(this).animate({
                    left:  toX + "px",
                    top : - toY + "px"
                });
            });
        }
    }).each(function(){
        var $this = $(this);
        $this.after($('.b-logos_base').clone().removeClass('b-logos_base').css({
            'position': 'absolute',
            'width': $this.width() + "px",
            'height': $this.height() + "px",
            'left' : "50%",
            'top' : $this.css("top"),
            'margin-left' : $this.css("margin-left")
        }))
    })

    /* Паралакс */


    $('body').bind('mousemove', function(e){
        // Иначе при потере фокуса зависает
        if (e)
        {
            var center = $('html').width() / 2;

            var mousePositionDiff = e.pageX - center;

            var percentage = (mousePositionDiff / center) * 100;

            $('.b-paralax__background_6').css('left', (50 + percentage / 80) + "%");
            $('.b-paralax__background_5').css('left', (50 - percentage / 80) + "%");
            $('.b-paralax__background_4_1').css('left', (50 - percentage / 60) + "%");
            $('.b-paralax__background_4_2').css('left', (50 + percentage / 60) + "%");
            $('.b-paralax__background_3').css('left', (50 - percentage / 40) + "%");
            $('.b-paralax__background_2').css('left', (50 - percentage / 30) + "%");
            $('.b-paralax__background_1').css('left', (50 - percentage / 20) + "%");
        }
        else
        {
            $('.b-paralax__background').css('left', '50%');
        }
    });
});