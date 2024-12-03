import React from 'react';
import { FilterControls } from "@/components/filter-controls";
import { MetricsCards } from "@/components/metrics-cards";
import { TopicsSection } from '@/components/topics-section';
import { Leaderboards } from '@/components/leaderboards';


const Allcharts = () => {
  return (
    <div className="flex flex-col w-full">
      <FilterControls/>
      <MetricsCards/>
      <TopicsSection/>
      <Leaderboards/>
    </div>
  
)
}

export default Allcharts;
