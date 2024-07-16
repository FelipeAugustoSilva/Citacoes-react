import React from "react";



const Citacao = ({texto, autor}) => {

        
     return (
        <div>
            <blockquote className="blockquote">
                <p>{texto}</p>
                <footer className="blockquote-footer">{autor}</footer>
            </blockquote>
            
        </div>
    )
        
};

export default Citacao;