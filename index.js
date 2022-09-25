$(document).ready(function () {
    function init() {

    }
    $(".btn").click(function () {
        let num = $("#numberInput").val();
        romanize(num);

        function romanize(num) {
            if (isNaN(num))
                alert("Please enter a valid Number");
            var digits = String(+num).split(""),
                key = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM",
                    "", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC",
                    "", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
                roman = "",
                i = 3;
            while (i--)
                roman = (key[+digits.pop() + (i * 10)] || "") + roman;
            let result = (Array(+digits.join("") + 1).join("M") + roman)
            $(".result").text(result);
            event.preventDefault();
        }
    })
    init();
});