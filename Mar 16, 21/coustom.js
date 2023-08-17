//TAB CHANGE on Click event
var header = document.getElementById("myTab");
var btns = header.getElementsByClassName("tablinks");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}

function openTab(chocolateName) {
    var i;
    var x = document.getElementsByClassName("tabcontent");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById(chocolateName).style.display = "block";
}


// Hide Select increment decrement item (jQuery)

$(document).ready(function() {
    //Milk Chocolate
    $(".chocolate-select-1").click(function() {
        $(".chocolate-select-1").hide();
        $(".milk-chocolate-item-select-1").show();
    });

    $(".chocolate-select-2").click(function() {
        $(".chocolate-select-2").hide();
        $(".milk-chocolate-item-select-2").show();
    });

    $(".chocolate-select-3").click(function() {
        $(".chocolate-select-3").hide();
        $(".milk-chocolate-item-select-3").show();
    });

    // Dark Chocolate
    $(".dark-chocolate-select-1").click(function() {
        $(".dark-chocolate-select-1").hide();
        $(".dark-chocolate-item-select-1").show();
    });

    $(".dark-chocolate-select-2").click(function() {
        $(".dark-chocolate-select-2").hide();
        $(".dark-chocolate-item-select-2").show();
    });

    $(".dark-chocolate-select-3").click(function() {
        $(".dark-chocolate-select-3").hide();
        $(".dark-chocolate-item-select-3").show();
    });
});

//MILK CHOCOLATE Tab Data

function milkInput(el) {
    var myElements = document.getElementsByClassName('numbers');
    var sum = 0;
    var k1 = $('.total-select2').text();
    $('.tabData2').val(k1);
    for (var i = 0; i < myElements.length; i++) {
        if (myElements[i].value)
            sum = sum + parseInt(myElements[i].value);
    }

    if (sum <= 8 - k1) {
        el.dataset.prevvalue = el.value;
        document.getElementById("total-milk-chocolate").innerHTML = sum;
    } else {
        el.value = el.dataset.prevvalue;

    }
}

// .chocolate-item-select increment decrement item (javascript)
//MINUS Operation - MILK CHOCOLATE
function minusoperation(milkInput) {
    var el = document.getElementById('number' + milkInput);
    if (parseInt(el.value)) {
        el.value = parseInt(el.value) - 1;
    } else {
        el.value = 0;
    }
    el.onchange();
    var cartData = $('#number' + milkInput).attr('data-prevvalue');
    $(' .chocolate-items').find('#cartItem' + milkInput).text(cartData);
}

//PLUS Operation - MILK CHOCOLATE
function plusoperation(milkInput) {
    var el = document.getElementById('number' + milkInput);
    if (parseInt(el.value)) {
        el.value = parseInt(el.value) + 1;
    } else {
        el.value = 1;
    }
    el.onchange();
    var cartData = $('#number' + milkInput).attr('data-prevvalue');
    $(' .chocolate-items').find('#cartItem' + milkInput).text(cartData);
}

//DARK CHOCOLATE Tab Data

function darkInput(el) {
    var darkElement = document.getElementsByClassName('numbers2');
    var add = 0;
    var k1 = $('.total-select').text();
    $('.tabData').val(k1);
    for (var i = 0; i < darkElement.length; i++) {
        if (darkElement[i].value)
            add = add + parseInt(darkElement[i].value);
    }
    if (add <= 8 - k1) {
        el.dataset.prevvalue = el.value;
        document.getElementById("total-dark-chocolate").innerHTML = add;
    } else {
        el.value = el.dataset.prevvalue;
    }
}

// .chocolate-item-select increment decrement item (javascript)
//MINUS Operation - DARK CHOCOLATE
function minusop(darkInput) {
    var el = document.getElementById('add' + darkInput);
    if (parseInt(el.value)) {
        el.value = parseInt(el.value) - 1;
    } else {
        el.value = 0;
    }
    el.onchange();
    var cartData = $('#add' + darkInput).attr('data-prevvalue');
    $(' .dark-chocolate-items').find('#darkItem' + darkInput).text(cartData);

}

//PLUS Operation - DARK CHOCOLATE
function plusop(darkInput) {
    var el = document.getElementById('add' + darkInput);
    if (parseInt(el.value)) {
        el.value = parseInt(el.value) + 1;
    } else {
        el.value = 1;
    }

    el.onchange();
    var cartData = $('#add' + darkInput).attr('data-prevvalue');
    $(' .dark-chocolate-items').find('#darkItem' + darkInput).text(cartData);
}

// right click stop event 
// $(document).bind("contextmenu", function(e) {
//     return false;
// });