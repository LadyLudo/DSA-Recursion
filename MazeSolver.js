function MazeSolver(maze, directions = '', X = 0, Y = 0) {
    if(maze[X][Y] === 'e'){
        console.log(directions)
    } else {
        //check spots - if there is a * or a ! don't go there
        //Check Left
        if(maze[X][Y-1] !== undefined && maze[X][Y-1] !== '*' && maze[X][Y-1] !== '!'){
            //set current spot to !
            maze[X][Y] = '!'
            //update directions
            directions += 'L'
            //call function with next spot in maze
            MazeSolver(maze, directions, X, Y-1)
        }
        
        //Check Top
        else if (maze[X-1] !== undefined && maze[X-1][Y] !== '*' && maze[X-1][Y] !== '!'){
            //set current spot to !
            maze[X][Y] = '!'
            //update directions
            directions += 'U'
            //call function with next spot in maze
            MazeSolver(maze, directions, X-1, Y)
        }
        
        //Check Right
        else if(maze[X][Y+1] !== undefined && maze[X][Y+1] !== '*' && maze[X][Y+1] !== '!'){
            //set current spot to !
            maze[X][Y] = '!'
            //update directions
            directions += 'R'
            //call function with next spot in maze
            MazeSolver(maze, directions, X, Y+1)
        }

        //Check Bottom
        else if(maze[X+1][Y] !== undefined && maze[X+1][Y] !== '*' && maze[X+1][Y] !== '!'){
            //set current spot to !
            maze[X][Y] = '!'
            //update directions
            directions += 'D'
            //call function with next spot in maze
            MazeSolver(maze, directions, X+1, Y)
        }
        else{
            console.log("there is no solution")
        }
        
    }
}

let maze = [
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
    ['*', '*', ' ', '*', ' ', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', '*', '*', '*', '*', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'e']
]
MazeSolver(maze)