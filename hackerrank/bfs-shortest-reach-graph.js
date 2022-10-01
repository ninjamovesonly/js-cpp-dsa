function processData(input) {
  // get input as array and remove first entry (number of queries)
  input = input.split("\n");
  input.shift();
  // initialize map for adjacency list
  let map = new Map();
  // initialize array to store distances for each query
  let distArr = [];
  // set number of nodes value given in input to create list entries
  let noOfNodes = Number(input[0].split(" ")[0]);

  const bfsUtil = function (startNode) {
    let visited = new Set();
    visited.add(startNode);
    let q = [[startNode, 0]];
    let distance = 6;

    while (q.length > 0) {
      let [current, depth] = q.shift();
      let neighbors = map.get(current);

      for (let neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          q.push([neighbor, depth + 1]);
          distArr[Number(neighbor)] = Number(distance * (depth + 1));
        }
      }
    }

    for (let [key] of map.entries()) {
      if (!visited.has(key)) {
        distArr[Number(key)] = -1;
      }
    }
    distArr = distArr.filter(
      (dist) => dist !== 0 && typeof distance === "number"
    );
  };

  const createMap = function () {
    map = new Map();
    for (let i = 1; i <= noOfNodes; i++) {
      map.set(`${i}`, []);
    }
  };
  createMap();

  for (let i = 1; i < input.length; i++) {
    let line = input[i].trim();

    if (line.indexOf(" ") > -1) {
      let [node1, node2] = line.split(" ");
      map.get(node1).push(node2);
      map.get(node2).push(node1);
    } else {
      distArr = new Array(noOfNodes - 1).fill(0);
      bfsUtil(line);
      console.log(distArr.join(" "));
      if (i < input.length - 1) {
        noOfNodes = Number(input[i + 1].split(" ")[0]);
        i++;
        createMap();
      }
    }
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
