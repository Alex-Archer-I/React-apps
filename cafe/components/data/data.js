/* 
1. Бургеры
2. Пицца
3. Закуски
4. Напитки
5. Мороженное
6. Роллы
7. Салаты
*/

import burger from '../../icons/menu-icons/burger.png';
import drink from '../../icons/menu-icons/drink.png';
import ice_cream from '../../icons/menu-icons/ice_cream.png';
import pizza from '../../icons/menu-icons/pizza.png';
import roll from '../../icons/menu-icons/roll.png';
import salad from '../../icons/menu-icons/salad.png';
import snack from '../../icons/menu-icons/snack.png';

const menuData = {
    burger: [
        {
            name: 'Классический бургер',
            price: 100,
            id: 1,
            img: burger
        },
        {
            name: 'Двойной бургер',
            price: 150,
            id: 2,
            img: burger
        },
        {
            name: 'Чизбургер',
            price: 70,
            id: 3,
            img: burger
        },
        {
            name: 'Куриный бургер',
            price: 70,
            id: 4,
            img: burger
        }
    ],
    pizza: [
        {
            name: 'Четыре сыра',
            price: 100,
            id: 5,
            img: pizza
        },
        {
            name: 'Пицца-салями',
            price: 200,
            id: 6,
            img: pizza
        },
        {
            name: 'Пицца с морепродуктами',
            price: 300,
            id: 7,
            img: pizza
        }
    ],
    salad: [
        {
            name: 'Цезарь',
            price: 250,
            id: 8,
            img: salad
        },
        {
            name: 'Салат с морепродуктами',
            price: 350,
            id: 9,
            img: salad
        },
        {
            name: 'Греческий',
            price: 250,
            id: 10,
            img: salad
        }
    ],
    snack: [
        {
            name: 'Картошка фри (маленькая)',
            price: 50,
            id: 11,
            img: snack
        },
        {
            name: 'Картошка фри (средняя)',
            price: 70,
            id: 12,
            img: snack
        },
        {
            name: 'Картошка фри (большая)',
            price: 100,
            id: 13,
            img: snack
        }
    ],
    roll: [
        {
            name: 'Калифорния',
            price: 300,
            id: 14,
            img: roll
        },
        {
            name: 'Роллы с тунцом',
            price: 400,
            id: 15,
            img: roll
        },
        {
            name: 'Роллы с крабом',
            price: 400,
            id: 16,
            img: roll
        },
        {
            name: 'Запеченые роллы',
            price: 500,
            id: 17,
            img: roll
        },
    ],
    ice_cream: [
        {
            name: 'Фисташковое',
            price: 70,
            id: 18,
            img: ice_cream
        },
        {
            name: 'Фруктовое',
            price: 70,
            id: 19,
            img: ice_cream
        },
        {
            name: 'Шоколадное',
            price: 70,
            id: 20,
            img: ice_cream
        },
    ],
    drink: [
        {
            name: 'Минеральная вода',
            price: 50,
            id: 21,
            img: drink
        },
        {
            name: 'Молочный коктейль',
            price: 100,
            id: 22,
            img: drink
        },
        {
            name: 'Сок',
            price: 100,
            id: 23,
            img: drink
        },
    ]
}

const getMenuByName = (name) => {
    return menuData[name];
}

const getMenuById = (id) => {
    let obj;
    Object.values(menuData).forEach(item => {
        item.forEach(i => {
            if (i.id === id) {
                obj = i;
            }
        });
    })
    return obj;
}

export {getMenuByName, getMenuById};