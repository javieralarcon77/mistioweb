import React from "react";
import { Helmet } from "react-helmet";

import Codigofacilito from "../components/codigofacilito";
import EducationNav from "../components/education-nav";

import Header from '../components/header';
import Repos from '../components/repos';

export default () => {
  return (
    <div className="mb-5">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Javier Alarcon | Desarrollador FullStack</title>
      </Helmet>

      <Header />
      <EducationNav />
      <Repos />
      <Codigofacilito />
    </div>
  )
}
