# terraglamp
TerraGlamp site

## start devalop

### backend

    uvicorn main:app --reload --host 0.0.0.0 --port 8888

### frontend

    cd ./frontend
    npm run dev

### run db

    sudo docker-compose -f docker-compose.mongo-debug.yml up -d