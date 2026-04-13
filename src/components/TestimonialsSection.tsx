import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote: "Взяли горящий тур в Турцию через «Розовый слон» — всё прошло идеально! Перелёт, отель, трансфер — без единого косяка. Уже планируем следующую поездку с ними.",
    name: "Марина К.",
    role: "Постоянный клиент",
  },
  {
    quote: "Amara Dolce Vita — просто рай! Питание Ultra All Inclusive на высшем уровне, бассейны шикарные, сервис выше всяких похвал. Спасибо агентству за такой вариант!",
    name: "Дмитрий и Ольга",
    role: "Ростов-на-Дону",
  },
  {
    quote: "Боялись брать горящий тур, но ребята из «Розового слона» всё объяснили и помогли с оформлением. Цена реально была лучшей на рынке. Летели Azur Air — удобно и вовремя.",
    name: "Анна Петрова",
    role: "Клиент 2024 года",
  },
  {
    quote: "Пятый раз бронируем туры только через «Розовый слон». Всегда хорошие цены, всегда на связи, всегда помогут если что. Очень рекомендуем!",
    name: "Семья Сидоровых",
    role: "Постоянные клиенты",
  },
]

export function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationFrameId: number
    let scrollPosition = 0
    const scrollSpeed = 0.5

    const scroll = () => {
      scrollPosition += scrollSpeed

      if (scrollContainer.scrollWidth && scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0
      }

      scrollContainer.scrollLeft = scrollPosition
      animationFrameId = requestAnimationFrame(scroll)
    }

    animationFrameId = requestAnimationFrame(scroll)

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-balance">
          Отзывы наших туристов
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-pretty leading-relaxed">
          Тысячи довольных клиентов доверяют нам свой отдых. Вот что они говорят о поездках с «Розовым слоном».
        </p>

        <div className="relative">
          <div ref={scrollRef} className="flex gap-6 overflow-x-hidden" style={{ scrollBehavior: "auto" }}>
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <Card key={index} className="flex-shrink-0 w-[90vw] sm:w-[450px] border-none shadow-lg">
                <CardContent className="p-8">
                  <Quote className="h-8 w-8 text-primary mb-4" />
                  <p className="text-base sm:text-lg mb-6 leading-relaxed text-pretty min-h-[120px]">
                    {testimonial.quote}
                  </p>
                  <div>
                    <p className="font-semibold text-lg">{testimonial.name}</p>
                    <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
