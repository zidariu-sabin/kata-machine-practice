type Node = {
    isWord: boolean,
    val: string | null,
    children: Node[],
}
export default class Trie {
    private head: Node

    

    constructor() {
        this.head = {
            isWord: false,
            val: null,
            children: []
        }
    }

    insert(item: string): void {
        if(!this.head.children.length){
            
        }

}
    delete(item: string): void {

}
    find(partial: string): string[] {

}
}