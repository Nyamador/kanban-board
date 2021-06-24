import { useState, useEffect } from 'react'

import { Board } from './components'
import initialState from './initialState'
import { getItemfromLocalStorage, setLocalStorageItem } from './localStorage'

function KanbanApp() {

  const [appData, setAppData] = useState([])

  useEffect(() => {
    let localStorageData = getItemfromLocalStorage('boards')

    if (localStorageData === null) {
      setLocalStorageItem('boards', initialState)
      setAppData(initialState)
    }
    const boards = getItemfromLocalStorage('boards')
    setAppData(boards)
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
