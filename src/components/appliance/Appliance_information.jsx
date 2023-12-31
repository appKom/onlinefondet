import styles from "./Appliance_information.module.css";

const HowToApply = () => {
    return (
        <div id={styles.body}>
            <h1 id={styles.title}>Hvordan søke om støtte?</h1>
            <p id={styles.description}>Alle Onlines medlemmer kan søke Onlines fond om penger. Søknaden skal være velbegrunnet og ha som hensikt å komme flest mulig medlemmer av Online til gode. 
                For at Fondstyre skal kunne ta en god avgjørelse trenger vi en helhetlig forståelse av hvem dere er og hva dere gjør. Skriv gjerne litt for mye, enn litt for lite. 
                Søknaden er kun gyldig dersom det søkes om mellom 10 000 kr og 100 000 kr. <br></br>
                <br></br>Dette skal være med i søknaden:
            </p>
            <ul id={styles.list}>
                <li>Beskriv av dere selv</li>
                <li>Hva midlene skal brukes til</li>
                <li>Hvordan midlene går onlinere til gode</li>
                <li>Aktivitetsplan</li>
                <li>Budsjett</li>
            </ul>
            <p id={styles.mail}>Søknader sendes til: fond@online.ntnu.no</p>
        </div>

    );
}


export default HowToApply;