function showMsg(user, msg) {
    console.log(`${user},${msg}`);
}
showMsg("Привет", "JavaScript!")




function func(param1, param2, param3) {
    console.log(param1 + param2 + param3)
}
func(1 + 2 + 3)


function checkVelo(wheels, weight) {
    if (wheels < 4 && weight < 100) {
        return "паркофка разрешена"
    } else {
        return "паркофка для велосепедоф"
    }
}
wheels, weight = checkVelo(2, 104);
console.log(wheels, weight);






function func(n, a) {
    if (n % 2 && a % 2) {
        return n + a;
    } else (n % 2 && a % 2)
    return n * a
}



function checkVelo(wheels, weight) {


    if (wheels < 2 && weight < 100) {

        return "Парковка разрешена"
    } else {
        return "Парковка только для велосипедов"
    }
}
let wheels, weight = checkVelo(4, 104);
console.log(wheels, weight);