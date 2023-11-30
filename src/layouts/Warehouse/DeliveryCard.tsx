import { X } from "lucide-react";
import Button from "../../components/Button";

type DeliveryCard = {
    deliveryID: string, 
    supplier: string, 
    address: string, 
    date: string
}

export default function DeliveryCard({deliveryID, supplier, address, date}: DeliveryCard){
    return (
        <>
        <div className="w-72 h-min-96 bg-neutral-100 m-4 p-4 rounded-xl flex flex-col justify-between items-start">
          <div className="w-full flex justify-between items-center">
            <h2 className="text-xl mb-2">Delivery: {deliveryID}</h2>
            <Button variant="ghost">
              <X />
            </Button>
          </div>
          <div className="w-full h-full flex flex-col justify-between items-start">
            <span className="text-sm">Supplier: {supplier}</span>
            <span className="text-sm">Address: {address}</span>
            <span className="text-sm">Date: {date}</span>
            <table className="w-full border-1 border-solid border-neutral-500 rounded-xl table-fixed my-5">
              <tbody>
                <tr className="bg-blue-300">
                  <td className="border-1 border-neutral-500 p-2">Product</td>
                  <td className="border-1 border-neutral-500 p-2">ID</td>
                  <td className="border-1 border-neutral-500 p-2">Location</td>
                </tr>
                <tr>
                  <td className="border-1 border-neutral-500 p-2">Cups</td>
                  <td className="border-1 border-neutral-500 p-2">48756</td>
                  <td className="border-1 border-neutral-500 p-2">R54</td>
                </tr>
                <tr>
                  <td className="border-1 border-neutral-500 p-2">Cups</td>
                  <td className="border-1 border-neutral-500 p-2">48756</td>
                  <td className="border-1 border-neutral-500 p-2">R54</td>
                </tr>
                <tr>
                  <td className="border-1 border-neutral-500 p-2">Cups</td>
                  <td className="border-1 border-neutral-500 p-2">48756</td>
                  <td className="border-1 border-neutral-500 p-2">R54</td>
                </tr>
              </tbody>
            </table>
          </div>
          <Button orders="complete">Complete an order</Button>
        </div>
      </>
    )
}