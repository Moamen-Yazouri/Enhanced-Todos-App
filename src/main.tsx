import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx'
import { StateProvider } from './providers/state/stateContext.tsx';

createRoot(document.getElementById('root')!).render(
        <BrowserRouter>
        <StateProvider>
                <App />
        </StateProvider>
        </BrowserRouter>
)
