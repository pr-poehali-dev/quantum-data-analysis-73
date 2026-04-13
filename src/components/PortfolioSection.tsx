import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const photos = [
  {
    title: "Бассейн с видом на море",
    category: "Отдых и купание",
    image: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=800&q=80",
    description: "Роскошный бассейн с подогревом и панорамным видом на Средиземное море. Шезлонги и бар у воды — всё для вашего удовольствия.",
  },
  {
    title: "Пляж и море",
    category: "Пляжный отдых",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
    description: "Собственный обустроенный пляж с мелкой галькой, чистейшая вода Средиземного моря, идеальная видимость для снорклинга.",
  },
  {
    title: "Ресторан и кухня",
    category: "Ultra All Inclusive",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
    description: "Главный ресторан с живой кулинарной станцией, богатый шведский стол, ресторан à la carte с видом на море — гастрономия на высшем уровне.",
  },
  {
    title: "Номер Standard Land View",
    category: "Комфортное размещение",
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80",
    description: "Улучшенный номер категории Standard Land View: просторная комната, кондиционер, мини-бар, балкон с живописным видом на горы и сады.",
  },
]

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance">Фото отеля</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Amara Dolce Vita 5★ — роскошный курортный отель в Кемере на берегу Средиземного моря.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {photos.map((photo, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={photo.image}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <p className="text-sm text-primary font-semibold mb-2">{photo.category}</p>
                <h3 className="text-xl font-bold mb-2">{photo.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{photo.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="font-bold px-10" asChild>
            <a href="#contact">ЗАБРОНИРОВАТЬ ТУР</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
