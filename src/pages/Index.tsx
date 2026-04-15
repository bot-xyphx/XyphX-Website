
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Wrench, Brain, Rocket, Mail, Linkedin, GithubIcon, ChevronDown } from 'lucide-react';
import Hero from '@/components/landing/Hero';
import About from '@/components/landing/About';
import Services from '@/components/landing/Services';
import Vision from '@/components/landing/Vision';
import Roadmap from '@/components/landing/Roadmap';
import Sponsors from '@/components/landing/Sponsors';
import Products from '@/components/landing/Products';
import Footer from '@/components/landing/Footer';
import Background from '@/components/landing/Background';

const Index = () => {

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <Background />
      <Hero/>
      <About/>
      <Sponsors/>
      <Products/>
      <Vision/>
      <Roadmap/>
      <Services/>
     <Footer/>
    </div>
  );
};

export default Index;
