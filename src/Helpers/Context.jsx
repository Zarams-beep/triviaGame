import {useState, creatrContext, createContext} from 'react'

export const GlobalContext = createContext()

export const GlobalProvider =({children}) => {
    const [isSwitch, setIsSwitch] = useState(true)

    const handleSwitch = () =>{
        setIsSwitch(!isSwitch)
        const rootElement = document.querySelector(':root');
        isSwitch?rootElement.classList.add('dark'):rootElement.classList.remove('dark')
    }

    const contextObject = {
        isSwitch,
        handleSwitch,
    }

    return(
        <GlobalContext.Provider value={contextObject}>
            {children}
        </GlobalContext.Provider>
    )
}