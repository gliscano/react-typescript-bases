import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

const MAX_COUNT = 10;

export const CounterEffect = () => {
  const [counter, setCounter] = useState(5);
  const counterElement = useRef<HTMLHeadingElement>(null);

  const handleClick = () => {
    setCounter((prev) => Math.min(prev + 1, MAX_COUNT));
  };

  useEffect(() => {
    if ( counter < MAX_COUNT ) return;

    const timeline = gsap.timeline();

    timeline.to(counterElement.current, { y: -10, duration: 0.2, ease: 'ease.out' })
      .to(counterElement.current, { y: 10, duration: 0.2, ease: 'bounce.out' });
      ;
  }, [counter]);

  return (
    <div style={{ margin: '15px'}}>
      <h2> useEffect - useRef</h2>
      <hr />
      <button
        style={{ marginRight: '15px' }}
        onClick={handleClick}
      >
        +1
      </button>
      <small>Counter (Max.: 10): </small>
      <h4 ref={ counterElement }> {counter} </h4>
      <hr />
    </div>
  )
}
