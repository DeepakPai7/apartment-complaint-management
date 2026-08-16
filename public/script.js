const API_URL = '/api/complaints';
const form = document.getElementById('complaintForm');
const list = document.getElementById('complaintsList');
const messageBox = document.getElementById('messageBox');

// Load complaints on startup
document.addEventListener('DOMContentLoaded', fetchComplaints);

function showMessage(msg, isSuccess) {
  messageBox.textContent = msg;
  messageBox.className = isSuccess ? 'success' : 'error';
  setTimeout(() => messageBox.className = 'hidden', 3000);
}

// 1. Fetch & Render (GET)
async function fetchComplaints() {
  try {
    const res = await fetch(API_URL);
    const result = await res.json();
    if (result.success) renderComplaints(result.data);
  } catch (err) {
    showMessage('Failed to load complaints', false);
  }
}

function renderComplaints(complaints) {
  list.innerHTML = complaints.length ? '' : '<p>No complaints found.</p>';
  complaints.forEach(c => {
    list.innerHTML += `
      <div class="complaint-item">
        <strong>${c.category} Issue - Room ${c.room_number}</strong> (${c.priority} Priority)
        <p>By: ${c.resident_name} | Date: ${new Date(c.created_at).toLocaleDateString()}</p>
        <p><em>${c.description}</em></p>
        
        <label>Status:</label>
        <select class="status-select" onchange="updateStatus(${c.id}, this.value)">
          <option value="Pending" ${c.status === 'Pending' ? 'selected' : ''}>Pending</option>
          <option value="In Progress" ${c.status === 'In Progress' ? 'selected' : ''}>In Progress</option>
          <option value="Resolved" ${c.status === 'Resolved' ? 'selected' : ''}>Resolved</option>
        </select>
        <button class="delete-btn" onclick="deleteComplaint(${c.id})">Delete</button>
      </div>
    `;
  });
}

// 2. Submit (POST)
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const payload = {
    resident_name: document.getElementById('resident_name').value,
    room_number: document.getElementById('room_number').value,
    contact_info: document.getElementById('contact_info').value,
    category: document.getElementById('category').value,
    priority: document.getElementById('priority').value,
    additional_info: document.getElementById('additional_info').value,
    description: document.getElementById('description').value
  };

  try {
    const res = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    
    const result = await res.json(); // Parse the backend response

    if (res.ok && result.success) {
      showMessage('Complaint Submitted!', true);
      form.reset();
      fetchComplaints();
    } else {
      // This will now catch Supabase/Backend errors and show them on the screen!
      showMessage(`Failed: ${result.message}`, false);
      console.error("Backend Error Details:", result);
    }
  } catch (err) {
    showMessage('Server error: Is the backend running?', false);
    console.error(err);
  }
});
// 3. Update Status (PUT)
async function updateStatus(id, newStatus) {
  await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ status: newStatus })
  });
  showMessage('Status Updated!', true);
}

// 4. Delete (DELETE)
async function deleteComplaint(id) {
  if (!confirm('Delete this complaint?')) return;
  await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
  showMessage('Complaint Deleted', true);
  fetchComplaints();
}