"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarDays, Clock, MapPin } from "lucide-react"

// Mock data for bookings
const upcomingBookings = [
  {
    id: "1",
    title: "Hotel Reservation",
    location: "Grand Hotel, New York",
    date: "June 15, 2025",
    time: "Check-in: 3:00 PM",
    status: "confirmed",
  },
  {
    id: "2",
    title: "Flight to London",
    location: "JFK International Airport",
    date: "June 20, 2025",
    time: "Departure: 9:30 PM",
    status: "confirmed",
  },
  {
    id: "3",
    title: "Car Rental",
    location: "Heathrow Airport, London",
    date: "June 21, 2025",
    time: "Pick-up: 10:00 AM",
    status: "pending",
  },
]

const pastBookings = [
  {
    id: "4",
    title: "Hotel Reservation",
    location: "Seaside Resort, Miami",
    date: "May 5, 2025",
    time: "Check-out: 11:00 AM",
    status: "completed",
  },
  {
    id: "5",
    title: "Flight to Miami",
    location: "LaGuardia Airport",
    date: "May 1, 2025",
    time: "Departure: 2:15 PM",
    status: "completed",
  },
]

export function BookingTab() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <div className="space-y-6">
      <Tabs defaultValue="upcoming" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="past">Booking History</TabsTrigger>
        </TabsList>

        <TabsContent value="upcoming" className="space-y-4 pt-4">
          {upcomingBookings.map((booking) => (
            <div key={booking.id} className="flex flex-col space-y-3 rounded-lg border p-4">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-medium">{booking.title}</h3>
                  <div className="flex items-center text-sm text-muted-foreground gap-1 mt-1">
                    <MapPin className="h-3.5 w-3.5" />
                    <span>{booking.location}</span>
                  </div>
                </div>
                <Badge variant={booking.status === "confirmed" ? "default" : "outline"}>{booking.status}</Badge>
              </div>

              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <CalendarDays className="h-4 w-4 text-muted-foreground" />
                  <span>{booking.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span>{booking.time}</span>
                </div>
              </div>

              <div className="flex gap-2 mt-2">
                <Button size="sm" variant="outline">
                  View Details
                </Button>
                <Button size="sm" variant="outline">
                  Cancel
                </Button>
              </div>
            </div>
          ))}
        </TabsContent>

        <TabsContent value="past" className="space-y-4 pt-4">
          {pastBookings.map((booking) => (
            <div key={booking.id} className="flex flex-col space-y-3 rounded-lg border p-4">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-medium">{booking.title}</h3>
                  <div className="flex items-center text-sm text-muted-foreground gap-1 mt-1">
                    <MapPin className="h-3.5 w-3.5" />
                    <span>{booking.location}</span>
                  </div>
                </div>
                <Badge variant="secondary">{booking.status}</Badge>
              </div>

              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <CalendarDays className="h-4 w-4 text-muted-foreground" />
                  <span>{booking.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span>{booking.time}</span>
                </div>
              </div>

              <div className="flex gap-2 mt-2">
                <Button size="sm" variant="outline">
                  View Details
                </Button>
                <Button size="sm" variant="outline">
                  Book Again
                </Button>
              </div>
            </div>
          ))}
        </TabsContent>
      </Tabs>

      <div className="mt-6">
        <h3 className="font-medium mb-3">Calendar View</h3>
        <div className="border rounded-md p-4">
          <Calendar mode="single" selected={date} onSelect={setDate} className="mx-auto" />
        </div>
      </div>
    </div>
  )
}
