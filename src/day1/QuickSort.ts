function qs(arr: number[], low: number, high: number){
    if(low > high) return
    
    let pivot_index = partition(arr, low ,high);
     qs(arr,pivot_index+1,high);
    qs(arr,low, pivot_index-1);
}
function partition(arr: number[], low: number, high: number): number{
    let pivot= arr[high]
    let index = low-1

    for(let i= low; i<high; i++){
        if(arr[i]<pivot){
            index++
            let temp = arr[i]
            arr[i] = arr[index]
            arr[index] = temp
        }
    }

    index++
    arr[high] = arr[index]
    arr[index] = pivot
    
    return index
}
export default function quick_sort(arr: number[]): void {
    qs(arr,0,arr.length-1)
}


// const array = [9, 3, 7, 4, 69, 420, 42];

// console.log([9, 3, 7, 4, 69, 420, 42])