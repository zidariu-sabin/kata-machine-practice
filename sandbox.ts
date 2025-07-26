function isOpenP(map: Map<string,string>, key: string){
    const itr = map.keys()
    while(itr){
        console.log(itr)
        if (itr.next().value === key) return true
    }
    return false
}
function isValid(s: string): boolean {
    let p_map = new Map<string, string>([['(',')'], ['[',']'], ['{','}']]);
    let p_stack: string[] = []
    for(let i=0; i< s.length; i++){
        if(p_map.has(s[i])){
            p_stack.push(s[i])
            continue;
        }
    
        if(s[i] === p_map.get(p_stack[p_stack.length-1])){
            p_stack.pop();
            continue;
        }
        return false
    }   
    return true
};

console.log(isValid("()[]{}"))