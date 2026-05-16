'use client';

import React from 'react';
import SystemsHero from '../components/systems/SystemsHero';
import SystemsIntro from '../components/systems/SystemsIntro';
// import ProjectHierarchy from '../components/systems/ProjectHierarchy';
import FutureBlock from '../components/systems/FutureBlock';
import InvestmentCTA from '../components/systems/InvestmentCTA';

export default function SystemsPage() {
  return (
    <>
      <SystemsHero />
      <SystemsIntro />
      {/* <ProjectHierarchy /> */}
      <FutureBlock />
      <InvestmentCTA />
    </>
  );
}
