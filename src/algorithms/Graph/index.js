import BfsLogic from "./BfsLogic";

// Using adjacent list graph representation
class Graph {
  constructor(noOfVertices = 0) {
    this.noOfVertices = noOfVertices;
    this.AdjList = new Map();
  }

  addVertex(v) {
    if (!this.AdjList[v]) {
      // Ensure the vertex isn’t duplicated
      this.AdjList[v] = []; // Initialize as an empty array for neighbors
    }
  }

  addEdge(v, w) {
    if (!this.AdjList[v]) {
      this.AdjList[v] = []; // Initialize if vertex does not exist
    }
    this.AdjList[v].push(w); // Add w as a neighbor of v
    if (!this.AdjList[w]) {
      this.AdjList[w] = []; // Initialize w as a vertex if it doesn’t exist
    }
    this.AdjList[w].push(v); // If it's an undirected graph, add v as a neighbor of w
  }

  bfs(v) {
    BfsLogic(this.AdjList, v);
  }
}

export default Graph;
