
import Styled from './AllStyledCom';
import './App.css';
import AppRouter from './router/AppRouter';
// import  AllStyledCom  from './AllStyledCom';


function App() {
  return (
  <div>
    <Styled />
    {/* // styled componenti styled-components in global değişkeni olarak tanımladık. */}
    <AppRouter />

  </div>
  );
}

export default App;
