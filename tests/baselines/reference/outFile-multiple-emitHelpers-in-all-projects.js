//// [/src/2/second-output.d.ts]
declare namespace N {
}
declare namespace N {
}
declare class second1 {
}
declare class second2 extends second1 {
}
declare class C {
    doSomething(): void;
}
declare function secondsecond_part2Spread(...b: number[]): void;
//# sourceMappingURL=second-output.d.ts.map

//// [/src/2/second-output.d.ts.map]
{"version":3,"file":"second-output.d.ts","sourceRoot":"","sources":["../second/second_part1.ts","../second/second_part2.ts"],"names":[],"mappings":"AAAA,kBAAU,CAAC,CAAC;CAEX;AAED,kBAAU,CAAC,CAAC;CAMX;AAED,cAAM,OAAO;CAAI;AACjB,cAAM,OAAQ,SAAQ,OAAO;CAAI;ACbjC,cAAM,CAAC;IACH,WAAW;CAGd;AAED,iBAAS,wBAAwB,CAAC,GAAG,GAAG,MAAM,EAAE,QAAK"}

//// [/src/2/second-output.d.ts.map.baseline.txt]
===================================================================
JsFile: second-output.d.ts
mapUrl: second-output.d.ts.map
sourceRoot: 
sources: ../second/second_part1.ts,../second/second_part2.ts
===================================================================
-------------------------------------------------------------------
emittedFile:/src/2/second-output.d.ts
sourceFile:../second/second_part1.ts
-------------------------------------------------------------------
>>>declare namespace N {
1 >
2 >^^^^^^^^^^^^^^^^^^
3 >                  ^
4 >                   ^
1 >
2 >namespace 
3 >                  N
4 >                    
1 >Emitted(1, 1) Source(1, 1) + SourceIndex(0)
2 >Emitted(1, 19) Source(1, 11) + SourceIndex(0)
3 >Emitted(1, 20) Source(1, 12) + SourceIndex(0)
4 >Emitted(1, 21) Source(1, 13) + SourceIndex(0)
---
>>>}
1 >^
2 > ^^^^^^^^^^^^^^^^^^^^^->
1 >{
  >    // Comment text
  >}
1 >Emitted(2, 2) Source(3, 2) + SourceIndex(0)
---
>>>declare namespace N {
1->
2 >^^^^^^^^^^^^^^^^^^
3 >                  ^
4 >                   ^
1->
  >
  >
2 >namespace 
3 >                  N
4 >                    
1->Emitted(3, 1) Source(5, 1) + SourceIndex(0)
2 >Emitted(3, 19) Source(5, 11) + SourceIndex(0)
3 >Emitted(3, 20) Source(5, 12) + SourceIndex(0)
4 >Emitted(3, 21) Source(5, 13) + SourceIndex(0)
---
>>>}
1 >^
2 > ^^^^^^^^^^^^^^^^^^^^^^^->
1 >{
  >    function f() {
  >        console.log('testing');
  >    }
  >
  >    f();
  >}
1 >Emitted(4, 2) Source(11, 2) + SourceIndex(0)
---
>>>declare class second1 {
1->
2 >^^^^^^^^^^^^^^
3 >              ^^^^^^^
1->
  >
  >
2 >class 
3 >              second1
1->Emitted(5, 1) Source(13, 1) + SourceIndex(0)
2 >Emitted(5, 15) Source(13, 7) + SourceIndex(0)
3 >Emitted(5, 22) Source(13, 14) + SourceIndex(0)
---
>>>}
1 >^
2 > ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 > { }
1 >Emitted(6, 2) Source(13, 18) + SourceIndex(0)
---
>>>declare class second2 extends second1 {
1->
2 >^^^^^^^^^^^^^^
3 >              ^^^^^^^
4 >                     ^^^^^^^^^
5 >                              ^^^^^^^
1->
  >
2 >class 
3 >              second2 
4 >                     extends 
5 >                              second1
1->Emitted(7, 1) Source(14, 1) + SourceIndex(0)
2 >Emitted(7, 15) Source(14, 7) + SourceIndex(0)
3 >Emitted(7, 22) Source(14, 15) + SourceIndex(0)
4 >Emitted(7, 31) Source(14, 23) + SourceIndex(0)
5 >Emitted(7, 38) Source(14, 30) + SourceIndex(0)
---
>>>}
1 >^
2 > ^^^^^^^^^^^^^^^^^->
1 > { }
1 >Emitted(8, 2) Source(14, 34) + SourceIndex(0)
---
-------------------------------------------------------------------
emittedFile:/src/2/second-output.d.ts
sourceFile:../second/second_part2.ts
-------------------------------------------------------------------
>>>declare class C {
1->
2 >^^^^^^^^^^^^^^
3 >              ^
4 >               ^^^^^^^^^^->
1->
2 >class 
3 >              C
1->Emitted(9, 1) Source(1, 1) + SourceIndex(1)
2 >Emitted(9, 15) Source(1, 7) + SourceIndex(1)
3 >Emitted(9, 16) Source(1, 8) + SourceIndex(1)
---
>>>    doSomething(): void;
1->^^^^
2 >    ^^^^^^^^^^^
1-> {
  >    
2 >    doSomething
1->Emitted(10, 5) Source(2, 5) + SourceIndex(1)
2 >Emitted(10, 16) Source(2, 16) + SourceIndex(1)
---
>>>}
1 >^
2 > ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >() {
  >        console.log("something got done");
  >    }
  >}
1 >Emitted(11, 2) Source(5, 2) + SourceIndex(1)
---
>>>declare function secondsecond_part2Spread(...b: number[]): void;
1->
2 >^^^^^^^^^^^^^^^^^
3 >                 ^^^^^^^^^^^^^^^^^^^^^^^^
4 >                                         ^
5 >                                          ^^^
6 >                                             ^^^
7 >                                                ^^^^^^
8 >                                                      ^^
9 >                                                        ^^^^^^^^
1->
  >
  >
2 >function 
3 >                 secondsecond_part2Spread
4 >                                         (
5 >                                          ...
6 >                                             b: 
7 >                                                number
8 >                                                      []
9 >                                                        ) { }
1->Emitted(12, 1) Source(7, 1) + SourceIndex(1)
2 >Emitted(12, 18) Source(7, 10) + SourceIndex(1)
3 >Emitted(12, 42) Source(7, 34) + SourceIndex(1)
4 >Emitted(12, 43) Source(7, 35) + SourceIndex(1)
5 >Emitted(12, 46) Source(7, 38) + SourceIndex(1)
6 >Emitted(12, 49) Source(7, 41) + SourceIndex(1)
7 >Emitted(12, 55) Source(7, 47) + SourceIndex(1)
8 >Emitted(12, 57) Source(7, 49) + SourceIndex(1)
9 >Emitted(12, 65) Source(7, 54) + SourceIndex(1)
---
>>>//# sourceMappingURL=second-output.d.ts.map

//// [/src/2/second-output.js]
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
var N;
(function (N) {
    function f() {
        console.log('testing');
    }
    f();
})(N || (N = {}));
var second1 = (function () {
    function second1() {
    }
    return second1;
}());
var second2 = (function (_super) {
    __extends(second2, _super);
    function second2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return second2;
}(second1));
var C = (function () {
    function C() {
    }
    C.prototype.doSomething = function () {
        console.log("something got done");
    };
    return C;
}());
function secondsecond_part2Spread() {
    var b = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        b[_i] = arguments[_i];
    }
}
secondsecond_part2Spread.apply(void 0, __spread([10, 20, 30]));
//# sourceMappingURL=second-output.js.map

//// [/src/2/second-output.js.map]
{"version":3,"file":"second-output.js","sourceRoot":"","sources":["../second/second_part1.ts","../second/second_part2.ts"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAIA,IAAU,CAAC,CAMV;AAND,WAAU,CAAC;IACP,SAAS,CAAC;QACN,OAAO,CAAC,GAAG,CAAC,SAAS,CAAC,CAAC;IAC3B,CAAC;IAED,CAAC,EAAE,CAAC;AACR,CAAC,EANS,CAAC,KAAD,CAAC,QAMV;AAED;IAAA;IAAgB,CAAC;IAAD,cAAC;AAAD,CAAC,AAAjB,IAAiB;AACjB;IAAsB,2BAAO;IAA7B;;IAAgC,CAAC;IAAD,cAAC;AAAD,CAAC,AAAjC,CAAsB,OAAO,GAAI;ACbjC;IAAA;IAIA,CAAC;IAHG,uBAAW,GAAX;QACI,OAAO,CAAC,GAAG,CAAC,oBAAoB,CAAC,CAAC;IACtC,CAAC;IACL,QAAC;AAAD,CAAC,AAJD,IAIC;AAED,SAAS,wBAAwB;IAAC,WAAc;SAAd,UAAc,EAAd,qBAAc,EAAd,IAAc;QAAd,sBAAc;;AAAI,CAAC;AACrD,wBAAwB,wBAAI,CAAC,EAAE,EAAE,EAAE,EAAE,EAAE,CAAC,GAAE"}

//// [/src/2/second-output.js.map.baseline.txt]
===================================================================
JsFile: second-output.js
mapUrl: second-output.js.map
sourceRoot: 
sources: ../second/second_part1.ts,../second/second_part2.ts
===================================================================
-------------------------------------------------------------------
emittedFile:/src/2/second-output.js
sourceFile:../second/second_part1.ts
-------------------------------------------------------------------
>>>var __extends = (this && this.__extends) || (function () {
>>>    var extendStatics = function (d, b) {
>>>        extendStatics = Object.setPrototypeOf ||
>>>            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
>>>            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
>>>        return extendStatics(d, b);
>>>    };
>>>    return function (d, b) {
>>>        extendStatics(d, b);
>>>        function __() { this.constructor = d; }
>>>        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
>>>    };
>>>})();
>>>var __read = (this && this.__read) || function (o, n) {
>>>    var m = typeof Symbol === "function" && o[Symbol.iterator];
>>>    if (!m) return o;
>>>    var i = m.call(o), r, ar = [], e;
>>>    try {
>>>        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
>>>    }
>>>    catch (error) { e = { error: error }; }
>>>    finally {
>>>        try {
>>>            if (r && !r.done && (m = i["return"])) m.call(i);
>>>        }
>>>        finally { if (e) throw e.error; }
>>>    }
>>>    return ar;
>>>};
>>>var __spread = (this && this.__spread) || function () {
>>>    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
>>>    return ar;
>>>};
>>>var N;
1 >
2 >^^^^
3 >    ^
4 >     ^
5 >      ^^^^^^^^^^->
1 >namespace N {
  >    // Comment text
  >}
  >
  >
2 >namespace 
3 >    N
4 >      {
  >         function f() {
  >             console.log('testing');
  >         }
  >     
  >         f();
  >     }
1 >Emitted(34, 1) Source(5, 1) + SourceIndex(0)
2 >Emitted(34, 5) Source(5, 11) + SourceIndex(0)
3 >Emitted(34, 6) Source(5, 12) + SourceIndex(0)
4 >Emitted(34, 7) Source(11, 2) + SourceIndex(0)
---
>>>(function (N) {
1->
2 >^^^^^^^^^^^
3 >           ^
4 >            ^^^^^^^->
1->
2 >namespace 
3 >           N
1->Emitted(35, 1) Source(5, 1) + SourceIndex(0)
2 >Emitted(35, 12) Source(5, 11) + SourceIndex(0)
3 >Emitted(35, 13) Source(5, 12) + SourceIndex(0)
---
>>>    function f() {
1->^^^^
2 >    ^^^^^^^^^
3 >             ^
4 >              ^^^^^^^^^^^^^^^^^^->
1-> {
  >    
2 >    function 
3 >             f
1->Emitted(36, 5) Source(6, 5) + SourceIndex(0)
2 >Emitted(36, 14) Source(6, 14) + SourceIndex(0)
3 >Emitted(36, 15) Source(6, 15) + SourceIndex(0)
---
>>>        console.log('testing');
1->^^^^^^^^
2 >        ^^^^^^^
3 >               ^
4 >                ^^^
5 >                   ^
6 >                    ^^^^^^^^^
7 >                             ^
8 >                              ^
1->() {
  >        
2 >        console
3 >               .
4 >                log
5 >                   (
6 >                    'testing'
7 >                             )
8 >                              ;
1->Emitted(37, 9) Source(7, 9) + SourceIndex(0)
2 >Emitted(37, 16) Source(7, 16) + SourceIndex(0)
3 >Emitted(37, 17) Source(7, 17) + SourceIndex(0)
4 >Emitted(37, 20) Source(7, 20) + SourceIndex(0)
5 >Emitted(37, 21) Source(7, 21) + SourceIndex(0)
6 >Emitted(37, 30) Source(7, 30) + SourceIndex(0)
7 >Emitted(37, 31) Source(7, 31) + SourceIndex(0)
8 >Emitted(37, 32) Source(7, 32) + SourceIndex(0)
---
>>>    }
1 >^^^^
2 >    ^
3 >     ^^^^->
1 >
  >    
2 >    }
1 >Emitted(38, 5) Source(8, 5) + SourceIndex(0)
2 >Emitted(38, 6) Source(8, 6) + SourceIndex(0)
---
>>>    f();
1->^^^^
2 >    ^
3 >     ^^
4 >       ^
5 >        ^^^^^^^^^^^->
1->
  >
  >    
2 >    f
3 >     ()
4 >       ;
1->Emitted(39, 5) Source(10, 5) + SourceIndex(0)
2 >Emitted(39, 6) Source(10, 6) + SourceIndex(0)
3 >Emitted(39, 8) Source(10, 8) + SourceIndex(0)
4 >Emitted(39, 9) Source(10, 9) + SourceIndex(0)
---
>>>})(N || (N = {}));
1->
2 >^
3 > ^^
4 >   ^
5 >    ^^^^^
6 >         ^
7 >          ^^^^^^^^
8 >                  ^^^^^^^^^^^->
1->
  >
2 >}
3 > 
4 >   N
5 >    
6 >         N
7 >           {
  >              function f() {
  >                  console.log('testing');
  >              }
  >          
  >              f();
  >          }
1->Emitted(40, 1) Source(11, 1) + SourceIndex(0)
2 >Emitted(40, 2) Source(11, 2) + SourceIndex(0)
3 >Emitted(40, 4) Source(5, 11) + SourceIndex(0)
4 >Emitted(40, 5) Source(5, 12) + SourceIndex(0)
5 >Emitted(40, 10) Source(5, 11) + SourceIndex(0)
6 >Emitted(40, 11) Source(5, 12) + SourceIndex(0)
7 >Emitted(40, 19) Source(11, 2) + SourceIndex(0)
---
>>>var second1 = (function () {
1->
2 >^^^^^^^^^^^^^^^^^^^^^^^^^->
1->
  >
  >
1->Emitted(41, 1) Source(13, 1) + SourceIndex(0)
---
>>>    function second1() {
1->^^^^
2 >    ^^->
1->
1->Emitted(42, 5) Source(13, 1) + SourceIndex(0)
---
>>>    }
1->^^^^
2 >    ^
3 >     ^^^^^^^^^^^^^^^->
1->class second1 { 
2 >    }
1->Emitted(43, 5) Source(13, 17) + SourceIndex(0)
2 >Emitted(43, 6) Source(13, 18) + SourceIndex(0)
---
>>>    return second1;
1->^^^^
2 >    ^^^^^^^^^^^^^^
1->
2 >    }
1->Emitted(44, 5) Source(13, 17) + SourceIndex(0)
2 >Emitted(44, 19) Source(13, 18) + SourceIndex(0)
---
>>>}());
1 >
2 >^
3 > 
4 > ^^^^
5 >     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
2 >}
3 > 
4 > class second1 { }
1 >Emitted(45, 1) Source(13, 17) + SourceIndex(0)
2 >Emitted(45, 2) Source(13, 18) + SourceIndex(0)
3 >Emitted(45, 2) Source(13, 1) + SourceIndex(0)
4 >Emitted(45, 6) Source(13, 18) + SourceIndex(0)
---
>>>var second2 = (function (_super) {
1->
2 >^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1->
  >
1->Emitted(46, 1) Source(14, 1) + SourceIndex(0)
---
>>>    __extends(second2, _super);
1->^^^^
2 >    ^^^^^^^^^^^^^^^^^^^^^^^^^^^
1->class second2 extends 
2 >    second1
1->Emitted(47, 5) Source(14, 23) + SourceIndex(0)
2 >Emitted(47, 32) Source(14, 30) + SourceIndex(0)
---
>>>    function second2() {
1 >^^^^
2 >    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
1 >Emitted(48, 5) Source(14, 1) + SourceIndex(0)
---
>>>        return _super !== null && _super.apply(this, arguments) || this;
>>>    }
1->^^^^
2 >    ^
3 >     ^^^^^^^^^^^^^^^->
1->class second2 extends second1 { 
2 >    }
1->Emitted(50, 5) Source(14, 33) + SourceIndex(0)
2 >Emitted(50, 6) Source(14, 34) + SourceIndex(0)
---
>>>    return second2;
1->^^^^
2 >    ^^^^^^^^^^^^^^
1->
2 >    }
1->Emitted(51, 5) Source(14, 33) + SourceIndex(0)
2 >Emitted(51, 19) Source(14, 34) + SourceIndex(0)
---
>>>}(second1));
1 >
2 >^
3 > 
4 > ^
5 >  ^^^^^^^
6 >         ^^^
7 >            ^^^^^^^^^^^->
1 >
2 >}
3 > 
4 > class second2 extends 
5 >  second1
6 >          { }
1 >Emitted(52, 1) Source(14, 33) + SourceIndex(0)
2 >Emitted(52, 2) Source(14, 34) + SourceIndex(0)
3 >Emitted(52, 2) Source(14, 1) + SourceIndex(0)
4 >Emitted(52, 3) Source(14, 23) + SourceIndex(0)
5 >Emitted(52, 10) Source(14, 30) + SourceIndex(0)
6 >Emitted(52, 13) Source(14, 34) + SourceIndex(0)
---
-------------------------------------------------------------------
emittedFile:/src/2/second-output.js
sourceFile:../second/second_part2.ts
-------------------------------------------------------------------
>>>var C = (function () {
1->
2 >^^^^^^^^^^^^^^^^^^^->
1->
1->Emitted(53, 1) Source(1, 1) + SourceIndex(1)
---
>>>    function C() {
1->^^^^
2 >    ^^->
1->
1->Emitted(54, 5) Source(1, 1) + SourceIndex(1)
---
>>>    }
1->^^^^
2 >    ^
3 >     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1->class C {
  >    doSomething() {
  >        console.log("something got done");
  >    }
  >
2 >    }
1->Emitted(55, 5) Source(5, 1) + SourceIndex(1)
2 >Emitted(55, 6) Source(5, 2) + SourceIndex(1)
---
>>>    C.prototype.doSomething = function () {
1->^^^^
2 >    ^^^^^^^^^^^^^^^^^^^^^^^
3 >                           ^^^
4 >                              ^^^^^^^^^^^^^->
1->
2 >    doSomething
3 >                           
1->Emitted(56, 5) Source(2, 5) + SourceIndex(1)
2 >Emitted(56, 28) Source(2, 16) + SourceIndex(1)
3 >Emitted(56, 31) Source(2, 5) + SourceIndex(1)
---
>>>        console.log("something got done");
1->^^^^^^^^
2 >        ^^^^^^^
3 >               ^
4 >                ^^^
5 >                   ^
6 >                    ^^^^^^^^^^^^^^^^^^^^
7 >                                        ^
8 >                                         ^
1->doSomething() {
  >        
2 >        console
3 >               .
4 >                log
5 >                   (
6 >                    "something got done"
7 >                                        )
8 >                                         ;
1->Emitted(57, 9) Source(3, 9) + SourceIndex(1)
2 >Emitted(57, 16) Source(3, 16) + SourceIndex(1)
3 >Emitted(57, 17) Source(3, 17) + SourceIndex(1)
4 >Emitted(57, 20) Source(3, 20) + SourceIndex(1)
5 >Emitted(57, 21) Source(3, 21) + SourceIndex(1)
6 >Emitted(57, 41) Source(3, 41) + SourceIndex(1)
7 >Emitted(57, 42) Source(3, 42) + SourceIndex(1)
8 >Emitted(57, 43) Source(3, 43) + SourceIndex(1)
---
>>>    };
1 >^^^^
2 >    ^
3 >     ^^^^^^^^^->
1 >
  >    
2 >    }
1 >Emitted(58, 5) Source(4, 5) + SourceIndex(1)
2 >Emitted(58, 6) Source(4, 6) + SourceIndex(1)
---
>>>    return C;
1->^^^^
2 >    ^^^^^^^^
1->
  >
2 >    }
1->Emitted(59, 5) Source(5, 1) + SourceIndex(1)
2 >Emitted(59, 13) Source(5, 2) + SourceIndex(1)
---
>>>}());
1 >
2 >^
3 > 
4 > ^^^^
5 >     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
2 >}
3 > 
4 > class C {
  >     doSomething() {
  >         console.log("something got done");
  >     }
  > }
