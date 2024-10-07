# Email Verification Project

This project implements an email verification system using a Django backend and a React frontend.

## Project Structure
- `email_ver/`: Django backend
- `email_ver/front/`: React frontend

## Prerequisites
- Python (3.8 or newer)
- Node.js (14.0 or newer)
- npm (comes with Node.js)

## Setup and Installation

### Backend (Django)
1. Open a terminal and navigate to the project root:
        cd path/to/email_ver
2. Create and activate a virtual environment (optional but recommended):
        python -m venv venv
        source venv/bin/activate  # On Windows use: venv\Scripts\activate
3. Install required Python packages:
        pip install -r requirements.txt
Note: If `requirements.txt` is missing, install Django manually:
        pip install django
4. Apply database migrations:
        python manage.py migrate


### Frontend (React)
1. Navigate to the frontend directory:
        cd path/to/email_ver/front
2. Install required npm packages:
        npm install


## Running the Application

### Start the Backend
1. In the `email_ver` directory with your virtual environment activated, run:
        python manage.py runserver
The backend will start on `http://localhost:8000`.

### Start the Frontend
1. In a separate terminal, in the `email_ver/front` directory, run:
        npm start

The frontend will start on `http://localhost:2374`.

## Accessing the Application
1. Open your web browser
2. Go to `http://localhost:2374`
3. You should now see the React frontend, which will communicate with the Django backend

## Troubleshooting
- If you encounter CORS issues, check Django settings for proper frontend URL allowance.
- Ensure both servers are running on the correct ports.
- Verify the React app is configured to send requests to the correct Django backend URL.

## Additional Information
- For backend API documentation, refer to [Backend API Docs](link-to-your-api-docs) (if available).
- To access Django admin, create a superuser with `python manage.py createsuperuser` and visit `http://localhost:8000/admin`.

## Contact
If you encounter any issues or have questions, please contact noreply.quantumauth@gmail.com.