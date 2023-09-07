///-------------HASH MAPS / ARRAYS-----------------///

// #region *containsDuplicate*
//const containsDuplicate = function (nums) {
// 3 approaches:
//? compare every element to every other element O(n^2)
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = 0; j < nums.length; i++) {
//       if (nums[i] === nums[j]) {
//         return true;
//       }
//     }
//   }
//   return false;

//? sort the array and compare every element to its next element O(n)
//   nums.sort((a, b) => a - b);
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === nums[i + 1]) return true;
//   }
//   return false;

//? use a hash table. If the elem is not in the table, add it, if it is, return true
// const map = {};
// for (const num of nums) {
// if there is already a value, then its a duplicate so return true
//if (map[num]) return true;
// adding value to the map if there is no one.
//  map[num] = true;

// console.log(map);
//   }
//   return false;
// };

//containsDuplicate([1, 3, 3, 4]);
// console.log(containsDuplicate([1, 3, 3, 4]));

// #endregion

// #region *isAnagram*
//2 approaches
// count the occurances of each character in both strings because if they must have the same occuramce of particular characters => 2 hashmaps with key of character and value of its occurance. then compare the occurances for each table
// if they are indeed the nagrams, if we sort the strings, they must become the same
// const isAnagram = function (str1, str2) {
//   if (!str1 || !str2) return false;

//   if (str1.length !== str2.length) return false;

//   let map = {};

//char in str1 is only for object and arr iteration on properties. char of str itarates even on strings , maps
//   for (let char of str1) {
//     map[char] ? (map[char] += 1) : (map[char] = 1);
//   }

//   for (let char of str2) {
//     if (!map[char]) {
//       console.log("caled");
//       return false;
//     } else {
//       console.log("caled2");

//       map[char] -= 1;
//     }

//     console.log(map);
//   }
//   return true;
// };

// const case1 = ["anagram", "nagaram"];
// const case2 = ["rat", "car"];
// isAnagram("anagram", "nagaram");

// console.log(isAnagram("anagram", "nagaram"));

// #endregion

// #region twoSum
// 2 approaches
// check every combination for every element
// create a hashmap. add num with its index in the map if it's not in the map yet(that way we avoid using duplicates). Do that for the whole array. Then take the target and extract map properties from it. Simultaneously check if target minus num value exists in the map. If it exists then we have found the sum nums
// const twoSum = function (nums, target) {
//   if (nums.length < 0) return false;

//   let map = new Map();

//   for (let i = 0; i < nums.length; i++) {
//     let neededNumber = target - nums[i];

// keys in the map are unique so no worries on duplication
// By moving the map.set(nums[i], i); line below the if statement, you can ensure that the function checks for the needed number in the map before adding the current number
//     if (map.has(neededNumber)) {
//       return [i, map.get(neededNumber)];
//     }

//     map.set(nums[i], i);
//   }
// };

// twoSum([2, 11, 15, 7, 7], 9);

// #endregion

// #region  Group Anagrams
// solution => https://646634.medium.com/grouping-anagrams-together-in-javascript-4da359d6bb98
// for to words => return  word1.split("").sort().join("") === word2.split("").sort().join("")
// const groupAnagrams = function (strs) {
//   if (strs.length <= 0) return false;
//   if (strs.length === 1) {
//     return [strs];
//   }

//   let map = {};
//   for (let word of strs) {
//     let sorted = word.split("").sort().join("");

//     if (map[sorted]) {
//       map[sorted].push(word);
//     } else {
//       map[sorted] = [word];
//     }
//   }

//   return [Object.values(map)];
// };

// groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);

// console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));

// #endregion

// #region Top K Frequent Elements
// solution => create a map of values and their frequencies. Then create a Set with frequency as index and object of corresponding values. Then take top K values.
// const topKFrequent = function (nums, k) {
//   if (nums.length < 1 || !k) return false;

//   const map = {};
//   let bucket = [];
//   let result = [];

//   // {value: occurrence}
//   for (let num of nums) {
//     map[num] ? (map[num] += 1) : (map[num] = 1);
//   }

//   // [freq: {num with that freq}]
//   for (let [num, freq] of Object.entries(map)) {
//     if (!bucket[freq]) {
//       bucket[freq] = new Set().add(num);
//     } else {
//       bucket[freq] = bucket[freq].add(num);
//     }
//   }

//   //? when you don't know something, create something that makes everything clear => I don't know how to get top occurrences from the map so I create a bucket list

//   // looping over the bucket from the end to the beginning bc the being on the right means bigger index and bigger occurrence. We take the K number of nums from the right.
//   // NOTE! in this case top 2 occurrence happens on 2nd and 4th index and when we loop through the Set we need to keep in mind that there may be an empty values between the indices =>  [{'4'}, {'2', '3'}, {}, {'1', '5'}]
//   for (let i = bucket.length - 1; i >= 0; i--) {
//     if (bucket[i]) result.push(...bucket[i]); //without spread, Set(2) are added instead of values themselves

//     if (result.length === k) break;
//   }

//   return result;
// };

// topKFrequent(
//   [1, 1, 1, 2, 2, 3, 3, 4, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
//   1
// );
// #endregion

