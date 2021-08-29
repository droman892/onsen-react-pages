![Onsen React Pages](https://user-images.githubusercontent.com/25372739/131240628-0a8c0378-5876-4c22-b2ff-4c42741b08df.JPG)

This is a form application [primarily] for mobile applications, using the [Onsen UI API](https://onsen.io/).

<p align="center"> :older_woman: :iphone: :dollar: :memo: :house_with_garden: :car: :older_man: </p>

## Description

<p align="center"> This React form application was built mobile-first with the Onsen UI API for smooth compatibility across both Android and iOS devices. </p>

<p align="center"> Users are able to interact with the controlled form features (i.e., input, checkbox, radio, select-dropdown, and button) on Page1.js with solely function components.  The bulk of state is managed in App.js with useState() hooks.  When the user clicks the "Review" link describing the button, React Router navigates the view to Page2.js, where the changed state of the form is displayed. Changes to the state of the form are outputted on the console upon entering the display page.</p>

<p align="center"> Regarding UX, users enjoy specially selected fonts (i.e, Montserrat, Roboto Slab, Roboto) through the Google Fonts API.  Additionally, the colors #5CDBD7 and #292829 were curated to give users the feeling of trust and security when submitting their information.  To complete the form submission process, upon clicking the "Submit" button, a toast feature appears, showing, "Thanks for your submission!"</p>

## Preview

![Onsen React Pages - GIF](https://user-images.githubusercontent.com/25372739/131264289-89dd88e8-b6df-4c76-b638-5e4a495eb738.gif)

[Live Preview](http://david-roman.tech/onsen-react-pages/)

## Business Use Case

- Individual/Business needs the front end experience for a mobile form application

## Status

<p align="center"> <img src="https://img.shields.io/tokei/lines/github/droman892/react-scoreboard" /> </p>

<p align="center"> <img src="https://img.shields.io/github/languages/count/droman892/react-scoreboard" /> </p>

<p align="center"> <img src="https://img.shields.io/github/repo-size/droman892/react-scoreboard" /> </p>

## Download and Installation

- Clone the repo: `git clone https://github.com/droman892/onsen-react-pages.git` 
## Usage

After the project files are downloaded, in the terminal, run `npm install` to install the dependencies, followed by `npm start` to start the application.  Once the project has loaded on to the browser, feel free to edit it as you see fit using `./src/index.css` and the component files in `./src/components`.

## Roadmap

This React form application is an on-going project, open to contributions and critique.  Functionality that would appropriately flesh out the application include the following:
1) connect the form data in a database
2) optimize the radio feature
3) include media queries for added responsiveness
4) incorporate form validation
5) use the React context API instead of prop-drilling

## Bugs and Issues

See a bug or an issue with this project? [Open a new issue](https://github.com/droman892/onsen-react-pages/issues) here on GitHub.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## About

This React form application is maintained by [David Roman](https://www.linkedin.com/in/david-roman-front-end-engineer/).

## License

[MIT](https://choosealicense.com/licenses/mit/)
