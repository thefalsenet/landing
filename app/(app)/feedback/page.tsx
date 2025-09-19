"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, ControllerRenderProps } from "react-hook-form";
import * as z from "zod";
import { toast } from "sonner";
import { useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z
    .string()
    .email({
      message: "Please enter a valid email address.",
    })
    .optional(),
  role: z.string().min(2, {
    message: "Please tell us your role or position.",
  }),
  rating: z.string({
    required_error: "Please select a rating.",
  }),
  testimonial: z.string().min(20, {
    message: "Please provide a detailed testimonial (at least 20 characters).",
  }),
  permission: z.boolean(),
});

type FormValues = z.infer<typeof formSchema>;

export default function FeedbackPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      role: "",
      rating: "",
      testimonial: "",
      permission: false,
    },
  });

  async function onSubmit(values: FormValues) {
    try {
      setIsSubmitting(true);

      const response = await fetch("/api/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: values.name,
          email: values.email || "",
          role: values.role,
          rating: parseInt(values.rating),
          testimonial: values.testimonial,
          allowPublicDisplay: values.permission,
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || "Failed to submit feedback");
      }

      toast.success("Thank you for your feedback!");
      form.reset();
    } catch (error) {
      console.error("Error submitting feedback:", error);
      toast.error(
        error instanceof Error
          ? error.message
          : "Failed to submit feedback. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="container mx-auto py-32 px-4 min-h-[calc(100vh-4rem)]">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 font-serif">Share Your Experience</h1>
        <p className="text-lg text-muted-foreground mb-8">
          We value your feedback! Please share your experience using our
          platform. Your testimonial helps us improve and lets others know about
          our services.
        </p>

        <Card>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({
                    field,
                  }: {
                    field: ControllerRenderProps<FormValues, "name">;
                  }) => (
                    <FormItem>
                      <FormLabel>Your Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({
                    field,
                  }: {
                    field: ControllerRenderProps<FormValues, "email">;
                  }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="Enter your email"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="role"
                  render={({
                    field,
                  }: {
                    field: ControllerRenderProps<FormValues, "role">;
                  }) => (
                    <FormItem>
                      <FormLabel>Your Role/Position</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="e.g., Software Engineer, Product Manager"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="rating"
                  render={({
                    field,
                  }: {
                    field: ControllerRenderProps<FormValues, "rating">;
                  }) => (
                    <FormItem>
                      <FormLabel>How would you rate your experience?</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex flex-row space-x-4 flex-wrap"
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="5" id="5" />
                            <Label htmlFor="5">Excellent</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="4" id="4" />
                            <Label htmlFor="4">Good</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="3" id="3" />
                            <Label htmlFor="3">Average</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="2" id="2" />
                            <Label htmlFor="2">Fair</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="1" id="1" />
                            <Label htmlFor="1">Poor</Label>
                          </div>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="testimonial"
                  render={({
                    field,
                  }: {
                    field: ControllerRenderProps<FormValues, "testimonial">;
                  }) => (
                    <FormItem>
                      <FormLabel>Your Testimonial</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Share your experience with our platform..."
                          className="min-h-[200px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="permission"
                  render={({
                    field,
                  }: {
                    field: ControllerRenderProps<FormValues, "permission">;
                  }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <input
                          type="checkbox"
                          checked={field.value}
                          onChange={(e) => field.onChange(e.target.checked)}
                          className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>
                          I give permission to display my testimonial publicly
                        </FormLabel>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit Feedback"}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
