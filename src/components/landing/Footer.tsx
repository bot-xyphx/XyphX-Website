import React from 'react'
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Wrench, Brain, Rocket, Mail, Linkedin, GithubIcon, ChevronDown } from 'lucide-react';
import { motion } from "framer-motion";
import useIsMobile from '@/hooks/use-mobile';


export default function Footer() {

  const isMobile = useIsMobile();

  const fadeInUp = {
    initial: { opacity: 0, y: 70 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: isMobile? 0.3 : 0.5 },
    transition: { duration: 1.5 },
  };

  return (
    <div>
      <footer id="contact" className="relative z-10 py-12 px-4 border-t border-purple-500/30">
        <motion.div {...fadeInUp} className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="text-center md:text-left justify-center items-center">
              <img 
                src="/logo_dark.png" 
                alt="XyphX Logo" 
                className="w-16 h-16 mx-auto md:mx-0 mb-4"
              />
              <p className="text-gray-400">Engineering the Future of Tech</p>
            </div>
            
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-4 text-purple-300">Contact Us</h3>
              <div className="flex items-center justify-center gap-2 text-gray-300 hover:text-purple-400 transition-colors">
                <Mail className="h-4 w-4" />
                <span>help.xyphx@outlook.com</span>
              </div>
            </div>
            
            <div className="text-center md:text-right">
              <h3 className="text-lg font-semibold mb-4 text-purple-300">Connect With Us</h3>
              <div className="flex justify-center md:justify-end gap-4">
                <a href="https://www.linkedin.com/company/xyphx" target='_blank' className="p-3 bg-purple-600/20 rounded-full hover:bg-purple-600/40 transition-all duration-300 hover:scale-110 gap-2">
                  <Linkedin className="h-5 w-5 text-purple-400" />
                  
                </a>
                <a href="https://github.com/xyphx" target='_blank' className="p-3 bg-purple-600/20 rounded-full hover:bg-purple-600/40 transition-all duration-300 hover:scale-110 gap-2">
                  <GithubIcon className="h-5 w-5 text-purple-400" />
                  
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-purple-500/20 mt-8 pt-8 text-center text-gray-500">
            <p>&copy; 2025 XyphX</p>
          </div>
        </motion.div>
      </footer>
    </div>
  )
}
