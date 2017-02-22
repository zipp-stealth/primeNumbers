//it's short and ugly :D




let s=(n,p=(x,i=~-x)=>~-i?x%i&&p(x,--i):x)=>~-n&&p(n)+s(--n);

//s(25) will return 100 as sum of prime numbers from 0 to 25




let p=(x,i=~-x)=>~-i?x%i&&p(x,--i):x;

//p(6) will return 0
//p(7) will return 7
