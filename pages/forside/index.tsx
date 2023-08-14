import type { NextPage } from 'next';
import Navbar from '../comp/Navbar';

const Om: NextPage = () => {
  return (
    <div>
      <div>
        <Navbar />
        {/* Resten af siden */}
      </div>
      <h1>Om os</h1>
      <p>Her kan du læse mere om vores firma og vores mission.</p>
    </div>
  );
}

export default Om;
