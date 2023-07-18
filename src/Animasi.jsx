
import PropTypes from 'prop-types';
import { useInView, animated } from '@react-spring/web';

const AnimatedComponent = ({ children, animationConfig }) => {
  const [ref, springs] = useInView(animationConfig);

  return (
    <animated.div ref={ref} style={springs}>
      {children}
    </animated.div>
  );
};

AnimatedComponent.propTypes = {
    animationConfig: PropTypes.object.isRequired, // Specify the prop type as an object
    children: PropTypes.node.isRequired, // Add other prop types if necessary
  };
export default AnimatedComponent;
