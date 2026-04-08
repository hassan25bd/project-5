import { motion } from "framer-motion";

const Background = () => {
  const particles = Array.from({ length: 20 }, (_, i) => i);

  return (
    <div className="background-3d">
      {particles.map((particle) => (
        <motion.div
          key={particle}
          className="particle"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            rotateX: 0,
            rotateY: 0,
            rotateZ: 0,
          }}
          animate={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            rotateX: 360,
            rotateY: 360,
            rotateZ: 360,
          }}
          transition={{
            duration: Math.random() * 20 + 10,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </div>
  );
};

export default Background;