var calcLog = [];

function calcFactory(symbol) {
    switch (symbol){
        case '+':
        function sum(a,b) {
            var c = a + b;
            calcLog.push(a.toString()+ symbol + b.toString() + '=' + c.toString());
            return c
        }
            return sum;
            break;

        case '*':
        function multiply(a,b) {
            var c = a * b;
            calcLog.push(a.toString()+ symbol + b.toString() + '=' + c.toString());
            return c
        }
            return multiply;
            break;

        case '^':
        function power(a,b) {
            var c = Math.pow(a,b);
            calcLog.push(a.toString()+ symbol + b.toString() + '=' + c.toString());
            return c
        }
            return power;
            break;

        case '/':
        function divide(a,b) {
            var c = a / b;
            calcLog.push(a.toString()+ symbol + b.toString() + '=' + c.toString());
            return c
        }
            return divide;
            break;

        default:
        function unknown(a,b){
            return "Sorry, we don't get your calculation. Please try again."
        }
            return unknown
    }
}
