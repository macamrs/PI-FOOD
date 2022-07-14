import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Search, Container, Button } from '../styles/Header'
import { searchRecipe } from '../store/actions/actions'

export default function SearchBar() {

  const dispatch = useDispatch()
  const [search, setSearch] = useState('')

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(searchRecipe(search))
    setSearch('')
  }

  const handleInput = (e) => {
    e.preventDefault();
    setSearch(e.target.value)
  }

  return (
    <Container>
        <Search 
          text='text'
          placeholder='Search recipe'
          value={search}
          onChange={handleInput}
        />
        <Button onClick={handleSearch}>🔍</Button>
    </Container>
  )
}
