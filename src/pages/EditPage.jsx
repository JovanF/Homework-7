import React from "react"
import {useParams} from 'react-router-dom'
import '../pages/EditPage.css'
import { useState } from "react"
import {supabase} from '../client.js'
const EditPage = () => {

    const {id} = useParams();
    const [crewmate, setCrewmate] = useState({id: null, speed: 0, name: "", color: "" })

    const handleChange = (event) => {
        const {name,value} = event.target;
        setCrewmate((prev => {
            return {
                ...prev,
                [name]:value,
            }
        }))
    }

    const updateCrewmate = async () => {
        await supabase
        .from('Crewmates')
        .update({name: crewmate.name, speed: crewmate.speed, color: crewmate.color})
        .eq('id', id);
    }

    const deleteCrewmate = async () => {
        await supabase
        .from('Crewmates')
        .delete()
        .eq('id', id);
        window.location = "https://localhost:5173";
    }

    return( 
        <div>
            <form>
                <label for="name">Name</label> <br/>
                <input type= "text" id="name" value={crewmate.name} onChange={handleChange} /> <br/>
                <br/>

                <label for="speed">Speed</label> <br/>
                <input type= "number" id="speed" value={crewmate.speed} onChange={handleChange} /> <br/>
                <br/>
                <label for="color">Name</label> <br/>
                <input type= "button" id="color" value={crewmate.color} onChange={handleChange} /> <br/>
                <br/>

                <input type="submit" value="Submit" onClick={updateCrewmate}/>
                <button className="deleteButton" onClick={deleteCrewmate}>Delete</button>


            </form>
        </div>
    )
}
export default EditPage