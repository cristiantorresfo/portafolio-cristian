import "./Welcome.css"

function Welcome(){
    return (
        <main className="welcome lines line" id="welcome">
            <p>¡Hola!</p>
            <p>Soy Cristian Torres</p>
            <p>Desarrollador Web Frontend</p>
            <button className="corner-button" ><a href="#about">Sobre mí</a></button>
        </main>
    )
}

export default Welcome;