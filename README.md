🚦 AI-Powered Road Safety & Emergency Response System



📌 Overview

The AI-Powered Road Safety & Emergency Response System is a smart IoT + Web platform designed to:

Detect road accidents in real time
Send alerts to Emergency Control Rooms
Help municipal authorities monitor road conditions

📍 Developed for:

Coimbatore Corporation
Emergency Control Room
🎯 Features
🚨 Emergency Control Room Dashboard
📡 Real-time accident alerts
📍 Live location tracking
🖼️ Accident image preview
⚠️ AI-based damage severity level
⏱️ Faster emergency response handling
🏙️ Corporation Dashboard
🕳️ Pothole detection with location mapping
🔥 Accident heatmap visualization
📊 Insights for road safety planning
🛣️ Helps prioritize road maintenance


🧠 System Architecture
[ Sensors + Camera + GPS ]
            ↓
     Raspberry Pi
            ↓
        Node.js Server
            ↓
         MongoDB
            ↓
   Web Dashboards (Admin / Control Room)
            ↓
        Firebase Alerts

        
⚙️ Tech Stack
💻 Frontend
HTML
CSS
JavaScript
🖥️ Backend
Node.js (API & server logic)
🗄️ Database
MongoDB
📡 Hardware
Raspberry Pi
Camera Module
GPS Module
☁️ Cloud & Services
Firebase (real-time notifications)
🤖 AI/ML
Damage detection model
Accident severity classification


🔄 Workflow
🚗 Accident / pothole detected via sensors & ML
📷 Image + 📍 GPS data captured using Raspberry Pi
📡 Data sent to Node.js backend
💾 Stored in MongoDB
📊 Dashboards update in real-time:
Emergency Control Room → gets alerts
Corporation → sees potholes & heatmaps
📊 Use Cases
🚑 Emergency response optimization
🛣️ Smart road maintenance
📉 Accident hotspot identification
🏙️ Smart city development



🚀 Getting Started
🔧 Prerequisites
Node.js installed
MongoDB running
Raspberry Pi setup (optional for hardware testing)
⚡ Installation
# Clone the repo
git clone https://github.com/your-username/road-safety-system.git

# Navigate into project
cd road-safety-system

# Install dependencies
npm install

# Run server
npm start
🔐 Environment Variables

Create a .env file:

MONGO_URI=your_mongodb_connection
FIREBASE_API_KEY=your_firebase_key
PORT=5000
📡 API Endpoints (Sample)
Method	Endpoint	Description
POST	/alert	Send accident alert
GET	/alerts	Fetch all alerts
GET	/heatmap	Get accident heatmap data
POST	/pothole	Upload pothole detection
🚀 Future Enhancements
📱 Mobile application integration
🚑 Auto ambulance dispatch system
🚦 Traffic prediction using AI
🧠 Advanced accident prediction model
👨‍💻 Contributors
Kalidass Lakshmipathi
Team Members (Add names here)
📜 License

This project is licensed under the MIT License.

⭐ Support

If you like this project:

⭐ Star the repo
🍴 Fork it
🛠️ Contribute
