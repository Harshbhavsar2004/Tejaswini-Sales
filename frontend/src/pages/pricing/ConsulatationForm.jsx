import React from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

// Define the form schema using Zod
const formSchema = z.object({
  fullName: z.string().min(2, { message: "Name is required" }),
  whatsappNumber: z.string().min(10, { message: "Valid WhatsApp number is required" }),
  monthlyBill: z.enum(["less-1500", "1500-2500", "2500-4000", "4000-8000", "more-8000"]),
  pincode: z.string().min(6, { message: "Valid pincode is required" }),
  city: z.string().min(2, { message: "City is required" }),
  email: z.string().email({ message: "Valid email is required" }),
  terms: z.boolean().refine(val => val === true, {
    message: "You must agree to the terms and privacy policy"
  })
})

export default function ConsultationForm() {
  // Initialize the form with react-hook-form and Zod validation
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      monthlyBill: "less-1500",
      terms: false,
    },
  })

  // Handle form submission
  function onSubmit(values) {
    console.log(values)
  }

  return (
    <div className="min-h-screen bg-emerald-400 p-6 flex items-center justify-center">
      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-8 items-center">
        <div className="text-white space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">
            Schedule a{" "}
            <span className="text-[#00e5ff]">FREE consultation</span>
            {" "}with us today!
          </h1>
          <p className="text-lg opacity-90">
            Get genuine advice from our solar experts.
            <br />
            No pressure, book only if you are satisfied!
          </p>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-lg">
          <Tabs defaultValue="homes" className="mb-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="homes" className="data-[state=active]:bg-[#00e5ff] data-[state=active]:text-white">
                Homes
              </TabsTrigger>
              <TabsTrigger value="housing">Housing Society</TabsTrigger>
              <TabsTrigger value="commercial">Commercial</TabsTrigger>
            </TabsList>
          </Tabs>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name <span className="text-red-500">*</span></FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="whatsappNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>WhatsApp number <span className="text-red-500">*</span></FormLabel>
                      <FormControl>
                        <Input placeholder="Enter WhatsApp number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="monthlyBill"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel>Monthly Electricity Bill <span className="text-red-500">*</span></FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-wrap gap-2"
                      >
                        <Label
                          htmlFor="less-1500"
                          className="flex items-center border rounded-md px-3 py-2 cursor-pointer [&:has(:checked)]:border-[#00e5ff]"
                        >
                          <RadioGroupItem value="less-1500" id="less-1500" className="sr-only" />
                          Less than ₹1500
                        </Label>
                        <Label
                          htmlFor="1500-2500"
                          className="flex items-center border rounded-md px-3 py-2 cursor-pointer [&:has(:checked)]:border-[#00e5ff]"
                        >
                          <RadioGroupItem value="1500-2500" id="1500-2500" className="sr-only" />
                          ₹1500 - ₹2500
                        </Label>
                        <Label
                          htmlFor="2500-4000"
                          className="flex items-center border rounded-md px-3 py-2 cursor-pointer [&:has(:checked)]:border-[#00e5ff]"
                        >
                          <RadioGroupItem value="2500-4000" id="2500-4000" className="sr-only" />
                          ₹2500 - ₹4000
                        </Label>
                        <Label
                          htmlFor="4000-8000"
                          className="flex items-center border rounded-md px-3 py-2 cursor-pointer [&:has(:checked)]:border-[#00e5ff]"
                        >
                          <RadioGroupItem value="4000-8000" id="4000-8000" className="sr-only" />
                          ₹4000 - ₹8000
                        </Label>
                        <Label
                          htmlFor="more-8000"
                          className="flex items-center border rounded-md px-3 py-2 cursor-pointer [&:has(:checked)]:border-[#00e5ff]"
                        >
                          <RadioGroupItem value="more-8000" id="more-8000" className="sr-only" />
                          More than ₹8000
                        </Label>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="pincode"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Pin code <span className="text-red-500">*</span></FormLabel>
                      <FormControl>
                        <Input placeholder="Enter pin code" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="city"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>City <span className="text-red-500">*</span></FormLabel>
                      <FormControl>
                        <Input placeholder="Enter city" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter email address" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="terms"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>
                        I agree to SolarSquare's{" "}
                        <a href="#" className="text-[#00e5ff]">terms of service</a>
                        {" "}&{" "}
                        <a href="#" className="text-[#00e5ff]">privacy policy</a>
                      </FormLabel>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />

              <Button 
                type="submit" 
                className="w-full bg-[#00e5ff] hover:bg-[#00e5ff]/90 text-white"
              >
                Yes! Reduce my electricity bill
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  )
}
