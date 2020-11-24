import React from 'react'; 
import repos from '../data/repos';
import Repo from './repo';

export default () => ( 
    <div className="max-w-4xl mx-auto">
        <header className="text-center">
            <h2 className="text-3xl font-bold">Mi trabajo de GitHub</h2>
            <p>Repos Publicos - Examenes Practicos y Ejemplos</p>
        </header>
        <ul className="repos-list">
            {
                repos.map( (repo)=>{
                    return <Repo repo={repo} key={ repo.id }/>
                })
            }
        </ul>
    </div> 
)