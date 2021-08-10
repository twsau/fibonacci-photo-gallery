import { Button } from '@material-ui/core';
import Image from './components/Image';

export default function App() {
  let srcArr = [];
  let fibNum = fib(7);
  fibNum.splice(0, 1);
  fibNum.forEach(num => {
    let src = `https://picsum.photos/${num * 100}`;
    srcArr.push(src);
  });
  return (
    <>
      <div className="fib-container">
        {srcArr.map((src, index) =>
          <Image
            index={index}
            key={index}
            src={src}
          />
        )}
      </div>
      <Button
        color="primary"
        href={window.location.href}
        style={{ marginTop: '5rem' }}
        variant="contained"
      >
        refresh
      </Button>
    </>
  );
}

function fib(n) {
  if (n === 0) return [0]
  if (n === 1) return [0, 1]
  const arr = fib(n - 1)
  return [...arr, arr[n-1] + arr[n-2]]
}