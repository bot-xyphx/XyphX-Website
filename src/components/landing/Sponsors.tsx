import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/configs/firebase';
import { useIsMobile } from '@/hooks/use-mobile';

interface Sponsor {
  id: string;
  name: string;
  logo_url: string;
}

const Sponsors: React.FC = () => {
  const [sponsors, setSponsors] = useState<Sponsor[]>([]);
  const isMobile = useIsMobile();

  useEffect(() => {
    const fetchSponsors = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'sponsors'));
        const sponsorList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Sponsor[];
        setSponsors(sponsorList);
      } catch (error) {
        console.error('Error fetching sponsors:', error);
      }
    };

    fetchSponsors();
  }, []);

  if (sponsors.length === 0) return null;

  // Duplicate sponsors for infinite loop
  const duplicatedSponsors = [...sponsors, ...sponsors];

  return (
    <section className="relative z-10 py-12 px-4 overflow-hidden border-y border-purple-500/10 bg-black/5 md:bg-black/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto mb-8">
        <h3 className="text-sm font-semibold text-center uppercase tracking-[0.3em] text-purple-400/80 mb-2">
          Our Sponsors
        </h3>
        <div className="w-12 h-0.5 bg-gradient-to-r from-purple-500 to-transparent mx-auto rounded-full opacity-50"></div>
      </div>

      <div className="relative flex overflow-x-hidden group">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{
            x: ["0%", "-50%"], 
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 25,
              ease: "linear",
            },
          }}
        >
          {duplicatedSponsors.map((sponsor, index) => (
            <div
              key={`${sponsor.id}-${index}`}
              className="flex items-center justify-center mx-16 grayscale hover:grayscale-0 transition-all duration-500 opacity-50 hover:opacity-100"
            >
              <img
                src={sponsor.logo_url}
                alt={sponsor.name}
                className="h-8 md:h-12 w-auto object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Sponsors;
