var slideNum = 1;
var slideCheck = 0;
var slides = $(".main-box-1 > .main-banner > .img-box > a").length;
var rightBannerNo = 1;
var rSlides = $(".main-box-1 > div:last-child > div:last-child > div:last-child > div > img").length;
var slideTimer = 1500;

//사이드바 따라오기
$(document).scroll(function () {
    var sct = $(document).scrollTop();
    $("header > .side-menu").css("top", sct + 186 + "px");
});
//메인 배너 좌측버튼
$(".main-box-1 > .main-banner > .l-btn").click(function () {
    //메인 배너 중복클릭 방지
    if (slideCheck == 1) {
        return false;
    } else {
        slideCheck = 1;
        setTimeout(function () {
            slideCheck = 0;
        }, slideTimer);
    }

    if (slideNum == 1) {
        slideNum = slides;
    } else {
        slideNum--;
    }

    sliding(slideNum);
});
//메인 배너 우측버튼
$(".main-box-1 > .main-banner > .r-btn").click(function () {
    //메인 배너 중복클릭 방지
    if (slideCheck == 1) {
        return false;
    } else {
        slideCheck = 1;
        setTimeout(function () {
            slideCheck = 0;
        }, slideTimer);
    }

    if (slideNum == slides) {
        slideNum = 1;
    } else {
        slideNum++;
    }

    sliding(slideNum);
});
//메인 배너 하단버튼
$(".main-box-1 > .main-banner > .btn-bar > div:last-child > div").click(function () {
    //메인 배너 중복클릭 방지
    if (slideCheck == 1) {
        return false;
    } else {
        slideCheck = 1;
        setTimeout(function () {
            slideCheck = 0;
        }, slideTimer);
    }

    var btnNum = $(".main-box-1 > .main-banner > .btn-bar > div:last-child > div").index(this);

    sliding(btnNum + 1);
});


//메인 배너 슬라이딩
function sliding(sn) {
    //상단 커버이미지 변경
    var sName = $(".main-box-1 > .main-banner > .img-box > a:nth-child(" + sn + ") > img").attr("src");
    //$(".main-box-1 > .main-banner > .cover-box").css("background-image", "url(" + sName + ")");
    slidingEffect(sName);
    //깔리는 이미지 변경
    setTimeout(function () {
        $(".main-box-1 > .main-banner > .img-box > a").removeClass("active");
        $(".main-box-1 > .main-banner > .img-box > a:nth-child(" + sn + ")").addClass("active");
    }, slideTimer);
    //배너 하단 버튼
    $(".main-box-1 > .main-banner > .btn-bar > div:last-child > div").removeClass("active");
    $(".main-box-1 > .main-banner > .btn-bar > div:last-child > div:nth-child(" + sn + ")").addClass("active");
    //배너 하단 텍스트
    $(".main-box-1 > .main-banner > .btn-bar > div:first-child > span").fadeOut(200);
    $(".main-box-1 > .main-banner > .btn-bar > div:first-child > span:nth-child(" + sn + ")").delay(220).fadeIn(200);
}
//best of best item 액티브
$(".main-box-2 > ul > li").hover(function () {
    $(".main-box-2 > ul > li").removeClass("active");
    $(this).addClass("active");
});
//우측 배너 좌측버튼
$(".main-box-1 > div:last-child > div:last-child > div:first-child > a:first-child").click(function () {
    if (rightBannerNo == 1) {
        rightBannerNo = rSlides;
    } else {
        rightBannerNo--;
    }
    $(".main-box-1 > div:last-child > div:last-child > div:last-child > div").css("margin-left", (rightBannerNo - 1) * -314);
});
//우측 배너 우측버튼
$(".main-box-1 > div:last-child > div:last-child > div:first-child > a:last-child").click(function () {
    if (rightBannerNo == rSlides) {
        rightBannerNo = 1;
    } else {
        rightBannerNo++;
    }
    $(".main-box-1 > div:last-child > div:last-child > div:last-child > div").css("margin-left", (rightBannerNo - 1) * -314);
});
//메인배너 슬라이드 효과추가
function slidingEffect(imgName) {
    //이미지 크기설정
    var xVal = $(".main-box-1 > .main-banner > .cover-box").width();
    var yVal = $(".main-box-1 > .main-banner > .cover-box").height();
    //랜덤숫자 설정, 조각설정
    var rand = Math.floor(Math.random() * 2);
    if (rand == 0) {
        var xDiv = 15;
        var yDiv = 1;
    } else {
        var xDiv = 12;
        var yDiv = 8;
    }
    //div조각 리셋후 추가
    var tmpEnd = (xDiv * yDiv);
    $(".main-box-1 > .main-banner > .cover-box").children().remove();
    for (var x = 0; x < tmpEnd; x++) {
        $(".main-box-1 > .main-banner > .cover-box").append("<div></div>");
    }
    //div조각 감춘후 배경이미지 변경, 사이즈설정
    $(".main-box-1 > .main-banner > .cover-box > div").hide();
    $(".main-box-1 > .main-banner > .cover-box > div").width(xVal / xDiv);
    $(".main-box-1 > .main-banner > .cover-box > div").height(yVal / yDiv);
    $(".main-box-1 > .main-banner > .cover-box > div").css("background-image", "url(" + imgName + ")");
    $(".main-box-1 > .main-banner > .cover-box > div").css("background-size", xVal + "px " + yVal + "px");
    //div조각 배경이미지 위치조절
    for (var y = 0; y < yDiv; y++) {
        for (var x = 0; x < xDiv; x++) {
            var tmpNo = (x + 1) + (y * xDiv);
            var tmpX = (xVal / xDiv) * x;
            var tmpY = (yVal / yDiv) * y;
            $(".main-box-1 > .main-banner > .cover-box > div:nth-child(" + tmpNo + ")").css("left", tmpX + "px");
            $(".main-box-1 > .main-banner > .cover-box > div:nth-child(" + tmpNo + ")").css("top", tmpY + "px");
            $(".main-box-1 > .main-banner > .cover-box > div:nth-child(" + tmpNo + ")").css("background-position", -(tmpX) + "px " + -(tmpY) + "px");
        }
    }
    //시간설정, 효과 적용
    var tmpTimer = slideTimer / (xDiv * yDiv);

    if (rand == 0) {
        for (var x = 0; x < xDiv; x++) {
            var tmpNo = (x + 1);
            $(".main-box-1 > .main-banner > .cover-box > div:nth-child(" + tmpNo + ")").delay(tmpTimer * tmpNo).slideDown(tmpTimer);
        }
    } else {
        for (var y = 0; y < yDiv; y++) {
            for (var x = 0; x < xDiv; x++) {
                var tmpNo = (x + 1) + (y * xDiv);
                $(".main-box-1 > .main-banner > .cover-box > div:nth-child(" + tmpNo + ")").delay(tmpTimer * tmpNo).fadeIn(tmpTimer);
            }
        }
    }
}
