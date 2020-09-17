// start-mainActive-tab
$(document).ready(function () {
    function menuActiveTab() {
        let currenlocation = location.href;
        let menuItem = document.querySelectorAll('#nav-header a');
        for (let i = 0; i < menuItem.length; i++) {
            if (menuItem[i].href === currenlocation) {
                menuItem[i].className = "active-tab";
            }
        }
    }
    menuActiveTab();
});
// end-mainActive-tab

//  ---start-Slick---

// banner-slick
$(document).ready(function () {
    if ($('#index-slick')) {
        $('#index-slick').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
        });
    }
});
// end-banner-slick

// start-partner-page
// start-tab-loi-ich
$(document).ready(function () {
    function openTab(evt, tabName) {
        let i, tabcontent, tablinks;
        tabcontent = document.querySelectorAll(" #partner_tab-1 .partner-tab-item");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        tablinks = document.querySelectorAll("#partner_tab-1 .tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(tabName).style.display = "block";
        evt.currentTarget.className += " active";
    }
    let loiich1 = document.getElementById("loi-ich-tab1");
    if (loiich1) {
        loiich1.onclick = function (event) {
            openTab(event, 'loi-ich-content-1');
        }
        loiich1.click();
    }
    // document.getElementById("loi-ich-tab1").onclick = function(event) {
    //     openTab(event, 'loi-ich-content-1');   
    // }
    let loiich2 = document.getElementById("loi-ich-tab2");
    if (loiich2) {
        loiich2.onclick = function (event) {
            openTab(event, 'loi-ich-content-2');
        }
    }
    // document.getElementById("loi-ich-tab2").onclick = function(event) {
    //     openTab(event, 'loi-ich-content-2');
    // }
    let loiich3 = document.getElementById("loi-ich-tab3");
    if (loiich3) {
        loiich3.onclick = function (event) {
            openTab(event, 'loi-ich-content-3');
        }
    }
    // document.getElementById("loi-ich-tab3").onclick = function(event) {
    //     openTab(event, 'loi-ich-content-3');
    // }
    // document.getElementById("loi-ich-tab1").click();
});

$(document).ready(function () {
    function partnerLinksTab() {
        let tablink = document.querySelectorAll("#partner_tab-1 .tabs a");
        for (let i = 0; i < tablink.length; i++) {
            tablink[i].addEventListener("click", function () {
                let current = document.getElementsByClassName("partner_tablinks-active");
                current[0].className = current[0].className.replace("partner_tablinks-active", "");
                this.className += " partner_tablinks-active";
            });
        }
    }
    partnerLinksTab();
});
// end-tab-loi-ich
// start-tab-2
$(document).ready(function () {
    function openTab1(evt, tabName) {
        let i, tabcontent, tablinks;
        tabcontent = document.querySelectorAll(" #partner_tab-2 .tab_item");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        tablinks = document.querySelectorAll("#partner_tab-2 .tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
            tablinks[i].style.backgroundColor = tablinks[i].style.backgroundColor.replace("red", "");
        }
        document.getElementById(tabName).style.display = "block";
        evt.currentTarget.className += " active";
    }
    if (document.getElementById("show-all")) {
        document.getElementById("show-all").onclick = function (event) {
            openTab1(event, 'tab_content-item-1');
            $('.show-all-slick').css('display', 'block');
            $('.show-all-slick').get(0).slick.setPosition();
        }
        document.getElementById("show-all").click();
    }
    if (document.getElementById("tai-chinh")) {
        document.getElementById("tai-chinh").onclick = function (event) {
            openTab1(event, 'tab_content-item-2');
            $('.tai-chinh-slick').css('display', 'block');
            $('.tai-chinh-slick').get(0).slick.setPosition();
        }
    }
    if (document.getElementById("hang-hoa")) {
        document.getElementById("hang-hoa").onclick = function (event) {
            openTab1(event, 'tab_content-item-3');
            $('.hang-hoa-slick').css('display', 'block');
            $('.hang-hoa-slick').get(0).slick.setPosition();
        }
    }
    if (document.getElementById("to-chuc")) {
        document.getElementById("to-chuc").onclick = function (event) {
            openTab1(event, 'tab_content-item-4');
            $('.to-chuc-slick').css('display', 'block');
            $('.to-chuc-slick').get(0).slick.setPosition();
        }
    }
    if (document.getElementById("dong-hanh")) {
        document.getElementById("dong-hanh").onclick = function (event) {
            openTab1(event, 'tab_content-item-5');
            $('.dong-hanh-slick').css('display', 'block');
            $('.dong-hanh-slick').get(0).slick.setPosition();
        }
    }
    if (document.getElementById("truyen-thong")) {
        document.getElementById("truyen-thong").onclick = function (event) {
            openTab1(event, 'tab_content-item-6');
            $('.truyen-thong-slick').css('display', 'block');
            $('.truyen-thong-slick').get(0).slick.setPosition();
        }
    }
    if (document.getElementById("khac")) {
        document.getElementById("khac").onclick = function (event) {
            openTab1(event, 'tab_content-item-7');
            $('.khac-slick').css('display', 'block');
            $('.khac-slick').get(0).slick.setPosition();
        }
    }
});
// --partner-show-all--
$(document).ready(function () {
    $('.showAll').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 2,
        prevArrow: '<button class = "slick-prev slick-arrow" aria-label = "Previous" type = "button" style = ""><i class = "fa fa-angle-left fa-4x" aria-hidden  = "true"></i></button>',
        nextArrow: '<button class = "slick-next slick-arrow" aria-label = "Next" type     = "button" style = ""><i class = "fa fa-angle-right fa-4x" aria-hidden = "true"></i></button>',
    });
});
// --end-partner-show-all--

