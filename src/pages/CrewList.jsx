import React, { useState, useEffect } from 'react';
import '../pages/CrewList.css';
import { supabase } from "../client";
import Card from "../components/Card.jsx"; // Assuming Card component is imported

const CrewList = () => {
    const [crewmates, setCrewmates] = useState([]);

    useEffect(() => {
        const fetchCrewmates = async () => {
            const { data } = await supabase
                .from('Crewmates')
                .select()
                .order('created_at', { ascending: true });

            setCrewmates(data);
        };
        fetchCrewmates();
        
    }, []); // Removed props from the dependency array

    return (
        <div>
            {
                crewmates && crewmates.length > 0 ?
                crewmates.map((crewmate, index) =>
                    <Card key={crewmate.id} name={crewmate.name} speed={crewmate.speed} color={crewmate.color} /> // Added key prop to Card component
                ) : <h2>No Crewmates Yet</h2>
            }
        </div>
    );
};

export default CrewList;
