import React from 'react';

import image from '../imgs/undraw_building_websites_i78t.svg';
import Form from './contact.form';

export default () => (
    <header className="bg-gray-300">
        <div className="container mx-auto p-12 max-w-4xl">
            <div className="flex justify-center justify-items-center">
                <div className="flex-1">
                    <h1 className="font-bold text-purple-700 text-6xl">Hola! Soy Javier</h1>
                    <p className="font-light text-xl">Amante del cafe, desarrollador full stack, gamer apasoniado.</p>
                </div>
                <img
                    style={{height:'300px'}}
                    src={ image } alt="develop website"></img>
            </div>
            <div>
                <Form />
            </div>
        </div>
    </header>
)