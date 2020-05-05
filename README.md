
# Pet Adoption MVP

Project: Create a platform to help shelters manage and promote pet adoptions,

To run project, Download from git and install dependencies with  ```yarn ```
Then Run app with ```yarn start```
            
The App is a conceptual design of the Dashboard page for the
Platform. The data is loaded by redux with a slight delay to 
simulate Get request loading time. Redux is built to handle 
multiple reducers with Scalability in mind. The app is bootstrapped
with the create-react-app librabry to decrease development times.
Future versions of the app would preferably have Routing, 
Testing, and a custom webpack4 configuration for a better build
times and bundle size.

## User Story
  The project is split between two User Stories: <br />
   **1. Person (Pet Adopter)**
    
        | User (Person) |     Actions           | Story Ending  |
        | ------------- | --------------------- | ------------- |
        | Pet Adopter   | 1. Create Profile     |  Adopts pet   |
        |               | 2. Find a Pet         |               |
        |               | 3. Contact Shelter    |               |
        |               | 4. Apply for adoption |               |
        
   **2. Shelter**
    
        | User (Shelter)|     Actions           | Story Ending |
        | ------------- | --------------------- | ------------- |
        | Shelter       | 1. Create Profile     |  Adopts pet   |
        |               | 2. Add pets to DB     |               |
        |               | 3. Promote pet to     |               |
        |               |    Persons            |               |
        |               | 4. Take Adoption      |               |
        |               |    Applications       |               |
        
## Necessary Components/Features for each User<br />
  &nbsp;**Person:**<br />
         1. Landing Page<br />
          &nbsp; &nbsp;- Provides platform information, Mission, Help and Contact Details<br />
         2. Person Signup/Login Page<br />
          &nbsp; &nbsp;- User should be able to create a personal account and login<br />
         3. Dashboard<br />
          &nbsp; &nbsp;- Displays all Pets depending preferably with filter options <br />
          &nbsp; &nbsp; &nbsp; i.e distance to user, pet preferences, etc. <br />
         4. View Pet/Shelter Info Page<br />
          &nbsp; &nbsp;- Displays further information about the pet that are not displayed<br />
          &nbsp; &nbsp; &nbsp; on the dashboard page<br />
          &nbsp; &nbsp;- Displays shelter's contact details<br />
          &nbsp; &nbsp;- Future development can include on site adoption application<br />
      
   **Shelter**<br />
         1. Landing Page<br />
           &nbsp; &nbsp;- Provides platform information, Mission, Help and Contact Details<br />
         2. Shelter Signup Page<br />
           &nbsp; &nbsp;- User should be able to create a personal account and login<br />
         3. Dashboard<br />
           &nbsp; &nbsp;- View all pets that exists on the platform<br />
          4. Add Pet Page <br />
           &nbsp; &nbsp;- User should be able to Add a new pet<br />
         5. Shelter Home Page<br />
           &nbsp; &nbsp;- Displays a dashboard with all the pets created by the user<br />
           &nbsp; &nbsp;- Items on dashboard should have buttons to delete, add, or link<br />
           &nbsp; &nbsp;&nbsp;  to a page to manage an existing pet's information<br />
         4. Manage Pet Information Page<br />
           &nbsp; &nbsp;- This could just be AddPetPage but with pre-inputed fields with <br />
           &nbsp; &nbsp;&nbsp;  existing pet information
            
**Technology**<br />
         &nbsp;Front End:<br />
                 &nbsp; &nbsp; Framework:                  **React.js**<br />
                 &nbsp; &nbsp; State management:           **React-Redux**<br />
                 &nbsp; &nbsp; Design System/Library:      **Material UI/Material Design**<br />
                 &nbsp; &nbsp; Routing:                    **React-Router**<br />
                 &nbsp; &nbsp; Authentication:             **OAuth/Auth0**<br />
                 &nbsp; &nbsp; Form Handling:              **Redux-forms**<br />
                 &nbsp; &nbsp; Module Bundling:            **Webpack4**<br />
                 &nbsp; &nbsp; Testing:                    **Jest/Enzyme**<br />

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
