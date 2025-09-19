"use client";

import { siteConfig } from "@/config/site";
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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, ControllerRenderProps } from "react-hook-form";
import * as z from "zod";
import { toast } from "sonner";
import { ChangeEvent, useState } from "react";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  issueType: z.string({
    required_error: "Please select an issue type.",
  }),
  subject: z.string().min(5, {
    message: "Subject must be at least 5 characters.",
  }),
  description: z.string().min(20, {
    message: "Description must be at least 20 characters.",
  }),
  screenshot: z.any().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export default function SupportPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      issueType: "",
      subject: "",
      description: "",
    },
  });

  async function onSubmit(values: FormValues) {
    try {
      setIsSubmitting(true);

      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("email", values.email);
      formData.append("issueType", values.issueType);
      formData.append("subject", values.subject);
      formData.append("description", values.description);

      if (values.screenshot) {
        formData.append("screenshot", values.screenshot);
      }

      const response = await fetch("/api/support", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || "Failed to submit form");
      }

      toast.success("Your support request has been submitted!");
      form.reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error(
        error instanceof Error
          ? error.message
          : "Failed to submit form. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="container mx-auto py-32 px-4 min-h-[calc(100vh-4rem)]">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 font-serif">Support Center</h1>
        <p className="text-lg text-muted-foreground mb-8">
          We&apos;re here to help! Please fill out the form below to report any
          issues you&apos;re experiencing with our platform.
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
                  name="issueType"
                  render={({
                    field,
                  }: {
                    field: ControllerRenderProps<FormValues, "issueType">;
                  }) => (
                    <FormItem>
                      <FormLabel>Issue Type</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select issue type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="bug">Bug Report</SelectItem>
                          <SelectItem value="feature">
                            Feature Request
                          </SelectItem>
                          <SelectItem value="account">Account Issue</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="subject"
                  render={({
                    field,
                  }: {
                    field: ControllerRenderProps<FormValues, "subject">;
                  }) => (
                    <FormItem>
                      <FormLabel>Subject</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Brief description of the issue"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="description"
                  render={({
                    field,
                  }: {
                    field: ControllerRenderProps<FormValues, "description">;
                  }) => (
                    <FormItem>
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Please provide detailed information about the issue..."
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
                  name="screenshot"
                  render={({
                    field: { value, onChange, ...field },
                  }: {
                    field: ControllerRenderProps<FormValues, "screenshot">;
                  }) => (
                    <FormItem>
                      <FormLabel>Screenshot (Optional)</FormLabel>
                      <FormControl>
                        <Input
                          type="file"
                          accept="image/*"
                          onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            onChange(e.target.files?.[0])
                          }
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit Report"}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>

        <div className="mt-8 text-center text-muted-foreground">
          <p>For urgent issues, please contact us at bkht@thefalse.net</p>
        </div>
      </div>
    </div>
  );
}
