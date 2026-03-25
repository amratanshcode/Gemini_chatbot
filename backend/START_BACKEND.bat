@echo off
echo Installing packages...
pip install -r requirements.txt
echo.
set /p GEMINI_API_KEY="AIzaSyCr_qSOOkKlFFBmLSyCrL-fxKjxluXHlks"
echo.
echo Backend starting on http://localhost:8000
echo Keep this window OPEN!
uvicorn main:app --reload --port 8000
pause


