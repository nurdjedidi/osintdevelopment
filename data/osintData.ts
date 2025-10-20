import type { OsintCategory, OsintTool } from '~/types/osint'

export const categories: OsintCategory[] = [
  {
    id: 'github',
    name: 'GitHub & Code',
    icon: 'mdi-github',
    description: 'Analyse de dépôts, commits, et code source'
  },
  {
    id: 'api',
    name: 'APIs & Endpoints',
    icon: 'mdi-api',
    description: 'Découverte et analyse d\'APIs'
  },
  {
    id: 'cloud',
    name: 'Cloud & Infra',
    icon: 'mdi-cloud',
    description: 'AWS, Azure, GCP, buckets S3'
  },
  {
    id: 'domain',
    name: 'Domains & DNS',
    icon: 'mdi-web',
    description: 'Recherche de domaines et DNS'
  },
  {
    id: 'ai',
    name: 'AI & ML',
    icon: 'mdi-brain',
    description: 'Modèles IA, datasets, APIs ML'
  },
  {
    id: 'security',
    name: 'Security',
    icon: 'mdi-shield-lock',
    description: 'CVE, vulnérabilités, exploits'
  },
  {
    id: 'npm',
    name: 'NPM & Packages',
    icon: 'mdi-package-variant',
    description: 'Packages, dépendances, registries'
  },
  {
    id: 'docker',
    name: 'Docker & Containers',
    icon: 'mdi-docker',
    description: 'Images Docker, registries'
  },
  {
    id: 'monitoring',
    name: 'Monitoring & Logs',
    icon: 'mdi-chart-line',
    description: 'Logs, métriques, observabilité'
  },
  {
    id: 'devtools',
    name: 'DevTools',
    icon: 'mdi-tools',
    description: 'Outils de développement'
  }
]

