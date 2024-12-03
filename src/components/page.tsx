import { Download } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Sidebar } from "./components/sidebar"
import { FilterControls } from "./components/filter-controls"
import { MetricsCards } from "./components/metrics-cards"
import { KnowledgeMetrics } from "./components/knowledge-metrics"
import { ActivityChart } from "./components/activity-chart"
import { TopicsSection } from "./components/topics-section"
import { Leaderboards } from "./components/leaderboards"
import SidePage from './components/sidebar-07'

export default function Page() {
  return (
    <>
      <SidePage isOpenByDefault={false} />
      <main style={{ marginLeft: '250px', padding: '1em' }}>
        <h1>Welcome to the main content area</h1>
        <p>This area is pushed aside when the sidebar is open.</p>
      </main>
    </>
  )
}

