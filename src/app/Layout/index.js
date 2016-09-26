import React from 'react'

export default function Layout ({ children }) {
  return (
    <section class='mw5 mw7-ns mt6 center bg-light-gray pa3 ph5-ns'>
      <h1 class='mt0 f3 tc'>Tachyons</h1>
      <p class='f5 tc lh-copy'>
        <h1>Hello, world!</h1>
        {children}
      </p>
    </section>
  )
}
