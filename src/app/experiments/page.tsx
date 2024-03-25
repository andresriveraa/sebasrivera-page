import Menu from '@components/menu/Menu';
import styles from './Experiments.module.css';
import Link from 'next/link';

const Page = () => {
  return (
    <div className={styles['experiments']}>
      <p className={styles['experiments__text']}>Próximamente</p>
      <Link href='/'>
        <button>Ir a inicio</button>
      </Link>
    </div>
  );
}

export default Page