import { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LeftSidebar from './components/LeftSidebar';
import Content from './components/Content';
import RightSidebar from './components/RightSidebar';
import Chart from 'chart.js/auto';




function App() {


  const [width, setWidth] = useState(window.innerWidth);


  useEffect(() => {

    window.addEventListener('resize', handleSize)

  }, [])



  const handleSize = () => {
    setWidth(window.innerWidth);

  }



  return (

    <div className="App">


      <div className='sol'>
        <LeftSidebar />
      </div>


      <div className={width < 992 ? 'bigorta mt-3' : 'orta mt-3'}>
        <Content />
      </div>
      <div className={width < 992 ? 'nonesag' : 'sag'}>
        <RightSidebar />
      </div>



      {/* 
      <div className={state ? 'orta mt-3' : 'bigorta mt-3'}>
        <Content />
      </div>

      <div className={state ? 'sag' : 'nonesag'}>
        <RightSidebar />
      </div> */}



    </div>
  );
}

export default App;