// --partner-tai-chinhl--
$(document).ready(function () {
    $('.taiChinh').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 2,
        prevArrow: '<button class = "slick-prev slick-arrow" aria-label = "Previous" type = "button" style = ""><i class = "fa fa-angle-left fa-4x" aria-hidden  = "true"></i></button>',
        nextArrow: '<button class = "slick-next slick-arrow" aria-label = "Next" type     = "button" style = ""><i class = "fa fa-angle-right fa-4x" aria-hidden = "true"></i></button>',
    });
});

// --end -partner-tai-chinhl--
// --partner-hanghoa--
$(document).ready(function () {
    $('.hangHoa').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 2,
        prevArrow: '<button class = "slick-prev slick-arrow" aria-label = "Previous" type = "button" style = ""><i class = "fa fa-angle-left fa-4x" aria-hidden  = "true"></i></button>',
        nextArrow: '<button class = "slick-next slick-arrow" aria-label = "Next" type     = "button" style = ""><i class = "fa fa-angle-right fa-4x" aria-hidden = "true"></i></button>',
    });
});
$(document).ready(function () {
    $('.toChuc').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 2,
        prevArrow: '<button class = "slick-prev slick-arrow" aria-label = "Previous" type = "button" style = ""><i class = "fa fa-angle-left fa-4x" aria-hidden  = "true"></i></button>',
        nextArrow: '<button class = "slick-next slick-arrow" aria-label = "Next" type     = "button" style = ""><i class = "fa fa-angle-right fa-4x" aria-hidden = "true"></i></button>',
    });
});
$(document).ready(function () {
    $('.dongHanh').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 2,
        prevArrow: '<button class = "slick-prev slick-arrow" aria-label = "Previous" type = "button" style = ""><i class = "fa fa-angle-left fa-4x" aria-hidden  = "true"></i></button>',
        nextArrow: '<button class = "slick-next slick-arrow" aria-label = "Next" type     = "button" style = ""><i class = "fa fa-angle-right fa-4x" aria-hidden = "true"></i></button>',
    });
});

