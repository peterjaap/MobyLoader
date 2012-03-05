function loop(){
    setTimeout(function(){
        if(jQuery('.tweet').length>0) {
            jQuery('.js-tweet-text').each(function () {
                jQuery(this).live('click',function() {
                    html = jQuery(this).html();
                    if(html.indexOf('moby.to')>0) {
                        url = jQuery(this).find('a[data-expanded-url]').attr('data-ultimate-url');
                        var datatweetid = jQuery(this).parent().parent().attr('data-tweet-id');
                        jQuery.get(url, function(data) {
                            var mydiv = document.createElement("div");
                            mydiv.innerHTML = data;
                            photoURL = jQuery(mydiv).find('#main_picture').attr('src');
                            jQuery('div[data-tweet-id="'+datatweetid+'"]').find('.js-tweet-text a').html('<img src="'+photoURL+'" class="mobyPic" />');
                        });
                    }
                });
            });
        } else {
            loop();
        }
    }, 1000);
}
loop();