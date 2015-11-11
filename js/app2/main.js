// Date : 06/11/2015.
// Dev : Sechaba Mothobi.
// Discription : Use Javascript to manupulate site utalizing mordanizer plugin.

if (!window.getComputedStyle) {
    window.getComputedStyle = function(el, pseudo) {
        this.el = el;
        this.getPropertyValue = function(prop) {
            var re = /(\-([a-z]){1})/g;
            if (prop == 'float') prop = 'styleFloat';
            if (re.test(prop)) {
                prop = prop.replace(re, function() {
                    return arguments[2].toUpperCase();
                });
            }
            return el.currentStyle[prop] ? el.currentStyle[prop] : null;
        }
        return this;
    }
}

// Collapse nav 
jQuery(document).ready(function($) {
    $('span.nav-icon').click(function() {
        $('#container').toggleClass('navactive');
    });

// Collapse nav 
    $('#navigation .nav li a').click(function() {
        $('#container').removeClass('navactive');
    });

// Move in fact sheet
    var responsive_viewport = $(window).width();
    if (responsive_viewport < 481) {}
    if (responsive_viewport >= 768) {
        $('.comment img[data-gravatar]').each(function() {
            $(this).attr('src', $(this).attr('data-gravatar'));
        });
        $(window).resize(function() {
            location.href = location.href;
        });
        if (Modernizr.touch) {
            $("#content-wrapper").addClass("scrollContainer");
            var controller = new ScrollMagic({
                container: "#content-wrapper"
            });

            var tabletwindow = $("#content-wrapper");
            $(document).on("click", "a[href^=#about]", function(e) {
                e.preventDefault();
                setTimeout(function() {
                    TweenMax.to(tabletwindow, 2.5, {
                        scrollTo: {
                            y: 999,
                            autoKill: false
                        }
                    });
                }, 300);
            });

            $(document).on("click", "a[href^=#comic-char]", function(e) {
                e.preventDefault();
                setTimeout(function() {
                    TweenMax.to(tabletwindow, 2.5, {
                        scrollTo: {
                            y: 2250,
                            autoKill: false
                        }
                    });
                }, 300);
            });
            
            
            $(document).on("click", "a[href^=#contributions]", function(e) {
                e.preventDefault();
                setTimeout(function() {
                    TweenMax.to(tabletwindow, 2.5, {
                        scrollTo: {
                            y: 6700,
                            autoKill: false
                        }
                    });
                }, 300);
            });
            
            $(document).on("click", "a[href^=#contact]", function(e) {
                e.preventDefault();
                setTimeout(function() {
                    TweenMax.to(tabletwindow, 2.5, {
                        scrollTo: {
                            y: 9200,
                            autoKill: false
                        }
                    });
                }, 300);
            });
        } else {
            var controller = new ScrollMagic();
            $(document).on("click", "a[href^=#about]", function(e) {
                e.preventDefault();
                setTimeout(function() {
                    TweenMax.to(window, 2.5, {
                        scrollTo: {
                            y: 999,
                            autoKill: false
                        }
                    });
                }, 300);
            });
            $(document).on("click", "a[href^=#comic-char]", function(e) {
                e.preventDefault();
                setTimeout(function() {
                    TweenMax.to(window, 2.5, {
                        scrollTo: {
                            y: 2250,
                            autoKill: false
                        }
                    });
                }, 300);
            });
            
            
            $(document).on("click", "a[href^=#contributions]", function(e) {
                e.preventDefault();
                setTimeout(function() {
                    TweenMax.to(window, 2.5, {
                        scrollTo: {
                            y: 6700,
                            autoKill: false
                        }
                    });
                }, 300);
            });
            
            $(document).on("click", "a[href^=#contact]", function(e) {
                e.preventDefault();
                setTimeout(function() {
                    TweenMax.to(window, 2.5, {
                        scrollTo: {
                            y: 9200,
                            autoKill: false
                        }
                    });
                }, 300);
            });
        }
        var w = $(window).width();
        $("#pin-inner section.scroll-section").width(w);
        $("#pin-inner2 section.scroll-section").width(w);
        var pininner = w + w + 2670;
        $("#pin-inner").width(pininner);
        $("#pin-inner2").width(pininner);
        var leftpin = w + 2670;
        var leftpinpx = '-' + leftpin + 'px';


        new ScrollScene({
            triggerElement: "span.pin-trigger",
            duration: 870,
            offset: 1800
        }).addTo(controller).on("progress", function(e) {
            var factcount2 = (Math.floor(Math.random() * 35) + 1);
            $("#appliance-rework h4.fact-value").text(factcount2);
        }).on("end", function(e) {
            $("#appliance-rework h4.fact-value").text("36");
        });

        new ScrollScene({
            triggerElement: "span.pin-trigger2",
            duration: 500,
            offset: -650
        }).addTo(controller).on("progress", function(e) {
            var factcount3 = (Math.floor(Math.random() * 51) + 1);
            $("#product-evaluation h4.fact-value").text(factcount3);
        }).on("end", function(e) {
            $("#product-evaluation h4.fact-value").text("52");
        });


        new ScrollScene({
            triggerElement: "span.pin-trigger2",
            duration: 940,
            offset: 650
        }).addTo(controller).on("progress", function(e) {
            var factcount4 = (Math.floor(Math.random() * 199999) + 1);
            $("#contributions h4.fact-value").text(factcount4);
        }).on("end", function(e) {
            $("#contributions h4.fact-value").text("200000");
        });


        new ScrollScene({
            triggerElement: "span.pin-trigger2",
            duration: 870,
            offset: 2000
        }).addTo(controller).on("progress", function(e) {
            var factcount5 = (Math.floor(Math.random() * 31200) + 1);
            $("#maintenance-contracts h4.fact-value").text(factcount5);
        }).on("end", function(e) {
            $("#maintenance-contracts h4.fact-value").html("31<span>,</span>200");
        });
        var moveleft = TweenMax.to("#pin-inner", 1, {
            left: leftpinpx,
            ease: Sine.easeInOut
        });
        new ScrollScene({
            triggerElement: "span.pin-trigger",
            duration: 3200
        }).addTo(controller).setPin("#pin-outer").setTween(moveleft);
        var moveleft2 = TweenMax.to("#pin-inner2", 1, {
            left: leftpinpx,
            ease: Sine.easeInOut
        });
        new ScrollScene({
            triggerElement: "span.pin-trigger2",
            duration: 3200
        }).addTo(controller).setPin("#pin-outer2").setTween(moveleft2);
        var logomove = TweenMax.to("#logo-list", 1, {
            left: "-2200px",
            ease: Linear.easeNone
        });
        new ScrollScene({
            triggerElement: "span.pin-trigger2",
            duration: 2600,
            offset: 300
        }).addTo(controller).setTween(logomove);
        var elements = $(".product-box p");
        new ScrollScene({
            triggerElement: "span.pin-trigger",
            duration: 250,
            offset: 1100
        }).addTo(controller).setTween(TweenMax.from(elements[0], 1, {
            height: "0px",
            ease: Quad.easeOut
        }));
        new ScrollScene({
            triggerElement: "span.pin-trigger",
            duration: 250,
            offset: 1250
        }).addTo(controller).setTween(TweenMax.from(elements[1], 1, {
            height: "0px",
            ease: Quad.easeOut
        }));
        new ScrollScene({
            triggerElement: "span.pin-trigger",
            duration: 250,
            offset: 1400
        }).addTo(controller).setTween(TweenMax.from(elements[2], 1, {
            height: "0px",
            ease: Quad.easeOut
        }));
        new ScrollScene({
            triggerElement: "span.pin-trigger",
            duration: 250,
            offset: 1550
        }).addTo(controller).setTween(TweenMax.from(elements[3], 1, {
            height: "0px",
            ease: Quad.easeOut
        }));
        new ScrollScene({
            triggerElement: "span.pin-trigger",
            duration: 250,
            offset: 1700
        }).addTo(controller).setTween(TweenMax.from(elements[4], 1, {
            height: "0px",
            ease: Quad.easeOut
        }));
        new ScrollScene({
            triggerElement: "span.pin-trigger",
            duration: 250,
            offset: 1850
        }).addTo(controller).setTween(TweenMax.from(elements[5], 1, {
            height: "0px",
            ease: Quad.easeOut
        }));
        var testimonials = $(".scroll-section .testimonial");
        new ScrollScene({
            triggerElement: "span.pin-trigger",
            offset: -100
        }).addTo(controller).setTween(TweenMax.from(testimonials[0], 1, {
            autoAlpha: 0,
            marginLeft: "80",
            ease: Expo.easeOut
        }));
        new ScrollScene({
            triggerElement: "span.pin-trigger",
            offset: 3060
        }).addTo(controller).setTween(TweenMax.from(testimonials[1], 1, {
            autoAlpha: 0,
            marginLeft: "80",
            ease: Expo.easeInOut
        }));
        new ScrollScene({
            triggerElement: "span.pin-trigger2",
            offset: -100
        }).addTo(controller).setTween(TweenMax.from(testimonials[2], 1, {
            autoAlpha: 0,
            marginLeft: "80",
            ease: Expo.easeOut
        }));
        new ScrollScene({
            triggerElement: "span.pin-trigger2",
            offset: 1550
        }).addTo(controller).setTween(TweenMax.from(testimonials[3], 1, {
            autoAlpha: 0,
            marginLeft: "80",
            ease: Expo.easeInOut
        }));
        new ScrollScene({
            triggerElement: "span.pin-trigger2",
            offset: 3130
        }).addTo(controller).setTween(TweenMax.from(testimonials[4], 1, {
            autoAlpha: 0,
            marginLeft: "80",
            ease: Expo.easeInOut
        }));
        var fadeOptions = {
            duration: 500,
            offset: -550
        };
        var latefadeOptions = {
            duration: 700,
            offset: 2600
        };
        var fadeinitial = $("div.bg1");
        var fade1 = $("div.bg1-fade");
        var fade2 = $("div.bg2");
        var fade3 = $("div.bg2-fade");
        var fade4 = $("div.bg3");
        var fade5 = $("div.bg3-fade");
        setTimeout(function() {
            TweenMax.to(fadeinitial, 2.2, {
                autoAlpha: 1
            });
        }, 1900);
        new ScrollScene(fadeOptions).addTo(controller).triggerElement("span.pin-trigger").setTween(TweenMax.from(fade1, 1, {
            autoAlpha: 0
        }));
        new ScrollScene(latefadeOptions).addTo(controller).triggerElement("span.pin-trigger").setTween(TweenMax.from(fade2, 1, {
            autoAlpha: 0
        }));
        new ScrollScene(fadeOptions).addTo(controller).triggerElement("span.pin-trigger2").setTween(TweenMax.from(fade3, 1, {
            autoAlpha: 0
        }));
        new ScrollScene(latefadeOptions).addTo(controller).triggerElement("span.pin-trigger2").setTween(TweenMax.from(fade4, 1, {
            autoAlpha: 0
        }));
        new ScrollScene(fadeOptions).addTo(controller).triggerElement("#contact li#field_1_4").setTween(TweenMax.from(fade5, 1, {
            autoAlpha: 0
        }));
    }
    if (responsive_viewport <= 767) {
        $(document).on("click", "a[href^=#]", function(e) {
            var
                id = $(this).attr("href"),
                $elem = $(id);
            if ($elem.length > 0) {
                e.preventDefault();
                setTimeout(function() {
                    TweenMax.to(window, 1.5, {
                        scrollTo: {
                            y: $elem.offset().top
                        }
                    });
                    if (window.history && window.history.pushState) {
                        history.pushState("", document.title, id);
                    }
                }, 300);
            }
        });
        $(function() {
            $(window).on("resize", function() {
                var windowsize = $(this).width();
                if (windowsize >= 768) {
                    location.href = location.href;
                }
            });
        });
    }
});
/* A fix for the iOS orientationchange zoom bug.
 Script by @scottjehl, rebound by @wilto.
 MIT License.
*/
(function(w) {
    if (!(/iPhone|iPad|iPod/.test(navigator.platform) && navigator.userAgent.indexOf("AppleWebKit") > -1)) {
        return;
    }
    var doc = w.document;
    if (!doc.querySelector) {
        return;
    }
    var meta = doc.querySelector("meta[name=viewport]"),
        initialContent = meta && meta.getAttribute("content"),
        disabledZoom = initialContent + ",maximum-scale=1",
        enabledZoom = initialContent + ",maximum-scale=10",
        enabled = true,
        x, y, z, aig;
    if (!meta) {
        return;
    }

    function restoreZoom() {
        meta.setAttribute("content", enabledZoom);
        enabled = true;
    }

    function disableZoom() {
        meta.setAttribute("content", disabledZoom);
        enabled = false;
    }

    function checkTilt(e) {
        aig = e.accelerationIncludingGravity;
        x = Math.abs(aig.x);
        y = Math.abs(aig.y);
        z = Math.abs(aig.z);
        if (!w.orientation && (x > 7 || ((z > 6 && y < 8 || z < 8 && y > 6) && x > 5))) {
            if (enabled) {
                disableZoom();
            }
        } else if (!enabled) {
            restoreZoom();
        }
    }
    w.addEventListener("orientationchange", restoreZoom, false);
    w.addEventListener("devicemotion", checkTilt, false);
})(this);;
(function($) {
    function toIntegersAtLease(n) {
        return n < 10 ? '0' + n : n;
    }
    Date.prototype.toJSON = function(date) {
        return this.getUTCFullYear() + '-' +
            toIntegersAtLease(this.getUTCMonth()) + '-' +
            toIntegersAtLease(this.getUTCDate());
    };
    var escapeable = /["\\\x00-\x1f\x7f-\x9f]/g;
    var meta = {
        '\b': '\\b',
        '\t': '\\t',
        '\n': '\\n',
        '\f': '\\f',
        '\r': '\\r',
        '"': '\\"',
        '\\': '\\\\'
    };
    $.quoteString = function(string) {
        return '"' + string.replace(escapeable, function(a) {
            var c = meta[a];
            if (typeof c === 'string') {
                return c;
            }
            c = a.charCodeAt();
            return '\\u00' + Math.floor(c / 16).toString(16) + (c % 16).toString(16);
        }) + '"';
        return '"' + string + '"';
    };
    $.toJSON = function(o, compact) {
        var type = typeof(o);
        if (type == "undefined")
            return "undefined";
        else if (type == "number" || type == "boolean")
            return o + "";
        else if (o === null)
            return "null";
        if (type == "string") {
            var str = $.quoteString(o);
            return str;
        }
        if (type == "object" && typeof o.toJSON == "function")
            return o.toJSON(compact);
        if (type != "function" && typeof(o.length) == "number") {
            var ret = [];
            for (var i = 0; i < o.length; i++) {
                ret.push($.toJSON(o[i], compact));
            }
            if (compact)
                return "[" + ret.join(",") + "]";
            else
                return "[" + ret.join(", ") + "]";
        }
        if (type == "function") {
            throw new TypeError("Unable to convert object of type 'function' to json.");
        }
        var ret = [];
        for (var k in o) {
            var name;
            type = typeof(k);
            if (type == "number")
                name = '"' + k + '"';
            else if (type == "string")
                name = $.quoteString(k);
            else
                continue;
            var val = $.toJSON(o[k], compact);
            if (typeof(val) != "string") {
                continue;
            }
            if (compact)
                ret.push(name + ":" + val);
            else
                ret.push(name + ": " + val);
        }
        return "{" + ret.join(", ") + "}";
    };
    $.compactJSON = function(o) {
        return $.toJSON(o, true);
    };
    $.evalJSON = function(src) {
        return eval("(" + src + ")");
    };
    $.secureEvalJSON = function(src) {
        var filtered = src;
        filtered = filtered.replace(/\\["\\\/bfnrtu]/g, '@');
        filtered = filtered.replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']');
        filtered = filtered.replace(/(?:^|:|,)(?:\s*\[)+/g, '');
        if (/^[\],:{}\s]*$/.test(filtered))
            return eval("(" + src + ")");
        else
            throw new SyntaxError("Error parsing JSON, source is not valid.");
    };
})(jQuery); 