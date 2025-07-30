import React from "react";
import Image from "next/image";

export const ProjectsSection = () => {
  return (
    <section
      id="work"
      className="py-12 sm:py-20 px-4 bg-[#161B22] scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center">
          Featured Projects
        </h2>
        <div className="space-y-8 sm:space-y-12">
          {[
            {
              title: "Arduino Animation Editor",
              description: `An Arduino editor for creating animations on OLED displays and MAX7219 LED matrices.`,
              metrics: {
                performance: 98,
                accessibility: 100,
                seo: 100,
              },
              techDetails: [
                "Real-time canvas editor with drawing, shifting, and rotation tools",
                "Frame-by-frame animation management with live preview",
                "React-powered state handling for smooth transitions and UI interactions",
                "C++ code export with configurable SPI/I2C pin settings for Arduino deployment",
              ],
              image: "/arduinoanim.png",
              githubLink:
                "https://github.com/Jawad-Alhamadah/Arduino-Display-Animator",
              link: "https://arduino-animator.netlify.app/Oled",
            },
            {
              title: "National Day Game",

              description: "A painting game made for the saudi national day.",
              metrics: {
                performance: 95,
                accessibility: 98,
                seo: 100,
              },
              techDetails: [
                "Interactive painting interface with color picker and adjustable brush size optimization",
                "Challenge mode where players recreate a given image pixel-by-pixel",
                "Leaderboard for users to publish their artwork and compete for accuracy",
                "Includes user signup and login to share their work",
              ],
              image: "/nationalday.png",
              githubLink:
                "https://github.com/Jawad-Alhamadah/national_Day_project",
              link: "https://jawad-alhamadah.github.io/national_Day_project/paint.html",
            },
            {
              title: "MergeNet",
              description:
                "Website to assist administrators in the merging process",
              metrics: {
                performance: 95,
                accessibility: 98,
                seo: 100,
              },
              techDetails: [
                "Department assignment tools and dashboards for managing staff transitions",
                "ChatGPT-powered recommendation engine for matching surplus employees to open roles",
                "Secure role-based access using JWT authentication and Express APIs",
                "Built with React, Tailwind, Express.js & MongoDB in an Agile 3-person team",
              ],
              image: "/mergenet.png",
              githubLink: "",
              link: "https://mergenet.netlify.app/",
            },

 {
              title: "Dog Breed Classifier",
              description:
                "A machine learning web app that identifies dog breeds from images and links users to detailed breed Wikipedia page",
              metrics: {
                performance: 95,
                accessibility: 98,
                seo: 100,
              },
              techDetails: [
                "Upload interface with image cropping and resizing, built in React",
                "Auto-scrapes Wikipedia for accurate breed descriptions and links",
                "Model trained to classify dog breeds with up to 88% accuracy",
              ],
              image: "/dog_2.png",
              githubLink: "https://github.com/Jawad-Alhamadah/DogclassifierWebsite",
              link: "",
            },

            {
              title: "Python File Spliter",
              description:
                "A Python command-line tool for chunking and reassembling large for bypassing GitHub file size limits.",
              metrics: {
                performance: 95,
                accessibility: 98,
                seo: 100,
              },
              techDetails: [
                "Splits any file type into manageable chunks and merges them",
                " Bypasses GitHub’s 100MB file limit without relying on Git LFS",
                "Simple CLI usage with clean logging and documentation",
              ],
              image: "/pythonspliter.png",
              githubLink: "https://github.com/Jawad-Alhamadah/CLI-Splitter",
              link: "",
            },

           
          ].map((project) => (
            <div
              key={project.title}
              className="bg-[#21262D] rounded-lg overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
                  <h3 className="text-xl sm:text-2xl font-bold">
                    {project.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-400">
                    {project.description}
                  </p>

                  {/* Performance Metrics */}
                  {/* <div className="space-y-3">
										<h4 className="text-base sm:text-lg font-semibold">Performance Metrics</h4>
										<div className="grid grid-cols-3 gap-2 sm:gap-4">
											{Object.entries(project.metrics).map(([key, value]) => (
												<div key={key} className="text-center">
													<div className="text-2xl font-bold text-blue-400">{value}</div>
													<div className="text-sm text-gray-400 capitalize">{key}</div>
												</div>
											))}
										</div>
									</div> */}

                  {/* Technical Implementation */}

                  <div>
                    <h4 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3">
                      Technical Implementation
                    </h4>
                    <ul className="space-y-1.5 sm:space-y-2 text-sm sm:text-base">
                      {project.techDetails.map((detail) => (
                        <li key={detail} className="flex items-center gap-2">
                          <span className="text-green-400">▹</span>
                          <span className="text-gray-300">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex gap-4 ">
                    {project.link && (
                      <a
                        href={project.link}
                        className="text-sm px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                      >
                        View Project
                      </a>
                    )}

                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        className="text-sm px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                      >
                        GitHub
                      </a>
                    )}
                  </div>
                </div>

                <div className="relative h-full min-h-[300px] lg:min-h-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-[#21262D] via-transparent to-transparent lg:via-[#21262D]/5 lg:to-[#21262D]/35"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
