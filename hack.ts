let inputLines: string[] = [];

class Edge {
  u: string;
  v: string;

  constructor(u: string, v: string) {
    this.u = u;
    this.v = v;
  }
}

class Graph {
  adjList: any;
  constructor() {
    this.adjList = {};
  }

  addEdges(edge: Edge) {
    this.adjList[edge.u].push(edge.v);
    this.adjList[edge.v].push(edge.u);
  }
}

function main() {
  // Enter your code here
  let numNodes = inputLines[1].split(" ")[0],
    numEdges = inputLines[1].split(" ")[1],
    numQueries = Number(inputLines[0]),
    graph = new Graph();

  for (let i = 1; i <= Number(numNodes); i++) {
    graph.adjList[i] = [];
  }

  for (let i = 2; i < inputLines.length; i++) {
    const currVal = inputLines[i];

    if (currVal.length === 1) {
      if (numQueries !== 0) {
        numQueries--;
        processGraph(graph, currVal);
        (numNodes = inputLines[i + 1].split(" ")[0]),
          (numEdges = inputLines[i + 1].split(" ")[1]),
          (graph = new Graph());
        i++;
        for (let i = 1; i <= Number(numNodes); i++) {
          graph.adjList[i] = [];
        }
      }
    } else {
      graph.addEdges(new Edge(currVal.split(" ")[0], currVal.split(" ")[1]));
    }
  }
}

function processGraph(graph: Graph, s: string) {
  console.log(graph, s);
}
