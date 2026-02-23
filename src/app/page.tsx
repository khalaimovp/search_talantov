'use client'

import { useState } from 'react'

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    talent: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Симуляция отправки формы
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({ name: '', email: '', phone: '', talent: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div style={styles.page}>
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.headerContainer}>
          <div style={styles.logo}>
            <div style={styles.logoIcon}>
              <span style={styles.logoStar}>★</span>
            </div>
            <span style={styles.logoText}>TalentFind</span>
          </div>
          <nav style={styles.nav}>
            <a href="#hero" style={styles.navLink}>Главная</a>
            <a href="#about" style={styles.navLink}>О нас</a>
            <a href="#benefits" style={styles.navLink}>Преимущества</a>
            <a href="#contact" style={styles.navLink}>Контакты</a>
          </nav>
          <a href="#form" style={styles.headerBtn}>Оставить заявку</a>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" style={styles.hero}>
        <div style={styles.heroOverlay}></div>
        <div style={styles.heroContent}>
          <div style={styles.heroText}>
            <h1 style={styles.heroTitle}>
              Находим таланты,<br />
              <span style={styles.heroTitleAccent}>создаём будущее</span>
            </h1>
            <p style={styles.heroSubtitle}>
              Профессиональный поиск и подбор талантливых специалистов для вашего бизнеса. 
              Мы помогаем компаниям находить лучших кандидатов, а талантам — реализовывать свой потенциал.
            </p>
            <div style={styles.heroButtons}>
              <a href="#form" style={styles.primaryBtn}>Найти талант</a>
              <a href="#about" style={styles.secondaryBtn}>Узнать больше</a>
            </div>
          </div>
          <div style={styles.heroImageContainer}>
            <img 
              src="/talent-search.png" 
              alt="Поиск талантов" 
              style={styles.heroImage}
            />
            <div style={styles.heroImageDecor}></div>
          </div>
        </div>
        <div style={styles.heroStats}>
          <div style={styles.statItem}>
            <span style={styles.statNumber}>500+</span>
            <span style={styles.statLabel}>Найденных талантов</span>
          </div>
          <div style={styles.statItem}>
            <span style={styles.statNumber}>98%</span>
            <span style={styles.statLabel}>Довольных клиентов</span>
          </div>
          <div style={styles.statItem}>
            <span style={styles.statNumber}>12</span>
            <span style={styles.statLabel}>Лет на рынке</span>
          </div>
          <div style={styles.statItem}>
            <span style={styles.statNumber}>50+</span>
            <span style={styles.statLabel}>Партнёров</span>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" style={styles.about}>
        <div style={styles.container}>
          <div style={styles.sectionHeader}>
            <span style={styles.sectionTag}>О компании</span>
            <h2 style={styles.sectionTitle}>Мы эксперты в поиске талантов</h2>
            <p style={styles.sectionDesc}>
              TalentFind — ведущая компания в области рекрутинга и поиска талантов. 
              Мы объединяем передовые технологии и человеческую экспертизу для нахождения 
              идеальных кандидатов.
            </p>
          </div>
          <div style={styles.aboutGrid}>
            <div style={styles.aboutCard}>
              <div style={styles.aboutIcon}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8"/>
                  <path d="m21 21-4.35-4.35"/>
                </svg>
              </div>
              <h3 style={styles.aboutCardTitle}>Глубокий поиск</h3>
              <p style={styles.aboutCardText}>
                Используем инновационные методы и обширную базу данных для поиска кандидатов, 
                которые идеально подходят под ваши требования.
              </p>
            </div>
            <div style={styles.aboutCard}>
              <div style={styles.aboutIcon}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <h3 style={styles.aboutCardTitle}>Экспертная команда</h3>
              <p style={styles.aboutCardText}>
                Наши рекрутеры имеют многолетний опыт в различных отраслях и понимают 
                специфику каждой позиции.
              </p>
            </div>
            <div style={styles.aboutCard}>
              <div style={styles.aboutIcon}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
                </svg>
              </div>
              <h3 style={styles.aboutCardTitle}>Быстрые результаты</h3>
              <p style={styles.aboutCardText}>
                Средний срок закрытия вакансии — 14 дней. Мы ценим ваше время и 
                работаем максимально эффективно.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" style={styles.benefits}>
        <div style={styles.container}>
          <div style={styles.sectionHeader}>
            <span style={styles.sectionTag}>Преимущества</span>
            <h2 style={styles.sectionTitle}>Почему выбирают нас</h2>
            <p style={styles.sectionDesc}>
              Мы предлагаем комплексный подход к поиску талантов, который гарантирует результат
            </p>
          </div>
          <div style={styles.benefitsGrid}>
            <div style={styles.benefitItem}>
              <div style={styles.benefitNumber}>01</div>
              <div style={styles.benefitContent}>
                <h3 style={styles.benefitTitle}>Индивидуальный подход</h3>
                <p style={styles.benefitText}>
                  Каждая компания уникальна, и мы это понимаем. Мы разрабатываем персонализированные 
                  стратегии поиска, учитывая корпоративную культуру, специфику отрасли и особые 
                  требования к кандидатам. Наша методология позволяет находить не просто квалифицированных 
                  специалистов, а именно тех, кто станет идеальной частью вашей команды.
                </p>
              </div>
            </div>
            <div style={styles.benefitItem}>
              <div style={styles.benefitNumber}>02</div>
              <div style={styles.benefitContent}>
                <h3 style={styles.benefitTitle}>Гарантия качества</h3>
                <p style={styles.benefitText}>
                  Мы уверены в качестве нашей работы и предоставляем гарантию на всех подобранных 
                  кандидатов. Если в течение испытательного срока кандидат не подойдёт, мы бесплатно 
                  найдём замену. Это наша уверенность в профессионализме и результативности нашего 
                  подхода к оценке и отбору специалистов.
                </p>
              </div>
            </div>
            <div style={styles.benefitItem}>
              <div style={styles.benefitNumber}>03</div>
              <div style={styles.benefitContent}>
                <h3 style={styles.benefitTitle}>Конфиденциальность</h3>
                <p style={styles.benefitText}>
                  Строгая конфиденциальность — основа нашей работы. Вся информация о клиентах, 
                  кандидатах и вакансиях защищена современными системами безопасности. Мы подписываем 
                  NDA и следуем международным стандартам защиты данных, чтобы вы могли быть уверены 
                  в полной сохранности коммерческой информации.
                </p>
              </div>
            </div>
            <div style={styles.benefitItem}>
              <div style={styles.benefitNumber}>04</div>
              <div style={styles.benefitContent}>
                <h3 style={styles.benefitTitle}>Прозрачное ценообразование</h3>
                <p style={styles.benefitText}>
                  Никаких скрытых платежей и неожиданных комиссий. Мы предоставляем детальную 
                  смету услуг upfront и работаем только на условиях, которые были согласованы 
                  изначально. Вы всегда знаете, за что платите и какой результат получите. 
                  Наша система оплаты привязана к достижению конкретных результатов.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section id="form" style={styles.formSection}>
        <div style={styles.container}>
          <div style={styles.formWrapper}>
            <div style={styles.formInfo}>
              <span style={styles.sectionTag}>Заявка</span>
              <h2 style={styles.formTitle}>Оставьте заявку</h2>
              <p style={styles.formDesc}>
                Заполните форму, и наш специалист свяжется с вами в течение 24 часов для обсуждения 
                ваших потребностей в поиске талантов.
              </p>
              <div style={styles.contactInfo}>
                <div style={styles.contactItem}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                  <span>+7 (495) 123-45-67</span>
                </div>
                <div style={styles.contactItem}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                  <span>info@talentfind.ru</span>
                </div>
                <div style={styles.contactItem}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  <span>Москва, ул. Тверская, 1</span>
                </div>
              </div>
            </div>
            <div style={styles.formCard}>
              {isSubmitted ? (
                <div style={styles.successMessage}>
                  <div style={styles.successIcon}>
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                      <polyline points="22 4 12 14.01 9 11.01"/>
                    </svg>
                  </div>
                  <h3 style={styles.successTitle}>Заявка отправлена!</h3>
                  <p style={styles.successText}>
                    Спасибо за обращение. Наш специалист свяжется с вами в ближайшее время.
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    style={styles.newFormBtn}
                  >
                    Отправить ещё заявку
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={styles.form}>
                  <div style={styles.formGroup}>
                    <label style={styles.label}>Ваше имя *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Иван Иванов"
                      style={styles.input}
                    />
                  </div>
                  <div style={styles.formRow}>
                    <div style={styles.formGroup}>
                      <label style={styles.label}>Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="email@example.com"
                        style={styles.input}
                      />
                    </div>
                    <div style={styles.formGroup}>
                      <label style={styles.label}>Телефон</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+7 (___) ___-__-__"
                        style={styles.input}
                      />
                    </div>
                  </div>
                  <div style={styles.formGroup}>
                    <label style={styles.label}>Опишите требуемый талант *</label>
                    <textarea
                      name="talent"
                      value={formData.talent}
                      onChange={handleChange}
                      required
                      placeholder="Расскажите о вакансии и требованиях к кандидату..."
                      rows={5}
                      style={styles.textarea}
                    />
                  </div>
                  <button 
                    type="submit" 
                    style={isSubmitting ? {...styles.submitBtn, ...styles.submitBtnLoading} : styles.submitBtn}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" style={styles.footer}>
        <div style={styles.container}>
          <div style={styles.footerGrid}>
            <div style={styles.footerBrand}>
              <div style={styles.footerLogo}>
                <div style={styles.logoIcon}>
                  <span style={styles.logoStar}>★</span>
                </div>
                <span style={styles.logoText}>TalentFind</span>
              </div>
              <p style={styles.footerDesc}>
                Профессиональный поиск и подбор талантливых специалистов. 
                Помогаем компаниям находить лучших, а талантам — раскрывать потенциал.
              </p>
            </div>
            <div style={styles.footerLinks}>
              <h4 style={styles.footerTitle}>Навигация</h4>
              <a href="#hero" style={styles.footerLink}>Главная</a>
              <a href="#about" style={styles.footerLink}>О нас</a>
              <a href="#benefits" style={styles.footerLink}>Преимущества</a>
              <a href="#form" style={styles.footerLink}>Заявка</a>
            </div>
            <div style={styles.footerLinks}>
              <h4 style={styles.footerTitle}>Услуги</h4>
              <a href="#" style={styles.footerLink}>Executive Search</a>
              <a href="#" style={styles.footerLink}>Кадровый аудит</a>
              <a href="#" style={styles.footerLink}>Оценка персонала</a>
              <a href="#" style={styles.footerLink}>HR-консалтинг</a>
            </div>
            <div style={styles.footerContacts}>
              <h4 style={styles.footerTitle}>Контакты</h4>
              <p style={styles.footerContactItem}>+7 (495) 123-45-67</p>
              <p style={styles.footerContactItem}>info@talentfind.ru</p>
              <p style={styles.footerContactItem}>Москва, ул. Тверская, 1</p>
              <div style={styles.socialLinks}>
                <a href="#" style={styles.socialLink}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" style={styles.socialLink}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a href="#" style={styles.socialLink}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div style={styles.footerBottom}>
            <p style={styles.copyright}>
              © 2024 TalentFind. Все права защищены.
            </p>
            <div style={styles.footerBottomLinks}>
              <a href="#" style={styles.footerBottomLink}>Политика конфиденциальности</a>
              <a href="#" style={styles.footerBottomLink}>Условия использования</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

const styles: { [key: string]: React.CSSProperties } = {
  page: {
    minHeight: '100vh',
    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    backgroundColor: '#0a0a0f',
    color: '#ffffff',
  },
  // Header
  header: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    padding: '1rem 2rem',
    background: 'rgba(10, 10, 15, 0.9)',
    backdropFilter: 'blur(20px)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
  },
  headerContainer: {
    maxWidth: '1280px',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '2rem',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
  },
  logoIcon: {
    width: '40px',
    height: '40px',
    background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #d946ef 100%)',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoStar: {
    color: '#ffffff',
    fontSize: '20px',
  },
  logoText: {
    fontSize: '1.5rem',
    fontWeight: 700,
    background: 'linear-gradient(90deg, #6366f1, #d946ef)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },
  nav: {
    display: 'flex',
    gap: '2rem',
  },
  navLink: {
    color: 'rgba(255, 255, 255, 0.7)',
    textDecoration: 'none',
    fontSize: '0.95rem',
    fontWeight: 500,
    transition: 'color 0.3s ease',
  },
  headerBtn: {
    padding: '0.75rem 1.5rem',
    background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
    color: '#ffffff',
    textDecoration: 'none',
    borderRadius: '8px',
    fontSize: '0.95rem',
    fontWeight: 600,
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  },
  // Hero
  hero: {
    minHeight: '100vh',
    paddingTop: '100px',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    overflow: 'hidden',
  },
  heroOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'radial-gradient(ellipse at 30% 20%, rgba(99, 102, 241, 0.15) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(217, 70, 239, 0.1) 0%, transparent 50%)',
    pointerEvents: 'none',
  },
  heroContent: {
    flex: 1,
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '4rem 2rem',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '4rem',
    alignItems: 'center',
    position: 'relative',
    zIndex: 1,
  },
  heroText: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  heroTitle: {
    fontSize: '3.5rem',
    fontWeight: 800,
    lineHeight: 1.1,
    margin: 0,
  },
  heroTitleAccent: {
    background: 'linear-gradient(90deg, #6366f1, #d946ef)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },
  heroSubtitle: {
    fontSize: '1.2rem',
    lineHeight: 1.7,
    color: 'rgba(255, 255, 255, 0.7)',
    maxWidth: '540px',
  },
  heroButtons: {
    display: 'flex',
    gap: '1rem',
    marginTop: '1rem',
  },
  primaryBtn: {
    padding: '1rem 2rem',
    background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
    color: '#ffffff',
    textDecoration: 'none',
    borderRadius: '12px',
    fontSize: '1rem',
    fontWeight: 600,
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  },
  secondaryBtn: {
    padding: '1rem 2rem',
    background: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    color: '#ffffff',
    textDecoration: 'none',
    borderRadius: '12px',
    fontSize: '1rem',
    fontWeight: 600,
    transition: 'background 0.3s ease',
  },
  heroImageContainer: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heroImage: {
    width: '100%',
    maxWidth: '600px',
    height: 'auto',
    borderRadius: '24px',
    boxShadow: '0 25px 50px -12px rgba(99, 102, 241, 0.25)',
    position: 'relative',
    zIndex: 2,
  },
  heroImageDecor: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.2) 0%, rgba(217, 70, 239, 0.2) 100%)',
    borderRadius: '24px',
    transform: 'rotate(3deg) scale(1.02)',
    zIndex: 1,
  },
  heroStats: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '2rem',
    gap: '2rem',
    borderTop: '1px solid rgba(255, 255, 255, 0.05)',
  },
  statItem: {
    textAlign: 'center',
    padding: '1.5rem',
  },
  statNumber: {
    display: 'block',
    fontSize: '2.5rem',
    fontWeight: 800,
    background: 'linear-gradient(90deg, #6366f1, #d946ef)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },
  statLabel: {
    display: 'block',
    fontSize: '0.9rem',
    color: 'rgba(255, 255, 255, 0.6)',
    marginTop: '0.5rem',
  },
  // Container
  container: {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 2rem',
  },
  // Section headers
  sectionHeader: {
    textAlign: 'center',
    marginBottom: '4rem',
  },
  sectionTag: {
    display: 'inline-block',
    padding: '0.5rem 1rem',
    background: 'rgba(99, 102, 241, 0.1)',
    border: '1px solid rgba(99, 102, 241, 0.2)',
    borderRadius: '100px',
    fontSize: '0.85rem',
    fontWeight: 600,
    color: '#818cf8',
    marginBottom: '1rem',
  },
  sectionTitle: {
    fontSize: '2.5rem',
    fontWeight: 700,
    marginBottom: '1rem',
  },
  sectionDesc: {
    fontSize: '1.1rem',
    color: 'rgba(255, 255, 255, 0.6)',
    maxWidth: '600px',
    margin: '0 auto',
    lineHeight: 1.7,
  },
  // About Section
  about: {
    padding: '6rem 0',
    background: 'linear-gradient(180deg, #0a0a0f 0%, #0f0f18 100%)',
  },
  aboutGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '2rem',
  },
  aboutCard: {
    padding: '2rem',
    background: 'rgba(255, 255, 255, 0.02)',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    borderRadius: '20px',
    transition: 'transform 0.3s ease, border-color 0.3s ease',
  },
  aboutIcon: {
    width: '60px',
    height: '60px',
    background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.2) 0%, rgba(139, 92, 246, 0.2) 100%)',
    borderRadius: '16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '1.5rem',
    color: '#818cf8',
  },
  aboutCardTitle: {
    fontSize: '1.25rem',
    fontWeight: 600,
    marginBottom: '0.75rem',
  },
  aboutCardText: {
    fontSize: '0.95rem',
    lineHeight: 1.7,
    color: 'rgba(255, 255, 255, 0.6)',
  },
  // Benefits Section
  benefits: {
    padding: '6rem 0',
    background: '#0a0a0f',
  },
  benefitsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '2rem',
  },
  benefitItem: {
    display: 'flex',
    gap: '1.5rem',
    padding: '2rem',
    background: 'rgba(255, 255, 255, 0.02)',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    borderRadius: '20px',
    transition: 'border-color 0.3s ease',
  },
  benefitNumber: {
    fontSize: '3rem',
    fontWeight: 800,
    background: 'linear-gradient(180deg, rgba(99, 102, 241, 0.3) 0%, rgba(99, 102, 241, 0.1) 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    flexShrink: 0,
  },
  benefitContent: {
    flex: 1,
  },
  benefitTitle: {
    fontSize: '1.25rem',
    fontWeight: 600,
    marginBottom: '0.75rem',
  },
  benefitText: {
    fontSize: '0.95rem',
    lineHeight: 1.8,
    color: 'rgba(255, 255, 255, 0.6)',
  },
  // Form Section
  formSection: {
    padding: '6rem 0',
    background: 'linear-gradient(180deg, #0a0a0f 0%, #0f0f18 100%)',
  },
  formWrapper: {
    display: 'grid',
    gridTemplateColumns: '1fr 1.2fr',
    gap: '4rem',
    alignItems: 'start',
  },
  formInfo: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  formTitle: {
    fontSize: '2.5rem',
    fontWeight: 700,
  },
  formDesc: {
    fontSize: '1rem',
    lineHeight: 1.7,
    color: 'rgba(255, 255, 255, 0.6)',
  },
  contactInfo: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    marginTop: '1rem',
  },
  contactItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: '0.95rem',
  },
  formCard: {
    background: 'rgba(255, 255, 255, 0.03)',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    borderRadius: '24px',
    padding: '2.5rem',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  formRow: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '1.5rem',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  },
  label: {
    fontSize: '0.9rem',
    fontWeight: 500,
    color: 'rgba(255, 255, 255, 0.8)',
  },
  input: {
    padding: '1rem 1.25rem',
    background: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '12px',
    fontSize: '1rem',
    color: '#ffffff',
    outline: 'none',
    transition: 'border-color 0.3s ease',
  },
  textarea: {
    padding: '1rem 1.25rem',
    background: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '12px',
    fontSize: '1rem',
    color: '#ffffff',
    outline: 'none',
    resize: 'vertical',
    minHeight: '120px',
    fontFamily: 'inherit',
    transition: 'border-color 0.3s ease',
  },
  submitBtn: {
    padding: '1rem 2rem',
    background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
    border: 'none',
    borderRadius: '12px',
    fontSize: '1rem',
    fontWeight: 600,
    color: '#ffffff',
    cursor: 'pointer',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  },
  submitBtnLoading: {
    opacity: 0.7,
    cursor: 'not-allowed',
  },
  successMessage: {
    textAlign: 'center',
    padding: '2rem 0',
  },
  successIcon: {
    width: '80px',
    height: '80px',
    margin: '0 auto 1.5rem',
    background: 'rgba(34, 197, 94, 0.1)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#22c55e',
  },
  successTitle: {
    fontSize: '1.5rem',
    fontWeight: 600,
    marginBottom: '0.75rem',
  },
  successText: {
    fontSize: '1rem',
    color: 'rgba(255, 255, 255, 0.6)',
    marginBottom: '1.5rem',
  },
  newFormBtn: {
    padding: '0.75rem 1.5rem',
    background: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '8px',
    color: '#ffffff',
    fontSize: '0.95rem',
    cursor: 'pointer',
    transition: 'background 0.3s ease',
  },
  // Footer
  footer: {
    background: '#050508',
    padding: '4rem 0 2rem',
    borderTop: '1px solid rgba(255, 255, 255, 0.05)',
  },
  footerGrid: {
    display: 'grid',
    gridTemplateColumns: '2fr 1fr 1fr 1.5fr',
    gap: '3rem',
    marginBottom: '3rem',
  },
  footerBrand: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  footerLogo: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
  },
  footerDesc: {
    fontSize: '0.95rem',
    lineHeight: 1.7,
    color: 'rgba(255, 255, 255, 0.5)',
    maxWidth: '300px',
  },
  footerLinks: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
  },
  footerTitle: {
    fontSize: '1rem',
    fontWeight: 600,
    marginBottom: '0.5rem',
  },
  footerLink: {
    fontSize: '0.9rem',
    color: 'rgba(255, 255, 255, 0.5)',
    textDecoration: 'none',
    transition: 'color 0.3s ease',
  },
  footerContacts: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
  },
  footerContactItem: {
    fontSize: '0.9rem',
    color: 'rgba(255, 255, 255, 0.5)',
  },
  socialLinks: {
    display: 'flex',
    gap: '0.75rem',
    marginTop: '0.5rem',
  },
  socialLink: {
    width: '40px',
    height: '40px',
    background: 'rgba(255, 255, 255, 0.05)',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'rgba(255, 255, 255, 0.6)',
    transition: 'background 0.3s ease, color 0.3s ease',
  },
  footerBottom: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: '2rem',
    borderTop: '1px solid rgba(255, 255, 255, 0.05)',
  },
  copyright: {
    fontSize: '0.85rem',
    color: 'rgba(255, 255, 255, 0.4)',
  },
  footerBottomLinks: {
    display: 'flex',
    gap: '2rem',
  },
  footerBottomLink: {
    fontSize: '0.85rem',
    color: 'rgba(255, 255, 255, 0.4)',
    textDecoration: 'none',
    transition: 'color 0.3s ease',
  },
}