1 >Emitted(60, 1) Source(5, 1) + SourceIndex(1)
2 >Emitted(60, 2) Source(5, 2) + SourceIndex(1)
3 >Emitted(60, 2) Source(1, 1) + SourceIndex(1)
4 >Emitted(60, 6) Source(5, 2) + SourceIndex(1)
---
>>>function secondsecond_part2Spread() {
1->
2 >^^^^^^^^^
3 >         ^^^^^^^^^^^^^^^^^^^^^^^^
1->
  >
  >
2 >function 
3 >         secondsecond_part2Spread
1->Emitted(61, 1) Source(7, 1) + SourceIndex(1)
2 >Emitted(61, 10) Source(7, 10) + SourceIndex(1)
3 >Emitted(61, 34) Source(7, 34) + SourceIndex(1)
---
>>>    var b = [];
1 >^^^^
2 >    ^^^^^^^^^^^
3 >               ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >(
2 >    ...b: number[]
1 >Emitted(62, 5) Source(7, 35) + SourceIndex(1)
2 >Emitted(62, 16) Source(7, 49) + SourceIndex(1)
---
>>>    for (var _i = 0; _i < arguments.length; _i++) {
1->^^^^^^^^^
2 >         ^^^^^^^^^^
3 >                   ^^
4 >                     ^^^^^^^^^^^^^^^^^^^^^
5 >                                          ^^
6 >                                            ^^^^
1->
2 >         ...b: number[]
3 >                   
4 >                     ...b: number[]
5 >                                          
6 >                                            ...b: number[]
1->Emitted(63, 10) Source(7, 35) + SourceIndex(1)
2 >Emitted(63, 20) Source(7, 49) + SourceIndex(1)
3 >Emitted(63, 22) Source(7, 35) + SourceIndex(1)
4 >Emitted(63, 43) Source(7, 49) + SourceIndex(1)
5 >Emitted(63, 45) Source(7, 35) + SourceIndex(1)
6 >Emitted(63, 49) Source(7, 49) + SourceIndex(1)
---
>>>        b[_i] = arguments[_i];
1 >^^^^^^^^
2 >        ^^^^^^^^^^^^^^^^^^^^^^
1 >
2 >        ...b: number[]
1 >Emitted(64, 9) Source(7, 35) + SourceIndex(1)
2 >Emitted(64, 31) Source(7, 49) + SourceIndex(1)
---
>>>    }
>>>}
1 >
2 >^
3 > ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >) { 
2 >}
1 >Emitted(66, 1) Source(7, 53) + SourceIndex(1)
2 >Emitted(66, 2) Source(7, 54) + SourceIndex(1)
---
>>>secondsecond_part2Spread.apply(void 0, __spread([10, 20, 30]));
1->
2 >^^^^^^^^^^^^^^^^^^^^^^^^
3 >                        ^^^^^^^^^^^^^^^^^^^^^^^^
4 >                                                ^
5 >                                                 ^^
6 >                                                   ^^
7 >                                                     ^^
8 >                                                       ^^
9 >                                                         ^^
10>                                                           ^
11>                                                            ^^^
1->
  >
2 >secondsecond_part2Spread
3 >                        (...
4 >                                                [
5 >                                                 10
6 >                                                   , 
7 >                                                     20
8 >                                                       , 
9 >                                                         30
10>                                                           ]
11>                                                            );
1->Emitted(67, 1) Source(8, 1) + SourceIndex(1)
2 >Emitted(67, 25) Source(8, 25) + SourceIndex(1)
3 >Emitted(67, 49) Source(8, 29) + SourceIndex(1)
4 >Emitted(67, 50) Source(8, 30) + SourceIndex(1)
5 >Emitted(67, 52) Source(8, 32) + SourceIndex(1)
6 >Emitted(67, 54) Source(8, 34) + SourceIndex(1)
7 >Emitted(67, 56) Source(8, 36) + SourceIndex(1)
8 >Emitted(67, 58) Source(8, 38) + SourceIndex(1)
9 >Emitted(67, 60) Source(8, 40) + SourceIndex(1)
10>Emitted(67, 61) Source(8, 41) + SourceIndex(1)
11>Emitted(67, 64) Source(8, 43) + SourceIndex(1)
---
>>>//# sourceMappingURL=second-output.js.map

//// [/src/2/second-output.tsbundleinfo]
{
  "js": [
    {
      "pos": 0,
      "end": 599,
      "kind": "emitHelpers",
      "name": "typescript:extends"
    },
    {
      "pos": 599,
      "end": 1105,
      "kind": "emitHelpers",
      "name": "typescript:read"
    },
    {
      "pos": 1105,
      "end": 1277,
      "kind": "emitHelpers",
      "name": "typescript:spread"
    },
    {
      "pos": 1277,
      "end": 2080,
      "kind": "text"
    }
  ],
  "dts": [
    {
      "pos": 0,
      "end": 238,
      "kind": "text"
    }
  ]
}

//// [/src/first/bin/first-output.d.ts]
interface TheFirst {
    none: any;
}
declare const s = "Hello, world";
interface NoJsForHereEither {
    none: any;
}
declare class first1 {
}
declare class first2 extends first1 {
}
declare function f(): string;
declare function firstfirst_part3Spread(...b: number[]): void;
//# sourceMappingURL=first-output.d.ts.map

//// [/src/first/bin/first-output.d.ts.map]
{"version":3,"file":"first-output.d.ts","sourceRoot":"","sources":["../first_PART1.ts","../first_part2.ts","../first_part3.ts"],"names":[],"mappings":"AAAA,UAAU,QAAQ;IACd,IAAI,EAAE,GAAG,CAAC;CACb;AAED,QAAA,MAAM,CAAC,iBAAiB,CAAC;AAEzB,UAAU,iBAAiB;IACvB,IAAI,EAAE,GAAG,CAAC;CACb;ACND,cAAM,MAAM;CAAI;AAChB,cAAM,MAAO,SAAQ,MAAM;CAAI;ACH/B,iBAAS,CAAC,WAET;AACD,iBAAS,sBAAsB,CAAC,GAAG,GAAG,MAAM,EAAE,QAAK"}

//// [/src/first/bin/first-output.d.ts.map.baseline.txt]
===================================================================
JsFile: first-output.d.ts
mapUrl: first-output.d.ts.map
sourceRoot: 
sources: ../first_PART1.ts,../first_part2.ts,../first_part3.ts
===================================================================
-------------------------------------------------------------------
emittedFile:/src/first/bin/first-output.d.ts
sourceFile:../first_PART1.ts
-------------------------------------------------------------------
>>>interface TheFirst {
1 >
2 >^^^^^^^^^^
3 >          ^^^^^^^^
1 >
2 >interface 
3 >          TheFirst
1 >Emitted(1, 1) Source(1, 1) + SourceIndex(0)
2 >Emitted(1, 11) Source(1, 11) + SourceIndex(0)
3 >Emitted(1, 19) Source(1, 19) + SourceIndex(0)
---
>>>    none: any;
1 >^^^^
2 >    ^^^^
3 >        ^^
4 >          ^^^
5 >             ^
1 > {
  >    
2 >    none
3 >        : 
4 >          any
5 >             ;
1 >Emitted(2, 5) Source(2, 5) + SourceIndex(0)
2 >Emitted(2, 9) Source(2, 9) + SourceIndex(0)
3 >Emitted(2, 11) Source(2, 11) + SourceIndex(0)
4 >Emitted(2, 14) Source(2, 14) + SourceIndex(0)
5 >Emitted(2, 15) Source(2, 15) + SourceIndex(0)
---
>>>}
1 >^
2 > ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
  >}
