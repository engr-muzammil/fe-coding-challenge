
import styles from '@/styles/Home.module.css'
export default function OrderSummary(props: any){
    return(
      <div>
        <h2>Order Summary</h2>
        <div>
          <div className={styles.justifycontentsummary}>
          <div>Burger</div>
          <div>Size</div>
          <div>Price</div>
          </div>
        {
          props.order.slice(1).map((e: { burger: string, size: string, total: number },index: number)=>{
            return <div key={index} className={styles.justifycontentsummary}>
                <div>{e.burger}</div><div>{e.size}</div><div>{e.total}</div>
            </div>
          })
        }
        </div>
      </div>
    );
  }