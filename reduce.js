let numbers=[1,2,3,4,5,6];
function sumReducer(previousValue,currentValue,currentIndex,Array)
{
    console.log(previousValue,currentValue,currentIndex,Array);
    return previousValue+currentValue;
}
numbers.reduce(sumReducer,0);