import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    object_type: "Выберите тип объекта"
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  };

  const staggerContainer = {
    initial: {},
    whileInView: { transition: { staggerChildren: 0.1 } },
    viewport: { once: true }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.object_type === "Выберите тип объекта") {
      toast({
        title: "Ошибка",
        description: "Пожалуйста, выберите тип объекта",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://functions.poehali.dev/38c186b0-15b2-4a7a-bef4-d8c4ee62d293", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (response.ok && result.success) {
        toast({
          title: "Заявка отправлена!",
          description: result.message,
        });
        setFormData({
          name: "",
          phone: "",
          object_type: "Выберите тип объекта"
        });
      } else {
        throw new Error("Ошибка отправки");
      }
    } catch (error) {
      toast({
        title: "Ошибка",
        description: "Не удалось отправить заявку. Попробуйте позже.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Icon name="Shield" className="text-white" size={24} />
            </div>
            <span className="text-2xl font-bold text-primary">VCAM</span>
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
            <Button className="bg-accent hover:bg-accent/90 hidden md:block">Заказать расчет</Button>
            
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <Icon name={mobileMenuOpen ? "X" : "Menu"} size={24} />
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-gray-200 bg-white"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
              <a href="#home" className="text-sm font-medium hover:text-accent transition-colors" onClick={() => setMobileMenuOpen(false)}>Главная</a>
              <a href="#about" className="text-sm font-medium hover:text-accent transition-colors" onClick={() => setMobileMenuOpen(false)}>О нас</a>
              <a href="#services" className="text-sm font-medium hover:text-accent transition-colors" onClick={() => setMobileMenuOpen(false)}>Услуги</a>
              <a href="#portfolio" className="text-sm font-medium hover:text-accent transition-colors" onClick={() => setMobileMenuOpen(false)}>Наши работы</a>
              <a href="#advantages" className="text-sm font-medium hover:text-accent transition-colors" onClick={() => setMobileMenuOpen(false)}>Преимущества</a>
              <a href="#contacts" className="text-sm font-medium hover:text-accent transition-colors" onClick={() => setMobileMenuOpen(false)}>Контакты</a>
              <Button className="bg-accent hover:bg-accent/90 w-full">Заказать расчет</Button>
            </nav>
          </motion.div>
        )}
      </header>

      <section id="home" className="pt-32 pb-20 bg-gradient-to-br from-primary via-primary to-primary/90 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
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
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
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
            </motion.div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">О компании VCAM</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Мы специализируемся на создании надежных систем безопасности, которые спасают жизни и защищают имущество
            </p>
          </motion.div>
          
          <motion.div {...staggerContainer} className="grid md:grid-cols-3 gap-8">
            <motion.div {...fadeInUp}>
              <Card className="p-8 text-center hover:shadow-lg transition-shadow">
                <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-accent">10+</span>
                </div>
                <h3 className="text-2xl font-semibold mb-2">лет на рынке</h3>
                <p className="text-muted-foreground">Опыт работы с объектами любой сложности</p>
              </Card>
            </motion.div>
            
            <motion.div {...fadeInUp}>
              <Card className="p-8 text-center hover:shadow-lg transition-shadow">
                <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-accent">500+</span>
                </div>
                <h3 className="text-2xl font-semibold mb-2">реализованных объектов</h3>
                <p className="text-muted-foreground">От торговых центров до промышленных предприятий</p>
              </Card>
            </motion.div>
            
            <motion.div {...fadeInUp}>
              <Card className="p-8 text-center hover:shadow-lg transition-shadow">
                <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-accent">3</span>
                </div>
                <h3 className="text-2xl font-semibold mb-2">года гарантии</h3>
                <p className="text-muted-foreground">На все виды работ и оборудование</p>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Услуги</h2>
            <p className="text-xl text-muted-foreground">Полный цикл работ по системам оповещения и эвакуации</p>
          </motion.div>
          
          <motion.div {...staggerContainer} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "FileText", title: "Проектирование СОУЭ", desc: "Разработка проектной документации в соответствии с нормами безопасности" },
              { icon: "Wrench", title: "Монтаж и пусконаладка", desc: "Профессиональная установка оборудования и настройка системы" },
              { icon: "Settings", title: "Техническое обслуживание", desc: "Регулярное ТО и оперативный ремонт оборудования" },
              { icon: "Search", title: "Аудит и модернизация", desc: "Проверка и улучшение существующих систем безопасности" }
            ].map((service, idx) => (
              <motion.div key={idx} {...fadeInUp}>
                <Card className="p-6 hover:shadow-xl transition-all hover:-translate-y-1">
                  <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center mb-4">
                    <Icon name={service.icon as any} className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.desc}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="components" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Компоненты системы</h2>
            <p className="text-xl text-muted-foreground">Сертифицированное оборудование ведущих производителей</p>
          </motion.div>
          
          <motion.div {...staggerContainer} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "Cpu", title: "Блоки управления", desc: "Центральные и усилительные блоки для управления системой", color: "from-primary to-primary/80" },
              { icon: "Volume2", title: "Оповещатели", desc: "Звуковые, световые и комбинированные устройства", color: "from-accent to-accent/80" },
              { icon: "ArrowRight", title: "Табло \"Выход\"", desc: "Указатели направления эвакуации с подсветкой", color: "from-green-600 to-green-500" },
              { icon: "Mic", title: "Микрофоны", desc: "Для трансляции экстренных речевых сообщений", color: "from-primary to-primary/80" }
            ].map((component, idx) => (
              <motion.div key={idx} {...fadeInUp} className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-accent transition-colors">
                <div className={`aspect-square bg-gradient-to-br ${component.color} rounded-xl flex items-center justify-center mb-4`}>
                  <Icon name={component.icon as any} className="text-white" size={48} />
                </div>
                <h3 className="font-semibold text-lg mb-2">{component.title}</h3>
                <p className="text-sm text-muted-foreground">{component.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="advantages" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Преимущества работы с нами</h2>
            <p className="text-xl text-muted-foreground">Почему выбирают VCAM</p>
          </motion.div>
          
          <motion.div {...staggerContainer} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: "CheckCircle2", title: "Полное соответствие нормам", desc: "Работаем строго по ГОСТ, ФЗ-123 и СП 3.13130.2009" },
              { icon: "Award", title: "Сертифицированное оборудование", desc: "Все компоненты имеют сертификаты пожарной безопасности" },
              { icon: "Users", title: "Квалифицированные специалисты", desc: "Инженеры и монтажники с профильным образованием" },
              { icon: "Clock", title: "Соблюдение сроков", desc: "Выполняем работы точно в установленные сроки" },
              { icon: "DollarSign", title: "Прозрачное ценообразование", desc: "Работаем в рамках согласованного бюджета без скрытых доплат" },
              { icon: "Headphones", title: "Поддержка 24/7", desc: "Круглосуточная техническая поддержка и консультации" }
            ].map((advantage, idx) => (
              <motion.div key={idx} {...fadeInUp} className="flex gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name={advantage.icon as any} className="text-accent" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{advantage.title}</h3>
                  <p className="text-muted-foreground">{advantage.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="leadership" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Руководство</h2>
            <p className="text-xl text-muted-foreground">Профессиональная команда с многолетним опытом</p>
          </motion.div>
          
          <motion.div {...staggerContainer} className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div {...fadeInUp}>
              <Card className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-[4/5] bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center">
                  <Icon name="User" className="text-white" size={120} />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">Иванов Сергей Петрович</h3>
                  <p className="text-accent font-semibold mb-4">Генеральный директор</p>
                  <p className="text-muted-foreground mb-3">
                    Более 15 лет опыта в сфере систем безопасности и противопожарной защиты
                  </p>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Icon name="GraduationCap" size={16} className="text-accent" />
                      <span>МГТУ им. Баумана, инженер по пожарной безопасности</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Award" size={16} className="text-accent" />
                      <span>Сертифицированный специалист МЧС России</span>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
            
            <motion.div {...fadeInUp}>
              <Card className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-[4/5] bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center">
                  <Icon name="User" className="text-white" size={120} />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">Петрова Елена Александровна</h3>
                  <p className="text-accent font-semibold mb-4">Технический директор</p>
                  <p className="text-muted-foreground mb-3">
                    12 лет опыта проектирования и внедрения сложных систем оповещения
                  </p>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Icon name="GraduationCap" size={16} className="text-accent" />
                      <span>МЭИ, инженер-проектировщик систем безопасности</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Award" size={16} className="text-accent" />
                      <span>Эксперт по ГОСТ Р и международным стандартам</span>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section id="portfolio" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Наши работы</h2>
            <p className="text-xl text-muted-foreground">Примеры реализованных проектов</p>
          </motion.div>
          
          <motion.div {...staggerContainer} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "ShoppingCart", badge: "Торговый центр", title: "ТЦ \"Мега\"", desc: "СОУЭ 3-го типа, 150 оповещателей, 45 световых табло", color: "from-primary to-primary/80" },
              { icon: "Building2", badge: "Бизнес-центр", title: "БЦ \"Северная Башня\"", desc: "СОУЭ 4-го типа с речевым оповещением, 22 этажа", color: "from-accent to-accent/80" },
              { icon: "Factory", badge: "Промышленное предприятие", title: "Завод \"Техноком\"", desc: "СОУЭ 2-го типа, площадь 15000 м², интеграция с АПС", color: "from-green-600 to-green-500" },
              { icon: "GraduationCap", badge: "Образовательное учреждение", title: "Школа №45", desc: "СОУЭ 1-го типа, автоматическое включение при пожаре", color: "from-primary to-primary/80" }
            ].map((project, idx) => (
              <motion.div key={idx} {...fadeInUp}>
                <Card className="overflow-hidden hover:shadow-xl transition-shadow">
                  <div className={`aspect-video bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                    <Icon name={project.icon as any} className="text-white" size={48} />
                  </div>
                  <div className="p-6">
                    <Badge className="mb-3">{project.badge}</Badge>
                    <h3 className="font-semibold text-lg mb-2">{project.title}</h3>
                    <p className="text-sm text-muted-foreground">{project.desc}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="types" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Типы систем СОУЭ</h2>
            <p className="text-xl text-muted-foreground">От простых до сложных многофункциональных систем</p>
          </motion.div>
          
          <motion.div {...staggerContainer} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { num: "1", title: "Тип 1", desc: "Звуковые оповещатели для небольших объектов до 300 м²", color: "bg-primary" },
              { num: "2", title: "Тип 2", desc: "Звуковые + световые оповещатели для объектов до 800 м²", color: "bg-primary" },
              { num: "3", title: "Тип 3", desc: "Звук + свет + речевое оповещение для крупных зданий", color: "bg-primary" },
              { num: "4", title: "Тип 4", desc: "Автоматическое управление эвакуацией, зонирование", color: "bg-accent" },
              { num: "5", title: "Тип 5", desc: "Интеграция с АПС, СКУД, видеонаблюдением", color: "bg-accent" }
            ].map((type, idx) => (
              <motion.div key={idx} {...fadeInUp}>
                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 ${type.color} rounded-lg flex items-center justify-center text-white font-bold`}>{type.num}</div>
                    <h3 className="font-semibold text-lg">{type.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{type.desc}</p>
                </Card>
              </motion.div>
            ))}
            
            <motion.div {...fadeInUp}>
              <Card className="p-6 bg-gradient-to-br from-primary to-primary/90 text-white">
                <Icon name="Info" className="mb-3" size={32} />
                <h3 className="font-semibold text-lg mb-2">Подбор системы</h3>
                <p className="text-white/90 text-sm">Тип СОУЭ зависит от назначения здания, площади и количества людей</p>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-gradient-to-br from-primary via-primary to-primary/90 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
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
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-primary mb-6">Заказать обратный звонок</h3>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Ваше имя</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Иван Иванов"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Телефон</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="+7 (___) ___-__-__"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Тип объекта</label>
                  <select
                    value={formData.object_type}
                    onChange={(e) => setFormData({ ...formData, object_type: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option>Выберите тип объекта</option>
                    <option>Торговый центр</option>
                    <option>Бизнес-центр</option>
                    <option>Промышленное предприятие</option>
                    <option>Образовательное учреждение</option>
                    <option>Другое</option>
                  </select>
                </div>
                <Button
                  type="submit"
                  className="w-full bg-accent hover:bg-accent/90"
                  size="lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Отправка..." : "Отправить заявку"}
                </Button>
              </form>
            </motion.div>
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