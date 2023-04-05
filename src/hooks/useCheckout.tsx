import { BurgerPrice, BurgerVariant, DiscountCodes, PromotionCodes } from "@/utils/constants";
import { useRouter } from "next/router";
import React from "react";

export const useCheckout = () => {
    const [order, setOrder] = React.useState([{burger: "test", size: "test", total: 0}]);
    const [promotion, setPromotion] = React.useState(0)
    const [discount, setDiscount] = React.useState(0)
    const [promotionCodeNotValid, setPromotionCodeNotValid] = React.useState(false)
    const [discountCodeNotValid, setDiscountCodeNotValid] = React.useState(false)

    function AddPromotion(promotion: string){
      if(PromotionCodes.find((o: { code: string; }) => o.code == promotion) != null){
        setPromotion(order[1].total)
      } else setPromotionCodeNotValid(true)
      
    }
    function AddDiscount(discount: string){
      let code = DiscountCodes.find((o: { code: string; }) => o.code == discount)
      if(code != null){
        setDiscount(order.reduce((sum: number, object: any) => { return sum + object.total;}, 0)*(code.pc/100));
      } else setDiscountCodeNotValid(true)
    }
    function AddOrder(BurgerIndex: number, index: number){
      setOrder([...order,{burger:BurgerPrice[BurgerIndex].name,size:BurgerVariant[index].name, total: parseInt((BurgerPrice[BurgerIndex].basePrice*BurgerVariant[index].factor).toFixed(2))}])
    }
    let router= useRouter()
    // condition base redirecting
    function redirect() {
      router.push('/confirmation')
    }
    return {
        AddOrder,
        order,
        AddPromotion,
        AddDiscount,
        promotion,
        discount,
        redirect,
        promotionCodeNotValid,
        discountCodeNotValid
    }
}