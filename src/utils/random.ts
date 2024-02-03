export class RandomCards {
    fisherYatesRandomCards() {
        const numberOfCards = 40;
        let randomNumbers = [];
        //create an array of numbers between 0 and numberOfCards
        for (let i = 0; i < numberOfCards; i++) {
            randomNumbers.push(i);
        }

        // Shuffle the array using Fisher-Yates' algorithm
        for (let i = randomNumbers.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [randomNumbers[i], randomNumbers[j]] = [randomNumbers[j], randomNumbers[i]];
        }

        // Extract the first 40 items without repetitions
        let numbers = randomNumbers.slice(0, numberOfCards);

        return numbers;
    }   
}


//var numeriCasuali = fisherYatesRandomCards();
//console.log(numeriCasuali);