// Media query styles for responsive design
if (typeof window !== 'undefined') {
  const style = document.createElement('style')
  style.textContent = `
    @media (max-width: 1024px) {
      .hero-content { grid-template-columns: 1fr !important; text-align: center; }
      .hero-text { align-items: center; }
      .hero-stats { grid-template-columns: repeat(2, 1fr) !important; }
      .about-grid { grid-template-columns: 1fr !important; }
      .benefits-grid { grid-template-columns: 1fr !important; }
      .form-wrapper { grid-template-columns: 1fr !important; }
      .footer-grid { grid-template-columns: repeat(2, 1fr) !important; }
    }
    @media (max-width: 768px) {
      .nav { display: none !important; }
      .header-btn { display: none !important; }
      .hero-title { font-size: 2.5rem !important; }
      .hero-buttons { flex-direction: column; }
      .hero-stats { grid-template-columns: 1fr !important; }
      .form-row { grid-template-columns: 1fr !important; }
      .footer-grid { grid-template-columns: 1fr !important; }
      .footer-bottom { flex-direction: column; gap: 1rem; text-align: center; }
    }
    *:hover { outline: none; }
    input:focus, textarea:focus { border-color: #6366f1 !important; }
    a:hover { color: #818cf8; }
    .nav-link:hover { color: #ffffff; }
    .primary-btn:hover, .submit-btn:hover { transform: translateY(-2px); box-shadow: 0 10px 30px rgba(99, 102, 241, 0.3); }
    .secondary-btn:hover { background: rgba(255, 255, 255, 0.1); }
    .about-card:hover { border-color: rgba(99, 102, 241, 0.3); transform: translateY(-4px); }
    .benefit-item:hover { border-color: rgba(99, 102, 241, 0.3); }
    .social-link:hover { background: rgba(99, 102, 241, 0.2); color: #818cf8; }
  `
  document.head.appendChild(style)
}