1 >Emitted(3, 2) Source(3, 2) + SourceIndex(0)
---
>>>declare const s = "Hello, world";
1->
2 >^^^^^^^^
3 >        ^^^^^^
4 >              ^
5 >               ^^^^^^^^^^^^^^^^^
6 >                                ^
1->
  >
  >
2 >
3 >        const 
4 >              s
5 >                = "Hello, world"
6 >                                ;
1->Emitted(4, 1) Source(5, 1) + SourceIndex(0)
2 >Emitted(4, 9) Source(5, 1) + SourceIndex(0)
3 >Emitted(4, 15) Source(5, 7) + SourceIndex(0)
4 >Emitted(4, 16) Source(5, 8) + SourceIndex(0)
5 >Emitted(4, 33) Source(5, 25) + SourceIndex(0)
6 >Emitted(4, 34) Source(5, 26) + SourceIndex(0)
---
>>>interface NoJsForHereEither {
1 >
2 >^^^^^^^^^^
3 >          ^^^^^^^^^^^^^^^^^
1 >
  >
  >
2 >interface 
3 >          NoJsForHereEither
1 >Emitted(5, 1) Source(7, 1) + SourceIndex(0)
2 >Emitted(5, 11) Source(7, 11) + SourceIndex(0)
3 >Emitted(5, 28) Source(7, 28) + SourceIndex(0)
---
>>>    none: any;
1 >^^^^
2 >    ^^^^
3 >        ^^
4 >          ^^^
5 >             ^
1 > {
  >    
2 >    none
3 >        : 
4 >          any
5 >             ;
1 >Emitted(6, 5) Source(8, 5) + SourceIndex(0)
2 >Emitted(6, 9) Source(8, 9) + SourceIndex(0)
3 >Emitted(6, 11) Source(8, 11) + SourceIndex(0)
4 >Emitted(6, 14) Source(8, 14) + SourceIndex(0)
5 >Emitted(6, 15) Source(8, 15) + SourceIndex(0)
---
>>>}
1 >^
2 > ^^^^^^^^^^^^^^^^^^^^^^->
1 >
  >}
1 >Emitted(7, 2) Source(9, 2) + SourceIndex(0)
---
-------------------------------------------------------------------
emittedFile:/src/first/bin/first-output.d.ts
sourceFile:../first_part2.ts
-------------------------------------------------------------------
>>>declare class first1 {
1->
2 >^^^^^^^^^^^^^^
3 >              ^^^^^^
1->console.log(f());
  >
  >
2 >class 
3 >              first1
1->Emitted(8, 1) Source(3, 1) + SourceIndex(1)
2 >Emitted(8, 15) Source(3, 7) + SourceIndex(1)
3 >Emitted(8, 21) Source(3, 13) + SourceIndex(1)
---
>>>}
1 >^
2 > ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 > { }
1 >Emitted(9, 2) Source(3, 17) + SourceIndex(1)
---
>>>declare class first2 extends first1 {
1->
2 >^^^^^^^^^^^^^^
3 >              ^^^^^^
4 >                    ^^^^^^^^^
5 >                             ^^^^^^
1->
  >
2 >class 
3 >              first2 
4 >                    extends 
5 >                             first1
1->Emitted(10, 1) Source(4, 1) + SourceIndex(1)
2 >Emitted(10, 15) Source(4, 7) + SourceIndex(1)
3 >Emitted(10, 21) Source(4, 14) + SourceIndex(1)
4 >Emitted(10, 30) Source(4, 22) + SourceIndex(1)
5 >Emitted(10, 36) Source(4, 28) + SourceIndex(1)
---
>>>}
1 >^
2 > ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 > { }
1 >Emitted(11, 2) Source(4, 32) + SourceIndex(1)
---
-------------------------------------------------------------------
emittedFile:/src/first/bin/first-output.d.ts
sourceFile:../first_part3.ts
-------------------------------------------------------------------
>>>declare function f(): string;
1->
2 >^^^^^^^^^^^^^^^^^
3 >                 ^
4 >                  ^^^^^^^^^^^
5 >                             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1->
2 >function 
3 >                 f
4 >                  () {
  >                      return "JS does hoists";
  >                  }
1->Emitted(12, 1) Source(1, 1) + SourceIndex(2)
2 >Emitted(12, 18) Source(1, 10) + SourceIndex(2)
3 >Emitted(12, 19) Source(1, 11) + SourceIndex(2)
4 >Emitted(12, 30) Source(3, 2) + SourceIndex(2)
---
>>>declare function firstfirst_part3Spread(...b: number[]): void;
1->
2 >^^^^^^^^^^^^^^^^^
3 >                 ^^^^^^^^^^^^^^^^^^^^^^
4 >                                       ^
5 >                                        ^^^
6 >                                           ^^^
7 >                                              ^^^^^^
8 >                                                    ^^
9 >                                                      ^^^^^^^^
1->
  >
2 >function 
3 >                 firstfirst_part3Spread
4 >                                       (
5 >                                        ...
6 >                                           b: 
7 >                                              number
8 >                                                    []
9 >                                                      ) { }
1->Emitted(13, 1) Source(4, 1) + SourceIndex(2)
2 >Emitted(13, 18) Source(4, 10) + SourceIndex(2)
3 >Emitted(13, 40) Source(4, 32) + SourceIndex(2)
4 >Emitted(13, 41) Source(4, 33) + SourceIndex(2)
5 >Emitted(13, 44) Source(4, 36) + SourceIndex(2)
6 >Emitted(13, 47) Source(4, 39) + SourceIndex(2)
7 >Emitted(13, 53) Source(4, 45) + SourceIndex(2)
8 >Emitted(13, 55) Source(4, 47) + SourceIndex(2)
9 >Emitted(13, 63) Source(4, 52) + SourceIndex(2)
---
>>>//# sourceMappingURL=first-output.d.ts.map

//// [/src/first/bin/first-output.js]
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
var s = "Hello, world";
console.log(s);
console.log(f());
var first1 = (function () {
    function first1() {
    }
    return first1;
}());
var first2 = (function (_super) {
    __extends(first2, _super);
    function first2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return first2;
}(first1));
function f() {
    return "JS does hoists";
}
function firstfirst_part3Spread() {
    var b = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        b[_i] = arguments[_i];
    }
}
firstfirst_part3Spread.apply(void 0, __spread([10, 20, 30]));
//# sourceMappingURL=first-output.js.map

//// [/src/first/bin/first-output.js.map]
{"version":3,"file":"first-output.js","sourceRoot":"","sources":["../first_PART1.ts","../first_part2.ts","../first_part3.ts"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAIA,IAAM,CAAC,GAAG,cAAc,CAAC;AAMzB,OAAO,CAAC,GAAG,CAAC,CAAC,CAAC,CAAC;ACVf,OAAO,CAAC,GAAG,CAAC,CAAC,EAAE,CAAC,CAAC;AAEjB;IAAA;IAAe,CAAC;IAAD,aAAC;AAAD,CAAC,AAAhB,IAAgB;AAChB;IAAqB,0BAAM;IAA3B;;IAA8B,CAAC;IAAD,aAAC;AAAD,CAAC,AAA/B,CAAqB,MAAM,GAAI;ACH/B,SAAS,CAAC;IACN,OAAO,gBAAgB,CAAC;AAC5B,CAAC;AACD,SAAS,sBAAsB;IAAC,WAAc;SAAd,UAAc,EAAd,qBAAc,EAAd,IAAc;QAAd,sBAAc;;AAAI,CAAC;AACnD,sBAAsB,wBAAI,CAAC,EAAE,EAAE,EAAE,EAAE,EAAE,CAAC,GAAE"}

//// [/src/first/bin/first-output.js.map.baseline.txt]
===================================================================
JsFile: first-output.js
mapUrl: first-output.js.map
sourceRoot: 
sources: ../first_PART1.ts,../first_part2.ts,../first_part3.ts
===================================================================
-------------------------------------------------------------------
emittedFile:/src/first/bin/first-output.js
sourceFile:../first_PART1.ts
-------------------------------------------------------------------
>>>var __extends = (this && this.__extends) || (function () {
>>>    var extendStatics = function (d, b) {
>>>        extendStatics = Object.setPrototypeOf ||
>>>            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
>>>            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
>>>        return extendStatics(d, b);
>>>    };
>>>    return function (d, b) {
>>>        extendStatics(d, b);
>>>        function __() { this.constructor = d; }
>>>        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
>>>    };
>>>})();
>>>var __read = (this && this.__read) || function (o, n) {
>>>    var m = typeof Symbol === "function" && o[Symbol.iterator];
>>>    if (!m) return o;
>>>    var i = m.call(o), r, ar = [], e;
>>>    try {
>>>        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
>>>    }
>>>    catch (error) { e = { error: error }; }
>>>    finally {
>>>        try {
>>>            if (r && !r.done && (m = i["return"])) m.call(i);
>>>        }
>>>        finally { if (e) throw e.error; }
>>>    }
>>>    return ar;
>>>};
>>>var __spread = (this && this.__spread) || function () {
>>>    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
>>>    return ar;
>>>};
>>>var s = "Hello, world";
1 >
2 >^^^^
3 >    ^
4 >     ^^^
5 >        ^^^^^^^^^^^^^^
6 >                      ^
1 >interface TheFirst {
  >    none: any;
  >}
  >
  >
2 >const 
3 >    s
4 >      = 
5 >        "Hello, world"
6 >                      ;
1 >Emitted(34, 1) Source(5, 1) + SourceIndex(0)
2 >Emitted(34, 5) Source(5, 7) + SourceIndex(0)
3 >Emitted(34, 6) Source(5, 8) + SourceIndex(0)
4 >Emitted(34, 9) Source(5, 11) + SourceIndex(0)
5 >Emitted(34, 23) Source(5, 25) + SourceIndex(0)
6 >Emitted(34, 24) Source(5, 26) + SourceIndex(0)
---
>>>console.log(s);
1 >
2 >^^^^^^^
3 >       ^
4 >        ^^^
5 >           ^
6 >            ^
7 >             ^
8 >              ^
9 >               ^^^->
1 >
  >
  >interface NoJsForHereEither {
  >    none: any;
  >}
  >
  >
2 >console
3 >       .
4 >        log
5 >           (
6 >            s
7 >             )
8 >              ;
1 >Emitted(35, 1) Source(11, 1) + SourceIndex(0)
2 >Emitted(35, 8) Source(11, 8) + SourceIndex(0)
3 >Emitted(35, 9) Source(11, 9) + SourceIndex(0)
4 >Emitted(35, 12) Source(11, 12) + SourceIndex(0)
5 >Emitted(35, 13) Source(11, 13) + SourceIndex(0)
6 >Emitted(35, 14) Source(11, 14) + SourceIndex(0)
7 >Emitted(35, 15) Source(11, 15) + SourceIndex(0)
8 >Emitted(35, 16) Source(11, 16) + SourceIndex(0)
---
-------------------------------------------------------------------
emittedFile:/src/first/bin/first-output.js
sourceFile:../first_part2.ts
-------------------------------------------------------------------
>>>console.log(f());
1->
2 >^^^^^^^
3 >       ^
4 >        ^^^
5 >           ^
6 >            ^
7 >             ^^
8 >               ^
9 >                ^
10>                 ^^^^^^^^^^^->
1->
2 >console
3 >       .
4 >        log
5 >           (
6 >            f
7 >             ()
8 >               )
9 >                ;
1->Emitted(36, 1) Source(1, 1) + SourceIndex(1)
2 >Emitted(36, 8) Source(1, 8) + SourceIndex(1)
3 >Emitted(36, 9) Source(1, 9) + SourceIndex(1)
4 >Emitted(36, 12) Source(1, 12) + SourceIndex(1)
5 >Emitted(36, 13) Source(1, 13) + SourceIndex(1)
6 >Emitted(36, 14) Source(1, 14) + SourceIndex(1)
7 >Emitted(36, 16) Source(1, 16) + SourceIndex(1)
8 >Emitted(36, 17) Source(1, 17) + SourceIndex(1)
9 >Emitted(36, 18) Source(1, 18) + SourceIndex(1)
---
>>>var first1 = (function () {
1->
2 >^^^^^^^^^^^^^^^^^^^^^^^^->
1->
  >
  >
1->Emitted(37, 1) Source(3, 1) + SourceIndex(1)
---
>>>    function first1() {
1->^^^^
2 >    ^^->
1->
1->Emitted(38, 5) Source(3, 1) + SourceIndex(1)
---
>>>    }
1->^^^^
2 >    ^
3 >     ^^^^^^^^^^^^^^->
1->class first1 { 
2 >    }
1->Emitted(39, 5) Source(3, 16) + SourceIndex(1)
2 >Emitted(39, 6) Source(3, 17) + SourceIndex(1)
---
>>>    return first1;
1->^^^^
2 >    ^^^^^^^^^^^^^
1->
2 >    }
1->Emitted(40, 5) Source(3, 16) + SourceIndex(1)
2 >Emitted(40, 18) Source(3, 17) + SourceIndex(1)
---
>>>}());
1 >
2 >^
3 > 
4 > ^^^^
5 >     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
2 >}
3 > 
4 > class first1 { }
1 >Emitted(41, 1) Source(3, 16) + SourceIndex(1)
2 >Emitted(41, 2) Source(3, 17) + SourceIndex(1)
3 >Emitted(41, 2) Source(3, 1) + SourceIndex(1)
4 >Emitted(41, 6) Source(3, 17) + SourceIndex(1)
---
>>>var first2 = (function (_super) {
1->
2 >^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1->
  >
1->Emitted(42, 1) Source(4, 1) + SourceIndex(1)
---
>>>    __extends(first2, _super);
1->^^^^
2 >    ^^^^^^^^^^^^^^^^^^^^^^^^^^
1->class first2 extends 
2 >    first1
1->Emitted(43, 5) Source(4, 22) + SourceIndex(1)
2 >Emitted(43, 31) Source(4, 28) + SourceIndex(1)
---
>>>    function first2() {
1 >^^^^
2 >    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
1 >Emitted(44, 5) Source(4, 1) + SourceIndex(1)
---
>>>        return _super !== null && _super.apply(this, arguments) || this;
>>>    }
1->^^^^
2 >    ^
3 >     ^^^^^^^^^^^^^^->
1->class first2 extends first1 { 
2 >    }
1->Emitted(46, 5) Source(4, 31) + SourceIndex(1)
2 >Emitted(46, 6) Source(4, 32) + SourceIndex(1)
---
>>>    return first2;
1->^^^^
2 >    ^^^^^^^^^^^^^
1->
2 >    }
1->Emitted(47, 5) Source(4, 31) + SourceIndex(1)
2 >Emitted(47, 18) Source(4, 32) + SourceIndex(1)
---
>>>}(first1));
1 >
2 >^
3 > 
4 > ^
5 >  ^^^^^^
6 >        ^^^
7 >           ^^^^->
1 >
2 >}
3 > 
4 > class first2 extends 
5 >  first1
6 >         { }
1 >Emitted(48, 1) Source(4, 31) + SourceIndex(1)
2 >Emitted(48, 2) Source(4, 32) + SourceIndex(1)
3 >Emitted(48, 2) Source(4, 1) + SourceIndex(1)
4 >Emitted(48, 3) Source(4, 22) + SourceIndex(1)
5 >Emitted(48, 9) Source(4, 28) + SourceIndex(1)
6 >Emitted(48, 12) Source(4, 32) + SourceIndex(1)
---
-------------------------------------------------------------------
emittedFile:/src/first/bin/first-output.js
sourceFile:../first_part3.ts
-------------------------------------------------------------------
>>>function f() {
1->
2 >^^^^^^^^^
3 >         ^
4 >          ^^^^^^^^^^^^^^^^^^^->
1->
2 >function 
3 >         f
1->Emitted(49, 1) Source(1, 1) + SourceIndex(2)
2 >Emitted(49, 10) Source(1, 10) + SourceIndex(2)
3 >Emitted(49, 11) Source(1, 11) + SourceIndex(2)
---
>>>    return "JS does hoists";
1->^^^^
2 >    ^^^^^^^
3 >           ^^^^^^^^^^^^^^^^
4 >                           ^
1->() {
  >    
2 >    return 
3 >           "JS does hoists"
4 >                           ;
1->Emitted(50, 5) Source(2, 5) + SourceIndex(2)
2 >Emitted(50, 12) Source(2, 12) + SourceIndex(2)
3 >Emitted(50, 28) Source(2, 28) + SourceIndex(2)
4 >Emitted(50, 29) Source(2, 29) + SourceIndex(2)
---
>>>}
1 >
2 >^
3 > ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
  >
2 >}
1 >Emitted(51, 1) Source(3, 1) + SourceIndex(2)
2 >Emitted(51, 2) Source(3, 2) + SourceIndex(2)
---
>>>function firstfirst_part3Spread() {
1->
2 >^^^^^^^^^
3 >         ^^^^^^^^^^^^^^^^^^^^^^
1->
  >
2 >function 
3 >         firstfirst_part3Spread
1->Emitted(52, 1) Source(4, 1) + SourceIndex(2)
2 >Emitted(52, 10) Source(4, 10) + SourceIndex(2)
3 >Emitted(52, 32) Source(4, 32) + SourceIndex(2)
---
>>>    var b = [];
1 >^^^^
2 >    ^^^^^^^^^^^
3 >               ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >(
2 >    ...b: number[]
1 >Emitted(53, 5) Source(4, 33) + SourceIndex(2)
2 >Emitted(53, 16) Source(4, 47) + SourceIndex(2)
---
>>>    for (var _i = 0; _i < arguments.length; _i++) {
1->^^^^^^^^^
2 >         ^^^^^^^^^^
3 >                   ^^
4 >                     ^^^^^^^^^^^^^^^^^^^^^
5 >                                          ^^
6 >                                            ^^^^
1->
2 >         ...b: number[]
3 >                   
4 >                     ...b: number[]
5 >                                          
6 >                                            ...b: number[]
1->Emitted(54, 10) Source(4, 33) + SourceIndex(2)
2 >Emitted(54, 20) Source(4, 47) + SourceIndex(2)
3 >Emitted(54, 22) Source(4, 33) + SourceIndex(2)
4 >Emitted(54, 43) Source(4, 47) + SourceIndex(2)
5 >Emitted(54, 45) Source(4, 33) + SourceIndex(2)
6 >Emitted(54, 49) Source(4, 47) + SourceIndex(2)
---
>>>        b[_i] = arguments[_i];
1 >^^^^^^^^
2 >        ^^^^^^^^^^^^^^^^^^^^^^
1 >
2 >        ...b: number[]
1 >Emitted(55, 9) Source(4, 33) + SourceIndex(2)
2 >Emitted(55, 31) Source(4, 47) + SourceIndex(2)
---
>>>    }
>>>}
1 >
2 >^
3 > ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >) { 
2 >}
1 >Emitted(57, 1) Source(4, 51) + SourceIndex(2)
2 >Emitted(57, 2) Source(4, 52) + SourceIndex(2)
---
>>>firstfirst_part3Spread.apply(void 0, __spread([10, 20, 30]));
1->
2 >^^^^^^^^^^^^^^^^^^^^^^
3 >                      ^^^^^^^^^^^^^^^^^^^^^^^^
4 >                                              ^
5 >                                               ^^
6 >                                                 ^^
7 >                                                   ^^
8 >                                                     ^^
9 >                                                       ^^
10>                                                         ^
11>                                                          ^^^
1->
  >
