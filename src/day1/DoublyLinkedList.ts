type Node<T> = {
    previous?: Node<T>;
    value: T,
    next?: Node<T>
}

export default class DoublyLinkedList<T> {
    public length: number;
    public head?: Node<T>; 
    public tail?: Node<T>
    

    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }

    prepend(item: T): void {
        this.length++;
        const node: Node<T> = {
            previous: undefined,
            value: item,
            next: undefined,
        }
        if(!this.head){
            this.head = this.tail = node
            return
        }
        this.head.next = node;
        const head = this.head;
        this.head = node;
        this.head.previous = head;


    }
    insertAt(item: T, idx: number): void {
        if(idx > length){
            throw new Error("index exceeds length")
        }

        this.length++;
        const node: Node<T> = {
            previous: undefined,
            value: item,
            next: undefined,
        }
        if(idx === length){
            this.append(item)
        }else if(idx === 0){
            this.prepend(item)
        }

        let occupiedPosNode = this.getAt(idx)

        //necessary statement for typescript udnefined assertion error
        occupiedPosNode = occupiedPosNode as Node<T>
        
        node.next = occupiedPosNode.next;
        node.previous = occupiedPosNode;
        occupiedPosNode.next = node



    }   
    append(item: T): void {
        this.length++;
        const node: Node<T> = {
            previous: undefined,
            value: item,
            next: undefined,
        };
        if(!this.tail){
          this.head = this.tail = node
          return
        }
        if(this.head === this.tail){
            this.head.previous = node
        }
        this.tail.previous = node;
        node.next = this.tail;
        this.tail = node;

    }
    remove(item: T): T | undefined {
        let occupiedPosNode = this.tail

        for(let i = 0; occupiedPosNode && i< this.length; i++){
            if(occupiedPosNode.value === item) break;
            occupiedPosNode = occupiedPosNode.next
        }

        if(!occupiedPosNode) return undefined; 
        
        this.length--
        if(this.length === 0){
            const head = this.head
            this.head = this.tail = undefined
            return head?.value;
        }
        if(this.head === occupiedPosNode){
            this.head = this.head.previous 
        }
        if(this.tail === occupiedPosNode){
            this.tail = this.tail.next 
        }
        if(occupiedPosNode.next){
            occupiedPosNode.next.previous = occupiedPosNode.previous
        }
        if(occupiedPosNode.previous){
            occupiedPosNode.previous.next = occupiedPosNode.next
        }
        occupiedPosNode.next = occupiedPosNode.previous = undefined
        return occupiedPosNode.value
    }      
    get(idx: number): T | undefined {
        const node = this.getAt(idx)

        return node?.value;

    }
    removeAt(idx: number): T | undefined {
        const node = this.getAt(idx)
        if(!node) return undefined
        this.length--
        if(this.length === 0){
            const head = this.head
            this.head = this.tail = undefined
            return head?.value;
        }

        if(node === this.tail){
            this.tail = this.tail.next
            return
        }

        if(node === this.head){
            this.head = this.head.previous
            if(this.head?.next){ 
                this.head.next = undefined
                return node.value
            }
        }
        if(node.next?.previous && node.previous?.next){
        node.next.previous = node.previous
        node.previous.next = node.next
        node.previous = node.next = undefined
    }

        return node.value
}

    private getAt(idx: number): Node<T> | undefined{
        let occupiedPosNode  = this.head
        //necessary statement for typescript udnefined assertion error
        for(let i=0; occupiedPosNode && i<idx ; i++){
            occupiedPosNode = occupiedPosNode?.previous 
        }
        return occupiedPosNode
    }
}