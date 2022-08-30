import './style.css';
import component from './component';

// document.body.appendChild(component());
const FastSpeedtest = require("fast-speedtest-api");

let speedtest = new FastSpeedtest({
    token: "YXNkZmFzZGxmbnNkYWZoYXNkZmhrYWxm", // required
    verbose: false, // default: false
    timeout: 10000, // default: 5000
    https: true, // default: true
    urlCount: 5, // default: 5b
    bufferSize: 8, // default: 8
    unit: FastSpeedtest.UNITS.Mbps // default: Bps
});

speedtest.getSpeed().then(s => {
   
    console.log(`Speed: ${s} Mbps`);
    document.getElementById("mySpeed").innerHTML=`${data} mbps`
    
}).catch(e => {
    console.error(e.message);
});