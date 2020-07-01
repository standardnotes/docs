import React from 'react';
import { Redirect } from '@docusaurus/router';

function Home() {
  return <Redirect to="/welcome" />;
}

export default Home;