// #region Product of Array Except Self
/* 
I(input): number[] - nums
O(output): number[] - product of all elements except of itself
C(conditions): O(n), cannot use division(you can use multiply all the elems together and divide it by num[i]. solved)

product - A*B*C*D = ABCD

nums = [1,2,3,4]
leftProduct = [1,1,2,6] => determine left products for every elem
rightProduct = [24,12,4,1]
solutionArr = leftProduct * rightProduct = [24,12,8,6]

what do we need to store? we need an array of elements that are PRODUCT at the left of the num[i] and another at the right
*/

// const productExceptSelf = function (nums) {
//   let leftProduct = [];
//   let rightProduct = [];
//   let solution = [];

//   //populate leftProduct O(n)
//   for (let i = 0; i < nums.length; i++) {
//     if (leftProduct.length === 0) {
//       leftProduct.push(1);
//     } else {
//       leftProduct.push(leftProduct[i - 1] * nums[i - 1]);
//       console.log(leftProduct);
//     }
//   }

//   // populate rightProduct O(n); going backwards
//   for (let i = nums.length - 1; i > -1; i--) {
//     if (rightProduct.length === 0) {
//       rightProduct.push(1); //instantiating
//     } else {
//       rightProduct.unshift(rightProduct[0] * nums[i + 1]);
//     }
//   }

//   //populate solution O(n)
//   for (let i = 0; i < leftProduct.length; i++) {
//     solution.push(leftProduct[i] * rightProduct[i]);
//   }

//   return solution;
// };

// productExceptSelf([1, 2, 3, 4]);

// #endregion

// #region 36. Valid Sudoku

// having hash set for every col to check for duplicates
// having hash set for every row
// having hash set for every 3 x 3 sub boxes

// const isValidSudoku = function isValidSudoku(board) {
//   //The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value. A Map has a property that represents the size of the map.

//   //Each key in the Map() corresponds to a row, column, or square, and the corresponding value is a Set() object containing the unique values in that row, column, or square.

//   // [{key: set()}...]
//   const rows = new Map();
//   const cols = new Map();
//   const squares = new Map();

//   // gets particular square coordinates from 9 squares like [1,2] which corresponds to 1st row and second col square
//   function getSquareKey(r, c) {
//     return JSON.stringify([Math.floor(r / 3), Math.floor(c / 3)]);
//   }

//   for (let r = 0; r < 9; r++) {
//     for (let c = 0; c < 9; c++) {
//       // particular element
//       if (board[r][c] === ".") {
//         //Continue means that the remaining code within the current iteration of the loop is skipped, and the program moves on to the next iteration of the loop, bypassing any further code below the continue statement.
//         continue;
//       }

//       if (
//         // if found duplicates
//         rows.get(r)?.has(board[r][c]) ||
//         cols.get(c)?.has(board[r][c]) ||
//         squares.get(getSquareKey(r, c))?.has(board[r][c])
//       ) {
//         return false;
//       }

//       // populate row
//       // r: 0 1 2 3 4 5 6 7 8 9
//       if (!rows.has(r)) {
//         // map = [{key:x, value:[y]},  {key:x, value:[y]},...]
//         rows.set(r, new Set());
//       }

//       //  populate set = > {key: 0, value: ['5', '3', '7']}
//       // this adds elements in the set instead of replacing them with next iteration value
//       rows.get(r).add(board[r][c]);

//       if (!cols.has(c)) {
//         cols.set(c, new Set());
//       }
//       // populate cols
//       cols.get(c).add(board[r][c]);

//       // get key
//       const squareKey = getSquareKey(r, c);
//       if (!squares.has(squareKey)) {
//         squares.set(squareKey, new Set());
//       }

//       // map = [{"[0,0]": value:['5', '3', '6', '9', '8']}, ...]
//       squares.get(squareKey).add(board[r][c]);

//       console.log(squares);
//     }
//   }

//   return true;
// };

// isValidSudoku([
//   ["5", "3", ".", ".", "7", ".", ".", ".", "."],
//   ["6", ".", ".", "1", "9", "5", ".", ".", "."],
//   [".", "9", "8", ".", ".", ".", ".", "6", "."],
//   ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
//   ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
//   ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
//   [".", "6", ".", ".", ".", ".", "2", "8", "."],
//   [".", ".", ".", "4", "1", "9", ".", ".", "5"],
//   [".", ".", ".", ".", "8", ".", ".", "7", "9"],
// ]);
//#endregion

// #region 659· Encode and Decode Strings
/* 
the elems may include any of the characters not only a-z. So how do we know when one elem starts and when it ends?

approach => have an separate array containing number of characters for each elem like [4,5,7,8 .etc]. However, in this problem any state storing variable is not allowed so we need to store that in the string itself

1. So we need to put char num in front of every elem => "4love".

2. what if the word itself contains the number? so we add a delimiter # and assume that everything before the first # represents number of chars => "4#love".

3. what about the next elem? put its char num after the first elem and so on => "4#love5#co#de3#hey"
*/
// function encode(arr) {
//   let str = "";

//   for (let elem of arr) {
//     const encoded = `${elem.length}#${elem}`;

//     str = str + encoded; // +=encoded
//   }

//   return str;
// }

// function decode(str) {
//   const res = [];
//   for (let i = 0; i < str.length; ) {
//     let e = i;
//     while (e < str.length && str[e] !== "#") {
//       e += 1;
//     }

