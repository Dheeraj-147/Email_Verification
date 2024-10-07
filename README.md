Email Verification Project
This project implements an email verification system using a Django backend and a React frontend.

Project Structure
email_ver/: Django backend
email_ver/front/: React frontend
Prerequisites
Python (3.8 or newer)
Node.js (14.0 or newer)
npm (comes with Node.js)
Setup and Installation
Backend (Django)
Open a terminal and navigate to the project root:
bash
Copy code
cd path/to/email_ver
Create and activate a virtual environment (optional but recommended):
bash
Copy code
python -m venv venv
source venv/bin/activate  # On Windows use: venv\Scripts\activate
Install required Python packages:
bash
Copy code
pip install -r requirements.txt
Note: If requirements.txt is missing, install Django manually:
bash
Copy code
pip install django
Apply database migrations:
bash
Copy code
python manage.py migrate
Frontend (React)
Navigate to the frontend directory:
bash
Copy code
cd path/to/email_ver/front
Install required npm packages:
bash
Copy code
npm install
Running the Application
Start the Backend
In the email_ver directory with your virtual environment activated, run:
bash
Copy code
python manage.py runserver
The backend will start on http://localhost:8000.
Start the Frontend
In a separate terminal, in the email_ver/front directory, run:
bash
Copy code
npm start
The frontend will start on http://localhost:2374.
Accessing the Application
Open your web browser.
Go to http://localhost:2374.
You should now see the React frontend, which will communicate with the Django backend.
Troubleshooting
If you encounter CORS issues, check Django settings for proper frontend URL allowance.
Ensure both servers are running on the correct ports.
Verify the React app is configured to send requests to the correct Django backend URL.
Additional Information
For backend API documentation, refer to Backend API Docs (if available).
To access Django admin, create a superuser with:
bash
Copy code
python manage.py createsuperuser
Then visit http://localhost:8000/admin.
Contact
If you encounter any issues or have questions, please contact noreply.quantumauth@gmail.com.
