// components/TechStackLogos.tsx
'use client';

import Image from 'next/image';

const techLogos = [
  { name: 'Node.js', src: '/nodejs.svg' },
  { name: 'React', src: '/react.svg' },
  { name: 'Typescript', src: '/typescript.svg' },
  { name: 'Tailwind', src: '/tailwind.svg' },
  { name: 'Spring Boot', src: '/spring-icon.svg' },


  { name: 'HTML5', src: '/html.svg' },
  { name: 'CSS3', src: '/css.svg' },
  { name: 'Git', src: '/git.svg' },
  
  { name: 'JavaScript', src: '/javascript.svg' },
  { name: 'Python', src: '/python.svg' },

  // { name: 'MongoDB', src: '/mongodb.svg' },
  // { name: 'Express', src: '/express.svg' },

  { name: 'Postman', src: '/postman.svg' },
 

  
];

export default function TechStackLogos() {
  return (
    <div className="w-full px-4 py-8">
      <div className="flex flex-wrap justify-center items-center gap-6">
        {techLogos.map((logo) => (
          <div key={logo.name} className="w-12 h-12 relative">
            <Image
              src={logo.src}
              alt={`${logo.name} logo`}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 40px, (max-width: 1200px) 48px, 48px"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
