import reactDom from 'react-dom';
import { GifExpertApp } from './GifExpertApp';
import './index.css';

const divRoot = document.querySelector('#root');

reactDom.render(<GifExpertApp />, divRoot);