$(document).ready(function () {
    $('.truyenThong').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 2,
        prevArrow: '<button class = "slick-prev slick-arrow" aria-label = "Previous" type = "button" style = ""><i class = "fa fa-angle-left fa-4x" aria-hidden  = "true"></i></button>',
        nextArrow: '<button class = "slick-next slick-arrow" aria-label = "Next" type     = "button" style = ""><i class = "fa fa-angle-right fa-4x" aria-hidden = "true"></i></button>',
    });
});
$(document).ready(function () {
    $('.khac').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 2,
        prevArrow: '<button class = "slick-prev slick-arrow" aria-label = "Previous" type = "button" style = ""><i class = "fa fa-angle-left fa-4x" aria-hidden  = "true"></i></button>',
        nextArrow: '<button class = "slick-next slick-arrow" aria-label = "Next" type     = "button" style = ""><i class = "fa fa-angle-right fa-4x" aria-hidden = "true"></i></button>',
    });
});

$(document).ready(function () {
    function partnerbtntab() {
        let btns = document.querySelectorAll("#partner_tab-2 .tablinks");
        for (let i = 0; i < btns.length; i++) {
            btns[i].addEventListener("click", function () {
                let current = document.getElementsByClassName("partner_tab2-active");
                current[0].className = current[0].className.replace(" partner_tab2-active", "");
                this.className += " partner_tab2-active";
            });
        }
    }
    partnerbtntab();
});
// --end-parent-tab 2-

// end-partner-page


// about-tab
$(document).ready(function () {
    function openTab(evt, tabName) {
        let i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        if (tabcontent) {
            for (i = 0; i < tabcontent.length; i++) {
                tabcontent[i].style.display = "none";
            }
            tablinks = document.getElementsByClassName("tablinks");
            for (i = 0; i < tablinks.length; i++) {
                tablinks[i].className = tablinks[i].className.replace(" active", "");
            }
            document.getElementById(tabName).style.display = "block";
            evt.currentTarget.className += " active";
        }
    }
    if (document.getElementById("tab-1")) {
        document.getElementById("tab-1").onclick = function (event) {
            openTab(event, 'tab1');
        }
        document.getElementById("tab-1").click();
    }
    if (document.getElementById("tab-2")) {
        document.getElementById("tab-2").onclick = function (event) {
            openTab(event, 'tab2');
        }
    }
    if (document.getElementById("tab-3")) {
        document.getElementById("tab-3").onclick = function (event) {
            openTab(event, 'tab3');
        }
    }
    if (document.getElementById("tab-4")) {
        document.getElementById("tab-4").onclick = function (event) {
            openTab(event, 'tab4');
        }
    }
    if (document.getElementById("tab-5")) {
        document.getElementById("tab-5").onclick = function (event) {
            openTab(event, 'tab5');
        }
    }
});

$(document).ready(function () {
    function aboutLinksTab() {
        let tablink = document.querySelectorAll("#about_tab-control p");
        for (let i = 0; i < tablink.length; i++) {
            tablink[i].addEventListener("click", function () {
                let current = document.getElementsByClassName("about_tablink-active-color");
                current[0].className = current[0].className.replace("about_tablink-active-color", "");
                this.className += "about_tablink-active-color";
            });
        }
    }
    aboutLinksTab();
});
// end about tab
$(document).ready(function () {
    $(".field-item").hover(function (e) {
        e.stopPropagation();
        // over
        $(".goi-tu-thien-text").css("display", "block");
    }, function (e) {
        e.stopPropagation();
        // out
        $(".goi-tu-thien-text").css("display", "none");
    }
    );
});
// Field-Item Hover

// --start-trang news---\
// -----start news tab----
$(document).ready(function () {
    function newsLinksTab() {
        let newsTablink = document.querySelectorAll("#news-section-1 .tintuc-item a");
        for (let i = 0; i < newsTablink.length; i++) {
            newsTablink[i].addEventListener("click", function () {
                let current1 = document.getElementsByClassName("tintuc-item-active ");
                current1[0].className = current1[0].className.replace("tintuc-item-active ", "");
                this.className += " tintuc-item-active ";
            });
        }
    }
    newsLinksTab();
});

