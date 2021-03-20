import React from 'react';

import styles from './Photo.module.css';

// Component of a photo in the stream
export class Photo extends React.Component {
  constructor(props) {
    super(props);
    this.ReturnBoundEventHandlerOrUndefined = this.ReturnBoundEventHandlerOrUndefined.bind(this);
  }

  // Return a function that takes 'event' and calls the eventHandler with that event as an arg
  ReturnBoundEventHandlerOrUndefined(eventHandler) {
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (! eventHandler) return undefined;

    return (event) => {
      eventHandler(event, this);
    };
  }

  render() {
    // Destructure values from props
    // @ts-ignore
    const { picture, altText } = this.props;

    return (
      <img
        className={styles.photo}
        src={picture}
        alt={altText}
      />
    );
  }
}
