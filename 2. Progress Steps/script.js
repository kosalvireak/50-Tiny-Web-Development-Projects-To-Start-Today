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

    if (health.value <= 0) {
        document.querySelector(".button_pre").disabled = true;
    }
    else if (health.value >= 100) {
        document.querySelector(".button_next").disabled = true;
    }
    else {
        document.querySelector(".button_next").disabled = false;
        document.querySelector(".button_pre").disabled = false;
    }

}