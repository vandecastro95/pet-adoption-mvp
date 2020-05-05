##**Pet Adoption MVP**

Project: Create a platform to help shelters manage and promote pet adoptions,
         To run project, 
            1. Download from git
            2. Install dependencies 
            ```yarn ```
            3. Run app with
            ```yarn start```
            
          The App is a conceptual design of the Dashboard page for the
          Platform. The data is loaded by redux with a slight delay to 
          simulate Get request loading time. Redux is built to handle 
          multiple reducers with Scalability in mind. The app is bootstrapped
          with the create-react-app librabry to decrease development times.
          Future versions of the app would preferably have Routing, 
          Testing, and a custom webpack4 configuration for a better build
          times and bundle size.

# User Story
  The project is split between two User Stories: 
  **1. Person (Pet Adopter)
    
        | User (Person) |     Actions           | Story Ending  |
        | ------------- | --------------------- | ------------- |
        | Pet Adopter   | 1. Create Profile     |  Adopts pet   |
        |               | 2. Find a Pet         |               |
        |               | 3. Contact Shelter    |               |
        |               | 4. Apply for adoption |               |
        
  **2. Shelter
    
        | User (Shelter)|     Actions           | Story Ending |
        | ------------- | --------------------- | ------------- |
        | Shelter       | 1. Create Profile     |  Adopts pet   |
        |               | 2. Add pets to DB     |               |
        |               | 3. Promote pet to     |               |
        |               |    Persons            |               |
        |               | 4. Take Adoption      |               |
        |               |    Applications       |               |
        
# Necessary Components for each User
  **Person:**
      1. Landing Page
          - Provides platform information, Mission, Help and Contact Details
      1. Person Signup/Login Page
          - User should be able to create a personal account and login
      2. Dashboard
          - Displays all Pets depending preferably with filter options 
            i.e distance to user, pet preferences, etc. 
      3. View Pet/Shelter Info Page
          - Displays further information about the pet that are not displayed
            on the dashboard page
          - Displays shelter's contact details
          - Future development can include on site adoption application
      
   **Shelter**
      1. Landing Page
          -Provides platform information, Mission, Help and Contact Details
      2. Shelter Signup Page
          - User should be able to create a personal account and login
      3. Dashboard
          - View all pets that exists on the platform
      4. Add Pet Page 
          - User should be able to Add a new pet
      5. Shelter Home Page
          - Displays a dashboard with all the pets created by the user
          - Items on dashboard should have buttons to delete, add, or link
            to a page to manage an existing pet's information
      4. Manage Pet Information Page
          - This could be Add Pet Page but with pre inputed fields with 
            existing pet information
            
**Technology**
   Front End:
      Framework:                  React.js
      State management:           React-Redux
      Design System/Library:      Material UI/Material Design
      Routing:                    React-Router
      Authentication:             OAuth/Auth0
      Form Handling:              Redux-forms
      Module Bundling:            Webpack4
      Testing:                    Jest/Enzyme

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
