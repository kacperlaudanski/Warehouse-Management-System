import OrderCard from "../layouts/Orders/OrderCard";
import Main from "./Main";

export default function OrdersPreview() {
  return (
    <Main>
      <div className="w-full h-screen bg-white p-8 rounded-tl-3xl rounded-bl-3xl flex flex-col overflow-y-hidden">
        <h1 className="text-2xl tracking-wider">Orders | Preview</h1>
        <div className="w-max h-full grid auto-rows-auto grid-cols-4 mt-8">
          <OrderCard orderID="RS3535" orderer="John Kovalsky" address="Hollywood Blvd 1234" date="11.11.2023"/> 
          <OrderCard orderID="RS3535" orderer="John Kovalsky" address="Hollywood Blvd 1234" date="11.11.2023"/> 
          <OrderCard orderID="RS3535" orderer="John Kovalsky" address="Hollywood Blvd 1234" date="11.11.2023"/> 
          <OrderCard orderID="RS3535" orderer="John Kovalsky" address="Hollywood Blvd 1234" date="11.11.2023"/> 
          <OrderCard orderID="RS3535" orderer="John Kovalsky" address="Hollywood Blvd 1234" date="11.11.2023"/> 
        </div>
      </div>
    </Main>
  );
}
