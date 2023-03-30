export default function TotalPriceCalculation(props: any){
    return(
        <>
        <h2>Total: {props.order.reduce((sum: number, object: any) => { return sum + object.total;}, 0)}</h2>
        {props.promotion?<h3>Promotion: {props.promotion}</h3>:<></>}
        {props.discount?<h3>Discount: {props.discount}</h3>:<></>}
        <h2>Grand Total: {props.order.reduce((sum: number, object: any) => { return sum + object.total;}, 0)-props.discount-props.promotion}</h2>
        </>
    );
}