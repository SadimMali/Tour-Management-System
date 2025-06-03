import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import StarRating from '@/components/StartRating';
import React from 'react'

export default function ActivityPage() {
  const tour = {
  id: 'b8a74c19-2d42-4e1b-b3c6-b4d4fc2dcd87',
  title: 'Everest Base Camp Trek',
  slug: 'everest-base-camp-trek',
  description: 'A breathtaking trek to the base of the world’s highest mountain.',
  highlights: [
    'Scenic flight to Lukla',
    'View of Mount Everest',
    'Cultural experience with Sherpas',
    'Visit to Tengboche Monastery'
  ],
  durationDays: 14,
  pricePerPerson: 1499.99,
  currency: 'USD',
  rating: 4.8,
  reviewCount: 132,
  groupType: 'Group',
  activityType: 'Trekking',
  startingPoint: 'Kathmandu',
  endingPoint: 'Kathmandu',
  mapEmbedUrl: 'https://www.google.com/maps/embed?...',
  createdAt: new Date('2025-06-01T10:00:00Z'),
  updatedAt: new Date('2025-06-03T09:30:00Z'),

  itinerary: [
    { id: 'day1', day: 1, title: 'Fly to Lukla & Trek to Phakding', description: 'Short flight followed by a trek through the Dudh Koshi valley.' },
    { id: 'day2', day: 2, title: 'Trek to Namche Bazaar', description: 'Steep ascent to the Sherpa capital with stunning mountain views.' }
    // More days...
  ],
  includes: [
    { id: 'inc1', item: 'All airport transfers' },
    { id: 'inc2', item: 'Accommodation during trek' },
    { id: 'inc3', item: 'Guide and porter services' }
  ],
  exclusions: [
    { id: 'exc1', item: 'International airfare' },
    { id: 'exc2', item: 'Travel insurance' }
  ],
  reviews: [
    {
      id: 'rev1',
      authorName: 'Jane Doe',
      rating: 5,
      comment: 'Absolutely amazing experience. Well organized!',
      createdAt: new Date('2025-05-25T12:00:00Z')
    },
    {
      id: 'rev2',
      authorName: 'John Smith',
      rating: 4.5,
      comment: 'Beautiful scenery, great guide!',
      createdAt: new Date('2025-05-28T15:30:00Z')
    }
  ]
};

  return (
    <div>
       <MaxWidthWrapper>
        <div>
        <h1 className='text-2xl font-bold'>{tour.title}</h1>
        {/* reviews */}
        <div className='mt-4 flex gap-2'>
         {<StarRating rating={tour.rating} />}   
         <span>{tour.rating}</span>
         <span className='underline'>{tour.reviewCount } reviews</span>      
          </div>
        </div>
       </MaxWidthWrapper>
    </div>
  )
}
