import type { NextPage } from 'next';
import Navbar from '../comp/Navbar';
import store from './../../state/store';
import { Provider } from 'react-redux';


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
