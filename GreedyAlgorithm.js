
// Greedy Algorithm
/*
Problem Statement
Given an amount and a set of coin denominations, determine the minimum number of coins required to make the given amount.

Example
Amount: 63 cents
Coin Denominations: [1, 5, 10, 25]
*/

const coinChange = (amount, denominations)=>{
    let result = [];
    let remainingAmount= amount;
    let typesOfCoins = denominations.length;
    denominations.sort((a,b)=>b-a);
    for(let i=0;i<typesOfCoins;i++){
        let coin = denominations[i];
        if(remainingAmount>=coin){
            let count = Math.floor(remainingAmount/coin);
            remainingAmount -= count*coin;
            result.push({coin:coin, count:count});
        }

    }
    if(remainingAmount!==0){
        return "Not possible to give change";
    }
    return result;
}

// Test Cases

// Test Case 1
console.log("\nTest Case 1");
let amount = 63;
let denominations = [1, 5, 10, 25];
let result = coinChange(amount, denominations);
console.log("Change for "+amount+" cents: ");
result.forEach((coin)=>{
    console.log(coin.count+" coin(s) of "+coin.coin+" cents");
});

// Test Case 2
console.log("\nTest Case 2");
 amount = 99;
 denominations = [1, 5, 10, 25];
 result = coinChange(amount, denominations);
console.log("Change for "+amount+" cents: ");
result.forEach((coin)=>{
    console.log(`${coin.count} coin(s) of ${coin.coin} cents`);
});

// Test Case 3
console.log("\nTest Case 3");
 amount = 63;
 denominations = [ 5, 10, 25, 50];
 result = coinChange(amount, denominations);
console.log("Change for "+amount+" cents: ");
if(result==="Not possible to give change"){
    console.log(result);
}
else{
    result.forEach((coin)=>{
        console.log(`${coin.count} coin(s) of ${coin.coin} cents`);
    });
}

// Test Case 4

// Test Case 3
console.log("\nTest Case 4");
 amount = 200;
 denominations = [ 1,5, 10, 25, 50];
 result = coinChange(amount, denominations);
console.log("Change for "+amount+" cents: ");
if(result==="Not possible to give change"){
    console.log(result);
}
else{
    result.forEach((coin)=>{
        console.log(`${coin.count} coin(s) of ${coin.coin} cents`);
    });
}



