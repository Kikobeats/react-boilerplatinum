import React from 'react'

export default function Layout ({ children }) {
  return (
    <article className='mw5 mw7-ns mt6 center bg-light-gray pa3 ph5-ns'>
      <section className='f5 tc lh-copy'>
        <h1>Hello, world!</h1>
        {children}
      </section>
    </article>
  )
}
