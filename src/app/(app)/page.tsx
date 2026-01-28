"use client";

import * as React from "react";
import { toast } from "sonner";
import { 
  Bell, 
  CreditCard, 
  Keyboard, 
  User, 
  Settings,
  Plus,
  Terminal,
  Loader2
} from "lucide-react";

import {
  Button,
  Badge,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Input,
  Label,
  Checkbox,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Avatar,
  AvatarFallback,
  AvatarImage,
  Alert,
  AlertDescription,
  AlertTitle,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  Skeleton,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Toaster,
} from "@/components/common";

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-4 pb-32 md:p-8 font-sans space-y-12">
      {/* Toast Provider for Demo */}
      <Toaster />

      {/* Header */}
      <header className="space-y-2">
        <h1 className="text-3xl font-bold text-gray-900">Component Showcase</h1>
        <p className="text-gray-600 max-w-2xl">
          A comprehensive demo of the design system components located in{" "}
          <code className="bg-gray-200 px-1 rounded text-sm text-gray-800">
            src/components/common
          </code>
        </p>
      </header>

      {/* 1. Typography & Colors (Condensed) */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
          <span className="w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center text-sm">1</span>
          Colors & Typography
        </h2>
        <Card>
          <CardContent className="p-6">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
              {[100, 200, 300, 400, 500, 600, 700, 800, 900].map((num) => (
                <div key={num} className="space-y-1">
                  <div className={`h-12 w-full rounded-lg bg-gray-${num} shadow-sm border border-gray-100`} />
                  <div className="text-xs text-center font-mono text-gray-500">Gray {num}</div>
                </div>
              ))}
            </div>
            <div className="space-y-2 border-t pt-6">
              <h1 className="text-title-1 text-text-strong">Title 1 (24px, Bold)</h1>
              <h2 className="text-title-2 text-text-strong">Title 2 (20px, Bold)</h2>
              <h3 className="text-title-3 text-text-strong">Title 3 (18px, Semibold)</h3>
              <p className="text-text-normal">
                Body text (Normal). This is the standard text for most content. 
                <span className="text-text-alternative"> This is alternative text.</span>
              </p>
              <p className="text-caption-1 text-text-caption">Caption 1 (14px)</p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 2. Buttons & Badges */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
          <span className="w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center text-sm">2</span>
          Buttons & Badges
        </h2>
        <Card>
          <CardHeader>
            <CardTitle>Button Variants</CardTitle>
            <CardDescription>Different styles and sizes for interactive elements.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex flex-wrap gap-4">
              <Button>Default</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <Button size="lg">Large</Button>
              <Button size="default">Default</Button>
              <Button size="sm">Small</Button>
              <Button size="icon"><Plus className="h-4 w-4" /></Button>
              <Button className="rounded-full">Rounded Full</Button>
              <Button disabled>Disabled</Button>
              <Button>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Loading
              </Button>
            </div>
            <div className="border-t pt-6 space-y-4">
              <h3 className="text-sm font-semibold text-gray-700">Badges</h3>
              <div className="flex gap-2">
                <Badge>Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="destructive">Destructive</Badge>
                <Badge variant="outline">Outline</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 3. Forms & Inputs */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
          <span className="w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center text-sm">3</span>
          Forms & Inputs
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Login Example</CardTitle>
              <CardDescription>Standard input fields with labels.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="name@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" />
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <Label htmlFor="terms" className="font-normal text-gray-600">
                  Accept terms and conditions
                </Label>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Sign In</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Special Inputs</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>File Input</Label>
                <Input type="file" />
              </div>
              <div className="space-y-2">
                <Label>Disabled Input</Label>
                <Input disabled type="email" placeholder="Email" />
              </div>
               <div className="space-y-2">
                <Label>With Button</Label>
                <div className="flex w-full max-w-sm items-center space-x-2">
                  <Input type="email" placeholder="Email" />
                  <Button type="submit">Subscribe</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 4. Feedback & Overlay */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
          <span className="w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center text-sm">4</span>
          Feedback & Overlay
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Interactive Feedback</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-4">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline">Open Dialog</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Are you absolutely sure?</DialogTitle>
                    <DialogDescription>
                      This action cannot be undone. This will permanently delete your account.
                    </DialogDescription>
                  </DialogHeader>
                  <DialogFooter>
                    <Button variant="outline">Cancel</Button>
                    <Button>Continue</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>

              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline">Open Sheet</Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Edit Profile</SheetTitle>
                    <SheetDescription>
                      Make changes to your profile here. Click save when you&apos;re done.
                    </SheetDescription>
                  </SheetHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="name" className="text-right">Name</Label>
                      <Input id="name" defaultValue="Pedro Duarte" className="col-span-3" />
                    </div>
                  </div>
                  <Button type="submit">Save changes</Button>
                </SheetContent>
              </Sheet>

              <Button 
                variant="outline" 
                onClick={() => toast("Event has been created", {
                  description: "Sunday, December 03, 2023 at 9:00 AM",
                  action: {
                    label: "Undo",
                    onClick: () => console.log("Undo"),
                  },
                })}
              >
                Show Toast
              </Button>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon">
                      <Bell className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Notifications</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline">Open Popover</Button>
                </PopoverTrigger>
                <PopoverContent className="w-80">
                  <div className="grid gap-4">
                    <div className="space-y-2">
                      <h4 className="font-medium leading-none">Dimensions</h4>
                      <p className="text-sm text-muted-foreground">Set the dimensions for the layer.</p>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Alerts</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Alert>
                <Terminal className="h-4 w-4" />
                <AlertTitle>Heads up!</AlertTitle>
                <AlertDescription>
                  You can add components to your app using the cli.
                </AlertDescription>
              </Alert>
              <Alert variant="destructive">
                <Terminal className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>
                  Your session has expired. Please log in again.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 5. Data & Navigation */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
          <span className="w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center text-sm">5</span>
          Data & Navigation
        </h2>
        <Card>
          <CardContent className="p-6">
            <Tabs defaultValue="account" className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:w-[400px]">
                <TabsTrigger value="account">Account</TabsTrigger>
                <TabsTrigger value="password">Password</TabsTrigger>
              </TabsList>
              <TabsContent value="account" className="space-y-4 mt-4">
                <div className="flex items-center gap-4 p-4 border rounded-lg">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold">@shadcn</h4>
                    <p className="text-sm text-gray-500">Design Engineer</p>
                  </div>
                  <div className="ml-auto">
                     <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <Settings className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-56" align="end">
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuGroup>
                          <DropdownMenuItem>
                            <User className="mr-2 h-4 w-4" />
                            <span>Profile</span>
                            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <CreditCard className="mr-2 h-4 w-4" />
                            <span>Billing</span>
                            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Keyboard className="mr-2 h-4 w-4" />
                            <span>Settings</span>
                            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                          </DropdownMenuItem>
                        </DropdownMenuGroup>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
                <Card>
                  <CardHeader>
                     <CardTitle>Skeleton Loading</CardTitle>
                  </CardHeader>
                  <CardContent className="flex items-center space-x-4">
                    <Skeleton className="h-12 w-12 rounded-full" />
                    <div className="space-y-2">
                      <Skeleton className="h-4 w-[250px]" />
                      <Skeleton className="h-4 w-[200px]" />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="password">
                <Card>
                  <CardHeader>
                    <CardTitle>Password</CardTitle>
                    <CardDescription>
                      Change your password here. After saving, you&apos;ll be logged out.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="space-y-1">
                      <Label htmlFor="current">Current password</Label>
                      <Input id="current" type="password" />
                    </div>
                    <div className="space-y-1">
                      <Label htmlFor="new">New password</Label>
                      <Input id="new" type="password" />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button>Save password</Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
