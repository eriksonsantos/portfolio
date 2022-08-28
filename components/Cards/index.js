import { SonyBodyCards, SonyTextCards, SonyTitleCards, SonyImgCards, SonyCards, SonyButton } from '../SonyComponents'
import styles from './Cards.module.scss'

export default function CardsPortfolio({ props }) {
  return (
    <div className={styles.Container}>
      <SonyCards className={styles.Cards}>
        <SonyImgCards className={styles.Image} variant="top" src={props.image} />
        <SonyBodyCards>
          <SonyTitleCards >{props.title}</SonyTitleCards>
          <SonyTextCards >
            {props.description}
          </SonyTextCards>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            
              <SonyButton href={props.link} variant="primary">GitHub</SonyButton>
          

            <SonyTextCards className={styles.language}>
              {props.language}
            </SonyTextCards>
          </div>
        </SonyBodyCards>
      </SonyCards>
    </div>
  );
}