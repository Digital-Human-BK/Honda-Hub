<div align="center">
  <img src="https://res.cloudinary.com/dio4dx3uy/image/upload/v1659945524/honda-hub/demo_sglotx.jpg" alt="Logo" width="700" style="border-radius:25px">
  </br>
  <h1 align="center" color="#48dbfb">Honda Hub</h1>
  <a align="center" href="https://honda-hub.netlify.app">View Live</a>
</div>


## Getting Started with Honda Hub App

This project has fully custom HTML, CSS and JS/JSX. No templating libraries were used, as the goal of the project is to practice everything, understand the basics, keep the dependencies as little as possible, and last but not least, to have fun :)

## Live Demo:

Visit and explore the Honda Hub app live on: ***https://honda-hub.netlify.app***

## Run it locally:

1. Download the repo on your machine.
2. Run `npm install` to install all dependencies. 
2. In the project directory, you can run `npm start`, which runs the app in the development mode.  
3. Open ***http://localhost:3000*** to view it in your browser.  

## Learn more  

### Front-end technologies

- HTML 5
- CSS 3
- React 18
- React Router DOM v6
- JavaScript ES6

### Back-end technologies

- Node JS
- Express JS
- MongoDB
- Mongoose  
- ***User password is encrypted with Bcrypt***

## Getting to know the app

The App consists of two main parts:

1. **Public, accessible by any visitor of the app**
    - Home, About, Quotes and Timeline. These pages combined in one, are informative-representational and have no dynamic data.
    - Catalog page. Uses public REST API to fetch data about any Honda car model and display it to the user.
    - Login page.
    - Register page.  

2. **Private, accessible only by registered users**
    - User Profile page. Users can either see other forum users profiles, and learn more about them, or access their own profile page.  
    When accessing their personal profile page, users are able to add information about themself, such as:  
    -What car/cars the user drive;  
    -A quote or thought that will appear under each published post;  
    -Small section about interests and hobbies.  

    If a user wants to upload a profile picture, few options will be available:  

    -Upload file from client machine.  
    -Upload via link.  
    -Remove profile picture. This option will display default picture back.  
    *-Profile page will display user's forum posts for any visitor.*  
  
    - Forum page. This is the place where registered users can share, ask or answer questions.  
    The forum is split in 3 main Categories: General discussions, Technical problems, and Meetings & events.  
    There is a `Search bar` which allows users to quickly find what they are looking for (searches for a match in the post title only).

## Contact

Email: ***biser.karadzhov@gmail.com***  

LinedIn: ***https://www.linkedin.com/in/biser-karadzhov-b03594238***

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

## Last step

Go ahead and explore.
