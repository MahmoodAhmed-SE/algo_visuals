const BfsLogic = (AdjList, startNode) => {
    const agenda = [startNode];  // Using an array as a queue for BFS
    const visited = new Set();   // Use a Set to keep track of visited nodes efficiently

    visited.add(startNode);      // Mark the start node as visited
    console.log(startNode);

    while (agenda.length !== 0) {  // Loop until the agenda (queue) is empty
        const node = agenda.shift();  // Use shift() to dequeue the first item for BFS

        // Process each neighbor of the current node
        for (const neighbor of AdjList[node]) {
            if (!visited.has(neighbor)) { // If the neighbor has not been visited
                visited.add(neighbor);    // Mark it as visited
                agenda.push(neighbor);    // Enqueue the neighbor
                console.log(neighbor);    // Print the neighbor
            }
        }
    }
};

export default BfsLogic;
