import { Link } from "react-router-dom"
import { Icon } from "@iconify/react"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import profile from '../assets/pexels-photo-771742.jpeg'

const About = () => {
    const roles = [
        "Electronics & Computer Engineer",
        "Robotic Software Developer",
        "AI & IoT Developer",
        "Embedded Systems Expert",
        "Web Developer"
    ]
    const [currentRoleIndex, setCurrentRoleIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentRoleIndex((prev) => (prev + 1) % roles.length)
        }, 3000)
        return () => clearInterval(interval)
    }, [])

    return (
        <div className="bg-[var(--color-dark)] min-h-screen">
            {/* Hero Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="space-y-16"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        {/* Introduction with Photo */}
                        <div className="flex flex-col md:flex-row items-center gap-16">
                            <motion.div
                                className="flex-1 flex justify-center"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                            >
                                <div className="relative">
                                    {/* Theme-matching background */}
                                    <div className="absolute -inset-3 rounded-full bg-gradient-to-br from-[var(--color-primary)]/10 via-[var(--color-secondary)]/10 to-[var(--color-primary)]/10"></div>

                                    {/* Main photo container */}
                                    <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-full overflow-hidden border-2 border-[var(--color-primary)]/30 shadow-lg hover:shadow-xl hover:shadow-[var(--color-primary)]/20 transition-all duration-300">
                                        <motion.img
                                            src={profile}
                                            alt="Abdullah Al-Shateri"
                                            className="w-full h-full object-cover"
                                            whileHover={{ scale: 1.05 }}
                                            transition={{ duration: 0.3 }}
                                        />

                                        {/* Subtle gradient overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/5 to-transparent"></div>
                                    </div>

                                    {/* Theme-matching accent elements */}
                                    <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-[var(--color-primary)]/30"></div>
                                    <div className="absolute -bottom-2 -left-2 w-4 h-4 rounded-full bg-[var(--color-secondary)]/30"></div>
                                </div>
                            </motion.div>

                            <motion.div
                                className="md:w-3/5 space-y-8"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                <div className="space-y-6">
                                    <motion.h1
                                        className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--color-text)]"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.2 }}
                                    >
                                        About <span className="text-[var(--color-primary)]">Me</span>
                                    </motion.h1>
                                    <motion.div
                                        className="h-16 text-3xl font-bold"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.5, delay: 0.4 }}
                                    >
                                        <AnimatePresence mode="wait">
                                            <motion.span
                                                key={currentRoleIndex}
                                                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                                exit={{ opacity: 0, y: -20, scale: 0.8 }}
                                                transition={{
                                                    duration: 0.7,
                                                    type: "spring",
                                                    stiffness: 50,
                                                    damping: 15
                                                }}
                                                className="inline-block px-6 py-2 rounded-full bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/30 text-[var(--color-primary)]"
                                            >
                                                {roles[currentRoleIndex]}
                                            </motion.span>
                                        </AnimatePresence>
                                    </motion.div>
                                    <motion.p
                                        className="text-xl text-[var(--color-text-light)] leading-relaxed"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.6 }}
                                    >
                                        I'm passionate about robotics and technology. My journey in this field is driven by curiosity and a desire to create innovative solutions.
                                        When I'm not coding or working on robots, you can find me exploring new technologies and contributing to the robotics community.
                                    </motion.p>
                                </div>

                                {/* Contact Icons */}
                                <motion.div
                                    className="flex gap-8"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.8 }}
                                >
                                    <motion.a
                                        href="tel:+971502053231"
                                        className="p-4 rounded-xl bg-[var(--color-dark-lighter)] hover:bg-[var(--color-primary)]/10 transition-colors duration-300"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                        title="Call me"
                                    >
                                        <Icon icon="tabler:phone" width="32" height="32" className="text-[var(--color-primary)]" />
                                    </motion.a>
                                    <motion.a
                                        href="mailto:abdullah.alshateri.official@gmail.com"
                                        className="p-4 rounded-xl bg-[var(--color-dark-lighter)] hover:bg-[var(--color-primary)]/10 transition-colors duration-300"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                        title="Email me"
                                    >
                                        <Icon icon="tabler:mail" width="32" height="32" className="text-[var(--color-primary)]" />
                                    </motion.a>
                                    <motion.a
                                        href="https://linkedin.com/in/abdullah-al-shateri"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-4 rounded-xl bg-[var(--color-dark-lighter)] hover:bg-[var(--color-primary)]/10 transition-colors duration-300"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                        title="Connect on LinkedIn"
                                    >
                                        <Icon icon="tabler:brand-linkedin" width="32" height="32" className="text-[var(--color-primary)]" />
                                    </motion.a>
                                    <motion.a
                                        href="https://github.com/3bdul1ah"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-4 rounded-xl bg-[var(--color-dark-lighter)] hover:bg-[var(--color-primary)]/10 transition-colors duration-300"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                        title="Check my GitHub"
                                    >
                                        <Icon icon="tabler:brand-github" width="32" height="32" className="text-[var(--color-primary)]" />
                                    </motion.a>
                                </motion.div>
                            </motion.div>
                        </div>

                        {/* Action Buttons */}
                        <motion.div
                            className="flex flex-col sm:flex-row justify-center items-center gap-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 1 }}
                        >
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Link
                                    to="/projects"
                                    className="btn btn-primary inline-flex items-center px-10 py-5 text-xl w-full sm:w-auto justify-center"
                                >
                                    <Icon icon="tabler:apps" width="24" height="24" className="mr-2" />
                                    See My Projects
                                    <Icon icon="tabler:arrow-right" width="24" height="24" className="ml-2" />
                                </Link>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Link
                                    to="/resume"
                                    className="btn bg-[var(--color-dark-lighter)] text-[var(--color-text)] hover:bg-[var(--color-primary)]/10 inline-flex items-center px-10 py-5 text-xl border border-[var(--color-primary)]/30 w-full sm:w-auto justify-center"
                                >
                                    <Icon icon="tabler:file-cv" width="24" height="24" className="mr-2" />
                                    See My Resume
                                    <Icon icon="tabler:arrow-right" width="24" height="24" className="ml-2" />
                                </Link>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Skills Section */}
            <section className="py-16 bg-[var(--color-dark-lighter)]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl font-bold text-[var(--color-text)]">Technical Skills</h2>
                        <p className="text-xl text-[var(--color-text-light)]">Technologies and tools I work with</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Programming & Development",
                                icon: "tabler:code",
                                skills: ["Python", "C/C++", "JavaScript", "MATLAB", "Linux", "Git", "Docker", "Flask", "Node-RED"]
                            },
                            {
                                title: "Computer Vision & AI",
                                icon: "tabler:brain",
                                skills: ["OpenCV", "YOLO", "Depth Camera", "Pointcloud", "ESP32-CAM", "Image Processing"]
                            },
                            {
                                title: "Web & Interfaces",
                                icon: "tabler:world",
                                skills: ["ReactJS", "ROSBridge", "roslibjs", "ros2djs", "ros3djs"]
                            },
                            {
                                title: "Robotics & Autonomous",
                                icon: "tabler:robot",
                                skills: ["ROS1/ROS2", "Gmapping", "Cartographer", "SLAM Toolbox", "FAST-LIO", "LIO-SAM", "DWA Planner"]
                            },
                            {
                                title: "Embedded Systems",
                                icon: "tabler:cpu",
                                skills: ["STM32", "ESP32", "Raspberry Pi", "Intel NUC", "Jetson Nano", "2D/3D LiDAR", "IMU", "Encoders"]
                            },
                            {
                                title: "Networking & Protocols",
                                icon: "tabler:network",
                                skills: ["MQTT", "WebSocket", "HTTP", "TCP/UDP", "Wireshark"]
                            }
                        ].map((category, index) => (
                            <motion.div
                                key={category.title}
                                className="card p-6"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ scale: 1.02 }}
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 bg-[var(--color-primary)]/10 rounded-lg">
                                        <Icon icon={category.icon} width="24" height="24" className="text-[var(--color-primary)]" />
                                    </div>
                                    <h3 className="text-xl font-bold text-[var(--color-text)]">{category.title}</h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {category.skills.map((skill, skillIndex) => (
                                        <motion.span
                                            key={skill}
                                            className="px-2.5 py-1 text-xs font-medium rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] border border-[var(--color-primary)]/20 hover:bg-[var(--color-primary)]/20 hover:border-[var(--color-primary)]/30 transition-colors duration-300"
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.95 }}
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.3, delay: skillIndex * 0.1 }}
                                        >
                                            {skill}
                                        </motion.span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
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
                            <Link
                                className="btn btn-primary inline-flex items-center px-10 py-5 text-xl"
                                onClick={() => window.open(`http://wa.me/971502053231`, "_blank")}
                            >
                                <Icon icon="tabler:message-circle" width="24" height="24" className="mr-2" />
                                Get In Touch
                                <Icon icon="tabler:arrow-right" width="24" height="24" className="ml-2" />
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}

export default About
