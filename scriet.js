window.addEventListener("load", InternetConnectionChecking);

function InternetConnectionChecking() {
  const statusText = document.getElementById("StatusText");
  const ipadressText = document.getElementById("ipadressText");
  const NetworkpowerText = document.getElementById("NetworkpowerText");

  statusText.textContent = "Checking...";

  if (navigator.onLine) {
    // Online status
    fetch("https://api.ipify.org?format=json")
      .then((response) => response.json())
      .then((data) => {
        ipadressText.textContent = data.ip;
        statusText.textContent = "Connected";

        const connection = navigator.connection;
        NetworkpowerText.textContent = connection
          ? connection.downlink + " Mbps"
          : "Unknown";
      })
      .catch(() => {
        statusText.textContent = "Disconnected";
        ipadressText.textContent = "_";
        NetworkpowerText.textContent = "_";
      });
  } else {
    // Offline status
    statusText.textContent = "Disconnected";
    ipadressText.textContent = "_";
    NetworkpowerText.textContent = "_";
  }
}
