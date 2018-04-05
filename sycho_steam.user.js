// ==UserScript==
// @name         SychO's Steam
// @namespace    http://steamcommunity.com/id/SychO_Droid/
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
        'use strict';
        var Style = "body {	font-family: 'Motiva Sans';}"+
"input, textarea, select, button {	font-family: 'Motiva Sans';}"+
"b {    font-weight: 400;}"+
".profile_count_link a:hover .count_link_label {    text-decoration: none;    color: #4288cf;}"+
".profile_topfriends .friendBlock:hover {    background-color: #0000005c;    box-shadow: 0 0 4px black;    border-radius: 3px;}"+
"#NamePopup {font-family: 'Motiva Sans';}"+
            ".badge_row {background: #0d141c;border: none;border-radius: 19px;margin-bottom: 9px;padding: 2px;}"+
".badge_row .badge_title_row {background: #0000002e;border-radius: 19px;padding: 4px 15px;}"+
".badge_row .badge_title_row .badge_title_stats {line-height: normal;}"+
".badge_row:hover {background: #090e13 !important;border: none !important;box-shadow: none !important;transform: scale(1.02);}"+
".badge_row:hover .badge_title_row .badge_title {color: #47abf7;}"+
".badge_title_rule {background: transparent;border: none;}"+
".badge_row_inner {background: transparent;border-radius: 0;}"+
".badge_empty {border: 1px solid #65656500;background: #00000033;}"+
            ".profile_xp_block {border: none;background: #0d141c;}"+
".profile_xp_block_remaining_bar_progress {background: #3eb6f5;background: linear-gradient(to right, #0d5880, #3eb6f5);}"+
".profile_xp_block_remaining_bar {background: #00000082;}"+
            ".imgWallItem:hover {border: 2px solid #97c0e3;background-size: auto;}"+
".imgWallItem {border: 2px solid black;}"+
"div#HeaderUserBreadcrumbs {padding: 4px 2px;border-color: #1b2838;}"+
"div#BG_top_sharedfiles {background: #101822;padding: 0 5px;}"+
"div#HeaderUserAvatar img {margin: 5px 5px 2px 0;border-radius: 2px;}"+
"div#FilterContainer {padding: 3px 0 0;}"+
".sharedfiles_usercontrol_ctn.ellipsis input[type='radio'] {margin: 5px 2px 0;}"+
".sharedfiles_usercontrol_ctn.ellipsis label {display: inline-block;}"+
            ".games_list_tabs {    background: transparent;    border: none;}"+
".games_list_tabs .games_list_tab {    border: none;    box-shadow: none;    background: #ffffff0a;}"+
".games_list_tabs .games_list_tab.active {    background: #0e151d !important;}"+
".games_list_tabs .games_list_tab:hover {    background: #ffffff29;}"+
".games_list_tab_separator {    background: none;}"+
"div#tabcontent_inventory {    border: none;    background: #0e151d;    padding-bottom: 7px;}"+
".context_name {    font-size: 17px;    font-weight: 400;}"+
"div#contextselect {    border: none;    background-color: #00000052;    border-radius: 2px;}"+
"div#contextselect_options_contexts {    background: #090e14;}"+
"#contextselect_options .context_name {    border-color: #0e161f;    cursor: pointer;}"+
"#contextselect_options .context_name:last-child {    border: none;}"+
"#contextselect_options .context_name:hover {    background: #00000085;}"+
            "div#active_inventory_page {    background: #090e14;}"+
"div#inventories {    border: none;    background: transparent;}"+
".trade_item_box .item {    border: none;    padding: 0px;    background: #0e151d;    border: 2px solid #ffffff08;}"+
".trade_item_box .item.activeInfo {    background: #1b2838;}"+
".trade_item_box .item:hover {    background: #1b2838;}"+
".itemHolder {    background: transparent;}"+
".inventory_iteminfo {    border: 2px solid #ffffff14;}"+
".item_desc_content {background: #0e151d !important;}"+
".fraud_warning_box {    border: none;    background: #ff000030;    padding: 7px 7px;    font-size: 12px;    border-radius: 2px;}"+
".fraud_warning_box img {    width: 11px !important;    vertical-align: middle;}"+
".item_market_actions {    background: #00000029;}"+
".item_scrap_actions {    background: #ffffff17;}"+
            ".item_desc_icon_center {    margin: 0 auto;    width: 100%;}"+
