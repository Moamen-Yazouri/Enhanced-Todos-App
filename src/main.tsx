import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx'
import { StateProvider } from './providers/state/stateContext.tsx';
import { Toaster } from 'sonner';
import Header from './components/header/Header.tsx';

createRoot(document.getElementById('root')!).render(
        <BrowserRouter>
        <StateProvider>
                <Header/>
                <App />
                <Toaster richColors/>
        </StateProvider>
        </BrowserRouter>
)
