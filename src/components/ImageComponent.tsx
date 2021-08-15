import Image from 'next/image';
import utilStyles from '../styles/utils.module.css';

export default function ImageComponent() {
  console.log(utilStyles.borderCircle);

  return (
    <Image
      className={utilStyles.borderCircle}
      src='/images/profile.jpg' // Route of the image file
      height={144} // Desired size with correct aspect ratio
      width={144} // Desired size with correct aspect ratio
      alt='Your Name'
    />
  );
}

// <Image priority src='/images/profile.jpg' className={utilStyles.borderCircle} height={144} width={144} alt={name} />;
