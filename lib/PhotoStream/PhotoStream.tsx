import React, { Component } from 'react';

// Internal components
import { Photo } from './Photo';

import styles from './PhotoStream.module.css';

export class PhotoStream extends Component {
  // Renders the actual list of items.
  // If we receive a string, use that as the picture.
  // If we receive an object {image, altText} then we pass those as the respective props
  photos() {
    // @ts-ignore
    const { eventHandlers, imageList } = this.props;
    // eslint-disable react/destructuring-assignment
    if (imageList.length === 0) return null;

    // @ts-ignore
    return imageList.map((item) => (
      <Photo
        key={item}
        // @ts-ignore
        // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
        picture={item.image || item}
        // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
        altText={item.altText || undefined}
        // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
        eventHandlers={eventHandlers || {}}
      />
    ));
  }

  render() {
    return (
      <div className={styles.photostream}>
        {this.photos()}
      </div>
    );
  }
}
