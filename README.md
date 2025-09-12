# 🌟 PRODHOSH V.S - 3D Animated Portfolio Website

<div align="center">

![Portfolio Banner](https://img.shields.io/badge/Portfolio-3D%20Animated-6366f1?style=for-the-badge&logo=three.js&logoColor=white)
![Status](https://img.shields.io/badge/Status-Live-00d26a?style=for-the-badge)
![Version](https://img.shields.io/badge/Version-1.0.0-8b5cf6?style=for-the-badge)

**A stunning, interactive 3D portfolio website showcasing the journey of an aspiring Data Scientist**

 [🔗 Live Demo](https://prodhosh.github.io/portfolio/) • [📖 Documentation](#features) • [🛠️ Installation](#installation) • [🎨 Customization](#customization)

</div>

---

## 📖 **The Story Behind This Portfolio**

> *"I love math so much that I chose Data Science just to live in numbers!"* - Prodhosh V.S

This portfolio website isn't just a collection of projects and achievements—it's a digital manifestation of a passionate journey through the realms of Computer Science and Data Science. Built by **Prodhosh V.S**, a first-year Computer Science student at VIT Chennai and simultaneously pursuing BS in Data Science at IIT Madras, this website represents the perfect blend of technical expertise and creative vision.

### 🎯 **The Vision**

In an era where digital presence defines professional identity, this portfolio transcends traditional boundaries by offering:
- **Immersive 3D Experience**: Using Three.js particle animations to create a mesmerizing background
- **Interactive Storytelling**: Every section unfolds the journey from academic pursuits to real-world applications
- **Modern Design Language**: Glassmorphism, smooth animations, and responsive design principles
- **Technical Excellence**: Clean code, optimized performance, and accessibility-first approach

---

## ✨ **Features That Make It Special**

<details>
<summary>🎨 <strong>Visual Excellence</strong></summary>

- **3D Particle Animation Background**: 5000+ animated particles creating a dynamic, ever-changing backdrop
- **Glassmorphism Design**: Modern glass-like UI elements with backdrop blur effects
- **Gradient Magic**: Beautiful color transitions using CSS gradients and animations
- **Responsive Typography**: Clamp-based font sizing that adapts perfectly across devices
- **Smooth Animations**: CSS keyframes and JavaScript-powered interactions
- **Theme Toggle**: Light/Dark mode with smooth transition effects

</details>

<details>
<summary>⚡ <strong>Interactive Elements</strong></summary>

- **Floating Navigation**: Position-fixed nav bar with smooth scrolling and active state management
- **Hover Effects**: Cards lift, glow, and transform on interaction
- **Typing Animation**: Hero text types out character by character
- **Scroll Animations**: Elements fade in as they enter viewport using Intersection Observer
- **3D Transforms**: Skill cards rotate in 3D space on hover
- **Dynamic Background**: Particle system responds to camera movement

</details>

<details>
<summary>🏗️ <strong>Technical Architecture</strong></summary>

- **Vanilla JavaScript**: No frameworks, pure performance
- **Three.js Integration**: Professional 3D graphics and animations
- **CSS Grid & Flexbox**: Modern layout techniques for perfect responsiveness
- **Intersection Observer API**: Performance-optimized scroll animations
- **CSS Custom Properties**: Theming system with CSS variables
- **Mobile-First Design**: Progressive enhancement for all devices

</details>

<details>
<summary>📱 <strong>User Experience</strong></summary>

- **Intuitive Navigation**: Smart nav highlighting based on scroll position
- **Accessibility Focus**: Semantic HTML, proper ARIA labels, keyboard navigation
- **Loading Performance**: Optimized assets and lazy loading
- **Cross-Browser Compatibility**: Tested across modern browsers
- **Touch Interactions**: Mobile-optimized gestures and interactions

</details>

---

## 🛠️ **Technology Stack**

<div align="center">

### **Frontend Technologies**
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Three.js](https://img.shields.io/badge/Three.js-000000?style=for-the-badge&logo=three.js&logoColor=white)

### **Design & Animation**
![CSS Animations](https://img.shields.io/badge/CSS_Animations-FF6B6B?style=for-the-badge&logo=css3&logoColor=white)
![WebGL](https://img.shields.io/badge/WebGL-990000?style=for-the-badge&logo=webgl&logoColor=white)
![Responsive Design](https://img.shields.io/badge/Responsive_Design-4ECDC4?style=for-the-badge&logo=css3&logoColor=white)

### **Tools & Libraries**
![Font Awesome](https://img.shields.io/badge/Font_Awesome-339AF0?style=for-the-badge&logo=fontawesome&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
![VS Code](https://img.shields.io/badge/VS_Code-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white)

</div>

---

## 🎨 **Design Philosophy**

### **Color Palette**
```css
:root {
  --primary-color: #6366f1;    /* Indigo - Trust & Stability */
  --secondary-color: #8b5cf6;  /* Purple - Creativity & Innovation */
  --accent-color: #06b6d4;     /* Cyan - Modern & Fresh */
  --bg-dark: #0f172a;          /* Slate - Professional */
  --text-light: #f8fafc;       /* Near White - Readability */
}
```

### **Typography Hierarchy**
- **Hero Text**: 8rem (clamp) - Bold, gradient, animated
- **Section Titles**: 3rem - Strong visual hierarchy
- **Body Text**: 1.2rem - Optimal readability
- **Captions**: 0.9rem - Subtle but legible

### **Layout Principles**
- **Grid-First**: CSS Grid for complex layouts
- **Progressive Enhancement**: Mobile-first responsive design
- **Visual Balance**: Golden ratio proportions
- **White Space**: Generous spacing for breathing room

---

## 📋 **Project Structure**

```
portfolio-website/
│
├── index.html              # Main HTML file
├── README.md              # This comprehensive guide
├── assets/
│   ├── images/            # Project screenshots, profile images
│   ├── icons/             # Custom icons and favicons
│   └── documents/         # Resume PDF, certificates
├── css/
│   ├── main.css           # Core styles (embedded in HTML)
│   ├── animations.css     # Animation keyframes
│   └── responsive.css     # Media queries
├── js/
│   ├── main.js            # Core JavaScript (embedded)
│   ├── three-setup.js     # Three.js configuration
│   └── animations.js      # Custom animations
└── docs/
    ├── CONTRIBUTING.md    # Contribution guidelines
    ├── DEPLOYMENT.md      # Deployment instructions
    └── CHANGELOG.md       # Version history
```

---

## 🚀 **Quick Start**

### **Prerequisites**
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Code editor (VS Code recommended)
- Basic understanding of HTML, CSS, JavaScript
- Optional: Local web server for development

### **Installation**

```bash
# Clone the repository
git clone https://github.com/PRODHOSH/portfolio-website.git

# Navigate to project directory
cd portfolio-website

# Open in your preferred code editor
code .

# Serve locally (optional)
# Using Python
python -m http.server 8000

# Using Node.js
npx serve

# Using VS Code Live Server extension
# Right-click index.html -> Open with Live Server
```

### **First Run**
1. Open `index.html` in your browser
2. Experience the 3D particle animation loading
3. Navigate through different sections
4. Toggle between light/dark themes
5. Test responsive behavior on different screen sizes

---

## 🎯 **Sections Breakdown**

<details>
<summary><strong>🏠 Hero Section</strong></summary>

**The Grand Entrance**
- Animated name reveal with typing effect
- Dynamic tagline showcasing dual degree pursuit
- Floating call-to-action button
- 3D particle background creating depth

**Technical Implementation**:
```javascript
// Typing animation for hero text
function typeWriter(element, text, speed = 50) {
  let i = 0;
  element.innerHTML = '';
  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  type();
}
```

</details>

<details>
<summary><strong>👨‍💻 About Section</strong></summary>

**Personal Story**
- Engaging bio highlighting passion for mathematics and data science
- Educational background at VIT Chennai and IIT Madras
- Current learning focus and collaboration interests
- Fun fact that adds personality

**Features**:
- Split layout with profile placeholder and text content
- Floating animation on profile section
- Responsive grid that stacks on mobile

</details>

<details>
<summary><strong>⚡ Skills Section</strong></summary>

**Technical Expertise Showcase**
- Interactive skill cards with hover animations
- Technology stack including:
  - **Programming**: Python, C++
  - **Web**: HTML5, CSS3
  - **Data**: NumPy, Pandas, MySQL
  - **Tools**: Git, GitHub, Netlify

**Animation Details**:
```css
.skill-card:hover {
  transform: translateY(-10px) rotateY(5deg);
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
}
```

</details>

<details>
<summary><strong>🎓 Education Section</strong></summary>

**Academic Journey**
- Dual degree pursuit visualization
- Timeline-style layout
- Institution details and duration
- Hover effects with depth shadows

</details>

<details>
<summary><strong>🚀 Projects Section</strong></summary>

**Portfolio Showcase**
1. **IITM CGPA Calculator**: Web-based academic tool
2. **Quantum Key Distribution**: Security simulation
3. **Portfolio Website**: This very project!

**Each Project Includes**:
- Visual representation with icons
- Detailed descriptions
- Technology stack used
- GitHub and live demo links

</details>

<details>
<summary><strong>🏆 Certifications Section</strong></summary>

**Professional Achievements**
- **Machine Learning**: DeepLearning.AI certification
- **Generative AI**: Google Cloud credential
- **AI Fundamentals**: AWS and DeepLearning.AI certificates
- Interactive cards with credential IDs
- Direct links to verification pages

</details>

<details>
<summary><strong>📞 Contact Section</strong></summary>

**Connect & Collaborate**
- Social media integration (GitHub, LinkedIn, Instagram)
- Direct email contact
- Resume download functionality
- Animated social icons with hover effects

</details>

---

## 🎨 **Customization Guide**

### **Changing Colors**
```css
:root {
  --primary-color: #your-color;    /* Main brand color */
  --secondary-color: #your-color;  /* Accent color */
  --accent-color: #your-color;     /* Highlight color */
}
```

### **Modifying Animations**
```css
@keyframes yourAnimation {
  0% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0); }
}
```

### **Adding New Sections**
1. Create HTML structure
2. Add corresponding CSS styles
3. Update navigation links
4. Add scroll observer for animations
5. Test responsive behavior

### **Three.js Customization**
```javascript
// Modify particle count
for (let i = 0; i < 10000; i++) { // Increased from 5000
  // Particle creation logic
}

// Change particle colors
color.setHSL(Math.random() * 0.5 + 0.3, 0.9, 0.6); // Different hue range
```

---

## 📱 **Responsive Design**

### **Breakpoints**
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px
- **Large Desktop**: > 1440px

### **Adaptive Features**
- Navigation collapses on mobile
- Grid layouts stack vertically
- Font sizes scale with viewport
- Touch-optimized interactions
- Reduced animations on mobile for performance

---

## 🔧 **Performance Optimizations**

### **Loading Speed**
- Minified CSS and JavaScript
- Optimized image formats
- Efficient Three.js particle system
- Lazy loading for non-critical elements

### **Animation Performance**
- GPU-accelerated transforms
- RequestAnimationFrame for smooth 60fps
- Intersection Observer for scroll animations
- Debounced scroll and resize events

### **Accessibility**
- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- High contrast ratios
- Reduced motion respect

---

## 🚀 **Deployment Options**

<details>
<summary><strong>🌐 Netlify (Recommended)</strong></summary>

1. Push code to GitHub repository
2. Connect Netlify to your GitHub account
3. Deploy from repository
4. Configure custom domain (optional)
5. Enable automatic deployments

**Netlify Features**:
- Free SSL certificates
- CDN distribution
- Form handling
- Branch previews

</details>

<details>
<summary><strong>🔥 Vercel</strong></summary>

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Follow prompts for configuration
```

</details>

<details>
<summary><strong>📁 GitHub Pages</strong></summary>

1. Push to GitHub repository
2. Go to repository Settings
3. Navigate to Pages section
4. Select source branch (main)
5. Access via username.github.io/repository-name

</details>

---

## 🤝 **Contributing**

We welcome contributions to make this portfolio even better! Here's how you can help:

### **How to Contribute**
1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin amazing-feature`)
5. **Open** a Pull Request

### **Contribution Areas**
- 🐛 Bug fixes and improvements
- ✨ New animation effects
- 📱 Mobile experience enhancements
- 🎨 Design improvements
- 📖 Documentation updates
- 🔧 Performance optimizations

### **Code Style Guidelines**
- Use semantic HTML5 elements
- Follow BEM naming convention for CSS
- Write clean, commented JavaScript
- Maintain responsive design principles
- Test across multiple browsers

---

## 📄 **License**

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

### **What this means:**
- ✅ Use for personal projects
- ✅ Modify and customize
- ✅ Use for commercial purposes
- ✅ Distribute copies
- ❗ Include copyright notice
- ❗ Include license text

---

## 🙏 **Acknowledgments**

### **Inspiration & Resources**
- **Three.js Community**: For amazing 3D graphics capabilities
- **CSS Tricks**: For modern CSS techniques and inspiration
- **Dribbble & Behance**: For design inspiration
- **GitHub Community**: For open-source collaboration
- **VIT Chennai & IIT Madras**: For the educational foundation

### **Special Thanks**
- **FontAwesome**: For beautiful, scalable icons
- **Google Fonts**: For typography options
- **Unsplash**: For high-quality placeholder images
- **MDN Web Docs**: For comprehensive web development resources

---

## 📞 **Connect With The Developer**

<div align="center">

**PRODHOSH V.S**

*Aspiring Data Scientist | VIT CS × IIT Madras Data Science*

[![GitHub](https://img.shields.io/badge/GitHub-PRODHOSH-181717?style=for-the-badge&logo=github)](https://github.com/PRODHOSH)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-prodhoshvs-0077B5?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/prodhoshvs/)
[![Instagram](https://img.shields.io/badge/Instagram-itzprodhosh-E4405F?style=for-the-badge&logo=instagram)](https://www.instagram.com/itzprodhosh/)
[![Email](https://img.shields.io/badge/Email-prodhosh3@gmail.com-D14836?style=for-the-badge&logo=gmail)](mailto:prodhosh3@gmail.com)

*"Currently working on portfolio website. Looking to collaborate on Open Source / AI / ML projects."*

</div>

---

## 📊 **Project Stats**

<div align="center">

![GitHub stars](https://img.shields.io/github/stars/PRODHOSH/portfolio-website?style=social)
![GitHub forks](https://img.shields.io/github/forks/PRODHOSH/portfolio-website?style=social)
![GitHub watchers](https://img.shields.io/github/watchers/PRODHOSH/portfolio-website?style=social)

**Lines of Code**: ~1,500+ | **Technologies**: 10+ | **Sections**: 7 | **Animations**: 15+

</div>

---

## 🚀 **What's Next?**

### **Roadmap for Version 2.0**
- [ ] **Blog Integration**: Technical articles and tutorials
- [ ] **Project Filtering**: Sort projects by technology/category
- [ ] **Contact Form**: Direct messaging capability
- [ ] **Analytics Dashboard**: Visitor insights and engagement metrics
- [ ] **Multilingual Support**: Tamil and Hindi language options
- [ ] **Advanced 3D Models**: Interactive 3D workspace scene
- [ ] **Progressive Web App**: Offline capability and app-like experience
- [ ] **API Integration**: Dynamic content from GitHub API

### **Planned Enhancements**
- Voice navigation using Web Speech API
- VR/AR portfolio viewing experience
- AI-powered chatbot for visitor interaction
- Advanced data visualizations for skills and projects
- Integration with coding platforms (LeetCode, HackerRank)

---

<div align="center">

### **🌟 If this project inspired you, give it a star! ⭐**

**Built with 💜 by Prodhosh V.S | © 2025 | Made with passion for Data Science**

*Remember: "I love math so much that I chose Data Science just to live in numbers!"*

</div>

---

**Last Updated**: September 2025 | **Version**: 1.0.0 | **Status**: Active Development
