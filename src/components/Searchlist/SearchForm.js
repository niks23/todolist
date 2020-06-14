import React, { useState } from 'react'
import Input from '../UI/Input'
import Button from '../UI/Button'

const SearchForm = props => {  
  const [searchString, setSearchString] = useState('');

  const searchChangedHandler = (e) => {   
    setSearchString(e.target.value);
    if(searchString) {     
      props.addTerm(searchString);       
    }
  }
  
  return (        
    <Input changed={searchChangedHandler} class="search-input" placeholder="Type here" value={searchString}/>           
  )
}

export default SearchForm;