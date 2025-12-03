const orderList = document.getElementById('order-list');

async function fetchOrders() {
  const res = await fetch(`http://localhost:3000/orders?admin=${ADMIN_PASS}`);
  const orders = await res.json();
  showOrders(orders);
}

function showOrders(orders) {
  orderList.innerHTML = '';
  orders.forEach(order => {
    const div = document.createElement('div');
    div.className = 'order-box';
    div.innerHTML = `
      <p><strong>Bestellung #${order._id}</strong> – ${new Date(order.createdAt).toLocaleString()}</p>
      <ul>
        ${order.items.map(item => `<li>${item.name} (${item.size}) – ${item.price} € × ${item.quantity}</li>`).join('')}
      </ul>
      <p>Status: <strong>${order.status}</strong></p>
      ${order.status === 'pending' ? `
        <button onclick="updateStatus('${order._id}', 'accepted')">Annehmen</button>
        <button onclick="updateStatus('${order._id}', 'rejected')">Ablehnen</button>
      ` : `<p>✔️ Bereits ${order.status === 'accepted' ? 'angenommen' : 'abgelehnt'}</p>`}
    `;
    orderList.appendChild(div);
  });
}

async function updateStatus(orderId, status) {
  await fetch(`http://localhost:3000/order/${orderId}/status?admin=${ADMIN_PASS}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ status })
  });
  fetchOrders(); // neu laden
}

fetchOrders();
