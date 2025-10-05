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

    insert(item: string): void {
        let curr: Node  = this.head
        while(item.length){
            let char = item[0]
            const idx = char.charCodeAt(0) - Trie.firstCharacterCode.charCodeAt(0);
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
            idx = item.charCodeAt(i) - Trie.firstCharacterCode.charCodeAt(0);
            if(curr.children[idx]){
                curr = curr.children[idx]
            }
        }
        curr.isWord = false
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
        if(curr.isWord){
            strings.push(partial)
        }
        if(curr.children.every((node) => node?.val === undefined)){
            return  strings
        }
        strings.push(partial)
        this.findCompletion(curr,strings.length-1,strings)
            // for(let i=0; i<26; i++){
            //     if (curr?.children[i]?.val !== undefined){
                    
            //     }
            // }

        // }

        return strings.slice(1)
    }

    private findCompletion(curr:Node,idx:number,strings: string[]){
        if(curr?.val === undefined){
            return  
        }
        

        //if a word is found and there are still children available it means there are more words
        if(curr.children.every((node) => node?.val === undefined)){
            return  
        }

        for(let i=0; i<26; i++){
            //for each next letter found we create a branch
            if (curr?.children[i]?.val !== undefined){
                curr = curr.children[i]
                if(curr.val){
                    strings[idx]=strings[idx].concat(curr.val)   
                }
                //if current letter is the end of a word we must split 
                // between the current word and the folowing ones
                if(curr.isWord){
                    return
                }
                strings.push(strings[idx])
                this.findCompletion(curr,strings.length-1,strings)
            }
        }
    }
}