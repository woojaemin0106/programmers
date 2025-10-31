function solution(my_string, letter) {
    return my_string.split("").filter ( (a,b) => a !== letter ).join("")
}