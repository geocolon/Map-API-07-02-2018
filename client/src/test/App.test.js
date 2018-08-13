import React from 'react';
import ReactDOM from 'react-dom';
import MyFancyComponent from './smartComponents/ChatComp';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MyFancyComponent />, div);
  ReactDOM.unmountComponentAtNode(div);
});
