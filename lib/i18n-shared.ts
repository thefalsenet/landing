export const supportedLocales = ["en", "ru", "uz"] as const;
export type SupportedLocale = (typeof supportedLocales)[number];
export const localeCookieName = "thefalse_locale";

export type LandingDictionary = {
  meta: {
    homeTitle: string;
    homeDescription: string;
    mobileTitle: string;
    mobileDescription: string;
    siteDescription: string;
  };
  header: {
    cta: string;
  };
  home: {
    title: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
  };
  howItWorks: {
    title: string;
    description: string;
    steps: Array<{
      title: string;
      description: string;
    }>;
  };
  beliefSection: {
    quote: string;
    description: string;
    cta: string;
  };
  libraryAgent: {
    title: string;
    description: string;
    cards: Array<{
      label: string;
      quote: string;
    }>;
  };
  faq: {
    title: string;
    intro: string;
    items: Array<{
      question: string;
      answer: string;
    }>;
  };
  cta: {
    title: string;
    button: string;
  };
  footer: {
    tagline: string;
    socialTitle: string;
    companyTitle: string;
    legalTitle: string;
    about: string;
    blog: string;
    contactUs: string;
    feedback: string;
    terms: string;
    privacy: string;
  };
  mobile: {
    label: string;
    title: string;
    description: string;
    formPlaceholder: string;
    formAriaLabel: string;
  };
};

