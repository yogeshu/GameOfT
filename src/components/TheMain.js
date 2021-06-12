import React from 'react'
import Battles from './Battles'
import Search from './Search'

export default function TheMain({filterData,list,search,searchData,getCount,renderSuggestion}) {
    return (
        <div className="text-center">
             <Search filterData={filterData} search={search} searchData={searchData} renderSuggestion={renderSuggestion}/>
           <h1> Battels Places</h1>
            <Battles  list={list} getCount={getCount} />
        </div>
    )
}
