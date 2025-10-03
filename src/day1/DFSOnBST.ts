export default function dfs(head: BinaryNode<number> | null | undefined, needle: number): boolean {
    if(head?.value === null || head?.value === undefined ){
        return false
    }
    if(head.value == needle) return true 
    return dfs(head?.left, needle) || dfs(head?.right,needle)
}   