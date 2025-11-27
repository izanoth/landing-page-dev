# Data Model

This project is a static landing page and does not have a traditional data model involving a database or persistent entities. The "data" is the content displayed on the page, which is structured into the following components or sections.

## Page Sections

### 1. **Hero Section**
- **Fields**:
  - `headline`: string (e.g., "Ivan Cilento - Desenvolvedor de Software")
  - `subheadline`: string (e.g., "Criando soluções inovadoras com tecnologia de ponta.")
  - `image`: Image asset (A technology-themed illustration or photo)
  - `callToAction`: Button component (e.g., "Ver Projetos")

### 2. **About Me Section**
- **Fields**:
  - `title`: string (e.g., "Sobre Mim")
  - `paragraph1`: string (Describing experience and work style)
  - `paragraph2`: string (Detailing the tech stack)
  - `profileImage`: Image asset (Optional)

### 3. **Projects Section**
- **Entity**: `ProjectCard`
- **Fields**:
  - `title`: string (Project name)
  - `description`: string (A brief summary of the project)
  - `imageUrl`: string (Path to the project image/screenshot)
  - `projectUrl`: string (Link to the live project or repository)
  - `tags`: array of strings (e.g., ["React", "Next.js", "Tailwind"])

### 4. **Services Section**
- **Entity**: `ServiceItem`
- **Fields**:
  - `icon`: Icon component (from lucide-react)
  - `title`: string (Service name, e.g., "Desenvolvimento Web")
  - `description`: string (A brief description of the service)

### 5. **Contact Section**
- **Fields**:
  - `title`: string (e.g., "Contato")
  - `email`: string
  - `socialLinks`: array of objects
    - `platform`: string (e.g., "LinkedIn", "GitHub")
    - `url`: string
    - `icon`: Icon component

### 6. **WhatsApp Button**
- **Fields**:
  - `icon`: Icon component (Custom styled WhatsApp icon)
  - `phoneNumber`: string (The target phone number for the conversation link)
  - `defaultMessage`: string (Optional: A pre-filled message)
