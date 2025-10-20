export interface OsintCategory {
  id: string
  name: string
  icon: string
  description: string
}

export interface OsintTool {
  id: string
  name: string
  url: string
  description: string
  categoryId: string
  tags: string[]
  isPremium?: boolean
}
