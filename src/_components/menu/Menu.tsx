import Link from 'next/link';
import React from 'react';
import styles from './Menu.module.css';
import SoundEffect from '@components/soundEffect/SoundEffect';

const Menu = ({
  className,
}: {
  className?: string;
}) => {
  return (
    <nav className={`${styles['menu']} ${className}`}>
      <ul className={styles['menu__list']}>
        <li className={styles['list__item']}>
          <Link className={styles['item__anchord']} href='/experiments'>
            Experimentos
          </Link>
        </li>
        <li className={styles['list__item']}>
            <SoundEffect className={styles['anchord__button']} />
        </li>
        <li className={styles['list__item']}>
          <Link className={styles['item__anchord']} href='/blog'>
            Blog
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
