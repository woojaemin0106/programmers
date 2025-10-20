function solution(s1, s2) {
    return s1.reduce((a, b) => {
        if (s2.includes(b)) {
            return a + 1;
        }
        return a;
    }, 0);
}
