##  AI Agent - Weather Assistant

An interactive AI agent that answers weather queries. This project demonstrates function calling with OpenAI API and includes a local fallback mode for weather queries.

##  Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [How It Works](#how-it-works)
- [Supported Cities](#supported-cities)
- [Code Overview](#code-overview)
- [Troubleshooting](#troubleshooting)
- [License](#license)

##  Features

1. **Interactive Chat** - User can ask questions and get responses in a continuous loop
2. **Weather Queries** - Answers weather-related questions for supported cities
3. **Multiple Query Formats** - Accepts various question formats:
   - "What is weather in Mumbai?"
   - "weather in Delhi"
   - "temperature in Bangalore"
4. **Local Mode** - Works without OpenAI API (fallback mode)
5. **Extensible** - Easy to add more functions and features

##  Project Structure

```
AI_Agent/
├── index.js          # Main application code
├── package.json      # Project dependencies
├── .env              # Environment variables (API key)
├── .gitignore       # Git ignore file
└── README.md        # This file
```

##  Prerequisites

Before running this project, you need:

1. **Node.js** - Version 14 or higher
   - Download from: https://nodejs.org/
   
2. **OpenAI Account** (Optional - for full API mode)
   - Sign up at: https://platform.openai.com/

##  Installation

Follow these steps to set up the project:

### Step 1: Clone or Download the Project

```bash
# If using git
git clone <repository-url>
cd AI_Agent

# Or simply ensure you're in the project directory
cd path/to/AI_Agent
```

### Step 2: Install Dependencies

```bash
npm install
```

This will install:
- `dotenv` - For environment variable management
- `openai` - For OpenAI API integration

### Step 3: Configure Environment Variables

Create a `.env` file in the project root:

```env
# OpenAI API Key (optional - only needed for full API mode)
OPENAI_API_KEY=your_openai_api_key_here
```

**Important:** 
- Get your API key from: https://platform.openai.com/account/api-keys
- Do NOT share your API key publicly
- The local mode works without an API key

##  Configuration

### Option 1: Local Mode (No API Key Needed) ✅

The default mode works without OpenAI API:
- Weather queries are answered using local function
- No API key required
- Completely free to use

### Option 2: Full API Mode (Requires API Key)

For full OpenAI function calling capability:

1. Get an API key from https://platform.openai.com/account/api-keys
2. Add it to your `.env` file:
   ```
   OPENAI_API_KEY=sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   ```
3. The code will automatically use the API for non-weather queries

##  Usage

### Starting the Application

```bash
node index.js
```

### Interactive Mode

Once running, you'll see:

```
═══════════════════════════════════════
    AI Agent - Interactive Chat   
═══════════════════════════════════════
Ask me about weather!
Examples: 'What is weather in Mumbai?'
          'weather in Delhi'
          'temperature in Bangalore'
Type 'exit', 'quit', or 'bye' to stop.
═══════════════════════════════════════

 Ask about weather : 
```

### Example Conversations

```
 You: what is weather in amla?
=== AI Response ===
The weather in amla is 20 °C

 You: weather in Mumbai?
=== AI Response ===
The weather in mumbai is 28 °C

 You: temperature in Delhi
=== AI Response ===
The weather in delhi is 25 °C

 You: exit
 Goodbye! Thanks for using the AI Agent!
```

##  How It Works

### Architecture Overview

```
User Input → Check Query Type → [Weather Query] → Local Function
                            ↓
                      [Other Query] → OpenAI API (optional)
```

### Key Components

1. **getWeatherDetails(city)**
   - Local function that returns weather data
   - Works without API key
   - Supports 19 cities

2. **isWeatherQuery(input)**
   - Detects if user is asking about weather
   - Checks for keywords: weather, temperature, climate, hot, cold, rain

3. **extractCity(input)**
   - Extracts city name from user query
   - Supports multiple query formats

4. **Interactive Loop**
   - Uses Node.js `readline` module
   - Continues asking until user types 'exit', 'quit', or 'bye'

##  Supported Cities

The weather function supports these cities:

| City | Temperature |
|------|-------------|
| Amla | 20 °C |
| Betul | 21 °C |
| Bhopal | 18 °C |
| Indore | 19 °C |
| Delhi | 25 °C |
| Mumbai | 28 °C |
| Chennai | 30 °C |
| Kolkata | 27 °C |
| Bangalore | 22 °C |
| Hyderabad | 24 °C |
| Pune | 23 °C |
| Jaipur | 26 °C |
| Lucknow | 24 °C |
| Ahmedabad | 29 °C |
| Surat | 28 °C |
| Kochi | 27 °C |
| Goa | 30 °C |
| Chandigarh | 22 °C |
| Nagpur | 25 °C |

##  Code Overview

### Main Functions

```javascript
// Returns weather for a city
getWeatherDetails(city)

// Checks if input is about weather
isWeatherQuery(input)

// Extracts city name from query
extractCity(input)

// Processes user input and gives response
chat(userInput)

// Handles the interactive question-answer loop
askQuestion()
```

### Running from Command Line

You can also pass a query directly:

```bash
node index.js "what is weather in amla?"
```

##  Troubleshooting

### Error: "node is not recognized"

**Solution:** Install Node.js from https://nodejs.org/

### Error: 429 Quota Exceeded

**Cause:** OpenAI API quota exceeded

**Solutions:**
1. The local mode works without API - just ask weather questions!
2. Or add billing to your OpenAI account at https://platform.openai.com/account/billing

### Error: Cannot find module 'openai'

**Solution:** Run `npm install` to install dependencies

### Error: Module not found

**Solution:** Make sure you're in the correct directory:
```bash
cd d:/AI_Agent
node index.js
```

##  Adding More Cities

To add more cities, edit the `getWeatherDetails` function in `index.js`:

```javascript
function getWeatherDetails(city) {
    const cityLower = city.toLowerCase();
    
    // Add your city here
    if (cityLower === 'your_city') return 'XX °C';
    
    // ... existing cities
}
```

##  Adding New Functions

To add more capabilities:

1. Define the function:
```javascript
function myNewFunction(param) {
    // Your logic here
    return result;
}
```

2. Add detection in the main chat function:
```javascript
if (isNewTypeQuery(userInput)) {
    // Call your function
}
```

##  License

ISC License

##  Author

VIRENDRA CHOUKIKAR 

##  Acknowledgments

- OpenAI for the API
- Node.js for the runtime environment

#

