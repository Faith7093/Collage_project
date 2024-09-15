const backendurl = import.meta.env.VITE_BACKEND_URL


useEffect(() => {
    fetch('${backendUrl}/api/endpoint/')
    .then(response => response.json())
    .then(data => console.log(data));
},[]);


export default App1;