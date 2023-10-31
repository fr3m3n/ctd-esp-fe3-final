import React, { useState } from 'react';
import './App.css';
import Card from './Components/Card';

function App() {
    const [students, setStudents] = useState([]);
    const [name, setName] = useState('');
    const [grade, setGrade] = useState('');

    const handleAddStudent = () => {
        setStudents(prevStudents => [...prevStudents, { id: prevStudents.length + 1, name, grade }]);
        setName('');
        setGrade('');
    };

    return (
        <>
            <h1>Carga de estudiantes</h1> 
            <form onSubmit={e => e.preventDefault()}>
                <input 
                    type="text" 
                    value={name} 
                    onChange={e => setName(e.target.value)} 
                    placeholder="Name"
                />
                <input 
                    type="text" 
                    value={grade} 
                    onChange={e => setGrade(e.target.value)} 
                    placeholder="Grade"
                />
                <button type="button" onClick={handleAddStudent}>
                    Cargar Estudiante
                </button>
            </form>

            <Card students={students} />
        </>
    );
}

export default App;
