import { useInput } from './useInput';

function displayMessage(message) { //alert로 텍스트박스 내의 값을 팝업으로 출력한다.
  alert(message);
}

function App() {
  const [inputValue, handleChange, handleSubmit] 
  = useInput("", displayMessage);

  return (
    <div>
      <h1>useInput</h1>
      <input value={inputValue} onChange={handleChange} />
      <button onClick={handleSubmit}>확인</button> {/* 확인 버튼 */}
    </div>
  );
}

export default App;
