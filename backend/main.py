from fastapi import FastAPI
from starlette.middleware.cors import CORSMiddleware
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()

origins = [
    'http://botube-web.netlify.app/'
    'https://botube-web.netlify.app/',
    "http://localhost",
    "http://localhost:300",
]

# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=origins,
#     allow_credentials=True,
#     allow_methods=["GET"],
#     allow_headers=['Content-Type', 'application/xml']
# )

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return ("07 March 2023")
