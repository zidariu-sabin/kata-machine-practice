function qs(arr: number[], low: number, high: number){
 //stop condition
 if(low >= high) return;
 let piv_idx = partition(arr,low,high);

 qs(arr, piv_idx + 1, high);
 qs(arr, low, piv_idx-1);
 //recurse
}
function partition(arr: number[], low: number, high: number): number{
    let idx = low - 1;
    let piv = arr[high];

    for(let i = low; i<high; i++){
        //take piv as the last element and weak order items
        if(piv>arr[i]){
            idx++;
            let temp = arr[idx];
            arr[idx] = arr[i];
            arr[i] = temp;
        }
    }
    //change piv to the last item in the weak order
    idx++;
    arr[high] = arr[idx]
    arr[idx] = piv;
    return idx
}
export default function quick_sort(arr: number[]): void {
    qs(arr,0,arr.length-1)
}


// const array = [9, 3, 7, 4, 69, 420, 42];

// console.log([9, 3, 7, 4, 69, 420, 42])