export function formatPrice(price){
    return price.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
    });
}

export const foodItems = [
    {
        name: 'Barbecue',
        img: '/img/barbecue.jpg',
        section: 'Sides',
        price: 1
    },

    {
        name: 'Burger',
        img: '/img/burger.jpg',
        section: 'Sandwich',
        price: 1.4
    },

    {
        name: 'Pasta',
        img: '/img/pasta.jpg',
        section: 'Pizza',
        price: 2
    },

    {
        name: 'Pizza',
        img: '/img/pizza.jpg',
        section: 'Pizza',
        price: 3
    },

    {
        name: 'Rice-crispies',
        img: '/img/rice-crispies.jpg',
        section: 'Pizza',
        price: 2
    },

    {
        name: 'Sandwich',
        img: '/img/sandwich.jpg',
        section: 'Sandwich',
        price: 4
    },
    {
        name: 'Spaghetti Sauce',
        img: '/img/spaghetti-sauce.jpg',
        section: 'Sandwich',
        price: 6
    },

    {
        name: 'White Bowl',
        img: '/img/white-bowl.jpg',
        section: 'Sides',
        price: 3.5
    },
    {
        price: 1,
        name: 'Soda',
        section: 'Drinks',
        choices: ['Coke', 'Sprite', 'Root Beer']
    }
];

export const foods = foodItems.reduce((res, food) => {
        if(!res[food.section]){
            res[food.section] = [];
        }
        res[food.section].push(food);
        return res;
}, {});