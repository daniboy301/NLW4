import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';

import styles from '../styles/components/Profile.module.css';

export function Profile() {
  const { level } = useContext(ChallengesContext);

  return (
    <div className={styles.profileContainer}>
      <img src="https://instagram.fvcp2-1.fna.fbcdn.net/v/t51.2885-19/s150x150/121230129_256505492438140_6199805916848387685_n.jpg?_nc_ht=instagram.fvcp2-1.fna.fbcdn.net&_nc_ohc=ZUL0RtJny9sAX_o9s6j&tp=1&oh=1b15ebe7942652356195948d9814a5b4&oe=6061061F" alt="Daniel dos Santos" />
      <div>
        <strong>Daniel dos Santos</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
                    Level {level}
        </p>
      </div>
    </div>
  );
}