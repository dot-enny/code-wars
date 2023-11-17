function countSalutes (hallway) {
    let leftBrothas = 0;
    let salutes = 0;
    for (const brotha of hallway) {
        if (brotha == '>') leftBrothas++;
        if (brotha == '<' && leftBrothas) salutes+=2*leftBrothas;
    };
    return salutes;
};

function countSalutes2 (hallway) {
    let leftBrothas = 0;
    let salutes = 0;
    for (const brotha of hallway) {
        if (brotha == '>') leftBrothas++;
        else if (brotha == '<') salutes+=2*leftBrothas;
    };
    return salutes;
};

let hall = '>----->-----<--<';
console.log(countSalutes2(hall));
hall = '<---<--->----<';
console.log(countSalutes2(hall));
