import {
  Avatar,
  Badge,
  Card,
  Carousel,
} from "@/components";

export default function RootPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-8 space-y-12 max-w-4xl mx-auto">
      <header className="space-y-2 pb-8 border-b border-gray-200">
        <h1 className="text-title-1 font-bold text-gray-900">Display Components Showcase</h1>
        <p className="text-gray-500">디자인 시스템의 디스플레이 요소들을 하나씩 점검합니다.</p>
      </header>

      {/* 1. Card */}
      <section className="space-y-4">
        <h2 className="text-title-3 font-bold text-gray-900">1. Card</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <Card.Header>
              <Card.Title>기본 카드</Card.Title>
              <Card.Description>가장 기본적인 카드 형태입니다.</Card.Description>
            </Card.Header>
            <Card.Content>
              <p className="text-gray-700">카드의 본문 내용이 들어가는 영역입니다. 여백과 배경색을 확인하세요.</p>
            </Card.Content>
            <Card.Footer className="justify-end pt-4">
              <span className="text-caption-2 text-gray-400">Footer 영역</span>
            </Card.Footer>
          </Card>

          <Card className="bg-white">
            <Card.Header>
              <Card.Title>플랫 카드</Card.Title>
              <Card.Description>그림자 없는 깔끔한 스타일입니다.</Card.Description>
            </Card.Header>
            <Card.Content>
              <p className="text-gray-700">디자인 시스템의 기본 카드 스타일입니다.</p>
            </Card.Content>
          </Card>
        </div>
      </section>

      {/* 2. Badge */}
      <section className="space-y-4">
        <h2 className="text-title-3 font-bold text-gray-900">2. Badge</h2>
        <Card className="p-6">
          <div className="flex flex-wrap gap-4 items-center">
            <Badge variant="default">Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge variant="destructive">Destructive</Badge>
            <Badge variant="ghost">Ghost</Badge>
            <Badge variant="success">Success</Badge>
            <Badge variant="warning">Warning</Badge>
          </div>
        </Card>
      </section>

        {/* 2-1. Badge Sizes */}
        <section className="flex flex-col gap-4">
          <h2 className="text-title-3 font-bold text-gray-900">2-1. Badge Sizes</h2>
          <div className="flex flex-wrap items-center gap-4">
            <Badge size="sm">Small Badge</Badge>
            <Badge size="default">Default Badge</Badge>
            <Badge size="lg">Large Badge</Badge>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Badge variant="secondary" size="sm">Small</Badge>
            <Badge variant="secondary" size="default">Default</Badge>
            <Badge variant="secondary" size="lg">Large</Badge>
          </div>
        </section>

        {/* 3. Avatar */}
      <section className="space-y-4">
        <h2 className="text-title-3 font-bold text-gray-900">3. Avatar</h2>
        <Card className="p-6 space-y-8">
          <div className="flex items-end gap-6">
            <div className="space-y-2 text-center">
              <Avatar size="lg">
                <Avatar.Image src="https://github.com/shadcn.png" />
                <Avatar.Fallback>CN</Avatar.Fallback>
              </Avatar>
              <p className="text-caption-3 text-gray-400">Large (40px)</p>
            </div>
            <div className="space-y-2 text-center">
              <Avatar size="default">
                <Avatar.Image src="https://github.com/shadcn.png" />
                <Avatar.Fallback>CN</Avatar.Fallback>
              </Avatar>
              <p className="text-caption-3 text-gray-400">Default (32px)</p>
            </div>
            <div className="space-y-2 text-center">
              <Avatar size="sm">
                <Avatar.Image src="https://github.com/shadcn.png" />
                <Avatar.Fallback>CN</Avatar.Fallback>
              </Avatar>
              <p className="text-caption-3 text-gray-400">Small (24px)</p>
            </div>
            <div className="space-y-2 text-center">
              <Avatar>
                <Avatar.Fallback className="bg-blue-500 text-white">DZ</Avatar.Fallback>
                <Avatar.Badge className="bg-success" />
              </Avatar>
              <p className="text-caption-3 text-gray-400">With Badge</p>
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-caption-1 font-semibold text-gray-700">Avatar Group</p>
            <Avatar.Group>
              <Avatar><Avatar.Fallback>A</Avatar.Fallback></Avatar>
              <Avatar><Avatar.Fallback>B</Avatar.Fallback></Avatar>
              <Avatar><Avatar.Fallback>C</Avatar.Fallback></Avatar>
              <Avatar.GroupCount>+3</Avatar.GroupCount>
            </Avatar.Group>
          </div>
        </Card>
      </section>

      {/* 4. Carousel */}
      <section className="space-y-4">
        <h2 className="text-title-3 font-bold text-gray-900">4. Carousel</h2>
        <div className="px-12">
          <Carousel className="w-full max-w-xs mx-auto">
            <Carousel.Content>
              {[1, 2, 3, 4, 5].map((_, index) => (
                <Carousel.Item key={index}>
                  <Card className="border-gray-200">
                    <Card.Content className="flex aspect-square items-center justify-center p-6">
                      <span className="text-title-1 font-semibold">{index + 1}</span>
                    </Card.Content>
                  </Card>
                </Carousel.Item>
              ))}
            </Carousel.Content>
            <Carousel.Previous />
            <Carousel.Next />
          </Carousel>
        </div>
      </section>
    </div>
  );
}