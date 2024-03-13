import { useState, createContext, useReducer } from 'react';
import './App.css';
import Child from './child';

export const ThemeContext = createContext({
  customTheme: 'light',
  handleThemeChange: null,
});

const reducer = (state, action) => {
  switch (action.type) {
    case 'add': {
      const count = state.count;
      return {
        count: count + 1,
      };
    }
    case 'subtract': {
      const count = state.count;
      return {
        count: count - 1,
      };
    }
    case 'reset': {
      return {
        count: 0,
      };
    }
    default: {
      return state;
    }
  }
};

function App() {
  const [customTheme, setCustomTheme] = useState('light');
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  const handleThemeChange = () => {
    setCustomTheme((value) => (value === 'light' ? 'dark' : 'light'));
  };
  return (
    <>
      <ThemeContext.Provider value={{ customTheme, handleThemeChange }}>
        <div className="parent">
          <div className="count">Count from reducer - {state.count}</div>
          <div className="title">Parent</div>
          <Child dispatch={dispatch} />
        </div>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
