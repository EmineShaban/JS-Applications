async function getInfo() {
    let stopID = document.getElementById('stopId').value
    let url = `http://localhost:3030/jsonstore/bus/businfo/${stopID}`

    let stopName = document.getElementById('stopName')
    let buses = document.getElementById('buses')
    try {
        buses.replaceChildren()
        let res = await fetch(url)

        if(res.status !== 200 ){
            throw new Error ('Stop ID not found!')
        }
        let data = await res.json()

        stopName.textContent = data.name
        Object.entries(data.buses).forEach(b => {
            let liElement = document.createElement('li')
            liElement.textContent = `Bus ${b[0]} arrives in ${b[1]} minutes`
            buses.appendChild(liElement)
        })
    } catch {
        stopName.textContent = 'Error'

    }
}