//     //Once the '#' character is found, e will have its index. Use parseInt() to convert the substring from index i to e into an integer, which represents the size of the encoded word.
//     const size = parseInt(str.slice(i, e));
//     const word = str.slice(e + 1, e + 1 + size);

//     //Update the index i to point to the next '#' character or the end of the input string.
//     i = e + 1 + size;
//     res.push(word);
//   }
//   console.log(res);
//   return res;
// }

// const arr = ["4li#t", "##de4", "love", "you"];
// encode(arr);
// decode(encode(arr));

// #endregion

// #region 128. Longest Consecutive Sequence
/**
 * approach1 => sort the arr but its O(n log n)
 * approach2 => how to identify the sequence?
 * whats the start or end? (every sequence doesn't have a neighbor at the left/right ანუ [100,4,200,1,2,3]ში 100-ს არ აქვს მეზობლები რა(99 და 101))
 *
 * 1. check if there is left neighbor for the num
 * 2. if there is, also check if there is the right neighbor. Meanwhile keep track of the current num, რომელსაც ვადარებთ მარჯვენა ელემენტს. Keep also the length of the consecutive elems
 * 3. keep going to the nest right elements until you hit the end
 * 4. return consecutive elems length
 */

// const longestConsecutive = function (nums) {
//   if (!nums.length) return 0;

//   //The purpose of using a Set is to eliminate duplicates and enable faster lookup of numbers( set.has(3) ). This step ensures that we don't count duplicate numbers multiple times in the consecutive sequences.
//   // [{value: 100}, {value: 4}, ...]
//   const set = new Set(nums);
//   let max = 0;

//   for (const num of set) {
//     console.log(num);
//     // For each number, it checks if the previous number (num - 1) exists in the Set by using the has() method. If the previous number is found in the Set, it means that the current number is not the start of a consecutive sequence, and the continue statement is executed.

//     // we are checking here if the prev value exists (3 for 4, 99 for 100 etc.). We don't need so sort the arr, Set is enough
//     if (set.has(num - 1)) continue;

//     //currNum: The variable currNum is initialized with the current number (num) from the Set. It serves as a reference point to iterate through the consecutive sequence. We start from the current number and increment it while checking if the next number in the sequence exists in the Set.
//     let currNum = num;

//     // currMax: The variable currMax is initialized with a value of 1. It represents the current length of the consecutive sequence being evaluated. We start with a length of 1 because the current number (num) is included in the sequence.
//     let currMax = 1;

//     // Look numbers that make a consecutive sequence
//     while (set.has(currNum + 1)) {
//       currNum++;
//       currMax++;
//     }
//     // Update max
//     max = Math.max(max, currMax);
//   }

//   return max;
// };

// const nums = [100, 4, 200, 1, 3, 2];
// longestConsecutive(nums);
// console.log(longestConsecutive(nums));

// #endregion

///-------------STACK-----------------///
// add in the end. remove from the end

// #region 20. Valid Parentheses
/**
 * invalid - ([)]
 * we need to start with open bracket to assume that str is valid
 */
// const isValid = function (s) {
//   // serves as our stack data structure.
//   let stack = [];

//   //it does make a difference if the closeToOpen object has the keys as opening brackets instead of closing brackets. We would need to modify the logic
//   let closeToOpen = {
//     ")": "(",
//     "}": "{",
//     "]": "[",
//   };

//   for (let c of s) {
//     // determine if c is closing or opening
//     if (closeToOpen.hasOwnProperty(c)) {
//       // პირველი ელემ } რომ იყოს და შესაბამისად სთექი ცარიელი რომაა, მაგის დაფუშვა არ მოჟნა, რადგან ოფენინგ არააქ და ინვალიდაა უკვე სტრინგი
//       // The comparison stack[stack.length - 1] === closeToOpen[c] is used to check if the top element(the last) of the stack matches the corresponding opening parenthesis for a closing parenthesis c.
//       // ლასთ ელემენტი თუ არ უდრის მიმდინარე cს, გამოდის რომ არაა ვალიდური სტრინგი რა და falseს დააბრუნებს.
//       if (stack.length > 0 && stack[stack.length - 1] === closeToOpen[c]) {
//         stack.pop();
//       } else {
//         return false;
//       }
//     } else {
//       stack.push(c);
//     }
//   }
//   return stack.length === 0;
// };

// const str = "([)]";

// isValid(str);

// #endregion

// #region 155. Min Stack
/* approach

სტეკის პოპულაციასთან ერთად პარალელურად ვაფოფულეითებთ მეორე სტეკს, სადაც ვინახავთ მინიმალურ მნიშვნელბებს. 
პრობლემა:
1. დავამატეთ ელემენტი -2 სტეკში. ვიცით რომ ეგაა მნინმალური, ცვლადში ვინახავთ
2. დავამატეთ 0-იანი სტეკში. ვიცით რომ -2ია ისევ მინიმალური, მაგრამ 0 რომ ამოვიღოთ სტეკიდან, საიდაგ გავიგებთ რა არის მინიმალური?

სოლუშენი:
1. დავამატეთ ელემენტი სტეკში. ამ ელემენტის მნიშვნელობა ასევე დავამატეთ მინ სტეკში
2. დაემატა შემდეგი მნიშვნელობა სტეკში. შევადარეთ ეს და წინა მნიშვნელობები და დავამატეთ მინ სტეკში შესაბამისი მნიშვნელობა.

ამით ფოფფინგი რომ მოხდება სტეკიდან ელემენტის და მის წინა ელემენტზე რომ ჩამოვვარდებით, ამ ელემენტს თავისი მინიმალური მნიშვნელობა ექნება შესაბამისობაში. ანუ ყველა სტეკის ელემენტს მინ სტეკში შესაბამისი მინიმალური მნიშვნელობა ექნება
*/
// class MinStack {
//   constructor() {
//     this.stack = [];
//     this.minStack = [];
//   }

