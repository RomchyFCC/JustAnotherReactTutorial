import React, { Component } from 'react';

const Ninjas = ({ninjas, deleteNinja}) => {
  const ninjaList = ninjas.map(ninja => {
    return (
      <div className="ninja" key={ninja.id}>
        <div>Name: {ninja.name}</div>
        <div className="age">Age: {ninja.age}</div>
        <div>Something: {ninja.belt}</div>
        <button onClick={() => {deleteNinja(ninja.id)}}>delete</button>
      </div>
    );
  })
  return(
    <div className="ninja-list">
      { ninjaList }
    </div>
  )
}

export default Ninjas;