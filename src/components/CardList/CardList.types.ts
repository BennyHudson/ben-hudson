export interface Milestone {
  type: 'career' | 'life-event' | 'education'
  title: string
  location: string
  time: string
}

export interface CardListProps {
  milestones: Milestone[]
}