2 >firstfirst_part3Spread
3 >                      (...
4 >                                              [
5 >                                               10
6 >                                                 , 
7 >                                                   20
8 >                                                     , 
9 >                                                       30
10>                                                         ]
11>                                                          );
1->Emitted(58, 1) Source(5, 1) + SourceIndex(2)
2 >Emitted(58, 23) Source(5, 23) + SourceIndex(2)
3 >Emitted(58, 47) Source(5, 27) + SourceIndex(2)
4 >Emitted(58, 48) Source(5, 28) + SourceIndex(2)
5 >Emitted(58, 50) Source(5, 30) + SourceIndex(2)
6 >Emitted(58, 52) Source(5, 32) + SourceIndex(2)
7 >Emitted(58, 54) Source(5, 34) + SourceIndex(2)
8 >Emitted(58, 56) Source(5, 36) + SourceIndex(2)
9 >Emitted(58, 58) Source(5, 38) + SourceIndex(2)
10>Emitted(58, 59) Source(5, 39) + SourceIndex(2)
11>Emitted(58, 62) Source(5, 41) + SourceIndex(2)
---
>>>//# sourceMappingURL=first-output.js.map

//// [/src/first/bin/first-output.tsbundleinfo]
{
  "js": [
    {
      "pos": 0,
      "end": 599,
      "kind": "emitHelpers",
      "name": "typescript:extends"
    },
    {
      "pos": 599,
      "end": 1105,
      "kind": "emitHelpers",
      "name": "typescript:read"
    },
    {
      "pos": 1105,
      "end": 1277,
      "kind": "emitHelpers",
      "name": "typescript:spread"
    },
    {
      "pos": 1277,
      "end": 1893,
      "kind": "text"
    }
  ],
  "dts": [
    {
      "pos": 0,
      "end": 290,
      "kind": "text"
    }
  ]
}

//// [/src/first/first_part2.ts]
console.log(f());

class first1 { }
class first2 extends first1 { }

//// [/src/first/first_part3.ts]
function f() {
    return "JS does hoists";
}
function firstfirst_part3Spread(...b: number[]) { }
firstfirst_part3Spread(...[10, 20, 30]);

//// [/src/first/tsconfig.json]
{
  "compilerOptions": {
    "target": "es5",
    "composite": true,
    "removeComments": true,
    "strict": false,
    "downlevelIteration": true,
    "sourceMap": true,
    "declarationMap": true,
    "outFile": "./bin/first-output.js",
    "skipDefaultLibCheck": true
  },
  "files": [
    "first_PART1.ts",
    "first_part2.ts",
    "first_part3.ts"
  ],
  "references": [
  ]
}


//// [/src/second/second_part1.ts]
namespace N {
    // Comment text
}

namespace N {
    function f() {
        console.log('testing');
    }

    f();
}

class second1 { }
class second2 extends second1 { }

//// [/src/second/second_part2.ts]
class C {
    doSomething() {
        console.log("something got done");
    }
}

function secondsecond_part2Spread(...b: number[]) { }
secondsecond_part2Spread(...[10, 20, 30]);

//// [/src/second/tsconfig.json]
{
  "compilerOptions": {
    "target": "es5",
    "composite": true,
    "removeComments": true,
    "strict": false,
    "downlevelIteration": true,
    "sourceMap": true,
    "declarationMap": true,
    "declaration": true,
    "outFile": "../2/second-output.js",
    "skipDefaultLibCheck": true
  },
  "references": [
  ]
}


//// [/src/third/thirdjs/output/third-output.d.ts]
interface TheFirst {
    none: any;
}
declare const s = "Hello, world";
interface NoJsForHereEither {
    none: any;
}
declare class first1 {
}
declare class first2 extends first1 {
}
declare function f(): string;
declare function firstfirst_part3Spread(...b: number[]): void;
//# sourceMappingURL=first-output.d.ts.map
declare namespace N {
}
declare namespace N {
}
declare class second1 {
}
declare class second2 extends second1 {
}
declare class C {
    doSomething(): void;
}
declare function secondsecond_part2Spread(...b: number[]): void;
//# sourceMappingURL=second-output.d.ts.map
declare var c: C;
declare class third1 {
}
declare class third2 extends third1 {
}
declare function thirdthird_part1Spread(...b: number[]): void;
//# sourceMappingURL=third-output.d.ts.map

//// [/src/third/thirdjs/output/third-output.d.ts.map]
{"version":3,"file":"third-output.d.ts","sourceRoot":"","sources":["../../../first/first_PART1.ts","../../../first/first_part2.ts","../../../first/first_part3.ts","../../../second/second_part1.ts","../../../second/second_part2.ts","../../third_part1.ts"],"names":[],"mappings":"AAAA,UAAU,QAAQ;IACd,IAAI,EAAE,GAAG,CAAC;CACb;AAED,QAAA,MAAM,CAAC,iBAAiB,CAAC;AAEzB,UAAU,iBAAiB;IACvB,IAAI,EAAE,GAAG,CAAC;CACb;ACND,cAAM,MAAM;CAAI;AAChB,cAAM,MAAO,SAAQ,MAAM;CAAI;ACH/B,iBAAS,CAAC,WAET;AACD,iBAAS,sBAAsB,CAAC,GAAG,GAAG,MAAM,EAAE,QAAK;;ACHnD,kBAAU,CAAC,CAAC;CAEX;AAED,kBAAU,CAAC,CAAC;CAMX;AAED,cAAM,OAAO;CAAI;AACjB,cAAM,OAAQ,SAAQ,OAAO;CAAI;ACbjC,cAAM,CAAC;IACH,WAAW;CAGd;AAED,iBAAS,wBAAwB,CAAC,GAAG,GAAG,MAAM,EAAE,QAAK;;ACNrD,QAAA,IAAI,CAAC,GAAU,CAAC;AAGhB,cAAM,MAAM;CAAI;AAChB,cAAM,MAAO,SAAQ,MAAM;CAAI;AAC/B,iBAAS,sBAAsB,CAAC,GAAG,GAAG,MAAM,EAAE,QAAK"}

//// [/src/third/thirdjs/output/third-output.d.ts.map.baseline.txt]
===================================================================
JsFile: third-output.d.ts
mapUrl: third-output.d.ts.map
sourceRoot: 
sources: ../../../first/first_PART1.ts,../../../first/first_part2.ts,../../../first/first_part3.ts,../../../second/second_part1.ts,../../../second/second_part2.ts,../../third_part1.ts
===================================================================
-------------------------------------------------------------------
emittedFile:/src/third/thirdjs/output/third-output.d.ts
sourceFile:../../../first/first_PART1.ts
-------------------------------------------------------------------
>>>interface TheFirst {
1 >
2 >^^^^^^^^^^
3 >          ^^^^^^^^
1 >
2 >interface 
3 >          TheFirst
1 >Emitted(1, 1) Source(1, 1) + SourceIndex(0)
2 >Emitted(1, 11) Source(1, 11) + SourceIndex(0)
3 >Emitted(1, 19) Source(1, 19) + SourceIndex(0)
---
>>>    none: any;
1 >^^^^
2 >    ^^^^
3 >        ^^
4 >          ^^^
5 >             ^
1 > {
  >    
2 >    none
3 >        : 
4 >          any
5 >             ;
1 >Emitted(2, 5) Source(2, 5) + SourceIndex(0)
2 >Emitted(2, 9) Source(2, 9) + SourceIndex(0)
3 >Emitted(2, 11) Source(2, 11) + SourceIndex(0)
4 >Emitted(2, 14) Source(2, 14) + SourceIndex(0)
5 >Emitted(2, 15) Source(2, 15) + SourceIndex(0)
---
>>>}
1 >^
2 > ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
  >}
1 >Emitted(3, 2) Source(3, 2) + SourceIndex(0)
---
>>>declare const s = "Hello, world";
1->
2 >^^^^^^^^
3 >        ^^^^^^
4 >              ^
5 >               ^^^^^^^^^^^^^^^^^
6 >                                ^
1->
  >
  >
2 >
3 >        const 
4 >              s
5 >                = "Hello, world"
6 >                                ;
1->Emitted(4, 1) Source(5, 1) + SourceIndex(0)
2 >Emitted(4, 9) Source(5, 1) + SourceIndex(0)
3 >Emitted(4, 15) Source(5, 7) + SourceIndex(0)
4 >Emitted(4, 16) Source(5, 8) + SourceIndex(0)
5 >Emitted(4, 33) Source(5, 25) + SourceIndex(0)
6 >Emitted(4, 34) Source(5, 26) + SourceIndex(0)
---
>>>interface NoJsForHereEither {
1 >
2 >^^^^^^^^^^
3 >          ^^^^^^^^^^^^^^^^^
1 >
  >
  >
2 >interface 
3 >          NoJsForHereEither
1 >Emitted(5, 1) Source(7, 1) + SourceIndex(0)
2 >Emitted(5, 11) Source(7, 11) + SourceIndex(0)
3 >Emitted(5, 28) Source(7, 28) + SourceIndex(0)
---
>>>    none: any;
1 >^^^^
2 >    ^^^^
3 >        ^^
4 >          ^^^
5 >             ^
1 > {
  >    
2 >    none
3 >        : 
4 >          any
5 >             ;
1 >Emitted(6, 5) Source(8, 5) + SourceIndex(0)
2 >Emitted(6, 9) Source(8, 9) + SourceIndex(0)
3 >Emitted(6, 11) Source(8, 11) + SourceIndex(0)
4 >Emitted(6, 14) Source(8, 14) + SourceIndex(0)
5 >Emitted(6, 15) Source(8, 15) + SourceIndex(0)
---
>>>}
1 >^
2 > ^^^^^^^^^^^^^^^^^^^^^^->
1 >
  >}
