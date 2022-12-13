document.addEventListener("DOMContentLoaded", function (event) {
    var health = document.getElementById("health");
});

function next() {
    health.value += 33.33;
    check();
};

function pre() {
    health.value -= 33.33;
    check();
};
function check() {

    var num2 = document.querySelectorAll("p")[1];
    var num3 = document.querySelectorAll("p")[2];
    var num4 = document.querySelectorAll("p")[3];
    if (health.value >= 99.99) {
        num2.classList.add('bor');
        num3.classList.add('bor');
        num4.classList.add('bor');

    }
    else if (health.value >= 66.66) {
        num2.classList.add('bor');
        num3.classList.add('bor');
        num4.classList.remove('bor');
    }
    else if (health.value >= 33.33) {
        num2.classList.add('bor');
        num3.classList.remove('bor');
    }
    else {
        num2.classList.remove('bor');
    }


    if (health.value <= 0) {
        document.querySelector(".button_pre").disabled = true;
    }
    else if (health.value >= 99.99) {
        document.querySelector(".button_next").disabled = true;
    }
    else {
        document.querySelector(".button_next").disabled = false;
        document.querySelector(".button_pre").disabled = false;
    }

}