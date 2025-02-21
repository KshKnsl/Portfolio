'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, ChevronDown, Star, Twitter, Instagram } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import type { GitHubUser, GitHubRepo } from '@/lib/github';
import { getGitHubUser, getGitHubRepos } from '@/lib/github';

export default function Home() {
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchGitHubData() {
      try {
        const [userData, reposData] = await Promise.all([
          getGitHubUser('KshKnsl'),
          getGitHubRepos('KshKnsl')
        ]);
        setUser(userData);
        setRepos(reposData);
      } catch (error) {
        console.error('Error fetching GitHub data:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchGitHubData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed w-full z-50 backdrop-blur-md bg-background/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center">
              <Link href="#" className="flex-shrink-0 flex items-center group">
                {user?.avatar_url && (
                  <img 
                    src={user.avatar_url} 
                    alt={user.name} 
                    className="h-12 w-12 rounded-full border-2 border-primary transition-transform group-hover:scale-110"
                  />
                )}
                <div className="ml-3 font-bold text-2xl text-primary group-hover:text-blue-600 transition-colors duration-300">
                  <span className="text-red-500">={</span>
                  <span>KshKnsl</span>
                  <span className="text-red-500">}=</span>
                </div>
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <Link href="#home" className="text-primary hover:text-blue-600 px-3 py-2 rounded-md text-xl font-medium transition duration-300 ease-in-out transform hover:scale-110">
                Home
              </Link>
              <Link href="#about" className="text-primary hover:text-blue-600 px-3 py-2 rounded-md text-xl font-medium transition duration-300 ease-in-out transform hover:scale-110">
                About
              </Link>
              <Link href="#projects" className="text-primary hover:text-blue-600 px-3 py-2 rounded-md text-xl font-medium transition duration-300 ease-in-out transform hover:scale-110">
                Projects
              </Link>
              <Link href="#contact" className="text-primary hover:text-blue-600 px-3 py-2 rounded-md text-xl font-medium transition duration-300 ease-in-out transform hover:scale-110">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="flex flex-col items-center gap-6">
            {user?.avatar_url && (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-primary shadow-lg"
              >
                <img
                  src={user.avatar_url}
                  alt={user.name}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            )}
            <div className="text-center">
              <div className="text-2xl md:text-4xl text-primary mb-3">Hello👋, I'm</div>
              <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-primary mb-4">
                {user?.name || 'Loading...'}
              </h1>
              <h2 className="text-xl sm:text-2xl text-muted-foreground">
                CSE @JIIT' 27 || Java || JavaScript || Web Developer || 700+ LeetCode || 3 ⭐ CodeChef
              </h2>
            </div>
          </div>
          
          <div className="flex justify-center gap-4 pt-8">
            <Link href="https://github.com/KshKnsl" target="_blank" className="box github flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary/10 hover:bg-primary/90 transition-all duration-300">
              <Github className="w-6 h-6 md:w-8 md:h-8" />
            </Link>
            <Link href="https://www.linkedin.com/in/kushkansal/" target="_blank" className="box linkedin flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary/10 hover:bg-[#0A66C2] transition-all duration-300">
              <Linkedin className="w-6 h-6 md:w-8 md:h-8" />
            </Link>
            <Link href="https://twitter.com/kansalkkush" target="_blank" className="box twitter flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary/10 hover:bg-[#1DA1F2] transition-all duration-300">
              <Twitter className="w-6 h-6 md:w-8 md:h-8" />
            </Link>
            <Link href="https://www.instagram.com/kushkansal0/" target="_blank" className="box flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary/10 hover:bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 transition-all duration-300">
              <Instagram className="w-6 h-6 md:w-8 md:h-8" />
            </Link>
            <Link href="mailto:kushkansal0@gmail.com" className="box mail flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary/10 hover:bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 transition-all duration-300">
              <Mail className="w-6 h-6 md:w-8 md:h-8" />
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="animate-bounce" size={32} />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold text-primary mb-6">
                <span className="text-9xl text-red-700">M</span>e and
                <br />
                <span className="text-red-700">My Tech Stacks</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                Hi everyone. My name is Kush Kansal and I am a second-year college student pursuing my
                B.tech from JIIT. I have a keen interest in technological stuff. I get excited just by thinking about the
                endless possibilities of cutting-edge technologies. Driven by a strong sense of curiosity. Currently, my
                skills are in HTML, CSS, Object Oriented programming, C, C++, and Java. I am currently learning full-stack web
                development and DSA. My unwavering determination propels me towards achieving excellence, and I aspire to contribute significantly
                to society by enhancing people's lives.
              </p>
            </div>
            <div className="lg:w-1/2 grid grid-cols-5 gap-4">
              {[
                { name: 'VS Code', img: '/TechStacks-Logo/1.png' },
                { name: 'C++', img: '/TechStacks-Logo/2.png' },
                { name: 'CSS', img: '/TechStacks-Logo/3.webp' },
                { name: 'HTML', img: '/TechStacks-Logo/4.jpg' },
                { name: 'JavaScript', img: '/TechStacks-Logo/5.svg' },
                { name: 'Figma', img: '/TechStacks-Logo/6.svg' },
                { name: 'Git', img: '/TechStacks-Logo/7.svg' },
                { name: 'Java', img: '/TechStacks-Logo/8.png' },
                { name: 'Express', img: '/TechStacks-Logo/9.svg' },
                { name: 'Bootstrap', img: '/TechStacks-Logo/10.svg' },
                { name: 'MongoDB', img: '/TechStacks-Logo/11.svg' },
                { name: 'NodeJS', img: '/TechStacks-Logo/12.svg' },
                { name: 'Postgres', img: '/TechStacks-Logo/13.svg' },
                { name: 'ReactJS', img: '/TechStacks-Logo/14.svg' },
                { name: 'SASS', img: '/TechStacks-Logo/15.svg' }
              ].map((tech, index) => (
                <div key={index} className="flex flex-col items-center justify-center p-2 bg-card rounded-lg hover:scale-110 transition-transform">
                  <img src={tech.img} alt={tech.name} className="w-12 h-12 object-contain" />
                  <p className="text-xs text-center mt-2">{tech.name}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <h2 className="text-4xl font-bold text-center text-red-700"><u>My Projects</u></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {repos.map((repo) => (
              <motion.div
                key={repo.id}
                whileHover={{ y: -5 }}
                className="bg-card rounded-lg overflow-hidden shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)]"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold">{repo.name}</h3>
                    <div className="flex items-center text-muted-foreground">
                      <Star className="h-4 w-4 mr-1" />
                      {repo.stargazers_count}
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    {repo.description || 'No description available'}
                  </p>
                  {repo.topics.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {repo.topics.map((topic) => (
                        <span
                          key={topic}
                          className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  )}
                  <div className="flex gap-4">
                    <Button variant="outline" size="sm" asChild>
                      <Link href={repo.html_url} target="_blank">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Link>
                    </Button>
                    {repo.homepage && (
                      <Button variant="outline" size="sm" asChild>
                        <Link href={repo.homepage} target="_blank">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </Link>
                      </Button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="w-full lg:w-1/2">
            <div className="bg-card rounded-2xl shadow-2xl overflow-hidden border border-border">
              <div className="bg-muted py-3 px-6 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold mb-2">Get in Touch</h3>
                  <p className="text-muted-foreground">I'd love to hear from you!</p>
                </div>
                <form className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">Name</label>
                    <input type="text" id="name" required
                      className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                    <input type="email" id="email" required
                      className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">Message</label>
                    <textarea id="message" required
                      className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring h-32 resize-none"
                    ></textarea>
                  </div>
                  <Button className="w-full" size="lg">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex items-center justify-center">
            <div className="relative w-full max-w-[400px] aspect-square rounded-full overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 animate-pulse">
              </div>
              <div className="relative w-full h-full grid grid-cols-2 grid-rows-2 gap-1 bg-background/10 backdrop-blur-md p-1">
                <Link href="https://www.linkedin.com/in/kushkansal/"
                  className="flex items-center justify-center bg-[#0A66C2]/20 hover:bg-[#0A66C2] rounded-tl-full transition-all duration-300"
                  target="_blank"
                >
                  <Linkedin size={40} />
                </Link>
                <Link href="https://github.com/KshKnsl"
                  className="flex items-center justify-center bg-gray-800/20 hover:bg-gray-800 rounded-tr-full transition-all duration-300"
                  target="_blank"
                >
                  <Github size={40} />
                </Link>
                <Link href="https://twitter.com/kansalkkush"
                  className="flex items-center justify-center bg-[#1DA1F2]/20 hover:bg-[#1DA1F2] rounded-bl-full transition-all duration-300"
                  target="_blank"
                >
                  <Twitter size={40} />
                </Link>
                <Link href="mailto:kushkansal0@gmail.com"
                  className="flex items-center justify-center bg-red-500/20 hover:bg-red-500 rounded-br-full transition-all duration-300"
                  target="_blank"
                >
                  <Mail size={40} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-6 px-4 border-t border-border">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="text-center text-muted-foreground">Made with ❤️ by Kush Kansal</div>
          <div className="text-muted-foreground">© 2024 All rights reserved.</div>
        </div>
      </footer>
    </main>
  );
}