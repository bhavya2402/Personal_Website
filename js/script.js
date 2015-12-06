$(document).ready(function(){
	$('.portfolioContainer').addClass('hide');
    $('.blogContainer').addClass('hide');
    $('.galleryContainer').addClass('hide');
	$('.contactContainer').addClass('hide');
    $('#myCarouselAcademic').hide();
    $('#myCarouselExperience').hide();

    // $(".sticky-header").floatThead({scrollingTop:50});
    $(".aboutTab").on('click',function(){
        $('.aboutContainer').removeClass('hide');
        $('.portfolioContainer').addClass('hide');
        $('.blogContainer').addClass('hide');
        $('.galleryContainer').addClass('hide');
        $('.contactContainer').addClass('hide');
        $('.smallNavContainer').addClass('hide');
    });
    $(".portfolioTab").on('click',function(){
        $('.aboutContainer').addClass('hide');
        $('.portfolioContainer').removeClass('hide');
        $('.blogContainer').addClass('hide');
        $('.galleryContainer').addClass('hide');
        $('.contactContainer').addClass('hide');
        $('.smallNavContainer').addClass('hide');
    });
    $(".blogTab").on('click',function(){
        $('.aboutContainer').addClass('hide');
        $('.portfolioContainer').addClass('hide');
        $('.blogContainer').removeClass('hide');
        $('.galleryContainer').addClass('hide');
        $('.contactContainer').addClass('hide');
        $('.smallNavContainer').addClass('hide');
    });
    $(".galleryTab").on('click',function(){
        $('.aboutContainer').addClass('hide');
        $('.portfolioContainer').addClass('hide');
        $('.blogContainer').addClass('hide');
        $('.galleryContainer').removeClass('hide');
        $('.contactContainer').addClass('hide');
        $('.smallNavContainer').addClass('hide');
    });
    $(".contactTab").on('click',function(){
        $('.aboutContainer').addClass('hide');
        $('.portfolioContainer').addClass('hide');
        $('.blogContainer').addClass('hide');
        $('.galleryContainer').addClass('hide');
        $('.contactContainer').removeClass('hide');
        $('.smallNavContainer').addClass('hide');
    });
    $('#menuIcon').on('click', function(){
        $('.smallNavContainer').toggleClass('hide');
    });
    $('.portfolioMenu li').on('click' , function(e){
        var imgid = $(e.currentTarget).data('id');
        var imgSrc = "assets/images/Portfolio" + imgid + ".jpg";
        $('#modal-portfolioImg').attr('src', imgSrc);
        $('#myModal').modal();
    });
    $('.galleryImages li').on('click' , function(e){
        // var imgid = $(this).data("id");
        var imgid = $(e.currentTarget).data('id');
        var imgSrc = "assets/images/gallery" + imgid + ".jpg";
        $('#modal-img').attr('src', imgSrc);
        // document.getElementById("modal-img").src = imgSrc;
        $('#mygalleryModal').modal();
    });
    $('.portfolioContent h1').on('click', function(){
        // var caraouselId = $(this).data('id');
        // console.log($(this).next('div'));
        $(this).next().slideToggle(500); 
        $(this).parent('div').siblings().find('div.carousel').slideUp(300);
        // $(this).parents('div').siblings().find('div.carousel').slideUp(300); //this will also work. it searches for grandparents as well//
    });
    $("form").on("submit", function () {
        var isInvalid = false;
        $("input", this).each(function () {
            if (!$(this).val()) {
            isInvalid = true;
        }
    });
    if (isInvalid) {
        return false;
    }
    else{
        window.alert("Thankyou For contacting me!! Will get back to you earliest..");
    }
});

});