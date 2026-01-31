"use client";

import {
  Button,
  Input,
  Label,
  Card,
  Pagination,
  Tabs,
  Dialog,
  DropdownMenu,
  Popover,
  Sheet,
  Tooltip,
} from "@/components";
import { 
  CreditCard, 
  Keyboard, 
  Settings, 
  User, 
  Users, 
  LogOut, 
  Mail, 
  MessageSquare, 
  PlusCircle, 
  Plus, 
  Github, 
  LifeBuoy, 
  Cloud, 
  Menu
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function RootPage() {
  const [position, setPosition] = useState("bottom");
  const [showPanel, setShowPanel] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 p-8 space-y-12 max-w-4xl mx-auto pb-24">
      <header className="space-y-2 pb-8 border-b border-gray-200">
        <h1 className="text-title-1 font-bold text-gray-900">Advanced Component Showcase</h1>
        <p className="text-gray-500">Navigation 및 Overlay 컴포넌트의 모든 기능과 시나리오를 보여줍니다.</p>
      </header>

      {/* 4. Navigation Components */}
      <section className="space-y-8">
        <h2 className="text-title-3 font-bold text-gray-900">4. Navigation Components</h2>
        
        {/* Tabs */}
        <Card className="p-6 space-y-6">
          <div className="space-y-2">
            <h3 className="text-title-3 font-semibold">Tabs</h3>
            <p className="text-text-caption">다양한 스타일과 방향을 지원하는 탭 컴포넌트입니다.</p>
          </div>
          
          <div className="grid gap-8">
            <div className="space-y-3">
              <h4 className="text-caption-1 font-medium text-gray-500">Default Style</h4>
              <Tabs defaultValue="account" className="w-[400px]">
                <Tabs.List className="grid w-full grid-cols-2">
                  <Tabs.Trigger value="account">Account</Tabs.Trigger>
                  <Tabs.Trigger value="password">Password</Tabs.Trigger>
                </Tabs.List>
                <Tabs.Content value="account">
                  <Card className="p-4 space-y-2">
                    <h3 className="font-semibold">Account</h3>
                    <p className="text-sm text-gray-500">Make changes to your account here.</p>
                  </Card>
                </Tabs.Content>
                <Tabs.Content value="password">
                  <Card className="p-4 space-y-2">
                    <h3 className="font-semibold">Password</h3>
                    <p className="text-sm text-gray-500">Change your password here.</p>
                  </Card>
                </Tabs.Content>
              </Tabs>
            </div>

            <div className="space-y-3">
              <h4 className="text-caption-1 font-medium text-gray-500">Line Style</h4>
              <Tabs defaultValue="music" className="w-[400px]">
                <Tabs.List variant="line" className="w-full justify-start border-b border-gray-200 pb-px">
                  <Tabs.Trigger value="music">Music</Tabs.Trigger>
                  <Tabs.Trigger value="podcasts">Podcasts</Tabs.Trigger>
                  <Tabs.Trigger value="live">Live</Tabs.Trigger>
                </Tabs.List>
                <Tabs.Content value="music" className="pt-4">
                  <p className="text-sm text-gray-500">Listen to your favorite music.</p>
                </Tabs.Content>
                <Tabs.Content value="podcasts" className="pt-4">
                  <p className="text-sm text-gray-500">Listen to daily podcasts.</p>
                </Tabs.Content>
                <Tabs.Content value="live" className="pt-4">
                  <p className="text-sm text-gray-500">Watch live events.</p>
                </Tabs.Content>
              </Tabs>
            </div>

            <div className="space-y-3">
              <h4 className="text-caption-1 font-medium text-gray-500">Vertical Orientation</h4>
              <Tabs defaultValue="general" orientation="vertical" className="flex w-[500px] gap-6">
                <Tabs.List className="w-[120px]">
                  <Tabs.Trigger value="general">General</Tabs.Trigger>
                  <Tabs.Trigger value="security">Security</Tabs.Trigger>
                  <Tabs.Trigger value="advanced">Advanced</Tabs.Trigger>
                  <Tabs.Trigger value="deprecated" disabled>Deprecated</Tabs.Trigger>
                </Tabs.List>
                <div className="flex-1">
                  <Tabs.Content value="general">
                    <h3 className="mb-2 font-semibold">General Settings</h3>
                    <p className="text-sm text-gray-500">Configure general system settings.</p>
                  </Tabs.Content>
                  <Tabs.Content value="security">
                    <h3 className="mb-2 font-semibold">Security Settings</h3>
                    <p className="text-sm text-gray-500">Manage your account security and keys.</p>
                  </Tabs.Content>
                  <Tabs.Content value="advanced">
                    <h3 className="mb-2 font-semibold">Advanced Settings</h3>
                    <p className="text-sm text-gray-500">Advanced configurations for developers.</p>
                  </Tabs.Content>
                </div>
              </Tabs>
            </div>
          </div>
        </Card>

        {/* Pagination */}
        <Card className="p-6 space-y-6">
           <div className="space-y-2">
            <h3 className="text-title-3 font-semibold">Pagination</h3>
            <p className="text-text-caption">데이터 목록 페이지 이동을 위한 네비게이션입니다.</p>
          </div>

          <div className="space-y-6">
            <div className="space-y-3">
              <h4 className="text-caption-1 font-medium text-gray-500">Full Pagination</h4>
              <Pagination>
                <Pagination.Content>
                  <Pagination.Item>
                    <Pagination.Previous href="#" />
                  </Pagination.Item>
                  <Pagination.Item>
                    <Pagination.Link href="#">1</Pagination.Link>
                  </Pagination.Item>
                  <Pagination.Item>
                    <Pagination.Link href="#" isActive>2</Pagination.Link>
                  </Pagination.Item>
                  <Pagination.Item>
                    <Pagination.Link href="#">3</Pagination.Link>
                  </Pagination.Item>
                  <Pagination.Item>
                    <Pagination.Ellipsis />
                  </Pagination.Item>
                  <Pagination.Item>
                    <Pagination.Next href="#" />
                  </Pagination.Item>
                </Pagination.Content>
              </Pagination>
            </div>
          </div>
        </Card>
      </section>

      {/* 5. Overlay Components */}
      <section className="space-y-8">
        <h2 className="text-title-3 font-bold text-gray-900">5. Overlay Components</h2>

        {/* Dialogs */}
        <Card className="p-6 space-y-6">
           <div className="space-y-2">
            <h3 className="text-title-3 font-semibold">Dialog</h3>
            <p className="text-text-caption">사용자의 집중이 필요한 모달 대화상자입니다.</p>
          </div>

          <div className="flex flex-wrap gap-4">
            {/* Basic Dialog */}
            <Dialog>
              <Dialog.Trigger asChild>
                <Button variant="outline">Edit Profile (Form)</Button>
              </Dialog.Trigger>
              <Dialog.Content className="sm:max-w-[425px]">
                <Dialog.Header>
                  <Dialog.Title>Edit profile</Dialog.Title>
                  <Dialog.Description>
                    Make changes to your profile here. Click save when you're done.
                  </Dialog.Description>
                </Dialog.Header>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">Name</Label>
                    <Input id="name" defaultValue="Pedro Duarte" className="col-span-3" />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="username" className="text-right">Username</Label>
                    <Input id="username" defaultValue="@peduarte" className="col-span-3" />
                  </div>
                </div>
                <Dialog.Footer>
                  <Button type="submit">Save changes</Button>
                </Dialog.Footer>
              </Dialog.Content>
            </Dialog>

             {/* Destructive Alert Dialog Style */}
             <Dialog>
              <Dialog.Trigger asChild>
                <Button variant="destructive">Delete Account (Alert)</Button>
              </Dialog.Trigger>
              <Dialog.Content>
                <Dialog.Header>
                  <Dialog.Title>Are you absolutely sure?</Dialog.Title>
                  <Dialog.Description>
                    This action cannot be undone. This will permanently delete your account and remove your data from our servers.
                  </Dialog.Description>
                </Dialog.Header>
                <Dialog.Footer>
                  <Dialog.Close asChild>
                    <Button variant="outline">Cancel</Button>
                  </Dialog.Close>
                  <Button variant="destructive" onClick={() => toast.error("Account deleted")}>Yes, delete account</Button>
                </Dialog.Footer>
              </Dialog.Content>
            </Dialog>

            {/* Long Content Dialog */}
            <Dialog>
              <Dialog.Trigger asChild>
                <Button variant="outline">Terms (Scrollable)</Button>
              </Dialog.Trigger>
              <Dialog.Content className="max-h-[80vh] overflow-y-auto sm:max-w-[600px]">
                <Dialog.Header>
                  <Dialog.Title>Terms of Service</Dialog.Title>
                  <Dialog.Description>
                    Read our terms and conditions carefully.
                  </Dialog.Description>
                </Dialog.Header>
                <div className="grid gap-4 py-4">
                  {Array.from({ length: 10 }).map((_, i) => (
                    <p key={i} className="text-sm text-gray-500">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                  ))}
                </div>
                <Dialog.Footer>
                  <Dialog.Close asChild>
                    <Button>I Agree</Button>
                  </Dialog.Close>
                </Dialog.Footer>
              </Dialog.Content>
            </Dialog>

            {/* No Close Button Dialog */}
            <Dialog>
              <Dialog.Trigger asChild>
                <Button variant="outline">Force Action (No Close)</Button>
              </Dialog.Trigger>
              <Dialog.Content showCloseButton={false} className="sm:max-w-[425px]">
                <Dialog.Header>
                  <Dialog.Title>Update Required</Dialog.Title>
                  <Dialog.Description>
                    You must update your profile to continue. This dialog cannot be closed via the 'X' button.
                  </Dialog.Description>
                </Dialog.Header>
                <Dialog.Footer>
                  <Dialog.Close asChild>
                    <Button>Update Now</Button>
                  </Dialog.Close>
                </Dialog.Footer>
              </Dialog.Content>
            </Dialog>
          </div>
        </Card>

        {/* Sheets */}
        <Card className="p-6 space-y-6">
           <div className="space-y-2">
            <h3 className="text-title-3 font-semibold">Sheet</h3>
            <p className="text-text-caption">화면 측면이나 하단에서 슬라이드되는 보조 패널입니다.</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {['top', 'bottom', 'left', 'right'].map((side) => (
              <Sheet key={side}>
                <Sheet.Trigger asChild>
                  <Button variant="outline" className="capitalize">Open {side}</Button>
                </Sheet.Trigger>
                <Sheet.Content side={side as any}>
                  <Sheet.Header>
                    <Sheet.Title>Edit profile ({side})</Sheet.Title>
                    <Sheet.Description>
                      Make changes to your profile here. Click save when you're done.
                    </Sheet.Description>
                  </Sheet.Header>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="name" className="text-right">Name</Label>
                      <Input id="name" defaultValue="Pedro Duarte" className="col-span-3" />
                    </div>
                  </div>
                  <Sheet.Footer>
                    <Sheet.Close asChild>
                      <Button type="submit">Save changes</Button>
                    </Sheet.Close>
                  </Sheet.Footer>
                </Sheet.Content>
              </Sheet>
            ))}
          </div>
        </Card>

        {/* Dropdown Menu */}
        <Card className="p-6 space-y-6">
           <div className="space-y-2">
            <h3 className="text-title-3 font-semibold">Dropdown Menu</h3>
            <p className="text-text-caption">다양한 옵션과 서브 메뉴를 제공하는 드롭다운입니다.</p>
          </div>

          <div className="flex flex-wrap gap-4">
            <DropdownMenu>
              <DropdownMenu.Trigger asChild>
                <Button variant="outline">Complex Menu</Button>
              </DropdownMenu.Trigger>
              <DropdownMenu.Content className="w-56">
                <DropdownMenu.Label>My Account</DropdownMenu.Label>
                <DropdownMenu.Separator />
                <DropdownMenu.Group>
                  <DropdownMenu.Item>
                    <User className="mr-2 size-4" />
                    <span>Profile</span>
                    <DropdownMenu.Shortcut>⇧⌘P</DropdownMenu.Shortcut>
                  </DropdownMenu.Item>
                  <DropdownMenu.Item>
                    <CreditCard className="mr-2 size-4" />
                    <span>Billing</span>
                    <DropdownMenu.Shortcut>⌘B</DropdownMenu.Shortcut>
                  </DropdownMenu.Item>
                  <DropdownMenu.Item>
                    <Settings className="mr-2 size-4" />
                    <span>Settings</span>
                    <DropdownMenu.Shortcut>⌘S</DropdownMenu.Shortcut>
                  </DropdownMenu.Item>
                </DropdownMenu.Group>
                <DropdownMenu.Separator />
                <DropdownMenu.Group>
                  <DropdownMenu.Label>Team</DropdownMenu.Label>
                   <DropdownMenu.Item>
                    <Users className="mr-2 size-4" />
                    <span>Team Members</span>
                  </DropdownMenu.Item>
                  <DropdownMenu.Sub>
                    <DropdownMenu.SubTrigger>
                      <PlusCircle className="mr-2 size-4" />
                      <span>Invite Users</span>
                    </DropdownMenu.SubTrigger>
                    <DropdownMenu.Portal>
                      <DropdownMenu.SubContent>
                        <DropdownMenu.Item>
                          <Mail className="mr-2 size-4" />
                          <span>Email</span>
                        </DropdownMenu.Item>
                        <DropdownMenu.Item>
                          <MessageSquare className="mr-2 size-4" />
                          <span>Message</span>
                        </DropdownMenu.Item>
                        <DropdownMenu.Separator />
                        <DropdownMenu.Item>
                          <PlusCircle className="mr-2 size-4" />
                          <span>More...</span>
                        </DropdownMenu.Item>
                      </DropdownMenu.SubContent>
                    </DropdownMenu.Portal>
                  </DropdownMenu.Sub>
                </DropdownMenu.Group>
                <DropdownMenu.Separator />
                <DropdownMenu.Item>
                  <Github className="mr-2 size-4" />
                  <span>GitHub</span>
                </DropdownMenu.Item>
                <DropdownMenu.Item>
                  <LifeBuoy className="mr-2 size-4" />
                  <span>Support</span>
                </DropdownMenu.Item>
                <DropdownMenu.Item disabled>
                  <Cloud className="mr-2 size-4" />
                  <span>API (Disabled)</span>
                </DropdownMenu.Item>
                <DropdownMenu.Separator />
                <DropdownMenu.Item variant="destructive">
                  <LogOut className="mr-2 size-4" />
                  <span>Log out</span>
                  <DropdownMenu.Shortcut>⇧⌘Q</DropdownMenu.Shortcut>
                </DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenu.Trigger asChild>
                <Button variant="outline">Checkboxes</Button>
              </DropdownMenu.Trigger>
              <DropdownMenu.Content className="w-56">
                <DropdownMenu.Label>Appearance</DropdownMenu.Label>
                <DropdownMenu.Separator />
                <DropdownMenu.CheckboxItem checked={showPanel} onCheckedChange={setShowPanel}>
                  Status Bar
                </DropdownMenu.CheckboxItem>
                <DropdownMenu.CheckboxItem checked disabled>
                  Activity Bar
                </DropdownMenu.CheckboxItem>
                <DropdownMenu.CheckboxItem checked={false}>
                  Panel
                </DropdownMenu.CheckboxItem>
              </DropdownMenu.Content>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenu.Trigger asChild>
                 <Button variant="outline">Radio Group</Button>
              </DropdownMenu.Trigger>
              <DropdownMenu.Content className="w-56">
                <DropdownMenu.Label>Panel Position</DropdownMenu.Label>
                <DropdownMenu.Separator />
                <DropdownMenu.RadioGroup value={position} onValueChange={setPosition}>
                  <DropdownMenu.RadioItem value="top">Top</DropdownMenu.RadioItem>
                  <DropdownMenu.RadioItem value="bottom">Bottom</DropdownMenu.RadioItem>
                  <DropdownMenu.RadioItem value="right">Right</DropdownMenu.RadioItem>
                </DropdownMenu.RadioGroup>
              </DropdownMenu.Content>
            </DropdownMenu>
          </div>
        </Card>

        {/* Popover & Tooltip */}
        <Card className="p-6 space-y-6">
           <div className="space-y-2">
            <h3 className="text-title-3 font-semibold">Popover & Tooltip</h3>
            <p className="text-text-caption">추가 정보를 표시하는 경량 오버레이입니다.</p>
          </div>

          <div className="flex flex-wrap items-center gap-8">
            <div className="space-y-2">
              <h4 className="text-caption-1 font-medium text-gray-500">Popover</h4>
              <Popover>
                <Popover.Trigger asChild>
                  <Button variant="outline">Open Settings</Button>
                </Popover.Trigger>
                <Popover.Content className="w-80">
                  <div className="grid gap-4">
                    <div className="space-y-2">
                      <h4 className="font-medium leading-none">Dimensions</h4>
                      <p className="text-sm text-gray-500">
                        Set the dimensions for the layer.
                      </p>
                    </div>
                    <div className="grid gap-2">
                      <div className="grid grid-cols-3 items-center gap-4">
                        <Label htmlFor="width">Width</Label>
                        <Input id="width" defaultValue="100%" className="col-span-2 h-8" />
                      </div>
                      <div className="grid grid-cols-3 items-center gap-4">
                        <Label htmlFor="maxWidth">Max. width</Label>
                        <Input id="maxWidth" defaultValue="300px" className="col-span-2 h-8" />
                      </div>
                      <div className="grid grid-cols-3 items-center gap-4">
                        <Label htmlFor="height">Height</Label>
                        <Input id="height" defaultValue="25px" className="col-span-2 h-8" />
                      </div>
                    </div>
                  </div>
                </Popover.Content>
              </Popover>
            </div>

            <div className="space-y-2">
              <h4 className="text-caption-1 font-medium text-gray-500">Tooltip Positions</h4>
              <div className="flex gap-4">
                 <Tooltip>
                  <Tooltip.Trigger asChild>
                    <Button variant="outline" size="sm">Top</Button>
                  </Tooltip.Trigger>
                  <Tooltip.Content side="top">
                    <p>Top Tooltip</p>
                  </Tooltip.Content>
                </Tooltip>
                 <Tooltip>
                  <Tooltip.Trigger asChild>
                    <Button variant="outline" size="sm">Bottom</Button>
                  </Tooltip.Trigger>
                  <Tooltip.Content side="bottom">
                    <p>Bottom Tooltip</p>
                  </Tooltip.Content>
                </Tooltip>
                 <Tooltip>
                  <Tooltip.Trigger asChild>
                    <Button variant="outline" size="sm">Left</Button>
                  </Tooltip.Trigger>
                  <Tooltip.Content side="left">
                    <p>Left Tooltip</p>
                  </Tooltip.Content>
                </Tooltip>
                 <Tooltip>
                  <Tooltip.Trigger asChild>
                    <Button variant="outline" size="sm">Right</Button>
                  </Tooltip.Trigger>
                  <Tooltip.Content side="right">
                    <p>Right Tooltip</p>
                  </Tooltip.Content>
                </Tooltip>
              </div>
            </div>
          </div>
        </Card>
      </section>
    </div>
  );
}