'use client'
import HomeSlider from '@/components/Slider.js'
import CardBox from '@/components/CardsBox.js'
export default function Home() {

  return (
    <div className="dark:text-white">
      <HomeSlider/>
      <CardBox/>
    </div>
  );
}
