function oscars(input) {
    let index = 0
    let nameActor = input[index];
    index++;
    let points = Number(input[index]);
    index++
    let evaluativeNum = Number(input[index]);
    index++

    for (let i = 0; i < evaluativeNum; i++) {
        let evaluativeName = input[index];
        index++;
        let evaluativePoints = Number(input[index]);
        index++;
        evaluativePoints = (evaluativeName.length * evaluativePoints) / 2
        points += evaluativePoints;
        if (points > 1250.5) {
            break;
        }
    }
    if (points >= 1250.5) {

        console.log(`Congratulations, ${nameActor} got a nominee for leading role with ${points.toFixed(1)}!`);

    } else
        console.log(`Sorry, ${nameActor} you need ${(1250.5 - points).toFixed(1)} more!`)
}
oscars(["Zahari Baharov",
"205",
"4",
"Johnny Depp",
"45",
"Will Smith",
"29",
"Jet Lee",
"10",
"Matthew Mcconaughey",
"39"])