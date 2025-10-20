import type { OsintCategory, OsintTool } from '~/types/osint'

export const categories: OsintCategory[] = [
  {
    id: 'github',
    name: 'GitHub & Code',
    icon: 'mdi-github',
    description: 'Repository, commit, and code analysis'
  },
  {
    id: 'ui/ux',
    name: 'UI/UX design',
    icon: 'mdi-layers',
    description: 'Design, user interfaces, and user experience analysis'
  },
  {
    id: 'api',
    name: 'APIs & Endpoints',
    icon: 'mdi-api',
    description: 'API discovery and analysis'
  },
  {
    id: 'cloud',
    name: 'Cloud & Infrastructure',
    icon: 'mdi-cloud',
    description: 'AWS, Azure, GCP, S3 buckets'
  },
  {
    id: 'domain',
    name: 'Domains & DNS',
    icon: 'mdi-web',
    description: 'Domain and DNS lookup'
  },
  {
    id: 'ai',
    name: 'AI & ML',
    icon: 'mdi-brain',
    description: 'AI models, datasets, and ML APIs'
  },
  {
    id: 'security',
    name: 'Security',
    icon: 'mdi-shield-lock',
    description: 'CVE, vulnerabilities, exploits'
  },
  {
    id: 'npm',
    name: 'NPM & Packages',
    icon: 'mdi-package-variant',
    description: 'Packages, dependencies, registries'
  },
  {
    id: 'docker',
    name: 'Docker & Containers',
    icon: 'mdi-docker',
    description: 'Docker images, registries'
  },
  {
    id: 'monitoring',
    name: 'Monitoring & Logs',
    icon: 'mdi-chart-line',
    description: 'Logs, metrics, observability'
  },
  {
    id: 'devtools',
    name: 'DevTools',
    icon: 'mdi-tools',
    description: 'Development tools'
  }
]

