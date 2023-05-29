# SportInterest Frontend Documentation
This documentation provides an overview of the frontend code structure and routing configuration for the SportInterest application

Folder Structure
The frontend code is organized in the following folder structure:

```txt
/src
  |- App.css
  |- App.js
  |- logo.svg
  |- Pages
      |- HomePage.js
      |- ProfilePage.js
      |- LoginPage.js
      |- VerificationPage.js
      |- RegisterPage.js
App.css: This file contains the CSS styles specific to the App component.
App.js: This file is the entry point of the application and contains the main App component.
logo.svg: This file represents the logo of the application.
Pages: This folder contains individual page components representing different routes in the application.
Routing Configuration
The routing in the SportInterest application is handled using the react-router-dom library. The routing configuration is as follows:
```

```js
Copy code
import { Routes, Route, Link } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import ProfilePage from './Pages/ProfilePage';
import LoginPage from './Pages/LoginPage';
import VerificationPage from './Pages/VerificationPage';
import RegisterPage from './Pages/RegisterPage';

function App() {
  return (
    <div>
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/verify-email' element={<VerificationPage />} />
        <Route />
      </Routes>
    </div>
  );
}

export default App;
```

The Routes component is used to define the routing configuration.
Each Route component specifies a path and its corresponding component to render.
The element prop is used to define the component to render for a specific route.
The exact prop is used for the root route (/) to ensure it matches only the exact path.
Pages
The application consists of several page components representing different routes. Here are the page components available in the SportInterest application:

HomePage: This component represents the home page of the application.
ProfilePage: This component represents the profile page of the user.
LoginPage: This component represents the login page.
VerificationPage: This component represents the email verification page.
RegisterPage: This component represents the registration page.
Each page component is responsible for rendering the respective content for its corresponding route.

This documentation provides an overview of the frontend code structure and routing configuration for the SportInterest application. For detailed information about the functionality and implementation of each component, please refer to the component files or consult the frontend developers.