".item_desc_icon {    display: table;    width: 95%;}"+
            ".filter_ctn.inventory_filters #filter_control {    border: none;    box-shadow: none;    padding: 7px 9px;    color: #aeaeae;    background: #090e14;    font-size: 13px;}"+
        "badge_gamecard_page {    box-shadow: none;}"+
".badge_gamecard_page {    box-shadow: none !important;    background: #0d141c !important;    border: none;    border-radius: 19px;    margin-bottom: 9px;    padding: 2px;}"+
".badge_gamecard_page.badge_row:hover {    transform: scale(1) !important;}"+
".badge_detail_tasks {    background: #00000045;}"+
".game_card_unowned_border {    border: none;}"+
".badge_card_set_card.unowned img.gamecard {    opacity: 0.6;    filter: grayscale(1);}"+
".badge_card_set_text_qty {    color: #9e9e9e;}"+
            ".gamecard_details .badge_info {    border: none;    background: #0000004a;    padding: 3px 0 3px 12px;}"+
            ".badge_progress_card.unowned {    border: none;}"+
".badge_progress_card.unowned img {    opacity: 0.3;    filter: grayscale(1);}"+
            ".steam_card_ex {    clear: both;}"+
".steam_card_ex a {    z-index: 4;position: relative;padding: 5px 11px;    background: #00000075;    display: inline-block;    color: #a8a8a8;    border-radius: 3px;        margin: 10px 2px 0;}"+
".steam_card_ex a:hover {    background: #08306c;    color: white;}"+
            ".profile_subpage_general .maincontent {    border: none;    box-shadow: none;    background: #00000080;}"+
".tradeoffer_items_ctn {    border: 2px solid #ffffff0f;    background: #1b2838;}"+
".tradeoffer_items_banner {    box-shadow: none;    margin: -12px -11px 12px -11px;    background: #56565670;}"+
".rightcol_controls {    background: #1b2838;}"+
".rightcol_controls_rule {    background: #0d141c;    border: none;}"+
            ".alertbox_header {    background: #5c7e10;    border-radius: 2px 2px 0 0;    font-size: 13px;    font-weight: 400;}"+
".alertbox_header .leftcap,.alertbox_header .rightcap {    background: transparent;}"+
".alertbox_content {    border: 2px solid #5c7e10;    border-top: none;    box-shadow: none;    background: #00000045;}"+
"a.newitem {    background: #0e151d;    border: 2px solid #ffffff1a;}"+
"a.newitem:hover {    border: 2px solid #ffffff1f;    background: #ffffff0f;}"+
            ".blotter_block {    box-shadow: none;    padding: 4px;    background: #0000002e;    border-radius: 2px;}"+
".blotter_daily_rollup {    background: #0000001f;}"+
".commentthread_entry_quotebox {    border: none !important;    padding: 8px 13px !important;    border-radius: 2px !important;}"+
            ".profile_header_badge {    border: none;    box-shadow: inset 0 0 4px #000000b8;    background: #0000006b;}"+
            "#rightContents .box {    border: none;    background: #00000069;}"+
".review_box .header {    border: none;    border-bottom: 1px solid #1b2838;}"+
".review_box {    border: none;    background: #0000006b;}"+
".review_box .hr {    background: #1b2838;}"+
            ".tradeoffer_welcome_ctn {    background: #00000033;}"+
".trade_offers_escrow_explanation {    background-color: #00000033;    margin-left: 0;    font-weight: 300;    line-height: 22px;    border-radius: 2px;    overflow: hidden;}"+
".trade_offers_escrow_explanation .subtitle {    color: #ffffffa3;}"+
            ".trade_offers_escrow_explanation .title {text-transform: capitalize;}"+
            ".newmodal_header_border {      border-bottom: none;}"+
".newmodal_content_border {    background: transparent;    padding: 0;}"+
".newmodal_header {    background: #161b20;    background-image: none;}"+
".newmodal_content {    background: #232b34e3;}"+
".card_drop_info_subarea {    border: none;    background: #0000004a;}"+
            ".badge_progress_card {margin: 0 4px;}";
        $("head").append("<style>"+Style+"</style>");
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
