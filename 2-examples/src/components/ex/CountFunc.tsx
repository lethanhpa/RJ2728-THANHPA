import React, { useEffect, useRef, useState } from "react";

type Props = {
  a?: number;
};

function CountFunc(props: Props) {
  const { a } = props;
  const [count, setCount] = useState(0);
  const timer = useRef<ReturnType<typeof setInterval>>();
  useEffect(() => {
    timer.current = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    return () => {
      if (timer.current) {
        clearInterval(timer.current);
      }
    };
  }, []);

  useEffect(()=>{
    console.log('ComponentDidUpdate');
  })

  useEffect(()=>{
    console.log('ComponentDidUpdate');
  },[count])

  return <div>CountFunc : {count}</div>;
}

export default CountFunc;
