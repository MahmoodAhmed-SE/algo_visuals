import Graph from "../Graph";
import BfsLogic from "../Graph/BfsLogic";

const BfsContent = () => {
  const g = new Graph();
  g.addVertex("S");
  g.addVertex("D");
  g.addVertex("E");
  g.addVertex("P");
  g.addVertex("B");
  g.addVertex("E");
  g.addVertex("G");
  g.addVertex("R");
  g.addVertex("Q");

  g.addEdge("S", "D");
  g.addEdge("S", "E");
  g.addEdge("S", "P");
  g.addEdge("D", "B");
  g.addEdge("D", "E");
  g.addEdge("E", "G");
  g.addEdge("E", "R");
  g.addEdge("R", "Q");


  BfsLogic(g.AdjList, "S");
  <></>;
};
export default BfsContent;