//   push(val) {
//     const minVal = Math.min(
//       val,
//       this.minStack[this.minStack.length - 1] || val
//     );
//     this. stack.push(val);
//     this.minStack.push(minVal);
//   }

//   pop() {
//     const topVal = this.stack.pop();
//     this.minStack.pop();
//     if (
//       this.minStack.length > 0 &&
//       topVal === this.minStack[this.minStack.length - 1]
//     ) {
//       this.minStack.pop();
//     }
//   }

//   top() {
//     return this.stack[this.stack.length - 1];
//   }

//   getMin() {
//     return this.minStack[this.minStack.length - 1];
//   }
// }

// const minStack = new MinStack();
// minStack.push(-2);
// minStack.push(0);
// minStack.push(-3);
// minStack.getMin();
// minStack.pop();
// minStack.top();
// minStack.getMin();

// console.log(minStack.getMin());

// #endregion

// #region 150. Evaluate Reverse Polish Notation
// https://isaaccomputerscience.org/concepts/dsa_toc_rpn?examBoard=all&stage=all = explanation here in stack section
// const evalRPN = function (tokens) {
//   const map = {
//     "+": (a, b) => a + b,
//     "-": (a, b) => a - b,
//     "*": (a, b) => a * b,
//     "/": (a, b) => Math.trunc(a / b),
//   };
//   let stack = [];

//   for (let token of tokens) {
//     if (token in map) {
//       // if we have a operator, pop two last operands from stack and apply the operator on them and push the result back to stack
//       let [b, a] = [stack.pop(), stack.pop()];

//       // token is found in the map and a,b are given as a params to the function
//       stack.push(map[token](a, b));
//     } else {
//       // if we have a number, push it to stack
//       stack.push(Number(token));
//     }
//   }

//   return stack[0];
// };

// const tokens = [
//   "10",
//   "6",
//   "9",
//   "3",
//   "+",
//   "-11",
//   "*",
//   "/",
//   "*",
//   "17",
//   "+",
//   "5",
//   "+",
// ];
// evalRPN(tokens);
// console.log(evalRPN(tokens))

// #endregion

// #region 22. Generate Parentheses
/**
 * approach
 * the main idea is that we use number of brackets in general and number of opening/closing brackets to determine which bracket to put next in the stack
 *
 * So, when n is 3 or whatever, that means for us that we will have 3 opening brackets and 3 closing brackets. we will us that number to keep track of how many brackets we will create in general
 * Now, if number of opening brackers equals to number of closing brackers, that means that whole items have been created and we need to start a new item with opening bracket
 * if opening brackets number > closing brackets number, then it means that the item is about to be finished so we need to add another closing bracket
 *
 */
// function generateParenthesis(n) {
//   let stack = [];
//   let res = [];

//   function backtrack(openN, closedN) {
//     if (openN === closedN && openN === n) {
//       res.push(stack.join(""));
//       return;
//     }
//     if (openN < n) {
//       stack.push("(");
//       backtrack(openN + 1, closedN);
//       stack.pop();
//     }
//     if (closedN < openN) {
//       stack.push(")");
//       backtrack(openN, closedN + 1);
//       stack.pop();
//     }
//   }

//   // Call the backtrack function outside of its definition
//   backtrack(0, 0);
//   console.log(res);
//   return res;
// }

// generateParenthesis(2);

// #endregion

// #region 739. Daily Temperatures
/**
 * brutforce approach - for every single elem cket the rest of the array and see how many warmer days are theres
 * easiesr approach - სტეკში პარარა ველიუების ინდექსებს ვყრით მანამ სანამ უფრო დიდ ველიუ არ გვექნება. როცა დიდი ველიუ შემოვა, წინა პატარა ველიუებს ამოვყრით სტეკიდან, ინდექსებს ერთმანეთს გამოვაკლებთ და სხვაობას dayსში ჩავყრით
 *
 */

// const dailyTemperatures = (T) => {
//   let days = new Array(T.length).fill(0);
//   let stack = [];

//   for (let i = 0; i < T.length; ++i) {
//     while (stack.length > 0 && T[i] > T[stack[stack.length - 1]]) {
//       let index = stack.pop();
//       days[index] = i - index;
//     }

//     stack.push(i);
//   }

//   return days;
// };

// const temperatures = [73, 74, 75, 71, 69, 72, 76, 73];
// dailyTemperatures(temperatures);

// #endregion

// #region 853. Car Fleet

// const target = 12;
// const position = [10, 8, 0, 5, 3];
// const speed = [2, 4, 1, 1, 3];

