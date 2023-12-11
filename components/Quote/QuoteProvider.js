import React, { createContext, useReducer } from 'react'

const ACTIONS = {
  ADD_PUBLICATION: 'ADD_PUBLICATION',
}

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_PUBLICATION:
      if (
        !state.some(
          (state) =>
            action.payload.name === state.name &&
            action.payload.author === state.author
        )
      ) {
        return [...state, action.payload]
      }
      return state
    default:
      return state
  }
}

const QuoteContext = createContext()

const QuoteProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, [])

  const setPublication = (publication) => {
    dispatch({ type: ACTIONS.ADD_PUBLICATION, payload: publication })
  }

  return (
    <QuoteContext.Provider value={{ usedPublications: state, setPublication }}>
      {children}
    </QuoteContext.Provider>
  )
}

export { QuoteProvider, QuoteContext }
