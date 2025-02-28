### **Monument Gallery 🏛️**  
A simple React-based gallery to explore, add, edit, and delete monument information. The project uses `json-server` to store and fetch monument data dynamically.

---

## **🚀 Features**  
✅ View a list of monuments with images and details  
✅ Search for a monument by name  
✅ Add a new monument with name, description, city, and image  
✅ Edit monument details inline  
✅ Delete a monument  
✅ Uses **json-server** to store monument data  

---

## **🛠️ Installation & Setup**  

### **1️⃣ Clone or Download the Project**  
If you haven’t already, download the project or clone it:  
```sh
git clone https://github.com/your-username/monument-gallery.git
cd monument-gallery
```

### **2️⃣ Install Dependencies**  
Ensure you have **Node.js** installed, then run:  
```sh
npm install
```

### **3️⃣ Start JSON Server**  
This project uses `json-server` to store monument data in `monuments.json`.  
Run the following command to start the mock backend:  
```sh
npx json-server --watch monuments.json --port 5000
```

### **4️⃣ Start the React App**  
Open another terminal and run:  
```sh
npm start
```
The app will open in your browser at `http://localhost:3000`.

---

## **📂 Project Structure**  
```
monument-gallery/
│── src/
│   ├── components/
│   │   ├── MonumentGallery.js  # Main component
│   ├── assets/
│   ├── App.js
│   ├── index.js
│── monuments.json  # Stores monument data
│── package.json
│── README.md
│── .gitignore
```
