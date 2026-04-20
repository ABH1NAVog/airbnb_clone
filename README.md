🏡 Airbnb Clone (React + Vite)

A modern Airbnb-inspired web application built using React and Vite, featuring dynamic property listings fetched from an API and rendered as reusable UI components.

🚀 Features

✨ Dynamic property cards from API
✨ Clean and responsive UI
✨ Component-based architecture
✨ Fast performance with Vite
✨ Reusable card system
✨ Modern React hooks (useState, useEffect)

🛠️ Tech Stack
Frontend: React ⚛️
Build Tool: Vite ⚡
Styling: CSS
API Hosting: nPoint API
Image Hosting: Cloudinary
📂 Project Structure
src/
│
├── components/
│   ├── Navbar.jsx
│   ├── Card.jsx
│   ├── Row.jsx
│   ├── HeartButton.jsx
│
├── style/
│   ├── onePlaceRow.css
│
├── App.jsx
├── main.jsx
⚙️ Installation & Setup
1. Clone the repository
git clone https://github.com/your-username/airbnb-clone.git
2. Navigate to project folder
cd airbnb-clone
3. Install dependencies
npm install
4. Run the development server
npm run dev
🔄 How It Works (Core Logic)
The app fetches data from an API using useEffect
Data is stored in state using useState
Each property is rendered dynamically using the Card component
The Row component maps over API data and passes props to cards
🧠 Example Logic
useEffect(() => {
  fetch("YOUR_API_URL")
    .then(res => res.json())
    .then(data => setPlaces(data));
}, []);
{places.map((place) => (
  <Card key={place.id} {...place} />
))}
📸 UI Preview
Property cards with images
Title, location, price, rating
Wishlist (heart button)
📌 Future Improvements

🚧 Add routing (React Router)
🚧 Add authentication
🚧 Add filters & search
🚧 Improve mobile responsiveness
🚧 Backend integration

🤝 Contributing

Feel free to fork this repo and contribute! Pull requests are welcome.

📄 License

This project is open-source and available under the MIT License.
