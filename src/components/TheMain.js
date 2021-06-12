import React from 'react'
import Battles from './Battles'
import Search from './Search'

export default function TheMain({filterData,list,search,searchData,getCount}) {
    return (
        <div className="text-center">
             <Search filterData={filterData} search={search} searchData={searchData}/>
           <h1> Battels Places</h1>
            <Battles list={list} getCount={getCount} />
        </div>
    )
}
