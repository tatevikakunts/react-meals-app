import React, {useEffect} from "react";
import {useParams} from "react-router-dom/cjs/react-router-dom";

const Meal =({meal})=>{
    const {id} = useParams()
    useEffect(async()=>{
        const req = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        const res = await req.json()
        console.log(res)
    }, [])
    return(
        <div>Meal Component</div>
    )
}

export default Meal

// class Meal extends React.Component{
//     const {id} = useParams()
//
// componentDidMount= async() =>{
//
//     const req = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
//     const res = await req.json()
//     console.log(res)
// }
//
// render(){
//     console.log(this.props)
//     return(
//         <div>Meal Component</div>
//     )
// }
// }