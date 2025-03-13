class Conta {
    constructor(titular, saldo = 0) {
        this.titular = titular;
        this.saldo = saldo
    }
    depositar(valor) {
        this.saldo += valor;
    }
    sacar(valor) {
        if (valor < 0 || valor > this.saldo) {
            throw new RangeError('Saldo insuficiente ou valor inválido.');
        }
        this.saldo -= valor;
    }
    exibirSaldo() {
        return `Saldo: R$ ${this.saldo.toFixed(2)}`;
    }
}