// const carFleet1 = function (target, position, speed) {
//   var pair = [];
//   for (var i = 0; i < position.length; i++) {
//     pair.push([position[i], speed[i]]);
//   }

//   var stack = [];
//   var sortedPair = pair.sort(function (a, b) {
//     return b[0] - a[0];
//   });

//   for (var i = 0; i < sortedPair.length; i++) {
//     var p = sortedPair[i][0];
//     var s = sortedPair[i][1];

//     stack.push((target - p) / s);
//   }

//   var fleetCount = 0;
//   var prevTime = 0;
//   for (var i = 0; i < stack.length; i++) {
//     if (stack[i] > prevTime) {
//       fleetCount++;
//       prevTime = stack[i];
//     }
//   }

//   return fleetCount;
// };

// carFleet1(target, position, speed);

// const carFleet = function (target, position, speed) {
//   const stack = [];
//   let fleetCount = 0;
//   let prevTime = 0;

//   if (!position.length) return false;
//   // single car is fleet
//   if (position.length < 1) return 1;

//   //The car starting at 0 does not catch up to any other car, so it is a fleet by itself
//   // if the need the same time to reach the targer, they are the fleet
//   // if the cars intersect, they become the fleet

//   for (let i = 0; i < position.length; i++) {
//     const p = position[i];
//     const s = position[i];
//     stack.push((target - p) / s);
//     stack.sort();
//   }

//   for (let elem of stack) {
//     if (elem > fleetCount) {
//       fleetCount++;
//       prevTime = elem;
//     }
//   }

//   console.log(stack);

//   console.log(fleetCount);
//   return fleetCount;
// };

// carFleet(target, position, speed);

// #endregion

// #region 84. Largest Rectangle in Histogram
// => https://medium.com/algorithms-digest/largest-rectangle-in-histogram-234004ecd15a
// => https://www.youtube.com/watch?v=zx5Sw9130L0

/**
 * Let's consider different cases first:
 * 1) we have two bars. the first one is higher then the second one. This means that we cannot extend the firts one further, however we can extend the second one back. so we can compare the first and extended second one to each other
 * 2) the same goes if the firts one is smaller then the secon one
 * 3) if all the bars are the same height, thery are one rectangle
 * 4) if we have bars in increased height, each bar will be extended to the right and the last extension will be the biggest rectangle
 * ....
 *
 *
 * algorithm:
 * we are going to maintain stack of index and height and also an array of max area. e.g. if we have 1st bar higher then the seconf one, we put the 1st one in the stack with its index/height, however because it cannot be extended further but the second one can be extended back, we pop the first one and leave only second one in the stack. But the index of the second one will start at 0 not at 1 because its extended. we add max area of the 1st elem
 * if the 3rd bar is greater then the 2nd, we still add it in the stack with corresponding index and height. the 4th elem is higher then the 3rd so we add this one too because we can extend both to the right. we dont pop them.
 * however the 5th eem is smaller, than means we cannot extend 4th so we need to pop it. we add the max area of the 4th elem.
 * but the 3rd is also smaller then the 5th, so we need to pop it too and add its max area
 * ....
 *
 * the last step is the iterate over the stack, calculate the elem area and compare it with the max area value
 *
 *
 *
 *
 */

// function largestRectangleArea(heights) {
//   const n = heights.length;
//   const left = new Array(n);
//   const right = new Array(n);

//   left[0] = -1;
//   right[n - 1] = n;

//   // Compute the index of the previous smaller element on the left
//   for (let i = 1; i < n; i++) {
//     let p = i - 1;
//     while (p >= 0 && heights[p] >= heights[i]) {
//       p = left[p];
//     }
//     left[i] = p;
//   }

//   // Compute the index of the next smaller element on the right
//   for (let i = n - 2; i >= 0; i--) {
//     let p = i + 1;
//     while (p < n && heights[p] >= heights[i]) {
//       p = right[p];
//     }
//     right[i] = p;
//   }

//   // Calculate the maximum area
//   let maxArea = 0;
//   for (let i = 0; i < n; i++) {
//     maxArea = Math.max(maxArea, (right[i] - left[i] - 1) * heights[i]);
//   }

//   return maxArea;
// }

// const heights = [6, 2, 5, 4, 5, 1, 6];
// largestRectangleArea(heights);
// console.log("Maximum area is", largestRectangleArea(heights)); // Output: 12

// #endregion

///-------------Two Pointers-----------------///

// #region 125. Valid Palindrome

// /**
//  * @param {string}
//  * @return {boolean}
//  * @desc ერთდროულად თავიდან და ბოლოდამ მოვყვებით და ეგრე ვადარებთ ელემენტებს
//  */
// const isPalindrome = function (s) {
//   if (!s.length) return true;

//   const cleaned = s.replace(/[^a-zA-Z0-9]/g, "").toLocaleLowerCase();

//   let end = cleaned.length - 1;

//   for (let i = 0; i < cleaned.length; i++) {
//     if (cleaned[i] === cleaned[end]) {
//       end--;
//     } else {
//       return false;
//     }
//   }

//   return true;
// };

// const testCase = "A man, a plan, a canal: Panama";
// isPalindrome(testCase);

// #endregion

// #region 167. Two Sum II - Input Array Is Sorted
// const twoSum = function (numbers, target) {
//   let left = 0;
//   let right = numbers.length - 1;

