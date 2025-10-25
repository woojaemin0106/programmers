function solution(money) {
    let answer =[]
    const price = 5500;
    
    let cup =  Math.floor(money / price)
    
    let nokorl = money % price 
    
    answer.push(cup)
    answer.push(nokorl)
    return answer;
}