type Node = {
    isWord: boolean,
    val: string | null,
    children: Array<Node >
}
export default class Trie {
    private head: Node

    private static firstCharacterCode = 'a'

    constructor() {
        this.head = {
            isWord: false,
            val: null,
            children: Array<Node >(26)
        }
    }
//@ts-ignore
    insert(item: string): void {
        let curr: Node  = this.head
        while(item.length){
            let char = item[0]
            const idx = char.charCodeAt(0) - Trie.firstCharacterCode.charCodeAt(0);
            if(curr.children[idx] === null){
                curr.children[idx] = {
                    isWord: item.length == 1,
                    val: char,
                    children: Array<Node >(26)
                }
            }else{
            item = item.slice(1)
            curr = curr.children[idx]
            }
        }
    }
    delete(item: string): void {

}
    find(partial: string): string[] {
    let curr = this.head
    for(let i=0; i<partial.length; i++){
        const idx = partial.charCodeAt(i) - Trie.firstCharacterCode.charCodeAt(0);
        if(curr.children[idx]){
            curr = curr.children[idx]
        }
    }
    let strings: string[] = [];
    // while(!curr.children.every((node) => node === null)){
        for(let i=0; i<26; i++){
        if (curr?.children[i] !== null){
            strings.push(partial)
                this.findCompletion(curr,strings.length-1,strings)
            }
        }

    // }
    return strings
}

private findCompletion(curr:Node,idx:number,strings: string[]):string []{
    if(curr.val){
        strings[idx].concat(curr.val)   
    } 
    if(curr.children.every((node) => node.val === null)){
        return strings  
    }
    for(let i=0; i<26; i++){
        if (curr?.children[i] !== null){
            strings.push(strings[idx])
            this.findCompletion(curr,strings.length-1,strings)
        }
    }
    return strings
}
}