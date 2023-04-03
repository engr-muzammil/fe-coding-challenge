
import styles from '@/styles/Home.module.css'
import { Card } from '@nextui-org/react';
export default function OrderSummary(props: any){
    return(
      <div>
        <h2>Order Summary</h2>
        <div>
          <div className={styles.justifycontentsummary}>
          <h4>Burger</h4>
          <h4>Size</h4>
          <h4>Price</h4>
          </div>
        {
          props.order.slice(1).map((e: { burger: string, size: string, total: number },index: number)=>{
            return <Card isHoverable variant="bordered" css={{ mh: "50px" }} key={index} > <Card.Body><div className={styles.justifycontentsummary}>
                <div>{e.burger}</div><div>{e.size}</div><div>{e.total}</div>
            </div>
            </Card.Body>
            </Card>
          })
        }
        </div>
      </div>
    );
  }