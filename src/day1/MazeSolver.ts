const dir = [
    [-1, 0],
    [0,1],
    [1,0],
    [0,-1],
]
function walk(maze: string[], wall: string, current: Point, end: Point, seen: boolean[][], path: Point[]): boolean{
    search_point = current
    if(current.x === end.x && current.y === end.y ){
        path.push(end)
        return true
    } 
    
    if( current.x < 0 || current.x > maze[0].length ||
        current.y < 0 || current.y > maze.length ){
        return false
    }

    if(maze[current.y][current.x] === wall ){
        return false
    }
    if(seen[current.y][current.x]){
        return false
    }
    path.push(current)
    seen[current.y][current.x] = true;
    for(let i = 0; i < dir.length; i++){
        const next_point: Point = {
            x: current.x +dir[i][0],
            y: current.y+dir[i][1],
        }
        if(walk(maze, wall, next_point, end, seen, path)){
            return true
        }
    }
    path.pop()
    return false
}

function drawPath(data: string[], path: Point[]) {
    const data2 = data.map((row) => row.split(''));
    path.forEach((p) => {
        if (data2[p.y] && data2[p.y][p.x]) {
            data2[p.y][p.x] = '*';
        }
    });
    return data2.map(d => d.join(''));
}

export default function solve(maze: string[], wall: string, start: Point, end: Point): Point[] {
    // we want to return the path we took to get to the end
    let seen: boolean [][] = [];
    var path: Point [] = [];
    for(let i= 0; i < maze.length ; i++){
        let row = []
        for(let j= 0; j < maze[0].length ; j++){
            row.push(false)
        }
        seen.push(row)
    }

    walk (maze, wall, start, end, seen, path)
    console.log("path",drawPath(maze,path))    
    return path
}