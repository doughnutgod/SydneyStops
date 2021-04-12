# Sydney Stops Starter Kit - App Development #

# Contributor Expo ID: GeneralDonut #

This is the Readme for the Application of Sydney Stops this is intended to enable a developer or reviewer to properly examine the application to either add on or audit. There are a variety of API's utilized and documented within the application. The limitations and experiments of other API's in the application with further be documented also.

# Published Expo Link #

https://expo.io/@generaldonut/projects/SydneyStops

# API's Utilized #
* React Native Community Icons
* React Navigation
* Expo
* React
* Formik
* Yup
* Expo Image Picker
* Expo Linear Gradient (could not function)
* React Native Linear Gradient (could not function)

# THERE ARE COMMENTS SEEDED IN THE APPLICATION #

# Code Flow #

The App first initialises at the 'WelcomeScreen' this screen contains a background image of a local sydney beach and some text with a simple icon. It progresses from here through Registration or Login. In Registration the user has the inputs to submit an Email, Name and Password for user generation (Does not currently do this), the error messages will clear only once the field has satisfied for user clarity. There is finally a clickable text at the bottom that enables a user navigation out of the screen if accidentally navigated to that screen. In Login there is the Email and password fields for user input, again the errors will only dissapate if the user has satisfied the arguments involved. There is clickable text incase a user has entered the wrong screen from welcome, further Yup API is used to validate the fields, if validated you move to Home. In Home your user identity is established and recognised by the application and will display it in centre-top. There are 3 buttons on this screen with the text centred for easy recognition, These buttons will direct to Locations, My Locations(favorites) and Logout respectively. There is also the Tab Navigation that exists on every screen outside of Add Location from this point forward, The tab navigator leads to Favorites, Home, Locations and New location respectively. In both My locations and locations there is a list of locations that can be filtered by a top down categorical filter, the only separation that the two screens have is the add location button in Favorites/My Location. In New Location there is a form that is not powered by any API to enter and validate a new location submition. Again all errors will disperse once satisified. In both list screens you can select a component and view that specific components information including Name, Date, City, Category, User and Image.

# Screen Connection Routes #

Welcome -> Login
        -> Registration

Registration -> Welcome

Login -> Registration
      -> Home

Home -> Favorite
     -> Locations
     -> Home
     -> New Location
     -> Logout

Locations -> Favorite
          -> Locations
          -> Home
          -> New Location
          -> Location Info

Favorites -> Favorite
          -> Locations
          -> Home
          -> New Location
          -> Location Info

NewLocation -> Home

Location Info -> Home

# File Purposes #

# Known Issues #

No proper logout authentication system, currently using a programmatic way to rebuild the app via dev tools.

Need to touble tap home after book submission

Must refresh list after every list filter.

HandleDelete and RemoveLocation are co-dependant, Unknown as of why right now. But they work independantly in different methods but to properly work both need to exist.

Users do not have the ability to register then login, must fix this error. Stems from initial attempts to instantiate this, for submission deadline it will not be available.
