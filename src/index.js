import ReactDOM from 'react-dom';

import './index.css';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root')); // --> <App /> 를 index.html에 있는 <div>애다가 render 하고 싶다는 뜻.
// <div> 태그의 안쪽에 있는 것은 <App /> 로 대체된다.
// .render method has two parameters:
// the second parameter is "default Javascript DOM API"
