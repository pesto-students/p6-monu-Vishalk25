import { useDispatch, useSelector } from 'react-redux';
import { increaseCount, resetCount } from './state/action-creator';

function App() {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();

  const buttonStyle =  {padding:'10px', borderRadius:'6px', color:'green', width:'160px', margin: '20px auto 0'};
  
  return (
    <div style={{textAlign: 'center', display:'flex', flexDirection:'column', margin:'10% 30%' }}>
      <div style={{fontSize:'30px'}}>You have walked {count} steps today!</div>
      <button onClick={()=> dispatch(increaseCount())} style={{...buttonStyle}}>Increase</button>
      <button onClick={()=> dispatch(resetCount())} style={{...buttonStyle}}>Reset</button>
    </div>
  );
}

export default App;
