import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx'
import { StateProvider } from './providers/state/stateContext.tsx';
import { Toaster } from 'sonner';
import Header from './components/header/Header.tsx';
import { AuthProvider } from './providers/auth/authContext.tsx';

createRoot(document.getElementById('root')!).render(
        <BrowserRouter>
                <StateProvider>
                <AuthProvider>
                        
                                <Header/>
                                <App />
                                <Toaster richColors/>
                </AuthProvider>
                </StateProvider>
        </BrowserRouter>
)
