const API_URL = "https://YOUR-BACKEND.onrender.com/logs";

async function fetchLogs() {
  const res = await fetch(API_URL);
  const logs = await res.json();

  const list = document.getElementById("logs");
  list.innerHTML = "";

  logs.forEach(log => {
    const li = document.createElement("li");
    li.textContent = `${log.date}: ${log.text}`;
    list.appendChild(li);
  });
}

async function addLog() {
  const date = document.getElementById("date").value;
  const text = document.getElementById("text").value;

  await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ date, text })
  });

  fetchLogs();
}

fetchLogs();
