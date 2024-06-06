
// A simple function to generate a random color
export const generateRandomColor = () => {
    const randomHue = Math.floor(Math.random() * 360);
    return `hsl(${randomHue}, 100%, 50%)`;
};