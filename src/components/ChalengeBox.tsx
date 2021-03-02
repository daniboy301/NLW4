import styles from '../styles/components/ChalengeBox.module.css'

export function ChalengeBox() {
    const hasActiveChalenge = true;

    return (
        <div className={styles.chalengeBoxContainer}>
            { hasActiveChalenge ? (
                <div className={styles.chalengeActive}>
                    <header>Ganhe 400xp</header>

                    <main>
                        <img src="icons/body.svg"/>
                        <strong>Novo desafio</strong>
                        <p>Levante e faça uma caminhada de 3 minutos</p>
                    </main>

                    <footer>
                        <button 
                            type="button"
                            className={styles.challengeFailedButton}
                        >
                            Falhei
                        </button>
                        <button 
                            type="button"
                            className={styles.challengeSucceededButton}
                        >
                            Completei
                        </button>
                    </footer>
                </div>
            ) : (
                <div className={styles.chalengeNotActive}>
                    <strong>Finalize um ciclo para receber um desafio</strong>
                    <p>
                        <img src="icons/level-up.svg" alt="Level Up"/>
                        Avance de level completando desafios
                    </p>
                </div>
            ) }
        </div>
    );
}