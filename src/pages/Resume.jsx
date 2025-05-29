import { Link } from "react-router-dom"
import { Icon } from "@iconify/react"
import ExperienceCard from "../components/ExperienceCard"
import EducationCard from "../components/EducationCard"
import experienceData from "../data/experience.json"
import educationData from "../data/education.json"
import { motion } from "framer-motion"

const Resume = () => {
    const fadeInUp = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 }
    }

    const timelineItem = {
        initial: { opacity: 0, x: -50 },
        whileInView: { opacity: 1, x: 0 },
        viewport: { once: true },
        transition: { duration: 0.5 }
    }

    return (
        <div className="bg-[var(--color-dark)] min-h-screen">
            {/* Hero Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center space-y-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <span className="inline-block px-4 py-2 text-sm font-medium text-[var(--color-text)] bg-[var(--color-primary)]/20 border border-[var(--color-primary)]/30 rounded-full">
                                Professional Experience
                            </span>
                        </motion.div>
                        <motion.h1
                            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--color-text)]"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            My <span className="text-[var(--color-primary)]">Resume</span>
                        </motion.h1>
                        <motion.p
                            className="text-xl text-[var(--color-text-light)] max-w-3xl mx-auto"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            A detailed overview of my professional experience, education, and skills
                        </motion.p>
                        <motion.div
                            className="flex flex-wrap justify-center gap-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                        >
                            <motion.a
                                href="tel:+971502053231"
                                className="flex items-center gap-2 text-[var(--color-text-light)] hover:text-[var(--color-primary)] transition-colors"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Icon icon="tabler:phone" width="20" height="20" />
                                +971 50 205 3231
                            </motion.a>
                            <motion.a
                                href="mailto:abdullah.alshateri.official@gmail.com"
                                className="flex items-center gap-2 text-[var(--color-text-light)] hover:text-[var(--color-primary)] transition-colors"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Icon icon="tabler:mail" width="20" height="20" />
                                abdullah.alshateri.official@gmail.com
                            </motion.a>
                            <motion.a
                                href="https://linkedin.com/in/abdullah-al-shateri"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-[var(--color-text-light)] hover:text-[var(--color-primary)] transition-colors"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Icon icon="tabler:brand-linkedin" width="20" height="20" />
                                LinkedIn
                            </motion.a>
                            <motion.a
                                href="https://github.com/3bdul1ah"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-[var(--color-text-light)] hover:text-[var(--color-primary)] transition-colors"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Icon icon="tabler:brand-github" width="20" height="20" />
                                GitHub
                            </motion.a>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.8 }}
                        >
                            <a
                                href="https://drive.google.com/file/d/1afPaKGiTZgndCwn0kmovNZw4u63lG2nB/view?usp=sharing"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary inline-flex items-center px-10 py-5 text-xl"
                            >
                                <Icon icon="tabler:file-cv" width="24" height="24" className="mr-2" />
                                Download CV
                                <Icon icon="tabler:download" width="24" height="24" className="ml-2" />
                            </a>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Education Section */}
            <section className="py-16 bg-[var(--color-dark-lighter)]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl font-bold text-[var(--color-text)] mb-8 text-center">Education</h2>
                        <motion.div
                            className="card p-8"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.2 }}
                        >
                            <div className="flex items-start gap-6">
                                <div className="p-4 bg-[var(--color-primary)]/10 rounded-xl">
                                    <Icon icon="tabler:school" width="32" height="32" className="text-[var(--color-primary)]" />
                                </div>
                                <div className="flex-1 space-y-6">
                                    <div>
                                        <h3 className="text-2xl font-bold text-[var(--color-text)]">UTM Malaysia</h3>
                                        <p className="text-[var(--color-primary)] text-lg font-medium mt-1">B.Eng. in Electrical & Electronics Engineering</p>
                                        <p className="text-[var(--color-text-light)] mt-2">2021–2025 (Graduating July)</p>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-4">
                                            <div>
                                                <h4 className="text-[var(--color-text)] font-medium mb-2">Specialization</h4>
                                                <div className="flex items-center gap-2 text-[var(--color-text-light)]">
                                                    <Icon icon="tabler:cpu" className="text-[var(--color-primary)]" />
                                                    Computer Engineering
                                                </div>
                                            </div>
                                            <div>
                                                <h4 className="text-[var(--color-text)] font-medium mb-2">Academic Performance</h4>
                                                <div className="flex items-center gap-2 text-[var(--color-text-light)]">
                                                    <Icon icon="tabler:chart-bar" className="text-[var(--color-primary)]" />
                                                    CGPA: 3.82 / 4.00
                                                </div>
                                            </div>
                                            <div>
                                                <h4 className="text-[var(--color-text)] font-medium mb-2">Final Year Project</h4>
                                                <div className="flex items-center gap-2 text-[var(--color-text-light)]">
                                                    <Icon icon="tabler:robot" className="text-[var(--color-primary)]" />
                                                    ROS-Based Teleoperated Robot for Hazard Mapping
                                                </div>
                                            </div>
                                        </div>
                                        <div className="space-y-4">
                                            <div>
                                                <h4 className="text-[var(--color-text)] font-medium mb-2">Achievements</h4>
                                                <ul className="space-y-2">
                                                    <li className="flex items-center gap-2 text-[var(--color-text-light)]">
                                                        <Icon icon="tabler:trophy" className="text-[var(--color-primary)]" />
                                                        7× Dean's List Honoree
                                                    </li>
                                                    <li className="flex items-center gap-2 text-[var(--color-text-light)]">
                                                        <Icon icon="tabler:book" className="text-[var(--color-primary)]" />
                                                        IEEE-Published Author
                                                    </li>
                                                    <li className="flex items-center gap-2 text-[var(--color-text-light)]">
                                                        <Icon icon="tabler:award" className="text-[var(--color-primary)]" />
                                                        Best Project Award – Capstone Showcase 2025
                                                    </li>
                                                    <li className="flex items-center gap-2 text-[var(--color-text-light)]">
                                                        <Icon icon="tabler:medal" className="text-[var(--color-primary)]" />
                                                        Gold Medal – Sustainable Entrepreneurial Mindset Showcase
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Experience Timeline */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.h2
                        className="text-3xl font-bold text-[var(--color-text)] mb-12 text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        Professional Experience
                    </motion.h2>

                    <div className="relative">
                        {/* Timeline Line */}
                        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[var(--color-primary)]/30" />

                        {/* Timeline Items */}
                        <div className="space-y-12">
                            {/* A2Tech */}
                            <motion.div
                                className="relative pl-20"
                                {...timelineItem}
                            >
                                <div className="absolute left-0 w-16 h-16 bg-[var(--color-primary)]/10 rounded-full flex items-center justify-center">
                                    <Icon icon="tabler:robot" width="24" height="24" className="text-[var(--color-primary)]" />
                                </div>
                                <div className="card p-6">
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <h3 className="text-xl font-bold text-[var(--color-text)]">Robotics Software Engineer</h3>
                                            <p className="text-[var(--color-primary)]">A2Tech Sdn Bhd</p>
                                        </div>
                                        <span className="text-[var(--color-text-light)]">Oct 2024–Present</span>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="flex flex-wrap gap-2">
                                            <span className="px-3 py-1 text-sm font-medium rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] border border-[var(--color-primary)]/30">
                                                <Icon icon="tabler:code" className="inline-block mr-1" /> ROS2
                                            </span>
                                            <span className="px-3 py-1 text-sm font-medium rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] border border-[var(--color-primary)]/30">
                                                <Icon icon="tabler:map" className="inline-block mr-1" /> SLAM
                                            </span>
                                            <span className="px-3 py-1 text-sm font-medium rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] border border-[var(--color-primary)]/30">
                                                <Icon icon="tabler:react" className="inline-block mr-1" /> ReactJS
                                            </span>
                                        </div>
                                        <div className="space-y-3">
                                            <div className="flex items-start gap-3">
                                                <Icon icon="tabler:check-circle" className="text-[var(--color-primary)] mt-1 flex-shrink-0" />
                                                <div>
                                                    <h4 className="font-medium text-[var(--color-text)]">Reconnaissance Robot Development</h4>
                                                    <p className="text-[var(--color-text-light)]">Developed a ROS2-based reconnaissance robot with multi-sensor fusion for hazardous environment mapping</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <Icon icon="tabler:check-circle" className="text-[var(--color-primary)] mt-1 flex-shrink-0" />
                                                <div>
                                                    <h4 className="font-medium text-[var(--color-text)]">3D SLAM Implementation</h4>
                                                    <p className="text-[var(--color-text-light)]">Implemented advanced 3D SLAM algorithms (FAST-LIO, LIO-SAM) and custom gas mapping for environmental monitoring</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <Icon icon="tabler:check-circle" className="text-[var(--color-primary)] mt-1 flex-shrink-0" />
                                                <div>
                                                    <h4 className="font-medium text-[var(--color-text)]">Web Dashboard Development</h4>
                                                    <p className="text-[var(--color-text-light)]">Built a real-time ReactJS web dashboard with ROSBridge for enhanced remote robot control and monitoring</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Aonic */}
                            <motion.div
                                className="relative pl-20"
                                {...timelineItem}
                            >
                                <div className="absolute left-0 w-16 h-16 bg-[var(--color-primary)]/10 rounded-full flex items-center justify-center">
                                    <Icon icon="tabler:robot" width="24" height="24" className="text-[var(--color-primary)]" />
                                </div>
                                <div className="card p-6">
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <h3 className="text-xl font-bold text-[var(--color-text)]">Robotics Intern</h3>
                                            <p className="text-[var(--color-primary)]">Aonic SJ HQ</p>
                                        </div>
                                        <span className="text-[var(--color-text-light)]">Jul–Oct 2024</span>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="flex flex-wrap gap-2">
                                            <span className="px-3 py-1 text-sm font-medium rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] border border-[var(--color-primary)]/30">
                                                <Icon icon="tabler:car" className="inline-block mr-1" /> UGV
                                            </span>
                                            <span className="px-3 py-1 text-sm font-medium rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] border border-[var(--color-primary)]/30">
                                                <Icon icon="tabler:map" className="inline-block mr-1" /> SLAM
                                            </span>
                                            <span className="px-3 py-1 text-sm font-medium rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] border border-[var(--color-primary)]/30">
                                                <Icon icon="tabler:route" className="inline-block mr-1" /> Navigation
                                            </span>
                                        </div>
                                        <div className="space-y-3">
                                            <div className="flex items-start gap-3">
                                                <Icon icon="tabler:check-circle" className="text-[var(--color-primary)] mt-1 flex-shrink-0" />
                                                <div>
                                                    <h4 className="font-medium text-[var(--color-text)]">Autonomous UGV Development</h4>
                                                    <p className="text-[var(--color-text-light)]">Developed an autonomous UGV with advanced motor control and sensor fusion in under two months</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <Icon icon="tabler:check-circle" className="text-[var(--color-primary)] mt-1 flex-shrink-0" />
                                                <div>
                                                    <h4 className="font-medium text-[var(--color-text)]">Navigation System Integration</h4>
                                                    <p className="text-[var(--color-text-light)]">Integrated SLAM (Gmapping, Cartographer) and DWA for real-time navigation and obstacle avoidance</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* UTM FKE Lab */}
                            <motion.div
                                className="relative pl-20"
                                {...timelineItem}
                            >
                                <div className="absolute left-0 w-16 h-16 bg-[var(--color-primary)]/10 rounded-full flex items-center justify-center">
                                    <Icon icon="tabler:microscope" width="24" height="24" className="text-[var(--color-primary)]" />
                                </div>
                                <div className="card p-6">
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <h3 className="text-xl font-bold text-[var(--color-text)]">Research Assistant</h3>
                                            <p className="text-[var(--color-primary)]">UTM FKE Lab</p>
                                        </div>
                                        <span className="text-[var(--color-text-light)]">Mar–Jul 2024</span>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="flex flex-wrap gap-2">
                                            <span className="px-3 py-1 text-sm font-medium rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] border border-[var(--color-primary)]/30">
                                                <Icon icon="tabler:brain" className="inline-block mr-1" /> AI
                                            </span>
                                            <span className="px-3 py-1 text-sm font-medium rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] border border-[var(--color-primary)]/30">
                                                <Icon icon="tabler:device-mobile" className="inline-block mr-1" /> IoT
                                            </span>
                                            <span className="px-3 py-1 text-sm font-medium rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] border border-[var(--color-primary)]/30">
                                                <Icon icon="tabler:file-text" className="inline-block mr-1" /> IEEE
                                            </span>
                                        </div>
                                        <div className="space-y-3">
                                            <div className="flex items-start gap-3">
                                                <Icon icon="tabler:check-circle" className="text-[var(--color-primary)] mt-1 flex-shrink-0" />
                                                <div>
                                                    <h4 className="font-medium text-[var(--color-text)]">AI-IoT Voice Assistant</h4>
                                                    <p className="text-[var(--color-text-light)]">Developed an AI-IoT voice assistant for home automation and published an IEEE paper on the implementation</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <Icon icon="tabler:check-circle" className="text-[var(--color-primary)] mt-1 flex-shrink-0" />
                                                <div>
                                                    <h4 className="font-medium text-[var(--color-text)]">Performance Optimization</h4>
                                                    <p className="text-[var(--color-text-light)]">Achieved 6.78× improved CPU utilization and 2× faster control performance through optimization</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Airost Club */}
                            <motion.div
                                className="relative pl-20"
                                {...timelineItem}
                            >
                                <div className="absolute left-0 w-16 h-16 bg-[var(--color-primary)]/10 rounded-full flex items-center justify-center">
                                    <Icon icon="tabler:device-mobile" width="24" height="24" className="text-[var(--color-primary)]" />
                                </div>
                                <div className="card p-6">
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <h3 className="text-xl font-bold text-[var(--color-text)]">IoT Developer</h3>
                                            <p className="text-[var(--color-primary)]">Airost Club</p>
                                        </div>
                                        <span className="text-[var(--color-text-light)]">Oct–Nov 2023</span>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="flex flex-wrap gap-2">
                                            <span className="px-3 py-1 text-sm font-medium rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] border border-[var(--color-primary)]/30">
                                                <Icon icon="tabler:device-mobile" className="inline-block mr-1" /> ESP32
                                            </span>
                                            <span className="px-3 py-1 text-sm font-medium rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] border border-[var(--color-primary)]/30">
                                                <Icon icon="tabler:cloud" className="inline-block mr-1" /> MQTT
                                            </span>
                                            <span className="px-3 py-1 text-sm font-medium rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] border border-[var(--color-primary)]/30">
                                                <Icon icon="tabler:chart-line" className="inline-block mr-1" /> Monitoring
                                            </span>
                                        </div>
                                        <div className="space-y-3">
                                            <div className="flex items-start gap-3">
                                                <Icon icon="tabler:check-circle" className="text-[var(--color-primary)] mt-1 flex-shrink-0" />
                                                <div>
                                                    <h4 className="font-medium text-[var(--color-text)]">Environmental Monitoring System</h4>
                                                    <p className="text-[var(--color-text-light)]">Developed a smart environmental monitoring system using ESP32 and MQTT protocol for real-time data collection</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* SNS AD HQ */}
                            <motion.div
                                className="relative pl-20"
                                {...timelineItem}
                            >
                                <div className="absolute left-0 w-16 h-16 bg-[var(--color-primary)]/10 rounded-full flex items-center justify-center">
                                    <Icon icon="tabler:camera" width="24" height="24" className="text-[var(--color-primary)]" />
                                </div>
                                <div className="card p-6">
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <h3 className="text-xl font-bold text-[var(--color-text)]">Computer Vision Intern & Team Lead</h3>
                                            <p className="text-[var(--color-primary)]">SNS AD HQ</p>
                                        </div>
                                        <span className="text-[var(--color-text-light)]">Aug–Oct 2023</span>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="flex flex-wrap gap-2">
                                            <span className="px-3 py-1 text-sm font-medium rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] border border-[var(--color-primary)]/30">
                                                <Icon icon="tabler:camera" className="inline-block mr-1" /> ESP32-CAM
                                            </span>
                                            <span className="px-3 py-1 text-sm font-medium rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] border border-[var(--color-primary)]/30">
                                                <Icon icon="tabler:brain" className="inline-block mr-1" /> YOLO
                                            </span>
                                            <span className="px-3 py-1 text-sm font-medium rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] border border-[var(--color-primary)]/30">
                                                <Icon icon="tabler:users" className="inline-block mr-1" /> Team Lead
                                            </span>
                                        </div>
                                        <div className="space-y-3">
                                            <div className="flex items-start gap-3">
                                                <Icon icon="tabler:check-circle" className="text-[var(--color-primary)] mt-1 flex-shrink-0" />
                                                <div>
                                                    <h4 className="font-medium text-[var(--color-text)]">License Plate Recognition System</h4>
                                                    <p className="text-[var(--color-text-light)]">Led a team of interns in building an ESP32-CAM-based vehicle license plate recognition system</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <Icon icon="tabler:check-circle" className="text-[var(--color-primary)] mt-1 flex-shrink-0" />
                                                <div>
                                                    <h4 className="font-medium text-[var(--color-text)]">YOLO Model Implementation</h4>
                                                    <p className="text-[var(--color-text-light)]">Achieved 85% detection accuracy using YOLO-based vehicle recognition models</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Certifications & Activities */}
            <section className="py-16 bg-[var(--color-dark-lighter)]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.h2
                        className="text-3xl font-bold text-[var(--color-text)] mb-12 text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        Certifications & Activities
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Certifications */}
                        <motion.div
                            className="card p-6"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 bg-[var(--color-primary)]/10 rounded-lg">
                                    <Icon icon="tabler:certificate" width="24" height="24" className="text-[var(--color-primary)]" />
                                </div>
                                <h3 className="text-xl font-bold text-[var(--color-text)]">Certifications</h3>
                            </div>
                            <ul className="space-y-3">
                                {[
                                    {
                                        name: "ROS: Zero to Hero",
                                        link: "https://www.udemy.com/certificate/UC-3b8fd9b2-4cf5-4505-b426-d001e9535ecb/"
                                    },
                                    {
                                        name: "React + ROSBridge Interfaces",
                                        link: "https://www.udemy.com/certificate/UC-3138ae41-eee3-4de6-971e-2b6427724df7/"
                                    },
                                    {
                                        name: "Computer Networks Fundamentals",
                                        link: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-3fa36fb0-cfb9-4de6-971e-2b6427724df7.pdf"
                                    },
                                    {
                                        name: "Ultimate C++ Beginner Course",
                                        link: "https://www.udemy.com/certificate/UC-cbb261ca-fc11-40be-83cc-83bbb97475a7/"
                                    }
                                ].map((cert, index) => (
                                    <motion.li
                                        key={cert.name}
                                        className="flex items-center gap-2 text-[var(--color-text-light)]"
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.3, delay: index * 0.1 }}
                                    >
                                        <Icon icon="tabler:check" width="16" height="16" className="text-[var(--color-primary)]" />
                                        <a
                                            href={cert.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="hover:text-[var(--color-primary)] transition-colors"
                                        >
                                            {cert.name}
                                        </a>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Activities */}
                        <motion.div
                            className="card p-6"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 bg-[var(--color-primary)]/10 rounded-lg">
                                    <Icon icon="tabler:users" width="24" height="24" className="text-[var(--color-primary)]" />
                                </div>
                                <h3 className="text-xl font-bold text-[var(--color-text)]">Extracurricular Activities</h3>
                            </div>
                            <ul className="space-y-3">
                                {[
                                    {
                                        name: "ROS2 Content Creator – YouTube Instructor",
                                        link: "https://www.youtube.com/playlist?list=PLiwgm7mP4ZsxOYq1wvVFgHFLM3PWZLY__"
                                    },
                                    {
                                        name: "IEEE UTM Chapter – Technical Team Member",
                                        link: null
                                    },
                                    {
                                        name: "Academic Committee Head – UTM Student Club",
                                        link: null
                                    },
                                    {
                                        name: "Image Processing for Robotics Workshop – Instructor",
                                        link: null
                                    }
                                ].map((activity, index) => (
                                    <motion.li
                                        key={activity.name}
                                        className="flex items-center gap-2 text-[var(--color-text-light)]"
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.3, delay: index * 0.1 }}
                                    >
                                        <Icon icon="tabler:check" width="16" height="16" className="text-[var(--color-primary)]" />
                                        {activity.link ? (
                                            <a
                                                href={activity.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="hover:text-[var(--color-primary)] transition-colors"
                                            >
                                                {activity.name}
                                            </a>
                                        ) : (
                                            activity.name
                                        )}
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-20 bg-gradient-to-br from-[var(--color-primary)]/20 via-[var(--color-secondary)]/20 to-[var(--color-primary)]/20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        <h2 className="text-4xl sm:text-5xl font-bold text-[var(--color-text)]">Let's Work Together</h2>
                        <p className="text-xl text-[var(--color-text-light)] max-w-3xl mx-auto">
                            I'm currently available for freelance work or full-time positions. Let's build something amazing together!
                        </p>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <a
                                href="http://wa.me/971502053231"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary inline-flex items-center px-10 py-5 text-xl"
                            >
                                <Icon icon="tabler:message-circle" width="24" height="24" className="mr-2" />
                                Get In Touch
                                <Icon icon="tabler:arrow-right" width="24" height="24" className="ml-2" />
                            </a>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}

export default Resume
