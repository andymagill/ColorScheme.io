
// Function to calculate contrast color for text
export function getContrastColor(hexcolor: string): 'white' | 'black' {
    // Normalize hex color to 6 digits if necessary
    if (hexcolor.length === 4) {
      hexcolor = '#' + hexcolor[1] + hexcolor[1] + hexcolor[2] + hexcolor[2] + hexcolor[3] + hexcolor[3];
    }
  
    const r = parseInt(hexcolor.substr(1, 2), 16);
    const g = parseInt(hexcolor.substr(3, 2), 16);
    const b = parseInt(hexcolor.substr(5, 2), 16);
    const yiq = (r * 299 + g * 587 + b * 114) / 1000;
    return yiq >= 128 ? 'black' : 'white';
}
  