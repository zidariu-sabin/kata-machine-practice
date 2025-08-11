import Queue from "./Queue";

export default function bfs(head: BinaryNode<number>, needle: number): boolean {
    let queue  = new Queue<BinaryNode<number>| null| undefined>();
    queue.enqueue(head);

    while(queue.length){
        
        const curr = queue.deque();

        if(!curr){
            continue;
        }

        if(curr.value === needle) return true

        queue.enqueue(curr.left)
        queue.enqueue(curr.right)

    }
    return false

}