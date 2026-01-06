# DeepThought Frontend Assignment

This project is a frontend implementation of the **DeepThought Learning Platform**, developed as part of the assignment.  
The project is divided into **two tasks**:

- **Task 1:** Convert Figma design into pixel-perfect HTML & CSS
- **Task 2:** Add dynamic functionality by rendering data using JSON and JavaScript with reusable components

---

## 🔹 Tech Stack Used

- HTML5
- CSS3
- JavaScript (Vanilla JS)
- JSON (for dynamic data rendering)

---

## 🔹 Task 1: Figma to Code (Static UI)

In Task 1, the complete Figma design was converted into responsive and structured HTML & CSS.

### Implemented UI Components:
- Header with logo, icons, and profile
- Journey Board (Collapsible & Expandable Sidebar)
- Notice Board
- Task Sections:
  - Technical Project Management (Video Asset)
  - Threadbuild
  - Structure Your Pointers
  - 4SA Method
- Floating Action Buttons

✔ Pixel-aligned layout  
✔ Clean class naming  
✔ Reusable CSS styles  

---

## 🔹 Task 2: Dynamic Functionality (JSON Rendering)

In Task 2, static content was replaced with **dynamic rendering using JSON data**.

### Key Features:
- Project data fetched from JSON
- Task → Asset hierarchy followed
- Reusable JavaScript functions for asset rendering
- Dynamic rendering of:
  - Video assets
  - Input/text assets
  - Article content
- Each section renders data based on `asset_type` and `asset_content_type`

✔ Reusable components  
✔ Clean separation of data & UI  
✔ Scalable architecture  

---

## 🔹 Project Structure
        ├── index.html
        ├── style.css
        ├── script.js
        ├── data.json
        └── images/

---

## 🔹 How to Run the Project

1. Clone the repository - git clone  https://github.com/Mishkat281/DT-Web-Development-Assignment.git
2. Open `index.html` in any modern browser  
3. Ensure `data.json` is in the same directory for dynamic rendering

---

## 🔹 JSON Data Source

Project data follows a **three-level hierarchy**: Project → Task → Assets

Each asset is rendered dynamically using reusable JS functions.

---

## 🔹 Highlights

- Follows best frontend practices
- Reusable and modular JavaScript
- Matches provided Figma design closely
- Clean, readable, and maintainable code

---

## 🔹 Author

**Mishkat Shaikh**  
Frontend Developer  

---

## 🔹 Note

This project was built as part of the **DeepThought Frontend Assignment**.
