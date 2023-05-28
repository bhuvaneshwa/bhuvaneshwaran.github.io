import Footer from "@/component/Footer/Footer";
import Navbar from "@/component/Header/Navbar";
import Link from "next/link";

const about = () => {
  return (
    <div>
      <Navbar />

      <div className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="sm:text-center">
            <h2 className="mb-5 text-3xl font-semibold tracking-wide text-green-400 uppercase">
              About Me
            </h2>

            <div className="p-8 text-black bg-gray-100">
              <p className="leading-relaxed text-justify text-gray-600">
                Hello, {"I'm"} Bhuvaneshwaran, a skilled developer with 1.9
                years of experience.My specialty is in Full stack development and
                analytics, where I have honed my skills in developing
                high-quality applications that meet and exceed client
                expectations. Throughout my career, I have worked on challenging
                projects that require critical thinking, problem-solving, and a
                deep understanding of the {"client's"} needs. I have a passion
                for innovation and keeping up with the latest trends and
                technologies in the industry, which has helped me deliver
                cutting-edge software solutions that drive business growth.
              </p>
              <p className="mt-4 leading-relaxed text-justify text-gray-600">
                My expertise includes HTML, CSS, JavaScript, React, Node.js,
                Express, and MongoDB. I am skilled in designing responsive and
                accessible user interfaces, optimizing website performance, and
                implementing robust server-side logic. I am also experienced in
                version control using Git and have a strong understanding of
                software development best practices.
              </p>
              <p className="mt-4 leading-relaxed text-justify text-gray-600">
                In addition to my technical expertise, I have excellent
                communication and collaboration skills, which enable me to work
                effectively in teams and communicate complex technical concepts
                to non-technical stakeholders. I am also a quick learner,
                adaptable, and focused on continuous improvement, which allows
                me to excel in dynamic environments.
              </p>
              <p className="mt-4 leading-relaxed text-justify text-gray-600">
                Apart from coding, I am passionate about staying up-to-date with
                the latest web development trends and technologies. I am a
                self-motivated learner, always eager to expand my knowledge and
                improve my skills. I am also a team player, comfortable working
                in agile environments and collaborating with cross-functional
                teams to achieve project goals.
              </p>

              <p className="mt-4 leading-relaxed text-justify text-gray-600">
                {"I'm"} excited to bring my skills and experience to your team
                and contribute to creating innovative software solutions that
                drive business success.
              </p>
              <p className="mt-4 leading-relaxed text-justify text-gray-600">
                When {"I'm"} not coding, you can find me exploring new hiking
                trails, playing my guitar, or experimenting with new recipes in
                the kitchen. I believe in continuous learning, creativity, and
                attention to detail, and I strive to create meaningful and
                impactful web experiences for users.
              </p>
            </div>

            <p className="flex flex-wrap max-w-2xl mt-4 text-xl text-justify lg:mx-auto"></p>
          </div>
          <div className="mt-10">
            <div className="flex justify-center">
              <div className="inline-flex rounded-md shadow">

                <Link href="https://drive.google.com/file/d/1rRKCDQuo74CyLzm1Ft4Rfm-e4U65OWTD/view?usp=share_link"> <div
                  
                  className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-gray-800 bg-white border border-transparent rounded-md sm:text-green-500 hover:bg-gray-50"
                >
                  Download CV
                </div></Link>
               
              </div>
              <div className="inline-flex ml-3">
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-white bg-gray-700 border border-transparent rounded-md hover:bg-gray-800"
                >
                  Hire Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="dark:bg-gray-800 dark:text-gray-100">
        <div className="container max-w-5xl px-4 py-12 mx-auto">
          <div className="grid gap-4 mx-4 sm:grid-cols-12">
            <div className="col-span-12 sm:col-span-3">
              <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-violet-400">
                <h3 className="text-3xl font-semibold text-green-400">
                  Experience
                </h3>
                <span className="text-sm font-bold tracking-wider uppercase dark:text-gray-400"></span>
              </div>
            </div>
            <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
              <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-700">
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
                  <h3 className="text-xl font-semibold tracking-wide">
                    Web Developer - FixNix Inc - Internship{" "}
                  </h3>
                  <time className="text-xs tracking-wide uppercase dark:text-gray-400">
                    Aug 2019 - Apr 2020 - 9 months
                  </time>
                  <div className="mt-3">
                    <ul className="ml-4 list-disc">
                      <li className="mb-2">
                        Developed applications for front-end website
                        architecture and back-end website using
                        <span className="font-bold">
                          {" "}
                          Angular js,Css,Javascript and Bootstrap.
                        </span>
                      </li>
                      <li className="mb-2">
                        {" "}
                        Created servers and databases for functionality and
                        ensured cross-platform optimisation For mobile phones
                        And responsiveness of applications .
                      </li>
                      <li className="mb-2">
                        {" "}
                        Proficiency in server-side languages such as Python,
                        Java, PHP, and Dot Net.
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
                  <h3 className="text-xl font-semibold tracking-wide">
                    React Frontend Developer- FossFreaks - Full-time
                  </h3>
                  <time className="text-xs tracking-wide uppercase dark:text-gray-400">
                    May 2021 - Apr 2022 - 1 year
                  </time>
                  <div className="mt-3">
                    <ul className="ml-4 list-disc">
                      <li className="mb-2">
                        Developing and implementing reusable, efficient, and
                        responsive user interface (UI) components using{" "}
                        <span className="font-bold">
                          React,Vuejs, Tailwind css and Bs5.
                        </span>{" "}
                      </li>
                      <li className="mb-2">
                        Collaborating with design and backend teams to integrate
                        frontend components with backend APIs and services.
                      </li>
                      <li className="mb-2">
                        {" "}
                        Optimizing the performance of the React application by
                        identifying and resolving performance bottlenecks.
                      </li>
                      <li className="mb-2">
                        Various types of different project handled like
                        E-commerce,Social Media,Business Website Websites
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
                  <h3 className="text-xl font-semibold tracking-wide">
                    React Developer - FossFreaks- Part time
                  </h3>
                  <time className="text-xs tracking-wide uppercase dark:text-gray-400">
                    Jan 2023 - Present
                  </time>
                  <div className="mt-3">
                    <ul className="ml-4 list-disc">
                      <li className="mb-2">
                        Maintaining clean and organized code, following coding
                        standards and best practices, and using version control
                        systems.
                        <span className="font-bold">
                          React,Vuejs, Tailwind css and Bs5.
                        </span>
                      </li>
                      <li className="mb-2">
                        Continuously improving skills, learning new
                        technologies, and staying updated with the latest
                        advancements in web development.
                      </li>
                      <li className="mb-2">
                        {" "}
                        Keeping up with best practices and industry trends in
                        React and web development.
                      </li>
                      <li className="mb-2">
                        {" "}
                        Various types of different project handled like
                        E-commerce,Social Media,Business Website Websites
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default about;
