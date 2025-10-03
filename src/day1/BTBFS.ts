import Queue from "./Queue";

export default function bfs(head: BinaryNode<number>, needle: number): boolean {
    
    let queue : Queue<BinaryNode<number>> = new Queue()

    queue.enqueue(head)

    while(queue.length){
        let curr = queue.deque()
        if(curr?.value === needle){
            return true
        }
        if(curr?.left){
            queue.enqueue(curr?.left)
        }
         if(curr?.right){
             queue.enqueue(curr?.right)
        }
    }
    return false
}