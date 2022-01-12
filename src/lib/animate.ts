interface IAnimateProps {
  draw: (progress: number) => void,
  timing?: 'linear' | 'easeIn' | 'easeOut',
  duration?: number,
}

type TAnimateFunc = (props: IAnimateProps) => void;

const timings = {
  linear: (p: number) => p,
  easeIn: (p: number) => p ** 2,
  easeOut: (p: number) => 1 - (p ** 2),
};

const animate: TAnimateFunc = (props) => {
  const { draw, timing = 'linear', duration = 200 } = props;
  const start = performance.now();

  requestAnimationFrame(function animateInner(time) {
    let timeFraction = (time - start) / duration;
    if (timeFraction > 1) timeFraction = 1;
    const progress = timings[timing](timeFraction);

    draw(progress);

    if (timeFraction < 1) {
      requestAnimationFrame(animateInner);
    }
  });
};

export default animate;
