import { useEffect, useRef, useState } from "react"

const useLocalStorage = <T>(storageKey: string | null, state: T) : {storedData: T} => {
    const init = useRef(true)
    const [storedData, setStoredData] = useState<any>(null);

    useEffect(() => {
        if(!storageKey) return;

        const data = localStorage.getItem(storageKey);
        try {
            if(data) {
                setStoredData(JSON.parse(data));
            }
            else {
                return; 
            }
        }
        catch {
            setStoredData(data);
        }
    }, [storageKey])

    useEffect(() => {
        if(init.current) {
            init.current = false;
            return;
        }

        if(!storageKey) return; 
            
        

        if(!state) {
            localStorage.removeItem(storageKey);
        }

        try {
            localStorage.setItem(storageKey, JSON.stringify(state));
        }
        catch {
            localStorage.setItem(storageKey, String(state))
        }
    }, [state])
    
    return {storedData};
}

export default useLocalStorage;