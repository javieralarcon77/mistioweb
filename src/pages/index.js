import React from "react"
import Codigofacilito from "../components/codigofacilito";
import EducationNav from "../components/education-nav";

import Header from '../components/header';
import Repos from '../components/repos';

export default () => {
  return (
    <div className="mb-5">
      <Header />
      <EducationNav />
      <Repos />
      <Codigofacilito />
    </div>
  )
}
