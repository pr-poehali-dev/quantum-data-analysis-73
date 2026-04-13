export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30 py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">✈️ Розовый слон</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Турагентство «Розовый слон» — горящие туры и выгодные путешествия из Ростова-на-Дону.
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              © 2026 Розовый слон. Все права защищены.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Навигация</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  О нас
                </a>
              </li>
              <li>
                <a href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Что включено
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Фото отеля
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Стоимость
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Забронировать
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>📍 ул. Еременко, 89Б, Ростов-на-Дону</li>
              <li>📞 +7 900 123-45-67</li>
              <li>🕐 Пн–Пт: 9:00–20:00</li>
              <li>🕐 Сб–Вс: 10:00–18:00</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
