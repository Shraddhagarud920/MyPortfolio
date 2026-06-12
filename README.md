# 🚀 My Personal Portfolio Application

Welcome to my full-stack personal portfolio application! This project showcases my skills as a software developer, featuring a dynamic React frontend and a robust Spring Boot backend powered by a MySQL database.

---

## 🛠️ Tech Stack

- **Frontend:** React.js, HTML5, CSS3, JavaScript/TypeScript, Axios
- **Backend:** Java, Spring Boot (Web, Data JPA, Security)
- **Build Tool:** Maven
- **Database:** MySQL
- **Hosting:** Netlify (Frontend)

---

## 📁 Project Structure

```text
MyPortfolio/
│
├── PortfolioFrontend/      # React frontend source code and configurations
├── PortfolioBackend/       # Spring Boot backend source code, pom.xml, and scripts
└── database/               # SQL schema and database configuration templates
```

---

## 🚀 Getting Started (Local Setup)

Follow these steps to run the complete full-stack application on your computer.

### 📋 Prerequisites
Ensure you have the following installed on your system:
- **Node.js** (v18 or higher)
- **Java Development Kit (JDK)** (v17 or higher)
- **MySQL Server** (v8 or higher)
- **Maven** (optional, wrapper script included)

### 🗄️ 1. Database Setup
1. Open your MySQL terminal or workbench tool (e.g., MySQL Workbench).
2. Create a new database named `portfolio_db`:
   ```sql
   CREATE DATABASE portfolio_db;
   ```
3. Use the database and create your tables using your custom schema definitions.

### ⚙️ 2. Backend Configuration & Run (Spring Boot)
1. Navigate into the backend directory:
   ```bash
   cd PortfolioBackend
   ```
2. Open `src/main/resources/application.properties` and update the file with your local MySQL database connection details:
   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/portfolio_db?useSSL=false&serverTimezone=UTC
   spring.datasource.username=YOUR_MYSQL_USERNAME
   spring.datasource.password=YOUR_MYSQL_PASSWORD
   spring.jpa.hibernate.ddl-auto=update
   spring.jpa.show-sql=true
   ```
3. Start the Spring Boot backend server using the Maven wrapper:
   - **Windows:** `mvnw.cmd spring-boot:run`
   - **Mac/Linux:** `./mvnw spring-boot:run`
4. The server will launch and run locally on `http://localhost:8080`.

### 🌐 3. Frontend Setup & Run (React)
1. Open a new terminal window and navigate into the frontend directory:
   ```bash
   cd PortfolioFrontend
   ```
2. Install all the necessary dependencies:
   ```bash
   npm install
   ```
3. Boot up the local development web server:
   ```bash
   npm start
   ```
4. Your browser will automatically open up and display the application at `http://localhost:3000`.

---

## 🔑 Key Features
- **Project Showcase:** Dynamic section pulling projects and details from the backend database.
- **Contact Form:** Working backend endpoint to capture and handle contact messages securely.
- **Responsive Layout:** Optimized to look great on desktop monitors, tablets, and smartphones alike.
