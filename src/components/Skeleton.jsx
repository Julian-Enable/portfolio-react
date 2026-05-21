import './Skeleton.css';

const Skeleton = ({ width = '100%', height = '1rem', rounded = false, margin = '0' }) => {
  return (
    <div
      className={`skeleton ${rounded ? 'skeleton-rounded' : ''}`}
      style={{ width, height, margin }}
    ></div>
  );
};

export default Skeleton;