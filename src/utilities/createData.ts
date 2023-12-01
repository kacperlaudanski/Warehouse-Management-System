export function createData(
    number: number,
    supplier: string,
    address: string,
    deliveryDate: string,
    products: string,
    status: string
  ) {
    return { number, supplier, address, deliveryDate, products, status };
  }