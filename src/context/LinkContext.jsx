import React, { createContext, useState } from 'react'

export const linkContextData = createContext();

function LinkContext({ children }) {
    const [link, setLink] = useState('');
  return (
    <linkContextData.Provider value={{ link, setLink }}>
        {
            children
        }
    </linkContextData.Provider>
  )
}

export default LinkContext