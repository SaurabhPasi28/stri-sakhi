'use client'
import HomeSlider from '@/app/components/Slider.js'
import CardBox from '@/app/components/CardsBox.js'
export default function Home() {

  return (
    <div className="dark:text-white">
      <HomeSlider/>
      <CardBox/>
    </div>
  );
}
