
import { Grid, Button } from "@nextui-org/react";
import React from "react";
import Order from "./Order";
import OrderSummary from "./OrderSummary";

import styles from '@/styles/Home.module.css'
import PromotionsAndDiscounts from "./PromotionsAndDiscounts";
import TotalPriceCalculation from "./TotalPriceCalculation";
import { useCheckout } from "@/hooks/useCheckout";

export default function Checkout(){

  const {
    AddOrder,
    order,
    AddPromotion,
    AddDiscount,
    promotion,
    discount,
    redirect,
    promotionCodeNotValid,
    discountCodeNotValid
  } = useCheckout();
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
        <PromotionsAndDiscounts AddPromotion={AddPromotion} AddDiscount={AddDiscount} promotionCodeNotValid={promotionCodeNotValid} discountCodeNotValid={discountCodeNotValid}/>
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