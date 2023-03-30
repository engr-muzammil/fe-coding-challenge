import { BurgerPrice } from "@/utils/constants";
import BurgerCard from "./BurgerCard";

export default function Order(props: any){
    return(
      <>
      
        <h2>Orders</h2>
        <div>
        {
          BurgerPrice.map((burger,index)=>{
            return <div key={index}><BurgerCard BurgerIndex={index} {...burger} AddOrder={props.AddOrder}/></div>
          })
        }
        </div>
      </>
    );
  }