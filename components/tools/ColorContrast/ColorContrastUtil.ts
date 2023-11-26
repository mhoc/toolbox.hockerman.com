export function calculateContrast(
  rgbHexCode1: string,
  rgbHexCode2: string
): number {
  // Convert RGB hex codes to RGB values
  const rgb1 = hexToRgb(rgbHexCode1);
  const rgb2 = hexToRgb(rgbHexCode2);

  // Calculate relative luminance for each color
  const luminance1 = calculateRelativeLuminance(rgb1);
  const luminance2 = calculateRelativeLuminance(rgb2);

  // Calculate contrast ratio
  const contrast =
    (Math.max(luminance1, luminance2) + 0.05) /
    (Math.min(luminance1, luminance2) + 0.05);

  // Return the contrast ratio
  return contrast;
}

function hexToRgb(hex: string) {
  // Remove '#' from the hex code
  hex = hex.replace("#", "");

  // Extract individual RGB components
  const red = parseInt(hex.substring(0, 2), 16);
  const green = parseInt(hex.substring(2, 4), 16);
  const blue = parseInt(hex.substring(4, 6), 16);

  // Return RGB values as an object
  return { r: red, g: green, b: blue };
}

function calculateRelativeLuminance(rgb: {
  r: number;
  b: number;
  g: number;
}): number {
  // Convert RGB values to linear color
  const red = rgbToLinear(rgb.r);
  const green = rgbToLinear(rgb.g);
  const blue = rgbToLinear(rgb.b);

  // Calculate relative luminance using the sRGB formula
  const luminance = 0.2126 * red + 0.7152 * green + 0.0722 * blue;

  // Return relative luminance
  return luminance;
}

function rgbToLinear(color: number): number {
  const linearColor = color / 255;
  if (linearColor <= 0.03928) {
    return linearColor / 12.92;
  } else {
    return Math.pow((linearColor + 0.055) / 1.055, 2.4);
  }
}
