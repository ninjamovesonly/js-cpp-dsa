class Graph {
  constructor() {
    this.adjancencyMap = new Map();
    this.weights = new Map();
  }

  addNode(node) {
    this.adjancencyMap.set(node, []);
  }

  addEdge(node, weight, edge) {
    const createdEdge = [weight, edge];
    this.adjancencyMap.get(node).push(createdEdge);
  }

  createNodeFromRange(range) {
    for (let i = 1; i <= range; i++) {
      this.addNode(i);
    }
  }

  createEdgeFromInput(inputLines, start, edgeCount, weight) {
    for (let i = 1; i <= edgeCount; i++) {
      const edgeLine = inputLines[start + i];
      const edge = edgeLine.split(" ");
      const prop0 = Number(edge[0]);
      const prop1 = Number(edge[1]);

      this.addEdge(prop0, weight, prop1);
      this.addEdge(prop1, weight, prop0);
    }
  }

  bfs(startNode) {
    const visited = new Set();
    visited.add(startNode);
    this.weights.clear();
    this.weights.set(startNode, 0);

    for (let item of visited) {
      const nodeKey = item;
      const nodeWeight = this.weights.get(nodeKey);

      const node = this.adjancencyMap.get(nodeKey);

      for (let j = 0; j < node.length; j++) {
        const edgeProps = node[j];
        const weight = edgeProps[0];
        const newNode = edgeProps[1];

        const totalWeight = nodeWeight + weight;
        visited.add(newNode);

        if (!this.weights.has(newNode)) {
          this.weights.set(newNode, totalWeight);
        }
      }
    }
  }

  print() {
    let text = "";
    for (let i = 1; i <= this.adjancencyMap.size; i++) {
      const weight = this.weights.get(i);

      if (weight === 0) {
        continue;
      } else if (weight === undefined) {
        text += "-1 ";
      } else {
        text += weight + " ";
      }
    }
    console.log(text);
  }

  clear() {
    this.weights.clear();
    this.adjancencyMap.clear();
  }
}

function processData(input) {
  const lines = String(input).split(/\r?\n/);
  const queryCount = lines[0];
  const graph = new Graph();
  let queryStartIndex = 1;

  for (let i = 0; i < queryCount; i++) {
    const queryProps = lines[queryStartIndex].split(" ");
    const nodeCount = Number(queryProps[0]);
    const edgeCount = Number(queryProps[1]);

    graph.createNodeFromRange(nodeCount);
    graph.createEdgeFromInput(lines, queryStartIndex, edgeCount, 6);
    queryStartIndex = queryStartIndex + edgeCount + 2;
    const startNode = lines[queryStartIndex - 1];
    graph.bfs(Number(startNode));
    graph.print();
    graph.clear();
  }
}

console.log(
  processData(`2
4 2
1 2
1 3
1
3 1
2 3
2`)
);
