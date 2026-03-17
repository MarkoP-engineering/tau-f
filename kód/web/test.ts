const app = document.getElementById("app") as HTMLDivElement;
navigator.geolocation.getCurrentPosition((pos:any) => {
    app.innerHTML = `Latitude: ${pos.coords.latitude}, Longitude: ${pos.coords.longitude}`;
    console.log(pos.coords.latitude, pos.coords.longitude);})

async function main() {
    while (true) {
        app.innerHTML = "Rocket is flying!<br>";
        await new Promise(resolve => setTimeout(resolve, 10));
    }
}

main();