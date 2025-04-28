function countTrhuty(array) {
    let truthyCount = 0;
    for (let element of array) {
        if (element) {
            truthyCount++;
        }
    }
    console.log(truthyCount);
}

countTrhuty([1, null, 0, 4, false]);