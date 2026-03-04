import React, { Component, ReactNode } from 'react'

interface ErrorBoundaryState {
  hasError: boolean
}

export class ErrorBoundary extends Component<
  { children: ReactNode },
  ErrorBoundaryState
> {
  state: ErrorBoundaryState = { hasError: false }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '120px 6%', textAlign: 'center' }}>
          <h1>Nastala chyba</h1>
          <p>
            Zkuste obnovit stránku.
            <br />
            Please try refreshing the page.
          </p>
        </div>
      )
    }
    return this.props.children
  }
}
