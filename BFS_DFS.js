//BFS для linked list
function BFS(graph, root) {
    let nodesLen = {}
    for (let i = 0; i < graph.length; i++) {
        nodesLen[i] = Infinity
    }
    nodesLen[root] = 0
    let queue = [root]
    let current
    while (queue.length !== 0) {
        current = queue.shift()

        let curConnected = graph[current]
        let neighborIdx = []
        let idx = curConnected.indexOf(1)
        while (idx !== -1) {
            neighborIdx.push(idx)
            idx = curConnected.indexOf(1, idx + 1)
        }
        for (let i = 0; i < neighborIdx.length; i++) {
            if (nodesLen[neighborIdx[i]] === Infinity) {
                nodesLen[neighborIdx[i]] = nodesLen[current] + 1
                queue.push(neighborIdx[i])
            }
        }
    }
    return nodesLen
}

//-----------------------------------------------------------------------
//DFS для списочного графа без реализации класса графа
class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// Рекурсивная функция DFS
function dfsUtil(node, visited, result) {
    visited[node.val] = true;
    result.push(node.val);

    let neighbor = node.next;
    while (neighbor !== null) {
        if (!visited[neighbor.val]) {
            dfsUtil(neighbor, visited, result);
        }
        neighbor = neighbor.next;
    }
}

// Функция DFS
function linkedListGraphDFS(head) {
    const visited = {};
    const result = [];
    dfsUtil(head, visited, result);
    return result;
}

//-----------------------------------------------------------------------

//матричные графы
function dfs(matrix, visited, row, col) {
    const rows = matrix.length;
    const cols = matrix[0].length;

    // Массив смещений для проверки соседей
    const offsets = [[-1, 0], [0, -1], [1, 0], [0, 1]];

    // Помечаем текущую вершину как посещенную
    visited[row][col] = true;

    // Обработка соседних вершин
    for (const [dx, dy] of offsets) {
        const newRow = row + dx;
        const newCol = col + dy;

        // Проверяем, что новые координаты в пределах графа и вершина еще не посещалась
        if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols && !visited[newRow][newCol] && matrix[newRow][newCol] === 1) {
            dfs(matrix, visited, newRow, newCol);
        }
    }
}

const exampleMatrixDFS = (matrix) => {
    const rows = matrix.length;
    const cols = matrix[0].length;

    // Создаем массив для отслеживания посещенных вершин
    const visited = Array.from({ length: rows }, () => Array(cols).fill(false));

    // Вызываем DFS для каждой вершины графа
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (matrix[i][j] === 1 && !visited[i][j]) {
                dfs(matrix, visited, i, j);
                // Здесь вы можете добавить логику обработки каждой компоненты связности
            }
        }
    }

    //return visited;
}

// Пример использования
const matrix = [
    [1, 0, 1],
    [0, 1, 0],
    [1, 1, 1]
];

console.log(exampleMatrixDFS(matrix));

//bfs для матричного графа
function bfs(matrix, startVertex) {
    let visited = new Array(matrix.length).fill(false);
    let queue = [];

    visited[startVertex] = true;
    queue.push(startVertex);

    while(queue.length > 0) {
        let currentVertex = queue.shift();
        console.log(currentVertex); // Делайте что-то с текущей вершиной, например, выводите её

        for(let i = 0; i < matrix[currentVertex].length; i++) {
            if(matrix[currentVertex][i] === 1 && !visited[i]) {
                visited[i] = true;
                queue.push(i);
            }
        }
    }
}