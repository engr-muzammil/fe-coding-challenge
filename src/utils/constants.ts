export const BurgerPrice: any = [
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
] as const

export const BurgerVariant: any = [
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
] as const

export const PromotionCodes: any = [
    {
        type: 'promotion code',
        code: '3DF'
    },
    {
        type: 'promotion code',
        code: '2FG'
    },
] as const
export const DiscountCodes: any = [
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
] as const