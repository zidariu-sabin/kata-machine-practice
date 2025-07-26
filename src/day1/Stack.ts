type Node<T> = {
    value: T,
    next?: Node<T>,
}
export default class Stack<T> {
    public length: number;
    private head?: Node<T> | undefined;

    

    constructor() {
        this.length = 0;
        this.head = undefined;
    }

    push(item: T): void {

        this.length++;
        if(!this.head){
            const node: Node<T> = {
                value: item
            }
            this.head = node
            return;
        }
        const head: Node<T> = this.head
        this.head = {
            value: item,
            next: head
        }        

    }
    pop(): T | undefined {
        if(!this.head){
            return undefined
        }
        this.length--;
        const head = this.head;
        this.head = this.head.next;

        return head.value;

    }
    peek(): T | undefined {
        return this.head?.value;
}
}