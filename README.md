# MERN stack professional preparation
 ### Topic must go through
 ## Frontend
  ### HTML
   - HTML5 features
   - Proper usage of block scope and inline tags
  ### CSS
   - Different ways to center element
   - Flexbox
   - Grid
   - Responsiveness
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
   - var, let, const
   - ES6 new features
   - Event loop in js
   - OOPs
   - Async Await
   - Hoisting
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
     
  
