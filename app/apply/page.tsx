"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { CheckCircle2, Loader2 } from "lucide-react"

const formSchema = z.object({
    fullName: z.string().min(2, { message: "Name must be at least 2 characters." }),
    email: z.string().email({ message: "Invalid email address." }),
    phone: z.string().regex(/^\d{10}$/, { message: "Phone number must be 10 digits." }),
    dob: z.string().min(1, { message: "Date of Birth is required" }),
    gender: z.enum(["male", "female", "other"], { required_error: "Please select a gender." }),
    fatherName: z.string().min(2, { message: "Father's name is required." }),
    city: z.string().min(2, { message: "City is required." }),
    state: z.string().min(2, { message: "State is required." }),
    currentClass: z.string().min(1, { message: "Please select your current class." }),
    marks10th: z.string().min(1, { message: "10th % is required." }),
    marks12th: z.string().optional(),
    course: z.string().min(1, { message: "Please select a course to apply for." }),
    message: z.string().optional(),
})

export default function ApplyPage() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            fullName: "",
            email: "",
            phone: "",
            dob: "",
            fatherName: "",
            city: "",
            state: "",
            marks10th: "",
            marks12th: "",
            message: "",
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        setIsSubmitting(true)
        // Simulate API call
        setTimeout(() => {
            console.log(values)
            setIsSubmitting(false)
            setIsSubmitted(true)
            window.scrollTo(0, 0)
        }, 2000)
    }

    if (isSubmitted) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
                <Card className="max-w-md w-full text-center p-8 animate-scale-in">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 className="w-10 h-10 text-green-600" />
                    </div>
                    <h2 className="text-3xl font-heading text-navy mb-2">Application Received!</h2>
                    <p className="text-gray-600 mb-6">
                        Thank you for applying to SDCI. Our admission counsellor will contact you within 24 hours to guide you through the next steps.
                    </p>
                    <div className="bg-gray-100 p-4 rounded-lg mb-6 text-sm text-left">
                        <p className="font-bold text-navy mb-1">Application ID:</p>
                        <p className="font-mono text-gray-600">SDCI-2026-{Math.floor(Math.random() * 10000)}</p>
                    </div>
                    <Button className="w-full bg-[var(--color-navy)]" onClick={() => window.location.href = '/'}>
                        Back to Home
                    </Button>
                </Card>
            </div>
        )
    }

    return (
        <main className="min-h-screen bg-gray-50 py-24 md:py-32">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-10">
                        <h1 className="font-heading text-4xl md:text-5xl text-navy mb-4">
                            Apply for <span className="text-[var(--color-saffron)]">Admission 2026</span>
                        </h1>
                        <p className="text-gray-600 text-lg">
                            Take the first step towards your uniform. Fill out the form below to register for the entrance test / counseling session.
                        </p>
                    </div>

                    <Card className="border-t-4 border-t-[var(--color-saffron)] shadow-xl">
                        <CardHeader>
                            <CardTitle className="text-2xl text-navy">Registration Form</CardTitle>
                            <CardDescription>
                                Please provide accurate details. All fields marked with * are mandatory.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">

                                    {/* Personal Details Section */}
                                    <div className="space-y-4">
                                        <h3 className="text-lg font-bold text-navy border-b border-gray-100 pb-2 mb-4">Personal Details</h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <FormField
                                                control={form.control}
                                                name="fullName"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Full Name *</FormLabel>
                                                        <FormControl>
                                                            <Input placeholder="As per 10th marksheet" {...field} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                            <FormField
                                                control={form.control}
                                                name="fatherName"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Father's Name *</FormLabel>
                                                        <FormControl>
                                                            <Input placeholder="Guardian's Name" {...field} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                            <FormField
                                                control={form.control}
                                                name="dob"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Date of Birth *</FormLabel>
                                                        <FormControl>
                                                            <Input type="date" {...field} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                            <FormField
                                                control={form.control}
                                                name="gender"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Gender *</FormLabel>
                                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                            <FormControl>
                                                                <SelectTrigger>
                                                                    <SelectValue placeholder="Select Gender" />
                                                                </SelectTrigger>
                                                            </FormControl>
                                                            <SelectContent>
                                                                <SelectItem value="male">Male</SelectItem>
                                                                <SelectItem value="female">Female</SelectItem>
                                                                <SelectItem value="other">Other</SelectItem>
                                                            </SelectContent>
                                                        </Select>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </div>
                                    </div>

                                    {/* Contact Details */}
                                    <div className="space-y-4">
                                        <h3 className="text-lg font-bold text-navy border-b border-gray-100 pb-2 mb-4">Contact Information</h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <FormField
                                                control={form.control}
                                                name="phone"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Mobile Number *</FormLabel>
                                                        <FormControl>
                                                            <Input placeholder="10-digit number" {...field} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                            <FormField
                                                control={form.control}
                                                name="email"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Email Address *</FormLabel>
                                                        <FormControl>
                                                            <Input placeholder="student@example.com" {...field} />
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
                                                        <FormLabel>City *</FormLabel>
                                                        <FormControl>
                                                            <Input placeholder="Current City" {...field} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                            <FormField
                                                control={form.control}
                                                name="state"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>State *</FormLabel>
                                                        <FormControl>
                                                            <Input placeholder="State" {...field} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </div>
                                    </div>

                                    {/* Academic & Course */}
                                    <div className="space-y-4">
                                        <h3 className="text-lg font-bold text-navy border-b border-gray-100 pb-2 mb-4">Academic Profile</h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <FormField
                                                control={form.control}
                                                name="currentClass"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Current Class/Status *</FormLabel>
                                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                            <FormControl>
                                                                <SelectTrigger>
                                                                    <SelectValue placeholder="Select Status" />
                                                                </SelectTrigger>
                                                            </FormControl>
                                                            <SelectContent>
                                                                <SelectItem value="10-appearing">10th Appearing</SelectItem>
                                                                <SelectItem value="10-passed">10th Passed</SelectItem>
                                                                <SelectItem value="11">11th Standard</SelectItem>
                                                                <SelectItem value="12-appearing">12th Appearing</SelectItem>
                                                                <SelectItem value="12-passed">12th Passed</SelectItem>
                                                                <SelectItem value="graduate">Graduate</SelectItem>
                                                            </SelectContent>
                                                        </Select>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                            <FormField
                                                control={form.control}
                                                name="course"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Interested Course *</FormLabel>
                                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                            <FormControl>
                                                                <SelectTrigger>
                                                                    <SelectValue placeholder="Select Course" />
                                                                </SelectTrigger>
                                                            </FormControl>
                                                            <SelectContent>
                                                                <SelectItem value="nda-foundation">NDA Foundation (2 Years)</SelectItem>
                                                                <SelectItem value="nda-target">NDA Target (1 Year)</SelectItem>
                                                                <SelectItem value="cds">CDS Written</SelectItem>
                                                                <SelectItem value="afcat">AFCAT</SelectItem>
                                                                <SelectItem value="ssb">SSB Interview</SelectItem>
                                                            </SelectContent>
                                                        </Select>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                            <FormField
                                                control={form.control}
                                                name="marks10th"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>10th Percentage (%) *</FormLabel>
                                                        <FormControl>
                                                            <Input placeholder="e.g. 85.5" {...field} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                            <FormField
                                                control={form.control}
                                                name="marks12th"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>12th Percentage (%) <span className="text-xs font-normal text-gray-500">(If applicable)</span></FormLabel>
                                                        <FormControl>
                                                            <Input placeholder="e.g. 78.0" {...field} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </div>
                                    </div>

                                    <div className="pt-4">
                                        <Button type="submit" className="w-full bg-[var(--color-saffron)] hover:bg-orange-600 text-white font-bold text-lg h-12 shadow-md" disabled={isSubmitting}>
                                            {isSubmitting ? (
                                                <>
                                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Submitting...
                                                </>
                                            ) : (
                                                "Submit Application"
                                            )}
                                        </Button>
                                    </div>
                                </form>
                            </Form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </main>
    )
}
