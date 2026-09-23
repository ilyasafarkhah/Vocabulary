import { useState } from 'react'
import AddWord from './Components/AddWord'
// import Filter from "./Components/Filter"
import useLocalStorage from './hooks/useLocalStorage'
import WordList from './Components/WordList'
import './App.css'
// import Search from './Components/Search'
import Home from "./Components/Home"
import { Route, Routes } from 'react-router'
import Category from './Components/Category'

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

  const [categoryfilter, setCategoryfilter] = useState("fff")

  const [wordList, setWordList] = useLocalStorage('wordList', [])

  return (
    <>
    <Routes>
      <Route path='/' element={<Home setCategoryfilter={setCategoryfilter} categoryfilter={categoryfilter} wordList={wordList}/>} />
      <Route path='/addword'element={<AddWord word={word} setWord={setWord} wordList={wordList} setWordList={setWordList} />} />
      <Route path='/wordlist' element={ <WordList categoryfilter={categoryfilter} setCategoryfilter={setCategoryfilter} setWord={setWord} wordList={wordList} setWordList={setWordList} />}/>
    </Routes>
    </>
  )
}

export default App