1 >Emitted(7, 2) Source(9, 2) + SourceIndex(0)
---
-------------------------------------------------------------------
emittedFile:/src/third/thirdjs/output/third-output.d.ts
sourceFile:../../../first/first_part2.ts
-------------------------------------------------------------------
>>>declare class first1 {
1->
2 >^^^^^^^^^^^^^^
3 >              ^^^^^^
1->console.log(f());
  >
  >
2 >class 
3 >              first1
1->Emitted(8, 1) Source(3, 1) + SourceIndex(1)
2 >Emitted(8, 15) Source(3, 7) + SourceIndex(1)
3 >Emitted(8, 21) Source(3, 13) + SourceIndex(1)
---
>>>}
1 >^
2 > ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 > { }
1 >Emitted(9, 2) Source(3, 17) + SourceIndex(1)
---
>>>declare class first2 extends first1 {
1->
2 >^^^^^^^^^^^^^^
3 >              ^^^^^^
4 >                    ^^^^^^^^^
5 >                             ^^^^^^
1->
  >
2 >class 
3 >              first2 
4 >                    extends 
5 >                             first1
1->Emitted(10, 1) Source(4, 1) + SourceIndex(1)
2 >Emitted(10, 15) Source(4, 7) + SourceIndex(1)
3 >Emitted(10, 21) Source(4, 14) + SourceIndex(1)
4 >Emitted(10, 30) Source(4, 22) + SourceIndex(1)
5 >Emitted(10, 36) Source(4, 28) + SourceIndex(1)
---
>>>}
1 >^
2 > ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 > { }
1 >Emitted(11, 2) Source(4, 32) + SourceIndex(1)
---
-------------------------------------------------------------------
emittedFile:/src/third/thirdjs/output/third-output.d.ts
sourceFile:../../../first/first_part3.ts
-------------------------------------------------------------------
>>>declare function f(): string;
1->
2 >^^^^^^^^^^^^^^^^^
3 >                 ^
4 >                  ^^^^^^^^^^^
5 >                             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1->
2 >function 
3 >                 f
4 >                  () {
  >                      return "JS does hoists";
  >                  }
1->Emitted(12, 1) Source(1, 1) + SourceIndex(2)
2 >Emitted(12, 18) Source(1, 10) + SourceIndex(2)
3 >Emitted(12, 19) Source(1, 11) + SourceIndex(2)
4 >Emitted(12, 30) Source(3, 2) + SourceIndex(2)
---
>>>declare function firstfirst_part3Spread(...b: number[]): void;
1->
2 >^^^^^^^^^^^^^^^^^
3 >                 ^^^^^^^^^^^^^^^^^^^^^^
4 >                                       ^
5 >                                        ^^^
6 >                                           ^^^
7 >                                              ^^^^^^
8 >                                                    ^^
9 >                                                      ^^^^^^^^
1->
  >
2 >function 
3 >                 firstfirst_part3Spread
4 >                                       (
5 >                                        ...
6 >                                           b: 
7 >                                              number
8 >                                                    []
9 >                                                      ) { }
1->Emitted(13, 1) Source(4, 1) + SourceIndex(2)
2 >Emitted(13, 18) Source(4, 10) + SourceIndex(2)
3 >Emitted(13, 40) Source(4, 32) + SourceIndex(2)
4 >Emitted(13, 41) Source(4, 33) + SourceIndex(2)
5 >Emitted(13, 44) Source(4, 36) + SourceIndex(2)
6 >Emitted(13, 47) Source(4, 39) + SourceIndex(2)
7 >Emitted(13, 53) Source(4, 45) + SourceIndex(2)
8 >Emitted(13, 55) Source(4, 47) + SourceIndex(2)
9 >Emitted(13, 63) Source(4, 52) + SourceIndex(2)
---
-------------------------------------------------------------------
emittedFile:/src/third/thirdjs/output/third-output.d.ts
sourceFile:../../../second/second_part1.ts
-------------------------------------------------------------------
>>>//# sourceMappingURL=first-output.d.ts.map
>>>declare namespace N {
1 >
2 >^^^^^^^^^^^^^^^^^^
3 >                  ^
4 >                   ^
1 >
2 >namespace 
3 >                  N
4 >                    
1 >Emitted(15, 1) Source(1, 1) + SourceIndex(3)
2 >Emitted(15, 19) Source(1, 11) + SourceIndex(3)
3 >Emitted(15, 20) Source(1, 12) + SourceIndex(3)
4 >Emitted(15, 21) Source(1, 13) + SourceIndex(3)
---
>>>}
1 >^
2 > ^^^^^^^^^^^^^^^^^^^^^->
1 >{
  >    // Comment text
  >}
1 >Emitted(16, 2) Source(3, 2) + SourceIndex(3)
---
>>>declare namespace N {
1->
2 >^^^^^^^^^^^^^^^^^^
3 >                  ^
4 >                   ^
1->
  >
  >
2 >namespace 
3 >                  N
4 >                    
1->Emitted(17, 1) Source(5, 1) + SourceIndex(3)
2 >Emitted(17, 19) Source(5, 11) + SourceIndex(3)
3 >Emitted(17, 20) Source(5, 12) + SourceIndex(3)
4 >Emitted(17, 21) Source(5, 13) + SourceIndex(3)
---
>>>}
1 >^
2 > ^^^^^^^^^^^^^^^^^^^^^^^->
1 >{
  >    function f() {
  >        console.log('testing');
  >    }
  >
  >    f();
  >}
1 >Emitted(18, 2) Source(11, 2) + SourceIndex(3)
---
>>>declare class second1 {
1->
2 >^^^^^^^^^^^^^^
3 >              ^^^^^^^
1->
  >
  >
2 >class 
3 >              second1
1->Emitted(19, 1) Source(13, 1) + SourceIndex(3)
2 >Emitted(19, 15) Source(13, 7) + SourceIndex(3)
3 >Emitted(19, 22) Source(13, 14) + SourceIndex(3)
---
>>>}
1 >^
2 > ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 > { }
1 >Emitted(20, 2) Source(13, 18) + SourceIndex(3)
---
>>>declare class second2 extends second1 {
1->
2 >^^^^^^^^^^^^^^
3 >              ^^^^^^^
4 >                     ^^^^^^^^^
5 >                              ^^^^^^^
1->
  >
2 >class 
3 >              second2 
4 >                     extends 
5 >                              second1
1->Emitted(21, 1) Source(14, 1) + SourceIndex(3)
2 >Emitted(21, 15) Source(14, 7) + SourceIndex(3)
3 >Emitted(21, 22) Source(14, 15) + SourceIndex(3)
4 >Emitted(21, 31) Source(14, 23) + SourceIndex(3)
5 >Emitted(21, 38) Source(14, 30) + SourceIndex(3)
---
>>>}
1 >^
2 > ^^^^^^^^^^^^^^^^^->
1 > { }
1 >Emitted(22, 2) Source(14, 34) + SourceIndex(3)
---
-------------------------------------------------------------------
emittedFile:/src/third/thirdjs/output/third-output.d.ts
sourceFile:../../../second/second_part2.ts
-------------------------------------------------------------------
>>>declare class C {
1->
2 >^^^^^^^^^^^^^^
3 >              ^
4 >               ^^^^^^^^^^->
1->
2 >class 
3 >              C
1->Emitted(23, 1) Source(1, 1) + SourceIndex(4)
2 >Emitted(23, 15) Source(1, 7) + SourceIndex(4)
3 >Emitted(23, 16) Source(1, 8) + SourceIndex(4)
---
>>>    doSomething(): void;
1->^^^^
2 >    ^^^^^^^^^^^
1-> {
  >    
2 >    doSomething
1->Emitted(24, 5) Source(2, 5) + SourceIndex(4)
2 >Emitted(24, 16) Source(2, 16) + SourceIndex(4)
---
>>>}
1 >^
2 > ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >() {
  >        console.log("something got done");
  >    }
  >}
1 >Emitted(25, 2) Source(5, 2) + SourceIndex(4)
---
>>>declare function secondsecond_part2Spread(...b: number[]): void;
1->
2 >^^^^^^^^^^^^^^^^^
3 >                 ^^^^^^^^^^^^^^^^^^^^^^^^
4 >                                         ^
5 >                                          ^^^
6 >                                             ^^^
7 >                                                ^^^^^^
8 >                                                      ^^
9 >                                                        ^^^^^^^^
1->
  >
  >
2 >function 
3 >                 secondsecond_part2Spread
4 >                                         (
5 >                                          ...
6 >                                             b: 
7 >                                                number
8 >                                                      []
9 >                                                        ) { }
1->Emitted(26, 1) Source(7, 1) + SourceIndex(4)
2 >Emitted(26, 18) Source(7, 10) + SourceIndex(4)
3 >Emitted(26, 42) Source(7, 34) + SourceIndex(4)
4 >Emitted(26, 43) Source(7, 35) + SourceIndex(4)
5 >Emitted(26, 46) Source(7, 38) + SourceIndex(4)
6 >Emitted(26, 49) Source(7, 41) + SourceIndex(4)
7 >Emitted(26, 55) Source(7, 47) + SourceIndex(4)
8 >Emitted(26, 57) Source(7, 49) + SourceIndex(4)
9 >Emitted(26, 65) Source(7, 54) + SourceIndex(4)
---
-------------------------------------------------------------------
emittedFile:/src/third/thirdjs/output/third-output.d.ts
sourceFile:../../third_part1.ts
-------------------------------------------------------------------
>>>//# sourceMappingURL=second-output.d.ts.map
>>>declare var c: C;
1 >
2 >^^^^^^^^
3 >        ^^^^
4 >            ^
5 >             ^^^
6 >                ^
7 >                 ^^^^^^->
1 >
2 >
3 >        var 
4 >            c
5 >              = new C()
6 >                ;
1 >Emitted(28, 1) Source(1, 1) + SourceIndex(5)
2 >Emitted(28, 9) Source(1, 1) + SourceIndex(5)
3 >Emitted(28, 13) Source(1, 5) + SourceIndex(5)
4 >Emitted(28, 14) Source(1, 6) + SourceIndex(5)
5 >Emitted(28, 17) Source(1, 16) + SourceIndex(5)
6 >Emitted(28, 18) Source(1, 17) + SourceIndex(5)
---
>>>declare class third1 {
1->
2 >^^^^^^^^^^^^^^
3 >              ^^^^^^
1->
  >c.doSomething();
  >
  >
2 >class 
3 >              third1
1->Emitted(29, 1) Source(4, 1) + SourceIndex(5)
2 >Emitted(29, 15) Source(4, 7) + SourceIndex(5)
3 >Emitted(29, 21) Source(4, 13) + SourceIndex(5)
---
>>>}
1 >^
2 > ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 > { }
1 >Emitted(30, 2) Source(4, 17) + SourceIndex(5)
---
>>>declare class third2 extends third1 {
1->
2 >^^^^^^^^^^^^^^
3 >              ^^^^^^
4 >                    ^^^^^^^^^
5 >                             ^^^^^^
1->
  >
2 >class 
3 >              third2 
4 >                    extends 
5 >                             third1
1->Emitted(31, 1) Source(5, 1) + SourceIndex(5)
2 >Emitted(31, 15) Source(5, 7) + SourceIndex(5)
3 >Emitted(31, 21) Source(5, 14) + SourceIndex(5)
4 >Emitted(31, 30) Source(5, 22) + SourceIndex(5)
5 >Emitted(31, 36) Source(5, 28) + SourceIndex(5)
---
>>>}
1 >^
2 > ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 > { }
1 >Emitted(32, 2) Source(5, 32) + SourceIndex(5)
---
>>>declare function thirdthird_part1Spread(...b: number[]): void;
1->
2 >^^^^^^^^^^^^^^^^^
3 >                 ^^^^^^^^^^^^^^^^^^^^^^
4 >                                       ^
5 >                                        ^^^
6 >                                           ^^^
7 >                                              ^^^^^^
8 >                                                    ^^
9 >                                                      ^^^^^^^^
1->
  >
2 >function 
3 >                 thirdthird_part1Spread
4 >                                       (
5 >                                        ...
6 >                                           b: 
7 >                                              number
8 >                                                    []
9 >                                                      ) { }
1->Emitted(33, 1) Source(6, 1) + SourceIndex(5)
2 >Emitted(33, 18) Source(6, 10) + SourceIndex(5)
3 >Emitted(33, 40) Source(6, 32) + SourceIndex(5)
4 >Emitted(33, 41) Source(6, 33) + SourceIndex(5)
5 >Emitted(33, 44) Source(6, 36) + SourceIndex(5)
6 >Emitted(33, 47) Source(6, 39) + SourceIndex(5)
7 >Emitted(33, 53) Source(6, 45) + SourceIndex(5)
8 >Emitted(33, 55) Source(6, 47) + SourceIndex(5)
9 >Emitted(33, 63) Source(6, 52) + SourceIndex(5)
---
>>>//# sourceMappingURL=third-output.d.ts.map

//// [/src/third/thirdjs/output/third-output.js]
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
var s = "Hello, world";
console.log(s);
console.log(f());
var first1 = (function () {
    function first1() {
    }
    return first1;
}());
var first2 = (function (_super) {
    __extends(first2, _super);
    function first2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return first2;
}(first1));
function f() {
    return "JS does hoists";
}
function firstfirst_part3Spread() {
    var b = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        b[_i] = arguments[_i];
    }
}
firstfirst_part3Spread.apply(void 0, __spread([10, 20, 30]));
//# sourceMappingURL=first-output.js.map
var N;
(function (N) {
    function f() {
        console.log('testing');
    }
    f();
})(N || (N = {}));
var second1 = (function () {
    function second1() {
    }
    return second1;
}());
var second2 = (function (_super) {
    __extends(second2, _super);
    function second2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return second2;
}(second1));
var C = (function () {
    function C() {
    }
    C.prototype.doSomething = function () {
        console.log("something got done");
    };
    return C;
}());
function secondsecond_part2Spread() {
    var b = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        b[_i] = arguments[_i];
    }
}
secondsecond_part2Spread.apply(void 0, __spread([10, 20, 30]));
//# sourceMappingURL=second-output.js.map
var c = new C();
c.doSomething();
var third1 = (function () {
    function third1() {
    }
    return third1;
}());
var third2 = (function (_super) {
    __extends(third2, _super);
    function third2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return third2;
}(third1));
function thirdthird_part1Spread() {
    var b = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        b[_i] = arguments[_i];
    }
}
thirdthird_part1Spread.apply(void 0, __spread([10, 20, 30]));
//# sourceMappingURL=third-output.js.map

