export interface PageLayoutProps {
  children: React.ReactNode
  locationPath: string
}

export interface PageLayoutState {
  pageStructure: {
    slug: string
    name: string
    children: {
      slug: string
      name: string
      level: number
    }[]
  }[]
  activeFilter: number,
}
