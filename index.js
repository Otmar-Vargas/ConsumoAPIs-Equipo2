const axios = require('axios');
const url = 'https://api-rest-ordenes-detalles-compra.onrender.com/apiV1';

async function getOrders() {
  try {
    const response = await axios.get(`${url}/orders`);
    console.log('Todas las órdenes:', response.data);
  } catch (error) {
    console.error('Error al obtener órdenes:', error.message);
  }
}

async function getOrderById(id) {
  try {
    const response = await axios.get(`${url}/orders/${id}`);
    console.log(`Orden ${id}:`, response.data);
  } catch (error) {
    console.error(`Error al obtener la orden ${id}:`, error.message);
  }
}

async function getOrderProducts(id) {
  try {
    const response = await axios.get(`${url}/orders/${id}/productos`);
    console.log(`Productos de la orden ${id}:`, response.data);
  } catch (error) {
    console.error(`Error al obtener productos de la orden ${id}:`, error.message);
  }
}

async function getOrderDiscounts(id) {
  try {
    const response = await axios.get(`${url}/orders/${id}/descuentos`);
    console.log(`Descuentos de la orden ${id}:`, response.data);
  } catch (error) {
    console.error(`Error al obtener descuentos de la orden ${id}:`, error.message);
  }
}

async function getOrderShippingStatus(id) {
  try {
    const response = await axios.get(`${url}/orders/${id}/envio`);
    console.log(`Estado de envío de la orden ${id}:`, response.data);
  } catch (error) {
    console.error(`Error al obtener el estado de envío de la orden ${id}:`, error.message);
  }
}

async function createOrder(orderData) {
  try {
    const response = await axios.post(`${url}/orders`, orderData);
    console.log('Orden creada:', response.data);
  } catch (error) {
    console.error('Error al crear la orden:', error.message);
  }
}

async function updateOrder(id, orderData) {
  try {
    const response = await axios.put(`${url}/orders/${id}`, orderData);
    console.log(`Orden ${id} actualizada:`, response.data);
  } catch (error) {
    console.error(`Error al actualizar la orden ${id}:`, error.message);
  }
}

async function deleteOrder(id) {
  try {
    const response = await axios.delete(`${url}/orders/${id}`);
    console.log(`Orden ${id} eliminada:`, response.data);
  } catch (error) {
    console.error(`Error al eliminar la orden ${id}:`, error.message);
  }
}

async function updateOrderStatus(id, statusData) {
  try {
    const response = await axios.put(`${url}/orders/${id}/status`, statusData);
    console.log(`Estado actualizado de la orden ${id}:`, response.data);
  } catch (error) {
    console.error(`Error al actualizar el estado de la orden ${id}:`, error.message);
  }
}

async function applyOrderDiscount(id, discountData) {
  try {
    const response = await axios.put(`${url}/orders/${id}/descuento`, discountData);
    console.log(`Descuento aplicado a la orden ${id}:`, response.data);
  } catch (error) {
    console.error(`Error al aplicar descuento a la orden ${id}:`, error.message);
  }
}

async function main() {
  const nuevaOrden = {
    clienteId: "67890",
    fechaPedido: "2025-03-18T14:30:00Z",
    total: 3000,
    estado: "Pendiente",
    productos: [
      {
        productoId: "A1B2C3",
        nombre: "Teclado Mecánico",
        cantidad: 1,
        precioUnitario: 1200
      }
    ],
    descuentosAplicados: [
      {
        codigo: "PROMO10",
        porcentaje: 10,
        valorDescuento: 300
      }
    ],
    estadoEnvio: {
      estadoActual: "En tránsito",
      fechaEstimacion: "2024-03-05T18:00:00Z"
    }
  };

  await getOrders();
  await createOrder(nuevaOrden);
  await getOrderById("vnlzzdTl5m90hoKSyBXW");
  await getOrderProducts("vnlzzdTl5m90hoKSyBXW");
  await getOrderDiscounts("vnlzzdTl5m90hoKSyBXW");
  await getOrderShippingStatus("vnlzzdTl5m90hoKSyBXW");
  await updateOrderStatus("vnlzzdTl5m90hoKSyBXW", { estado: "Enviado" });
  await applyOrderDiscount("vnlzzdTl5m90hoKSyBXW", { codigo: "PROMO20", porcentaje: 20, valorDescuento: 500 });
  await updateOrder("vnlzzdTl5m90hoKSyBXW", { estado: "Confirmada" });
  await deleteOrder("vnlzzdTl5m90hoKSyBXW");
}

main();
