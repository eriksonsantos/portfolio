import { SonyBodyCards, SonyTextCards, SonyTitleCards, SonyImgCards, SonyCards, SonyButton } from '../SonyComponents'
import styles from './Cards.module.scss'

export default function CardsPortfolio({ props }) {
  return (
    <div className={styles.Container}>
      <SonyCards className={styles.Cards} style={{ width: '20rem' }}>
        <SonyImgCards variant="top" src={props.image} />
        <SonyBodyCards>
          <SonyTitleCards >{props.title}</SonyTitleCards>
          <SonyTextCards >
            {props.description}
          </SonyTextCards>
          <SonyButton variant="primary">GitHub</SonyButton>
        </SonyBodyCards>
      </SonyCards>
    </div>
  );
}