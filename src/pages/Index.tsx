import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Icon name="Shield" className="text-white" size={24} />
            </div>
            <span className="text-2xl font-bold text-primary">RUBOTO</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-sm font-medium hover:text-accent transition-colors">Главная</a>
            <a href="#about" className="text-sm font-medium hover:text-accent transition-colors">О нас</a>
            <a href="#services" className="text-sm font-medium hover:text-accent transition-colors">Услуги</a>
            <a href="#portfolio" className="text-sm font-medium hover:text-accent transition-colors">Наши работы</a>
            <a href="#advantages" className="text-sm font-medium hover:text-accent transition-colors">Преимущества</a>
            <a href="#contacts" className="text-sm font-medium hover:text-accent transition-colors">Контакты</a>
          </nav>
          
          <div className="flex items-center gap-4">
            <div className="hidden lg:flex flex-col items-end">
              <span className="text-sm font-semibold text-primary">+7 (495) 123-45-67</span>
              <span className="text-xs text-muted-foreground">info@ruboto.ru</span>
            </div>
            <Button className="bg-accent hover:bg-accent/90">Заказать расчет</Button>
          </div>
        </div>
      </header>

      <section id="home" className="pt-32 pb-20 bg-gradient-to-br from-primary via-primary to-primary/90 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Надежные системы оповещения и эвакуации для вашей безопасности
              </h1>
              <p className="text-xl mb-8 text-white/90">
                Проектирование, монтаж и обслуживание СОУЭ в полном соответствии с требованиями ГОСТ и МЧС
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white">
                  Рассчитать стоимость
                </Button>
                <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary">
                  Скачать каталог
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <div className="bg-green-600 rounded-2xl p-8 flex items-center justify-center shadow-2xl">
                  <Icon name="ArrowRight" className="text-white" size={80} />
                  <div className="absolute -top-4 -right-4 bg-accent rounded-full p-6 shadow-xl">
                    <Icon name="AlertCircle" className="text-white" size={32} />
                  </div>
                </div>
                <div className="mt-6 grid grid-cols-3 gap-4">
                  <div className="bg-white/10 rounded-lg p-4 text-center border border-white/20">
                    <Icon name="Volume2" className="text-white mx-auto mb-2" size={24} />
                    <p className="text-xs">Звуковые оповещатели</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 text-center border border-white/20">
                    <Icon name="Lightbulb" className="text-white mx-auto mb-2" size={24} />
                    <p className="text-xs">Световые табло</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 text-center border border-white/20">
                    <Icon name="Cpu" className="text-white mx-auto mb-2" size={24} />
                    <p className="text-xs">Блоки управления</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">О компании RUBOTO</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Мы специализируемся на создании надежных систем безопасности, которые спасают жизни и защищают имущество
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-accent">10+</span>
              </div>
              <h3 className="text-2xl font-semibold mb-2">лет на рынке</h3>
              <p className="text-muted-foreground">Опыт работы с объектами любой сложности</p>
            </Card>
            
            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-accent">500+</span>
              </div>
              <h3 className="text-2xl font-semibold mb-2">реализованных объектов</h3>
              <p className="text-muted-foreground">От торговых центров до промышленных предприятий</p>
            </Card>
            
            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-accent">3</span>
              </div>
              <h3 className="text-2xl font-semibold mb-2">года гарантии</h3>
              <p className="text-muted-foreground">На все виды работ и оборудование</p>
            </Card>
          </div>
        </div>
      </section>

      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Услуги</h2>
            <p className="text-xl text-muted-foreground">Полный цикл работ по системам оповещения и эвакуации</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center mb-4">
                <Icon name="FileText" className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Проектирование СОУЭ</h3>
              <p className="text-muted-foreground">Разработка проектной документации в соответствии с нормами безопасности</p>
            </Card>
            
            <Card className="p-6 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center mb-4">
                <Icon name="Wrench" className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Монтаж и пусконаладка</h3>
              <p className="text-muted-foreground">Профессиональная установка оборудования и настройка системы</p>
            </Card>
            
            <Card className="p-6 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center mb-4">
                <Icon name="Settings" className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Техническое обслуживание</h3>
              <p className="text-muted-foreground">Регулярное ТО и оперативный ремонт оборудования</p>
            </Card>
            
            <Card className="p-6 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center mb-4">
                <Icon name="Search" className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Аудит и модернизация</h3>
              <p className="text-muted-foreground">Проверка и улучшение существующих систем безопасности</p>
            </Card>
          </div>
        </div>
      </section>

      <section id="components" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Компоненты системы</h2>
            <p className="text-xl text-muted-foreground">Сертифицированное оборудование ведущих производителей</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-accent transition-colors">
              <div className="aspect-square bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center mb-4">
                <Icon name="Cpu" className="text-white" size={48} />
              </div>
              <h3 className="font-semibold text-lg mb-2">Блоки управления</h3>
              <p className="text-sm text-muted-foreground">Центральные и усилительные блоки для управления системой</p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-accent transition-colors">
              <div className="aspect-square bg-gradient-to-br from-accent to-accent/80 rounded-xl flex items-center justify-center mb-4">
                <Icon name="Volume2" className="text-white" size={48} />
              </div>
              <h3 className="font-semibold text-lg mb-2">Оповещатели</h3>
              <p className="text-sm text-muted-foreground">Звуковые, световые и комбинированные устройства</p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-accent transition-colors">
              <div className="aspect-square bg-gradient-to-br from-green-600 to-green-500 rounded-xl flex items-center justify-center mb-4">
                <Icon name="ArrowRight" className="text-white" size={48} />
              </div>
              <h3 className="font-semibold text-lg mb-2">Табло "Выход"</h3>
              <p className="text-sm text-muted-foreground">Указатели направления эвакуации с подсветкой</p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-accent transition-colors">
              <div className="aspect-square bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center mb-4">
                <Icon name="Mic" className="text-white" size={48} />
              </div>
              <h3 className="font-semibold text-lg mb-2">Микрофоны</h3>
              <p className="text-sm text-muted-foreground">Для трансляции экстренных речевых сообщений</p>
            </div>
          </div>
        </div>
      </section>

      <section id="advantages" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Преимущества работы с нами</h2>
            <p className="text-xl text-muted-foreground">Почему выбирают RUBOTO</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon name="CheckCircle2" className="text-accent" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Полное соответствие нормам</h3>
                <p className="text-muted-foreground">Работаем строго по ГОСТ, ФЗ-123 и СП 3.13130.2009</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon name="Award" className="text-accent" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Сертифицированное оборудование</h3>
                <p className="text-muted-foreground">Все компоненты имеют сертификаты пожарной безопасности</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon name="Users" className="text-accent" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Квалифицированные специалисты</h3>
                <p className="text-muted-foreground">Инженеры и монтажники с профильным образованием</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon name="Clock" className="text-accent" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Соблюдение сроков</h3>
                <p className="text-muted-foreground">Выполняем работы точно в установленные сроки</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon name="DollarSign" className="text-accent" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Прозрачное ценообразование</h3>
                <p className="text-muted-foreground">Работаем в рамках согласованного бюджета без скрытых доплат</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon name="Headphones" className="text-accent" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Поддержка 24/7</h3>
                <p className="text-muted-foreground">Круглосуточная техническая поддержка и консультации</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Наши работы</h2>
            <p className="text-xl text-muted-foreground">Примеры реализованных проектов</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center">
                <Icon name="ShoppingCart" className="text-white" size={48} />
              </div>
              <div className="p-6">
                <Badge className="mb-3">Торговый центр</Badge>
                <h3 className="font-semibold text-lg mb-2">ТЦ "Мега"</h3>
                <p className="text-sm text-muted-foreground">СОУЭ 3-го типа, 150 оповещателей, 45 световых табло</p>
              </div>
            </Card>
            
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center">
                <Icon name="Building2" className="text-white" size={48} />
              </div>
              <div className="p-6">
                <Badge className="mb-3">Бизнес-центр</Badge>
                <h3 className="font-semibold text-lg mb-2">БЦ "Северная Башня"</h3>
                <p className="text-sm text-muted-foreground">СОУЭ 4-го типа с речевым оповещением, 22 этажа</p>
              </div>
            </Card>
            
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-green-600 to-green-500 flex items-center justify-center">
                <Icon name="Factory" className="text-white" size={48} />
              </div>
              <div className="p-6">
                <Badge className="mb-3">Промышленное предприятие</Badge>
                <h3 className="font-semibold text-lg mb-2">Завод "Техноком"</h3>
                <p className="text-sm text-muted-foreground">СОУЭ 2-го типа, площадь 15000 м², интеграция с АПС</p>
              </div>
            </Card>
            
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center">
                <Icon name="GraduationCap" className="text-white" size={48} />
              </div>
              <div className="p-6">
                <Badge className="mb-3">Образовательное учреждение</Badge>
                <h3 className="font-semibold text-lg mb-2">Школа №45</h3>
                <p className="text-sm text-muted-foreground">СОУЭ 1-го типа, автоматическое включение при пожаре</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section id="types" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Типы систем СОУЭ</h2>
            <p className="text-xl text-muted-foreground">От простых до сложных многофункциональных систем</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold">1</div>
                <h3 className="font-semibold text-lg">Тип 1</h3>
              </div>
              <p className="text-muted-foreground">Звуковые оповещатели для небольших объектов до 300 м²</p>
            </Card>
            
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold">2</div>
                <h3 className="font-semibold text-lg">Тип 2</h3>
              </div>
              <p className="text-muted-foreground">Звуковые + световые оповещатели для объектов до 800 м²</p>
            </Card>
            
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold">3</div>
                <h3 className="font-semibold text-lg">Тип 3</h3>
              </div>
              <p className="text-muted-foreground">Звук + свет + речевое оповещение для крупных зданий</p>
            </Card>
            
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center text-white font-bold">4</div>
                <h3 className="font-semibold text-lg">Тип 4</h3>
              </div>
              <p className="text-muted-foreground">Автоматическое управление эвакуацией, зонирование</p>
            </Card>
            
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center text-white font-bold">5</div>
                <h3 className="font-semibold text-lg">Тип 5</h3>
              </div>
              <p className="text-muted-foreground">Интеграция с АПС, СКУД, видеонаблюдением</p>
            </Card>
            
            <Card className="p-6 bg-gradient-to-br from-primary to-primary/90 text-white">
              <Icon name="Info" className="mb-3" size={32} />
              <h3 className="font-semibold text-lg mb-2">Подбор системы</h3>
              <p className="text-white/90 text-sm">Тип СОУЭ зависит от назначения здания, площади и количества людей</p>
            </Card>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-gradient-to-br from-primary via-primary to-primary/90 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Свяжитесь с нами</h2>
              <p className="text-xl mb-8 text-white/90">
                Получите бесплатную консультацию и расчет стоимости вашего проекта
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Телефон</h3>
                    <p className="text-white/90">+7 (495) 123-45-67</p>
                    <p className="text-sm text-white/70">Пн-Пт: 9:00 - 18:00</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-white/90">info@ruboto.ru</p>
                    <p className="text-sm text-white/70">Ответим в течение 24 часов</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Адрес</h3>
                    <p className="text-white/90">г. Москва, ул. Промышленная, д. 15</p>
                    <p className="text-sm text-white/70">Офис 301</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-primary mb-6">Заказать обратный звонок</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Ваше имя</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Иван Иванов" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Телефон</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary" placeholder="+7 (___) ___-__-__" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Тип объекта</label>
                  <select className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary">
                    <option>Выберите тип объекта</option>
                    <option>Торговый центр</option>
                    <option>Бизнес-центр</option>
                    <option>Промышленное предприятие</option>
                    <option>Образовательное учреждение</option>
                    <option>Другое</option>
                  </select>
                </div>
                <Button className="w-full bg-accent hover:bg-accent/90" size="lg">
                  Отправить заявку
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-primary/95 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                  <Icon name="Shield" className="text-primary" size={24} />
                </div>
                <span className="text-2xl font-bold">RUBOTO</span>
              </div>
              <p className="text-white/70 text-sm">Надежные системы оповещения и управления эвакуацией</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Навигация</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#home" className="hover:text-white transition-colors">Главная</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Услуги</a></li>
                <li><a href="#portfolio" className="hover:text-white transition-colors">Наши работы</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#services" className="hover:text-white transition-colors">Проектирование</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Монтаж</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Обслуживание</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Модернизация</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li>+7 (495) 123-45-67</li>
                <li>info@ruboto.ru</li>
                <li>г. Москва, ул. Промышленная, д. 15</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 text-center text-sm text-white/60">
            <p>&copy; 2024 RUBOTO. Все права защищены. Политика конфиденциальности</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
