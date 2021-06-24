import { useState, useEffect } from 'react'

import { Board } from './components'
import initialState from './initialState'

function KanbanApp() {

  const [appData, setAppData] = useState([])

  useEffect(() => {
    let localStorageData = localStorage.getItem('boards')

    if (localStorageData === null) {
      localStorage.setItem('boards', JSON.stringify(initialState))
      setAppData(initialState)
    } else {
      const boards = JSON.parse(localStorage.getItem('boards'))
      setAppData(boards)
    }
  }, [])

  return <main className="h-screen bg-dark overflow-hidden overflow-x-scroll">
    <section className="kanban-container p-4 flex flex-row gap-4">
      {appData.map(item =>
        <Board key={item.id} id={item.id} title={item.boardTitle} tasks={[...item.tasks]} />
      )}
    </section>
  </main>
}

export default KanbanApp;
