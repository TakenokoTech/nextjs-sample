import cn from 'classnames';
import styles from './AlertComponent.module.css';

export default function AlertComponent({ children, type }) {
  return (
    <div
      className={cn({
        [styles.success]: type === 'success',
        [styles.error]: type === 'error',
      })}
    >
      {children}
    </div>
  );
}
