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
  Tooltip,
  Checkbox,
  Fab,
  Form,
  Avatar,
  Badge,
  Loading,
  Progress,
  Skeleton,
} from "@/components";
import {
  CreditCard,
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
  Search,
  ChevronRight,
  Menu,
  Star,
  Bell,
  Check,
  Heart,
  Zap,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";

// --- Sub-components for Clean Architecture ---

const SectionFoundations = () => (
  <section className="space-y-8">
    <h2 className="text-title-2 font-bold text-gray-900 border-b pb-2">1. 디자인 토큰 (Foundations)</h2>
    
    {/* Typography - Weights */}
    <Card className="p-6 space-y-6">
      <h3 className="text-title-3 font-semibold">타이포그래피 - 폰트 두께 (Weights 100~900)</h3>
      <p className="text-text-caption">Pretendard 폰트의 모든 두께 단계입니다.</p>
      <div className="grid gap-4 border p-4 rounded-md">
        <div className="grid grid-cols-[120px_1fr] items-center gap-4">
          <span className="text-xs text-gray-400">100 (Thin)</span>
          <p className="font-thin text-2xl">다람쥐 헌 쳇바퀴에 타고파 (Pretendard Thin)</p>
        </div>
        <div className="grid grid-cols-[120px_1fr] items-center gap-4">
          <span className="text-xs text-gray-400">200 (ExtraLight)</span>
          <p className="font-extralight text-2xl">다람쥐 헌 쳇바퀴에 타고파 (Pretendard ExtraLight)</p>
        </div>
        <div className="grid grid-cols-[120px_1fr] items-center gap-4">
          <span className="text-xs text-gray-400">300 (Light)</span>
          <p className="font-light text-2xl">다람쥐 헌 쳇바퀴에 타고파 (Pretendard Light)</p>
        </div>
        <div className="grid grid-cols-[120px_1fr] items-center gap-4">
          <span className="text-xs text-gray-400">400 (Regular)</span>
          <p className="font-normal text-2xl">다람쥐 헌 쳇바퀴에 타고파 (Pretendard Regular)</p>
        </div>
        <div className="grid grid-cols-[120px_1fr] items-center gap-4">
          <span className="text-xs text-gray-400">500 (Medium)</span>
          <p className="font-medium text-2xl">다람쥐 헌 쳇바퀴에 타고파 (Pretendard Medium)</p>
        </div>
        <div className="grid grid-cols-[120px_1fr] items-center gap-4">
          <span className="text-xs text-gray-400">600 (SemiBold)</span>
          <p className="font-semibold text-2xl">다람쥐 헌 쳇바퀴에 타고파 (Pretendard SemiBold)</p>
        </div>
        <div className="grid grid-cols-[120px_1fr] items-center gap-4">
          <span className="text-xs text-gray-400">700 (Bold)</span>
          <p className="font-bold text-2xl">다람쥐 헌 쳇바퀴에 타고파 (Pretendard Bold)</p>
        </div>
        <div className="grid grid-cols-[120px_1fr] items-center gap-4">
          <span className="text-xs text-gray-400">800 (ExtraBold)</span>
          <p className="font-extrabold text-2xl">다람쥐 헌 쳇바퀴에 타고파 (Pretendard ExtraBold)</p>
        </div>
        <div className="grid grid-cols-[120px_1fr] items-center gap-4">
          <span className="text-xs text-gray-400">900 (Black)</span>
          <p className="font-black text-2xl">다람쥐 헌 쳇바퀴에 타고파 (Pretendard Black)</p>
        </div>
      </div>
    </Card>

    {/* Typography - Styles */}
    <Card className="p-6 space-y-6">
      <h3 className="text-title-3 font-semibold">타이포그래피 - 스타일 (Styles)</h3>
      <div className="grid gap-6">
        <div className="space-y-2 border-b pb-4">
          <span className="text-caption-2 text-gray-400">제목 (Titles)</span>
          <p className="text-title-1">Title 1 - 제목 스타일 1 (24px)</p>
          <p className="text-title-2">Title 2 - 제목 스타일 2 (20px)</p>
          <p className="text-title-3">Title 3 - 제목 스타일 3 (18px)</p>
        </div>
        <div className="space-y-2">
          <span className="text-caption-2 text-gray-400">본문 및 캡션 (Captions & Body)</span>
          <p className="text-caption-1">Caption 1 - 기본 본문 텍스트 (14px)</p>
          <p className="text-caption-2">Caption 2 - 보조 설명 텍스트 (13px)</p>
          <p className="text-caption-3">Caption 3 - 작은 설명 텍스트 (12px)</p>
        </div>
      </div>
    </Card>

    {/* Colors */}
    <Card className="p-6 space-y-6">
      <h3 className="text-title-3 font-semibold">색상 (Colors)</h3>
      <div className="space-y-6">
        <div>
          <h4 className="text-caption-1 font-medium text-gray-500 mb-2">Primary Blue Scale</h4>
          <div className="grid grid-cols-5 md:grid-cols-9 gap-2">
            {[100, 200, 300, 400, 500, 600, 700, 800, 900].map((num) => (
              <div key={num} className="space-y-1">
                <div className={`h-12 w-full rounded-md bg-blue-${num}`} />
                <p className="text-[10px] text-center text-gray-500">blue-{num}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-caption-1 font-medium text-gray-500 mb-2">Grays / Neutrals</h4>
          <div className="grid grid-cols-5 md:grid-cols-9 gap-2">
            {[100, 200, 300, 400, 500, 600, 700, 800, 900].map((num) => (
              <div key={num} className="space-y-1">
                <div className={`h-12 w-full rounded-md bg-gray-${num}`} />
                <p className="text-[10px] text-center text-gray-500">gray-{num}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-caption-1 font-medium text-gray-500 mb-2">Semantic Status</h4>
          <div className="flex gap-4">
            {['error', 'success', 'warning', 'info'].map((status) => (
              <div key={status} className="space-y-1 w-20">
                <div className={`h-12 w-full rounded-md bg-${status}`} />
                <p className="text-[10px] text-center text-gray-500 capitalize">{status}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>

    {/* Shapes */}
    <Card className="p-6 space-y-6">
      <h3 className="text-title-3 font-semibold">모서리 둥글기 (Border Radius)</h3>
      <div className="flex flex-wrap gap-4 items-end">
        {['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'].map((size) => (
          <div key={size} className={`size-16 border-2 border-blue-500 flex items-center justify-center rounded-${size} bg-blue-50`}>
            <span className="text-xs text-blue-700">{size}</span>
          </div>
        ))}
        <div className="size-16 border-2 border-blue-500 flex items-center justify-center rounded-full bg-blue-50">
          <span className="text-xs text-blue-700">full</span>
        </div>
      </div>
    </Card>

    {/* Shadows */}
    <Card className="p-6 space-y-6">
      <h3 className="text-title-3 font-semibold">그림자 (Shadows)</h3>
      <div className="flex flex-wrap gap-6 items-end">
        <div className="size-20 rounded-lg bg-white shadow-sm flex items-center justify-center">
          <span className="text-xs text-gray-500">sm</span>
        </div>
        <div className="size-20 rounded-lg bg-white shadow-md flex items-center justify-center">
          <span className="text-xs text-gray-500">md</span>
        </div>
        <div className="size-20 rounded-lg bg-white shadow-lg flex items-center justify-center">
          <span className="text-xs text-gray-500">lg</span>
        </div>
        <div className="size-20 rounded-lg bg-white shadow-xl flex items-center justify-center">
          <span className="text-xs text-gray-500">xl</span>
        </div>
      </div>
    </Card>

    {/* Semantic Colors */}
    <Card className="p-6 space-y-6">
      <h3 className="text-title-3 font-semibold">시멘틱 컬러 (Semantic Colors)</h3>
      <div className="space-y-4">
        <div>
          <h4 className="text-caption-1 font-medium text-gray-500 mb-2">텍스트 (Text)</h4>
          <div className="flex flex-wrap gap-4">
            <div className="p-3 rounded-md bg-white border">
              <p className="text-text-strong text-sm">text-strong (강조)</p>
            </div>
            <div className="p-3 rounded-md bg-white border">
              <p className="text-text-normal text-sm">text-normal (일반)</p>
            </div>
            <div className="p-3 rounded-md bg-white border">
              <p className="text-text-alternative text-sm">text-alternative (보조)</p>
            </div>
            <div className="p-3 rounded-md bg-white border">
              <p className="text-text-caption text-sm">text-caption (캡션)</p>
            </div>
            <div className="p-3 rounded-md bg-white border">
              <p className="text-text-placeholder text-sm">text-placeholder</p>
            </div>
            <div className="p-3 rounded-md bg-white border">
              <p className="text-text-disabled text-sm">text-disabled</p>
            </div>
          </div>
        </div>
        <div>
          <h4 className="text-caption-1 font-medium text-gray-500 mb-2">배경 (Background)</h4>
          <div className="flex flex-wrap gap-4">
            <div className="p-3 rounded-md bg-background border">
              <p className="text-xs text-gray-600">bg-background</p>
            </div>
            <div className="p-3 rounded-md bg-bg-neutral border">
              <p className="text-xs text-gray-600">bg-neutral</p>
            </div>
            <div className="p-3 rounded-md bg-bg-alternative border">
              <p className="text-xs text-gray-600">bg-alternative</p>
            </div>
            <div className="p-3 rounded-md bg-bg-disabled border">
              <p className="text-xs text-gray-600">bg-disabled</p>
            </div>
            <div className="p-3 rounded-md bg-bg-strong text-white">
              <p className="text-xs">bg-strong</p>
            </div>
          </div>
        </div>
        <div>
          <h4 className="text-caption-1 font-medium text-gray-500 mb-2">테두리 (Border)</h4>
          <div className="flex flex-wrap gap-4">
            <div className="p-3 rounded-md border-2 border-border-default">
              <p className="text-xs text-gray-600">border-default</p>
            </div>
            <div className="p-3 rounded-md border-2 border-border-active">
              <p className="text-xs text-gray-600">border-active</p>
            </div>
          </div>
        </div>
      </div>
    </Card>

    {/* Z-Index Layers */}
    <Card className="p-6 space-y-6">
      <h3 className="text-title-3 font-semibold">Z-Index 레이어</h3>
      <div className="relative h-40 bg-gray-100 rounded-lg overflow-hidden">
        <div className="absolute bottom-0 left-4 w-20 h-24 bg-blue-200 rounded flex items-center justify-center text-xs">base</div>
        <div className="absolute bottom-0 left-16 w-20 h-28 bg-blue-300 rounded flex items-center justify-center text-xs z-sticky">z-sticky (50)</div>
        <div className="absolute bottom-0 left-28 w-20 h-32 bg-blue-400 rounded flex items-center justify-center text-xs z-dropdown">z-dropdown (100)</div>
        <div className="absolute bottom-0 left-40 w-20 h-36 bg-blue-500 text-white rounded flex items-center justify-center text-xs z-modal">z-modal (200)</div>
        <div className="absolute bottom-0 left-52 w-20 h-40 bg-blue-600 text-white rounded flex items-center justify-center text-xs z-toast">z-toast (300)</div>
      </div>
    </Card>
  </section>
);

const SectionDisplay = () => (
  <section className="space-y-8">
    <h2 className="text-title-2 font-bold text-gray-900 border-b pb-2">2. 디스플레이 컴포넌트 (Display)</h2>

    {/* Avatar */}
    <Card className="p-6 space-y-6">
      <div className="space-y-2">
        <h3 className="text-title-3 font-semibold">아바타 (Avatar)</h3>
        <p className="text-text-caption">사용자 프로필 이미지를 표시하는 컴포넌트입니다.</p>
      </div>
      <div className="space-y-6">
        <div className="space-y-2">
          <h4 className="text-caption-1 font-medium text-gray-500">크기 (Sizes)</h4>
          <div className="flex items-end gap-4">
            <div className="space-y-1 text-center">
              <Avatar size="sm">
                <Avatar.Image src="https://github.com/shadcn.png" alt="Avatar" />
                <Avatar.Fallback>SM</Avatar.Fallback>
              </Avatar>
              <p className="text-caption-3 text-gray-500">sm</p>
            </div>
            <div className="space-y-1 text-center">
              <Avatar size="default">
                <Avatar.Image src="https://github.com/shadcn.png" alt="Avatar" />
                <Avatar.Fallback>DF</Avatar.Fallback>
              </Avatar>
              <p className="text-caption-3 text-gray-500">default</p>
            </div>
            <div className="space-y-1 text-center">
              <Avatar size="lg">
                <Avatar.Image src="https://github.com/shadcn.png" alt="Avatar" />
                <Avatar.Fallback>LG</Avatar.Fallback>
              </Avatar>
              <p className="text-caption-3 text-gray-500">lg</p>
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <h4 className="text-caption-1 font-medium text-gray-500">폴백 (Fallback)</h4>
          <div className="flex items-center gap-4">
            <Avatar>
              <Avatar.Fallback>홍</Avatar.Fallback>
            </Avatar>
            <Avatar>
              <Avatar.Fallback>JD</Avatar.Fallback>
            </Avatar>
            <Avatar>
              <Avatar.Image src="invalid-url.jpg" alt="Invalid" />
              <Avatar.Fallback>
                <User className="size-4" />
              </Avatar.Fallback>
            </Avatar>
          </div>
        </div>
        <div className="space-y-2">
          <h4 className="text-caption-1 font-medium text-gray-500">배지 (Badge)</h4>
          <div className="flex items-center gap-4">
            <Avatar size="sm">
              <Avatar.Image src="https://github.com/shadcn.png" alt="Avatar" />
              <Avatar.Badge />
            </Avatar>
            <Avatar size="default">
              <Avatar.Image src="https://github.com/shadcn.png" alt="Avatar" />
              <Avatar.Badge />
            </Avatar>
            <Avatar size="lg">
              <Avatar.Image src="https://github.com/shadcn.png" alt="Avatar" />
              <Avatar.Badge>
                <Check className="size-2" />
              </Avatar.Badge>
            </Avatar>
          </div>
        </div>
        <div className="space-y-2">
          <h4 className="text-caption-1 font-medium text-gray-500">그룹 (Group)</h4>
          <Avatar.Group>
            <Avatar size="default">
              <Avatar.Image src="https://github.com/shadcn.png" alt="Avatar 1" />
              <Avatar.Fallback>A1</Avatar.Fallback>
            </Avatar>
            <Avatar size="default">
              <Avatar.Image src="https://github.com/vercel.png" alt="Avatar 2" />
              <Avatar.Fallback>A2</Avatar.Fallback>
            </Avatar>
            <Avatar size="default">
              <Avatar.Fallback>A3</Avatar.Fallback>
            </Avatar>
            <Avatar.GroupCount>+5</Avatar.GroupCount>
          </Avatar.Group>
        </div>
      </div>
    </Card>

    {/* Badge */}
    <Card className="p-6 space-y-6">
      <div className="space-y-2">
        <h3 className="text-title-3 font-semibold">배지 (Badge)</h3>
        <p className="text-text-caption">상태, 카테고리, 태그 등을 표시하는 컴포넌트입니다.</p>
      </div>
      <div className="space-y-6">
        <div className="space-y-2">
          <h4 className="text-caption-1 font-medium text-gray-500">크기 (Sizes)</h4>
          <div className="flex flex-wrap items-center gap-3">
            <Badge size="sm">Small</Badge>
            <Badge size="default">Default</Badge>
            <Badge size="lg">Large</Badge>
          </div>
        </div>
        <div className="space-y-2">
          <h4 className="text-caption-1 font-medium text-gray-500">스타일 (Variants)</h4>
          <div className="flex flex-wrap gap-3">
            <Badge variant="default">Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="destructive">Destructive</Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="success">Success</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge variant="ghost">Ghost</Badge>
            <Badge variant="link">Link</Badge>
            <Badge variant="card">Card</Badge>
          </div>
        </div>
        <div className="space-y-2">
          <h4 className="text-caption-1 font-medium text-gray-500">아이콘 포함</h4>
          <div className="flex flex-wrap gap-3">
            <Badge variant="default"><Star className="size-3" /> Featured</Badge>
            <Badge variant="success"><Check className="size-3" /> Verified</Badge>
            <Badge variant="warning"><Bell className="size-3" /> Pending</Badge>
            <Badge variant="destructive"><Zap className="size-3" /> Urgent</Badge>
          </div>
        </div>
      </div>
    </Card>
  </section>
);

const SectionFeedback = () => (
  <section className="space-y-8">
    <h2 className="text-title-2 font-bold text-gray-900 border-b pb-2">3. 피드백 컴포넌트 (Feedback)</h2>

    {/* Loading */}
    <Card className="p-6 space-y-6">
      <div className="space-y-2">
        <h3 className="text-title-3 font-semibold">로딩 (Loading)</h3>
        <p className="text-text-caption">로딩 상태를 표시하는 스피너 컴포넌트입니다.</p>
      </div>
      <div className="space-y-6">
        <div className="space-y-2">
          <h4 className="text-caption-1 font-medium text-gray-500">크기 (Sizes)</h4>
          <div className="flex items-center gap-6">
            <div className="text-center space-y-2">
              <Loading size={16} />
              <p className="text-caption-3 text-gray-500">16px</p>
            </div>
            <div className="text-center space-y-2">
              <Loading size={24} />
              <p className="text-caption-3 text-gray-500">24px</p>
            </div>
            <div className="text-center space-y-2">
              <Loading size={32} />
              <p className="text-caption-3 text-gray-500">32px</p>
            </div>
            <div className="text-center space-y-2">
              <Loading size={48} />
              <p className="text-caption-3 text-gray-500">48px</p>
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <h4 className="text-caption-1 font-medium text-gray-500">색상 (Variants)</h4>
          <div className="flex items-center gap-6">
            <div className="text-center space-y-2">
              <Loading variant="default" size={24} />
              <p className="text-caption-3 text-gray-500">default</p>
            </div>
            <div className="text-center space-y-2 bg-primary p-3 rounded">
              <Loading variant="white" size={24} />
              <p className="text-caption-3 text-white">white</p>
            </div>
            <div className="text-center space-y-2">
              <Loading variant="primary" size={24} />
              <p className="text-caption-3 text-gray-500">primary</p>
            </div>
            <div className="text-center space-y-2">
              <Loading variant="alternative" size={24} />
              <p className="text-caption-3 text-gray-500">alternative</p>
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <h4 className="text-caption-1 font-medium text-gray-500">설명 포함</h4>
          <Loading size={32} description="데이터를 불러오는 중..." />
        </div>
      </div>
    </Card>

    {/* Progress */}
    <Card className="p-6 space-y-6">
      <div className="space-y-2">
        <h3 className="text-title-3 font-semibold">프로그레스 (Progress)</h3>
        <p className="text-text-caption">진행 상태를 표시하는 막대 컴포넌트입니다.</p>
      </div>
      <div className="space-y-6">
        <div className="space-y-2">
          <h4 className="text-caption-1 font-medium text-gray-500">크기 (Sizes)</h4>
          <div className="space-y-4 max-w-md">
            <div className="space-y-1">
              <p className="text-caption-3 text-gray-500">sm</p>
              <Progress value={33} size="sm" />
            </div>
            <div className="space-y-1">
              <p className="text-caption-3 text-gray-500">default</p>
              <Progress value={66} size="default" />
            </div>
            <div className="space-y-1">
              <p className="text-caption-3 text-gray-500">lg</p>
              <Progress value={80} size="lg" />
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <h4 className="text-caption-1 font-medium text-gray-500">진행률 예시</h4>
          <div className="space-y-3 max-w-md">
            <div className="flex items-center gap-3">
              <Progress value={0} className="flex-1" />
              <span className="text-caption-2 text-gray-500 w-12">0%</span>
            </div>
            <div className="flex items-center gap-3">
              <Progress value={25} className="flex-1" />
              <span className="text-caption-2 text-gray-500 w-12">25%</span>
            </div>
            <div className="flex items-center gap-3">
              <Progress value={50} className="flex-1" />
              <span className="text-caption-2 text-gray-500 w-12">50%</span>
            </div>
            <div className="flex items-center gap-3">
              <Progress value={75} className="flex-1" />
              <span className="text-caption-2 text-gray-500 w-12">75%</span>
            </div>
            <div className="flex items-center gap-3">
              <Progress value={100} className="flex-1" />
              <span className="text-caption-2 text-gray-500 w-12">100%</span>
            </div>
          </div>
        </div>
      </div>
    </Card>

    {/* Skeleton */}
    <Card className="p-6 space-y-6">
      <div className="space-y-2">
        <h3 className="text-title-3 font-semibold">스켈레톤 (Skeleton)</h3>
        <p className="text-text-caption">콘텐츠 로딩 중 플레이스홀더를 표시하는 컴포넌트입니다.</p>
      </div>
      <div className="space-y-6">
        <div className="space-y-2">
          <h4 className="text-caption-1 font-medium text-gray-500">Shimmer 효과</h4>
          <div className="space-y-3">
            <Skeleton variant="shimmer" className="h-4 w-full" />
            <Skeleton variant="shimmer" className="h-4 w-3/4" />
            <Skeleton variant="shimmer" className="h-4 w-1/2" />
          </div>
        </div>
        <div className="space-y-2">
          <h4 className="text-caption-1 font-medium text-gray-500">카드 스켈레톤 예시</h4>
          <div className="flex items-center space-x-4">
            <Skeleton variant="shimmer" className="size-12 rounded-full" />
            <div className="space-y-2 flex-1">
              <Skeleton variant="shimmer" className="h-4 w-1/4" />
              <Skeleton variant="shimmer" className="h-4 w-full" />
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <h4 className="text-caption-1 font-medium text-gray-500">리스트 스켈레톤 예시</h4>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center space-x-4">
                <Skeleton variant="shimmer" className="size-10 rounded" />
                <div className="space-y-2 flex-1">
                  <Skeleton variant="shimmer" className="h-3 w-2/5" />
                  <Skeleton variant="shimmer" className="h-3 w-4/5" />
                </div>
                <Skeleton variant="shimmer" className="h-8 w-16 rounded" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  </section>
);

const SectionInputs = ({ form, onSubmit }: { form: any, onSubmit: any }) => (
  <section className="space-y-8">
    <h2 className="text-title-2 font-bold text-gray-900 border-b pb-2">4. 입력 컴포넌트 (Inputs)</h2>
    
    {/* Buttons */}
    <Card className="p-6 space-y-6">
      <h3 className="text-title-3 font-semibold">버튼 (Buttons)</h3>
      <div className="space-y-6">
        <div className="space-y-2">
          <h4 className="text-caption-1 font-medium text-gray-500">크기 (Sizes)</h4>
          <div className="flex flex-wrap items-center gap-4">
            <Button size="xs">XS (초소형)</Button>
            <Button size="sm">Small (소형)</Button>
            <Button size="default">Default (기본)</Button>
            <Button size="lg">Large (대형)</Button>
            <Button size="xl">XL (특대형)</Button>
          </div>
        </div>
        <div className="space-y-2">
          <h4 className="text-caption-1 font-medium text-gray-500">모양 (Shapes)</h4>
          <div className="flex flex-wrap items-center gap-4">
            <Button shape="default">Default (Rounded-md)</Button>
            <Button shape="pill">Pill (Rounded-full)</Button>
            <Button shape="square">Square (직각)</Button>
          </div>
        </div>
        <div className="space-y-2">
          <h4 className="text-caption-1 font-medium text-gray-500">스타일 (Variants)</h4>
          <div className="flex flex-wrap gap-4">
            <Button variant="default">기본 (Default)</Button>
            <Button variant="destructive">삭제 (Destructive)</Button>
            <Button variant="outline">테두리 (Outline)</Button>
            <Button variant="outline-transparent">투명 테두리</Button>
            <Button variant="ghost">고스트 (Ghost)</Button>
            <Button variant="link">링크 (Link)</Button>
            <Button variant="bottom-line">밑줄 (Bottom Line)</Button>
          </div>
        </div>
        <div className="space-y-2">
          <h4 className="text-caption-1 font-medium text-gray-500">상태 및 아이콘 (States & Icons)</h4>
          <div className="flex flex-wrap gap-4 items-center">
            <Button disabled>비활성 (Disabled)</Button>
            <Button isLoading>로딩 중</Button>
            <Button leftIcon={<Plus className="size-4" />}>아이콘 좌측</Button>
            <Button rightIcon={<ChevronRight className="size-4" />}>아이콘 우측</Button>
            <Button isIcon variant="outline"><Settings className="size-4" /></Button>
          </div>
        </div>
      </div>
    </Card>

    {/* Inputs */}
    <Card className="p-6 space-y-6">
      <div className="space-y-2">
        <h3 className="text-title-3 font-semibold">입력 필드 (Inputs)</h3>
        <p className="text-text-caption">다양한 스타일의 입력 필드 컴포넌트입니다.</p>
      </div>
      <div className="space-y-6">
        <div className="space-y-2">
          <h4 className="text-caption-1 font-medium text-gray-500">크기 (Sizes)</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl">
            <div className="space-y-1">
              <p className="text-caption-3 text-gray-400">sm</p>
              <Input size="sm" placeholder="Small" />
            </div>
            <div className="space-y-1">
              <p className="text-caption-3 text-gray-400">default</p>
              <Input size="default" placeholder="Default" />
            </div>
            <div className="space-y-1">
              <p className="text-caption-3 text-gray-400">lg</p>
              <Input size="lg" placeholder="Large" />
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <h4 className="text-caption-1 font-medium text-gray-500">모양 (Shapes)</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl">
            <div className="space-y-1">
              <p className="text-caption-3 text-gray-400">default</p>
              <Input shape="default" placeholder="Default" />
            </div>
            <div className="space-y-1">
              <p className="text-caption-3 text-gray-400">pill</p>
              <Input shape="pill" placeholder="Pill" />
            </div>
            <div className="space-y-1">
              <p className="text-caption-3 text-gray-400">square</p>
              <Input shape="square" placeholder="Square" />
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <h4 className="text-caption-1 font-medium text-gray-500">스타일 (Variants)</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl">
            <div className="space-y-1">
              <p className="text-caption-3 text-gray-400">default</p>
              <Input variant="default" placeholder="Default" />
            </div>
            <div className="space-y-1">
              <p className="text-caption-3 text-gray-400">filled</p>
              <Input variant="filled" placeholder="Filled" />
            </div>
            <div className="space-y-1">
              <p className="text-caption-3 text-gray-400">flushed</p>
              <Input variant="flushed" placeholder="Flushed" />
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <h4 className="text-caption-1 font-medium text-gray-500">아이콘 및 기능</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl">
            <Input leftIcon={<Search className="size-4" />} placeholder="검색어를 입력하세요..." />
            <Input rightIcon={<Mail className="size-4" />} placeholder="이메일을 입력하세요..." />
            <Input type="password" placeholder="비밀번호 (눈알/삭제 아이콘 자동)" />
            <Input disabled placeholder="비활성화된 입력 필드" />
          </div>
        </div>
      </div>
    </Card>

    {/* FAB */}
    <Card className="p-6 space-y-6">
      <div className="space-y-2">
        <h3 className="text-title-3 font-semibold">플로팅 액션 버튼 (FAB)</h3>
        <p className="text-text-caption">화면에 고정되는 플로팅 액션 버튼입니다. 위치와 스타일을 지정할 수 있습니다.</p>
      </div>
      <div className="space-y-6">
        <div className="space-y-2">
          <h4 className="text-caption-1 font-medium text-gray-500">위치 (Positions)</h4>
          <div className="relative h-40 bg-gray-100 rounded-lg border">
            <div className="absolute bottom-4 right-4 flex items-center gap-2">
              <span className="text-caption-3 text-gray-500">bottom-right</span>
              <Button size="lg" isIcon className="rounded-full shadow-lg"><Plus className="size-5" /></Button>
            </div>
            <div className="absolute bottom-4 left-4 flex items-center gap-2">
              <Button size="lg" isIcon variant="destructive" className="rounded-full shadow-lg"><Heart className="size-5" /></Button>
              <span className="text-caption-3 text-gray-500">bottom-left</span>
            </div>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
              <Button size="lg" isIcon variant="outline" className="rounded-full shadow-lg bg-white"><Star className="size-5" /></Button>
              <span className="text-caption-3 text-gray-500">bottom-center</span>
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <h4 className="text-caption-1 font-medium text-gray-500">크기 (Sizes) - 버튼 사이즈 상속</h4>
          <div className="flex items-center gap-4">
            <Button size="sm" isIcon className="rounded-full shadow-lg"><Plus className="size-4" /></Button>
            <Button size="default" isIcon className="rounded-full shadow-lg"><Plus className="size-4" /></Button>
            <Button size="lg" isIcon className="rounded-full shadow-lg"><Plus className="size-5" /></Button>
            <Button size="xl" isIcon className="rounded-full shadow-lg"><Plus className="size-6" /></Button>
          </div>
        </div>
      </div>
    </Card>

    {/* Checkbox */}
    <Card className="p-6 space-y-6">
      <div className="space-y-2">
        <h3 className="text-title-3 font-semibold">체크박스 (Checkbox)</h3>
        <p className="text-text-caption">선택 상태를 표시하는 체크박스 컴포넌트입니다.</p>
      </div>
      <div className="space-y-6">
        <div className="space-y-2">
          <h4 className="text-caption-1 font-medium text-gray-500">크기 (Sizes)</h4>
          <div className="flex items-center gap-6">
            <div className="text-center space-y-2">
              <Checkbox size="sm" defaultChecked />
              <p className="text-caption-3 text-gray-500">sm</p>
            </div>
            <div className="text-center space-y-2">
              <Checkbox size="default" defaultChecked />
              <p className="text-caption-3 text-gray-500">default</p>
            </div>
            <div className="text-center space-y-2">
              <Checkbox size="lg" defaultChecked />
              <p className="text-caption-3 text-gray-500">lg</p>
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <h4 className="text-caption-1 font-medium text-gray-500">스타일 (Variants)</h4>
          <div className="flex items-center gap-6">
            <div className="space-y-2">
              <Checkbox variant="default" label="Default 스타일" />
            </div>
            <div className="space-y-2">
              <Checkbox variant="icon-only" label="Icon-only 스타일" />
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <h4 className="text-caption-1 font-medium text-gray-500">상태 (States)</h4>
          <div className="flex items-center gap-6">
            <Checkbox label="선택되지 않음" />
            <Checkbox label="선택됨" defaultChecked />
            <Checkbox label="비활성화" disabled />
            <Checkbox label="비활성화 + 선택" disabled defaultChecked />
          </div>
        </div>
      </div>
    </Card>

    {/* Form */}
    <Card className="p-6 space-y-6">
      <h3 className="text-title-3 font-semibold">폼 & 유효성 검사 (Form Validation)</h3>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <Form.Field
            control={form.control}
            name="username"
            render={({ field }) => (
              <Form.Item>
                <Form.Label>사용자 이름</Form.Label>
                <Form.Control>
                  <Form.Input placeholder="홍길동" {...field} />
                </Form.Control>
                <Form.Tip>공개 프로필에 표시될 이름입니다.</Form.Tip>
                <Form.Message />
              </Form.Item>
            )}
          />
          <Form.Field
            control={form.control}
            name="email"
            render={({ field }) => (
              <Form.Item>
                <Form.Label>이메일</Form.Label>
                <Form.Control>
                  <Form.Input placeholder="example@email.com" {...field} />
                </Form.Control>
                <Form.Message />
              </Form.Item>
            )}
          />
          <Form.Field
            control={form.control}
            name="password"
            render={({ field }) => (
              <Form.Item>
                <Form.Label>비밀번호</Form.Label>
                <Form.Control>
                  <Form.Input type="password" placeholder="비밀번호 입력" {...field} />
                </Form.Control>
                <Form.Message />
              </Form.Item>
            )}
          />
          <Form.Field
            control={form.control}
            name="terms"
            render={({ field }) => (
              <Form.Item>
                <Form.Control>
                  <Form.Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    label={
                      <div className="grid gap-1.5 leading-none">
                        <span className="text-caption-1 font-medium text-text-strong">
                          이용 약관 동의
                        </span>
                        <span className="text-caption-3 text-text-caption">
                          서비스 이용 약관 및 개인정보 처리방침에 동의합니다.
                        </span>
                      </div>
                    }
                  />
                </Form.Control>
                <Form.Message />
              </Form.Item>
            )}
          />
          <Form.Button type="submit">회원가입</Form.Button>
        </form>
      </Form>
    </Card>
  </section>
);

const SectionNavigation = () => (
  <section className="space-y-8">
    <h2 className="text-title-2 font-bold text-gray-900 border-b pb-2">5. 네비게이션 컴포넌트 (Navigation)</h2>
    
    {/* Tabs */}
    <Card className="p-6 space-y-6">
      <div className="space-y-2">
        <h3 className="text-title-3 font-semibold">탭 (Tabs)</h3>
        <p className="text-text-caption">다양한 스타일과 방향을 지원하는 탭 컴포넌트입니다.</p>
      </div>
      
      <div className="grid gap-8">
        <div className="space-y-3">
          <h4 className="text-caption-1 font-medium text-gray-500">기본 스타일 (Default)</h4>
          <Tabs defaultValue="account" className="w-[400px]">
            <Tabs.List className="grid w-full grid-cols-2">
              <Tabs.Trigger value="account">계정</Tabs.Trigger>
              <Tabs.Trigger value="password">비밀번호</Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content value="account">
              <Card className="p-4 space-y-2">
                <h3 className="font-semibold">계정</h3>
                <p className="text-sm text-gray-500">계정 정보를 수정합니다.</p>
              </Card>
            </Tabs.Content>
            <Tabs.Content value="password">
              <Card className="p-4 space-y-2">
                <h3 className="font-semibold">비밀번호</h3>
                <p className="text-sm text-gray-500">비밀번호를 변경합니다.</p>
              </Card>
            </Tabs.Content>
          </Tabs>
        </div>

        <div className="space-y-3">
          <h4 className="text-caption-1 font-medium text-gray-500">라인 스타일 (Line Variant)</h4>
          <Tabs defaultValue="music" className="w-[400px]">
            <Tabs.List variant="line" className="w-full justify-start border-b border-gray-200 pb-px">
              <Tabs.Trigger value="music">음악</Tabs.Trigger>
              <Tabs.Trigger value="podcasts">팟캐스트</Tabs.Trigger>
              <Tabs.Trigger value="live">라이브</Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content value="music" className="pt-4">
              <p className="text-sm text-gray-500">좋아하는 음악을 감상하세요.</p>
            </Tabs.Content>
            <Tabs.Content value="podcasts" className="pt-4">
              <p className="text-sm text-gray-500">매일 새로운 팟캐스트.</p>
            </Tabs.Content>
            <Tabs.Content value="live" className="pt-4">
              <p className="text-sm text-gray-500">실시간 이벤트를 확인하세요.</p>
            </Tabs.Content>
          </Tabs>
        </div>

        <div className="space-y-3">
          <h4 className="text-caption-1 font-medium text-gray-500">수직 방향 (Vertical)</h4>
          <Tabs defaultValue="general" orientation="vertical" className="flex w-[500px] gap-6">
            <Tabs.List className="w-[120px]">
              <Tabs.Trigger value="general">일반</Tabs.Trigger>
              <Tabs.Trigger value="security">보안</Tabs.Trigger>
              <Tabs.Trigger value="advanced">고급</Tabs.Trigger>
              <Tabs.Trigger value="deprecated" disabled>종료됨</Tabs.Trigger>
            </Tabs.List>
            <div className="flex-1">
              <Tabs.Content value="general">
                <h3 className="mb-2 font-semibold">일반 설정</h3>
                <p className="text-sm text-gray-500">시스템 기본 설정을 구성합니다.</p>
              </Tabs.Content>
              <Tabs.Content value="security">
                <h3 className="mb-2 font-semibold">보안 설정</h3>
                <p className="text-sm text-gray-500">계정 보안 및 키를 관리합니다.</p>
              </Tabs.Content>
              <Tabs.Content value="advanced">
                <h3 className="mb-2 font-semibold">고급 설정</h3>
                <p className="text-sm text-gray-500">개발자를 위한 고급 구성입니다.</p>
              </Tabs.Content>
            </div>
          </Tabs>
        </div>
      </div>
    </Card>

    {/* Pagination */}
    <Card className="p-6 space-y-6">
      <div className="space-y-2">
        <h3 className="text-title-3 font-semibold">페이지네이션 (Pagination)</h3>
        <p className="text-text-caption">데이터 목록 페이지 이동을 위한 네비게이션입니다.</p>
      </div>

      <div className="space-y-8">
        {/* 기본 */}
        <div className="space-y-3">
          <h4 className="text-caption-1 font-medium text-gray-500">기본 (Default)</h4>
          <Pagination>
            <Pagination.Content>
              <Pagination.Item><Pagination.Previous href="#" /></Pagination.Item>
              <Pagination.Item><Pagination.Link href="#">1</Pagination.Link></Pagination.Item>
              <Pagination.Item><Pagination.Link href="#" isActive>2</Pagination.Link></Pagination.Item>
              <Pagination.Item><Pagination.Link href="#">3</Pagination.Link></Pagination.Item>
              <Pagination.Item><Pagination.Ellipsis /></Pagination.Item>
              <Pagination.Item><Pagination.Link href="#">10</Pagination.Link></Pagination.Item>
              <Pagination.Item><Pagination.Next href="#" /></Pagination.Item>
            </Pagination.Content>
          </Pagination>
        </div>

        {/* 크기 */}
        <div className="space-y-3">
          <h4 className="text-caption-1 font-medium text-gray-500">크기 (Sizes)</h4>
          <div className="space-y-4">
            <div className="space-y-1">
              <p className="text-caption-3 text-gray-400">sm</p>
              <Pagination size="sm">
                <Pagination.Content>
                  <Pagination.Item><Pagination.Previous href="#" size="sm" /></Pagination.Item>
                  <Pagination.Item><Pagination.Link href="#" size="sm">1</Pagination.Link></Pagination.Item>
                  <Pagination.Item><Pagination.Link href="#" size="sm" isActive>2</Pagination.Link></Pagination.Item>
                  <Pagination.Item><Pagination.Link href="#" size="sm">3</Pagination.Link></Pagination.Item>
                  <Pagination.Item><Pagination.Next href="#" size="sm" /></Pagination.Item>
                </Pagination.Content>
              </Pagination>
            </div>
            <div className="space-y-1">
              <p className="text-caption-3 text-gray-400">default</p>
              <Pagination size="default">
                <Pagination.Content>
                  <Pagination.Item><Pagination.Previous href="#" size="default" /></Pagination.Item>
                  <Pagination.Item><Pagination.Link href="#" size="default">1</Pagination.Link></Pagination.Item>
                  <Pagination.Item><Pagination.Link href="#" size="default" isActive>2</Pagination.Link></Pagination.Item>
                  <Pagination.Item><Pagination.Link href="#" size="default">3</Pagination.Link></Pagination.Item>
                  <Pagination.Item><Pagination.Next href="#" size="default" /></Pagination.Item>
                </Pagination.Content>
              </Pagination>
            </div>
            <div className="space-y-1">
              <p className="text-caption-3 text-gray-400">lg</p>
              <Pagination size="lg">
                <Pagination.Content>
                  <Pagination.Item><Pagination.Previous href="#" size="lg" /></Pagination.Item>
                  <Pagination.Item><Pagination.Link href="#" size="lg">1</Pagination.Link></Pagination.Item>
                  <Pagination.Item><Pagination.Link href="#" size="lg" isActive>2</Pagination.Link></Pagination.Item>
                  <Pagination.Item><Pagination.Link href="#" size="lg">3</Pagination.Link></Pagination.Item>
                  <Pagination.Item><Pagination.Next href="#" size="lg" /></Pagination.Item>
                </Pagination.Content>
              </Pagination>
            </div>
          </div>
        </div>

        {/* 한글화 (커스텀 텍스트) */}
        <div className="space-y-3">
          <h4 className="text-caption-1 font-medium text-gray-500">한글화 (Custom Labels)</h4>
          <Pagination aria-label="페이지 탐색">
            <Pagination.Content>
              <Pagination.Item>
                <Pagination.Previous href="#" label="이전" aria-label="이전 페이지로 이동" />
              </Pagination.Item>
              <Pagination.Item><Pagination.Link href="#">1</Pagination.Link></Pagination.Item>
              <Pagination.Item><Pagination.Link href="#" isActive>2</Pagination.Link></Pagination.Item>
              <Pagination.Item><Pagination.Link href="#">3</Pagination.Link></Pagination.Item>
              <Pagination.Item><Pagination.Ellipsis label="더 많은 페이지" /></Pagination.Item>
              <Pagination.Item><Pagination.Link href="#">10</Pagination.Link></Pagination.Item>
              <Pagination.Item>
                <Pagination.Next href="#" label="다음" aria-label="다음 페이지로 이동" />
              </Pagination.Item>
            </Pagination.Content>
          </Pagination>
        </div>

        {/* 텍스트 숨김 (아이콘만) */}
        <div className="space-y-3">
          <h4 className="text-caption-1 font-medium text-gray-500">아이콘만 (hideText)</h4>
          <Pagination>
            <Pagination.Content>
              <Pagination.Item><Pagination.Previous href="#" hideText /></Pagination.Item>
              <Pagination.Item><Pagination.Link href="#">1</Pagination.Link></Pagination.Item>
              <Pagination.Item><Pagination.Link href="#" isActive>2</Pagination.Link></Pagination.Item>
              <Pagination.Item><Pagination.Link href="#">3</Pagination.Link></Pagination.Item>
              <Pagination.Item><Pagination.Ellipsis /></Pagination.Item>
              <Pagination.Item><Pagination.Link href="#">10</Pagination.Link></Pagination.Item>
              <Pagination.Item><Pagination.Next href="#" hideText /></Pagination.Item>
            </Pagination.Content>
          </Pagination>
        </div>

        {/* 첫 페이지 / 마지막 페이지 */}
        <div className="space-y-3">
          <h4 className="text-caption-1 font-medium text-gray-500">첫 페이지 상태</h4>
          <Pagination>
            <Pagination.Content>
              <Pagination.Item><Pagination.Previous href="#" className="pointer-events-none opacity-50" /></Pagination.Item>
              <Pagination.Item><Pagination.Link href="#" isActive>1</Pagination.Link></Pagination.Item>
              <Pagination.Item><Pagination.Link href="#">2</Pagination.Link></Pagination.Item>
              <Pagination.Item><Pagination.Link href="#">3</Pagination.Link></Pagination.Item>
              <Pagination.Item><Pagination.Ellipsis /></Pagination.Item>
              <Pagination.Item><Pagination.Link href="#">10</Pagination.Link></Pagination.Item>
              <Pagination.Item><Pagination.Next href="#" /></Pagination.Item>
            </Pagination.Content>
          </Pagination>
        </div>

        <div className="space-y-3">
          <h4 className="text-caption-1 font-medium text-gray-500">마지막 페이지 상태</h4>
          <Pagination>
            <Pagination.Content>
              <Pagination.Item><Pagination.Previous href="#" /></Pagination.Item>
              <Pagination.Item><Pagination.Link href="#">1</Pagination.Link></Pagination.Item>
              <Pagination.Item><Pagination.Ellipsis /></Pagination.Item>
              <Pagination.Item><Pagination.Link href="#">8</Pagination.Link></Pagination.Item>
              <Pagination.Item><Pagination.Link href="#">9</Pagination.Link></Pagination.Item>
              <Pagination.Item><Pagination.Link href="#" isActive>10</Pagination.Link></Pagination.Item>
              <Pagination.Item><Pagination.Next href="#" className="pointer-events-none opacity-50" /></Pagination.Item>
            </Pagination.Content>
          </Pagination>
        </div>

        {/* 간단한 형태 */}
        <div className="space-y-3">
          <h4 className="text-caption-1 font-medium text-gray-500">간단한 형태 (Simple)</h4>
          <Pagination>
            <Pagination.Content>
              <Pagination.Item><Pagination.Previous href="#" /></Pagination.Item>
              <Pagination.Item><Pagination.Next href="#" /></Pagination.Item>
            </Pagination.Content>
          </Pagination>
        </div>

        {/* 페이지 수가 많은 경우 */}
        <div className="space-y-3">
          <h4 className="text-caption-1 font-medium text-gray-500">중간 페이지 (많은 페이지)</h4>
          <Pagination>
            <Pagination.Content>
              <Pagination.Item><Pagination.Previous href="#" /></Pagination.Item>
              <Pagination.Item><Pagination.Link href="#">1</Pagination.Link></Pagination.Item>
              <Pagination.Item><Pagination.Ellipsis /></Pagination.Item>
              <Pagination.Item><Pagination.Link href="#">4</Pagination.Link></Pagination.Item>
              <Pagination.Item><Pagination.Link href="#" isActive>5</Pagination.Link></Pagination.Item>
              <Pagination.Item><Pagination.Link href="#">6</Pagination.Link></Pagination.Item>
              <Pagination.Item><Pagination.Ellipsis /></Pagination.Item>
              <Pagination.Item><Pagination.Link href="#">20</Pagination.Link></Pagination.Item>
              <Pagination.Item><Pagination.Next href="#" /></Pagination.Item>
            </Pagination.Content>
          </Pagination>
        </div>
      </div>
    </Card>
  </section>
);

const SectionOverlay = ({ position, setPosition, showPanel, setShowPanel }: any) => (
  <section className="space-y-8">
    <h2 className="text-title-2 font-bold text-gray-900 border-b pb-2">6. 오버레이 컴포넌트 (Overlay)</h2>
    
    {/* Dialogs */}
    <Card className="p-6 space-y-6">
        <div className="space-y-2">
        <h3 className="text-title-3 font-semibold">다이얼로그 (Dialog)</h3>
        <p className="text-text-caption">사용자의 집중이 필요한 모달 대화상자입니다.</p>
      </div>

      <div className="flex flex-wrap gap-4">
        {/* Basic Dialog */}
        <Dialog>
          <Dialog.Trigger asChild>
            <Button variant="outline">프로필 수정 (기본)</Button>
          </Dialog.Trigger>
          <Dialog.Content className="sm:max-w-[425px]">
            <Dialog.Header>
              <Dialog.Title>프로필 수정</Dialog.Title>
              <Dialog.Description>
                프로필 정보를 수정합니다. 완료되면 저장을 클릭하세요.
              </Dialog.Description>
            </Dialog.Header>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">이름</Label>
                <Input id="name" defaultValue="홍길동" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">아이디</Label>
                <Input id="username" defaultValue="@gildong" className="col-span-3" />
              </div>
            </div>
            <Dialog.Footer>
              <Button type="submit">저장하기</Button>
            </Dialog.Footer>
          </Dialog.Content>
        </Dialog>

          {/* Destructive Alert Dialog Style */}
          <Dialog>
          <Dialog.Trigger asChild>
            <Button variant="destructive">계정 삭제 (경고)</Button>
          </Dialog.Trigger>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>정말 삭제하시겠습니까?</Dialog.Title>
              <Dialog.Description>
                이 작업은 되돌릴 수 없습니다. 계정과 모든 데이터가 영구적으로 삭제됩니다.
              </Dialog.Description>
            </Dialog.Header>
            <Dialog.Footer>
              <Dialog.Close asChild>
                <Button variant="outline">취소</Button>
              </Dialog.Close>
              <Button variant="destructive" onClick={() => toast.error("계정이 삭제되었습니다.")}>네, 삭제합니다</Button>
            </Dialog.Footer>
          </Dialog.Content>
        </Dialog>

        {/* Long Content Dialog */}
        <Dialog>
          <Dialog.Trigger asChild>
            <Button variant="outline">이용약관 (스크롤)</Button>
          </Dialog.Trigger>
          <Dialog.Content className="max-h-[80vh] overflow-y-auto sm:max-w-[600px]">
            <Dialog.Header>
              <Dialog.Title>서비스 이용약관</Dialog.Title>
              <Dialog.Description>
                아래 내용을 주의 깊게 읽어주세요.
              </Dialog.Description>
            </Dialog.Header>
            <div className="grid gap-4 py-4">
              {Array.from({ length: 10 }).map((_, i) => (
                <p key={i} className="text-sm text-gray-500">
                  제 {i + 1} 조. 본 약관은 서비스 이용에 관한 제반 사항을 규정함을 목적으로 합니다. 회원은 본 약관을 준수해야 하며, 회사는 원활한 서비스를 제공하기 위해 노력합니다. 개인정보 보호법 등 관련 법령을 준수하며, 회원의 권리 보호를 최우선으로 합니다.
                </p>
              ))}
            </div>
            <Dialog.Footer>
              <Dialog.Close asChild>
                <Button>동의합니다</Button>
              </Dialog.Close>
            </Dialog.Footer>
          </Dialog.Content>
        </Dialog>

        {/* No Close Button Dialog */}
        <Dialog>
          <Dialog.Trigger asChild>
            <Button variant="outline">강제 액션 (닫기 X)</Button>
          </Dialog.Trigger>
          <Dialog.Content showCloseButton={false} closeOnOverlayClick={false} closeOnEscape={false} className="sm:max-w-[425px]">
            <Dialog.Header>
              <Dialog.Title>업데이트 필요</Dialog.Title>
              <Dialog.Description>
                계속하려면 최신 버전으로 업데이트해야 합니다. 이 창은 닫을 수 없습니다.
              </Dialog.Description>
            </Dialog.Header>
            <Dialog.Footer>
              <Dialog.Close asChild>
                <Button>지금 업데이트</Button>
              </Dialog.Close>
            </Dialog.Footer>
          </Dialog.Content>
        </Dialog>
      </div>
    </Card>


    {/* Dropdown Menu */}
    <Card className="p-6 space-y-6">
        <div className="space-y-2">
        <h3 className="text-title-3 font-semibold">드롭다운 메뉴 (Dropdown Menu)</h3>
        <p className="text-text-caption">다양한 옵션과 서브 메뉴를 제공하는 드롭다운입니다.</p>
      </div>

      <div className="flex flex-wrap gap-4">
        <DropdownMenu>
          <DropdownMenu.Trigger asChild>
            <Button variant="outline">복합 메뉴 (Complex)</Button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content className="w-56">
            <DropdownMenu.Label>내 계정</DropdownMenu.Label>
            <DropdownMenu.Separator />
            <DropdownMenu.Group>
              <DropdownMenu.Item>
                <User className="mr-2 size-4" />
                <span>프로필</span>
                <DropdownMenu.Shortcut>⇧⌘P</DropdownMenu.Shortcut>
              </DropdownMenu.Item>
              <DropdownMenu.Item>
                <CreditCard className="mr-2 size-4" />
                <span>결제 정보</span>
                <DropdownMenu.Shortcut>⌘B</DropdownMenu.Shortcut>
              </DropdownMenu.Item>
              <DropdownMenu.Item>
                <Settings className="mr-2 size-4" />
                <span>설정</span>
                <DropdownMenu.Shortcut>⌘S</DropdownMenu.Shortcut>
              </DropdownMenu.Item>
            </DropdownMenu.Group>
            <DropdownMenu.Separator />
            <DropdownMenu.Group>
              <DropdownMenu.Label>팀 관리</DropdownMenu.Label>
                <DropdownMenu.Item>
                <Users className="mr-2 size-4" />
                <span>팀원 보기</span>
              </DropdownMenu.Item>
              <DropdownMenu.Sub>
                <DropdownMenu.SubTrigger>
                  <PlusCircle className="mr-2 size-4" />
                  <span>초대하기</span>
                </DropdownMenu.SubTrigger>
                <DropdownMenu.Portal>
                  <DropdownMenu.SubContent>
                    <DropdownMenu.Item>
                      <Mail className="mr-2 size-4" />
                      <span>이메일로 초대</span>
                    </DropdownMenu.Item>
                    <DropdownMenu.Item>
                      <MessageSquare className="mr-2 size-4" />
                      <span>메시지로 초대</span>
                    </DropdownMenu.Item>
                    <DropdownMenu.Separator />
                    <DropdownMenu.Item>
                      <PlusCircle className="mr-2 size-4" />
                      <span>더 보기...</span>
                    </DropdownMenu.Item>
                  </DropdownMenu.SubContent>
                </DropdownMenu.Portal>
              </DropdownMenu.Sub>
            </DropdownMenu.Group>
            <DropdownMenu.Separator />
            <DropdownMenu.Item disabled>
              <Cloud className="mr-2 size-4" />
              <span>API (비활성)</span>
            </DropdownMenu.Item>
            <DropdownMenu.Separator />
            <DropdownMenu.Item variant="destructive">
              <LogOut className="mr-2 size-4" />
              <span>로그아웃</span>
              <DropdownMenu.Shortcut>⇧⌘Q</DropdownMenu.Shortcut>
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenu.Trigger asChild>
            <Button variant="outline">체크박스 메뉴</Button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content className="w-56">
            <DropdownMenu.Label>화면 설정</DropdownMenu.Label>
            <DropdownMenu.Separator />
            <DropdownMenu.CheckboxItem checked={showPanel} onCheckedChange={setShowPanel}>
              상태 표시줄
            </DropdownMenu.CheckboxItem>
            <DropdownMenu.CheckboxItem checked disabled>
              활동 표시줄 (고정)
            </DropdownMenu.CheckboxItem>
            <DropdownMenu.CheckboxItem checked={false}>
              패널 숨기기
            </DropdownMenu.CheckboxItem>
          </DropdownMenu.Content>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenu.Trigger asChild>
              <Button variant="outline">라디오 메뉴</Button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content className="w-56">
            <DropdownMenu.Label>패널 위치</DropdownMenu.Label>
            <DropdownMenu.Separator />
            <DropdownMenu.RadioGroup value={position} onValueChange={setPosition}>
              <DropdownMenu.RadioItem value="top">상단 (Top)</DropdownMenu.RadioItem>
              <DropdownMenu.RadioItem value="bottom">하단 (Bottom)</DropdownMenu.RadioItem>
              <DropdownMenu.RadioItem value="right">우측 (Right)</DropdownMenu.RadioItem>
            </DropdownMenu.RadioGroup>
          </DropdownMenu.Content>
        </DropdownMenu>
      </div>
    </Card>

    {/* Popover & Tooltip */}
    <Card className="p-6 space-y-6">
        <div className="space-y-2">
        <h3 className="text-title-3 font-semibold">팝오버 & 툴팁 (Popover & Tooltip)</h3>
        <p className="text-text-caption">추가 정보를 표시하는 경량 오버레이입니다.</p>
      </div>

      <div className="flex flex-wrap items-center gap-8">
        <div className="space-y-2">
          <h4 className="text-caption-1 font-medium text-gray-500">팝오버 (Popover)</h4>
          <Popover>
            <Popover.Trigger asChild>
              <Button variant="outline">설정 열기</Button>
            </Popover.Trigger>
            <Popover.Content className="w-80">
              <div className="grid gap-4">
                <div className="space-y-2">
                  <h4 className="font-medium leading-none">치수 설정</h4>
                  <p className="text-sm text-gray-500">
                    레이어의 크기를 설정합니다.
                  </p>
                </div>
                <div className="grid gap-2">
                  <div className="grid grid-cols-3 items-center gap-4">
                    <Label htmlFor="width">너비</Label>
                    <Input id="width" defaultValue="100%" className="col-span-2 h-8" />
                  </div>
                  <div className="grid grid-cols-3 items-center gap-4">
                    <Label htmlFor="maxWidth">최대 너비</Label>
                    <Input id="maxWidth" defaultValue="300px" className="col-span-2 h-8" />
                  </div>
                  <div className="grid grid-cols-3 items-center gap-4">
                    <Label htmlFor="height">높이</Label>
                    <Input id="height" defaultValue="25px" className="col-span-2 h-8" />
                  </div>
                </div>
              </div>
            </Popover.Content>
          </Popover>
        </div>

        <div className="space-y-2">
          <h4 className="text-caption-1 font-medium text-gray-500">툴팁 위치 (Tooltip Positions)</h4>
          <div className="flex gap-4">
              <Tooltip>
              <Tooltip.Trigger asChild>
                <Button variant="outline" size="sm">상단</Button>
              </Tooltip.Trigger>
              <Tooltip.Content side="top">
                <p>상단 툴팁</p>
              </Tooltip.Content>
            </Tooltip>
              <Tooltip>
              <Tooltip.Trigger asChild>
                <Button variant="outline" size="sm">하단</Button>
              </Tooltip.Trigger>
              <Tooltip.Content side="bottom">
                <p>하단 툴팁</p>
              </Tooltip.Content>
            </Tooltip>
              <Tooltip>
              <Tooltip.Trigger asChild>
                <Button variant="outline" size="sm">좌측</Button>
              </Tooltip.Trigger>
              <Tooltip.Content side="left">
                <p>좌측 툴팁</p>
              </Tooltip.Content>
            </Tooltip>
              <Tooltip>
              <Tooltip.Trigger asChild>
                <Button variant="outline" size="sm">우측</Button>
              </Tooltip.Trigger>
              <Tooltip.Content side="right">
                <p>우측 툴팁</p>
              </Tooltip.Content>
            </Tooltip>
          </div>
        </div>
      </div>
    </Card>
  </section>
);

const formSchema = zod.object({
  username: zod.string().min(2, {
    message: "사용자 이름은 2글자 이상이어야 합니다.",
  }),
  email: zod.string().email({
    message: "유효한 이메일 주소를 입력해주세요.",
  }),
  password: zod.string().min(8, {
    message: "비밀번호는 8글자 이상이어야 합니다.",
  }),
  terms: zod.boolean().refine((val) => val === true, {
    message: "이용 약관에 동의해야 합니다.",
  }),
});

type FormValues = zod.infer<typeof formSchema>;

export default function DemoPage() {
  const [position, setPosition] = useState("bottom");
  const [showPanel, setShowPanel] = useState(false);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      terms: false,
    },
  });

  function onSubmit(values: FormValues) {
    toast.success("폼 제출 성공!", {
      description: JSON.stringify(values, null, 2),
    });
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8 max-w-6xl mx-auto pb-32">
      <header className="space-y-4 pb-8 mb-8 border-b border-gray-200">
        <h1 className="text-title-1 font-bold text-gray-900">디자인 시스템 & 컴포넌트 쇼케이스</h1>
        <p className="text-gray-500 text-lg">프로젝트의 모든 디자인 토큰과 컴포넌트 시나리오를 한눈에 확인합니다.</p>
      </header>

      <Tabs defaultValue="foundations" className="w-full space-y-8">
        <Tabs.List className="w-full justify-start border-b border-gray-200 pb-px overflow-x-auto" variant="line">
          <Tabs.Trigger value="foundations">기본 토큰</Tabs.Trigger>
          <Tabs.Trigger value="display">디스플레이</Tabs.Trigger>
          <Tabs.Trigger value="feedback">피드백</Tabs.Trigger>
          <Tabs.Trigger value="inputs">입력</Tabs.Trigger>
          <Tabs.Trigger value="navigation">네비게이션</Tabs.Trigger>
          <Tabs.Trigger value="overlay">오버레이</Tabs.Trigger>
        </Tabs.List>

        <Tabs.Content value="foundations" className="space-y-16">
          <SectionFoundations />
        </Tabs.Content>

        <Tabs.Content value="display" className="space-y-16">
          <SectionDisplay />
        </Tabs.Content>

        <Tabs.Content value="feedback" className="space-y-16">
          <SectionFeedback />
        </Tabs.Content>

        <Tabs.Content value="inputs" className="space-y-16">
          <SectionInputs form={form} onSubmit={onSubmit} />
        </Tabs.Content>

        <Tabs.Content value="navigation" className="space-y-16">
          <SectionNavigation />
        </Tabs.Content>

        <Tabs.Content value="overlay" className="space-y-16">
          <SectionOverlay position={position} setPosition={setPosition} showPanel={showPanel} setShowPanel={setShowPanel} />
        </Tabs.Content>
      </Tabs>

      {/* FAB */}
      <Fab position="bottom-right" onClick={() => toast.info("FAB 클릭됨!")}>
        <Plus className="size-6" />
      </Fab>
    </div>
  );
}
