function walk(curr: BinaryNode<number> | null, path: number[]): number[] {

    //base case
        if (curr === null){
            return path;
        }

    //pre: order will be visit the node
        path.push(curr.value);
    //recurse
        walk(curr.left, path);
        walk(curr.right, path);
    //post
        return path;

}
//return the visited nodes in a pre order traversal
export default function pre_order_search(head: BinaryNode<number>): number[] {
    return walk(head,[]);
}