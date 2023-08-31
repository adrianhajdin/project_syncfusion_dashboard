export function adjustColorBrightness(hex, percent) {
  const strippedHex = hex.replace(/^#/, ''); // Remove the '#' character
  const r = parseInt(strippedHex.slice(0, 2), 16);
  const g = parseInt(strippedHex.slice(2, 4), 16);
  const b = parseInt(strippedHex.slice(4, 6), 16);

  // Calculate new RGB values with adjusted brightness
  const newR = Math.max(0, Math.min(255, r + (percent / 100) * r));
  const newG = Math.max(0, Math.min(255, g + (percent / 100) * g));
  const newB = Math.max(0, Math.min(255, b + (percent / 100) * b));

  // Convert back to hex format
  const newHex = `#${
    Math.round(newR).toString(16).padStart(2, '0')
  }${Math.round(newG).toString(16).padStart(2, '0')
  }${Math.round(newB).toString(16).padStart(2, '0')}`;

  return newHex;
}
