import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Select, SelectContainer, Reset } from '../styles/Main'
import { getDiets } from "../store/actions/actions";

function FilterandOrder({handleOriginFilter,handleDietFilter,handleScoreSort,handleAlphSort,handleReset}) {

    const dispatch = useDispatch()
    const allDiets = useSelector(state => state.diets)

    useEffect(() => {
        dispatch(getDiets())
    },[dispatch])

  return (
    <SelectContainer>
        <Select onChange={e => handleAlphSort(e)}>
            <option>Select Option</option>
            <option value='asc'>A → Z</option>
            <option value='dsc'>Z → A</option>
        </Select>            

        <Select onChange={e => handleScoreSort(e)}>
            <option>Select Option</option>
            <option value='high'>Highest Score</option>
            <option value='low'>Lowest Score</option>
        </Select>            

        <Select onChange={e => handleDietFilter(e)}>
            <option value='all'>All Diets</option>
            {allDiets?.map((e) => {
                return <option key={e.id} value={e.name}>{e.name}</option>
            })}
        </Select>      

        <Select onChange={e => handleOriginFilter(e)}>
            <option>Select Option</option>
            <option value='all'>All recipes</option>
            <option value='api'>API recipes</option>
            <option value='db'>My recipes</option>
        </Select> 

        <Reset  onClick={e => handleReset(e)}>Reset</Reset>      
    </SelectContainer> 
  )
}

export default FilterandOrder