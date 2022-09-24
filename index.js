$(document.ready(function () {
    console.log("scripts have loaded");
    function init() {
    }

    $(".submit").onClick(function () {
        console.log("button clicked");
        preventDefault();
        let num = getElementById("numberInput")
        romanize(num);



        function romanize(num) {
            console.log("function is running");
            if (isNaN(num))
                return "Please enter a valid Number";
            var digits = String(+num).split(""),
                key = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM",
                    "", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC",
                    "", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
                roman = "",
                i = 3;
            while (i--)
                roman = (key[+digits.pop() + (i * 10)] || "") + roman;
            return console.log(Array(+digits.join("") + 1).join("M") + roman);
        }

        preventDefault();
    })
    init();
}))(jQuery)