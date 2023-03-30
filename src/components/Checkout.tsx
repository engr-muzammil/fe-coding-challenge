import { BurgerPrice, BurgerVariant, DiscountCodes, PromotionCodes } from "@/utils/constants";
import { Grid, Button, Spacer, Input } from "@nextui-org/react";
import React from "react";
import Order from "./Order";
import OrderSummary from "./OrderSummary";

import styles from '@/styles/Home.module.css'
import PromotionsAndDiscounts from "./PromotionsAndDiscounts";
import TotalPriceCalculation from "./TotalPriceCalculation";
import { useRouter } from "next/router";

export default function Checkout(){

    const [order, setOrder] = React.useState([{burger: "test", size: "test", total: 0}]);
    const [promotion, setPromotion] = React.useState(0)
    const [discount, setDiscount] = React.useState(0)

    function AddPromotion(promotion: string){
      if(PromotionCodes.find(o => o.code == promotion) != null){
        setPromotion(order[1].total)
      }
      
    }
    function AddDiscount(discount: string){
      let code = DiscountCodes.find(o => o.code == discount)
      if(code != null){
        setDiscount(order.reduce((sum: number, object: any) => { return sum + object.total;}, 0)*(code.pc/100));
      }
    }
    function AddOrder(BurgerIndex: number, index: number){
      setOrder([...order,{burger:BurgerPrice[BurgerIndex].name,size:BurgerVariant[index].name, total: parseInt((BurgerPrice[BurgerIndex].basePrice*BurgerVariant[index].factor).toFixed(2))}])
    }
    let router= useRouter()
    // condition base redirecting
    function redirect() {
      router.push('/confirmation')
    }
    return(
      <>
      <Grid.Container gap={2} justify="center">
        <Grid xs={12} className={styles.center}>
          <h1>Finstreet Burger Challenge</h1>
        </Grid>
        <Grid xs={6} className={styles.noflex}>
          <Order AddOrder={AddOrder}/>
        </Grid>
        <Grid xs={6} className={styles.noflex}>
          <OrderSummary order={order}/>
        </Grid>
        <Grid xs={6} className={styles.noflex}>
          <PromotionsAndDiscounts AddPromotion={AddPromotion} AddDiscount={AddDiscount}/>
        </Grid>
        <Grid xs={6} className={styles.noflex}>
          <TotalPriceCalculation order={order} promotion={promotion} discount={discount}  />
        </Grid>
        <Grid xs={12} className={styles.center}>
          <Button onClick={redirect}>Checkout</Button>
        </Grid>
        </Grid.Container>
      </>
    )
  }