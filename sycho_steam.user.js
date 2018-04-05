// ==UserScript==
// @name         SychO's Steam
// @namespace    http://steamcommunity.com/id/SychO_Droid/
// @update       https://cdn.rawgit.com/SychO9/SychO-Steam/master/sycho_steam.user.js
// @version      2.0
// @author       SychO
// @match        http://steamcommunity.com/*
// @match        https://steamcommunity.com/*
// @grant        none
// @require      https://cdn.jsdelivr.net/npm/js-cookie@2/src/js.cookie.min.js
// @icon         https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/1b/1b63f088abe21ec97d22da9357bb69d1d44b62bd_full.jpg
// ==/UserScript==



(function($) {
    $(document).ready(function(event) {
        $("head").append("<link href='https://cdn.rawgit.com/SychO9/SychO-Steam/master/sycho_steam.css' rel='stylesheet' type='text/css'>");
        // Other Than Custom CSS.
        // Level Progress Edit.
        var xp = $(".profile_xp_block_remaining").text().split(' ');
        xp[0] = xp[0].replace(",", "");
        console.log(xp);
        var badges = xp[0]%100 > 0 ? Math.floor(xp[0]/100)+1 : Math.floor(xp[0]/100);
        $(".profile_xp_block_remaining").attr("style", "text-align:left;");
        $(".profile_xp_block_remaining").append("<span style='text-align:right;float:right;'>"+badges+" Badge"+(badges > 1 ? 's':'')+" to lvl "+xp[5]+"</span>");
        var colorRGB = $(".friendPlayerLevel").css('border-color').replace("r", "").replace("g", "").replace("b", "").replace("(", "").replace(")", "").split(', ');
        console.log(colorRGB);
        var color = rgb2hex(colorRGB);
        console.log(color);
        var col = color.replace("#", ""), style = $(".profile_xp_block_remaining_bar_progress").attr("style");
        if(LightenColor(col, 20) == "ffffff") {
            $(".profile_xp_block_remaining_bar_progress").attr("style", style);
        } else {
            $(".profile_xp_block_remaining_bar_progress").attr("style", style+";background: "+color+";    background: linear-gradient(to right, #"+LightenColor(col, -20)+", #"+LightenColor(col, 20)+");");
        }
        // Function To Lighten The Color.
        function LightenColor(color, percent) {
            var num = parseInt(color,16),
                amt = Math.round(2.55 * percent),
                R = (num >> 16) + amt,
                B = (num >> 8 & 0x00FF) + amt,
                G = (num & 0x0000FF) + amt;

            return (0x1000000 + (R<255?R<1?0:R:255)*0x10000 + (B<255?B<1?0:B:255)*0x100 + (G<255?G<1?0:G:255)).toString(16).slice(1);
        }

        // Global Header Hiding.
        var elm = $("#global_header .content");
        var meCookie = Cookies.get("GlobalH");
        if(meCookie==1) {
            elm.height(0).css("overflow", "hidden");
        } else {
            elm.css("overflow", "visible").height("104px");
        }
        $("#global_header").css("position", "relative");
        $("#global_header").append("<div style='position: absolute;right: 75px;bottom: -30px;line-height: 30px;width: 30px;text-align: center;z-index: 9;background: #171a21;cursor: pointer;font-weight: 700;border-radius: 0 0 4px 4px;' class='hider-glider'>H</div>");
        $(".hider-glider").click(function() {
            Cookies.set("GlobalH", 0, { expires : 10 });
            if(elm.height()==0) {
                Cookies.set("GlobalH", 0, { expires : 10 });
                elm.css("overflow", "visible").height("104px");
            } else {
                Cookies.set("GlobalH", 1, { expires : 10 });
                elm.height(0).css("overflow", "hidden");
            }
        });
    });

    function rgb2hex(rgb){
        //rgb = rgb.match(/^rgb((d+),s*(d+),s*(d+))$/);
        return "#" +
            ("0" + parseInt(rgb[0],10).toString(16)).slice(-2) +
            ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
            ("0" + parseInt(rgb[2],10).toString(16)).slice(-2);
    }

})(jQuery);
