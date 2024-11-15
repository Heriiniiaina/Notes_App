
import { createRoot } from 'react-dom/client'

import App from './App.tsx'
import { Provider } from 'react-redux'
import { store } from './store/index.ts'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import NoteBrowse from './pages/NoteBrowse/NoteBrowse.tsx'
import PageNotFound from './pages/PageNotFound/PageNotFound.tsx'
import Note from './pages/Notes/Note.tsx'
import NoteCreate from './pages/NoteCreate/NoteCreate.tsx'

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='/' element={<NoteBrowse />} />
          <Route path='/note/:id' element={<Note />} />
          <Route path='/note/new' element={<NoteCreate />} />
        </Route>
          <Route path='*' element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>

  </Provider>

)
