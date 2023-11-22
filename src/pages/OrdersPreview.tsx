import OrderCard from "../layouts/Orders/OrderCard";
import Main from "./Main";

export default function OrdersPreview() {
  return (
    <Main>
      <div className="w-full h-screen bg-white p-8 rounded-tl-3xl rounded-bl-3xl flex flex-col overflow-y-hidden">
        <h1 className="text-2xl tracking-wider">Orders | Preview</h1>
        <div className="w-max h-full grid auto-rows-auto grid-cols-4 mt-8">
          <OrderCard /> 
          <OrderCard /> 
          <OrderCard /> 
          <OrderCard /> 
          <OrderCard /> 
        </div>
      </div>
    </Main>
  );
}
