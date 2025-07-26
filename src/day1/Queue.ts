type Node<T> = {
    value: T,
    next?: Node<T>,
}
export default class Queue<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;
    

    constructor() {
        this.length = 0;
        this.head = this.tail = undefined;
    }

    enqueue(item: T): void {
        //trebuie folosit if (!this.tail) in loc de if(this.length ===0) pentru ca o sa sara typecheck ca this.tail may be undefined 
        this.length++;
        const node = { value: item} as Node<T>;
        if(!this.tail){
            this.tail = this.head = node;
            return
        }
        
        this.tail.next = node;
        this.tail = node;
        //you don't need to return the added elemnt because you already have it as you just passed it to add to the list
    }
    deque(): T | undefined {
        //head is the first element that was added
        if(this.head === undefined) return undefined
        this.length--;

        const head: Node<T> = this.head
        this.head = this.head?.next 
        if(this.tail === head){
             this.tail = undefined
        }

        return head?.value
    }
    peek(): T | undefined {
        return this.head?.value;

    }
}