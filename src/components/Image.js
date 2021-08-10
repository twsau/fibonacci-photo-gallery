import { useState } from 'react';

export default function Image(props) {
  const [loaded, setLoaded] = useState(false);
  // index, 
  return (
    <img
      alt={`fib-${props.index}`}
      className={`item n-${props.index} ${loaded ? 'loaded' : 'loading'}`}
      onLoad={() => setLoaded(true)}
      src={props.src}
    />
  );
}