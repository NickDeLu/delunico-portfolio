function toggleNav() {
    var e = document.getElementById("myTopnav");
    e.classList.contains("responsive")
        ? e.classList.remove("responsive")
        : (e.className += " responsive");
}
window.addEventListener("DOMContentLoaded", (e) => {
    var o = !1;
    $(".container").on("scroll", function () {
        1e3 <= document.getElementsByClassName("container")[0].scrollTop &&
            !o &&
            ((o = !0), $("#myTopnav").addClass("scroll-nav")),
            document.getElementsByClassName("container")[0].scrollTop < 1e3 &&
            o &&
            ((o = !1), console.log("ey"), $("#myTopnav").removeClass("scroll-nav"));
    }),
        $("#maleglow").fadeOut(),
        $("#femaleglow").fadeOut();
    var t = $("#plug").detach(),
        n = document.getElementById("myTopnav"),
        a = document.getElementsByClassName("scroll");
    for (i = 0; i < a.length; i++) {
        var l = a[i];
        l.classList.contains("cta") &&
            $(".cta").on("click", () => {
                $("#container").css("scroll-snap-type", "y mandatory")
                $("#plug-place").after(t),
                    setTimeout(function () {
                        document
                            .querySelector(".show-plug")
                            .scrollIntoView({ behavior: "smooth" });
                    }, 0),
                    setTimeout(function () {
                        $("#male").animate(
                            { left: "+=68", bottom: "+=68", opacity: 1 },
                            800
                        ),
                            $("#female").animate(
                                { right: "+=71", top: "+=68", opacity: 1 },
                                800,
                                function () {
                                    $("#maleglow").fadeIn(300),
                                        $("#femaleglow").fadeIn(300),
                                        $("#male").animate({ opacity: 0 }, 1e3),
                                        $("#female").animate({ opacity: 0 }, 1e3);
                                }
                            );
                    }, 600),
                    setTimeout(function () {
                        document
                            .querySelector(".contact")
                            .scrollIntoView({ behavior: "smooth" });
                        $("#container").css("scroll-snap-type", "unset")
                    }, 2e3),
                    setTimeout(function () {
                        $("#female").removeAttr("style"),
                            $("#male").removeAttr("style"),
                            $("#maleglow").fadeOut(300),
                            $("#femaleglow").fadeOut(300),
                            $("#plug").detach();
                    }, 3e3),
                    n.classList.remove("responsive");
            }),
            $("#logo").on("click", function () {
                document
                    .querySelector(".landing")
                    .scrollIntoView({ behavior: "smooth" });
            }),
            l.addEventListener("click", function (e) {
                document
                    .querySelector("." + e.target.id)
                    .scrollIntoView({ behavior: "smooth" }),
                    n.classList.remove("responsive");
            });
    }
}),
    $(function () { });
