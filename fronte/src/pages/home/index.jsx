import React, { useState, useEffect } from "react";
import axios from "axios";
import './styles.css'
import { FaEdit, FaTrash, FaPlus, FaSearch } from 'react-icons/fa'
import ModalProfessores from "../../components/modal";


export default function Home() {
    const [dados, setDados] = useState([])
    const token = localStorage.getItem('token')
    const [modalOpen, setModalOpen] = useState(false)
    const [professorSelecionado, setProfessorSelecionado] = useState(null)
    

    console.log("Token Home: ", token)

    useEffect(() => {
        if (!token) return;

        const fetchData = async () => {
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

    const editar = (professor) => {
        console.log("Professor", professor)
        setProfessorSelecionado(professor)
        setModalOpen(true)
    }

    const criar = async (novoProfessor) => {
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/professores',
                {
                    ni: novoProfessor.ni,
                    nome: novoProfessor.nome,
                    email: novoProfessor.email,
                    celular: novoProfessor.cel, // Corrigido de 'cel' para 'celular'
                    ocupacao: novoProfessor.ocup // Corrigido de 'ocup' para 'ocupacao'
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json"
                    }
                }
            );
            console.log("Professor criado com sucesso", response.data);
            setDados([...dados, response.data]);
            setModalOpen(false);
    
        } catch (error) {
            console.log("Erro ao criar professor:", error.response?.data || error.message);
        }
    };

    const atualizar = () =>{

    }

    return (
        <main>
            <div className="container_home">
                <div className="table">
                    <h2>Lista de professores</h2>
                    {dados.map((professor) => (
                        <div className="lista">
                            <div className="col1">
                                <FaEdit className="edit" onClick={() => editar(professor)} />
                            </div>
                            <div className="col2">
                                <FaTrash className="delete" />
                            </div>
                            <div className="col3">
                                <span className="id">{professor.id}</span>
                            </div>
                            <div className="col4">
                                <span className="ni">{professor.ni}</span>
                            </div>
                            <div className="col5">
                                <span className="nome">{professor.nome}</span>
                            </div>
                            <div className="col6">
                                <span className="email">{professor.email}</span>
                            </div>
                            <div className="col7">
                                <span className="cel">{professor.cel}</span>
                            </div>
                            <div className="col8">
                                <span className="ocup">{professor.ocup}</span>
                            </div>
                        </div>
                    ))

                    }
                </div>
                <div className="footer_table">
                    <div className="btn1">
                        <FaPlus 
                            className="adicionar" 
                            onClick={()=>{
                                setProfessorSelecionado(null),
                                setModalOpen(true)
                             }
                            }
                        />
                    </div>
                    <div className="pesquisar">
                        <input placeholder="ID" />
                    </div>
                    <div className="btn2">
                        <FaSearch className="procurar" />
                    </div>
                </div>
            </div>
            <ModalProfessores
                isOpen={modalOpen}
                onClose={() => modalOpen(false)}
                professorSelecionado={professorSelecionado}
                setProfessorSelecionado={setProfessorSelecionado}
                criar={criar}
                atualizar={atualizar}
            />
        </main>
    )
}