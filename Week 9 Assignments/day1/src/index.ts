const a: Array<String>=['a', 'b', 'c', 'd', 'e'];
let chunk=(arr: Array<String>, chunkSize: number)=>{
    let chunks: Array<Array<String>>=[];
    for(let i: number=0;i<arr.length;i+=chunkSize)
    {
        let currentChunk=[];
        for(let j: number=i;j<i+chunkSize && j<arr.length;j++)
        {
            currentChunk.push(arr[j]);
        }
        chunks.push(currentChunk);
    }
    return chunks;
};

let first: Array<Array<String>>=chunk(a,2);
console.log(first);

const b: Array<number> = [1,3,6,4,5,2];
let reduce=(arr: Array<any>,iterateeFunc: Function, accumulator?: any)=>{
if(arr.length==0)
return accumulator;    
if(accumulator=='undefined')
accumulator=arr[0];
arr.forEach(x=>{
    
        accumulator=iterateeFunc(x,accumulator);
    
});
return accumulator;
}
console.log(reduce(b,(x:number,accumulator: number)=>{return accumulator+x},2));
console.log(reduce(b,(x: number, accumulator: Array<number>)=>{
    let pushed: boolean=false;
    
    if(accumulator.length>1)
    {
        if(x>accumulator[0])
        {
        accumulator.splice(0,0,x);
        pushed=true;
        }
        else
        {
        accumulator.forEach((elem: number,i: number, accumulator)=>{
            if(x<elem && i+1<accumulator.length && x>accumulator[i+1] && !pushed)
            {
                accumulator.splice(i+1,0,x);
                pushed=true;
            }
        });
    }
    }
    else if(accumulator.length>0)
    {
        if(x>accumulator[0])
        accumulator.splice(0,0,x);
        else
        accumulator.push(x);
        pushed=true;
    }
    else
    {
    accumulator.push(x);
    pushed=true;
    }
    if(!pushed)
    accumulator.push(x);
    return accumulator;
},[]));

let filter=function(val: any, iterateeFunc: Function, arr: Array<any>){
    let returnArr: Array<any>=[];
    arr.forEach((x)=>{
    if(iterateeFunc(x,val))
    returnArr.push(x);
    });
    return returnArr;
} 
console.log(filter(2,(x: number,val: number)=>{
    return x>val;
},b));

let find=function(val: any, iterateeFunc: Function, arr: Array<any>){
    for(let i=0;i<arr.length;i++)
    {
        if(iterateeFunc(arr[i],val))
        return arr[i];
    }
}

console.log(find(2,((item: number, val: number)=>{
    return item>val;
}),b));

let sum=function(arr: Array<number>){
    let total=0;
    arr.forEach((x)=>{total+=x});
    return total;
}
console.log(sum(b));