//   while (left < right) {
//     let sum = numbers[left] + numbers[right];
//     if (sum === target) {
//       return [left, right];
//     } else if (sum < target) {
//       left++;
//     } else {
//       right--;
//     }
//   }
// };

// const testCase = [2, 7, 11, 15];
// twoSum(testCase, 9);
// console.log(twoSum(testCase, 9));
// #endregion

// #region 15. 3Sum
/**
 *
 * brute force solution=> take triple loops, however we cannot avoid duplicates
 *
 * two pinters solution =>
 * we can avoid creating duplicate triplets by not reusing the same elem twice
 * at any given elem we can for the rest of the elems use two sum approach
 *
 *
 */
// var threeSum = function (nums) {
//   // sort nums to ascending order
//   nums.sort((a, b) => a - b);

//   // [-4, -1, -1, 0, 1, 2]
//   let right = nums.length - 1;
//   let triplets = [];
//   let tripletsSet = new Set();

//   for (let i = 0; i < nums.length; i++) {
//     let left = i + 1;

//     while (left < right) {
//       const sum = nums[i] + nums[right] + nums[left];

//       if (sum === 0) {
//         tripletsSet.add(JSON.stringify([nums[i], nums[left], nums[right]]));
//         break;
//       } else if (sum < 0) {
//         left++;
//       } else {
//         right--;
//       }
//     }
//   }

//   tripletsSet.forEach((tripletJson) => triplets.push(JSON.parse(tripletJson)));

//   return triplets;
// };

// // _ + _ + _ = 0
// const case1 = [-1, 0, 1, 2, -1, -4];
// const case2 = [0, 0, 0];
// const case3 = [0, 1, 1];
// const case4 = [0, 0, 0, 0];
// const case5 = [-2, 0, 1, 1, 2];

// threeSum(case5);
// console.log(threeSum(case5));

// #endregion

// #region 11. Container With Most Water
/**
 * how to update the pointers =>
 * - if left is smaller than right, lets update the left bc why move the right, right? we want to highest and with the biggest width area.
 * - if after that turns out that the right is smaller then updated left, we move the right and so on.
 * - Simultaneously we calculate and keep max area.
 *
 * edge case - if the poisnter values are the same it really doenst matter which one do I shift.
 *
 * when we get the left and right pointers at the same position, the code should return
 */
// var maxArea = function (height) {
//   if (!height) return false;

//   let right = height.length - 1;
//   let left = 0;
//   let maxArea = 0;

//   while (left < right) {
//     calculateMax();
//     if (height[left] < height[right]) {
//       left++;
//     } else {
//       right--;
//     }
//   }

//   function calculateMax() {
//     const area = Math.min(height[left], height[right]) * (right - left);
//     maxArea = Math.max(maxArea, area);
//   }

//   return maxArea;
// };

// const case1 = [1, 8, 6, 2, 5, 4, 8, 3, 7];
// const case2 = [1, 8];

// maxArea(case2);
// console.log(maxArea(case2));

// #endregion

// #region 121. Best Time to Buy and Sell Stock
/**
 * left = prices[0] buy
 * rigth = prices[1] sell
 * profit = right - left
 *
 * if right value is less then the left, we are gonna update the left value.
 * if right value is higer then the left, we are gonna put profit in max profit arr. And since left pointer is low, we can keep it that way and update the right pointer further
 *
 */
// var maxProfit = function (prices) {
//   if (!prices.length) return false;

//   let left = 0;
//   let right = 1;
//   let maxProfit = 0;

//   while (right < prices.length) {
//     if (prices[right] <= prices[left]) {
//       const currentProfit = 0;
//       maxProfit = Math.max(maxProfit, currentProfit);
//       left = right;
//       right++;
//     } else {
//       const currentProfit = prices[right] - prices[left];
//       maxProfit = Math.max(maxProfit, currentProfit);
//       right++;
//     }
//   }

//   return maxProfit;
// };

// const case1 = [7, 1, 5, 3, 6, 4];
// const case2 = [7, 6, 4, 3, 1];
// const case3 = [2, 4, 1];
// const case4 = [2, 1, 2, 1, 0, 1, 2];
// const case5 = [1, 2, 4, 2, 5, 7, 2, 4, 9, 0, 9];

// maxProfit(case5);
// console.log(maxProfit(case5));

// #endregion

// #region 3. Longest Substring Without Repeating Characters

// var lengthOfLongestSubstring = function (str) {
//   if (!str.length) return false;

//   let longest = 0;
//   let start = 0;
//   let seen = {};

//   for (let i = 0; i < str.length; i++) {
//     let char = str[i];

//     if (seen[char]) {
//       console.log(seen[char]);
//       start = Math.max(start, seen[char]);
//     }

//     longest = Math.max(longest, i - start + 1);
//     seen[char] = i + 1;
//   }
//   return longest;
// };

// const case1 = "abcabcbb";
// const case2 = "bbbbb";
// const case3 = "pwwkew";
// const case4 = "ab cc aa";
// const case5 = "dvdf";

// lengthOfLongestSubstring(case5);
// console.log(lengthOfLongestSubstring(case5));

// #endregion

