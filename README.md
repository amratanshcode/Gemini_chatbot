# Gemini Chatbot

A full-stack conversational AI application powered by Google's Gemini API. This project demonstrates a clean separation between frontend and backend, featuring a modern React-based user interface and a Python-based API server.

## Overview

Gemini Chatbot is a web application that provides an intuitive interface for interacting with Google's state-of-the-art language model. Users can engage in real-time conversations while enjoying a responsive, user-friendly experience designed with modern web technologies.

## Features

- **Real-time Chat Interface** – Seamless, interactive conversation experience
- **Google Gemini Integration** – Leverage cutting-edge AI capabilities
- **Modern Responsive Design** – Optimized for desktop and mobile devices
- **Minimal Configuration** – Simple setup with straightforward deployment
- **Secure API Handling** – Backend securely manages API credentials

## Technology Stack

| Layer | Technologies |
|-------|--------------|
| **Frontend** | React, Vite, JSX, CSS3 |
| **Backend** | Python, Flask/FastAPI |
| **Styling** | CSS (48.1% of codebase) |
| **Build Tools** | Vite, Node.js |
| **API** | Google Gemini API |

## Project Structure

```
Gemini_chatbot/
├── backend/
│   ├── main.py                 # Core backend server logic
│   ├── requirements.txt        # Python dependencies
│   └── START_BACKEND.bat       # Windows batch script to launch backend
└── frontend/
    ├── index.html              # HTML entry point
    ├── package.json            # Node dependencies and scripts
    ├── vite.config.js          # Vite configuration
    └── src/
        ├── main.jsx            # React application entry
        ├── App.jsx             # Main application component
        ├── index.css           # Global styles
        └── App.css             # Component-specific styles
```

## Installation & Setup

### Prerequisites

- **Node.js** (v14 or higher) and npm
- **Python** (v3.8 or higher) and pip
- A free API key from Google AI Studio

### Step 1: Obtain Gemini API Key

1. Visit [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Click "Create API Key"
3. Copy your API key and keep it secure

### Step 2: Configure Backend

1. Navigate to the `backend/` directory
2. Install Python dependencies:
   ```bash
   pip install -r requirements.txt
   ```
3. **Windows Users:** Double-click `START_BACKEND.bat`
   - You will be prompted to enter your API key
   - Keep the backend window open during your session

**Alternative (Command Line):**
```bash
python main.py
```

### Step 3: Configure Frontend

1. Open a new terminal and navigate to the `frontend/` directory
2. Install Node dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

### Step 4: Access the Application

Open your browser and navigate to:
```
http://localhost:3000
```

The application is now ready to use!

## Usage

1. Type your message in the input field
2. Press Enter or click the Send button
3. Wait for Gemini to generate a response
4. Continue the conversation naturally
5. Messages and responses appear in the chat history

## Development

### Frontend Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Backend Structure

The backend handles:
- API key management and validation
- Communication with Google Gemini API
- Request/response processing
- Error handling and logging

## Browser Support

This application works on all modern browsers:
- Chrome/Edge 105+
- Firefox 104+
- Safari 15.6+

## API Integration

The application securely communicates with:
- **Google Gemini API** – Provides the AI conversation engine
- **Backend Server** – Acts as a proxy for API requests

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Backend fails to start | Ensure Python is installed and `requirements.txt` is in the correct directory |
| API key not recognized | Verify your API key is correct and valid from Google AI Studio |
| Frontend won't load | Check that Node.js is installed and npm dependencies are properly installed |
| Connection errors | Ensure both backend and frontend are running on their respective ports |

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Make your changes with clear, descriptive commits
4. Push to your branch (`git push origin feature/your-feature`)
5. Open a Pull Request with a detailed description

## License

This project is open source and available for personal and educational use.

## Support

For issues or questions:
- Check existing issues on the GitHub repository
- Create a new issue with a detailed description
- Include steps to reproduce and your environment details

---

**Built with ❤️ using React and Python**