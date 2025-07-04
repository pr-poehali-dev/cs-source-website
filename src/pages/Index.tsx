import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const maps = [
    {
      name: "de_dust2",
      image: "img/ee7b18e4-f6c2-4141-84db-6d808ceceef7.jpg",
      size: "12.5 MB",
      downloads: "2,847",
      type: "Classic",
    },
    {
      name: "cs_office",
      image: "img/ee7b18e4-f6c2-4141-84db-6d808ceceef7.jpg",
      size: "8.2 MB",
      downloads: "1,523",
      type: "Hostage",
    },
    {
      name: "de_inferno",
      image: "img/ee7b18e4-f6c2-4141-84db-6d808ceceef7.jpg",
      size: "15.1 MB",
      downloads: "3,291",
      type: "Bomb",
    },
  ];

  const guides = [
    {
      title: "Основы прицеливания",
      description: "Изучите основы точной стрельбы в CS:S",
      image: "img/f1d626ca-f5c9-452f-b8a2-60dc012a27cb.jpg",
      difficulty: "Новичок",
      duration: "15 мин",
    },
    {
      title: "Экономика в CS:S",
      description: "Управление деньгами и покупки оружия",
      image: "img/f1d626ca-f5c9-452f-b8a2-60dc012a27cb.jpg",
      difficulty: "Средний",
      duration: "20 мин",
    },
    {
      title: "Тактика команды",
      description: "Координация действий с командой",
      image: "img/f1d626ca-f5c9-452f-b8a2-60dc012a27cb.jpg",
      difficulty: "Продвинутый",
      duration: "25 мин",
    },
  ];

  return (
    <div className="min-h-screen bg-[#1A1A1A] text-white">
      {/* Header */}
      <header className="bg-[#0F0F0F] border-b border-[#FF6B35]/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Target" className="text-[#FF6B35]" size={32} />
              <h1 className="text-2xl font-bold">COUNTER-STRIKE SOURCE</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#home"
                className="hover:text-[#FF6B35] transition-colors"
              >
                Главная
              </a>
              <a
                href="#maps"
                className="hover:text-[#FF6B35] transition-colors"
              >
                Карты
              </a>
              <a
                href="#guides"
                className="hover:text-[#FF6B35] transition-colors"
              >
                Гайды
              </a>
              <a
                href="#download"
                className="hover:text-[#FF6B35] transition-colors"
              >
                Скачать
              </a>
            </nav>
            <Button className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white">
              <Icon name="Download" className="mr-2" size={16} />
              Скачать игру
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="relative py-20 bg-gradient-to-br from-[#1A1A1A] to-[#0F0F0F]"
      >
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white to-[#FF6B35] bg-clip-text text-transparent">
              COUNTER-STRIKE SOURCE
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Легендарный тактический шутер. Скачивайте карты, изучайте гайды и
              доминируйте на сервере.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white"
              >
                <Icon name="Play" className="mr-2" size={20} />
                Начать игру
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[#FF6B35] text-[#FF6B35] hover:bg-[#FF6B35] hover:text-white"
              >
                <Icon name="BookOpen" className="mr-2" size={20} />
                Изучить гайды
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-[url('img/db3bae06-a1c4-44c5-a354-934c663f8624.jpg')] bg-cover bg-center opacity-10"></div>
      </section>

      {/* Maps Section */}
      <section id="maps" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-4">Популярные карты</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Скачивайте самые популярные карты для Counter-Strike: Source
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {maps.map((map, index) => (
              <Card
                key={index}
                className="bg-[#2A2A2A] border-[#FF6B35]/20 hover:border-[#FF6B35]/50 transition-all duration-300 hover:scale-105"
              >
                <CardHeader className="p-0">
                  <div
                    className="aspect-video bg-cover bg-center rounded-t-lg"
                    style={{ backgroundImage: `url('${map.image}')` }}
                  >
                    <div className="w-full h-full bg-gradient-to-t from-black/60 to-transparent rounded-t-lg flex items-end p-4">
                      <Badge className="bg-[#FF6B35] text-white">
                        {map.type}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-white mb-2">{map.name}</CardTitle>
                  <CardDescription className="text-gray-400 mb-4">
                    Размер: {map.size} • Скачано: {map.downloads} раз
                  </CardDescription>
                  <Button className="w-full bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white">
                    <Icon name="Download" className="mr-2" size={16} />
                    Скачать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Guides Section */}
      <section id="guides" className="py-20 bg-[#0F0F0F]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-4">Гайды и обучение</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Изучите тактики и стратегии для улучшения своей игры
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {guides.map((guide, index) => (
              <Card
                key={index}
                className="bg-[#2A2A2A] border-[#FF6B35]/20 hover:border-[#FF6B35]/50 transition-all duration-300 hover:scale-105"
              >
                <CardHeader className="p-0">
                  <div
                    className="aspect-video bg-cover bg-center rounded-t-lg"
                    style={{ backgroundImage: `url('${guide.image}')` }}
                  >
                    <div className="w-full h-full bg-gradient-to-t from-black/60 to-transparent rounded-t-lg flex items-end p-4">
                      <Badge
                        variant="outline"
                        className="border-[#FF6B35] text-[#FF6B35]"
                      >
                        {guide.difficulty}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-white mb-2">
                    {guide.title}
                  </CardTitle>
                  <CardDescription className="text-gray-400 mb-4">
                    {guide.description}
                  </CardDescription>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      <Icon name="Clock" className="inline mr-1" size={14} />
                      {guide.duration}
                    </span>
                    <Button
                      size="sm"
                      className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white"
                    >
                      <Icon name="BookOpen" className="mr-2" size={14} />
                      Читать
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-4xl font-bold mb-4">
              Скачать Counter-Strike: Source
            </h3>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Получите полную версию игры с модами, картами и обновлениями
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                size="lg"
                className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white"
              >
                <Icon name="Download" className="mr-2" size={20} />
                Скачать для Windows
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[#FF6B35] text-[#FF6B35] hover:bg-[#FF6B35] hover:text-white"
              >
                <Icon name="Download" className="mr-2" size={20} />
                Скачать для Linux
              </Button>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <Card className="bg-[#2A2A2A] border-[#FF6B35]/20">
                <CardContent className="p-6 text-center">
                  <Icon
                    name="Zap"
                    className="mx-auto mb-4 text-[#FF6B35]"
                    size={32}
                  />
                  <h4 className="text-xl font-bold text-white mb-2">
                    Быстрая загрузка
                  </h4>
                  <p className="text-gray-400">
                    Высокоскоростные сервера для быстрого скачивания
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-[#2A2A2A] border-[#FF6B35]/20">
                <CardContent className="p-6 text-center">
                  <Icon
                    name="Shield"
                    className="mx-auto mb-4 text-[#FF6B35]"
                    size={32}
                  />
                  <h4 className="text-xl font-bold text-white mb-2">
                    Безопасность
                  </h4>
                  <p className="text-gray-400">
                    Проверенные файлы без вирусов и модификаций
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-[#2A2A2A] border-[#FF6B35]/20">
                <CardContent className="p-6 text-center">
                  <Icon
                    name="RefreshCw"
                    className="mx-auto mb-4 text-[#FF6B35]"
                    size={32}
                  />
                  <h4 className="text-xl font-bold text-white mb-2">
                    Обновления
                  </h4>
                  <p className="text-gray-400">
                    Автоматические обновления и новый контент
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0F0F0F] border-t border-[#FF6B35]/20 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Icon name="Target" className="text-[#FF6B35]" size={24} />
              <span className="font-bold">CS:S Portal</span>
            </div>
            <div className="flex space-x-6 text-gray-400">
              <a href="#" className="hover:text-[#FF6B35] transition-colors">
                Поддержка
              </a>
              <a href="#" className="hover:text-[#FF6B35] transition-colors">
                Сообщество
              </a>
              <a href="#" className="hover:text-[#FF6B35] transition-colors">
                Контакты
              </a>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-[#FF6B35]/10 text-center text-gray-500">
            © 2024 Counter-Strike: Source Portal. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
