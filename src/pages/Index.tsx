import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const galleryItems = [
    {
      id: 1,
      title: 'Село Красное',
      image: 'https://cdn.poehali.dev/projects/48616b9b-a20a-44a0-b350-1387008dc829/files/3651126f-eba0-442b-abb8-8eb4e497b09e.jpg',
      year: '1956',
      description: 'Старинная церковь на окраине села'
    },
    {
      id: 2,
      title: 'Храм Покрова',
      image: 'https://cdn.poehali.dev/projects/48616b9b-a20a-44a0-b350-1387008dc829/files/d4ed00f7-d273-4206-8bbc-baa4d72a3ce5.jpg',
      year: '1962',
      description: 'Заброшенная церковь в деревне Михайловка'
    },
    {
      id: 3,
      title: 'Деревенская улица',
      image: 'https://cdn.poehali.dev/projects/48616b9b-a20a-44a0-b350-1387008dc829/files/f4ca2028-e8eb-4d5a-a132-dc94fa7408a5.jpg',
      year: '1968',
      description: 'Традиционные избы в селе Белогорье'
    }
  ];

  const audioRecordings = [
    { id: 1, title: 'Рассказ жительницы села Красное', duration: '12:34', year: '2023' },
    { id: 2, title: 'Воспоминания о сельском быте', duration: '18:22', year: '2023' },
    { id: 3, title: 'История церкви Покрова', duration: '15:47', year: '2024' },
    { id: 4, title: 'Песни наших бабушек', duration: '9:15', year: '2024' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="sticky top-0 z-50 bg-primary/95 backdrop-blur-sm border-b-4 border-primary-foreground/20 shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl md:text-4xl font-bold text-primary-foreground font-serif">
              Архив Белогорья
            </h1>
            <div className="hidden md:flex gap-6 items-center">
              <button 
                onClick={() => scrollToSection('home')}
                className={`flex items-center gap-2 text-primary-foreground hover:text-accent transition-colors ${activeSection === 'home' ? 'font-bold' : ''}`}
              >
                <Icon name="Home" size={20} />
                <span className="font-serif text-lg">Главная</span>
              </button>
              <button 
                onClick={() => scrollToSection('gallery')}
                className={`flex items-center gap-2 text-primary-foreground hover:text-accent transition-colors ${activeSection === 'gallery' ? 'font-bold' : ''}`}
              >
                <Icon name="Camera" size={20} />
                <span className="font-serif text-lg">Галерея</span>
              </button>
              <button 
                onClick={() => scrollToSection('audio')}
                className={`flex items-center gap-2 text-primary-foreground hover:text-accent transition-colors ${activeSection === 'audio' ? 'font-bold' : ''}`}
              >
                <Icon name="Mic" size={20} />
                <span className="font-serif text-lg">Аудиозаписи</span>
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className={`flex items-center gap-2 text-primary-foreground hover:text-accent transition-colors ${activeSection === 'about' ? 'font-bold' : ''}`}
              >
                <Icon name="BookOpen" size={20} />
                <span className="font-serif text-lg">О проекте</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 text-foreground font-serif">
              Живая память Белгородчины
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Документальный архив деревень и сел Белгородской области. 
              Фотографии, видео и аудиозаписи, хранящие историю наших поселений.
            </p>
          </div>

          <div className="relative border-8 border-primary/30 rounded-lg overflow-hidden shadow-2xl animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <img 
              src="https://cdn.poehali.dev/projects/48616b9b-a20a-44a0-b350-1387008dc829/files/3651126f-eba0-442b-abb8-8eb4e497b09e.jpg"
              alt="Архив Белогорья" 
              className="w-full h-[500px] object-cover sepia-[0.3]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-8">
              <div className="text-primary-foreground flex items-center justify-between w-full">
                <div>
                  <p className="text-3xl font-serif font-bold">Село Красное, 1956</p>
                  <p className="text-lg mt-2">Старинная церковь на окраине села</p>
                </div>
                <Button 
                  size="lg"
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-serif flex items-center gap-2"
                >
                  <Icon name="Play" size={20} />
                  Аудиорассказ
                </Button>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <Card className="border-4 border-accent bg-card hover:shadow-xl transition-shadow animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <CardContent className="p-6 text-center">
                <Icon name="Image" size={48} className="mx-auto mb-4 text-primary" />
                <h3 className="text-2xl font-serif font-bold mb-2 text-card-foreground">Фотоархив</h3>
                <p className="text-muted-foreground">Более 500 уникальных снимков деревень и сел</p>
              </CardContent>
            </Card>
            <Card className="border-4 border-accent bg-card hover:shadow-xl transition-shadow animate-fade-up" style={{ animationDelay: '0.4s' }}>
              <CardContent className="p-6 text-center">
                <Icon name="Video" size={48} className="mx-auto mb-4 text-primary" />
                <h3 className="text-2xl font-serif font-bold mb-2 text-card-foreground">Видеоматериалы</h3>
                <p className="text-muted-foreground">Документальные съемки сельской жизни</p>
              </CardContent>
            </Card>
            <Card className="border-4 border-accent bg-card hover:shadow-xl transition-shadow animate-fade-up" style={{ animationDelay: '0.5s' }}>
              <CardContent className="p-6 text-center">
                <Icon name="Headphones" size={48} className="mx-auto mb-4 text-primary" />
                <h3 className="text-2xl font-serif font-bold mb-2 text-card-foreground">Аудиозаписи</h3>
                <p className="text-muted-foreground">Истории и воспоминания местных жителей</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-4 text-foreground font-serif">Галерея фото и видео</h2>
            <p className="text-xl text-muted-foreground">Визуальная летопись деревень Белогорья</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item, index) => (
              <Card 
                key={item.id} 
                className="border-4 border-primary/20 bg-card overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-64 object-cover sepia-[0.4]"
                  />
                  <div className="absolute top-2 right-2 bg-primary/90 text-primary-foreground px-3 py-1 rounded font-serif font-bold">
                    {item.year}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-serif font-bold mb-2 text-card-foreground">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                  <Button className="mt-4 w-full bg-primary hover:bg-primary/90 text-primary-foreground font-serif">
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="audio" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-4 text-foreground font-serif">Аудиозаписи</h2>
            <p className="text-xl text-muted-foreground">Голоса прошлого, истории настоящего</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {audioRecordings.map((audio, index) => (
              <Card 
                key={audio.id} 
                className="border-4 border-accent bg-card hover:shadow-xl transition-all hover:border-primary/50 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-4 rounded-full flex-shrink-0">
                      <Icon name="Mic2" size={32} className="text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-serif font-bold mb-2 text-card-foreground">{audio.title}</h3>
                      <div className="flex items-center gap-4 text-muted-foreground text-sm mb-4">
                        <span className="flex items-center gap-1">
                          <Icon name="Clock" size={16} />
                          {audio.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <Icon name="Calendar" size={16} />
                          {audio.year}
                        </span>
                      </div>
                      <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-serif">
                        <Icon name="Play" size={16} className="mr-2" />
                        Прослушать
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-4 text-foreground font-serif">О проекте</h2>
          </div>

          <Card className="border-4 border-primary/30 bg-card shadow-2xl">
            <CardContent className="p-8 md:p-12">
              <div className="prose prose-lg max-w-none">
                <p className="text-xl leading-relaxed text-card-foreground mb-6">
                  <span className="text-4xl font-serif font-bold text-primary float-left mr-4 leading-none">А</span>
                  рхив Белогорья — это проект фотографа-документалиста, посвященный сохранению 
                  визуальной и аудиальной памяти деревень и сел Белгородской области.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                  Каждая фотография, каждое видео и каждая аудиозапись — это частица истории, 
                  которая помогает современникам понять, как жили наши предки, какие традиции 
                  они хранили, какие дома строили, какие песни пели.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                  Проект объединяет три формата документирования:
                </p>
                <ul className="space-y-4 mb-6">
                  <li className="flex items-start gap-3">
                    <Icon name="Camera" size={24} className="text-primary flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground">
                      <strong className="text-card-foreground">Фотографии</strong> — визуальная летопись архитектуры, 
                      ландшафтов и быта сельских поселений
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Video" size={24} className="text-primary flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground">
                      <strong className="text-card-foreground">Видеоматериалы</strong> — документальные съемки, 
                      показывающие жизнь деревень в динамике
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Headphones" size={24} className="text-primary flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground">
                      <strong className="text-card-foreground">Аудиозаписи</strong> — интервью с жителями, 
                      их воспоминания и истории о родных местах
                    </span>
                  </li>
                </ul>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Миссия проекта — сохранить для будущих поколений аутентичный облик и атмосферу 
                  белгородских деревень, которые стремительно меняются и исчезают.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12 px-4 border-t-4 border-primary-foreground/20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <h3 className="text-3xl font-serif font-bold mb-4">Архив Белогорья</h3>
            <p className="text-lg mb-6">Сохраняя память о прошлом для будущего</p>
            <div className="flex justify-center gap-6">
              <Icon name="Camera" size={28} />
              <Icon name="Video" size={28} />
              <Icon name="Mic" size={28} />
              <Icon name="Map" size={28} />
            </div>
            <p className="mt-8 text-sm text-primary-foreground/70">© 2024 Фотоархив Белгородской области</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;