$(document).ready(function () {
    function openNewsTab(evt, tabName) {
        let i, tabcontent, tablinks;
        tabcontent = document.querySelectorAll("#news-section-1 .news-tab-item");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        tablinks = document.querySelectorAll("#news-section-1 .news-tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(tabName).style.display = "block";
        evt.currentTarget.className += " active";
    }
    if (document.getElementById("news-tablinks-1")) {
        document.getElementById("news-tablinks-1").onclick = function (event) {
            openNewsTab(event, 'news-tabContent-1');
        }
        document.getElementById("news-tablinks-1").click();
    }
    if (document.getElementById("news-tablinks-2")) {
        document.getElementById("news-tablinks-2").onclick = function (event) {
            openNewsTab(event, 'news-tabContent-2');
        }
    }
    if (document.getElementById("news-tablinks-3")) {
        document.getElementById("news-tablinks-3").onclick = function (event) {
            openNewsTab(event, 'news-tabContent-3');
        }
    }
});

// -----end news tab----
$(document).ready(function () {
    $('#goi_tu-thien .goituthien').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: '<button class = "" aria-label = "Previous" type = "button" style = "background: transparent;border: none;position: absolute;top: 30%;color: white;left : -2%;;outline: none;transform: translateY(-50%);"><i class = "fa fa-angle-left fa-3x" aria-hidden  = "true"></i></button>',
        nextArrow: '<button class = "" aria-label = "Previous" type = "button" style = "background: transparent;border: none;position: absolute;top: 30%;color: white;right: -2%;outline : none;transform: translateY(-50%);"><i class = "fa fa-angle-right fa-3x" aria-hidden = "true"></i></button>',
        responsive: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });
});

$(document).ready(function () {
    $('.news_aboutus').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: '<button class = "" aria-label = "Previous" type = "button" style = "background: transparent;border: none;position: absolute;top: 30%;color: black;left : -2%;;outline: none;transform: translateY(-50%);"><i class = "fa fa-angle-left fa-3x" aria-hidden  = "true"></i></button>',
        nextArrow: '<button class = "" aria-label = "Previous" type = "button" style = "background: transparent;border: none;position: absolute;top: 30%;color: black;right: -2%;outline : none;transform: translateY(-50%);"><i class = "fa fa-angle-right fa-3x" aria-hidden = "true"></i></button>',
    });
});
// --end -trang news---

// start news index style flex
$(document).ready(function () {
    if ($("#demo-btn")) {
        $("#demo-btn").click(function () {
            $("#demo").toggle();
        });
        // document.querySelectorAll(".index-Section-5 .index-news-box")[0].style.flexDirection = "column";
    }
})
// end news index style flex

// dominhquan - set pause youtube
// var tag = document.createElement("script");
// tag.src = "https://www.youtube.com/iframe_api";
// var firstScriptTag = document.getElementsByTagName("script")[0];
// firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// var src1, src2, src3;
// if (document.getElementById("carousel-video-1")) {
//     src1 = document.getElementById("carousel-video-1").getAttribute("src");
//     src2 = document.getElementById("carousel-video-2").getAttribute("src");
//     src3 = document.getElementById("carousel-video-3").getAttribute("src");
// }

// var player1, player2, player3;
// function onYouTubeIframeAPIReady() {
//     player1 = new YT.Player("video-1", {
//         width: '100%',
//         height: '280',
//         videoId: src1
//     });

//     player2 = new YT.Player("video-2", {
//         width: '100%',
//         height: '280',
//         videoId: src2
//     });

//     player3 = new YT.Player("video-3", {
//         width: '100%',
//         height: '280',
//         videoId: src3
//     });
// }

// function pauseVid() {
//     player1.pauseVideo();
//     player2.pauseVideo();
//     player3.pauseVideo();
// }
// ..dominhquan - set pause youtube

