from fastapi import FastAPI
from starlette.middleware.cors import CORSMiddleware


app = FastAPI()

orgins = {
    'http://localhost:3000'
}

app.add_middleware(
    CORSMiddleware,
    allow_origins=orgins,
    allow_credentials=True,
    allow_methods=["GET"],
    allow_headers=['Content-Type', 'application/xml']
)

@app.get("/")
async def root():
    return ("05 March 2023")
