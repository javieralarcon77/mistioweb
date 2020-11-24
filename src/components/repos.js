import React, { useEffect, useState } from 'react'; 
import fetchRepos from '../libs/fetchRepos';
import Repo from './repo';

export default () => {

    const [repos, setRepos] = useState([]);
    const [reposCount, setReposCount] = useState(0);

    useEffect( ()=>{
        fetchRepos().then( data =>{
            setRepos(data.repos);
            setReposCount(data.total);
        });
    },[]);

    return ( 
        <div className="max-w-4xl mx-auto mt-12">
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
            <div className="mt-8 text-center">
                <a href="https://github.com/javieralarcon77" className="btn" target="_blank" rel="noopener noreferrer">
                    Ver más en GitHub ( { reposCount } )
                </a>
            </div>
        </div> 
    )
}
