function fibonacci(n) {
    let fib_sequence = [0, 1];
    for (let i = 2; i < n; i++) {
        let next_fib = fib_sequence[i - 1] + fib_sequence[i - 2];
        fib_sequence.push(next_fib);
    }
    return fib_sequence;
}

function printFibTriangle(rows) {
    let fibLengths = fibonacci(rows);
    let maxLength = Math.max(...fibLengths);
    for (let i = 0; i < rows; i++) {
        let fibs = fibonacci(i + 1);
        let row = '';
        for (let fib of fibs) {
            row += '*'.repeat(fib) + ' '.repeat(maxLength - fib);
        }
        console.log(row.padStart(maxLength * 2));
    }
}

// Contoh pemanggilan
let rows = 7; // Ubah sesuai dengan jumlah baris yang diinginkan
printFibTriangle(rows);