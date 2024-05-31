import React from 'react'

const page = ({params}:{
    params:{
        slug:string[];
    }
}) => {
    if(params.slug[0]=="trending"){
        return(
            <h1>Trending products</h1>
        )
    }
    else if(params.slug[0]=="sale"){
        return(
            <h1>Sale products</h1>
        )
    }
  return (
    <div>page</div>
  )
}

export default page