// dominhquan - toggle login
$(document).ready(function () {
    $("#login-btn-quan").click(function () {
        $("#login-quan").toggleClass("d-block");
    });
})
// ..dominhquan - toggle login

// dominhquan-show password
$(document).ready(function () {
    $("#show-password-icon").click(function () {
        console.log("clicked");
        console.log($("#exampleInputPassword1"));
        if ($("#exampleInputPassword1").attr("type") == "password") {
            $("#exampleInputPassword1").attr("type", "text");
        } else {
            $("#exampleInputPassword1").attr("type", "password");
        }
    });
})
// ..dominhquan-show password

// dominhquan-active tab partner
$(document).ready(function () {
    if (document.getElementsByClassName("partner-tab-item-quan")) {
        let allTab = document.querySelectorAll(".partner-tab-item-quan");
        // console.log(allTab);
        $("#partner-tab-item-1").click(function () {
            console.log("clicked1");
            for (let i = 0; i < allTab.length; i++) {
                console.log(allTab[i].id);
                document.getElementById(allTab[i].id).classList.remove("active-tab");
            }
            document.getElementById("partner-tab-item-1").classList.add("active-tab");
        });
        $("#partner-tab-item-2").click(function () {
            console.log("clicked2");
            for (let i = 0; i < allTab.length; i++) {
                console.log(allTab[i].id);
                document.getElementById(allTab[i].id).classList.remove("active-tab");
            }
            document.getElementById("partner-tab-item-2").classList.add("active-tab");
        });
        $("#partner-tab-item-3").click(function () {
            console.log("clicked3");
            for (let i = 0; i < allTab.length; i++) {
                console.log(allTab[i].id);
                document.getElementById(allTab[i].id).classList.remove("active-tab");
            }
            document.getElementById("partner-tab-item-3").classList.add("active-tab");
        });
    }
});
// ..dominhquan-active tab partner

// dominhquan-slick index video
$(document).ready(function () {
    $('.index-youtube-video').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        fade: false,
        autoplay: false,
        autoplaySpeed: 3000,
        prevArrow: "<i class='fas fa-angle-left icon-left'></i>",
        nextArrow: "<i class='fas fa-angle-right icon-right'></i>",
        responsive: [
            {
                breakpoint: 575,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '0px',
                    slidesToShow: 1
                }
            }
        ]
    });
});
// ..dominhquan-slick index video

// dominhquan-pause index video
$(document).ready(function () {
    if ($("iframe")) {
        let videoIframe = $("iframe");
        $(".icon-left").click(function () {
            changeSrc();
        });
        $(".icon-right").click(function () {
            changeSrc();
        });
        changeSrc = () => {
            for (let i = 0; i < videoIframe.length; i++) {
                let videoSrc = videoIframe[i].src;
                videoIframe[i].src = videoSrc;
            }
        }
    }
});
// ..dominhquan-pause index video

// dominhquan-slick-partner-image
$('.show-all-slick').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    dots: false,
    fade: false,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: "<i class='fas fa-chevron-left icon-left'></i>",
    nextArrow: "<i class='fas fa-chevron-right icon-right'></i>",
    responsive: [
        {
            breakpoint: 991,
            settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '0px',
                slidesToShow: 4,
                slidesToScroll: 4,
            }
        },
        {
            breakpoint: 767,
            settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '0px',
                slidesToShow: 3,
                slidesToScroll: 3,
            }
        }
    ]
});

$('.tai-chinh-slick').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    dots: false,
    fade: false,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: "<i class='fas fa-chevron-left icon-left'></i>",
    nextArrow: "<i class='fas fa-chevron-right icon-right'></i>",
    responsive: [
        {
            breakpoint: 991,
            settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '0px',
                slidesToShow: 4,
                slidesToScroll: 4,
            }
        },
        {
            breakpoint: 767,
            settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '0px',
                slidesToShow: 3,
                slidesToScroll: 3,
            }
        }
    ]
});

