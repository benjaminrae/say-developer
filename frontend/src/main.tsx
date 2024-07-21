import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import {Providers} from '@/components/Providers';
import "./styles/index.css"
import "@fontsource/jetbrains-mono/100.css"
import "@fontsource/jetbrains-mono/200.css"
import "@fontsource/jetbrains-mono/300.css"
import "@fontsource/jetbrains-mono/400.css"
import "@fontsource/jetbrains-mono/500.css"
import "@fontsource/jetbrains-mono/600.css"
import "@fontsource/jetbrains-mono/700.css"
import "@fontsource/jetbrains-mono/800.css"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Providers>
      <App/>
    </Providers>
  </React.StrictMode>,
);
