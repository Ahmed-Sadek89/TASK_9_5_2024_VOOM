full stack app [VOOM TASK]

Documentation: https://documenter.getpostman.com/view/18043505/2sAXjQ2qf2

((Instructions on setting up the environment.))
- git clone https://github.com/Ahmed-Sadek89/TASK_9_5_2024_VOOM.git
- cd TASK_9_5_2024_VOOM
- install frontend dependencies: npm install
- install backend dependencies: cd server -> npm install
- create .env in
-- frontend :
---- NEXT_PUBLIC_BACKEND_LINK=http://localhost:4000/api
---- SECRET_KEY="your-super-secure-and-long-secret-key-here-123456"
---- IMAGE_BACKEND_LINK=http://localhost:4000
-- backend : cd server then 
---- PORT=4000
---- JWT_SECRET_KEY="JWT_SECRET_KEY_TEXT"
---- IMAGE_BACKEND_LINK=http://localhost:4000


((Steps to run the app.))
- create .env in
-- frontend :
---- NEXT_PUBLIC_BACKEND_LINK=http://localhost:4000/api
---- SECRET_KEY="your-super-secure-and-long-secret-key-here-123456"
---- IMAGE_BACKEND_LINK=http://localhost:4000
-- backend : cd server then 
---- PORT=4000
---- JWT_SECRET_KEY="JWT_SECRET_KEY_TEXT"
---- IMAGE_BACKEND_LINK=http://localhost:4000
- start running the project
-- frontend:  npm run dev
-- backend: cd server ,  npm run start and npx tsc --w(for get the dist folder written un javaScript)



((Instructions for running tests.))
-cd server then npm test

((An overview of the project structure.))
- The project contain the server inside it in folder(Server)
-frontend 
--src
---app contain all pages and routes organization
---components contain layout and static code that in some pages like header and also the sort and pagination components
---store contain the state managements for the project
---ui contain genaric components
---mock contain project data before get it from the server
---lib contain generic functions
---type.ts data types
--public contain static images
--node_modules contain project dependencues

-backend 
--src contain the project written in typescript
---index.ts root file for the project
---test contain testing functions
---route project API routes
---model contain schema and sample of data for each entities
---service contain model functions like create update delete read and more
---controller contain the API response
---config for project uploading functions
---uploads for project uploaded media


((Instructions on how to upload files.))
-The project only apply image types.
-make sure that images is uploaded in server/uploads
-the uploaded image is store in name like date-reali_image_name.extn
-don`t reomve this folder