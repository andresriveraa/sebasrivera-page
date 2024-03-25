import Menu from '@components/menu/Menu';
import styles from './blog.module.css';
import Link from 'next/link';

const Page = () => {
  return (
    <div className={styles['blog']}>
      <p className={styles['blog__text']}>Próximamente</p>
      <Link href='/'>
        <button>Ir a inicio</button>
      </Link>
    </div>
  );
}

export default Page