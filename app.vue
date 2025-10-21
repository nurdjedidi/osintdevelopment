<template>
  <v-app>
    <v-app-bar elevation="0" color="background" height="64" class="border-b">
      <v-container class="d-flex align-center py-0">
        <div class="d-flex align-center">
          <v-icon size="32" color="primary" class="mr-3">mdi-magnify-scan</v-icon>
          <div>
            <h1 class="text-h6 font-weight-bold mb-0">OSINT DEVELOPMENT</h1>
          </div>
        </div>
        <v-spacer></v-spacer>
        <v-btn icon variant="text" size="small" href="https://github.com/nurdjedidi/osintdevelopment">
          <v-icon>mdi-github</v-icon>
        </v-btn>
      </v-container>
    </v-app-bar>

    <v-main class="bg-background">
      <v-container max-width="1400" class="py-4">

        <div v-if="!selectedCategoryData" class="bubbles-container">
          <div v-for="category in filteredCategories" :key="category.id" class="category-bubble-container"
            :style="{ '--delay': filteredCategories.indexOf(category) * 0.1 + 's' }">
            <div class="category-bubble" @click="selectCategory(category)">
              <div class="bubble-content">
                <v-icon :icon="category.icon" size="32" color="primary"></v-icon>
                <span class="bubble-title">{{ category.name }}</span>
                <span class="bubble-count">{{ getToolCount(category.id) }}</span>
              </div>
            </div>
          </div>
        </div>

        <div v-else class="branch-view">
          <div class="back-button-container">
            <v-btn icon variant="text" size="large" class="back-button" @click="goBack">
              <v-icon size="24">mdi-arrow-left</v-icon>
            </v-btn>
          </div>

          <div class="central-bubble-container">
            <div class="central-bubble">
              <div class="bubble-content">
                <v-icon :icon="selectedCategoryData.icon" size="48" color="primary"></v-icon>
                <span class="bubble-title-large">{{ selectedCategoryData.name }}</span>
                <span class="bubble-description">{{ selectedCategoryData.description }}</span>
              </div>
            </div>
          </div>

          <div class="tools-grid">
            <div v-for="(tool, index) in categoryTools" :key="tool.id" class="tool-card"
              :style="{ '--delay': index * 0.1 + 's' }" @click="openTool(tool.url)">
              <div class="tool-header">
                <div class="tool-icon">
                  <v-icon size="20" color="primary">mdi-link-variant</v-icon>
                </div>
                <div class="tool-action">
                  <v-icon size="16" color="primary">mdi-open-in-new</v-icon>
                </div>
              </div>
              <div class="tool-info">
                <h3 class="tool-name">{{ tool.name }}</h3>
                <p class="tool-description">{{ tool.description }}</p>
                <div class="tool-tags">
                  <v-chip v-for="tag in tool.tags.slice(0, 3)" :key="tag" size="x-small" class="mr-1 mb-1"
                    variant="tonal" color="primary">
                    {{ tag }}
                  </v-chip>
                </div>
              </div>
            </div>
          </div>
        </div>

      </v-container>

    </v-main>

    <v-footer class="bg-surface text-center pa-2 border-t">
      <div class="text-caption text-grey">
        <v-icon size="14" class="mr-1">mdi-shield-lock</v-icon>
        OSINT DEVELOPMENT - {{ tools.length }} tools available
      </div>
    </v-footer>
  </v-app>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { categories, tools } from '~/data/osintData'
import type { OsintCategory } from '~/types/osint'

useHead({
  title: 'OSINT Development',
  meta: [
    { name: 'description', content: 'Discover a comprehensive collection of OSINT and development tools for developers. GitHub, APIs, Cloud, AI/ML, Security, and more.' },
    { name: 'keywords', content: 'OSINT, development, tools, GitHub, API, Cloud, AI, ML, security, monitoring, devtools' },
    { name: 'author', content: 'OSINT Development' },
    { name: 'robots', content: 'index, follow' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },

    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: 'OSINT Development' },
    { property: 'og:description', content: 'Discover a comprehensive collection of OSINT and development tools for developers.' },
    { property: 'og:url', content: 'https://osintdevelopment.com' },
    { property: 'og:site_name', content: 'OSINT Development' },
    { property: 'og:image', content: '/og-image.png' },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:locale', content: 'en_US' },

    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'OSINT Development - OSINT & Development Tools' },
    { name: 'twitter:description', content: 'Discover a comprehensive collection of OSINT and development tools for developers.' },
    { name: 'twitter:image', content: '/twitter-image.png' },
    { name: 'twitter:site', content: '@osintdev' },
    { name: 'twitter:creator', content: '@osintdev' },

    { name: 'theme-color', content: '#00d9ff' },
    { name: 'msapplication-TileColor', content: '#00d9ff' },
    { name: 'apple-mobile-web-app-capable', content: 'yes' },
    { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
    { name: 'apple-mobile-web-app-title', content: 'OSINT Development' }
  ],
  link: [
    { rel: 'canonical', href: 'https://osintdevelopment.dev' }
  ]
})

