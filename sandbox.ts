function bs_list(haystack: number[], needle: number): boolean {
    let start = 0
    let end = haystack.length
    let mid
    while(start<end){
        mid = Math.floor((start+end)/2)

        if (needle === haystack[mid]) return true
        if (needle < haystack[mid]){
            end = mid;
        }
        else if (needle > haystack[mid]){
            start = mid + 1;
        }

    }
    return false;
}

console.log("Item found", bs_list([1, 3, 4, 69, 71, 81, 90, 99, 420, 1337, 69420],69))

