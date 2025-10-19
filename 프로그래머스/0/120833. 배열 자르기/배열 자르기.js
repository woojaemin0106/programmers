function solution(numbers, num1, num2) {
    return numbers.filter((n, i) => num1 <= i && i <= num2);
}