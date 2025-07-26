export default function bs_list(haystack: number[], needle: number): boolean {
    let start = 0;
    let end = haystack.length;
    while( start < end ){
        const mid = Math.floor( (end + start)/2)
        if( haystack[mid] === needle ){
            return true;
        }
        if( haystack[mid] > needle){
            end = mid;
        }else{
            start = mid + 1;
        }
    }
    return false;
}