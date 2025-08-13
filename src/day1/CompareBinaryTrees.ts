import Queue from "./Queue";

function compareBF(a: BinaryNode<number> | null, b: BinaryNode<number> | null){
    let queue = new Queue<BinaryNode<number> | null>();
    queue.enqueue(a)
    queue.enqueue(b)
    while(queue.length){
        let firstQueueEl = queue.deque()
        let secondQueueEl = queue.deque()

        if(firstQueueEl === null && secondQueueEl === null ){
            continue;
        }
        if(firstQueueEl?.value !== secondQueueEl?.value){
            return false
        }

        queue.enqueue(firstQueueEl?.left ?? null)
        queue.enqueue(secondQueueEl?.left ?? null)

        
        queue.enqueue(firstQueueEl?.right ?? null)
        queue.enqueue(secondQueueEl?.right ?? null)
    }

    return true
}

function compareDF(a: BinaryNode<number> | null, b: BinaryNode<number> | null): boolean {
    if (a === null && b === null){
        return true
    }

    if( a === null || b === null ){
        return false
    }

    if( a.value !== b.value){
        return false
    }

    return compareDF(a.left, b.left) && compareDF(a.right, b.right)
}
export default function compare(a: BinaryNode<number> | null, b: BinaryNode<number> | null): boolean {
    return compareDF(a, b)
}