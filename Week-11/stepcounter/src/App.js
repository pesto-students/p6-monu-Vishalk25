import { useDispatch, useSelector } from 'react-redux';
import { increaseCount, resetCount } from './state/action-creator';

function App() {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();

  const buttonStyle =  {padding:'10px', borderRadius:'6px', color:'green', width:'160px'};
  
  return (
    <div style={{textAlign: 'center', display:'flex', margin:'25% 40%' }}>
      <button onClick={()=> dispatch(increaseCount())} style={{marginRight:'10px',...buttonStyle}}>Increase</button>
      <span style={{fontSize:'30px', paddingTop:'3px'}}>{count}</span>
      <button onClick={()=> dispatch(resetCount())} style={{marginLeft:'10px',...buttonStyle}}>Reset</button>
    </div>
  );
}

export default App;
