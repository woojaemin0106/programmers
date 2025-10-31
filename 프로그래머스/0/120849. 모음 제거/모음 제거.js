function solution(my_string) {
    var answer = ['a', 'e' , 'i' , 'o','u'];
    return my_string.split('').filter( (a) => !answer.includes(a)).join('');
}