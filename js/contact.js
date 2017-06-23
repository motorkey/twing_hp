$(()=> {

    // contactNav
    $("#companyNav").hover(()=> {
        $(".contactForm--student").css("display", "none");
        $(".contactForm--univ").css("display", "none");
        $(".contactForm--company").css("display", "block");
    });
    $("#studentNav").hover(()=> {
        $(".contactForm--company").css("display", "none");
        $(".contactForm--univ").css("display", "none");
        $(".contactForm--student").css("display", "block");
    });
    $("#univNav").hover(()=> {
        $(".contactForm--student").css("display", "none");
        $(".contactForm--company").css("display", "none");
        $(".contactForm--univ").css("display", "block");
    });
});
