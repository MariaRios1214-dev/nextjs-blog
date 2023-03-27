import styles from './alertComponent.module.scss';
import { clsx } from 'clsx';

export default function AlertComponent({ children, type }) {
  return (
    <div
      className={clsx({
        [styles.success]: type === 'success',
        [styles.error]: type === 'error',
      })}
    >
      {children}
    </div>
  );
}