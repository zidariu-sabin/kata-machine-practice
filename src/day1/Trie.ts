type Node = {
    isWord: boolean,
    val: string | null,
    children: Array<Node >
}
export default class Trie {
    private head: Node


    private static readonly firstCharacterCode = 'a'.charCodeAt(0)

    private static charIndex(ch: string){
        const idx = ch.charCodeAt(0) - Trie.firstCharacterCode
        if (idx < 0 || idx >= 26) {
            throw new RangeError(`charIndex: character out of range: ${ch}`)
        }
        return idx
    }

    constructor() {
        this.head = {
            isWord: false,
            val: null,
            children: Array<Node >(26)
        }
    }

    insert(item: string): void {
        let curr: Node  = this.head
        while(item.length){
            let char = item[0]
            const idx = Trie.charIndex(char)
            if((curr.children[idx]?.val ===undefined ? null : curr.children[idx]?.val) === null){
                curr.children[idx] = {
                    isWord: item.length == 1,
                    val: char,
                    children: Array<Node >(26)
                }
            }
            if(item.length == 1 && curr.children[idx]){
                curr.children[idx].isWord = true
            }
            item = item.slice(1)
            curr = curr.children[idx]
        }
    }

    delete(item: string): void {
        let curr = this.head
        let idx = 0
        for(let i=0; i<item.length; i++){
            idx = Trie.charIndex(item[i]);
            if(curr.children[idx]){
                curr = curr.children[idx]
            }
        }
        curr.isWord = false
    }

    private parseWord(item: string): Node {
        let curr = this.head
        for(let i=0; i<item.length; i++){
            const idx = Trie.charIndex(item[i]);
            if(curr.children[idx]){
                curr = curr.children[idx]
            }
        }
        return curr
    }

    find(partial: string): string[] {
        let curr = this.parseWord(partial)
        let strings: string[] = [];
        let partialIsWord = false
        //if a word is given and we want to search also the following
        if(curr.isWord){
            partialIsWord  = true;
            strings.push(partial)
        }
        if(curr.children.every((node) => node?.val === undefined)){
            return  strings
        }
        strings.push(partial)
        this.findCompletion(curr,strings.length-1,strings)

        if(partialIsWord){
            return strings.slice(1)
        }
        return strings
    }

    private findCompletion(curr:Node,idx:number,strings: string[]){
        if(curr?.val === undefined){
            return  
        }
        //if a word is found and there are still children available it means there are more words
        if(curr.children.every((node) => node?.val === undefined)){
            return  
        }

        if(curr.isWord){
            strings.push(strings[idx])
            curr.children.forEach((child) =>{
                //for each next letter found we create a branch
                curr = child
                if(curr.val){
                    strings[strings.length-1]=strings[idx].concat(curr.val)   
                }
                //if current letter is the end of a word we must split 
                // between the current word and the folowing ones
                this.findCompletion(curr,strings.length-1,strings)
            })
            
        }else{
            curr.children.forEach((child) =>{
                //for each next letter found we create a branch
                curr = child
                if(curr.val){
                    strings[idx]=strings[idx].concat(curr.val)   
                }
                 this.findCompletion(curr,idx,strings)
            })
           
        }
    }
}