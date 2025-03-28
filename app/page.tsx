import Link from "next/link"
// Import Instagram icon at the top
import { Instagram, Linkedin, Mail, FileText, ArrowRight, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="font-bold text-xl">
            Ketul Sagar{" "}
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link>
            <Link href="#skills" className="text-muted-foreground hover:text-foreground transition-colors">
              Skills
            </Link>
            <Link href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">
              Projects
            </Link>
            <Link href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon">
              <Instagram className="h-4 w-4" />
              <span className="sr-only">Instagram</span>
            <Button variant="outline" size="icon">
              <Linkedin className="h-4 w-4" />
              <span className="sr-only">LinkedIn</span>
            </Button>
            <Button variant="outline" size="icon">
              <Mail className="h-4 w-4" />
              <span className="sr-only">Email</span>
            </Button>
          </div>
        </div>
      </header>

      <main className="container py-10">
        {/* Hero Section */}
        <section className="py-12 md:py-20 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Data Science & AI Specialist</h1>
            <p className="text-xl text-muted-foreground mb-6">
              IIT Kharagpur undergrad with interest in machine learning, data analytics, and AI-driven solutions.
            </p>
            <div className="flex gap-4">
              <Button asChild>
                <Link href="#projects">
                  View Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/Ketul_Sagar_Resume.pdf" target="_blank">
                  <FileText className="mr-2 h-4 w-4" />
                  Download CV
                </Link>
              </Button>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-primary/20">
              <img src="/profile.jpg" alt="Profile" className="object-cover w-full h-full" />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-12 border-t">
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-lg mb-4">
                I&apos;m a passionate Data Scientist and AI enthusiast with a strong foundation in data analytics and
                machine learning from IIT Kharagpur. My journey in the world of data began during my undergraduate
                studies, where I discovered my passion for extracting meaningful insights from complex datasets.
              </p>
              <p className="text-lg mb-4">
                With expertise in machine learning algorithms, statistical analysis, and data visualization, I strive to
                develop AI-driven solutions that address real-world challenges. My research interests include deep
                learning, natural language processing, and computer vision.
              </p>
            </div>
            <div className="space-y-4">
              <div className="border rounded-lg p-4">
                <h3 className="font-medium mb-2">Education</h3>
                <p className="font-bold">B.S in Chemistry</p>
                <p>Indian Institute of Technology, Kharagpur</p>
                <p className="text-muted-foreground">2022 - 2026</p>
              </div>
              <div className="border rounded-lg p-4">
                <h3 className="font-medium mb-2">Research Interests</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge>Machine Learning</Badge>
                  <Badge>Deep Learning</Badge>
                  <Badge>Natural Language Processing</Badge>
                  <Badge>Computer Vision</Badge>
                  <Badge>End to end AI Solutions</Badge>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-12 border-t">
          <h2 className="text-3xl font-bold mb-8">Skills & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <SkillCard
              title="Machine Learning"
              skills={[
                "Supervised Learning",
                "Unsupervised Learning",
                "Ensemble Methods",
                "Feature Engineering",
                "Model Evaluation",
              ]}
            />
            <SkillCard
              title="Data Analysis"
              skills={[
                "Statistical Analysis",
                "Data Visualization",
                "Exploratory Data Analysis",
                "A/B Testing",
                "Time Series Analysis",
              ]}
            />
            <SkillCard
              title="Programming"
              skills={["Python", "SQL", "TensorFlow", "PyTorch", "Scikit-learn", "Langchain"]}
            />
            <SkillCard title="Development" skills={["Front-end ", "Tailwind CSS", "React", "Fast API", "Flask"]} />
            <SkillCard title="Software" skills={["Google Colab", "Git", "Git Hub", "Blender", "AWS"]} />
            <SkillCard
              title="Soft Skills"
              skills={["Problem Solving", "Communication", "Team Collaboration", "Project Management", "Research"]}
            />
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-12 border-t">
          <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProjectCard
              title="Credit card fraud detector"
              description="Engineered a robust credit fraud detection model by addressing imbalanced datasets with SMOTE, detecting fraud cases with an 98% accuracy."
              technologies={["Python", "Sci-kit learn", "Keras", "Imbalanced Dataset"]}
              image="/projects/fraud-detection.jpg"
              link="https://colab.research.google.com/drive/1xVHkQWBMa3QYms_EaZamOCQzVKWltlt4?usp=sharing"
            />
            <ProjectCard
              title="AI-Powered Research paper summarizer Chatbot"
              description="Developed a chatbot that summarizes research papers and answers queries using LLM  and implemented document embeddings and retrieval using LlamaIndex"
              technologies={["Langchain", "Fast API", "Python", "Flask", "AWS"]}
              image="/projects/chatbot.jpg"
              link="https://github.com/your-username/fraud-detection"
            />
            <ProjectCard
              title="Computer Vision for Pneumonia Detection "
              description="Implemented a computer vision solution to analyze X-Ray scans of patients to achieve 92.6% accuracy, 0.96 recall score."
              technologies={["OpenCV", "Tensor-Flow", "Keras", "Heatmap Analysis"]}
              image="/projects/pneumonia-detection.jpg"
              link="https://colab.research.google.com/drive/1ibwRlFAdB059f2juvQSlMUvlDI-tp9o7?usp=sharing"
            />
            <ProjectCard
              title="Walmart M5 Time Series Forecasting"
              description="Developed a LightGBM regressor model to forecast daily sales for the next 28 days."
              technologies={["Time Series Analysis", "Feature Engineering", "Python"]}
              image="/projects/time-series.jpg"
              link="https://www.kaggle.com/code/ketulsagar/time-series-forecasting-eda-fe-modelling"
            />
          </div>
        </section>


        {/* Contact Section */}
        <section id="contact" className="py-12 border-t">
          <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-lg mb-6">
                I&apos;m always open to discussing new projects, opportunities, or partnerships. Feel free to reach out
                to me through any of the following channels:
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <Link href="mailto:ketulnsagar61004@gmail.com">ketulnsagar61004@gmail.com</Link>
                </div>
                <div className="flex items-center gap-3">
                  <Linkedin className="h-5 w-5 text-primary" />
                  <Link href="https://www.linkedin.com/in/ketul-sagar/" target="_blank">linkedin.com/in/ketul-sagar</Link>
                </div>
                <div className="flex items-center gap-3">
                  <Instagram className="h-5 w-5 text-primary" />
                  <Link href="https://www.instagram.com/your_username" target="_blank">@your_username</Link>
                </div>
              </div>
            </div>
            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-medium mb-4">Send Me a Message</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <input id="name" className="w-full px-3 py-2 border rounded-md" placeholder="Your Name" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="w-full px-3 py-2 border rounded-md"
                      placeholder="Your Email"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <input id="subject" className="w-full px-3 py-2 border rounded-md" placeholder="Subject" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-3 py-2 border rounded-md resize-none"
                    placeholder="Your Message"
                  />
                </div>
                <Button className="w-full">Send Message</Button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-8 bg-muted/40">
        <div className="container flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-muted-foreground">© 2024 Ketul Sagar. All rights reserved.</p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" asChild>
              <Link href="https://www.instagram.com/your_username" target="_blank">
                <Instagram className="h-4 w-4" />
                <span className="sr-only">Instagram</span>
              </Link>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <Link href="https://www.linkedin.com/in/ketul-sagar/" target="_blank">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <Link href="mailto:ketulnsagar61004@gmail.com">
                <Mail className="h-4 w-4" />
                <span className="sr-only">Email</span>
              </Link>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  )
}

