const isLocalhost =
  window.location.hostname === "localhost" ||
  window.location.hostname === "127.0.0.1";

const API_BASE = isLocalhost
  ? "http://localhost:5555"
  : "http://192.168.19.27:5555";
const Api = () => {
  // Your component code here
};

export { API_BASE, Api };
