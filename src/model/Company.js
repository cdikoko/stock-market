
export class Company {
    name = ""
    stockPrice = 0
    employees = 0
    exchange = ""
    constructor(name, exchange, employees, stock_price) {
        this.name = name
        this.exchange = exchange
        this.stockPrice = stock_price
        this.employees = employees
    }


}