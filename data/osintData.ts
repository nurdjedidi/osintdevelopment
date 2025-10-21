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
  { id: 'ui/ux-2', name: 'Fluent UI', url: 'https://developer.microsoft.com/en-us/fluentui', description: 'Microsoft design system and components', categoryId: 'ui/ux', tags: ['design-system', 'components'] },
  { id: 'ui/ux-3', name: 'Heroicons', url: 'https://heroicons.com/', description: 'Beautiful hand-crafted SVG icons', categoryId: 'ui/ux', tags: ['icons', 'svg'] },
  { id: 'ui/ux-4', name: 'Lucide', url: 'https://lucide.dev/', description: 'Beautiful & consistent icon toolkit', categoryId: 'ui/ux', tags: ['icons', 'toolkit'] },

  { id: 'api-1', name: 'Public APIs', url: 'https://github.com/public-apis/public-apis', description: 'List of public APIs', categoryId: 'api', tags: ['directory'] },
  { id: 'api-2', name: 'RapidAPI', url: 'https://rapidapi.com/', description: 'API marketplace', categoryId: 'api', tags: ['marketplace'] },
  { id: 'api-3', name: 'Postman', url: 'https://www.postman.com/', description: 'API development and testing platform', categoryId: 'api', tags: ['testing', 'development'] },
  { id: 'api-4', name: 'Insomnia', url: 'https://insomnia.rest/', description: 'API client and testing tool', categoryId: 'api', tags: ['testing', 'client'] },
  { id: 'api-5', name: 'HTTPie', url: 'https://httpie.io/', description: 'Command-line HTTP client', categoryId: 'api', tags: ['cli', 'testing'] },
  { id: 'api-6', name: 'Swagger UI', url: 'https://swagger.io/tools/swagger-ui/', description: 'Interactive API documentation', categoryId: 'api', tags: ['documentation', 'swagger'] },
  { id: 'api-7', name: 'JSONPlaceholder', url: 'https://jsonplaceholder.typicode.com/', description: 'Fake REST API for testing', categoryId: 'api', tags: ['testing', 'mock'] },
  { id: 'api-8', name: 'ReqRes', url: 'https://reqres.in/', description: 'Test API for frontend developers', categoryId: 'api', tags: ['testing', 'mock'] },
  { id: 'api-9', name: 'API Gateway', url: 'https://aws.amazon.com/api-gateway/', description: 'AWS API management service', categoryId: 'api', tags: ['aws', 'management'] },

  { id: 'cloud-1', name: 'GrayhatWarfare', url: 'https://grayhatwarfare.com/', description: 'Open S3 buckets search', categoryId: 'cloud', tags: ['s3', 'aws'] },
  { id: 'cloud-2', name: 'Shodan', url: 'https://www.shodan.io/', description: 'IoT/server search engine', categoryId: 'cloud', tags: ['iot', 'servers'] },
  { id: 'cloud-3', name: 'Censys', url: 'https://censys.io/', description: 'Internet scanner', categoryId: 'cloud', tags: ['scanner'] },
  { id: 'cloud-4', name: 'AWS Console', url: 'https://console.aws.amazon.com/', description: 'Amazon Web Services management console', categoryId: 'cloud', tags: ['aws', 'console'] },
  { id: 'cloud-5', name: 'Azure Portal', url: 'https://portal.azure.com/', description: 'Microsoft Azure management portal', categoryId: 'cloud', tags: ['azure', 'portal'] },
  { id: 'cloud-6', name: 'Google Cloud Console', url: 'https://console.cloud.google.com/', description: 'Google Cloud Platform console', categoryId: 'cloud', tags: ['gcp', 'console'] },
  { id: 'cloud-7', name: 'Cloudflare', url: 'https://www.cloudflare.com/', description: 'CDN and security services', categoryId: 'cloud', tags: ['cdn', 'security'] },
  { id: 'cloud-8', name: 'DigitalOcean', url: 'https://www.digitalocean.com/', description: 'Cloud infrastructure provider', categoryId: 'cloud', tags: ['vps', 'droplets'] },
  { id: 'cloud-9', name: 'Netlify', url: 'https://www.netlify.com/', description: 'Web development platform', categoryId: 'cloud', tags: ['frontend', 'deployment'] },

  { id: 'domain-1', name: 'Namecheap', url: 'https://namecheap.com/', description: 'Domains provider', categoryId: 'domain', tags: ['ssl', 'certificates'] },
  { id: 'domain-2', name: 'SecurityTrails', url: 'https://securitytrails.com/', description: 'DNS history lookup', categoryId: 'domain', tags: ['dns', 'history'] },
  { id: 'domain-3', name: 'DNSdumpster', url: 'https://dnsdumpster.com/', description: 'DNS reconnaissance', categoryId: 'domain', tags: ['dns'] },
  { id: 'domain-4', name: 'BuiltWith', url: 'https://builtwith.com/', description: 'Website technology profiler', categoryId: 'domain', tags: ['tech-stack'] },
  { id: 'domain-5', name: 'Wappalyzer', url: 'https://www.wappalyzer.com/', description: 'Technology detection for websites', categoryId: 'domain', tags: ['tech-stack'] },

  { id: 'ai-1', name: 'Cursor', url: 'https://cursor.com/', description: 'AI-powered code editor', categoryId: 'ai', tags: ['ide', 'coding'] },
  { id: 'ai-2', name: 'OpenAI Platform', url: 'https://platform.openai.com/', description: 'OpenAI APIs and models', categoryId: 'ai', tags: ['api', 'gpt'] },
  { id: 'ai-3', name: 'Claude', url: 'https://claude.ai/', description: 'Anthropic AI assistant', categoryId: 'ai', tags: ['assistant', 'chat'] },
  { id: 'ai-4', name: 'Perplexity', url: 'https://www.perplexity.ai/', description: 'AI-powered search engine', categoryId: 'ai', tags: ['search', 'research'] },
  { id: 'ai-5', name: 'Midjourney', url: 'https://www.midjourney.com/', description: 'AI image generation', categoryId: 'ai', tags: ['images', 'generation'] },
  { id: 'ai-6', name: 'DALL-E', url: 'https://openai.com/dall-e-2/', description: 'OpenAI image generation', categoryId: 'ai', tags: ['images', 'generation'] },
  { id: 'ai-7', name: 'GitHub Copilot', url: 'https://github.com/features/copilot', description: 'AI pair programmer', categoryId: 'ai', tags: ['coding', 'assistant'] },
  { id: 'ai-8', name: 'TensorFlow', url: 'https://www.tensorflow.org/', description: 'Machine learning platform', categoryId: 'ai', tags: ['ml', 'framework'] },
  { id: 'ai-9', name: 'PyTorch', url: 'https://pytorch.org/', description: 'Deep learning framework', categoryId: 'ai', tags: ['ml', 'framework'] },

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

  { id: 'monitoring-1', name: 'Grafana', url: 'https://grafana.com/', description: 'Metrics visualization and dashboards', categoryId: 'monitoring', tags: ['metrics', 'dashboards'] },
  { id: 'monitoring-2', name: 'Better Stack', url: 'https://betterstack.com/', description: 'Logging and monitoring platform', categoryId: 'monitoring', tags: ['logs', 'monitoring'] },
  { id: 'monitoring-3', name: 'Sentry', url: 'https://sentry.io/', description: 'Error tracking and performance monitoring', categoryId: 'monitoring', tags: ['errors', 'performance'] },
  { id: 'monitoring-4', name: 'Elastic Stack', url: 'https://www.elastic.co/', description: 'Search, logging, and analytics', categoryId: 'monitoring', tags: ['logs', 'search'] },
  { id: 'monitoring-5', name: 'Splunk', url: 'https://www.splunk.com/', description: 'Data platform for security and observability', categoryId: 'monitoring', tags: ['logs', 'security'] },
  { id: 'monitoring-6', name: 'UptimeRobot', url: 'https://uptimerobot.com/', description: 'Website uptime monitoring', categoryId: 'monitoring', tags: ['uptime', 'alerts'] },
  { id: 'monitoring-7', name: 'Pingdom', url: 'https://www.pingdom.com/', description: 'Website performance monitoring', categoryId: 'monitoring', tags: ['performance', 'uptime'] },

  { id: 'devtools-1', name: 'Can I Use', url: 'https://caniuse.com/', description: 'Browser compatibility queries', categoryId: 'devtools', tags: ['browser', 'compatibility'] },
  { id: 'devtools-2', name: 'Regex101', url: 'https://regex101.com/', description: 'Regex tester and debugger', categoryId: 'devtools', tags: ['regex', 'testing'] },
  { id: 'devtools-3', name: 'JWT.io', url: 'https://jwt.io/', description: 'JWT token decoder and debugger', categoryId: 'devtools', tags: ['jwt', 'debugging'] },
  { id: 'devtools-4', name: 'DevDocs', url: 'https://devdocs.io/', description: 'Developer documentation browser', categoryId: 'devtools', tags: ['docs', 'reference'] },
  { id: 'devtools-5', name: 'CodePen', url: 'https://codepen.io/', description: 'Frontend development playground', categoryId: 'devtools', tags: ['frontend', 'playground'] },
  { id: 'devtools-6', name: 'JSFiddle', url: 'https://jsfiddle.net/', description: 'Online code editor and tester', categoryId: 'devtools', tags: ['editor', 'testing'] },
  { id: 'devtools-7', name: 'StackBlitz', url: 'https://stackblitz.com/', description: 'Online IDE for web development', categoryId: 'devtools', tags: ['ide', 'online'] },
  { id: 'devtools-8', name: 'JSON Formatter', url: 'https://jsonformatter.curiousconcept.com/', description: 'JSON validator and formatter', categoryId: 'devtools', tags: ['json', 'formatter'] },
  { id: 'devtools-9', name: 'Base64 Decoder', url: 'https://www.base64decode.org/', description: 'Base64 encode and decode tool', categoryId: 'devtools', tags: ['base64', 'encoding'] },
  { id: 'devtools-10', name: 'MDN Web Docs', url: 'https://developer.mozilla.org/', description: 'Web development documentation', categoryId: 'devtools', tags: ['docs', 'web'] },
]
