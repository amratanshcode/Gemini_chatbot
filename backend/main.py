from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import google.generativeai as genai
import os


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

API_KEY = "zaSyCr_qSOOkKlFFBmLSyCrL-fxKjxluXHlks"
genai.configure(api_key=API_KEY)
model = genai.GenerativeModel("gemini-2.5-flash")


sessions = {}


class ChatRequest(BaseModel):
    session_id: str
    message: str


@app.post("/new-session")
def new_session():
    import uuid
    sid = str(uuid.uuid4())
    sessions[sid] = model.start_chat(history=[])
    return {"session_id": sid}

@app.post("/chat")
def chat(req: ChatRequest):
    if req.session_id not in sessions:
        sessions[req.session_id] = model.start_chat(history=[])
    try:
        response = sessions[req.session_id].send_message(req.message)
        return {"reply": response.text}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
