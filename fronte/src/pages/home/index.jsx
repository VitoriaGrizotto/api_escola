// Pegar do Git

import React, {useState, useEffect} from "react";
import axios from "axios";
import './styles.css'
import {FaEdit, FaTrash, FaPlus, FaSearch} from 'react-icons/fa'

export default function Home(){
    const [dados, setDados] = useState([])
    const token = localStorage.getItem('token')
    
    console.log("Token Home: ", token)

    useEffect(()=>{
        if (!token) return;

        const fetchData = async ()=>{
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/professores',
                    {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }
                )
                console.log(response.data)
                setDados(response.data)

            } catch (error) {
                
            }
        }
        fetchData()
    }, [])


    return(
        <main>
        <div className="container_home">
            <h1>Home</h1>
            <div className="table">
                <h2>Lista de professores</h2>
                {dados.map((professor)=>(
                    <div className="lista">
                        <FaEdit className="edit" />
                        <FaTrash className="delete"/>
                        <span className="id">{professor.id}</span>
                        <span className="ni">{professor.ni}</span>
                        <span className="nome">{professor.nome}</span>
                    </div>
                ))

                }
            </div>
            <div className="footer_table">
                <div className="btn1">
                    <FaPlus className="adicionar"/>
                </div>
                <div className="pesquisar">
                    <input placeholder="ID"/>
                </div>
                <div className="btn2">
                    <FaSearch className="procurar"/>
                </div>
            </div>
        </div>
        </main>
    )
}