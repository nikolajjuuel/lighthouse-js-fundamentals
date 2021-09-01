function calculateRectangleArea(length, width) {
  if (length < 0 || width < 0) {
    return undefined;
  }
  const area = length * width;
  return area;
}

function calculateTriangleArea(base, height) {
  if (base < 0 || height < 0) {
    return undefined;
  }
  const area = (base * height) / 2;
  return area;
}

function calculateCircleArea(radius) {
  if (radius < 0) {
    return undefined;
  }
  const area = Math.PI * Math.pow(radius, 2);
  return area;
}