const searchQuery = ref('')
const selectedCategory = ref<string[]>([])
const selectedCategoryData = ref<OsintCategory | null>(null)

const filteredCategories = computed(() => {
  if (!searchQuery.value) return categories

  const query = searchQuery.value.toLowerCase()
  return categories.filter(cat => {
    const matchCategory = cat.name.toLowerCase().includes(query) ||
      cat.description.toLowerCase().includes(query)
    const matchTools = tools.filter(tool => tool.categoryId === cat.id).some(tool =>
      tool.name.toLowerCase().includes(query) ||
      tool.description.toLowerCase().includes(query) ||
      tool.tags.some(tag => tag.toLowerCase().includes(query))
    )
    return matchCategory || matchTools
  })
})

const categoryTools = computed(() => {
  if (!selectedCategoryData.value) return []
  return tools.filter(tool => tool.categoryId === selectedCategoryData.value?.id)
})

const selectCategory = (category: OsintCategory) => {
  selectedCategoryData.value = category
}

const goBack = () => {
  selectedCategoryData.value = null
}

const openTool = (url: string) => {
  window.open(url, '_blank', 'noopener,noreferrer')
}

const getToolCount = (categoryId: string) => {
  return tools.filter(tool => tool.categoryId === categoryId).length
}
</script>

<style scoped>
.bubbles-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 24px;
  padding: 40px 20px;
  min-height: 60vh;
}

.category-bubble-container {
  animation: bubbleIn 0.6s cubic-bezier(0.4, 0, 0.2, 1) both;
  animation-delay: var(--delay);
}

.category-bubble {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(0, 217, 255, 0.1) 0%, rgba(0, 217, 255, 0.05) 100%);
  border: 2px solid rgba(0, 217, 255, 0.2);
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
}

.category-bubble:hover {
  transform: translateY(-8px) scale(1.05);
  border-color: rgba(0, 217, 255, 0.5);
  box-shadow: 0 12px 32px rgba(0, 217, 255, 0.2);
  background: linear-gradient(135deg, rgba(0, 217, 255, 0.15) 0%, rgba(0, 217, 255, 0.08) 100%);
}

.category-bubble::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(0, 217, 255, 0.1) 0%, transparent 70%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.category-bubble:hover::before {
  opacity: 1;
}

.bubble-content {
  text-align: center;
  z-index: 1;
  position: relative;
}

.bubble-title {
  display: block;
  font-size: 12px;
  font-weight: 600;
  color: white;
  margin-top: 4px;
  line-height: 1.2;
}

.bubble-count {
  display: block;
  font-size: 10px;
  color: rgba(0, 217, 255, 0.8);
  margin-top: 2px;
  font-weight: 500;
}

.branch-view {
  position: relative;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
}

.back-button-container {
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 10;
}

.back-button {
  background: rgba(0, 217, 255, 0.1);
  border: 1px solid rgba(0, 217, 255, 0.3);
  transition: all 0.3s ease;
}

.back-button:hover {
  background: rgba(0, 217, 255, 0.2);
  transform: translateX(-4px);
}

.central-bubble-container {
  margin-bottom: 60px;
}

.central-bubble {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(0, 217, 255, 0.15) 0%, rgba(0, 217, 255, 0.08) 100%);
  border: 3px solid rgba(0, 217, 255, 0.4);
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(15px);
  display: flex;
  align-items: center;
  justify-content: center;
  animation: centralBubbleIn 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 20px 40px rgba(0, 217, 255, 0.2);
}

.central-bubble::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(0, 217, 255, 0.2) 0%, transparent 70%);
  animation: pulse 2s ease-in-out infinite;
}

.bubble-title-large {
  display: block;
  font-size: 16px;
  font-weight: 700;
  color: white;
  margin-top: 8px;
  line-height: 1.2;
}

