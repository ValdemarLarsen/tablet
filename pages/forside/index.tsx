import type { NextPage } from 'next';
import Navbar from '../comp/Navbar';
import { Provider } from 'react-redux'
import store from './../../state/store';


const Om: NextPage = () => {
  return (
    <Provider store={store}>
      <div>
        <Navbar />  
      </div>
    </Provider>
  );
}

export default Om;
