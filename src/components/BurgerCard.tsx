import { BurgerVariant } from "@/utils/constants";
import { BurgerPriceProps } from "@/utils/types";
import { Card, Row, Button, Spacer, Text } from "@nextui-org/react";

export default function BurgerCard(props: BurgerPriceProps){
    return (
        <div key={'burger'+props.BurgerIndex}>
      <Card isHoverable variant="bordered" css={{ mw: "400px" }}>
      <Card.Header>
        <Text b>{props.name} ${props.basePrice}</Text>
      </Card.Header>
      <Card.Divider />
      <Card.Footer>
          <>
          {
            BurgerVariant.map((variant, index)=>{
              return <><Button size="xs"  key={'burger'+props.BurgerIndex+'size'+index} onClick={() => props.AddOrder(props.BurgerIndex, index)}>{variant.name}</Button><Spacer x={0.5}/></>
            })
          }
          </>
      </Card.Footer>
    </Card>
    </div>
    );
  }