.bubble-description {
  display: block;
  font-size: 11px;
  color: rgba(0, 217, 255, 0.8);
  margin-top: 4px;
  line-height: 1.3;
  max-width: 160px;
  text-align: center;
}

.tools-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  max-width: 1200px;
  width: 100%;
  padding: 0 20px;
}

.tool-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 20px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(10px);
  cursor: pointer;
  animation: toolCardIn 0.6s cubic-bezier(0.4, 0, 0.2, 1) both;
  animation-delay: var(--delay);
  position: relative;
  overflow: hidden;
}

.tool-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(0, 217, 255, 0.05) 0%, transparent 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.tool-card:hover {
  background: rgba(0, 217, 255, 0.05);
  border-color: rgba(0, 217, 255, 0.3);
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 16px 32px rgba(0, 217, 255, 0.15);
}

.tool-card:hover::before {
  opacity: 1;
}

.tool-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
}

.tool-icon {
  flex-shrink: 0;
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background: rgba(0, 217, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(0, 217, 255, 0.2);
}

.tool-info {
  flex: 1;
}

.tool-name {
  font-size: 16px;
  font-weight: 600;
  color: white;
  margin: 0 0 8px 0;
  line-height: 1.3;
}

.tool-description {
  font-size: 13px;
  color: rgba(255, 255, 255, 0.7);
  margin: 0 0 12px 0;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.tool-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.tool-action {
  flex-shrink: 0;
  opacity: 0;
  transition: all 0.3s ease;
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background: rgba(0, 217, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
}

.tool-card:hover .tool-action {
  opacity: 1;
  background: rgba(0, 217, 255, 0.2);
  transform: scale(1.1);
}


.category-chips {
  flex-wrap: wrap;
}

.category-chips .v-chip {
  transition: all 0.2s ease;
}

.category-chips .v-chip:hover {
  transform: scale(1.05);
}

.search-field {
  transition: all 0.2s ease;
}

.search-field:focus-within {
  transform: scale(1.02);
}

@media (max-width: 768px) {
  .category-chips {
    justify-content: center;
    margin-top: 16px;
  }

  .bubbles-container {
    gap: 16px;
    padding: 20px 10px;
  }

  .category-bubble {
    width: 100px;
    height: 100px;
  }

  .bubble-title {
    font-size: 11px;
  }

  .central-bubble {
    width: 160px;
    height: 160px;
  }

  .tools-grid {
    grid-template-columns: 1fr;
    gap: 16px;
    padding: 0 10px;
  }
}

@media (max-width: 480px) {
  .category-bubble {
    width: 80px;
    height: 80px;
  }

  .bubble-title {
    font-size: 10px;
  }

  .bubble-count {
    font-size: 9px;
  }

  .central-bubble {
    width: 140px;
    height: 140px;
  }

  .bubble-title-large {
    font-size: 14px;
  }

  .bubble-description {
    font-size: 10px;
  }
}

.border-b {
  border-bottom: 1px solid rgba(255, 255, 255, 0.1) !important;
}

.border-t {
  border-top: 1px solid rgba(255, 255, 255, 0.1) !important;
}

/* Animation d'entrée pour les bulles */
.category-bubble {
  animation: bubbleIn 0.6s cubic-bezier(0.4, 0, 0.2, 1) both;
}

.category-bubble:nth-child(1) {
  animation-delay: 0.1s;
}
.category-bubble:nth-child(2) {
  animation-delay: 0.2s;
}
.category-bubble:nth-child(3) {
  animation-delay: 0.3s;
}
.category-bubble:nth-child(4) {
  animation-delay: 0.4s;
}
.category-bubble:nth-child(5) {
  animation-delay: 0.5s;
}
.category-bubble:nth-child(6) {
  animation-delay: 0.6s;
}
.category-bubble:nth-child(7) {
  animation-delay: 0.7s;
}
.category-bubble:nth-child(8) {
  animation-delay: 0.8s;
}
.category-bubble:nth-child(9) {
  animation-delay: 0.9s;
}
.category-bubble:nth-child(10) {
  animation-delay: 1.0s;
}

@keyframes bubbleIn {
  from {
    opacity: 0;
    transform: translateY(20px) scale(0.8);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@keyframes centralBubbleIn {
  from {
    opacity: 0;
    transform: scale(0.5);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes toolCardIn {
  from {
    opacity: 0;
    transform: translateY(20px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@keyframes pulse {
  0%,
  100% {
    opacity: 0.2;
    transform: scale(1);
  }
  50% {
    opacity: 0.4;
    transform: scale(1.1);
  }
}
</style>
