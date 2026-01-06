"use client";

import { useState } from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, ControllerRenderProps } from "react-hook-form";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const formSchema = z.object({
  name: z.string().min(2, "Please enter your name."),
  email: z.string().email("Invalid email address.").optional(),
  role: z.string().min(2, "Please tell us who you are."),
  rating: z.string({ required_error: "Select a rating." }),
  feedback: z
    .string()
    .min(20, "Please share a bit more detail (min 20 characters)."),
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
      feedback: "",
      permission: false,
    },
  });

  async function onSubmit(values: FormValues) {
    try {
      setIsSubmitting(true);

      const res = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...values,
          rating: Number(values.rating),
          allowPublicDisplay: values.permission,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to send feedback");
      }

      toast.success("Thanks for helping shape TheFalse.");
      form.reset();
    } catch (err) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="container mx-auto py-32 px-4 min-h-[calc(100vh-4rem)]">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-serif mb-4">Send Feedback</h1>
        <p className="text-muted-foreground mb-10">
          TheFalse is still evolving. If something feels right, broken,
          confusing, or missing — we want to know.
        </p>

        <Card>
          <CardContent className="pt-6">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your name" {...field} />
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
                      <FormLabel>Email (optional)</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="you@example.com"
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
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Who are you?</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Reader, developer, student, etc."
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
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Overall feeling</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          value={field.value}
                          className="flex gap-4 flex-wrap"
                        >
                          {[
                            ["5", "Loved it"],
                            ["4", "Good"],
                            ["3", "Neutral"],
                            ["2", "Frustrating"],
                            ["1", "Didn’t work"],
                          ].map(([value, label]) => (
                            <div
                              key={value}
                              className="flex items-center gap-2"
                            >
                              <RadioGroupItem value={value} id={value} />
                              <Label htmlFor={value}>{label}</Label>
                            </div>
                          ))}
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="feedback"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your thoughts</FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          className="min-h-[180px]"
                          placeholder="What worked? What didn’t? What should change?"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="permission"
                  render={({ field }) => (
                    <FormItem className="flex gap-3 items-start">
                      <FormControl>
                        <input
                          type="checkbox"
                          checked={field.value}
                          onChange={(e) => field.onChange(e.target.checked)}
                          className="mt-1"
                        />
                      </FormControl>
                      <FormLabel className="font-normal">
                        You may quote this feedback publicly (anonymously unless
                        stated)
                      </FormLabel>
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending…" : "Send feedback"}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
