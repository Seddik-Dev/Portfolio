import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'motion/react';
import { Children, cloneElement, useEffect, useMemo, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';

function DockItem({ children, className = '', onClick, mouseX, spring, distance, magnification, baseItemSize }) {
  const ref = useRef(null);
  const isHovered = useMotionValue(0);

  const mouseDistance = useTransform(mouseX, val => {
    const rect = ref.current?.getBoundingClientRect() ?? {
      x: 0,
      width: baseItemSize
    };
    return val - rect.x - baseItemSize / 2;
  });

  const targetSize = useTransform(
    mouseDistance,
    [-distance, 0, distance],
    [baseItemSize, magnification, baseItemSize]
  );
  const size = useSpring(targetSize, spring);

  return (
    <motion.div
      ref={ref}
      style={{
        width: size,
        height: size,
        borderColor: '#3DFFFF'
      }}
      onHoverStart={() => isHovered.set(1)}
      onHoverEnd={() => isHovered.set(0)}
      onFocus={() => isHovered.set(1)}
      onBlur={() => isHovered.set(0)}
      onClick={onClick}
      className={`relative inline-flex items-center justify-center rounded-full bg-white  border-2 shadow-md ${className}`}
      tabIndex={0}
      role="button"
      aria-haspopup="true">
      {Children.map(children, child => cloneElement(child, { isHovered }))}
    </motion.div>
  );
}

function DockLabel({ children, className = '', ...rest }) {
  const { isHovered } = rest;
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const unsubscribe = isHovered.on('change', latest => {
      setIsVisible(latest === 1);
    });
    return () => unsubscribe();
  }, [isHovered]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: -10 }}
          exit={{ opacity: 0, y: 0 }}
          transition={{ duration: 0.2 }}
          className={`${className} absolute -top-6 left-1/2 w-fit whitespace-pre rounded-md border border-gree-700 bg-[#060010] px-2 py-0.5 text-xs text-white`}
          role="tooltip"
          style={{ x: '-50%' }}>
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function DockIcon({ children, className = '' }) {
  return <div className={`flex items-center justify-center ${className}`}>{children}</div>;
}

export default function Dock({
  items,
  className = '',
  spring = { mass: 0.1, stiffness: 150, damping: 12 },
  magnification = 70,
  distance = 200,
  panelHeight = 56,
  dockHeight = 240,
  baseItemSize = 50,
  mobileBreakpoint = 640,
  mobileMagnification = 60,
  mobileDistance = 160,
  mobilePanelHeight = 56,
  mobileDockHeight = 240,
  mobileBaseItemSize = 44
}) {
  const mouseX = useMotionValue(Infinity);
  const isHovered = useMotionValue(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [viewportWidth, setViewportWidth] = useState(() =>
    typeof window !== 'undefined' ? window.innerWidth : Infinity
  );

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const handleResize = () => setViewportWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = viewportWidth <= mobileBreakpoint;
  const resolvedMagnification = isMobile ? mobileMagnification : magnification;
  const resolvedDistance = isMobile ? mobileDistance : distance;
  const resolvedPanelHeight = isMobile ? mobilePanelHeight : panelHeight;
  const resolvedDockHeight = isMobile ? mobileDockHeight : dockHeight;
  const resolvedBaseItemSize = isMobile ? mobileBaseItemSize : baseItemSize;

  const maxHeight = useMemo(
    () => Math.max(resolvedDockHeight, resolvedMagnification + resolvedMagnification / 2 + 4),
    [resolvedMagnification, resolvedDockHeight]
  );
  const heightRow = useTransform(isHovered, [0, 1], [resolvedPanelHeight, maxHeight]);
  const height = useSpring(heightRow, spring);

  const handleItemClick = (onClick) => {
    if (onClick) onClick();
    if (isMobile) {
      setIsMobileMenuOpen(false);
    }
  };

  // Mobile hamburger menu
  if (isMobile) {
    return (
      <>
        {/* Hamburger Button */}
        <motion.button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`${className} fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 w-14 h-14 rounded-full bg-white border-2 border-[#3DFFFF] shadow-lg flex items-center justify-center`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Toggle menu">
          <AnimatePresence mode="wait">
            {isMobileMenuOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}>
                <X size={24} className="text-black" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}>
                <Menu size={24} className="text-black" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
                onClick={() => setIsMobileMenuOpen(false)}
              />
              
              {/* Menu Panel */}
              <motion.div
                initial={{ y: '100%', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: '100%', opacity: 0 }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="fixed bottom-0 left-0 right-0 z-50 bg-[#060010] border-t-2 border-[#3DFFFF] rounded-t-3xl shadow-2xl pb-20">
                <div className="px-4 py-6">
                  <div className="grid grid-cols-2 gap-3">
                    {items.map((item, index) => (
                      <motion.button
                        key={index}
                        onClick={() => handleItemClick(item.onClick)}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: index * 0.05, type: 'spring', stiffness: 200 }}
                        className="flex flex-col items-center justify-center gap-2 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#3DFFFF] transition-all group"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}>
                        <div className="text-[#3DFFFF] group-hover:scale-110 transition-transform">
                          {item.icon}
                        </div>
                        <span className="text-xs font-medium text-white">{item.label}</span>
                      </motion.button>
                    ))}
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </>
    );
  }

  // Desktop dock (original behavior)
  return (
    <motion.div
      style={{ height, scrollbarWidth: 'none' }}
      className="mx-2 flex max-w-full items-center">
      <motion.div
        onMouseMove={({ pageX }) => {
          isHovered.set(1);
          mouseX.set(pageX);
        }}
        onMouseLeave={() => {
          isHovered.set(0);
          mouseX.set(Infinity);
        }}
        className={`${className} absolute bottom-2 left-1/2 transform -translate-x-1/2 flex items-end w-fit gap-4 rounded-2xl border-2 pb-2 px-4`}
        style={{ height: resolvedPanelHeight , borderColor: '#3DFFFF'}}
        role="toolbar"
        aria-label="Application dock">
        {items.map((item, index) => (
          <DockItem
            key={index}
            onClick={() => handleItemClick(item.onClick)}
            className={item.className}
            mouseX={mouseX}
            spring={spring}
            distance={resolvedDistance}
            magnification={resolvedMagnification}
            baseItemSize={resolvedBaseItemSize}>
            <DockIcon>{item.icon}</DockIcon>
            <DockLabel>{item.label}</DockLabel>
          </DockItem>
        ))}
      </motion.div>
    </motion.div>
  );
}
