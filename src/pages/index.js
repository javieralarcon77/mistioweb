import React from "react"
import Codigofacilito from "../components/codigofacilito";
import EducationNav from "../components/education-nav";

import Header from '../components/header';
import Repos from '../components/repos';

export default () => {
  return (
    <div>
      <Header />
      <EducationNav />
      <Repos />
      <Codigofacilito />
    </div>
  )
}
