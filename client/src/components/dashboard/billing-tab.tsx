"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CreditCard, Download, Plus } from "lucide-react"

// Mock data for billing
const paymentMethods = [
  {
    id: "1",
    type: "Visa",
    last4: "4242",
    expiry: "06/2026",
    isDefault: true,
  },
  {
    id: "2",
    type: "Mastercard",
    last4: "5555",
    expiry: "08/2025",
    isDefault: false,
  },
]

const invoices = [
  {
    id: "INV-001",
    date: "June 1, 2025",
    amount: "$129.00",
    status: "Paid",
    description: "Monthly Subscription",
  },
  {
    id: "INV-002",
    date: "May 1, 2025",
    amount: "$129.00",
    status: "Paid",
    description: "Monthly Subscription",
  },
  {
    id: "INV-003",
    date: "April 1, 2025",
    amount: "$129.00",
    status: "Paid",
    description: "Monthly Subscription",
  },
]

export function BillingTab() {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(paymentMethods[0].id)

  return (
    <div className="space-y-6">
      <Tabs defaultValue="payment-methods" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="payment-methods">Payment Methods</TabsTrigger>
          <TabsTrigger value="invoices">Invoices</TabsTrigger>
        </TabsList>

        <TabsContent value="payment-methods" className="space-y-4 pt-4">
          <div className="space-y-4">
            <RadioGroup value={selectedPaymentMethod} onValueChange={setSelectedPaymentMethod}>
              {paymentMethods.map((method) => (
                <div key={method.id} className="flex items-center space-x-2">
                  <RadioGroupItem value={method.id} id={`payment-${method.id}`} />
                  <Label
                    htmlFor={`payment-${method.id}`}
                    className="flex flex-1 items-center justify-between rounded-md border p-4 cursor-pointer"
                  >
                    <div className="flex items-center gap-4">
                      <CreditCard className="h-5 w-5" />
                      <div>
                        <div className="font-medium">
                          {method.type} •••• {method.last4}
                        </div>
                        <div className="text-sm text-muted-foreground">Expires {method.expiry}</div>
                      </div>
                    </div>
                    {method.isDefault && <span className="text-xs bg-secondary px-2 py-1 rounded-md">Default</span>}
                  </Label>
                </div>
              ))}
            </RadioGroup>

            <Button variant="outline" className="w-full mt-4">
              <Plus className="mr-2 h-4 w-4" />
              Add Payment Method
            </Button>
          </div>

          <Separator className="my-6" />

          <div className="space-y-4">
            <h3 className="font-medium">Billing Information</h3>
            <div className="grid gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="first-name">First name</Label>
                  <Input id="first-name" defaultValue="John" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Last name</Label>
                  <Input id="last-name" defaultValue="Doe" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                <Input id="address" defaultValue="123 Main St" />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="city">City</Label>
                  <Input id="city" defaultValue="New York" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="state">State</Label>
                  <Input id="state" defaultValue="NY" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="zip">ZIP</Label>
                  <Input id="zip" defaultValue="10001" />
                </div>
              </div>
            </div>
            <Button className="mt-4">Save Changes</Button>
          </div>
        </TabsContent>

        <TabsContent value="invoices" className="space-y-4 pt-4">
          <div className="rounded-md border">
            <div className="grid grid-cols-5 p-4 font-medium">
              <div>Invoice</div>
              <div>Date</div>
              <div>Description</div>
              <div>Amount</div>
              <div className="text-right">Actions</div>
            </div>
            <Separator />
            {invoices.map((invoice) => (
              <div key={invoice.id} className="grid grid-cols-5 items-center p-4">
                <div>{invoice.id}</div>
                <div>{invoice.date}</div>
                <div>{invoice.description}</div>
                <div>{invoice.amount}</div>
                <div className="text-right">
                  <Button variant="ghost" size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