export const tools: OsintTool[] = [
  { id: 'github-1', name: 'GitHub Search', url: 'https://github.com/search', description: 'Advanced search for code and repositories', categoryId: 'github', tags: ['code', 'repos'] },
  { id: 'github-2', name: 'GitHut', url: 'https://githut.info/', description: 'GitHub statistics by language', categoryId: 'github', tags: ['stats'] },
  { id: 'github-3', name: 'Sourcegraph', url: 'https://sourcegraph.com/', description: 'Universal code search', categoryId: 'github', tags: ['search'] },
  { id: 'github-4', name: 'grep.app', url: 'https://grep.app/', description: 'Search across 500k+ GitHub repos', categoryId: 'github', tags: ['search'] },
  { id: 'github-5', name: 'GitHub Profile Summary', url: 'https://profile-summary-for-github.com/', description: 'GitHub profile statistics', categoryId: 'github', tags: ['profile'] },

  { id: 'ui/ux-1', name: 'Uiverse', url: 'https://uiverse.io/', description: 'Open source UI elements and components', categoryId: 'ui/ux', tags: ['components', 'ui'] },
  { id: 'ui/ux-2', name: 'Coolors Contrast Checker', url: 'https://coolors.co/contrast-checker', description: 'Color contrast checker for accessibility', categoryId: 'ui/ux', tags: ['colors', 'accessibility'] },

  { id: 'api-1', name: 'Public APIs', url: 'https://github.com/public-apis/public-apis', description: 'List of public APIs', categoryId: 'api', tags: ['directory'] },
  { id: 'api-2', name: 'RapidAPI', url: 'https://rapidapi.com/', description: 'API marketplace', categoryId: 'api', tags: ['marketplace'] },
  { id: 'api-3', name: 'Postman API Network', url: 'https://www.postman.com/explore', description: 'Explore APIs', categoryId: 'api', tags: ['explore'] },

  { id: 'cloud-1', name: 'GrayhatWarfare', url: 'https://grayhatwarfare.com/', description: 'Open S3 buckets search', categoryId: 'cloud', tags: ['s3', 'aws'] },
  { id: 'cloud-2', name: 'Shodan', url: 'https://www.shodan.io/', description: 'IoT/server search engine', categoryId: 'cloud', tags: ['iot', 'servers'] },
  { id: 'cloud-3', name: 'Censys', url: 'https://censys.io/', description: 'Internet scanner', categoryId: 'cloud', tags: ['scanner'] },

  { id: 'domain-1', name: 'Namecheap', url: 'https://namecheap.com/', description: 'Domains provider', categoryId: 'domain', tags: ['ssl', 'certificates'] },
  { id: 'domain-2', name: 'SecurityTrails', url: 'https://securitytrails.com/', description: 'DNS history lookup', categoryId: 'domain', tags: ['dns', 'history'] },
  { id: 'domain-3', name: 'DNSdumpster', url: 'https://dnsdumpster.com/', description: 'DNS reconnaissance', categoryId: 'domain', tags: ['dns'] },
  { id: 'domain-4', name: 'BuiltWith', url: 'https://builtwith.com/', description: 'Website technology profiler', categoryId: 'domain', tags: ['tech-stack'] },
  { id: 'domain-5', name: 'Wappalyzer', url: 'https://www.wappalyzer.com/', description: 'Technology detection for websites', categoryId: 'domain', tags: ['tech-stack'] },

  { id: 'ai-1', name: 'Cursor', url: 'https://cursor.com/', description: 'AI IDE', categoryId: 'ai', tags: ['models', 'datasets'] },
  { id: 'ai-2', name: 'Model Zoo', url: 'https://modelzoo.co/', description: 'Pretrained machine learning models', categoryId: 'ai', tags: ['models'] },
  { id: 'ai-3', name: 'OpenAI Platform', url: 'https://platform.openai.com/', description: 'OpenAI APIs', categoryId: 'ai', tags: ['api', 'gpt'] },

  { id: 'security-1', name: 'CVE Details', url: 'https://www.cvedetails.com/', description: 'CVE database', categoryId: 'security', tags: ['cve', 'vulnerabilities'] },
  { id: 'security-2', name: 'Exploit-DB', url: 'https://www.exploit-db.com/', description: 'Exploit database', categoryId: 'security', tags: ['exploits'] },
  { id: 'security-3', name: 'Snyk Vulnerability DB', url: 'https://security.snyk.io/', description: 'Package vulnerabilities', categoryId: 'security', tags: ['packages', 'vulnerabilities'] },
  { id: 'security-4', name: 'Have I Been Pwned', url: 'https://haveibeenpwned.com/', description: 'Data breach checker', categoryId: 'security', tags: ['data-breach'] },

  { id: 'npm-1', name: 'npm', url: 'https://www.npmjs.com/', description: 'npm registry', categoryId: 'npm', tags: ['packages'] },
  { id: 'npm-2', name: 'npms.io', url: 'https://npms.io/', description: 'npm package search', categoryId: 'npm', tags: ['search'] },
  { id: 'npm-3', name: 'Bundlephobia', url: 'https://bundlephobia.com/', description: 'npm package size analyzer', categoryId: 'npm', tags: ['size'] },
  { id: 'npm-4', name: 'Socket.dev', url: 'https://socket.dev/', description: 'Dependency security analysis', categoryId: 'npm', tags: ['security'] },

  { id: 'docker-1', name: 'Docker Hub', url: 'https://hub.docker.com/', description: 'Docker image registry', categoryId: 'docker', tags: ['images'] },
  { id: 'docker-2', name: 'Snyk Container', url: 'https://snyk.io/product/container-vulnerability-management/', description: 'Docker vulnerability scanner', categoryId: 'docker', tags: ['security'] },
  { id: 'docker-3', name: 'Quay.io', url: 'https://quay.io/', description: 'Container registry', categoryId: 'docker', tags: ['registry'] },

  { id: 'monitoring-1', name: 'Grafana', url: 'https://grafana.com/', description: 'Metrics visualization', categoryId: 'monitoring', tags: ['metrics', 'dashboards'] },
  { id: 'monitoring-2', name: 'Better Stack', url: 'https://betterstack.com/', description: 'Logging and monitoring', categoryId: 'monitoring', tags: ['logs'] },

  { id: 'devtools-1', name: 'Can I Use', url: 'https://caniuse.com/', description: 'Browser compatibility queries', categoryId: 'devtools', tags: ['browser'] },
  { id: 'devtools-2', name: 'Regex101', url: 'https://regex101.com/', description: 'Regex tester and debugger', categoryId: 'devtools', tags: ['regex'] },
  { id: 'devtools-3', name: 'JWT.io', url: 'https://jwt.io/', description: 'JWT token decoder', categoryId: 'devtools', tags: ['jwt'] },
  { id: 'devtools-4', name: 'DevDocs', url: 'https://devdocs.io/', description: 'Developer documentation browser', categoryId: 'devtools', tags: ['docs'] },
]
