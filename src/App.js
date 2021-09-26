  
// import React from 'react';
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import ToDo from './components/todo/ToDo.js';
// import SettingsProvider from './context/settings';
// import Header from './components/header/Header';





// export default class App extends React.Component {
//   render() {
//     return (
//       <SettingsProvider>
//         <Header />
//         <ToDo />
//       </SettingsProvider>
//     );
//   }
// }


import React, { useContext } from "react";
import ToDo from "./components/todo/ToDo";
import SettingsContext from "./context/settings";
import Auth, { AuthContext } from "./context/auth";
import { If, Else, Then } from "react-if";
import "./App.css";
import Sign from "./components/sign/Sign";






function App() {
  const { loggedIn } = useContext(AuthContext);
  return (
    <>




      <Auth>



        <If condition={loggedIn == true}>
          {console.log("from app comp",loggedIn)}
          <Then>
            <SettingsContext>

              <ToDo />


            </SettingsContext>
          </Then>
          <Else>
            <Sign />


          </Else>
        </If>
      </Auth>
    </>
  );
}
















export default App;
