/*
Global Scope Pollution in JavaScript

Global Scope Pollution means too many variables/functions are created in the global scope, which can cause naming conflicts and bugs.

Example:

                var name = "Tanushika";

                function greet() {
                     console.log("Hello");
                }

Both name and greet are added to the global scope.

Now imagine another file also has:

var name = "Rahul";
The old value gets overwritten. This  very imp point  called global namespace pollution.
*/



/*
Bahut achha question hai. Interview mein bhi pucha jata hai: **"IIFE use hi kyu karte the?"**

## IIFE ka Main Purpose

**Ek private scope create karna aur code ko turant execute karna.**

```js
                    (function () {
                        var secret = "Hidden";
                        console.log(secret);
                    })();
```

Yeh function define hote hi execute ho jayega aur `secret` bahar access nahi hoga.

---

                        # 1. Global Scope Pollution se Bachna

Maan lo tumhari website mein multiple JS files hain.

### Without IIFE

```js
var user = "Tanushika";
```

Dusri file:

```js
var user = "Rahul";
```

Ab pehla `user` overwrite ho sakta hai.

### With IIFE

```js
(function () {
    var user = "Tanushika";
})();
```

`user` sirf function ke andar rahega.

---

                            # 2. Private Variables Banana

JavaScript mein pehle private variables ka concept directly nahi tha.

```js
const counter = (function () {
    let count = 0;

    return {
        increment() {
            count++;
            return count;
        }
    };
})();

console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
```

Yahan `count` bahar se access nahi ho sakta.

---

#                            3. Code Ko Immediately Run Karna

Agar page load hote hi kuch kaam karna hai:

```js
(function () {
    console.log("App Initialized");
})();
```

Function ko alag se call karne ki zarurat nahi.

---

                                # 4. Closures Create Karne Mein

Purane JavaScript code mein loops ke saath IIFE bahut use hota tha.

### Problem

```js
for (var i = 1; i <= 3; i++) {
    setTimeout(function () {
        console.log(i);
    }, 1000);
}
```

Output:

```js
4
4
4
```

### IIFE Solution

```js
                        for (var i = 1; i <= 3; i++) {
                            (function (j) {
                                setTimeout(function () {
                                    console.log(j);
                                }, 1000);
                            })(i);
                        }
```

Output:

```js
1
2
3
```

---

# Aajkal IIFE Kam Kyu Use Hota Hai?

ES6 ke baad:

* `let`
* `const`
* Modules (`import/export`)

aa gaye hain.

```js
{
    let x = 10;
}

console.log(x); // Error
```

Block scope mil gaya, isliye IIFE ki need kam ho gayi.

---

# Interview Answer (Short)

**IIFE (Immediately Invoked Function Expression) ka purpose:**

1. Global scope pollution avoid karna.
2. Private variables create karna.
3. Code ko immediately execute karna.
4. Closures aur data encapsulation provide karna.

```js
(function () {
    // private scope
})();
```

**One-line memory trick:**

👉 **"IIFE = Execute now + Create private scope."** ✅

*/



// note:
// Main point to remember: IIFE ka main purpose hota hai global scope pollution se bachna, private variables create karna, code ko immediately execute karna, aur closures create karna. Aajkal ES6 ke features ki wajah se IIFE ki need kam ho gayi hai, lekin phir bhi ye ek important concept hai JavaScript mein.




// when two IIFE are written one after another then they are executed in the order they are written and they do not interfere with each other because they have their own private scope.
// then we need to terminate the upr wala IIFE with a semicolon to avoid any syntax error because if we do not terminate the first IIFE with a semicolon then it will be considered as a part of the second IIFE and it will throw an error because it will not be able to find the closing parenthesis of the first IIFE and it will throw an error. So, it  very imp point  always a good practice to terminate the IIFE with a semicolon to avoid any syntax error.

(function () {
    console.log("First IIFE");
})();// yaha semicolon nhi lgayenge to error ayegi 
(function () {
    console.log("Second IIFE");
})();
// this  very imp point 