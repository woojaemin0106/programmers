function solution(s1, s2) {
    const answer = s1.filter(a => s2.includes(a));
    return answer.length;
}