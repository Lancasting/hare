$(document).ready(function() {
    function init() {
        console.log("JS has loaded");
    }
    $(".btn").click(function () {
        console.log("button clicked");
        let num = $("#numberInput").val();
        
        // let num = document.querySelector("form-control");
        // console.log(num);
        romanize(num);

        function romanize(num) {
            console.log(num);
            console.log("function is running");
            if (isNaN(num))
                alert( "Please enter a valid Number");
            var digits = String(+num).split(""),
                key = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM",
                    "", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC",
                    "", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
                roman = "",
                i = 3;
            while (i--)
                roman = (key[+digits.pop() + (i * 10)] || "") + roman;
                let result = (Array(+digits.join("") + 1).join("M") + roman)
                console.log(result);
             $(".result").text(result);
             event.preventDefault();
        }
    })
    init();
});