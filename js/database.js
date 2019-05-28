window.addEventListener("load", function () {
    const image = document.querySelector('.backdrop');
    const string = document.querySelector('.lightstring');
    image.addEventListener("click", animationListener);
    string.addEventListener("click", animationListener);

});

function animationListener(e) {
    const light = document.getElementsByClassName("light")[0];
    light.classList.toggle("light--glowon");
    const lightstring = document.getElementsByClassName("lightstring")[0];
    if (!lightstring.classList.contains("string--pulloff") && !lightstring.classList.contains("string--pullon")) {
        lightstring.classList.add("string--pullon");
    } else {
        lightstring.classList.toggle("string--pullon")
        lightstring.classList.toggle("string--pulloff");
    };

    const onClass = [
        ["lightbulb__bulb", "lightbulb__bulb--light"],
        ["lightbulb__top", "lightbulb__top--light"],
        ["lightbulb__metal", "lightbulb__metal--shine"],
        ["coil__side1", "coil__sides--light"],
        ["coil__side2", "coil__sides--light"],
        ["coil__bottom", "coil__bottom--hot"],
        ["moth", "moth--visible"],
        ["moth1", "moth--visible"],
        ["moth2", "moth--visible"],
        ["moth", "moth--fly"],
        ["moth1", "moth--fly1"],
        ["moth2", "moth--fly2"]
    ];


    onClass.forEach(function (a) {
        document.getElementsByClassName(a[0])[0].classList.toggle(a[1]);
    })
};
