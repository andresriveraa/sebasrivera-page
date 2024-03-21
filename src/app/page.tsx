import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles['main__gradient']}>
        <svg
          id='Layer_1'
          data-name='Layer 1'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1279 203'
          preserveAspectRatio='xMidYMid meet'
          width='100vw'
          height='100vh'
        >
          <defs>
            <linearGradient
              id='linear-gradient'
              x1='0'
              x2='1920'
              gradientUnits='userSpaceOnUse'
            >
              <stop offset='0%' stop-color='#455482' />
              <stop offset='30%' stop-color='#f4dcf5' />
              <stop offset='100%' stop-color='#455482' />
              <animate
                attributeName='x1'
                values='-1020; 0; 1020'
                dur='10s'
                repeatCount='indefinite'
              />
              <animate
                attributeName='x2'
                values='-960; 960; 1920'
                dur='10s'
                repeatCount='indefinite'
              />
            </linearGradient>
          </defs>
          <polyline
            fill='none'
            stroke='url(#linear-gradient)'
            className={styles['gradient__polyline']}
            points='.17 20 540.82 24.5 799.04 183 1279.17 183'
          />
        </svg>
      </div>

      <nav className={styles['main__menu']}>
        <ul className={styles['menu__list']}>
          <li className={styles['list__item']}>
            <Link href='/blog'>Blog</Link>
          </li>
        </ul>
      </nav>

      <h1 className={styles['main__title']}>Sebas Rivera</h1>

      <section className={styles['main__skills']}>
        <p className={styles['skills__item']}>Ui Engineer</p>
        <p className={styles['skills__item']}>Frontend developer</p>
        <p className={styles['skills__item']}>Creative Technology</p>
      </section>

      <section className={styles['main__contact']}>
        <a className={styles['contact__item']} href='mailto:hi@sebasrivera.com'>
          Hi@SebasRivera.com
        </a>
        <a
          className={styles['contact__item']}
          href='https://www.linkedin.com/in/sebasrivvera/'
        >
          @sebasrivvera
        </a>
      </section>
    </main>
  );
}
