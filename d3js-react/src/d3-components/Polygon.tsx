import * as d3 from "d3";
import { useEffect, useRef } from "react";

const Polygons = () => {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (svgRef.current) {
      const svg = d3.select(svgRef.current);

      // Define the points for the polygon
      const points: Array<number[]> = [
        [30, 4],
        [12, 50],
        [80, 100],
      ];

      // Calculate the area of the polygon
      const area = d3.polygonArea(points as any);

      // Render the polygon
      svg
        .append("polygon")
        .attr("points", points.map((d) => d.join(",")).join(" "))
        .attr("fill", "lightblue")
        .attr("stroke", "black")
        .attr("stroke-width", 2);

      // Display the area of the polygon as text
      svg
        .append("text")
        .attr("x", 10)
        .attr("y", 20)
        .text(`Area: ${area.toFixed(2)}`);
    }
  }, []);

  return (
    <div style={{ border: "1px solid green" }}>
      <h1>Polygon</h1>
      <svg ref={svgRef} width="200" height="200"></svg>
    </div>
  );
};

export default Polygons;
