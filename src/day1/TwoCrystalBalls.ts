export default function two_crystal_balls(breaks: boolean[]): number {

    for(let i = Math.floor(Math.sqrt(breaks.length)) ; i< breaks.length; i+=Math.floor(Math.sqrt(breaks.length))){
        if(breaks[i]) {
            for( let j = i-Math.floor(Math.sqrt(breaks.length)); j<=i; j++ ){
                if(breaks[j])
                    return j
            }
        }
    }
    return -1
}