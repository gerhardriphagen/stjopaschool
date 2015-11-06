(function (window){
    var calcLog = [];

function calcFactory(symbol) {
    
    function sum(a,b) {
            var c = a + b;
            calcLog.push(a.toString()+ symbol + b.toString() + '=' + c.toString());
            return c
        }
    function multiply(a,b) {
            var c = a * b;
            calcLog.push(a.toString()+ symbol + b.toString() + '=' + c.toString());
            return c
        }
    function power(a,b) {
            var c = Math.pow(a,b);
            calcLog.push(a.toString()+ symbol + b.toString() + '=' + c.toString());
            return c
        }    
    function divide(a,b) {
            var c = a / b;
            calcLog.push(a.toString()+ symbol + b.toString() + '=' + c.toString());
            return c
        }
    function unknown(a,b){
            return "Sorry, we don't get your calculation. Please try again."
        }   
        
        
    switch (symbol){
        case '+': return sum; break;
        case '*': return multiply;break;
        case '^': return power; break;
        case '/': return divide; break;
        default:return unknown
    }
}
//to export only calcFactory in global scope
window.calcFactory = calcFactory;

})(window);

