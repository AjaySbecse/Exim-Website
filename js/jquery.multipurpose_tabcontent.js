! function(t) {
    t.fn.extend({
        champ: function(a) {
            var s = {
                    selector: "tab_wrapper",
                    plugin_type: "tab",
                    side: "",
                    active_tab: "1",
                    controllers: "false",
                    ajax: "false",
                    show_ajax_content_in_tab: "false",
                    content_path: "false"
                },
                e = t.extend(s, a),
                i = 1,
                n = 1;
            return this.each(function() {
                function a(a) {
                    a.find(" >ul li:eq(0)").hasClass("active") ? t(".controller .previous", a).hide() : t(".controller .previous", a).show(), a.find(" >ul li").last().hasClass("active") ? t(".controller .next", a).hide() : t(".controller .next", a).show()
                }
                var s, l = e.plugin_type,
                    c = e.side,
                    r = e.active_tab,
                    o = e.controllers,
                    d = e.ajax,
                    v = e.show_ajax_content_in_tab,
                    h = e.content_path,
                    _ = t(this).find(" > div > div.tab_content"),
                    f = t(this).find(" >ul li"),
                    u = t(this),
                    p = t(".controller").closest(".tab_wrapper");
                u.addClass(c + "_side"), "true" == o && (u.addClass("withControls"), u.append("<div class='controller'><span class='previous'>previous</span><span class='next'>next</span></div>")), "accordion" == l && (u.addClass("accordion"), u.removeClass(c + "_side"), u.removeClass("withControls"), t(".controller", u).remove()), "true" == d && (t.ajax({
                    url: h,
                    success: function(a) {
                        t(" .tab_content.tab_" + v, u).html(a)
                    }
                }), t(document).ajaxError(function(a, s, e) {
                    t(" .tab_content.tab_" + v, u).prepend("<h4 class='error'>Error requesting page " + e.url + "</h2>")
                })), t(".controller .previous", t(this)).click(function() {
                    s = t(this).closest(".controller"), s.siblings("ul").find("li.active").prev().trigger("click"), a(p)
                }), t(".controller .next", t(this)).click(function() {
                    s = t(this).closest(".controller"), s.siblings("ul").find("li.active").next().trigger("click"), a(p)
                }), t(this).find(" >ul li").removeClass("active"), t(this).find(" > div > div.tab_content").removeClass("active"), "" == r ? (t(this).find(" >ul li:eq(0)").addClass("active").show(), t(this).find(" > div > div.tab_content:eq(0)").addClass("active").show(), a(u)) : (t(this).find(" >ul li:eq(" + (r - 1) + ")").addClass("active").show(), t(this).find(" > div > div.tab_content:eq(" + (r - 1) + ")").addClass("active").show(), a(u)), _.first().addClass("first"), _.last().addClass("last"), _.each(function() {
                    var a = "tab_" + n;
                    t(this).addClass(a), t(this).attr("title", a), n++
                }), f.each(function() {
                    var a = t(this).text(),
                        s = "tab_" + i,
                        e = t(this).closest(".tab_wrapper");
                    t(this).attr("rel", s);
                    var n = t(this).attr("class");
                    _.each(function() {
                        t(this).hasClass(s) && e.find(" > div > div.tab_content." + s).before("<div title='" + s + "' class='accordian_header " + s + " " + n + "'>" + a + "<span class='arrow'></span></div>")
                    }), i++
                }), t(".accordian_header").click(function() {
                    var a = t(this).attr("title"),
                        s = t(this).next(".tab_content").css("display"),
                        e = t(this).closest(".tab_wrapper");
                    "none" == s && (t(".accordian_header").removeClass("active"), t(this).addClass("active"), _.removeClass("active").slideUp(), e.find(" > div > div.tab_content." + a).addClass("active").slideDown())
                }), f.click(function() {
                    var s = t(this).attr("rel"),
                        e = t(this).closest(".tab_wrapper");
                    e.find(" .accordian_header").removeClass("active"), e.find(" .accordian_header." + s).addClass("active"), _.removeClass("active").hide(), e.find(" > div > div.tab_content." + s).addClass("active").show(), f.removeClass("active"), t(this).addClass("active"), a(e)
                })
            })
        }
    })
}(jQuery);