//// [/src/third/thirdjs/output/third-output.js.map]
{"version":3,"file":"third-output.js","sourceRoot":"","sources":["../../../first/first_PART1.ts","../../../first/first_part2.ts","../../../first/first_part3.ts","../../../second/second_part1.ts","../../../second/second_part2.ts","../../third_part1.ts"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAIA,IAAM,CAAC,GAAG,cAAc,CAAC;AAMzB,OAAO,CAAC,GAAG,CAAC,CAAC,CAAC,CAAC;ACVf,OAAO,CAAC,GAAG,CAAC,CAAC,EAAE,CAAC,CAAC;AAEjB;IAAA;IAAe,CAAC;IAAD,aAAC;AAAD,CAAC,AAAhB,IAAgB;AAChB;IAAqB,0BAAM;IAA3B;;IAA8B,CAAC;IAAD,aAAC;AAAD,CAAC,AAA/B,CAAqB,MAAM,GAAI;ACH/B,SAAS,CAAC;IACN,OAAO,gBAAgB,CAAC;AAC5B,CAAC;AACD,SAAS,sBAAsB;IAAC,WAAc;SAAd,UAAc,EAAd,qBAAc,EAAd,IAAc;QAAd,sBAAc;;AAAI,CAAC;AACnD,sBAAsB,wBAAI,CAAC,EAAE,EAAE,EAAE,EAAE,EAAE,CAAC,GAAE;;ACAxC,IAAU,CAAC,CAMV;AAND,WAAU,CAAC;IACP,SAAS,CAAC;QACN,OAAO,CAAC,GAAG,CAAC,SAAS,CAAC,CAAC;IAC3B,CAAC;IAED,CAAC,EAAE,CAAC;AACR,CAAC,EANS,CAAC,KAAD,CAAC,QAMV;AAED;IAAA;IAAgB,CAAC;IAAD,cAAC;AAAD,CAAC,AAAjB,IAAiB;AACjB;IAAsB,2BAAO;IAA7B;;IAAgC,CAAC;IAAD,cAAC;AAAD,CAAC,AAAjC,CAAsB,OAAO,GAAI;ACbjC;IAAA;IAIA,CAAC;IAHG,uBAAW,GAAX;QACI,OAAO,CAAC,GAAG,CAAC,oBAAoB,CAAC,CAAC;IACtC,CAAC;IACL,QAAC;AAAD,CAAC,AAJD,IAIC;AAED,SAAS,wBAAwB;IAAC,WAAc;SAAd,UAAc,EAAd,qBAAc,EAAd,IAAc;QAAd,sBAAc;;AAAI,CAAC;AACrD,wBAAwB,wBAAI,CAAC,EAAE,EAAE,EAAE,EAAE,EAAE,CAAC,GAAE;;ACP1C,IAAI,CAAC,GAAG,IAAI,CAAC,EAAE,CAAC;AAChB,CAAC,CAAC,WAAW,EAAE,CAAC;AAEhB;IAAA;IAAe,CAAC;IAAD,aAAC;AAAD,CAAC,AAAhB,IAAgB;AAChB;IAAqB,0BAAM;IAA3B;;IAA8B,CAAC;IAAD,aAAC;AAAD,CAAC,AAA/B,CAAqB,MAAM,GAAI;AAC/B,SAAS,sBAAsB;IAAC,WAAc;SAAd,UAAc,EAAd,qBAAc,EAAd,IAAc;QAAd,sBAAc;;AAAI,CAAC;AACnD,sBAAsB,wBAAI,CAAC,EAAE,EAAE,EAAE,EAAE,EAAE,CAAC,GAAE"}

//// [/src/third/thirdjs/output/third-output.js.map.baseline.txt]
===================================================================
JsFile: third-output.js
mapUrl: third-output.js.map
sourceRoot: 
sources: ../../../first/first_PART1.ts,../../../first/first_part2.ts,../../../first/first_part3.ts,../../../second/second_part1.ts,../../../second/second_part2.ts,../../third_part1.ts
===================================================================
-------------------------------------------------------------------
emittedFile:/src/third/thirdjs/output/third-output.js
sourceFile:../../../first/first_PART1.ts
-------------------------------------------------------------------
>>>var __extends = (this && this.__extends) || (function () {
>>>    var extendStatics = function (d, b) {
>>>        extendStatics = Object.setPrototypeOf ||
>>>            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
>>>            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
>>>        return extendStatics(d, b);
>>>    };
>>>    return function (d, b) {
>>>        extendStatics(d, b);
>>>        function __() { this.constructor = d; }
>>>        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
>>>    };
>>>})();
>>>var __read = (this && this.__read) || function (o, n) {
>>>    var m = typeof Symbol === "function" && o[Symbol.iterator];
>>>    if (!m) return o;
>>>    var i = m.call(o), r, ar = [], e;
>>>    try {
>>>        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
>>>    }
>>>    catch (error) { e = { error: error }; }
>>>    finally {
>>>        try {
>>>            if (r && !r.done && (m = i["return"])) m.call(i);
>>>        }
>>>        finally { if (e) throw e.error; }
>>>    }
>>>    return ar;
>>>};
>>>var __spread = (this && this.__spread) || function () {
>>>    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
>>>    return ar;
>>>};
>>>var s = "Hello, world";
1 >
2 >^^^^
3 >    ^
4 >     ^^^
5 >        ^^^^^^^^^^^^^^
6 >                      ^
1 >interface TheFirst {
  >    none: any;
  >}
  >
  >
2 >const 
3 >    s
4 >      = 
5 >        "Hello, world"
6 >                      ;
1 >Emitted(34, 1) Source(5, 1) + SourceIndex(0)
2 >Emitted(34, 5) Source(5, 7) + SourceIndex(0)
3 >Emitted(34, 6) Source(5, 8) + SourceIndex(0)
4 >Emitted(34, 9) Source(5, 11) + SourceIndex(0)
5 >Emitted(34, 23) Source(5, 25) + SourceIndex(0)
6 >Emitted(34, 24) Source(5, 26) + SourceIndex(0)
---
>>>console.log(s);
1 >
2 >^^^^^^^
3 >       ^
4 >        ^^^
5 >           ^
6 >            ^
7 >             ^
8 >              ^
9 >               ^^^->
1 >
  >
  >interface NoJsForHereEither {
  >    none: any;
  >}
  >
  >
2 >console
3 >       .
4 >        log
5 >           (
6 >            s
7 >             )
8 >              ;
1 >Emitted(35, 1) Source(11, 1) + SourceIndex(0)
2 >Emitted(35, 8) Source(11, 8) + SourceIndex(0)
3 >Emitted(35, 9) Source(11, 9) + SourceIndex(0)
4 >Emitted(35, 12) Source(11, 12) + SourceIndex(0)
5 >Emitted(35, 13) Source(11, 13) + SourceIndex(0)
6 >Emitted(35, 14) Source(11, 14) + SourceIndex(0)
7 >Emitted(35, 15) Source(11, 15) + SourceIndex(0)
8 >Emitted(35, 16) Source(11, 16) + SourceIndex(0)
---
-------------------------------------------------------------------
emittedFile:/src/third/thirdjs/output/third-output.js
sourceFile:../../../first/first_part2.ts
-------------------------------------------------------------------
>>>console.log(f());
1->
2 >^^^^^^^
3 >       ^
4 >        ^^^
5 >           ^
6 >            ^
7 >             ^^
8 >               ^
9 >                ^
10>                 ^^^^^^^^^^^->
1->
2 >console
3 >       .
4 >        log
5 >           (
6 >            f
7 >             ()
8 >               )
9 >                ;
1->Emitted(36, 1) Source(1, 1) + SourceIndex(1)
2 >Emitted(36, 8) Source(1, 8) + SourceIndex(1)
3 >Emitted(36, 9) Source(1, 9) + SourceIndex(1)
4 >Emitted(36, 12) Source(1, 12) + SourceIndex(1)
5 >Emitted(36, 13) Source(1, 13) + SourceIndex(1)
6 >Emitted(36, 14) Source(1, 14) + SourceIndex(1)
7 >Emitted(36, 16) Source(1, 16) + SourceIndex(1)
8 >Emitted(36, 17) Source(1, 17) + SourceIndex(1)
9 >Emitted(36, 18) Source(1, 18) + SourceIndex(1)
---
>>>var first1 = (function () {
1->
2 >^^^^^^^^^^^^^^^^^^^^^^^^->
1->
  >
  >
1->Emitted(37, 1) Source(3, 1) + SourceIndex(1)
---
>>>    function first1() {
1->^^^^
2 >    ^^->
1->
1->Emitted(38, 5) Source(3, 1) + SourceIndex(1)
---
>>>    }
1->^^^^
2 >    ^
3 >     ^^^^^^^^^^^^^^->
1->class first1 { 
2 >    }
1->Emitted(39, 5) Source(3, 16) + SourceIndex(1)
2 >Emitted(39, 6) Source(3, 17) + SourceIndex(1)
---
>>>    return first1;
1->^^^^
2 >    ^^^^^^^^^^^^^
1->
2 >    }
1->Emitted(40, 5) Source(3, 16) + SourceIndex(1)
2 >Emitted(40, 18) Source(3, 17) + SourceIndex(1)
---
>>>}());
1 >
2 >^
3 > 
4 > ^^^^
5 >     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
2 >}
3 > 
4 > class first1 { }
1 >Emitted(41, 1) Source(3, 16) + SourceIndex(1)
2 >Emitted(41, 2) Source(3, 17) + SourceIndex(1)
3 >Emitted(41, 2) Source(3, 1) + SourceIndex(1)
4 >Emitted(41, 6) Source(3, 17) + SourceIndex(1)
---
>>>var first2 = (function (_super) {
1->
2 >^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1->
  >
1->Emitted(42, 1) Source(4, 1) + SourceIndex(1)
---
>>>    __extends(first2, _super);
1->^^^^
2 >    ^^^^^^^^^^^^^^^^^^^^^^^^^^
1->class first2 extends 
2 >    first1
1->Emitted(43, 5) Source(4, 22) + SourceIndex(1)
2 >Emitted(43, 31) Source(4, 28) + SourceIndex(1)
---
>>>    function first2() {
1 >^^^^
2 >    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
1 >Emitted(44, 5) Source(4, 1) + SourceIndex(1)
---
>>>        return _super !== null && _super.apply(this, arguments) || this;
>>>    }
1->^^^^
2 >    ^
3 >     ^^^^^^^^^^^^^^->
1->class first2 extends first1 { 
2 >    }
1->Emitted(46, 5) Source(4, 31) + SourceIndex(1)
2 >Emitted(46, 6) Source(4, 32) + SourceIndex(1)
---
>>>    return first2;
1->^^^^
2 >    ^^^^^^^^^^^^^
1->
2 >    }
1->Emitted(47, 5) Source(4, 31) + SourceIndex(1)
2 >Emitted(47, 18) Source(4, 32) + SourceIndex(1)
---
>>>}(first1));
1 >
2 >^
3 > 
4 > ^
5 >  ^^^^^^
6 >        ^^^
7 >           ^^^^->
1 >
2 >}
3 > 
4 > class first2 extends 
5 >  first1
6 >         { }
1 >Emitted(48, 1) Source(4, 31) + SourceIndex(1)
2 >Emitted(48, 2) Source(4, 32) + SourceIndex(1)
3 >Emitted(48, 2) Source(4, 1) + SourceIndex(1)
4 >Emitted(48, 3) Source(4, 22) + SourceIndex(1)
5 >Emitted(48, 9) Source(4, 28) + SourceIndex(1)
6 >Emitted(48, 12) Source(4, 32) + SourceIndex(1)
---
-------------------------------------------------------------------
emittedFile:/src/third/thirdjs/output/third-output.js
sourceFile:../../../first/first_part3.ts
-------------------------------------------------------------------
>>>function f() {
1->
2 >^^^^^^^^^
3 >         ^
4 >          ^^^^^^^^^^^^^^^^^^^->
1->
2 >function 
3 >         f
1->Emitted(49, 1) Source(1, 1) + SourceIndex(2)
2 >Emitted(49, 10) Source(1, 10) + SourceIndex(2)
3 >Emitted(49, 11) Source(1, 11) + SourceIndex(2)
---
>>>    return "JS does hoists";
1->^^^^
2 >    ^^^^^^^
3 >           ^^^^^^^^^^^^^^^^
4 >                           ^
1->() {
  >    
2 >    return 
3 >           "JS does hoists"
4 >                           ;
1->Emitted(50, 5) Source(2, 5) + SourceIndex(2)
2 >Emitted(50, 12) Source(2, 12) + SourceIndex(2)
3 >Emitted(50, 28) Source(2, 28) + SourceIndex(2)
4 >Emitted(50, 29) Source(2, 29) + SourceIndex(2)
---
>>>}
1 >
2 >^
3 > ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
  >
2 >}
1 >Emitted(51, 1) Source(3, 1) + SourceIndex(2)
2 >Emitted(51, 2) Source(3, 2) + SourceIndex(2)
---
>>>function firstfirst_part3Spread() {
1->
2 >^^^^^^^^^
3 >         ^^^^^^^^^^^^^^^^^^^^^^
1->
  >
2 >function 
3 >         firstfirst_part3Spread
1->Emitted(52, 1) Source(4, 1) + SourceIndex(2)
2 >Emitted(52, 10) Source(4, 10) + SourceIndex(2)
3 >Emitted(52, 32) Source(4, 32) + SourceIndex(2)
---
>>>    var b = [];
1 >^^^^
2 >    ^^^^^^^^^^^
3 >               ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >(
2 >    ...b: number[]
1 >Emitted(53, 5) Source(4, 33) + SourceIndex(2)
2 >Emitted(53, 16) Source(4, 47) + SourceIndex(2)
---
>>>    for (var _i = 0; _i < arguments.length; _i++) {
1->^^^^^^^^^
2 >         ^^^^^^^^^^
3 >                   ^^
4 >                     ^^^^^^^^^^^^^^^^^^^^^
5 >                                          ^^
6 >                                            ^^^^
1->
2 >         ...b: number[]
3 >                   
4 >                     ...b: number[]
5 >                                          
6 >                                            ...b: number[]
1->Emitted(54, 10) Source(4, 33) + SourceIndex(2)
2 >Emitted(54, 20) Source(4, 47) + SourceIndex(2)
3 >Emitted(54, 22) Source(4, 33) + SourceIndex(2)
4 >Emitted(54, 43) Source(4, 47) + SourceIndex(2)
5 >Emitted(54, 45) Source(4, 33) + SourceIndex(2)
6 >Emitted(54, 49) Source(4, 47) + SourceIndex(2)
---
>>>        b[_i] = arguments[_i];
1 >^^^^^^^^
2 >        ^^^^^^^^^^^^^^^^^^^^^^
1 >
2 >        ...b: number[]
1 >Emitted(55, 9) Source(4, 33) + SourceIndex(2)
2 >Emitted(55, 31) Source(4, 47) + SourceIndex(2)
---
>>>    }
>>>}
1 >
2 >^
3 > ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >) { 
2 >}
1 >Emitted(57, 1) Source(4, 51) + SourceIndex(2)
2 >Emitted(57, 2) Source(4, 52) + SourceIndex(2)
---
>>>firstfirst_part3Spread.apply(void 0, __spread([10, 20, 30]));
1->
2 >^^^^^^^^^^^^^^^^^^^^^^
3 >                      ^^^^^^^^^^^^^^^^^^^^^^^^
4 >                                              ^
5 >                                               ^^
6 >                                                 ^^
7 >                                                   ^^
8 >                                                     ^^
9 >                                                       ^^
10>                                                         ^
11>                                                          ^^^
1->
  >
