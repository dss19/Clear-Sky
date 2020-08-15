import uuid from "uuid";

const initialState = {
  tableItems: 
  {
    artifacts: [
      {
        label: "Медальон",
        price1: 231660,
        price2: 162200,
        id: uuid()
      },
      {
        label: "Элемент",
        price1: 228800,
        price2: 160200,
        id: uuid()
      },
      {
        label: "Лунный свет",
        price1: 225940,
        price2: 158200,
        id: uuid()
      },
      {
        label: "Симбиот",
        price1: 217360,
        price2: 152200,
        id: uuid()
      },
      {
        label: "Кристалл",
        price1: 211640,
        price2: 148100,
        id: uuid()
      },
      {
        label: "Плоскость",
        price1: 208780,
        price2: 146100,
        id: uuid()
      },
      {
        label: "Золотой след",
        price1: 205920,
        price2: 144100,
        id: uuid()
      },
      {
        label: "Батарейка",
        price1: 203060,
        price2: 142100,
        id: uuid()
      },
      {
        label: "Волна",
        price1: 91520,
        price2: 64100,
        id: uuid()
      },
      {
        label: "Солнце",
        price1: 88660,
        price2: 62100,
        id: uuid()
      },
      {
        label: "Колючка",
        price1: 87230,
        price2: 61100,
        id: uuid()
      },
      {
        label: "Вермишель",
        price1: 82940,
        price2: 58100,
        id: uuid()
      },
      {
        label: "Петля",
        price1: 76080,
        price2: 53300,
        id: uuid()
      },
      {
        label: "Магма",
        price1: 77200,
        price2: 54100,
        id: uuid()
      },
      {
        label: "Глаз",
        price1: 76080,
        price2: 53300,
        id: uuid()
      },
      {
        label: "Вспышка",
        price1: 71500,
        price2: 50100,
        id: uuid()
      },
      {
        label: "Бактерия",
        price1: 68600,
        price2: 48000,
        id: uuid()
      },
      {
        label: "Слизь",
        price1: 40990,
        price2: 28700,
        id: uuid()
      },
      {
        label: "Огненный шар",
        price1: 40990,
        price2: 28700,
        id: uuid()
      },
      {
        label: "Всплеск ",
        price1: 40040,
        price2: 28000,
        id: uuid()
      },
      {
        label: "Кислинка",
        price1: 38610,
        price2: 27000,
        id: uuid()
      },
      {
        label: "Пружина",
        price1: 38320,
        price2: 26800,
        id: uuid()
      },
      {
        label: "Слюда",
        price1: 37180,
        price2: 26000,
        id: uuid()
      },
      {
        label: "Ломоть мяса",
        price1: 37180,
        price2: 26000,
        id: uuid()
      },
      {
        label: "Кустарник",
        price1: 37180,
        price2: 26000,
        id: uuid()
      },
      {
        label: "Золотая рыбка",
        price1: 34320,
        price2: 24000,
        id: uuid()
      },
      {
        label: "Пламя",
        price1: 34320,
        price2: 24000,
        id: uuid()
      },
      {
        label: "Каленая цепь",
        price1: 33750,
        price2: 23600,
        id: uuid()
      },
      {
        label: "Клубок",
        price1: 32890,
        price2: 23000,
        id: uuid()
      },
      {
        label: "Ушная сера",
        price1: 32890,
        price2: 23000,
        id: uuid()
      },
      {
        label: "Водоросль",
        price1: 31460,
        price2: 22000,
        id: uuid()
      },
      {
        label: "Рупор",
        price1: 30600,
        price2: 21400,
        id: uuid()
      },
      {
        label: "Электрон",
        price1: 22450,
        price2: 15700,
        id: uuid()
      },
      {
        label: "Колобок",
        price1: 22300,
        price2: 15600,
        id: uuid()
      },
      {
        label: "Жемчуг",
        price1: 22020,
        price2: 15400,
        id: uuid()
      },
      {
        label: "Слизняк",
        price1: 21740,
        price2: 15200,
        id: uuid()
      },
      {
        label: "Кровь",
        price1: 21160,
        price2: 14800,
        id: uuid()
      },
      {
        label: "Выверт",
        price1: 20590,
        price2: 14400,
        id: uuid()
      },
      {
        label: "Желудок",
        price1: 20300,
        price2: 14200,
        id: uuid()
      },
      {
        label: "Грави ",
        price1: 18880,
        price2: 13200,
        id: uuid()
      },
      {
        label: "Гниль",
        price1: 18590,
        price2: 13000,
        id: uuid()
      },
      {
        label: "Мамины бусы",
        price1: 18590,
        price2: 13000,
        id: uuid()
      },
      {
        label: "Капля",
        price1: 11150,
        price2: 7800,
        id: uuid()
      },
      {
        label: "Корка",
        price1: 10300,
        price2: 7200,
        id: uuid()
      },
      {
        label: "Пленка",
        price1: 10010,
        price2: 7000,
        id: uuid()
      },
      {
        label: "Репей",
        price1: 9720,
        price2: 6800,
        id: uuid()
      },
      {
        label: "Медуза",
        price1: 9150,
        price2: 6400,
        id: uuid()
      },      
    ],
    mutants: [
      {
        label: 'Мозг бюрера',
        price1: 135150,
        price2: 94600,
        id: uuid()
      },
      {
        label: 'Мозг контролера',
        price1: 104420,
        price2: 73100,
        id: uuid()
      },
      {
        label: 'Сердце кровососа',
        price1: 100000,
        price2: 70000,
        id: uuid()
      },
      {
        label: 'Рука излома',
        price1: 81080,
        price2: 56800,
        id: uuid()
      },
      {
        label: 'Щупальца кровососа',
        price1: 57900,
        price2: 40500,
        id: uuid()
      },
      {
        label: 'Рука бюрера',
        price1: 46800,
        price2: 32800,
        id: uuid()
      },
      {
        label: 'Шкура кровососа',
        price1: 29960,
        price2: 20300,
        id: uuid()
      },
      {
        label: 'Лапа волкодава',
        price1: 23700,
        price2: 19100,
        id: uuid()
      },
      {
        label: 'Рука снорка',
        price1: 15440,
        price2: 10800,
        id: uuid()
      },
      {
        label: 'Клык кабана',
        price1: 15440,
        price2: 10800,
        id: uuid()
      },
      {
        label: 'Мозг псевдособаки',
        price1: 12870,
        price2: 9000,
        id: uuid()
      },
      {
        label: 'Нога снорка',
        price1: 10300,
        price2: 7200,
        id: uuid()
      },
      {
        label: 'Железа кота',
        price1: 9880,
        price2: 6900,
        id: uuid()
      },
      {
        label: 'Лапа волка',
        price1: 9750,
        price2: 6800,
        id: uuid()
      },
      {
        label: 'Копыто кабана',
        price1: 7720,
        price2: 5400,
        id: uuid()
      },
      {
        label: 'Хвост псевдособаки',
        price1: 7400,
        price2: 5200,
        id: uuid()
      },
      {
        label: 'Печень собаки',
        price1: 6580,
        price2: 4600,
        id: uuid()
      },
      {
        label: 'Мех псевдособаки',
        price1: 6430,
        price2: 4500,
        id: uuid()
      },
      {
        label: 'Хвост кота',
        price1: 4930,
        price2: 3500,
        id: uuid()
      },
      {
        label: 'Глаз псевдоплоти',
        price1: 4390,
        price2: 3500,
        id: uuid()
      },
      {
        label: 'Шкура кабана',
        price1: 3860,
        price2: 2700,
        id: uuid()
      },
      {
        label: 'Хвост слепого пса',
        price1: 3300,
        price2: 2300,
        id: uuid()
      },
      {
        label: 'Коготь кота',
        price1: 2920,
        price2: 2000,
        id: uuid()
      },
      {
        label: 'Шкура собаки',
        price1: 2200,
        price2: 1500,
        id: uuid()
      },
      {
        label: 'Голова тушкана',
        price1: 2550,
        price2: 1800,
        id: uuid()
      },
      {
        label: 'Коготь тушкана',
        price1: 1100,
        price2: 800,
        id: uuid()
      },
      {
        label: 'Мясо тушкана',
        price1: 1100,
        price2: 800,
        id: uuid()
      }
    ]
  },
  
  term: ''
  
};

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case "ADD_ITEM": {     
      return {
        tableItems: [...state.tableItems, action.payload],
        term: state.term        
      }      
    }
    case "SEARCH": {
      return {
        tableItems: state.tableItems,
        term: action.payload
      }      
    }
    default:
      return state;
  }  
};

export default reducer;