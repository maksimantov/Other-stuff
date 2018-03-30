const Calculator = require('\SoftUni\06. JavaScript-ExpressJS-Overview-Lab-Calculator-Skeleton');module.exports = {
    indexGet: (req, res) => {
        res.render('home/index');
    },
    indexPost: (req, res) => {
        let calculatorBody = req.body;

        let calculatorParams = calculatorBody['calculator'];
let calculator = new Calculator();
calculator.leftOperand = Number(calculatorParams.leftOperand);
calculator.operator = calculatorParams.operator;
calculator.rightOperand = Number(calculatorParams.rightOperand);

let result = calculator.calculateResult();

res.render('home/index', {'calculator': calculator, 'result': result});
}
};