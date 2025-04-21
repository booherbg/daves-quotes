// Function to generate a consistent hash from a string
function hashString(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash; // Convert to 32bit integer
    }
    return Math.abs(hash);
}

// Function to generate a color from a hash
function generateColor(hash, saturation = 80, lightness = 60) {
    const hue = hash % 360;
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}

// Function to generate a gradient from a hash
function generateGradient(hash) {
    const color1 = generateColor(hash, 80, 60);
    const color2 = generateColor(hash + 180, 80, 60); // Complementary color
    return `linear-gradient(135deg, ${color1}, ${color2})`;
}

// Function to generate a pattern from a hash
function generatePattern(hash) {
    const patterns = [
        'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px)',
        'repeating-radial-gradient(circle, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px)',
        'repeating-conic-gradient(from 0deg, transparent, transparent 10deg, rgba(255,255,255,0.1) 10deg, rgba(255,255,255,0.1) 20deg)'
    ];
    return patterns[hash % patterns.length];
}

// Function to apply background to the page
function applyBackground() {
    // Get today's date in YYYY-MM-DD format
    const today = new Date().toISOString().split('T')[0];
    
    // Generate a hash from today's date
    const dateHash = hashString(today);
    
    // Generate background properties
    const background = generateGradient(dateHash);
    const pattern = generatePattern(dateHash);
    
    // Apply the background to the body
    document.body.style.background = `${background}, ${pattern}`;
}

// Apply the background when the page loads
document.addEventListener('DOMContentLoaded', applyBackground); 