"use client";

import {
  Button,
  Checkbox,
  Fab,
  Input,
  Label,
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  Card,
} from "@/components";
import { Plus, Bell, Search, Settings, ChevronRight } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { toast } from "sonner";

const formSchema = zod.object({
  username: zod.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: zod.string().email({
    message: "Please enter a valid email address.",
  }),
  terms: zod.boolean().default(false).refine((val) => val === true, {
    message: "You must accept the terms and conditions.",
  }),
});

export default function RootPage() {
  const form = useForm<zod.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      terms: false,
    },
  });

  function onSubmit(values: zod.infer<typeof formSchema>) {
    toast.success("Form submitted!", {
      description: JSON.stringify(values, null, 2),
    });
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8 space-y-12 max-w-4xl mx-auto pb-24">
      <header className="space-y-2 pb-8 border-b border-gray-200">
        <h1 className="text-title-1 font-bold text-gray-900">Input Components Showcase</h1>
        <p className="text-gray-500">디자인 시스템의 입력 요소들을 하나씩 점검합니다.</p>
      </header>

      {/* 1. Button Variants */}
      <section className="space-y-4">
        <h2 className="text-title-3 font-bold text-gray-900">1. Button Variants</h2>
        <Card className="p-6">
          <div className="space-y-6">
            {/* Basic Variants */}
            <div className="space-y-2">
              <h3 className="text-caption-1 font-semibold text-gray-500">Basic Variants</h3>
              <div className="flex flex-wrap gap-4">
                <Button variant="default">Default</Button>
                <Button variant="destructive">Destructive</Button>
                <Button variant="outline">Outline (Bg)</Button>
                <Button variant="outline-transparent">Outline (No Bg)</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="link">Link</Button>
              </div>
            </div>

            {/* Shapes */}
            <div className="space-y-2">
              <h3 className="text-caption-1 font-semibold text-gray-500">Shapes (Rounded)</h3>
              <div className="flex flex-wrap gap-4">
                <Button shape="default">Default (Rounded-md)</Button>
                <Button shape="pill">Pill (Rounded-full)</Button>
                <Button shape="square">Square (Rounded-none)</Button>
              </div>
            </div>

            {/* Special Styles */}
            <div className="space-y-2">
              <h3 className="text-caption-1 font-semibold text-gray-500">Special Styles (Bottom Line)</h3>
              <div className="flex flex-wrap gap-4">
                <Button variant="bottom-line" rightIcon={<ChevronRight />}>
                  More Details
                </Button>
                <Button variant="bottom-line" className="hover:border-error hover:text-error">
                  Delete Action
                </Button>
              </div>
            </div>

            {/* Icon Buttons */}
            <div className="space-y-2">
              <h3 className="text-caption-1 font-semibold text-gray-500">Buttons with Icons</h3>
              <div className="flex flex-wrap gap-4 items-center">
                <Button leftIcon={<Plus className="size-4" />}>Add Item</Button>
                <Button variant="outline" rightIcon={<ChevronRight className="size-4" />}>Next Step</Button>
                <Button variant="outline" shape="pill" leftIcon={<Settings className="size-4" />}>Settings</Button>
                <Button variant="ghost" isIcon><Bell className="size-4" /></Button>
                <Button variant="outline" size="sm" isIcon shape="pill"><Settings className="size-4" /></Button>
              </div>
            </div>
            
             {/* Sizes */}
             <div className="space-y-2">
              <h3 className="text-caption-1 font-semibold text-gray-500">Sizes</h3>
              <div className="flex flex-wrap gap-4 items-center">
                <Button size="xs">XS</Button>
                <Button size="sm">Small</Button>
                <Button size="default">Default</Button>
                <Button size="lg">Large</Button>
              </div>
            </div>

            {/* Disabled State */}
            <div className="space-y-2">
              <h3 className="text-caption-1 font-semibold text-gray-500">Disabled State</h3>
              <div className="flex flex-wrap gap-4">
                <Button disabled>Default</Button>
                <Button disabled variant="destructive">Destructive</Button>
                <Button disabled variant="outline">Outline</Button>
                <Button disabled variant="ghost">Ghost</Button>
              </div>
            </div>

            {/* Loading State */}
            <div className="space-y-2">
              <h3 className="text-caption-1 font-semibold text-gray-500">Loading State</h3>
              <div className="flex flex-wrap gap-4">
                <Button isLoading>Default (White)</Button>
                <Button isLoading variant="destructive">Destructive (White)</Button>
                <Button isLoading variant="outline">Outline (Primary)</Button>
                <Button isLoading variant="ghost">Ghost (Primary)</Button>
                <Button isLoading isIcon><Plus /></Button>
              </div>
            </div>
          </div>
        </Card>
      </section>

      {/* 2. Basic Inputs */}
      <section className="space-y-4">
        <h2 className="text-title-3 font-bold text-gray-900">2. Basic Inputs</h2>
        <Card className="p-6 space-y-6">
          <div className="grid gap-2">
            <Label htmlFor="email-input">Email Address</Label>
            <Input id="email-input" type="email" placeholder="example@email.com" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password-input">Password</Label>
            <Input id="password-input" type="password" placeholder="Enter your password" />
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="terms1" />
            <Label htmlFor="terms1" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Accept terms and conditions
            </Label>
          </div>
        </Card>
      </section>

      {/* 3. Form with Validation */}
      <section className="space-y-4">
        <h2 className="text-title-3 font-bold text-gray-900">3. Form with Validation</h2>
        <Card className="p-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input placeholder="shadcn" {...field} />
                    </FormControl>
                    <FormDescription>
                      This is your public display name.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="example@email.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="terms"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>
                        Accept terms and conditions
                      </FormLabel>
                      <FormDescription>
                        You agree to our Terms of Service and Privacy Policy.
                      </FormDescription>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />
              <Button type="submit">Submit Form</Button>
            </form>
          </Form>
        </Card>
      </section>

      {/* 4. FAB */}
      <Fab onClick={() => toast.info("New Item Added", {
        description: "This is a temporary toast message.",
        action: {
          label: "Undo",
          onClick: () => console.log("Undo"),
        },
      })}>
        <Plus className="size-6" />
      </Fab>
    </div>
  );
}
