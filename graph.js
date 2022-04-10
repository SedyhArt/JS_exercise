// const graph = {};
// graph.a = ['b', 'c'];
// graph.b = ['f'];
// graph.c = ['d', 'e'];
// graph.d = ['f'];
// graph.e = ['f'];
// graph.f = ['g'];

// function breadthSeach(graph, start, end) {
//   let queue = [];
//   queue.push(start);

//   while (queue.length) {
//     console.log(queue);
//     const current = queue.shift();
//     if (!graph[current]) {
//       graph[current] = [];
//     }
//     if (graph[current].includes(end)) {
//       return true;
//     } else {
//       queue = [...queue, ...graph[current]];
//     }
//   }
//   return false;
// }

// console.log(breadthSeach(graph, 'a', 'g'));

//// dejkstra

// const graph = {};
// graph.a = { b: 2, c: 1 };
// graph.b = { f: 7 };
// graph.c = { d: 5, e: 2 };
// graph.d = { f: 2 };
// graph.e = { f: 1 };
// graph.f = { g: 1 };
// graph.g = {};

// function shortPath(graph, start, end) {
//   const costs = {};
//   const processed = [];
//   let neighbors = {};
//   Object.keys(graph).forEach((node) => {
//     if (node !== start) {
//       let value = graph[start][node];
//       costs[node] = value || 100000000;
//     }
//   });
//   let node = findNodeLowestCost(costs, processed);
//   while (node) {
//     const cost = costs[node];
//     neighbors = graph[node];
//     Object.keys(neighbors).forEach((neighbor) => {
//       let newCost = cost + neighbors[neighbor];
//       if (newCost < costs[neighbor]) {
//         costs[neighbor] = newCost;
//       }
//     });
//     processed.push(node);
//     node = findNodeLowestCost(costs, processed);
//   }
//   return costs[end];
// }

// function findNodeLowestCost(costs, processed) {
//   let lowestCost = 100000000;
//   let lowestNode;
//   Object.keys(costs).forEach((node) => {
//     let cost = costs[node];
//     if (cost < lowestCost && !processed.includes(node)) {
//       lowestCost = cost;
//       lowestNode = node;
//     }
//   });
//   return lowestNode;
// }
// console.log(shortPath(graph, 'a', 'g'));
