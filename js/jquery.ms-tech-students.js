$(function(){
    $('.b-students').hover(function(){
        var _this = $(this);

        var thisOffset = $(this).offset();
        var hCenter = _this.width() / 2;

        var busySectors = [];

        _this.find('.b-logos').show().find('.b-logos__item').each(function(){
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
                'top' : curY + "px",
                'opacity': '0'
            });

            var toX, toY;

            while (isBusy)
            {

                toX = (Math.random()*_this.width() * 1.5) - _this.width() / 4;
                toY = Math.abs((Math.random()*_this.height() / 4) - _this.height() / 6) - _this.height() / 10;

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
                top : - toY + "px",
                opacity: 1
            })
        });
    }, function(){}).each(function(){
        $(this).append($('.b-logos_base').clone().removeClass('b-logos_base'))
    })
});