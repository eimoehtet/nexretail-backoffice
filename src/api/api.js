const iPAddress= localStorage.getItem('nexretailServer');
console.log("Ip address:",iPAddress);
// export const api=iPAddress ? `${iPAddress}:8080/api` : 'http://localhost:8080/api';
export const api= `http://${iPAddress||'localhost'}:8080/api`;