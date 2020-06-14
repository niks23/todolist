import React, { Component, useState } from 'react'
import SearchForm from '../components/Searchlist/SearchForm';
import SearchList from '../components/Searchlist/SearchList';

const SearchContainer = props =>  {
    const [searchTerm, setSearchTerm] = useState('');    
      
    const addTerm = term => {      
      setSearchTerm(term);
    } 

    return (
      <div>
        <SearchForm addTerm={addTerm}/>
        <SearchList 
          searchString={searchTerm}                     
          tasklist={props.tasklist}
          updateTask={props.updateTaskHandler}
          toggleTask={props.toggleCompleteHandler}
          deleteTask={props.deleteTaskHandler}          
        />                
      </div>
    )  
}

export default SearchContainer;