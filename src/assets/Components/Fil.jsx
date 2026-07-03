import { useState } from "react"

export default function Fil(){
    const nameData=[
        {
            id:1,
            name:"amardeep",
            age:33
        },
        {
            id:2,
            name:"puneet",
            age:22
        }
    ]
    
    // usestate ta lani peni a
    const[data,setData]=useState(nameData);

    const all=()=>setData(nameData);
    const name=()=>setData(nameData.filter(item=>item.name==="amardeep"))
    const age=()=>setData(nameData.filter(item=>item.age===22))



    

    

    
    return(
        <>
        <div>
            <button onClick={all}>all</button>
            <button onClick={name}>name</button>
            <button onClick={age}>age</button>
        </div>


        <div>
        {data.map((item,index)=>(
            <>
            <div>
                {item.name}
            </div>
            <div>
                {item.age}
            </div>
            </>
        ))}
        </div>

        
        
        
        </>
    )
}