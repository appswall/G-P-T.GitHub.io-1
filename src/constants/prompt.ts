import { Prompt } from '@type/prompt';

// prompts from https://github.com/f/awesome-chatgpt-prompts
const defaultPrompts: Prompt[] = [
  {
    id: '1',
    name: '❤️Совместимость',
    prompt:
      'Меня зовут [ например: Юля ], а моего друга [ например: Юра ], какая у нас совместимость?',
  },
  {
    id: '2',
    name: '🤪Психолог',
    prompt:
      'Я хочу, чтобы ты действовал как психолог. я поделюсь с вами своими мыслями. Я хочу, чтобы ты дал мне научные предложения, которые помогут мне почувствовать себя лучше. моя первая мысль, [ например: как найти свою любовь ]',
  },
  {
    id: '3',
    name: '👩‍⚖️Юрист',
    prompt:
      'Учитывая [ опишите событие ], какие законные меры, согласно законам РФ, я могу предпринять?',
  },
  {
    id: '4',
    name: '💻Программист',
    prompt:
      'Предоставь пошаговые инструкции и напиши код - для [ например тетрис ]?',
  },
  {
    id: '5',
    name: '🧑‍🍳Шеф-повар',
    prompt:
      'Мне нужен кто-то, кто может предложить вкусные рецепты, включающие продукты, которые полезны с точки зрения питания, но при этом просты и не отнимают много времени, поэтому подходят для таких занятых людей, как мы, помимо других факторов, таких как экономическая эффективность, так что в целом блюдо получается полезным и в то же время экономичным! Моя первая просьба – [ например: что-нибудь легкое, но сытное, что можно было бы быстро приготовить во время обеденного перерыва ]',
  },
  {
    id: '6',
    name: '👩‍🍳Диетолог',
    prompt:
      'Как диетолог, я хотел бы разработать [ например: вегетарианский рецепт на 2 персоны, в котором содержится приблизительно 500 калорий на порцию и низкий гликемический индекс ]. Не могли бы вы, пожалуйста, предложить?',
  },
  {
    id: '7',
    name: '🔮Астролог',
    prompt:
      '"Я хочу, чтобы ты выступил в роли астролога. Вы узнаете о знаках зодиака и их значениях, поймете положения планет и то, как они влияют на человеческие жизни, сможете точно интерпретировать гороскопы и делиться своими соображениями с теми, кто ищет руководства или консультации. Мое первое предложение звучит так: ""Мне нужна помощь в предоставлении углубленного чтения для клиента, заинтересованного в развитии карьеры на основе их карты рождения [ например: 17.02.2000 ]',
  },
  {
    id: '8',
    name: '🛌Сонник',
    prompt:
      'Мне сегодня приснилось [ например: вода ] напиши, что это значит, на основе сонников - которые имеют положительные отзывы и высокие рейтинги', 
  },
];

export default defaultPrompts;