// #region 424. Longest Repeating Character Replacement
/**
 * wthat we are concerned about it finding the valid(valid means that it can replace <= K number of chars)substrings and choose the longest valid substrings
 *
 * -lets make a hashmap for each char with theoir frequencies
 *  how to we know that a window(substring) is valid?.
 * -to understand validity, we are gonna take the length of the window and the count of the most frequent chars and substract. Then we get the number of chars in the window that can be replaced. **as long substract value is less or equal to K, we know that the window is valid**
 * - we grow the window until substract value = k or shrink it if it exceeds k
 *
 *
 * detailed algorithm:
 * 1. we are gonna have left and right pointers initially at the beginning of the string
 * 2. look at the char, update count map.
 * 3. Is this window valid? for that calculate the size of the window(size of the window - count of the most frequent char <=k). If its valid, shift right pointer to the right. go to 2nd step until substarcted value will be less or equal to K.
 * 4. If valus is more then K, shift the pointer to make the substring valid again
 */
// var characterReplacement = function (s, k) {
//   if (!s) return false;
//   if (s.length === k || s.length - 1 === k) return k;

//   let map = {};
//   let left = 0;
//   let right = 0;
//   let replNum = 0;
//   let windowSize = 0;
//   let res = 0;

//   for (let elem of s) {
//     map[elem] ? map[elem]++ : (map[elem] = 1);

//     const frequencies = Object.values(map); //returns arr of values

//     windowSize = right - left + 1;

//     replNum = windowSize - Math.max(...frequencies);

//     if (replNum <= k) {
//       right++;
//       res = Math.max(res, windowSize);
//     } else {
//       map[s[left]]--;
//       left++;
//     }
//   }

//   return res;
// };

// characterReplacement("ABAB", 2);
// characterReplacement("BAAA", 0);
// console.log(characterReplacement("BAAA", 0));

// #endregion

// #region 567. Permutation in String
/*
Use a sliding window approach to compare the frequency of characters in the current window of length s1 in s2 with the frequency of characters in s1. If the frequencies match, it means a permutation of s1 exists in the current window, and you can return True. Otherwise, continue sliding the window.

A possible approach is the sliding window technique:

- Calculate the frequency of characters in string s1 and store it in a hash map or an array.
- Initialize a sliding window of the same length as s1 in s2.
- Calculate the frequency of characters in the sliding window and store it in another hash map or array.
- Compare the character frequencies of s1 with the sliding window in s2. If they match, return true.
- Slide the window in s2 by one character, update the character
 */
// var checkInclusion = function (s1, s2) {
//   if (!s1 || !s2) return false;

//   const windowSize = s1.length;
//   let map = {};
//   let windowMap = {};
//   let right = 0;
//   let left = 0;

//   for (let elem of s1) {
//     map[elem] ? map[elem]++ : (map[elem] = 1);
//   }

//   while (right < s2.length) {
//     let currentChar = s2[right];
//     windowMap[currentChar]
//       ? windowMap[currentChar]++
//       : (windowMap[currentChar] = 1);

//     // right - left + 1 is current window Size
//     if (right - left + 1 < windowSize) {
//       right++;
//     } else {
//       if (JSON.stringify(map) === JSON.stringify(windowMap)) {
//         return true;
//       }

//       windowMap[s2[left]]--;
//       left++;
//       right++;
//     }
//   }
// };

// checkInclusion('ab', 'eidbaooo');
// console.log(checkInclusion('ab', 'eidbaooo'));
// #endregion

//? if (string.indexOf(char) != i) // if char was used already

// #region 76. Minimum Window Substring

// var minWindow = function ({ s, t }) {
//   const tMap = new Map();
//   const sMap = new Map();
//   let minLen = Infinity;
//   let minStr = '';

//   for (let char of t) {
//     // char is the key and we update its value as the 2nd param
//     tMap.set(char, (tMap.get(char) || 0) + 1); // if char is undefined(not in map), assign 1, else add 1
//   }

//   let left = 0;
//   let right = 0;
//   let count = 0; // The count variable keeps track of the number of characters from t that are currently present in the window.

//   // .has(key): This method checks if the map contains a specific key.
//   // .get(key): This method retrieves the value associated with a specific key in the map
//   while (right < s.length) {
//     if (tMap.has(s[right]) && (sMap.get(s[right]) || 0) < tMap.get(s[right])) {
//       count++;
//     }

//     sMap.set(s[right], (sMap.get(s[right]) || 0) + 1);

//     while (count === t.length) {
//       if (right - left + 1 < minLen) {
//         minLen = right - left + 1;
//         minStr = s.substring(left, right + 1);
//       }

//       if (tMap.has(s[left])) {
//         sMap.set(s[left], sMap.get(s[left]) - 1);
//         if (sMap.get(s[left]) < tMap.get(s[left])) {
//           count--;
//         }
//       }
//       left++;
//     }
//     right++;
//   }

//   return minStr;
// };

// const case1 = { s: 'ADOBECODEBANC', t: 'ABC' };
// const case2 = { s: 'a', t: 'a' };
// const case3 = { s: 'a', t: 'aa' };

// minWindow(case1);

// console.log(minWindow(case1));

// #endregion

// #region 206. Reverse Linked List
// var reverseList = function (head) {
//   // checking if list has only one node or is empty
//   if (!head || !head.next) {
//     return head;
//   }
//   let rev = reverseList(head.next);
//   head.next.next = head;
//   head.next = null;
//   return rev;
// };

