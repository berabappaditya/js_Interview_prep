# MERN stack professional preparation
 ### Topic must go through
 ## Frontend
  ### HTML
   - HTML5 features
     [read](https://www.browserstack.com/guide/top-html5-features)
   - Proper usage of block scope and inline tags
  ### CSS
   - Different ways to center element
     [Read](https://www.freecodecamp.org/news/how-to-center-a-div-with-css-10-different-ways/)
   - Flexbox
     [Read](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
   - Grid
     [Read](https://css-tricks.com/snippets/css/complete-guide-grid/)
   - Responsiveness
     [Read](https://css-tricks.com/a-complete-guide-to-css-media-queries/)
 ### React.js
   - Component life Cycle
   - Virtual DOM
   - Fundamental of react
   - Hooks
   - Interceptor and middleware 
   - index DB
   - local storage
   - private and publice route
   - High order component
   - Custome Hook
### Javascript 
   - Basic Data types
     ```
     Primitive Data Type
     1.Boolean
     2.Number
     3.String
     4.null
     5.Undefined
     6.Symbol
     Non-Premitive Data Type
     1.Object
     2.Array
     3.Function
     4.Date
     5.RegExp
     6.Others(set,Map)ES6 only
     
     ```
   - var, let, const
   - ES6 new features
     ```
     1. Array Methods with Chainable Calls:
     Ex. arr.map(),arr.filter()
     2. Spread Operator (...) for In-place Modifications:
     Ex. const num = [1, 2, 3, 4, 5];
         numbers.push(...numbers.map(number => number * 2));
         console.log(numbers); // Output: [2, 4, 6, 8, 10] (original array modified)
     3. const and let keywords
     4. Arrow Function
     5. Classes
     6. Enhanced object literals
     7. Template strings
     8. Rest and spread operators
     9. Destructuring
     10. Promises
     Ex: function asyncFun(){
                  return new Promise((resolve,reject)=>{
                        resolve() or reject()
                   })
         }
     
     
     ```
   - Event loop in js
   - OOPs
   - Async Await
   - Hoisting
   - curring
   - setTime out
   - Lexical Scope
   - Scope chain
   - Higher order functions
   - Arrow Function
   - Error Handling
   - Promise  
      <pre style="background-color: #f2f2f2; padding-left: 10px; border: 1px solid #ddd;">
      <code style="color: #C3E8CE; font-family: 'Ubuntu Mono', monospace;">
      A Node.js Promise is a placeholder for a value that will be available in the future,
      allowing us to handle the result of an asynchronous task once it has completed or encountered an error.
      Promises make writing asynchronous code easier. They’re an improvement on the callback pattern and very popular in Node.js 
      
       Define a promise: a promise is a JavaScript object that represents the eventual completion or failure of an asynchronous operation 
      const myPromise = new Promise((resolve, reject) => {
        console.log("Promise is running");
        setTimeout(() => {
          if (true) {
            resolve("foo");
            reject("rejected");
          }
        }, 300);
      });
      
      myPromise
        .then((value) => {
          return value + " one";
        })
        .then((value) => {
          return value + " two";
        })
        .then((value) => {
          return value + " three";
        })
        .then((value) => {
          return value + " four";
        })
        .then((value) => {
          console.log("Five");
          console.log(value);
        })
        .catch((err) => {
          console.log("iamerr", err);
        });
      </code>
      </pre>

   - Debounce and throtoling
   - pollyfill
   - Array Method
   - closure
   - object string
   - prototype
   - spread operator
   - event bubbling
   - call back hell
   - call, apply, bind
## Typescript
   - Inteface
   - oops concept
### Important questions 
1. How can we fetch API data without using useEffect hook?
2. What are the security measures which should be considered during development?
3. Can we return setData inside a component?
4. Multiple useEffects in a same component?
5. Higher order components or custom hooks? Which approach will you follow.
6. Why do we need currying in JS? Explain with example.
7. Explain Array prototyping, generators.
8. Explain Middlewares in React which you have used?
9. Function closures and bind method difference.
10. Explain service and web workers.
11. Write a program to fetch real time data for a cricket/football match.
12. Statess components?
13. How do you fetch multiple APIs in a single time.
14. Interceptors in axios library?
15. React suspense?
16. How will you select between SSR and CSR for you application? What parameters will you consider.
17. What is A11y issues? How do you handle it?
18. Box model, CSS animation, SASS variables and mixins in CSS.
19. How authentication works with JWT?
20. What is selective hydration?
21. Crawlers, indexing a page and what are the ways?
22. Explain redux architecture.
23. How will you set redirects using axios library.
24. Different types of object creation.
25. Explain hoisting, TDZ.
26. Explain IIFE with example.
27. What is obj literal and JSON obj.
28. First class functions.
29. Error pages creation
30. Scopes in JS
31. Event Loop - Task/MicroTask Queues.
32. Second Largest numb from array without using Math, sort functions.
33. Synthetic events
34. Cookies, localStorage and sessionStorage
35. How Babel works?
36. Explain webpack, parcel and some of its features.
37. Challenges with react js
38. Memoization techniques, pure functions and pure components.
39. HTTP methods...explain
40. Call, apply and bind
41. Arrow functions, anonymous functions,this keyword
42. ES6 features.
43. Create a traingle using CSS
44. Explain rate limiting and write a small code to demonstrate.
45. ESLint and security plugins used in your proj?
46. CORS, CSP and XSS explain
47. Tree shaking, debouncing and throttling
48. Write a pgrm for form validation without using any library
49. Array operations
50. Nested array operations, flattening of an array likewise
51. Performance optimization techniques explain
52. Shallow and deep copy..explain how will you create it
53. Various hooks syntax useParam, useReducer, useQuery, useContext and many more.
## Back end
  ### Node.js
   - Routing
   - How node js work(Asynchronous execution)
   - Rest API
   - post, put, get, delete 
   - Different Type of API's(Rest,soap,diff.)
   - Middleware
   - server creation
   - caching
   - cookies
   - session storage(what is session)
   - error handling
   - Security
   - Multithreading ( exec, fork, spawn)
   - Microservices
   - writing test case in Node.js
   - why we use express
   - privaye route
### DSA (only for fang)
   - Tri Node
   - Sorting
   - graph trees
   - Dyanamic programming
   - stack queue
   - Recursion
### System design
   - How to build Scalable Backends?
   - How to deploy your Websites?
   - Why Node.js is not single-threaded?
   - Why security is the most important aspect of Backend Development?
   - What are Webhooks?

# some best resource
[5 Interview Questions You Must know as a Backend Developer](https://www.youtube.com/watch?v=ack9Eb7Hvqk)
     
  
