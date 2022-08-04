# BL-backend

> Backend tasks(api) for Bridge Labs ([live documentation](https://bl-api-task.herokuapp.com/api-docs/#/))

## ⚡ Prerequisites

- Node and npm
  - Install using this tutorial for [linux/mac](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) and [windows](https://phoenixnap.com/kb/install-node-js-npm-on-windows)
  
## 🔧 Setting up the Project

1. Clone the repository in preferred directory on your computer

   ```bash
   git clone <project-url>
   ```
2. Enter project directory
  
   ```bash
   cd BL-backend
   ```
3. Install dependencies

    ```bash
    npm install
    ```
4. Set up .env file
  
    ``` bash
    touch .env
    ```
5. Define project's required environment variables in .env file

    ```env
    MONGODB_URL=<mongodb connection string>
    PORT=5000
    MAIL_EMAIL=<email, preferable gmail>
    MAIL_PASSWORD=<will have to do some extra setting up to get this ready>
    CLOUD_NAME=<cloudinary name>
    CLOUD_API_KEY=<cloudinary api keu>
    CLOUD_API_SECRET=<cloudinary api secret>
    JWT_SECRET=<jwt secret string>
    ```
    use [this](https://stackoverflow.com/a/72477193/19234969) to set up mail password 
    
## 🔮 Running the project

1. Start the server 

   ```bash
   nodemon server 
   ```
   Or
   
   ```bash
   node server
   ```
### 🙌 Done!

## Notes
- It'll be better to test the endpoints from an API platform like [Postman](https://www.postman.com/) or [Insonmia](https://insomnia.rest/).
  Using the swagger ui can cause uncontrolled errors for now and it'll run only when using a local server.
