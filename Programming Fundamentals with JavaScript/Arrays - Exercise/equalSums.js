function equalSums(arr) {

    let sumLeft = 0;
    let sumRight = 0;
    let equal = false;
    let index = 0;

    for (let i = 0; i < arr.length; i++) {
        let temp = arr[i];

        if (i === 0) {
            sumLeft = 0;
        }

        if (i === 1) {
            sumLeft += arr[0];
        }

        if (i == arr.length - 1) {
            sumRight = 0;
        }

        if (i == arr.length - 2) {
            sumRight = arr[arr.length - 1]
        }
