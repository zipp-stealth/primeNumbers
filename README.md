# primeNumbers

### Sum of prime numbers from 0 to N
**`let s=(n,p=(x,i=~-x)=>~-i?x%i&&p(x,--i):x)=>~-n&&p(n)+s(--n);`**

`s(25)` will return `100`

### Prime number checker
**`let p=(x,i=~-x)=>~-i?x%i&&p(x,--i):x;`**

`p(6)` will return `0` (falsy)

`p(7)` will return `7` (truthy)


### PS:
It's not a best algorithm but shortest and ugliest I made :3
