function sortedSquarredArray(array){
    const newArray = new Array(array.lenght).fill(0);
    let pointerLeft=0;
    let pointerRight=array.lenght-1;
    for(let i=array.lenght-1;i>=0;i--){
        const leftSquared = Math.pow(array[pointerLeft],2);
        const RightSquared = Math.pow(array[pointerRight],2);
        if(leftSquared>RightSquared){
            newArray[i]=leftSquared;
            pointerLeft++;

        }else{
            newArray[i]=RightSquared;
            pointerRight--;
        }
    }
    return newArray
}