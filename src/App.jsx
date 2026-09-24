import { useState } from 'react'
import AddWord from './Components/AddWord'
import useLocalStorage from './Hooks/useLocalStorage'
import WordList from './Components/WordList'
import './App.css'
import Home from "./Components/Home"
import { Route, Routes } from 'react-router'

function App() {
  const [word, setWord] = useState({
    id : crypto.randomUUID(),
    word : "",
    type : "",
    translate : "",
    example : "",
    level : "",
    category : ""
  })

  const [editingId, setEditingId] = useState(null)

  const [categoryfilter, setCategoryfilter] = useState("")

  const [wordList, setWordList] = useLocalStorage('wordList', [])

  function resetWord() {
    setWord({
        id: "",
        word: "",
        type: "",
        translate: "",
        example: "",
        level: "",
        category: ""
    })
    setEditingId(null)
  }


  return (
    <>
    <Routes>
      <Route 
        path='/' 
        element={
          <Home 
            setCategoryfilter={setCategoryfilter} 
            categoryfilter={categoryfilter}
            wordList={wordList}
            resetWord={resetWord}
          />
        } 
      />

      <Route 
        path='/addword'
        element={
          <AddWord 
            word={word} 
            setWord={setWord} 
            wordList={wordList} 
            setWordList={setWordList}                        
            editingId={editingId}
            setEditingId={setEditingId}
            resetWord={resetWord}
          />
        } 
      />

      <Route 
        path='/wordlist' 
        element={
          <WordList 
            categoryfilter={categoryfilter} 
            setCategoryfilter={setCategoryfilter} 
            setWord={setWord}
            wordList={wordList} 
            setWordList={setWordList}
            setEditingId={setEditingId}
            resetWord={resetWord} 
          />
        }
      />
    </Routes>
    </>
  )
}

export default App