export const landingCopy: Record<SupportedLocale, LandingDictionary> = {
  en: {
    meta: {
      homeTitle: "TheFalse · A home for readers.",
      homeDescription:
        "TheFalse is being rebuilt as a mobile reading product: read in the app, highlight what matters, reflect with continuity, and join early access to the beta.",
      mobileTitle: "TheFalse Mobile · Early access",
      mobileDescription:
        "Join early access for TheFalse Mobile, a calm reading product built around in-app reading, highlights, and reflection.",
      siteDescription:
        "TheFalse is being rebuilt as a mobile reading product for serious readers: read in the app, highlight what matters, reflect with continuity, and join early access to the beta.",
    },
    header: {
      cta: "Join early access",
    },
    home: {
      title: "A home for readers. Read here, think here.",
      description:
        "Track what you read, read inside the app, highlight what matters, reflect while a book is still alive — and find readers worth following without turning the experience into noise.",
      primaryCta: "Join early access",
      secondaryCta: "See what's changing",
    },
    howItWorks: {
      title: "What's changing",
      description:
        "TheFalse is narrowing into a mobile reading product: read here, highlight here, reflect here, and let community and AI support the reading loop instead of distracting from it.",
      steps: [
        {
          title: "Read inside the app",
          description:
            "TheFalse is moving to mobile so reading can happen here, not somewhere else first. Open a book, stay in the session, and let the interface get out of the way.",
        },
        {
          title: "Highlight and reflect",
          description:
            "Save the lines that matter, keep your place, and turn finishing a book into reflection instead of a forgotten checkmark.",
        },
        {
          title: "Discover through readers",
          description:
            "Community still matters, but it follows reading. Find books through thoughtful people, overlap, and real signals rather than generic popularity.",
        },
        {
          title: "Track a serious reading life",
          description:
            "Build a reading history that actually understands what you started, finished, revisited, and carried forward.",
        },
        {
          title: "Use the agent with context",
          description:
            "The Library Agent is meant to become useful because it understands your books, highlights, and patterns, not because it talks loudly.",
        },
      ],
    },
    beliefSection: {
      quote: '"What we believe today may turn out to be false tomorrow."',
      description:
        "Books are one of the few ways we stress-test that. TheFalse is built around the premise that intellectual humility is a practice, and reading is where it happens.",
      cta: "Join early access",
    },
    libraryAgent: {
      title:
        "The Library Agent knows your library. It's earned the right to say something.",
      description:
        "It doesn't return a list. It reasons over your actual reading history — every book finished, abandoned, every note — and says something specific to you.",
      cards: [
        {
          label: "Next book",
          quote:
            "\"You finished three books on institutional failure in a row. I'd read something that disagrees with that framing before continuing. Fukuyama's The Origins of Political Order would do it. Want me to add it?\"",
        },
        {
          label: "Library pattern",
          quote:
            "\"You have 14 books marked want-to-read that were added more than 2 years ago. Statistically, you will not read most of them. Do you want to review the list?\"",
        },
        {
          label: "Abandonment",
          quote:
            "\"You've been in chapter 6 for three weeks. The same thing happened with Leviathan last year. Do you want to push through or close it?\"",
        },
      ],
    },
    faq: {
      title: "FAQ",
      intro: "From early readers and people evaluating TheFalse.",
      items: [
        {
          question: "What is changing about TheFalse?",
          answer:
            "TheFalse is being rebuilt around mobile. The product direction is narrower now: in-app reading, highlights, reflection, thoughtful discovery, and a calmer experience that takes reading seriously.",
        },
        {
          question: "Why move to mobile first?",
          answer:
            "Because the next version of the product is meant to be where reading actually happens. The goal is not just to track books read elsewhere, but to let reading, notes, and reflection happen in one continuous flow.",
        },
        {
          question: "What does the name mean?",
          answer:
            "What we believe today may turn out to be false tomorrow. Books expose us to different perspectives, challenge assumptions, and expand how we see the world. TheFalse is a place where it's okay, even encouraged, to question what you think you know.",
        },
        {
          question: "Is this still a social reading product?",
          answer:
            "Yes, but reading comes first. Community should help you discover good books and thoughtful people, not turn the product into a generic engagement feed.",
        },
        {
          question: "Can I join now?",
          answer:
            "Yes. Early-access signups are open while the mobile product is taking shape. Joining the waitlist is the best way to hear when new reader cohorts open.",
        },
        {
          question: "Who is TheFalse for?",
          answer:
            "Readers who want more than a catalog and less than a noisy social app. If you care about highlighting, reflection, and building a reading history that feels intellectually useful, this is for you.",
        },
      ],
    },
    cta: {
      title: "Join the mobile reading beta.",
      button: "Join early access",
    },
    footer: {
      tagline: "A home for readers. Mobile, rebuilt with intention.",
      socialTitle: "Social",
      companyTitle: "Company",
      legalTitle: "Legal",
      about: "About",
      blog: "Blog",
      contactUs: "Contact Us",
      feedback: "Feedback",
      terms: "Terms",
      privacy: "Privacy",
    },
    mobile: {
      label: "Mobile",
      title: "A calm reading app, built for mobile.",
      description:
        "Early access is open while we shape the reading, highlights, and reflection loop.",
      formPlaceholder: "Join the waitlist…",
      formAriaLabel: "Email address for mobile waitlist",
    },
  },
  ru: {
    meta: {
      homeTitle: "TheFalse · Дом для читателей.",
      homeDescription:
        "TheFalse переосмысливается как мобильный продукт для чтения: читайте внутри приложения, выделяйте важное, возвращайтесь к мыслям и присоединяйтесь к раннему доступу.",
      mobileTitle: "TheFalse Mobile · Ранний доступ",
      mobileDescription:
        "Присоединяйтесь к раннему доступу TheFalse Mobile — спокойному приложению для чтения, построенному вокруг чтения внутри приложения, выделений и рефлексии.",
      siteDescription:
        "TheFalse переосмысливается как мобильный продукт для серьёзных читателей: чтение внутри приложения, важные выделения, связная рефлексия и ранний доступ к бете.",
    },
    header: {
      cta: "Получить ранний доступ",
    },
    home: {
      title: "Дом для читателей. Читайте здесь, размышляйте здесь.",
      description:
        "Отмечайте прочитанное, читайте внутри приложения, выделяйте важное, возвращайтесь к мыслям, пока книга ещё жива, и находите читателей, за которыми стоит следить, не превращая опыт в шум.",
      primaryCta: "Получить ранний доступ",
      secondaryCta: "Посмотреть, что меняется",
    },
    howItWorks: {
      title: "Что меняется",
      description:
        "TheFalse сужается до мобильного продукта для чтения: читать здесь, выделять здесь, размышлять здесь, а сообщество и ИИ должны поддерживать читательский цикл, а не отвлекать от него.",
      steps: [
        {
          title: "Читайте внутри приложения",
          description:
            "TheFalse уходит в мобильный формат, чтобы чтение происходило здесь, а не где-то ещё. Откройте книгу, оставайтесь в сессии и позвольте интерфейсу отойти на второй план.",
        },
        {
          title: "Выделяйте и осмысляйте",
          description:
            "Сохраняйте важные строки, не теряйте место и превращайте завершение книги в рефлексию, а не в забытую галочку.",
        },
        {
          title: "Открывайте книги через читателей",
          description:
            "Сообщество по-прежнему важно, но следует за чтением. Находите книги через вдумчивых людей, пересечения интересов и реальные сигналы, а не через общую популярность.",
        },
        {
          title: "Собирайте серьёзную читательскую историю",
          description:
            "Формируйте историю чтения, которая действительно понимает, что вы начали, закончили, к чему вернулись и что унесли с собой.",
        },
        {
          title: "Используйте агента с контекстом",
          description:
            "Library Agent должен быть полезным потому, что понимает ваши книги, выделения и паттерны, а не потому, что говорит громче всех.",
        },
      ],
    },
    beliefSection: {
      quote: "«То, во что мы верим сегодня, завтра может оказаться ложным.»",
      description:
        "Книги — один из немногих способов по-настоящему это проверять. TheFalse построен на идее, что интеллектуальная скромность — это практика, а чтение и есть место, где она формируется.",
      cta: "Получить ранний доступ",
    },
    libraryAgent: {
      title:
        "Library Agent знает вашу библиотеку. Он заслужил право сказать что-то по делу.",
      description:
        "Он не возвращает просто список. Он рассуждает на основе вашей реальной истории чтения — каждой законченной книги, каждого отложенного чтения, каждой заметки — и говорит что-то конкретное именно вам.",
      cards: [
        {
          label: "Следующая книга",
          quote:
            "«Вы подряд закончили три книги об институциональном провале. Я бы предложил дальше прочитать что-то, что спорит с этой рамкой. Для этого подойдёт The Origins of Political Order Фукуямы. Добавить?»",
        },
        {
          label: "Паттерн библиотеки",
          quote:
            "«У вас 14 книг в списке к прочтению, добавленных больше двух лет назад. Статистически большую часть из них вы не прочитаете. Хотите пересмотреть список?»",
        },
        {
          label: "Брошенное чтение",
          quote:
            "«Вы уже три недели на шестой главе. То же самое было с Leviathan в прошлом году. Хотите дожать книгу или закрыть её?»",
        },
      ],
    },
    faq: {
      title: "FAQ",
      intro: "Вопросы от ранних читателей и тех, кто присматривается к TheFalse.",
      items: [
        {
          question: "Что именно меняется в TheFalse?",
          answer:
            "TheFalse перестраивается вокруг мобильного опыта. Теперь направление продукта уже и точнее: чтение внутри приложения, выделения, рефлексия, осмысленное открытие книг и более спокойный интерфейс, который серьёзно относится к чтению.",
        },
        {
          question: "Почему сначала мобильная версия?",
          answer:
            "Потому что следующая версия продукта должна стать местом, где чтение действительно происходит. Цель не только в том, чтобы учитывать книги, прочитанные где-то ещё, а в том, чтобы чтение, заметки и рефлексия происходили в одном непрерывном потоке.",
        },
        {
          question: "Что означает название?",
          answer:
            "То, во что мы верим сегодня, завтра может оказаться ложным. Книги дают нам другие перспективы, оспаривают предположения и расширяют взгляд на мир. TheFalse — это место, где нормально, и даже важно, сомневаться в том, что кажется очевидным.",
        },
        {
          question: "Это всё ещё социальный продукт про чтение?",
          answer:
            "Да, но чтение на первом месте. Сообщество должно помогать открывать хорошие книги и вдумчивых людей, а не превращать продукт в очередную ленту ради вовлечения.",
        },
        {
          question: "Можно присоединиться уже сейчас?",
          answer:
            "Да. Ранний доступ открыт, пока мобильный продукт ещё формируется. Запись в лист ожидания — лучший способ узнать, когда откроются новые наборы пользователей.",
        },
        {
          question: "Для кого TheFalse?",
          answer:
            "Для читателей, которым нужно больше, чем каталог, и меньше, чем шумная социальная сеть. Если вам важны выделения, рефлексия и история чтения, которая ощущается интеллектуально полезной, этот продукт для вас.",
        },
      ],
    },
    cta: {
      title: "Присоединяйтесь к мобильной бете для чтения.",
      button: "Получить ранний доступ",
    },
    footer: {
      tagline: "Дом для читателей. Мобильное чтение, собранное заново с намерением.",
      socialTitle: "Соцсети",
      companyTitle: "Компания",
      legalTitle: "Юридическое",
      about: "О нас",
      blog: "Блог",
      contactUs: "Связаться с нами",
      feedback: "Обратная связь",
      terms: "Условия",
      privacy: "Конфиденциальность",
    },
    mobile: {
      label: "Мобильно",
      title: "Спокойное приложение для чтения, созданное для мобильного формата.",
      description:
        "Ранний доступ открыт, пока мы формируем цикл чтения, выделений и рефлексии.",
      formPlaceholder: "Присоединиться к листу ожидания…",
      formAriaLabel: "Email для листа ожидания мобильной версии",
    },
  },
  uz: {
    meta: {
      homeTitle: "TheFalse · Kitobxonlar uchun makon.",
      homeDescription:
        "TheFalse mobil o‘qish mahsuloti sifatida qayta qurilmoqda: ilova ichida o‘qing, muhim joylarni belgilang, fikrlarni davom ettiring va beta uchun erta kirishga qo‘shiling.",
      mobileTitle: "TheFalse Mobile · Erta kirish",
      mobileDescription:
        "TheFalse Mobile uchun erta kirishga qo‘shiling — ilova ichida o‘qish, belgilash va mulohaza atrofida qurilgan sokin o‘qish mahsuloti.",
      siteDescription:
        "TheFalse jiddiy kitobxonlar uchun mobil o‘qish mahsuloti sifatida qayta qurilmoqda: ilova ichida o‘qish, muhim joylarni belgilash, uzluksiz mulohaza va betaga erta kirish.",
    },
    header: {
      cta: "Erta kirish olish",
    },
    home: {
      title: "Kitobxonlar uchun makon. Shu yerda o‘qing, shu yerda fikr qiling.",
      description:
        "O‘qiganlaringizni kuzating, ilova ichida o‘qing, muhim joylarni belgilang, kitob hali tirik paytda mulohaza qiling va tajribani shovqinga aylantirmasdan kuzatishga arziydigan kitobxonlarni toping.",
      primaryCta: "Erta kirish olish",
      secondaryCta: "Nimalar o‘zgarayotganini ko‘rish",
    },
    howItWorks: {
      title: "Nima o‘zgarmoqda",
      description:
        "TheFalse mobil o‘qish mahsulotiga toraymoqda: shu yerda o‘qish, shu yerda belgilash, shu yerda mulohaza qilish, hamjamiyat va AI esa o‘qish siklini chalg‘itmasdan qo‘llab-quvvatlashi kerak.",
      steps: [
        {
          title: "Ilova ichida o‘qing",
          description:
            "TheFalse mobilga o‘tmoqda, shunda o‘qish boshqa joyda emas, aynan shu yerda sodir bo‘ladi. Kitobni oching, sessiyada qoling va interfeys ortga chekinsin.",
        },
        {
          title: "Belgilang va mulohaza qiling",
          description:
            "Muhim satrlarni saqlang, joyingizni yo‘qotmang va kitobni tugatishni unutilgan belgi emas, mulohazaga aylantiring.",
        },
        {
          title: "Kitoblarni kitobxonlar orqali toping",
          description:
            "Hamjamiyat hali ham muhim, lekin u o‘qishdan keyin keladi. Kitoblarni umumiy mashhurlik emas, o‘ylab o‘qiydigan odamlar, kesishuvlar va haqiqiy signallar orqali toping.",
        },
        {
          title: "Jiddiy o‘qish tarixini yarating",
          description:
            "Nimani boshlaganingizni, tugatganingizni, qayta ochganingizni va o‘zingiz bilan olib qolganingizni tushunadigan o‘qish tarixini yarating.",
        },
        {
          title: "Agentdan kontekst bilan foydalaning",
          description:
            "Library Agent baland ovozda gapirgani uchun emas, balki kitoblaringiz, belgilaringiz va odatlaringizni tushungani uchun foydali bo‘lishi kerak.",
        },
      ],
    },
    beliefSection: {
      quote: '"Bugun ishongan narsamiz ertaga yolg‘on bo‘lib chiqishi mumkin."',
      description:
        "Kitoblar buni sinovdan o‘tkazishning kam sonli yo‘llaridan biri. TheFalse intellektual kamtarlik amaliyot ekaniga, o‘qish esa aynan shu amaliyot sodir bo‘ladigan joy ekaniga tayanib qurilgan.",
      cta: "Erta kirish olish",
    },
    libraryAgent: {
      title:
        "Library Agent kutubxonangizni biladi. U biror narsa aytish huquqini ishlab topgan.",
      description:
        "U shunchaki ro‘yxat qaytarmaydi. U haqiqiy o‘qish tarixingiz — tugatilgan har bir kitob, tashlab qo‘yilgan har bir kitob, har bir izoh — ustidan fikr yuritadi va sizga xos gap aytadi.",
      cards: [
        {
          label: "Keyingi kitob",
          quote:
            "\"Siz ketma-ket institutlar muvaffaqiyatsizligi haqida uchta kitobni tugatdingiz. Davom etishdan oldin shu qarashga qarshi chiqadigan biror narsa o‘qishni tavsiya qilardim. Bunga Fukuyamaning The Origins of Political Order kitobi mos keladi. Qo‘shib qo‘yaymi?\"",
        },
        {
          label: "Kutubxona namunasi",
          quote:
            "\"Sizda 2 yildan ko‘proq oldin qo‘shilgan 14 ta want-to-read kitob bor. Statistik jihatdan, ularning ko‘pini o‘qimaysiz. Ro‘yxatni ko‘rib chiqishni xohlaysizmi?\"",
        },
        {
          label: "Tashlab qo‘yish",
          quote:
            "\"Uch haftadan beri 6-bobdasiz. O‘tgan yili Leviathan bilan ham xuddi shunday bo‘lgan edi. Oxirigacha borishni xohlaysizmi yoki yopamizmi?\"",
        },
      ],
    },
    faq: {
      title: "Savollar",
      intro: "TheFalse’ni baholayotgan dastlabki kitobxonlardan kelgan savollar.",
      items: [
        {
          question: "TheFalse’da aynan nima o‘zgarmoqda?",
          answer:
            "TheFalse mobil tajriba atrofida qayta qurilmoqda. Endi mahsulot yo‘nalishi torroq va aniqroq: ilova ichida o‘qish, belgilash, mulohaza, o‘ylangan kashfiyot va o‘qishga jiddiy qaraydigan sokinroq tajriba.",
        },
        {
          question: "Nega avval mobil yo‘nalish?",
          answer:
            "Chunki mahsulotning keyingi versiyasi o‘qish haqiqatan ham sodir bo‘ladigan joy bo‘lishi kerak. Maqsad faqat boshqa joyda o‘qilgan kitoblarni qayd etish emas, balki o‘qish, qaydlar va mulohazani bitta uzluksiz oqimga birlashtirish.",
        },
        {
          question: "Nom nimani anglatadi?",
          answer:
            "Bugun ishonayotgan narsamiz ertaga yolg‘on bo‘lib chiqishi mumkin. Kitoblar bizga boshqa nuqtai nazarlarni ko‘rsatadi, taxminlarni sinaydi va dunyoni ko‘rishimizni kengaytiradi. TheFalse — o‘zingiz aniq deb bilgan narsani savol ostiga qo‘yish mumkin bo‘lgan joy.",
        },
        {
          question: "Bu hali ham ijtimoiy o‘qish mahsulotimi?",
          answer:
            "Ha, lekin o‘qish birinchi o‘rinda. Hamjamiyat yaxshi kitoblar va o‘ylovchi odamlarni topishga yordam berishi kerak, mahsulotni navbatdagi jalb qilish lentasiga aylantirmasligi kerak.",
        },
        {
          question: "Hozir qo‘shilsa bo‘ladimi?",
          answer:
            "Ha. Mobil mahsulot hali shakllanayotgan paytda erta kirish ochiq. Kutish ro‘yxatiga yozilish yangi foydalanuvchi to‘lqinlari qachon ochilishini bilishning eng yaxshi yo‘li.",
        },
        {
          question: "TheFalse kimlar uchun?",
          answer:
            "Katalogdan ko‘prog‘ini, lekin shovqinli ijtimoiy tarmoqdan kamrog‘ini xohlaydigan kitobxonlar uchun. Agar sizga belgilash, mulohaza va intellektual jihatdan foydali tuyuladigan o‘qish tarixi muhim bo‘lsa, bu siz uchun.",
        },
      ],
    },
    cta: {
      title: "Mobil o‘qish betasiga qo‘shiling.",
      button: "Erta kirish olish",
    },
    footer: {
      tagline: "Kitobxonlar uchun makon. Mobil tajriba, niyat bilan qayta qurilgan.",
      socialTitle: "Ijtimoiy tarmoqlar",
      companyTitle: "Kompaniya",
      legalTitle: "Huquqiy",
      about: "Biz haqimizda",
      blog: "Blog",
      contactUs: "Bog‘lanish",
      feedback: "Fikr-mulohaza",
      terms: "Shartlar",
      privacy: "Maxfiylik",
    },
    mobile: {
      label: "Mobil",
      title: "Mobil uchun qurilgan sokin o‘qish ilovasi.",
      description:
        "O‘qish, belgilash va mulohaza siklini shakllantirayotganimizda erta kirish ochiq.",
      formPlaceholder: "Kutish ro‘yxatiga qo‘shiling…",
      formAriaLabel: "Mobil kutish ro‘yxati uchun email manzil",
    },
  },
};
