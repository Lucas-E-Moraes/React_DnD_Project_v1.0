import React, {useContext} from 'react'

const AppContext = React.createContext()

export const AppProvider = ({children}) => {


  return <AppContext.Provider value={{

  }}>
    {children}
  </AppContext.Provider>
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

