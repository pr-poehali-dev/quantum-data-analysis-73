import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Utensils, Waves, Dumbbell, Music, Wine, Baby } from "lucide-react"

const services = [
  {
    icon: Utensils,
    title: "Ultra All Inclusive",
    description:
      "Безлимитное питание и напитки круглосуточно: завтраки, обеды, ужины, перекусы, местный и импортный алкоголь, снеки и напитки у бассейна — всё включено без доплат.",
  },
  {
    icon: Waves,
    title: "Бассейны и пляж",
    description:
      "Несколько открытых бассейнов с морской водой, подогреваемый крытый бассейн, собственный пляж с лежаками и зонтиками — всё в шаговой доступности прямо из отеля.",
  },
  {
    icon: Dumbbell,
    title: "Спорт и активности",
    description:
      "Теннисные корты, тренажёрный зал, водные виды спорта, стрельба из лука, аквааэробика, волейбол — насыщенная анимация для взрослых каждый день.",
  },
  {
    icon: Music,
    title: "Развлечения",
    description:
      "Вечерние шоу-программы, живая музыка, дискотека, тематические вечеринки — профессиональная анимационная команда сделает ваш отдых незабываемым.",
  },
  {
    icon: Wine,
    title: "Рестораны и бары",
    description:
      "Главный ресторан с живой станцией и несколько специализированных ресторанов à la carte. Несколько баров, в том числе у бассейна и на пляже.",
  },
  {
    icon: Baby,
    title: "Для детей",
    description:
      "Детский клуб с анимацией, мини-аквапарк, детский бассейн и специальное меню — отель идеально подходит для семейного отдыха с детьми любого возраста.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 animate-pulse" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mx-auto block w-fit">
          Что входит в отдых
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-balance">
          Всё, что нужно для{" "}
          <span className="text-primary">идеального отпуска</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-pretty leading-relaxed text-lg">
          Amara Dolce Vita — один из лучших 5-звёздочных отелей Кемера. Всё включено без скрытых доплат.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-background/50 backdrop-blur-sm"
            >
              <CardHeader>
                <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <service.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
