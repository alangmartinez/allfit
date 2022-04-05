import './App.css';
import NavBar from './components/NavBar/NavBar';
import Avatar from './components/Avatar/Avatar';
import ItemCount from './components/ItemCount/ItemCount';

import React from 'react'

export default function App() {
  return (
    <>
      <NavBar />
      <main className='main'>
        <Avatar name="Emiliano"/>
        <ItemCount initial={0} stock={10}/>
      </main>
    </>
  )
}