export const tools: OsintTool[] = [
  // GitHub & Code
  { id: '1', name: 'GitHub Search', url: 'https://github.com/search', description: 'Recherche avancée de code et repos', categoryId: 'github', tags: ['code', 'repos'] },
  { id: '2', name: 'GitHut', url: 'https://githut.info/', description: 'Statistiques GitHub par langage', categoryId: 'github', tags: ['stats'] },
  { id: '3', name: 'Sourcegraph', url: 'https://sourcegraph.com/', description: 'Recherche de code universel', categoryId: 'github', tags: ['search'] },
  { id: '4', name: 'grep.app', url: 'https://grep.app/', description: 'Recherche dans 500k+ repos GitHub', categoryId: 'github', tags: ['search'] },
  { id: '5', name: 'GitHub Profile Summary', url: 'https://profile-summary-for-github.com/', description: 'Stats de profil GitHub', categoryId: 'github', tags: ['profile'] },

  // APIs & Endpoints
  { id: '6', name: 'Public APIs', url: 'https://github.com/public-apis/public-apis', description: 'Liste d\'APIs publiques', categoryId: 'api', tags: ['directory'] },
  { id: '7', name: 'RapidAPI', url: 'https://rapidapi.com/', description: 'Marketplace d\'APIs', categoryId: 'api', tags: ['marketplace'] },
  { id: '8', name: 'Postman API Network', url: 'https://www.postman.com/explore', description: 'Exploration d\'APIs', categoryId: 'api', tags: ['explore'] },
  { id: '9', name: 'APIs.guru', url: 'https://apis.guru/', description: 'Registre d\'APIs OpenAPI', categoryId: 'api', tags: ['openapi'] },

  // Cloud & Infra
  { id: '10', name: 'GrayhatWarfare', url: 'https://grayhatwarfare.com/', description: 'Buckets S3 ouverts', categoryId: 'cloud', tags: ['s3', 'aws'] },
  { id: '11', name: 'Cloud Asset Inventory', url: 'https://cloud.google.com/asset-inventory', description: 'Inventaire GCP', categoryId: 'cloud', tags: ['gcp'] },
  { id: '12', name: 'Shodan', url: 'https://www.shodan.io/', description: 'Moteur de recherche IoT/serveurs', categoryId: 'cloud', tags: ['iot', 'servers'] },
  { id: '13', name: 'Censys', url: 'https://censys.io/', description: 'Scanner d\'internet', categoryId: 'cloud', tags: ['scanner'] },

  // Domains & DNS
  { id: '14', name: 'crt.sh', url: 'https://crt.sh/', description: 'Certificats SSL/TLS', categoryId: 'domain', tags: ['ssl', 'certificates'] },
  { id: '15', name: 'SecurityTrails', url: 'https://securitytrails.com/', description: 'Historique DNS', categoryId: 'domain', tags: ['dns', 'history'] },
  { id: '16', name: 'DNSdumpster', url: 'https://dnsdumpster.com/', description: 'Découverte DNS', categoryId: 'domain', tags: ['dns'] },
  { id: '17', name: 'BuiltWith', url: 'https://builtwith.com/', description: 'Technologies de sites web', categoryId: 'domain', tags: ['tech-stack'] },
  { id: '18', name: 'Wappalyzer', url: 'https://www.wappalyzer.com/', description: 'Détection de technologies', categoryId: 'domain', tags: ['tech-stack'] },

  // AI & ML
  { id: '19', name: 'Hugging Face', url: 'https://huggingface.co/', description: 'Modèles et datasets ML', categoryId: 'ai', tags: ['models', 'datasets'] },
  { id: '20', name: 'Papers with Code', url: 'https://paperswithcode.com/', description: 'Papers ML avec code', categoryId: 'ai', tags: ['papers', 'research'] },
  { id: '21', name: 'Model Zoo', url: 'https://modelzoo.co/', description: 'Modèles ML pré-entraînés', categoryId: 'ai', tags: ['models'] },
  { id: '22', name: 'OpenAI Platform', url: 'https://platform.openai.com/', description: 'APIs OpenAI', categoryId: 'ai', tags: ['api', 'gpt'] },

  // Security
  { id: '23', name: 'CVE Details', url: 'https://www.cvedetails.com/', description: 'Base de données CVE', categoryId: 'security', tags: ['cve', 'vulnerabilities'] },
  { id: '24', name: 'Exploit-DB', url: 'https://www.exploit-db.com/', description: 'Database d\'exploits', categoryId: 'security', tags: ['exploits'] },
  { id: '25', name: 'Snyk Vulnerability DB', url: 'https://security.snyk.io/', description: 'Vulnérabilités de packages', categoryId: 'security', tags: ['packages', 'vulnerabilities'] },
  { id: '26', name: 'Have I Been Pwned', url: 'https://haveibeenpwned.com/', description: 'Fuites de données', categoryId: 'security', tags: ['data-breach'] },

  // NPM & Packages
  { id: '27', name: 'npm', url: 'https://www.npmjs.com/', description: 'Registre npm', categoryId: 'npm', tags: ['packages'] },
  { id: '28', name: 'npms.io', url: 'https://npms.io/', description: 'Recherche de packages npm', categoryId: 'npm', tags: ['search'] },
  { id: '29', name: 'Bundlephobia', url: 'https://bundlephobia.com/', description: 'Taille de packages npm', categoryId: 'npm', tags: ['size'] },
  { id: '30', name: 'Socket.dev', url: 'https://socket.dev/', description: 'Sécurité des dépendances', categoryId: 'npm', tags: ['security'] },

  // Docker & Containers
  { id: '31', name: 'Docker Hub', url: 'https://hub.docker.com/', description: 'Registre d\'images Docker', categoryId: 'docker', tags: ['images'] },
  { id: '32', name: 'Snyk Container', url: 'https://snyk.io/product/container-vulnerability-management/', description: 'Scan de vulnérabilités Docker', categoryId: 'docker', tags: ['security'] },
  { id: '33', name: 'Quay.io', url: 'https://quay.io/', description: 'Registre de containers', categoryId: 'docker', tags: ['registry'] },

  // Monitoring & Logs
  { id: '34', name: 'Grafana', url: 'https://grafana.com/', description: 'Visualisation de métriques', categoryId: 'monitoring', tags: ['metrics', 'dashboards'] },
  { id: '35', name: 'Better Stack', url: 'https://betterstack.com/', description: 'Logs et monitoring', categoryId: 'monitoring', tags: ['logs'] },
  { id: '36', name: 'Datadog', url: 'https://www.datadoghq.com/', description: 'Monitoring full-stack', categoryId: 'monitoring', tags: ['monitoring'] },

  // DevTools
  { id: '37', name: 'Can I Use', url: 'https://caniuse.com/', description: 'Compatibilité navigateurs', categoryId: 'devtools', tags: ['browser'] },
  { id: '38', name: 'Regex101', url: 'https://regex101.com/', description: 'Testeur de regex', categoryId: 'devtools', tags: ['regex'] },
  { id: '39', name: 'JWT.io', url: 'https://jwt.io/', description: 'Décodeur JWT', categoryId: 'devtools', tags: ['jwt'] },
  { id: '40', name: 'DevDocs', url: 'https://devdocs.io/', description: 'Documentation développeur', categoryId: 'devtools', tags: ['docs'] },
]