// //? TESTING
// // Single Linked List Class
// function LinkedListNode(value) {
//   this.value = value;
//   this.next = null;
// }

// // Create the linked list
// var node1 = new LinkedListNode(1);
// var node2 = new LinkedListNode(2);
// var node3 = new LinkedListNode(3);
// var node4 = new LinkedListNode(4);
// var node5 = new LinkedListNode(5);

// node1.next = node2;
// node2.next = node3;
// node3.next = node4;
// node4.next = node5;

// // Reverse the linked list
// var reversedList = reverseList(node1);

// console.log(reversedList);

// // Print the reversed linked list
// var currentNode = reversedList;
// while (currentNode) {
//   console.log(currentNode);
//   currentNode = currentNode.next;
// }

// #endregion

// #region behind js classes there are constructor functionls really. all class go down to function
// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }

// const person1 = new Person('ana', 22);

// //console.log(person1);

// function PersonConsttuctor(name, age) {
//   console.log(this); // {}
//   this.age = age;
//   this.name = name;

//   console.log(this); // { age: 26, name: 'bazera' }
// }

// const person2 = new PersonConsttuctor('bazera', 26);
//console.log(person2);

// #endregion

// #region reference types and copying an object
// const person = {
//   name: 'ana',
//   age: 22,
//   hobby: 'reading',
//   a: {
//     b: {
//       c: {
//         d: {
//           e: 1,
//         },
//       },
//     },
//   },
// };

// const fakeCopy = person;
// fakeCopy.name = 'giori';

// const a = 3;
// let b = a;
// b = 4;
// //console.log(a);

// // spread operator won't create a new reference for deeply nested objects. for deep copy use lodash cloneDeep. there is no built in clone deep in js
// let shallowCopy = { ...person };
// shallowCopy.hobby = 'swimming';
// shallowCopy.a.b = 2;

// console.log(person);
// #endregion

// #region this
// const personA = {
//   name: 'ana',
//   sayHi: function () {
//     console.log(`hey ${this.name}`);
//   },
// };

// const personB = {
//   name: 'giorgi',
//   sayHi: function () {
//     console.log(`hey ${this.name}`);
//   },
// };

// // this is bind to personA because it is before 'dot'. it has called it. this is avaluated AT RUN-TIME meaning it will be bind to context defined by whatever it called it
// personA.sayHi();
// personA.sayHi.bind(personB)(); // this will be bind to personB context so it will log 'giorgi'. here wi both bind and call the func. Nore () in the end
// personA.sayHi.call(personB); // call binds and calls the func.

// #endregion

// let user = {
//   name: 'bazera',
//   sayHi() {
//     console.log(this);
//     let printName = function () {
//       console.log(this.name);
//     };

//     printName();
//   },

//   printName() {
//     //console.log(this.name);
//   },
// };

// user.sayHi();

// #region difference between map and forEach
/**
 * map transforms each i and puts them into new arr. forEach won't create new arr
 */

// const nums = [1, 2, 3, 4];

// /**
//  * const fn = (x) => x * 2
//  ** fn() calling isn't nessasary because map will call it inside itself. that's bc fn is a callback
//  * nums.map(fn)
//  */
// let mapped = nums.map((x) => {
//   //! if map won't have return, it will push undefined in mapped. [ undefined, undefined, undefined, undefined ]. If I retunr 'bla', every elem in mapped will be string 'bla' etc
//   console.log(x); // [ undefined, undefined, undefined, undefined ]
// });

// console.log(mapped);

// #endregion


const setBg = () => {

  // Usage
  const startColor = '#3b3950';
  const percent = 5; // Specifies the degree to which you want to change the color,
  
  const lighterShades = shadeColor(startColor, percent);
  console.log(lighterShades);
   
  
    document.body.style.backgroundColor = lighterShades ;
    color.innerHTML = "#" + lighterShades ;
  }
  
  genNew.addEventListener("click", setBg);
  setBg();

  
  function shadeColor(color, percent) {
    if (!shadeColor.previousColor) {
      shadeColor.previousColor = color;
    }
  
    var R = parseInt(shadeColor.previousColor.substring(1, 3), 16);
    var G = parseInt(shadeColor.previousColor.substring(3, 5), 16);
    var B = parseInt(shadeColor.previousColor.substring(5, 7), 16);
  
    R = parseInt(R * (100 + percent) / 100);
    G = parseInt(G * (100 + percent) / 100);
    B = parseInt(B * (100 + percent) / 100);
  
    R = (R < 255) ? R : 255;
    G = (G < 255) ? G : 255;
    B = (B < 255) ? B : 255;
  
    R = Math.round(R);
    G = Math.round(G);
    B = Math.round(B);
  
    var RR = ((R.toString(16).length == 1) ? "0" + R.toString(16) : R.toString(16));
    var GG = ((G.toString(16).length == 1) ? "0" + G.toString(16) : G.toString(16));
    var BB = ((B.toString(16).length == 1) ? "0" + B.toString(16) : B.toString(16));
  
    var newColor = "#" + RR + GG + BB;
  
    // Update the previousColor for the next call
    shadeColor.previousColor = newColor;
  
    return newColor;
  }