import React from 'react'

function Main({ title = 'DM Helper' }: { title: string }) {
  return (
    <main>
      <h1>{title}</h1>
    </main>
  )
}

export default Main
