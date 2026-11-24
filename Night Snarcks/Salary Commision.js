let baseSalary = 5000;
let targetIncome = 30000;
let sales = 0;
let commission = 0;
let income = 0;

while (income < targetIncome) {

    sales++;

    commission = 0;

    for (let count = 1; count <= 3; count++) {

        if (count == 1) {
            commission += Math.min(sales, 5000) * 0.06;
        }

        else if (count == 2) {
            commission += Math.min(Math.max(sales - 5000, 0), 5000) * 0.08;
        }

        else {
            commission += Math.max(sales - 10000, 0) * 0.10;
        }
    }

    income = baseSalary + commission;
}

console.log(`Minimum sales required:${sales}`);
console.log(`Total commission:${commission}`);
console.log(`Annual income: ${income}`);
