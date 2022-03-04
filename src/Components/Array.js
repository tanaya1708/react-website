import React, { Component } from "react";

class Array extends Component {

  render() {
      // 'fruits' array created using array literal notation.
        const fruits = ['Apple', 'Banana'];
        console.log(fruits.length);


      //Join
        const emplyoee = ['Tanaya', 'Priya'];
        const emplyoeeString = emplyoee.join(', ');
        console.log(emplyoeeString);


      //splice() method to remove the first 3 items.
        const color = ['pink', 'Orange', 'Cherry', 'white', 'black'];
        const start = 0;
        const deleteCount = 3;
        const removedItems = color.splice(start, deleteCount);
        console.log(color);
        console.log(removedItems);
 

        //Call a function on each element in an array
        const laptops = ['Hp', 'Acer', 'Apple'];
        laptops.forEach(function(item, index, array) {
        console.log(item, index);
        });


        //Merge multiple arrays together
        const number = ['1', '2', '3'];
        const cartoon = ['oggy', 'tom&jerry'];
        const combinedarray = number.concat(cartoon);
        console.log(combinedarray);


        //copy an array
        const mobile = ['moto', 'Jio'];
        // Create a copy using spread syntax.
        const mobileCopy = [...mobile];
        console.log(mobileCopy);


        //array.pop examples
        const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];
        console.log(plants.pop());
        console.log(plants);
        plants.pop();
        console.log(plants);


        //array.push example
        const animals = ['pigs', 'goats', 'sheep'];
        const count = animals.push('cows');
        console.log(count);
        console.log(animals);
        animals.push('chickens', 'cats', 'dogs');
        console.log(animals);


        //array reduce
        const array1 = [1, 2, 3, 4];
        const initialValue = 0;
        const sumWithInitial = array1.reduce(
        (previousValue, currentValue) => previousValue + currentValue,
        initialValue
        );
        console.log(sumWithInitial);


        //array right
        const array2 = [[0, 1], [2, 3], [4, 5]].reduceRight(
            (accumulator, currentValue) => accumulator.concat(currentValue)
          );
          console.log(array2);


        //sorting array
        const months = ['March', 'Jan', 'Feb', 'Dec'];
        months.sort();
        console.log(months);
        const array3 = [1, 30, 4, 21, 100000];
        array1.sort();
        console.log(array3);

        //Replace multiple items
        const items = ['mouse', 'banana', 'blackberry'];
        const initial = -2;
        const delCount = 2;
        const remItems = items.splice(initial, delCount, 'Mango', 'Cherry');
        console.log(items);
        console.log(remItems);

        //creating two dimensional array
        const board = [
          ['R','N','B','Q','K','B','N','R'],
          ['P','P','P','P','P','P','P','P'],
          [' ',' ',' ',' ',' ',' ',' ',' '],
          [' ',' ',' ',' ',' ',' ',' ',' '],
          [' ',' ',' ',' ',' ',' ',' ',' '],
          [' ',' ',' ',' ',' ',' ',' ',' '],
          ['p','p','p','p','p','p','p','p'],
          ['r','n','b','q','k','b','n','r'] ];
        
        console.log(board.join('\n') + '\n\n');
        board[4][4] = board[6][4];
        board[6][4] = ' ';
        console.log(board.join('\n'));

        //tabulate sets of values
        const values = [];
        for (let x = 0; x < 10; x++) {
          values.push([
            2 ** x,
            2 * x ** 3 ,
          ]);
        }
        console.table(values);



    return (
      <div>
        <h3>Arrays related mathods</h3>
      </div>
    );
  }
}

export default Array;