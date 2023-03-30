import exp from "constants"

export const BurgerPrice = [
    {
        name: "hamburger", 
        basePrice: 5.0
    },
    {
        name: "cheesseburger", 
        basePrice: 6.0
    },
    {
        name: "chilli cheeseburger", 
        basePrice: 8.0   
    }
]

export const BurgerVariant = [
    {
        name: "small (s)", 
        shortName: 's',
        factor: 0.7
    },
    {
        name: "medium (m)", 
        shortName: 'm',
        factor: 1.0
    },
    {
        name: "large (l)", 
        shortName: 'l',
        factor: 1.3   
    }
]

export const PromotionCodes = [
    {
        type: 'promotion code',
        code: '3DF'
    },
    {
        type: 'promotion code',
        code: '2FG'
    },
]
export const DiscountCodes = [
    {
        type: 'discount code',
        code: '10PC',
        pc: 10
    },
    {
        type: 'discount code',
        code: '20PC',
        pc: 20
    },
    {
        type: 'discount code',
        code: '50PC', 
        pc: 20
    },
]