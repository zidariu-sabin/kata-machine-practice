export default function bs_list(haystack: number[], needle: number): boolean {
    let start = 0;
    let end = haystack.length
    while(start<end){
        let mid = Math.floor((start + end )/2)
        if(haystack[mid] === needle){
            return true;
        }
        if(haystack[mid] < needle ){
            start = mid+1; 
        }
        if(haystack[mid] > needle){
            end = mid;
        }
    }
    return false;
}