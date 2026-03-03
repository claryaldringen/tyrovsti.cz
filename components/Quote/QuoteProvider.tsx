import React, { createContext, ReactNode, useReducer } from 'react'
import { Publication, QuoteAction, QuoteContextValue } from '../../types'

const reducer = (state: Publication[], action: QuoteAction): Publication[] => {
  switch (action.type) {
    case 'ADD_PUBLICATION':
      if (
        !state.some(
          (s) =>
            action.payload.name === s.name && action.payload.author === s.author
        )
      ) {
        return [...state, action.payload]
      }
      return state
    default:
      return state
  }
}

const QuoteContext = createContext<QuoteContextValue>({
  usedPublications: [],
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setPublication: () => {},
})

const QuoteProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, [])

  const setPublication = (publication: Publication) => {
    dispatch({ type: 'ADD_PUBLICATION', payload: publication })
  }

  return (
    <QuoteContext.Provider value={{ usedPublications: state, setPublication }}>
      {children}
    </QuoteContext.Provider>
  )
}

export { QuoteProvider, QuoteContext }