/*
Greedy Algorithm: 
What is a Greedy Algorithm?
A greedy algorithm is a problem-solving approach that constructs a solution piece by piece, always choosing the next piece that offers the most immediate benefit. The key idea is to make the best choice at each step with the hope that these local optimum solutions will lead to a global optimum solution.

Why Use Greedy Algorithms?
Greedy algorithms are used when:

Efficiency is required: Greedy algorithms tend to be faster because they make a series of local choices rather than considering all possible global solutions.
The problem has the greedy-choice property: A global optimal solution can be reached by making local optimal (greedy) choices.
The problem exhibits optimal substructure: An optimal solution to the problem contains optimal solutions to its subproblems.
Examples of Greedy Algorithms
Activity Selection Problem: Selecting the maximum number of non-overlapping activities.
Fractional Knapsack Problem: Maximizing the total value of items that can be carried in a knapsack where items can be broken into smaller pieces.
Huffman Coding: Data compression method where more frequent characters are assigned shorter codes.
Prim's and Kruskal's Algorithms: Finding the minimum spanning tree in a graph.
Pros and Cons of Greedy Algorithms
Pros
Simplicity:

Greedy algorithms are usually straightforward and easier to code and understand.
Efficiency:

Greedy algorithms can be very efficient, often running in linear or near-linear time. This makes them suitable for large datasets.
Optimal Solutions for Certain Problems:

For problems that exhibit the greedy-choice property and optimal substructure, greedy algorithms provide an optimal solution.
Cons
Non-optimal for Some Problems:

Greedy algorithms do not always produce the optimal solution for problems that do not exhibit the greedy-choice property. They might get stuck in a local optimum and miss the global optimum.
Requires Proof of Correctness:

It must be proven that a greedy approach leads to an optimal solution for a given problem, which can be non-trivial.
Limited Applicability:

Greedy algorithms are not universally applicable. They work well for certain types of problems but not all.

Real Life Use: Greedy algorithms are used in various real-life scenarios where local optimization leads to global optimization or where an approximate solution is acceptable. Here are some real-life examples where greedy algorithms are applied:

 1. ⭐ Cashier's Change Problem⭐ 
- ⭐ Problem⭐ : A cashier needs to provide change using the minimum number of coins and bills.
- ⭐ Application⭐ : Cash registers, ATMs.
- ⭐ Greedy Choice⭐ : Always give the largest denomination available.

 2. ⭐ Scheduling Problems⭐ 
- ⭐ Problem⭐ : Scheduling tasks or activities to maximize efficiency.
- ⭐ Application⭐ : Task scheduling in operating systems, job scheduling in manufacturing.
- ⭐ Greedy Choice⭐ : Always schedule the next task that finishes earliest or takes the least time.

 3. ⭐ Network Routing⭐ 
- ⭐ Problem⭐ : Finding the shortest path from one point to another in a network.
- ⭐ Application⭐ : Internet routing protocols like OSPF and Dijkstra’s algorithm.
- ⭐ Greedy Choice⭐ : Always choose the nearest unvisited node.

 4. ⭐ Huffman Coding⭐ 
- ⭐ Problem⭐ : Compressing data to reduce storage space.
- ⭐ Application⭐ : File compression formats (e.g., ZIP), multimedia codecs (e.g., JPEG, MP3).
- ⭐ Greedy Choice⭐ : Always merge the two least frequent nodes in the coding tree.

 5. ⭐ Fractional Knapsack Problem⭐ 
- ⭐ Problem⭐ : Maximizing the total value of items that can be carried in a knapsack with a weight limit.
- ⭐ Application⭐ : Cargo loading, budget allocation.
- ⭐ Greedy Choice⭐ : Always pick the item with the highest value-to-weight ratio.

 6. ⭐ Prim’s and Kruskal’s Algorithms for Minimum Spanning Tree⭐ 
- ⭐ Problem⭐ : Connecting all points in a network with the minimum total weight of edges.
- ⭐ Application⭐ : Network design (e.g., laying out electrical grids, network cables).
- ⭐ Greedy Choice⭐ : Always add the next smallest edge that doesn't form a cycle.

 7. ⭐ Resource Allocation⭐ 
- ⭐ Problem⭐ : Allocating resources to maximize profit or minimize cost.
- ⭐ Application⭐ : Project management, airline seat allocation.
- ⭐ Greedy Choice⭐ : Allocate resources to the most profitable or least costly option first.

 8. ⭐ Interval Scheduling⭐ 
- ⭐ Problem⭐ : Selecting the maximum number of non-overlapping intervals.
- ⭐ Application⭐ : Event planning, CPU job scheduling.
- ⭐ Greedy Choice⭐ : Always pick the interval that finishes earliest.

 9. ⭐ File Downloading⭐ 
- ⭐ Problem⭐ : Downloading files in a manner that maximizes throughput.
- ⭐ Application⭐ : Internet browsers, download managers.
- ⭐ Greedy Choice⭐ : Download the largest file first if bandwidth allows, or multiple smaller files to use bandwidth efficiently.

 10. ⭐ Advertisement Allocation⭐ 
- ⭐ Problem⭐ : Allocating advertisement slots to maximize revenue.
- ⭐ Application⭐ : Online ad placements, TV commercial slots.
- ⭐ Greedy Choice⭐ : Always allocate the slot to the highest-paying advertisement.

 11. ⭐ Traveling Salesman Problem (Approximate Solutions)⭐ 
- ⭐ Problem⭐ : Finding the shortest possible route that visits each city exactly once and returns to the origin city.
- ⭐ Application⭐ : Logistics, route planning.
- ⭐ Greedy Choice⭐ : Always visit the nearest unvisited city.

 Conclusion

Greedy algorithms are widely used in real-life situations where decisions need to be made step-by-step and each decision is the best local choice available. They are particularly effective in optimization problems and scenarios where a quick, approximate solution is acceptable. However, it's important to ensure that the problem has the greedy-choice property and optimal substructure for the greedy algorithm to be effective.
*/







