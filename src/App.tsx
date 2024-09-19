import './App.css';
import Image from './HBB.jpg';

const mainStyle = {
  display: 'flex',
  justifyContent: 'center',
  background: 'rgb(30,30,30)',
};
const imageStyle = {
  maxWidth: '200%',
};

function App() {
  return (
    <>
      <main style={mainStyle}>
        <img src={Image} style={imageStyle} />
      </main>
    </>
  );
}

export default App;
