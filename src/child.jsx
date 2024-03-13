import { useContext } from 'react';
import { ThemeContext } from './App';

const Child = ({ dispatch }) => {
  const { customTheme, handleThemeChange } = useContext(ThemeContext);
  const handleAdd = () => {
    dispatch({ type: 'add' });
  };
  const handleSubtract = () => {
    dispatch({ type: 'subtract' });
  };
  const handleReset = () => {
    dispatch({ type: 'reset' });
  };
  return (
    <div className="child">
      <div className={`title ${customTheme}`}>Child</div>
      <button onClick={handleThemeChange}>Change Theme</button>
      <button onClick={handleAdd}>ADD</button>
      <button onClick={handleSubtract}>SUBTRACT</button>
      <button onClick={handleReset}>RESET</button>
    </div>
  );
};

export default Child;