2 >firstfirst_part3Spread
3 >                      (...
4 >                                              [
5 >                                               10
6 >                                                 , 
7 >                                                   20
8 >                                                     , 
9 >                                                       30
10>                                                         ]
11>                                                          );
1->Emitted(58, 1) Source(5, 1) + SourceIndex(2)
2 >Emitted(58, 23) Source(5, 23) + SourceIndex(2)
3 >Emitted(58, 47) Source(5, 27) + SourceIndex(2)
4 >Emitted(58, 48) Source(5, 28) + SourceIndex(2)
5 >Emitted(58, 50) Source(5, 30) + SourceIndex(2)
6 >Emitted(58, 52) Source(5, 32) + SourceIndex(2)
7 >Emitted(58, 54) Source(5, 34) + SourceIndex(2)
8 >Emitted(58, 56) Source(5, 36) + SourceIndex(2)
9 >Emitted(58, 58) Source(5, 38) + SourceIndex(2)
10>Emitted(58, 59) Source(5, 39) + SourceIndex(2)
11>Emitted(58, 62) Source(5, 41) + SourceIndex(2)
---
-------------------------------------------------------------------
emittedFile:/src/third/thirdjs/output/third-output.js
sourceFile:../../../second/second_part1.ts
-------------------------------------------------------------------
>>>//# sourceMappingURL=first-output.js.map
>>>var N;
1 >
2 >^^^^
3 >    ^
4 >     ^
5 >      ^^^^^^^^^^->
1 >namespace N {
  >    // Comment text
  >}
  >
  >
2 >namespace 
3 >    N
4 >      {
  >         function f() {
  >             console.log('testing');
  >         }
  >     
  >         f();
  >     }
1 >Emitted(60, 1) Source(5, 1) + SourceIndex(3)
2 >Emitted(60, 5) Source(5, 11) + SourceIndex(3)
3 >Emitted(60, 6) Source(5, 12) + SourceIndex(3)
4 >Emitted(60, 7) Source(11, 2) + SourceIndex(3)
---
>>>(function (N) {
1->
2 >^^^^^^^^^^^
3 >           ^
4 >            ^^^^^^^->
1->
2 >namespace 
3 >           N
1->Emitted(61, 1) Source(5, 1) + SourceIndex(3)
2 >Emitted(61, 12) Source(5, 11) + SourceIndex(3)
3 >Emitted(61, 13) Source(5, 12) + SourceIndex(3)
---
>>>    function f() {
1->^^^^
2 >    ^^^^^^^^^
3 >             ^
4 >              ^^^^^^^^^^^^^^^^^^->
1-> {
  >    
2 >    function 
3 >             f
1->Emitted(62, 5) Source(6, 5) + SourceIndex(3)
2 >Emitted(62, 14) Source(6, 14) + SourceIndex(3)
3 >Emitted(62, 15) Source(6, 15) + SourceIndex(3)
---
>>>        console.log('testing');
1->^^^^^^^^
2 >        ^^^^^^^
3 >               ^
4 >                ^^^
5 >                   ^
6 >                    ^^^^^^^^^
7 >                             ^
8 >                              ^
1->() {
  >        
2 >        console
3 >               .
4 >                log
5 >                   (
6 >                    'testing'
7 >                             )
8 >                              ;
1->Emitted(63, 9) Source(7, 9) + SourceIndex(3)
2 >Emitted(63, 16) Source(7, 16) + SourceIndex(3)
3 >Emitted(63, 17) Source(7, 17) + SourceIndex(3)
4 >Emitted(63, 20) Source(7, 20) + SourceIndex(3)
5 >Emitted(63, 21) Source(7, 21) + SourceIndex(3)
6 >Emitted(63, 30) Source(7, 30) + SourceIndex(3)
7 >Emitted(63, 31) Source(7, 31) + SourceIndex(3)
8 >Emitted(63, 32) Source(7, 32) + SourceIndex(3)
---
>>>    }
1 >^^^^
2 >    ^
3 >     ^^^^->
1 >
  >    
2 >    }
1 >Emitted(64, 5) Source(8, 5) + SourceIndex(3)
2 >Emitted(64, 6) Source(8, 6) + SourceIndex(3)
---
>>>    f();
1->^^^^
2 >    ^
3 >     ^^
4 >       ^
5 >        ^^^^^^^^^^^->
1->
  >
  >    
2 >    f
3 >     ()
4 >       ;
1->Emitted(65, 5) Source(10, 5) + SourceIndex(3)
2 >Emitted(65, 6) Source(10, 6) + SourceIndex(3)
3 >Emitted(65, 8) Source(10, 8) + SourceIndex(3)
4 >Emitted(65, 9) Source(10, 9) + SourceIndex(3)
---
>>>})(N || (N = {}));
1->
2 >^
3 > ^^
4 >   ^
5 >    ^^^^^
6 >         ^
7 >          ^^^^^^^^
8 >                  ^^^^^^^^^^^->
1->
  >
2 >}
3 > 
4 >   N
5 >    
6 >         N
7 >           {
  >              function f() {
  >                  console.log('testing');
  >              }
  >          
  >              f();
  >          }
1->Emitted(66, 1) Source(11, 1) + SourceIndex(3)
2 >Emitted(66, 2) Source(11, 2) + SourceIndex(3)
3 >Emitted(66, 4) Source(5, 11) + SourceIndex(3)
4 >Emitted(66, 5) Source(5, 12) + SourceIndex(3)
5 >Emitted(66, 10) Source(5, 11) + SourceIndex(3)
6 >Emitted(66, 11) Source(5, 12) + SourceIndex(3)
7 >Emitted(66, 19) Source(11, 2) + SourceIndex(3)
---
>>>var second1 = (function () {
1->
2 >^^^^^^^^^^^^^^^^^^^^^^^^^->
1->
  >
  >
1->Emitted(67, 1) Source(13, 1) + SourceIndex(3)
---
>>>    function second1() {
1->^^^^
2 >    ^^->
1->
1->Emitted(68, 5) Source(13, 1) + SourceIndex(3)
---
>>>    }
1->^^^^
2 >    ^
3 >     ^^^^^^^^^^^^^^^->
1->class second1 { 
2 >    }
1->Emitted(69, 5) Source(13, 17) + SourceIndex(3)
2 >Emitted(69, 6) Source(13, 18) + SourceIndex(3)
---
>>>    return second1;
1->^^^^
2 >    ^^^^^^^^^^^^^^
1->
2 >    }
1->Emitted(70, 5) Source(13, 17) + SourceIndex(3)
2 >Emitted(70, 19) Source(13, 18) + SourceIndex(3)
---
>>>}());
1 >
2 >^
3 > 
4 > ^^^^
5 >     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
2 >}
3 > 
4 > class second1 { }
1 >Emitted(71, 1) Source(13, 17) + SourceIndex(3)
2 >Emitted(71, 2) Source(13, 18) + SourceIndex(3)
3 >Emitted(71, 2) Source(13, 1) + SourceIndex(3)
4 >Emitted(71, 6) Source(13, 18) + SourceIndex(3)
---
>>>var second2 = (function (_super) {
1->
2 >^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1->
  >
1->Emitted(72, 1) Source(14, 1) + SourceIndex(3)
---
>>>    __extends(second2, _super);
1->^^^^
2 >    ^^^^^^^^^^^^^^^^^^^^^^^^^^^
1->class second2 extends 
2 >    second1
1->Emitted(73, 5) Source(14, 23) + SourceIndex(3)
2 >Emitted(73, 32) Source(14, 30) + SourceIndex(3)
---
>>>    function second2() {
1 >^^^^
2 >    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
1 >Emitted(74, 5) Source(14, 1) + SourceIndex(3)
---
>>>        return _super !== null && _super.apply(this, arguments) || this;
>>>    }
1->^^^^
2 >    ^
3 >     ^^^^^^^^^^^^^^^->
1->class second2 extends second1 { 
2 >    }
1->Emitted(76, 5) Source(14, 33) + SourceIndex(3)
2 >Emitted(76, 6) Source(14, 34) + SourceIndex(3)
---
>>>    return second2;
1->^^^^
2 >    ^^^^^^^^^^^^^^
1->
2 >    }
1->Emitted(77, 5) Source(14, 33) + SourceIndex(3)
2 >Emitted(77, 19) Source(14, 34) + SourceIndex(3)
---
>>>}(second1));
1 >
2 >^
3 > 
4 > ^
5 >  ^^^^^^^
6 >         ^^^
7 >            ^^^^^^^^^^^->
1 >
2 >}
3 > 
4 > class second2 extends 
5 >  second1
6 >          { }
1 >Emitted(78, 1) Source(14, 33) + SourceIndex(3)
2 >Emitted(78, 2) Source(14, 34) + SourceIndex(3)
3 >Emitted(78, 2) Source(14, 1) + SourceIndex(3)
4 >Emitted(78, 3) Source(14, 23) + SourceIndex(3)
5 >Emitted(78, 10) Source(14, 30) + SourceIndex(3)
6 >Emitted(78, 13) Source(14, 34) + SourceIndex(3)
---
-------------------------------------------------------------------
emittedFile:/src/third/thirdjs/output/third-output.js
sourceFile:../../../second/second_part2.ts
-------------------------------------------------------------------
>>>var C = (function () {
1->
2 >^^^^^^^^^^^^^^^^^^^->
1->
1->Emitted(79, 1) Source(1, 1) + SourceIndex(4)
---
>>>    function C() {
1->^^^^
2 >    ^^->
1->
1->Emitted(80, 5) Source(1, 1) + SourceIndex(4)
---
>>>    }
1->^^^^
2 >    ^
3 >     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1->class C {
  >    doSomething() {
  >        console.log("something got done");
  >    }
  >
2 >    }
1->Emitted(81, 5) Source(5, 1) + SourceIndex(4)
2 >Emitted(81, 6) Source(5, 2) + SourceIndex(4)
---
>>>    C.prototype.doSomething = function () {
1->^^^^
2 >    ^^^^^^^^^^^^^^^^^^^^^^^
3 >                           ^^^
4 >                              ^^^^^^^^^^^^^->
1->
2 >    doSomething
3 >                           
1->Emitted(82, 5) Source(2, 5) + SourceIndex(4)
2 >Emitted(82, 28) Source(2, 16) + SourceIndex(4)
3 >Emitted(82, 31) Source(2, 5) + SourceIndex(4)
---
>>>        console.log("something got done");
1->^^^^^^^^
2 >        ^^^^^^^
3 >               ^
4 >                ^^^
5 >                   ^
6 >                    ^^^^^^^^^^^^^^^^^^^^
7 >                                        ^
8 >                                         ^
1->doSomething() {
  >        
2 >        console
3 >               .
4 >                log
5 >                   (
6 >                    "something got done"
7 >                                        )
8 >                                         ;
1->Emitted(83, 9) Source(3, 9) + SourceIndex(4)
2 >Emitted(83, 16) Source(3, 16) + SourceIndex(4)
3 >Emitted(83, 17) Source(3, 17) + SourceIndex(4)
4 >Emitted(83, 20) Source(3, 20) + SourceIndex(4)
5 >Emitted(83, 21) Source(3, 21) + SourceIndex(4)
6 >Emitted(83, 41) Source(3, 41) + SourceIndex(4)
7 >Emitted(83, 42) Source(3, 42) + SourceIndex(4)
8 >Emitted(83, 43) Source(3, 43) + SourceIndex(4)
---
>>>    };
1 >^^^^
2 >    ^
3 >     ^^^^^^^^^->
1 >
  >    
2 >    }
1 >Emitted(84, 5) Source(4, 5) + SourceIndex(4)
2 >Emitted(84, 6) Source(4, 6) + SourceIndex(4)
---
>>>    return C;
1->^^^^
2 >    ^^^^^^^^
1->
  >
2 >    }
1->Emitted(85, 5) Source(5, 1) + SourceIndex(4)
2 >Emitted(85, 13) Source(5, 2) + SourceIndex(4)
---
>>>}());
1 >
2 >^
3 > 
4 > ^^^^
5 >     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
2 >}
3 > 
4 > class C {
  >     doSomething() {
  >         console.log("something got done");
  >     }
  > }
