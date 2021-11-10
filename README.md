# _Mr. Roboger's Neighborhood_

#### By _**Kim Brannian**_

#### 

## Technologies Used

* _HTML_
* _CSS_
* _Javascript_
* _JQuery_


## Description

__A web application for a user to input a number and recieve a little "Beep, Booop, Won't you be my neighbor?" if they enter a 1, 2, and 3 anywhere in their number._

## Setup/Installation Requirements

* _Clone this repository to your desktop_
* _Navigate to the index.html page_
* _Open the page in your browser_

## Describe: beepBoop()
 
  _Test 1: It should return an array with 0 if the number 0 is inputted
  Code: for(beep [];
  Expected Output: [0]

_Test 2: It should return an array with 1,2,3,4,5 if user input number is 5
Code: const userInput = 5;
      let beep = []
      for (i=0; i<=userInput; i++) {
      beep.push(i);
      }
Expected Output: [0,1,2,3,4,5]  

_Test 3: numberString () It should return the array elements back as string elements and split them
Code:    for (i=0; i<=userInput; i=++);
           let stringNumber = (i.toString().split(""));
Expected Output: [['0','1','2','3','4','5']

_Test 4: () It should find all elements with "3","2", then "1"  and create new array with text replacement
 Code: for (i=0; i<=userInput; i++) {
  let stringNumber = (i.toString().split(""))
  if (stringNumber.includes("3")) {
    beep.push("Won't you be my neighbor");
  } else if (stringNumber.includes("2")) {
    beep.push("Boop!");
  } else if (stringNumber.includes("1")) {
    beep.push("Beep!");
  } else {
    beep.push(i);
  }
}
 Expected Output: ['0','Beep','Boop','Won't you be my neighbor'

## Known Bugs

No known bugs

## License

_{ _Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:_

_git The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software._

_Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

_

Copyright (c) _10/29/21_ _Kim Brannian_
https://github.com/kimberkay/robogers-neighborhood.git
