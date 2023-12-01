export function createDeliveryData(
    number: number,
    supplier: string,
    address: string,
    deliveryDate: string,
    products: string,
    status: string
  ) {
    return { number, supplier, address, deliveryDate, products, status };
  }

  export function createReturnsData(
    number: number,
    name: string,
    address: string,
    description: string,
    products: string,
  ) {
    return { number, name, address, description, products};
  }

  export function createStockData(
    number: number,
    product: string, 
    id: string,
    description: string,
    location: string, 
    stock: number, 
  ) {
    return { number, product, id, description, location, stock }
  }

  export function createHistoryData(
    number: number,
    id: string,
    client: string,
    address: string,
    status: string,
    date: string
  ) {
    return { number, id, client, address, status, date };
  }
  
  export function createSuppliersData(
    number: number,
    name: string,
    address: string,
    products: string, 
  ) {
    return { number, name, address, products};
  }
  