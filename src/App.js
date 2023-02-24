import Header from './components/Header/Header.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Profile from './components/content/Profile/Profile.jsx';
import Message from './components/content/Message/Message.jsx';
import {Route, Routes, Link} from "react-router-dom";

import k from './style/main.module.css';
import News from './components/content/News/News.jsx';
import Settings from './components/content/Settings/Settings.jsx';
import { addMessage } from './redux/state.js';



function App(props) {
  return (
    <div className={k.wrapper}>
      <Header />
      <Navbar />
      <div className={k.wrapper__content}>
        <Routes>
          <Route path='/' element={<Profile />} />
          <Route path='/profile' element={<Profile />}/>
          <Route path='/message' element={<Message dialog={props.state} addMessage={props.addMessage}/>}/>
          <Route path='/news' element={<News />} />
          <Route path='/settings' element={<Settings />} />

        </Routes>
      </div>
    </div>
  );
}

export default App;
