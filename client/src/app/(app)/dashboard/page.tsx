"use client"

import { useState } from "react"
import { CalendarDays, CreditCard, User } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookingTab } from "@/components/dashboard/booking-tab"
import { BillingTab } from "@/components/dashboard/billing-tab"
import { UserInfoTab } from "@/components/dashboard/user-info-tab"
import MaxWidthWrapper from "@/components/MaxWidthWrapper"

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("booking")

  return (
    <MaxWidthWrapper className="container py-10">
      <div className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">Manage your bookings, billing, and account settings.</p>
      </div>

      <Tabs defaultValue="booking" value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="grid w-full grid-cols-3 md:w-auto">
          <TabsTrigger value="booking" className="flex items-center gap-2">
            <CalendarDays className="h-4 w-4" />
            <span className="hidden sm:inline">Bookings</span>
          </TabsTrigger>
          <TabsTrigger value="billing" className="flex items-center gap-2">
            <CreditCard className="h-4 w-4" />
            <span className="hidden sm:inline">Billing</span>
          </TabsTrigger>
          <TabsTrigger value="user-info" className="flex items-center gap-2">
            <User className="h-4 w-4" />
            <span className="hidden sm:inline">Profile</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="booking" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Bookings</CardTitle>
              <CardDescription>View and manage your upcoming and past bookings.</CardDescription>
            </CardHeader>
            <CardContent>
              <BookingTab />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="billing" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Billing</CardTitle>
              <CardDescription>View your payment history and manage your billing information.</CardDescription>
            </CardHeader>
            <CardContent>
              <BillingTab />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="user-info" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Profile Information</CardTitle>
              <CardDescription>View and update your personal information.</CardDescription>
            </CardHeader>
            <CardContent>
              <UserInfoTab />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </MaxWidthWrapper>
  )
}