$('.hang-hoa-slick').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    dots: false,
    fade: false,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: "<i class='fas fa-chevron-left icon-left'></i>",
    nextArrow: "<i class='fas fa-chevron-right icon-right'></i>",
    responsive: [
        {
            breakpoint: 991,
            settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '0px',
                slidesToShow: 4,
                slidesToScroll: 4,
            }
        },
        {
            breakpoint: 767,
            settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '0px',
                slidesToShow: 3,
                slidesToScroll: 3,
            }
        }
    ]
});

$('.to-chuc-slick').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    dots: false,
    fade: false,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: "<i class='fas fa-chevron-left icon-left'></i>",
    nextArrow: "<i class='fas fa-chevron-right icon-right'></i>",
    responsive: [
        {
            breakpoint: 991,
            settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '0px',
                slidesToShow: 4,
                slidesToScroll: 4,
            }
        },
        {
            breakpoint: 767,
            settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '0px',
                slidesToShow: 3,
                slidesToScroll: 3,
            }
        }
    ]
});

$('.dong-hanh-slick').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    dots: false,
    fade: false,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: "<i class='fas fa-chevron-left icon-left'></i>",
    nextArrow: "<i class='fas fa-chevron-right icon-right'></i>",
    responsive: [
        {
            breakpoint: 991,
            settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '0px',
                slidesToShow: 4,
                slidesToScroll: 4,
            }
        },
        {
            breakpoint: 767,
            settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '0px',
                slidesToShow: 3,
                slidesToScroll: 3,
            }
        }
    ]
});

$('.truyen-thong-slick').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    dots: false,
    fade: false,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: "<i class='fas fa-chevron-left icon-left'></i>",
    nextArrow: "<i class='fas fa-chevron-right icon-right'></i>",
    responsive: [
        {
            breakpoint: 991,
            settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '0px',
                slidesToShow: 4,
                slidesToScroll: 4,
            }
        },
        {
            breakpoint: 767,
            settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '0px',
                slidesToShow: 3,
                slidesToScroll: 3,
            }
        }
    ]
});

$('.khac-slick').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    dots: false,
    fade: false,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: "<i class='fas fa-chevron-left icon-left'></i>",
    nextArrow: "<i class='fas fa-chevron-right icon-right'></i>",
    responsive: [
        {
            breakpoint: 991,
            settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '0px',
                slidesToShow: 4,
                slidesToScroll: 4,
            }
        },
        {
            breakpoint: 767,
            settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '0px',
                slidesToShow: 3,
                slidesToScroll: 3,
            }
        }
    ]
});
// ..dominhquan-slick-partner-image

// dominhquan-hover-index
if ($(".grid-item")) {
    $(".grid-item").mouseover(function () {
        $(".together-block").css("display", "block");
    });
    $(".grid-item").mouseout(function () {
        $(".together-block").css("display", "none");
    });
    $(".together-block").mouseover(function () {
        $(".together-block").css("display", "block");
    });
    $(".together-block").mouseout(function () {
        $(".together-block").css("display", "none");
    });
}
// ..dominhquan-hover-index

// dominhquan-change-language
if (document.getElementById('language')) {
    document.getElementById('language').addEventListener('click', showLang);
    function showLang() {
        if (document.querySelector('.language-wrapper').style.display == 'none') {
            document.querySelector('.language-wrapper').style.display = 'block';
        } else {
            document.querySelector('.language-wrapper').style.display = 'none';
        }
    }
    document.querySelector('.vn-language').addEventListener('click', setVn);
    document.querySelector('.en-language').addEventListener('click', setEn);
    function setVn() {
        console.log('vn clicked');
        document.getElementById('language-img').src = 'images/vn-icon.png';
    }
    function setEn() {
        console.log('en clicked');
        document.getElementById('language-img').src = 'images/en-icon.png';
    }
}
// dominhquan-change-language

