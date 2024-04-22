# 0x00. ES6 Basics
An introductory project on:

- What ES6 is
- New features introduced in ES6
- The difference between a constant and a variable
- Block-scoped variables
- Arrow functions and function parameters default to them
- Rest and spread function parameters
- String templating in ES6
- Object creation and their properties in ES6
- Iterators and for-of loops

## Requirements
- The code should use the js extension
- The code will be tested using the [Jest Testing Framework](https://jestjs.io/)
- The code will be analyzed using the linter [ESLint](https://eslint.org/) along with specific rules that we’ll provide
- All of the functions must be exported

## File Descriptions
### Mandatory

1. [0-constants.js](./0-constants.js) - Modify
	- function `taskFirst` to instantiate variables using `const`
	- function `taskNext` to instantiate variables using `let`
	
	**Execution Example**:
	```
	niyi@ubuntu:~$ cat 0-main.js
	import { taskFirst, taskNext } from './0-constants.js';

	console.log(`${taskFirst()} ${taskNext()}`);

	niyi@ubuntu:~$ 
	niyi@ubuntu:~$ npm run dev 0-main.js 
	I prefer const when I can. But sometimes let is okay
	niyi@ubuntu:~$ 
	```
2. [1-block-scoped.js](./1-block-scoped.js) - modify the variables inside the function `taskBlock` so that the variables aren’t overwritten inside the conditional block

	**Execution Example**:
	```
	niyi@ubuntu:~$ cat 1-main.js
	import taskBlock from './1-block-scoped.js';

	console.log(taskBlock(true));
	console.log(taskBlock(false));
	niyi@ubuntu:~$
	niyi@ubuntu:~$ npm run dev 1-main.js 
	[ false, true ]
	[ false, true ]
	niyi@ubuntu:~$
	```
3. [2-arrow.js](./2-arrow.js) - Rewrite the following standard function to use ES6’s arrow syntax of the function `add`
	
 	**Execution Example**:
	```
	niyi@ubuntu:~$ cat 2-main.js
	import getNeighborhoodsList from './2-arrow.js';

	const neighborhoodsList = new getNeighborhoodsList();
	const res = neighborhoodsList.addNeighborhood('Noe Valley');
	console.log(res);
	niyi@ubuntu:~$
	niyi@ubuntu:~$ npm run dev 2-main.js 
	[ 'SOMA', 'Union Square', 'Noe Valley' ]
	niyi@ubuntu:~$
	```

4. [3-default-parameter.js](./3-default-parameter.js) - Condense the internals of the following function to 1 line - without changing the name of each function/variable.
	
 	**Execution Example**:
	```
	niyi@ubuntu:~$ cat 3-main.js
	import getSumOfHoods from './3-default-parameter.js';

	console.log(getSumOfHoods(34));
	console.log(getSumOfHoods(34, 3));
	console.log(getSumOfHoods(34, 3, 4));
	niyi@ubuntu:~$
	niyi@ubuntu:~$ npm run dev 3-main.js 
	142
	56
	41
	niyi@ubuntu:~$
	```
5. [4-rest-parameter.js](./4-rest-parameter.js) - Modify the following function to return the number of arguments passed to it using the rest parameter syntax
	
 	**Execution Example**:
	```
	niyi@ubuntu:~$ cat 4-main.js
	import returnHowManyArguments from './4-rest-parameter.js';

	console.log(returnHowManyArguments("one"));
	console.log(returnHowManyArguments("one", "two", 3, "4th"));
	niyi@ubuntu:~$
	niyi@ubuntu:~$ npm run dev 4-main.js 
	1
	4
	niyi@ubuntu:~$
	```
6. [5-spread-operator.js](./5-spread-operator.js) - Using spread syntax, concatenate 2 arrays and each character of a string by modifying the function below

   	**Execution Example**:
	```plaintext
	niyi@ubuntu:~$ cat 5-main.js
	import concatArrays from './5-spread-operator.js';

	console.log(concatArrays(['a', 'b'], ['c', 'd'], 'Hello'));

	niyi@ubuntu:~$
	niyi@ubuntu:~$ npm run dev 5-main.js 
	[
 	 'a', 'b', 'c',
  	 'd', 'H', 'e',
 	 'l', 'l', 'o'
	]
	niyi@ubuntu:~$
 	```
7. [6-string-interpolation.js](./6-string-interpolation.js) - Rewrite the return statement to use a template literal so you can the substitute the variables you’ve defined

	**Execution Example**:
   	```
	niyi@ubuntu:~$ cat 6-main.js
	import getSanFranciscoDescription from './6-string-interpolation.js';

	console.log(getSanFranciscoDescription());

	niyi@ubuntu:~$
	niyi@ubuntu:~$ npm run dev 6-main.js 
	As of 2017, it was the seventh-highest income county in the United States, with a per capita personal income of $119,868.
    As of 2015, San Francisco proper had a GDP of $154.2 billion, and a GDP per capita of $178,479.
	niyi@ubuntu:~$
	```
8. [7-getBudgetObject.js](./7-getBudgetObject.js) - Modify the following function’s budget `object` to simply use the keyname instead

	**Execution Example**:
	```
	niyi@ubuntu:~$ cat 7-main.js
	import getBudgetObject from './7-getBudgetObject.js';

	console.log(getBudgetObject(400, 700, 900));

	niyi@ubuntu:~$
	niyi@ubuntu:~$ npm run dev 7-main.js 
	{ income: 400, gdp: 700, capita: 900 }
	niyi@ubuntu:~$
	```
9. [8-getBudgetCurrentYear.js](./8-getBudgetCurrentYear.js) - Rewrite the `getBudgetForCurrentYear` function to use ES6 computed property names on the `budget` object

	**Execution Example**:
	```
	niyi@ubuntu:~$ cat 8-main.js
	import getBudgetForCurrentYear from './8-getBudgetCurrentYear.js';

	console.log(getBudgetForCurrentYear(2100, 5200, 1090));

	niyi@ubuntu:~$
	niyi@ubuntu:~$ npm run dev 8-main.js 
	{ 'income-2021': 2100, 'gdp-2021': 5200, 'capita-2021': 1090 }
	niyi@ubuntu:~$
	```
10. [9-getFullBudget.js](./9-getFullBudget.js) - Rewrite `getFullBudgetObject` to use ES6 method properties in the `fullBudget` object

	**Execution Example**:
	```
	niyi@ubuntu:~$ cat 9-main.js
	import getFullBudgetObject from './9-getFullBudget.js';

	const fullBudget = getFullBudgetObject(20, 50, 10);

	console.log(fullBudget.getIncomeInDollars(fullBudget.income));
	console.log(fullBudget.getIncomeInEuros(fullBudget.income));

	niyi@ubuntu:~$
	niyi@ubuntu:~$ npm run dev 9-main.js 
	$20
	20 euros
	niyi@ubuntu:~$
	```
11. [10-loops.js](./10-loops.js) - Rewrite the function `appendToEachArrayValue` to use ES6’s `for...of` operator
	
	**Execution Example**:
	```plaintext
	niyi@ubuntu:~$ cat 10-main.js
	import appendToEachArrayValue from './10-loops.js';

	console.log(appendToEachArrayValue(['appended', 'fixed', 'displayed'], 'correctly-'));

	niyi@ubuntu:~$
	niyi@ubuntu:~$ npm run dev 10-main.js 
	[ 'correctly-appended', 'correctly-fixed', 'correctly-displayed' ]
	niyi@ubuntu:~$
	```
13. [11-createEmployeesObject.js](./11-createEmployeesObject.js) - Write a function named `createEmployeesObject` that will receive two arguments:
	- `departmentName` (String)
	- `employees` (Array of Strings)
	
	The function should return an object with the following format:
	```
	{
     		$departmentName: [
          	$employees,
     		],
	}
	```

	**Execution Example**:
	```
	niyi@ubuntu:~$ cat 11-main.js
	import createEmployeesObject from './11-createEmployeesObject.js';

	console.log(createEmployeesObject("Software", [ "Bob", "Sylvie" ]));

	niyi@ubuntu:~$
	niyi@ubuntu:~$ npm run dev 11-main.js 
	{ Software: [ 'Bob', 'Sylvie' ] }
	niyi@ubuntu:~$
	```
14. [12-createReportObject.js](./12-createReportObject.js) - Write a function named `createReportObject` whose parameter, `employeesList`, is the return value of the previous function `createEmployeesObject`.

	- `createReportObject` should return an object containing the key `allEmployees` and a method property called `getNumberOfDepartments.`
	- `allEmployees` is a key that maps to an object containing the department name and a list of all the employees in that department.
	- The method property receives `employeesList` and returns the number of departments.

	**Execution Example**:
	```
	niyi@ubuntu:~$ cat 12-main.js
	import createEmployeesObject from './11-createEmployeesObject.js';
	import createReportObject from './12-createReportObject.js';

	const employees = {
	    ...createEmployeesObject('engineering', ['Bob', 'Jane']),
	    ...createEmployeesObject('marketing', ['Sylvie'])
	};      

	const report = createReportObject(employees);
	console.log(report.allEmployees);
	console.log(report.getNumberOfDepartments(report.allEmployees));

	niyi@ubuntu:~$
	niyi@ubuntu:~$ npm run dev 12-main.js 
	{ engineering: [ 'Bob', 'Jane' ], marketing: [ 'Sylvie' ] }
	2
	niyi@ubuntu:~$
	```
### Advanced
14. [100-createIteratorObject.js](./100-createIteratorObject.js) - Write a function named `createIteratorObject`, that will take into argument a report Object created with the previous function `createReportObject`.
	- This function will return an iterator to go through every employee in every department.
	**Execution Example**:
	```
	niyi@ubuntu:~$ cat 100-main.js
	import createIteratorObject from "./100-createIteratorObject.js";

	import createEmployeesObject from './11-createEmployeesObject.js';
	import createReportObject from './12-createReportObject.js';

	const employees = {
	    ...createEmployeesObject('engineering', ['Bob', 'Jane']),
	    ...createEmployeesObject('marketing', ['Sylvie'])
	};

	const report = createReportObject(employees);

	const reportWithIterator = createIteratorObject(report);

	for (const item of reportWithIterator) {
	    console.log(item);
	}

	niyi@ubuntu:~$
	niyi@ubuntu:~$ npm run dev 100-main.js 
	Bob
	Jane
	Sylvie
	niyi@ubuntu:~$
	```
15. [101-iterateThroughObject.js](./101-iterateThroughObject.js) - write a function named `iterateThroughObject`. The function’s parameter `reportWithIterator` is the return value from `createIteratorObject`.
	- It should return every employee name in a string, separated by `|`

	```
	niyi@ubuntu:~$ cat 101-main.js
	import createEmployeesObject from "./11-createEmployeesObject.js";
	import createReportObject from './12-createReportObject.js';
	import createIteratorObject from './100-createIteratorObject.js';
	import iterateThroughObject from './101-iterateThroughObject.js';

	const employees = {
	    ...createEmployeesObject('engineering', ['Bob', 'Jane']),
	    ...createEmployeesObject('marketing', ['Sylvie'])
	};

	const report = createReportObject(employees);
	const reportWithIterator = createIteratorObject(report);

	console.log(iterateThroughObject(reportWithIterator));

	niyi@ubuntu:~$
	niyi@ubuntu:~$ npm run dev 101-main.js 
	Bob | Jane | Sylvie
	niyi@ubuntu:~$
	```
