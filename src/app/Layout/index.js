import React from 'react'

export default function Layout ({ children }) {
  return (
    <section className='mw5 mw7-ns mt6 center bg-light-gray pa3 ph5-ns'>
      <h1 className='mt0 f3 tc'>React Boilerplatinum</h1>
      <p className='f5 tc lh-copy'>
        <h1>Hello, world!</h1>
        {children}
      </p>
    </section>
  )
}
