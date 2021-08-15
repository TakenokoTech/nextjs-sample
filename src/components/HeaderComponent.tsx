import { ReactNode } from 'react';
import style from './HeaderComponent.module.css';

export enum HeaderSize {
  Size2Xl,
  SizeXL,
  SizeLg,
}

interface Props {
  size: HeaderSize;
  children: ReactNode;
}

export default function HeaderComponent({ size, children }: Props) {
  switch (size) {
    case HeaderSize.Size2Xl:
      return <h1 className={style.heading2Xl}>{children}</h1>;
    case HeaderSize.SizeXL:
      return <h1 className={style.headingXL}>{children}</h1>;
    case HeaderSize.SizeLg:
      return <h2 className={style.headingLg}>{children}</h2>;
  }
}
