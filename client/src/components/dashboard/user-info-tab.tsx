"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Camera, Check, Mail, Shield } from "lucide-react"

export function UserInfoTab() {
  const [isEditing, setIsEditing] = useState(false)

  return (
    <div className="space-y-6">
      <Tabs defaultValue="personal" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="personal">Personal</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
        </TabsList>

        <TabsContent value="personal" className="space-y-6 pt-4">
          <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
            <Avatar className="w-20 h-20 border">
              <AvatarImage src="/placeholder-user.jpg" alt="User" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>

            <div className="space-y-1">
              <h3 className="font-medium text-lg">Profile Picture</h3>
              <p className="text-sm text-muted-foreground">This will be displayed on your profile.</p>
              <div className="flex gap-2 mt-2">
                <Button size="sm" variant="outline" className="gap-1">
                  <Camera className="h-4 w-4" />
                  Change
                </Button>
                <Button size="sm" variant="outline">
                  Remove
                </Button>
              </div>
            </div>
          </div>

          <Separator />

          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="font-medium">Personal Information</h3>
              <Button variant="ghost" onClick={() => setIsEditing(!isEditing)}>
                {isEditing ? "Cancel" : "Edit"}
              </Button>
            </div>

            <div className="grid gap-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="full-name">Full name</Label>
                  <Input id="full-name" defaultValue="John Doe" disabled={!isEditing} />
                </div>
               
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="flex gap-2">
                  <Input id="email" defaultValue="john.doe@example.com" disabled={!isEditing} />
                  <Button size="icon" variant="ghost" disabled={!isEditing}>
                    <Mail className="h-4 w-4" />
                  </Button>
                </div>
              </div>

             
            </div>

            {isEditing && (
              <Button className="mt-4">
                <Check className="mr-2 h-4 w-4" />
                Save Changes
              </Button>
            )}
          </div>
        </TabsContent>

        <TabsContent value="security" className="space-y-6 pt-4">
          <div className="space-y-4">
            <h3 className="font-medium">Change Password</h3>
            <div className="grid gap-4">
              <div className="space-y-2">
                <Label htmlFor="current-password">Current password</Label>
                <Input id="current-password" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="new-password">New password</Label>
                <Input id="new-password" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirm-password">Confirm password</Label>
                <Input id="confirm-password" type="password" />
              </div>
            </div>
            <Button className="mt-4">Update Password</Button>
          </div>

          <Separator />

          <div className="space-y-4">
            <h3 className="font-medium">Two-Factor Authentication</h3>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-muted-foreground" />
                  <span>Two-factor authentication</span>
                </div>
                <p className="text-sm text-muted-foreground">Add an extra layer of security to your account</p>
              </div>
              <Switch />
            </div>
          </div>

          <Separator />

          <div className="space-y-4">
            <h3 className="font-medium">Sessions</h3>
            <div className="rounded-md border p-4">
              <div className="flex justify-between items-center">
                <div>
                  <div className="font-medium">Current Session</div>
                  <div className="text-sm text-muted-foreground">Chrome on Windows • New York, USA</div>
                </div>
                <span className="text-xs bg-secondary px-2 py-1 rounded-md">Active</span>
              </div>
            </div>
            <Button variant="outline" className="w-full">
              Sign Out of All Sessions
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-6 pt-4">
          <div className="space-y-4">
            <h3 className="font-medium">Email Notifications</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <div>Booking confirmations</div>
                  <p className="text-sm text-muted-foreground">Receive emails when your booking is confirmed</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <div>Booking reminders</div>
                  <p className="text-sm text-muted-foreground">Receive reminders about upcoming bookings</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <div>Promotional emails</div>
                  <p className="text-sm text-muted-foreground">Receive emails about new features and special offers</p>
                </div>
                <Switch />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <div>Account activity</div>
                  <p className="text-sm text-muted-foreground">Receive emails about your account activity</p>
                </div>
                <Switch defaultChecked />
              </div>
            </div>
          </div>

          <Button className="mt-4">Save Notification Preferences</Button>
        </TabsContent>
      </Tabs>
    </div>
  )
}
