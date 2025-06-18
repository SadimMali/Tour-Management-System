export const tour = {
  id: "b8a74c19-2d42-4e1b-b3c6-b4d4fc2dcd87",
  title: "Everest Base Camp Trek",
  slug: "everest-base-camp-trek",
  description:
    "A breathtaking trek to the base of the world’s highest mountain.",
  highlights: [
    "Scenic flight to Lukla",
    "View of Mount Everest",
    "Cultural experience with Sherpas",
    "Visit to Tengboche Monastery",
  ],
  images: [
    "https://images.unsplash.com/photo-1592285896110-8d88b5b3a5d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG5lcGFsfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1516477485464-abbcea8f9b1f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG5lcGFsfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1592285896110-8d88b5b3a5d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG5lcGFsfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1592285896110-8d88b5b3a5d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG5lcGFsfGVufDB8fDB8fHww",
  ],
  durationDays: 14,
  pricePerPerson: 1499.99,
  currency: "USD",
  rating: 4.8,
  reviewCount: 132,
  groupType: "Group",
  activityType: "Trekking",
  startingPoint: "Kathmandu",
  endingPoint: "Kathmandu",
  mapEmbedUrl: "https://www.google.com/maps/embed?...",
  createdAt: new Date("2025-06-01T10:00:00Z"),
  updatedAt: new Date("2025-06-03T09:30:00Z"),

  itinerary: [
    {
      id: "day1",
      day: 1,
      title: "Fly to Lukla & Trek to Phakding",
      description:
        "Short flight followed by a trek through the Dudh Koshi valley.",
    },
    {
      id: "day2",
      day: 2,
      title: "Trek to Namche Bazaar",
      description:
        "Steep ascent to the Sherpa capital with stunning mountain views.",
    },
    // More days...
  ],
  includes: [
    { id: "inc1", item: "All airport transfers" },
    { id: "inc2", item: "Accommodation during trek" },
    { id: "inc3", item: "Guide and porter services" },
  ],
  exclusions: [
    { id: "exc1", item: "International airfare" },
    { id: "exc2", item: "Travel insurance" },
  ],
  reviews: [
    {
      id: "rev1",
      authorName: "Jane Doe",
      rating: 5,
      comment: "Absolutely amazing experience. Well organized!",
      createdAt: new Date("2025-05-25T12:00:00Z"),
    },
    {
      id: "rev2",
      authorName: "John Smith",
      rating: 4.5,
      comment: "Beautiful scenery, great guide!",
      createdAt: new Date("2025-05-28T15:30:00Z"),
    },
  ],
};
