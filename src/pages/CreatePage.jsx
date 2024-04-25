import React from "react"
import '../pages/CreatePage.css'
import { useState } from "react"
import { supabase } from "../client"

const CreatePage = () => {

    const [crewmate, setCrewmate] = useState({name: "", speed: 0, color: ""})

    const handleChange = (event) => {
        const { name, value, type } = event.target;
        if (type === "radio" && name === "color") {
            setCrewmate((prev) => ({
                ...prev,
                color: value,
            }));
        } else {
            setCrewmate((prev) => ({
                ...prev,
                [name]: value,
            }));
        }
    };
    
    

    const createCrewmate = async (event) => {
        event.preventDefault();
        await supabase
            .from('Crewmates')
            .insert({ name: crewmate.name, speed: crewmate.speed, color:crewmate.color })
            .select();

            console.log(crewmate);
            //window.location = "/CrewList";



    }
    
    


    return( 
        <div>
            <form>
            <label htmlFor="name">Name</label> <br/>
                <input placeholder="Enter a name..." type= "text" name="name" id="name"  onChange={handleChange} /> <br/>
                <br/>

                <label htmlFor="speed">Speed</label> <br/>
                <input placeholder="Enter a speed" type= "number" name="speed" id="speed" onChange={handleChange} /> <br/>
                <br/>
                <label htmlFor="color">Color</label> <br/>
                <input type= "radio" name= "color" value="Green"  onChange={handleChange} />Green <br/>
                <input type= "radio" name= "color" value="Red"  onChange={handleChange} />Red <br/>
                <input type= "radio" name= "color" value="Blue"  onChange={handleChange} />Blue <br/>
                <input type= "radio" name= "color" value="Yellow"  onChange={handleChange} />Yellow <br/>
                <input type= "radio" name= "color" value="Black"  onChange={handleChange} />Black <br/>
                <input type= "radio" name= "color" value="White"  onChange={handleChange} />White <br/>

                <br/>

                <input type="submit" value="Submit" onClick={createCrewmate} />
            </form>
        </div>
    )
}

export default CreatePage