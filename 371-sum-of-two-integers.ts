function getSum(a: number, b: number): number {
  while (b !== 0) {
    const sum = a ^ b;
    const carry = (a & b) << 1;

    a = sum;
    b = carry;
  }
  return a;
}
