function solution(sides) {
    sides.sort(function (a , b){
        return b-a
 });
    
    if(sides[0] < sides[2] + sides[1] ){
        return 1
    }else {
        return 2
    }
    return sides;
}