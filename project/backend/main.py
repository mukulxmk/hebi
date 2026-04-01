from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # dev only
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

try:
    @app.get("/")
    def home():
        print("Server started")
        return {"message": "Backend is running 🚀"} 
except: 
    print("Error in starting server")

@app.get("/api/users")
def get_users():
    return [
        {"id": 1, "name": "Mukul"},
        {"id": 2, "name": "Alex"}
    ]