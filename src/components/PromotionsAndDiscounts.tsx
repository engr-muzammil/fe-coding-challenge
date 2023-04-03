import { Button, Input, Spacer } from "@nextui-org/react"
import React from "react"

export default function PromotionsAndDiscounts(props: any){
    const [promotion, setPromotion] = React.useState(true)
    const [discount, setDiscount] = React.useState(true)
    const [inputPromotion, setInputPromotion] = React.useState('')
    const [inputDiscount, setInputDiscount] = React.useState('')
    return(
        <>
        <h2>Promotions and one Discounts</h2>
        {promotion?<Button size="xs" onClick={()=>setPromotion(!promotion)}>Add Promotion</Button>:<>
        <Input 
            value={inputPromotion} 
            status={props.promotionCodeNotValid?"error":"default"}
            color={props.promotionCodeNotValid?"error":"default"}
            helperColor={props.promotionCodeNotValid?"error":"default"}
            helperText={props.promotionCodeNotValid?"Promotion Code Invalid":""} 
            onChange={(e)=>setInputPromotion(e.target.value)} 
            clearable 
            placeholder="Add Promotion Code" />
        <Spacer x={0.1}/>
        <Button size="xs" onClick={()=>props.AddPromotion(inputPromotion)}>Apply</Button></>}
        <Spacer x={0.5}/>
        {discount?<Button size="xs" onClick={()=>setDiscount(!discount)}>Add Discount</Button>:<>
        <Input 
            value={inputDiscount}
            status={props.discountCodeNotValid?"error":"default"}
            color={props.discountCodeNotValid?"error":"default"}
            helperColor={props.discountCodeNotValid?"error":"default"}
            helperText={props.discountCodeNotValid?"Discount Code Invalid":""} 
            onChange={(e)=>setInputDiscount(e.target.value)} 
            clearable 
            placeholder="Add Discount Code" />
            <Spacer x={0.1}/>
            <Button size="xs" onClick={()=>props.AddDiscount(inputDiscount)}>Apply</Button></>}
        </>
    )
}