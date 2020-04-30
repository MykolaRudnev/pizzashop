export const foodItems = [
    {
        name: 'Barbecue',
        img: '/img/barbecue.jpg',
        section: 'Sides'
    },

    {
        name: 'Burger',
        img: '/img/burger.jpg',
        section: 'Sandwich'
    },

    {
        name: 'Pasta',
        img: '/img/pasta.jpg',
        section: 'Pizza'
    },

    {
        name: 'Pizza',
        img: '/img/pizza.jpg',
        section: 'Pizza'
    },

    {
        name: 'Rice-crispies',
        img: '/img/rice-crispies.jpg',
        section: 'Pizza'
    },

    {
        name: 'Sandwich',
        img: '/img/sandwich.jpg',
        section: 'Sandwich'
    },
    {
        name: 'Spaghetti Sauce',
        img: '/img/spaghetti-sauce.jpg',
        section: 'Sandwich'
    },

    {
        name: 'White Bowl',
        img: '/img/white-bowl.jpg',
        section: 'Sides'
    }
];

export const foods = foodItems.reduce((res, food) => {
        if(!res[food.section]){
            res[food.section] = [];
        }
        res[food.section].push(food);
        return res;
}, {});