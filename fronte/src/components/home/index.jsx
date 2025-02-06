import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles.css";
import {FaEdit, FaTrash, FaPlus, FaSearch} from "react-icons/fa';

export default function Home() {
    const [dados, setDados] = useState([]);
    const token = localStorage.getItem("token");

    console.log("Token Home", token);

    useEffect(() => {
        if (!token) return;

        const fetchData = async () => {
            try {
                const response = await axios.get("http://127.0.0.1:8000/api/professores", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                })
                console.log(response)
                setDados(response.data); 
            } catch (error) {
                console.error("Erro ao buscar dados:", error);
            }
        };

        fetchData(); 
    }, [token]); 

    return (
        <div className="container_home">
            <h1>Home</h1>
            <ul>
                {dados.map((professor) => (
                    <li key={professor.id}>{professor.nome}</li>
                ))}
            </ul>
        </div>
    );
}

// Essa tela esta incompleta !!!!!!!!!!!!!!!!! Pegar no git dele