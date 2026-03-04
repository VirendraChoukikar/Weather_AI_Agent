require('dotenv').config();

// ============================================================================
// READLINE - For interactive user input
// ============================================================================
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// ============================================================================
// WEATHER FUNCTION - Works locally without OpenAI API!
// ============================================================================

function getWeatherDetails(city) {
    if (!city) return 'Please provide a city name';
    const cityLower = city.toLowerCase();
    if (cityLower === 'amla') return '20 °C';
    if (cityLower === 'betul') return '21 °C';
    if (cityLower === 'bhopal') return '18 °C';
    if (cityLower === 'indore') return '19 °C';
    if (cityLower === 'delhi') return '25 °C';
    if (cityLower === 'mumbai') return '28 °C';
    if (cityLower === 'chennai') return '30 °C';
    if (cityLower === 'kolkata') return '27 °C';
    if (cityLower === 'bangalore') return '22 °C';
    if (cityLower === 'hyderabad') return '24 °C';
    if (cityLower === 'pune') return '23 °C';
    if (cityLower === 'jaipur') return '26 °C';
    if (cityLower === 'lucknow') return '24 °C';
    if (cityLower === 'ahmedabad') return '29 °C';
    if (cityLower === 'surat') return '28 °C';
    if (cityLower === 'kochi') return '27 °C';
    if (cityLower === 'goa') return '30 °C';
    if (cityLower === 'chandigarh') return '22 °C';
    if (cityLower === 'nagpur') return '25 °C';
    return 'City not found. Available cities: Amla, Betul, Bhopal, Indore, Delhi, Mumbai, Chennai, Kolkata, Bangalore, Hyderabad, Pune, Jaipur, Lucknow, Ahmedabad, Surat, Kochi, Goa, Chandigarh, Nagpur';
}

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

// Check if input is a weather query
function isWeatherQuery(input) {
    const weatherKeywords = ['weather', 'temperature', 'climate', 'hot', 'cold', 'rain'];
    const inputLower = input.toLowerCase();
    return weatherKeywords.some(keyword => inputLower.includes(keyword));
}

// Extract city name from weather query
function extractCity(input) {
    const patterns = [
        /weather\s+(?:in|of|at|for)?\s+(\w+)/i,
        /temperature\s+(?:in|of|at|for)?\s+(\w+)/i,
        /what'?s\s+the\s+weather\s+(?:in|of|at|for)?\s+(\w+)/i,
        /how'?s\s+(?:the\s+)?weather\s+(?:in|of|at|for)?\s+(\w+)/i,
        /(\w+)\s+weather/i
    ];
    
    for (let pattern of patterns) {
        const match = input.match(pattern);
        if (match && match[1]) {
            return match[1];
        }
    }
    return null;
}

// ============================================================================
// MAIN CHAT FUNCTION - Processes user input
// ============================================================================

function chat(userInput) {
    // Check if it's a weather query
    if (isWeatherQuery(userInput)) {
        const city = extractCity(userInput);
        
        if (city) {
            const weather = getWeatherDetails(city);
            console.log("\n=== Agent Response ===");
            console.log(`The weather in ${city} is ${weather}`);
        } else {
            console.log("\n=== Agent Response ===");
            console.log("Please specify a city name. For example: 'What is weather in Delhi?'");
        }
    } else {
        console.log("\n=== Agent Response ===");
        console.log("I can only answer weather queries currently.");
        console.log("Try asking: 'What is weather in Mumbai?' or 'weather in Delhi'");
    }
}

// ============================================================================
// INTERACTIVE LOOP - Ask question, get answer, repeat!
// ============================================================================

function askQuestion() {
    rl.question('\n Ask About Weather: ', (userInput) => {
        // Check if user wants to exit
        if (userInput.toLowerCase() === 'exit' || 
            userInput.toLowerCase() === 'quit' || 
            userInput.toLowerCase() === 'bye') {
            console.log("\n Goodbye! Thanks for using the AI Agent!");
            rl.close();
            return;
        }
        
        // Skip empty input
        if (!userInput.trim()) {
            askQuestion();
            return;
        }
        
        // Process the input and get response
        chat(userInput);
        
        // Ask again (loop)
        askQuestion();
    });
}

// ============================================================================
// START THE APPLICATION
// ============================================================================

console.log("═══════════════════════════════════════");
console.log("   MY AI Agent - Interactive Chat   ");
console.log("═══════════════════════════════════════");
console.log("Ask me about weather!");
console.log("Examples: 'What is weather in Mumbai?'");
console.log("          'weather in Delhi'");
console.log("          'temperature in Bangalore'");
console.log("Type 'exit', 'quit', or 'bye' to stop.");
console.log("═══════════════════════════════════════");

// Start the interactive loop
askQuestion();

