(()=>{var n=function(n,o){for(var r=[],e=0;e<n.length;e+=2){for(var c=[],t=e;t<e+2&&t<n.length;t++)c.push(n[t]);r.push(c)}return r}(["a","b","c","d","e"]);console.log(n);var o,r,e,c=[1,3,6,4,5,2],t=function(n,o,r){return 0==n.length||("undefined"==r&&(r=n[0]),n.forEach((function(n){r=o(n,r)}))),r};console.log(t(c,(function(n,o){return o+n}),2)),console.log(t(c,(function(n,o){var r=!1;return o.length>1?n>o[0]?(o.splice(0,0,n),r=!0):o.forEach((function(o,e,c){n<o&&e+1<c.length&&n>c[e+1]&&!r&&(c.splice(e+1,0,n),r=!0)})):o.length>0?(n>o[0]?o.splice(0,0,n):o.push(n),r=!0):(o.push(n),r=!0),r||o.push(n),o}),[])),console.log((2,o=function(n,o){return n>o},r=[],c.forEach((function(n){o(n,2)&&r.push(n)})),r)),console.log(function(n,o,r){for(var e=0;e<r.length;e++)if(o(r[e],2))return r[e]}(0,(function(n,o){return n>o}),c)),console.log((e=0,c.forEach((function(n){e+=n})),e))})();