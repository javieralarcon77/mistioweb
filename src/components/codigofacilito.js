import React from 'react'; 
import { graphql, useStaticQuery } from 'gatsby';

export default () => {
    const data = useStaticQuery(graphql`
    {
        codigofacilitoJson {
          data {
            email
            username
            finished_courses {
              title
              url
            }
          }
        }
    }
    `);

    console.log(data);

    return ( 
        <section>
            <div className="mt-24">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-center">Mis Cursos Finalizados de Codigo Facilito</h2>
                    <div className="flex mt-8">
                        {
                            data.codigofacilitoJson.data.finished_courses.map( (course, i) => (
                                <div className="shadow p-8 bg-white mr-4 rounded text-center">
                                    <h4 className="font-bold">{ course.title }</h4>
                                    <a 
                                        className="text-purple-700" 
                                        href={ course.url }
                                        target="_blank"
                                        rel="noreferrer noopener"
                                    > Ver el curso</a>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section> 
    )
}