# 🔍 OSINT Development

A comprehensive collection of OSINT (Open Source Intelligence) and development tools for developers, security researchers, and tech enthusiasts.

![OSINT Development](https://img.shields.io/badge/OSINT-Development-blue?style=for-the-badge&logo=search)
![Vue.js](https://img.shields.io/badge/Vue.js-3.x-4FC08D?style=for-the-badge&logo=vue.js)
![Nuxt](https://img.shields.io/badge/Nuxt-3.x-00DC82?style=for-the-badge&logo=nuxt.js)
![Vuetify](https://img.shields.io/badge/Vuetify-3.x-1867C0?style=for-the-badge&logo=vuetify)

## 🚀 Features

- **🎯 Categorized Tools**: Organized into 11 main categories
- **🔍 Interactive Interface**: Beautiful bubble-based navigation
- **📱 Responsive Design**: Works perfectly on all devices
- **⚡ Fast & Modern**: Built with Vue 3, Nuxt 3, and Vuetify 3
- **🎨 Beautiful UI**: Dark theme with smooth animations
- **🔗 Direct Access**: One-click access to all tools

## 📊 Categories

| Category | Tools | Description |
|----------|-------|-------------|
| 🐙 **GitHub & Code** | 5 tools | Repository, commit, and code analysis |
| 🎨 **UI/UX Design** | 10 tools | Design, user interfaces, and user experience |
| 🔌 **APIs & Endpoints** | 10 tools | API discovery, testing, and documentation |
| ☁️ **Cloud & Infrastructure** | 10 tools | AWS, Azure, GCP, and cloud services |
| 🌐 **Domains & DNS** | 5 tools | Domain and DNS lookup tools |
| 🤖 **AI & ML** | 10 tools | AI models, datasets, and ML APIs |
| 🔒 **Security** | 4 tools | CVE, vulnerabilities, and security tools |
| 📦 **NPM & Packages** | 4 tools | Package management and analysis |
| 🐳 **Docker & Containers** | 3 tools | Container management and security |
| 📊 **Monitoring & Logs** | 10 tools | Logs, metrics, and observability |
| 🛠️ **DevTools** | 10 tools | Development utilities and tools |

## 🛠️ Tech Stack

- **Frontend**: Vue 3 + Composition API
- **Framework**: Nuxt 4
- **UI Library**: Vuetify 3
- **Language**: TypeScript
- **Styling**: CSS3 with custom animations
- **Icons**: Material Design Icons

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/nurdjedidi/osintdevelopment.git
   cd osintdevelopment
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   ```
   http://localhost:3000
   ```

### Build for Production

```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
osintdevelopment/
├── app.vue                 # Main application component
├── data/
│   └── osintData.ts       # Tools and categories data
├── types/
│   └── osint.ts           # TypeScript interfaces
├── plugins/
│   └── vuetify.ts         # Vuetify configuration
├── public/
│   ├── favicon.ico        # Site favicon
│   └── robots.txt         # SEO robots file
├── nuxt.config.ts         # Nuxt configuration
└── package.json           # Dependencies and scripts
```

## 🎨 Design Features

- **Bubble Navigation**: Interactive circular buttons for categories
- **Smooth Animations**: CSS transitions and keyframe animations
- **Dark Theme**: Modern dark interface with cyan accents
- **Responsive Grid**: Adaptive layout for all screen sizes
- **Hover Effects**: Interactive feedback on all elements

## 🔧 Customization

### Adding New Tools

1. Open `data/osintData.ts`
2. Add your tool to the `tools` array:

```typescript
{
  id: 'unique-id',
  name: 'Tool Name',
  url: 'https://example.com',
  description: 'Tool description',
  categoryId: 'category-id',
  tags: ['tag1', 'tag2']
}
```

### Adding New Categories

1. Add category to `categories` array in `data/osintData.ts`
2. Update the category icon and description

### Styling

- Main styles are in `app.vue` `<style>` section
- Colors use CSS custom properties
- Animations use CSS keyframes

## 📱 Responsive Design

The application is fully responsive with breakpoints:

- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px  
- **Mobile**: 320px - 767px

## 🌟 Key Tools Included

### Development
- GitHub Search, Sourcegraph, grep.app
- Postman, Insomnia, HTTPie
- CodePen, JSFiddle, StackBlitz

### Design
- Figma, Dribbble, Behance
- Material Design, Fluent UI
- Heroicons, Lucide

### Cloud & Infrastructure
- AWS Console, Azure Portal, GCP
- Cloudflare, Vercel, Netlify
- Shodan, Censys

### AI & ML
- OpenAI Platform, Hugging Face
- Claude, Perplexity
- TensorFlow, PyTorch

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 💡 Acknowledgments


- All the amazing developers who created the tools listed
- Vue.js and Nuxt.js communities
- Vuetify team for the beautiful UI components
- Material Design for the icon system

## 📞 Contact

- **GitHub**: [@nurdjedidi](https://github.com/nurdjedidi)
- **Project Link**: [https://github.com/nurdjedidi/osintdevelopment](https://github.com/nurdjedidi/osintdevelopment)

---

⭐ **Star this repository if you found it helpful!**