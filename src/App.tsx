import './App.css';
import Image from './HBB.jpg';

const mainStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',  // 세로 중앙 정렬
  height: '100vh',       // 화면 전체 높이 설정
  background: 'rgb(0, 0, 0)',  // 전체 배경을 검은색으로 변경
  margin: 0,
};

const imageStyle = {
  maxWidth: '100%',     // 이미지 크기를 화면 너비에 맞추기 (오버스케일 방지)
  height: 'auto',       // 이미지 비율을 유지하면서 크기 조정
};

function App() {
  return (
    <>
      <main style={mainStyle}>
        <img src={Image} style={imageStyle} alt="Main" />
      </main>
    </>
  );
}

export default App;

/*
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
*/
