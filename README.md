<h1 style="font-family: Arial, sans-serif;">Lost and Found Website</h1>

<p style="font-family: 'Times New Roman', serif;">A full-stack web application built with the MERN stack (MongoDB, Express.js, React.js, Node.js) that helps users report and find lost or found items. The platform provides a seamless experience to post lost/found items, search through the database, and receive real-time notifications for matched items.</p>

<h2 style="font-family: Arial, sans-serif;">Key Features</h2>

<ul style="font-family: 'Courier New', monospace;">
  <li>User Authentication: Secure sign-up and login system using JWT-based authentication.</li>
  <li>Post Lost/Found Items: Users can add details like descriptions, images, and contact information for lost or found items.</li>
  <li>Search Functionality: Advanced filters to search for items based on category, location, and date.</li>
  <li>Real-Time Notifications: Instant notifications to users when their lost/found item matches an existing post.</li>
  <li>Admin Panel: An admin interface to manage and verify posts, ensuring integrity.</li>
  <li>Responsive Design: Fully responsive interface optimized for mobile and desktop devices.</li>
</ul>


<h2 style="font-family: Arial, sans-serif;">Installation/ setup</h2>
<h3 style="font-family: Arial, sans-serif;">Clone the repository</h3>

bash
Copy code
git clone https://github.com/ErAniketKumar/Lost_n_Found_web.git
cd lost-and-found-website
Install Dependencies
Navigate to both the frontend and backend folders and install the required packages:

bash
Copy code
cd frontend
npm install

cd ../backend
npm install
Set up Environment Variables
Create a .env file in the backend folder and add the following:

makefile
Copy code
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
Run the Application
Open two terminal windows/tabs, one for the frontend and one for the backend:

bash
Copy code
# In the frontend folder:
npm start

# In the backend folder:
npm run dev
Visit the App
Open your browser and go to http://localhost:5000 to view the app.
