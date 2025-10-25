function solution(my_string) {
    var list = my_string.split(" ")
    var res = list[0] * 1
    for(var i = 1; i < list.length; i += 2){
        if(list[i] == "+"){
            res += list[i+1]*1
        }else{
            res -= list[i+1]*1
        }
    }return res
}