function SkillCard({ title, skills }: { title: string; skills: string[] }) {
  return (
    <Card>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-4">{title}</h3>
        <ul className="space-y-2">
          {skills.map((skill, index) => (
            <li key={index} className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-primary" />
              <span>{skill}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

function ProjectCard({
  title,
  description,
  technologies,
  image,
  link
}: {
  title: string
  description: string
  technologies: string[]
  image: string
  link: string
}) {
  return (
    <Card className="overflow-hidden">
      <div className="h-48 overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover transition-transform hover:scale-105"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <Badge key={index} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
        <Button variant="outline" size="sm" asChild>
          <Link href={link} target="_blank">
            View Project
            <ArrowRight className="ml-2 h-3 w-3" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}

function ExperienceCard({
  title,
  company,
  period,
  description,
  achievements,
}: {
  title: string
  company: string
  period: string
  description: string
  achievements: string[]
}) {
  return (
    <div className="border rounded-lg p-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
        <div>
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-primary font-medium">{company}</p>
        </div>
        <Badge className="mt-2 md:mt-0 w-fit">{period}</Badge>
      </div>
      <p className="mb-4">{description}</p>
      <h4 className="font-medium mb-2">Key Achievements:</h4>
      <ul className="space-y-2">
        {achievements.map((achievement, index) => (
          <li key={index} className="flex items-start gap-2">
            <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2" />
            <span>{achievement}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

