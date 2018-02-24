export const getXScale = (data, margins, svgDimensions, xScale, xValue) => {
  return (
    xScale
      .padding(0.5)
      .domain(data.map(d => d[[xValue]]))
      .range([margins.left, svgDimensions.width - margins.right])
  );
};

export const getYScale = (maxValue, margins, svgDimensions, yScale) => {
  return (
    yScale
      .domain([0, maxValue + 20])
      .range([svgDimensions.height - margins.bottom, margins.top])
  );
}
