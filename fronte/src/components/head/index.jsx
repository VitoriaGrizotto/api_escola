import React from "react";
import '../head/styles.css'

export default function Head(){
    return(
        <main>
            <section className="section_head">
                <div className="title">
                    <h2>Professores</h2>
                </div>
                <div className="nav">
                    <span>Create</span>
                    <span>Read</span>
                    <span>Update</span>
                    <span>Delete</span>
                </div>
            </section>
        </main>
    )
}