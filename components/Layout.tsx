import React from 'react';
import { PhotoStream } from '../lib/PhotoStream/PhotoStream';

import styles from './Layout.module.css';

export const Layout: React.FC = ({ children }) => (
  <div className={styles.container}>
    <div className={styles.background}>
      <div className={styles.spacer}> </div>
      <div className={styles.inner}>
        <PhotoStream
          // @ts-ignore
          imageList={[
            'images/20200715_195124.jpg',
            'images/20200715_194507.jpg',
            'images/20200726_162440.jpg',
            'images/20200715_193941.jpg',
            'images/20200715_192937.jpg', // 5th
            'images/20200726_173743.jpg',
            'images/20200726_174023.jpg',
            'images/20200715_193408.jpg',
            'images/20200726_183400.jpg',
          ]}
        />
      </div>
      <div className={styles.spacer}> </div>
    </div>
    <div className={styles.content}>
      <h1>Kiting mentoring</h1>
      <ul>
        <li>Snowkiting</li>
        <li>kiteboarding</li>
      </ul>
      <p>Contact at <a href="mailto:a@simpod.codes">a@simpod.codes</a></p>
    </div>
    {children}
  </div>
);
