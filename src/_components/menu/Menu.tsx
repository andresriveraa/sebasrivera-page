import Link from 'next/link';
import React from 'react'
import styles from './Menu.module.css';


const Menu = ({
  className,
  isHome,
}: {
  className?: string;
  isHome?: boolean;
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
          <Link className={styles['item__anchord']} href='/blog'>
            Blog
          </Link>
        </li>
        {!isHome && (
          <li className={styles['list__item']}>
            <Link className={styles['item__anchord']} href='/'>
              Inicio
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Menu;