1 >Emitted(86, 1) Source(5, 1) + SourceIndex(4)
2 >Emitted(86, 2) Source(5, 2) + SourceIndex(4)
3 >Emitted(86, 2) Source(1, 1) + SourceIndex(4)
4 >Emitted(86, 6) Source(5, 2) + SourceIndex(4)
---
>>>function secondsecond_part2Spread() {
1->
2 >^^^^^^^^^
3 >         ^^^^^^^^^^^^^^^^^^^^^^^^
1->
  >
  >
2 >function 
3 >         secondsecond_part2Spread
1->Emitted(87, 1) Source(7, 1) + SourceIndex(4)
2 >Emitted(87, 10) Source(7, 10) + SourceIndex(4)
3 >Emitted(87, 34) Source(7, 34) + SourceIndex(4)
---
>>>    var b = [];
1 >^^^^
2 >    ^^^^^^^^^^^
3 >               ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >(
2 >    ...b: number[]
1 >Emitted(88, 5) Source(7, 35) + SourceIndex(4)
2 >Emitted(88, 16) Source(7, 49) + SourceIndex(4)
---
>>>    for (var _i = 0; _i < arguments.length; _i++) {
1->^^^^^^^^^
2 >         ^^^^^^^^^^
3 >                   ^^
4 >                     ^^^^^^^^^^^^^^^^^^^^^
5 >                                          ^^
6 >                                            ^^^^
1->
2 >         ...b: number[]
3 >                   
4 >                     ...b: number[]
5 >                                          
6 >                                            ...b: number[]
1->Emitted(89, 10) Source(7, 35) + SourceIndex(4)
2 >Emitted(89, 20) Source(7, 49) + SourceIndex(4)
3 >Emitted(89, 22) Source(7, 35) + SourceIndex(4)
4 >Emitted(89, 43) Source(7, 49) + SourceIndex(4)
5 >Emitted(89, 45) Source(7, 35) + SourceIndex(4)
6 >Emitted(89, 49) Source(7, 49) + SourceIndex(4)
---
>>>        b[_i] = arguments[_i];
1 >^^^^^^^^
2 >        ^^^^^^^^^^^^^^^^^^^^^^
1 >
2 >        ...b: number[]
1 >Emitted(90, 9) Source(7, 35) + SourceIndex(4)
2 >Emitted(90, 31) Source(7, 49) + SourceIndex(4)
---
>>>    }
>>>}
1 >
2 >^
3 > ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >) { 
2 >}
1 >Emitted(92, 1) Source(7, 53) + SourceIndex(4)
2 >Emitted(92, 2) Source(7, 54) + SourceIndex(4)
---
>>>secondsecond_part2Spread.apply(void 0, __spread([10, 20, 30]));
1->
2 >^^^^^^^^^^^^^^^^^^^^^^^^
3 >                        ^^^^^^^^^^^^^^^^^^^^^^^^
4 >                                                ^
5 >                                                 ^^
6 >                                                   ^^
7 >                                                     ^^
8 >                                                       ^^
9 >                                                         ^^
10>                                                           ^
11>                                                            ^^^
1->
  >
2 >secondsecond_part2Spread
3 >                        (...
4 >                                                [
5 >                                                 10
6 >                                                   , 
7 >                                                     20
8 >                                                       , 
9 >                                                         30
10>                                                           ]
11>                                                            );
1->Emitted(93, 1) Source(8, 1) + SourceIndex(4)
2 >Emitted(93, 25) Source(8, 25) + SourceIndex(4)
3 >Emitted(93, 49) Source(8, 29) + SourceIndex(4)
4 >Emitted(93, 50) Source(8, 30) + SourceIndex(4)
5 >Emitted(93, 52) Source(8, 32) + SourceIndex(4)
6 >Emitted(93, 54) Source(8, 34) + SourceIndex(4)
7 >Emitted(93, 56) Source(8, 36) + SourceIndex(4)
8 >Emitted(93, 58) Source(8, 38) + SourceIndex(4)
9 >Emitted(93, 60) Source(8, 40) + SourceIndex(4)
10>Emitted(93, 61) Source(8, 41) + SourceIndex(4)
11>Emitted(93, 64) Source(8, 43) + SourceIndex(4)
---
-------------------------------------------------------------------
emittedFile:/src/third/thirdjs/output/third-output.js
sourceFile:../../third_part1.ts
-------------------------------------------------------------------
>>>//# sourceMappingURL=second-output.js.map
>>>var c = new C();
1 >
2 >^^^^
3 >    ^
4 >     ^^^
5 >        ^^^^
6 >            ^
7 >             ^^
8 >               ^
9 >                ^->
1 >
2 >var 
3 >    c
4 >      = 
5 >        new 
6 >            C
7 >             ()
8 >               ;
1 >Emitted(95, 1) Source(1, 1) + SourceIndex(5)
2 >Emitted(95, 5) Source(1, 5) + SourceIndex(5)
3 >Emitted(95, 6) Source(1, 6) + SourceIndex(5)
4 >Emitted(95, 9) Source(1, 9) + SourceIndex(5)
5 >Emitted(95, 13) Source(1, 13) + SourceIndex(5)
6 >Emitted(95, 14) Source(1, 14) + SourceIndex(5)
7 >Emitted(95, 16) Source(1, 16) + SourceIndex(5)
8 >Emitted(95, 17) Source(1, 17) + SourceIndex(5)
---
>>>c.doSomething();
1->
2 >^
3 > ^
4 >  ^^^^^^^^^^^
5 >             ^^
6 >               ^
7 >                ^^^^^^^^^^^^->
1->
  >
2 >c
3 > .
4 >  doSomething
5 >             ()
6 >               ;
1->Emitted(96, 1) Source(2, 1) + SourceIndex(5)
2 >Emitted(96, 2) Source(2, 2) + SourceIndex(5)
3 >Emitted(96, 3) Source(2, 3) + SourceIndex(5)
4 >Emitted(96, 14) Source(2, 14) + SourceIndex(5)
5 >Emitted(96, 16) Source(2, 16) + SourceIndex(5)
6 >Emitted(96, 17) Source(2, 17) + SourceIndex(5)
---
>>>var third1 = (function () {
1->
2 >^^^^^^^^^^^^^^^^^^^^^^^^->
1->
  >
  >
1->Emitted(97, 1) Source(4, 1) + SourceIndex(5)
---
>>>    function third1() {
1->^^^^
2 >    ^^->
1->
1->Emitted(98, 5) Source(4, 1) + SourceIndex(5)
---
>>>    }
1->^^^^
2 >    ^
3 >     ^^^^^^^^^^^^^^->
1->class third1 { 
2 >    }
1->Emitted(99, 5) Source(4, 16) + SourceIndex(5)
2 >Emitted(99, 6) Source(4, 17) + SourceIndex(5)
---
>>>    return third1;
1->^^^^
2 >    ^^^^^^^^^^^^^
1->
2 >    }
1->Emitted(100, 5) Source(4, 16) + SourceIndex(5)
2 >Emitted(100, 18) Source(4, 17) + SourceIndex(5)
---
>>>}());
1 >
2 >^
3 > 
4 > ^^^^
5 >     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
2 >}
3 > 
4 > class third1 { }
1 >Emitted(101, 1) Source(4, 16) + SourceIndex(5)
2 >Emitted(101, 2) Source(4, 17) + SourceIndex(5)
3 >Emitted(101, 2) Source(4, 1) + SourceIndex(5)
4 >Emitted(101, 6) Source(4, 17) + SourceIndex(5)
---
>>>var third2 = (function (_super) {
1->
2 >^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1->
  >
1->Emitted(102, 1) Source(5, 1) + SourceIndex(5)
---
>>>    __extends(third2, _super);
1->^^^^
2 >    ^^^^^^^^^^^^^^^^^^^^^^^^^^
1->class third2 extends 
2 >    third1
1->Emitted(103, 5) Source(5, 22) + SourceIndex(5)
2 >Emitted(103, 31) Source(5, 28) + SourceIndex(5)
---
>>>    function third2() {
1 >^^^^
2 >    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
1 >Emitted(104, 5) Source(5, 1) + SourceIndex(5)
---
>>>        return _super !== null && _super.apply(this, arguments) || this;
>>>    }
1->^^^^
2 >    ^
3 >     ^^^^^^^^^^^^^^->
1->class third2 extends third1 { 
2 >    }
1->Emitted(106, 5) Source(5, 31) + SourceIndex(5)
2 >Emitted(106, 6) Source(5, 32) + SourceIndex(5)
---
>>>    return third2;
1->^^^^
2 >    ^^^^^^^^^^^^^
1->
2 >    }
1->Emitted(107, 5) Source(5, 31) + SourceIndex(5)
2 >Emitted(107, 18) Source(5, 32) + SourceIndex(5)
---
>>>}(third1));
1 >
2 >^
3 > 
4 > ^
5 >  ^^^^^^
6 >        ^^^
7 >           ^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
2 >}
3 > 
4 > class third2 extends 
5 >  third1
6 >         { }
1 >Emitted(108, 1) Source(5, 31) + SourceIndex(5)
2 >Emitted(108, 2) Source(5, 32) + SourceIndex(5)
3 >Emitted(108, 2) Source(5, 1) + SourceIndex(5)
4 >Emitted(108, 3) Source(5, 22) + SourceIndex(5)
5 >Emitted(108, 9) Source(5, 28) + SourceIndex(5)
6 >Emitted(108, 12) Source(5, 32) + SourceIndex(5)
---
>>>function thirdthird_part1Spread() {
1->
2 >^^^^^^^^^
3 >         ^^^^^^^^^^^^^^^^^^^^^^
1->
  >
2 >function 
3 >         thirdthird_part1Spread
1->Emitted(109, 1) Source(6, 1) + SourceIndex(5)
2 >Emitted(109, 10) Source(6, 10) + SourceIndex(5)
3 >Emitted(109, 32) Source(6, 32) + SourceIndex(5)
---
>>>    var b = [];
1 >^^^^
2 >    ^^^^^^^^^^^
3 >               ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >(
2 >    ...b: number[]
1 >Emitted(110, 5) Source(6, 33) + SourceIndex(5)
2 >Emitted(110, 16) Source(6, 47) + SourceIndex(5)
---
>>>    for (var _i = 0; _i < arguments.length; _i++) {
1->^^^^^^^^^
2 >         ^^^^^^^^^^
3 >                   ^^
4 >                     ^^^^^^^^^^^^^^^^^^^^^
5 >                                          ^^
6 >                                            ^^^^
1->
2 >         ...b: number[]
3 >                   
4 >                     ...b: number[]
5 >                                          
6 >                                            ...b: number[]
1->Emitted(111, 10) Source(6, 33) + SourceIndex(5)
2 >Emitted(111, 20) Source(6, 47) + SourceIndex(5)
3 >Emitted(111, 22) Source(6, 33) + SourceIndex(5)
4 >Emitted(111, 43) Source(6, 47) + SourceIndex(5)
5 >Emitted(111, 45) Source(6, 33) + SourceIndex(5)
6 >Emitted(111, 49) Source(6, 47) + SourceIndex(5)
---
>>>        b[_i] = arguments[_i];
1 >^^^^^^^^
2 >        ^^^^^^^^^^^^^^^^^^^^^^
1 >
2 >        ...b: number[]
1 >Emitted(112, 9) Source(6, 33) + SourceIndex(5)
2 >Emitted(112, 31) Source(6, 47) + SourceIndex(5)
---
>>>    }
>>>}
1 >
2 >^
3 > ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >) { 
2 >}
1 >Emitted(114, 1) Source(6, 51) + SourceIndex(5)
2 >Emitted(114, 2) Source(6, 52) + SourceIndex(5)
---
>>>thirdthird_part1Spread.apply(void 0, __spread([10, 20, 30]));
1->
2 >^^^^^^^^^^^^^^^^^^^^^^
3 >                      ^^^^^^^^^^^^^^^^^^^^^^^^
4 >                                              ^
5 >                                               ^^
6 >                                                 ^^
7 >                                                   ^^
8 >                                                     ^^
9 >                                                       ^^
10>                                                         ^
11>                                                          ^^^
1->
  >
2 >thirdthird_part1Spread
3 >                      (...
4 >                                              [
5 >                                               10
6 >                                                 , 
7 >                                                   20
8 >                                                     , 
9 >                                                       30
10>                                                         ]
11>                                                          );
1->Emitted(115, 1) Source(7, 1) + SourceIndex(5)
2 >Emitted(115, 23) Source(7, 23) + SourceIndex(5)
3 >Emitted(115, 47) Source(7, 27) + SourceIndex(5)
4 >Emitted(115, 48) Source(7, 28) + SourceIndex(5)
5 >Emitted(115, 50) Source(7, 30) + SourceIndex(5)
6 >Emitted(115, 52) Source(7, 32) + SourceIndex(5)
7 >Emitted(115, 54) Source(7, 34) + SourceIndex(5)
8 >Emitted(115, 56) Source(7, 36) + SourceIndex(5)
9 >Emitted(115, 58) Source(7, 38) + SourceIndex(5)
10>Emitted(115, 59) Source(7, 39) + SourceIndex(5)
11>Emitted(115, 62) Source(7, 41) + SourceIndex(5)
---
>>>//# sourceMappingURL=third-output.js.map

//// [/src/third/thirdjs/output/third-output.tsbundleinfo]
{
  "js": [
    {
      "pos": 0,
      "end": 599,
      "kind": "emitHelpers",
      "name": "typescript:extends"
    },
    {
      "pos": 599,
      "end": 1105,
      "kind": "emitHelpers",
      "name": "typescript:read"
    },
    {
      "pos": 1105,
      "end": 1277,
      "kind": "emitHelpers",
      "name": "typescript:spread"
    },
    {
      "pos": 1277,
      "end": 3323,
      "kind": "text"
    }
  ],
  "dts": [
    {
      "pos": 0,
      "end": 769,
      "kind": "text"
    }
  ]
}

//// [/src/third/third_part1.ts]
var c = new C();
c.doSomething();

class third1 { }
class third2 extends third1 { }
function thirdthird_part1Spread(...b: number[]) { }
thirdthird_part1Spread(...[10, 20, 30]);

//// [/src/third/tsconfig.json]
{
  "compilerOptions": {
    "target": "es5",
    "composite": true,
    "removeComments": true,
    "strict": false,
    "downlevelIteration": true,
    "sourceMap": true,
    "declarationMap": true,
    "declaration": true,
    "outFile": "./thirdjs/output/third-output.js",
    "skipDefaultLibCheck": true
  },
  "files": [
    "third_part1.ts"
  ],
  "references": [
    { "path": "../first", "prepend": true },
    { "path": "../second", "prepend": true },
  ]
}


