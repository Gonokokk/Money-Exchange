// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    var money = { H: 50, Q: 25, D: 10, N: 5, P: 1 };
    if (currency > 10000) {
        return { error: "You are rich, my friend! We don't have so much coins for exchange" };
    }
    if (currency <= 0) {
        return {};
    } else {
        var result = {};
        for (i in money) {
            var one = Math.floor(currency / money[i])
            if (one >= 1) {
                result[i] = one;
            }
            currency = currency % money[i];
        }
        return result;
    }
}
