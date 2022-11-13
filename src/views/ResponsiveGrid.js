import React, { useLayoutEffect, useRef, useState } from "react";
import useWindowSize from "../hooks/useWindowSize";
import styles from "./ResponsiveGrid.module.css";

function ResponsiveGrid() {
  const [dimensions, setDimensions] = useState({});
  const { height, width } = useWindowSize();

  const top1Ref = useRef(null);
  const top2Ref = useRef(null);
  const middle1Ref = useRef(null);
  const middle2Ref = useRef(null);
  const bottom1Ref = useRef(null);
  const bottom2Ref = useRef(null);

  useLayoutEffect(() => {
    setDimensions({
      top1: `${top1Ref.current.clientHeight}x${top1Ref.current.clientWidth}`,
      top2: `${top1Ref.current.clientHeight}x${top1Ref.current.clientWidth}`,
      middle1: `${middle1Ref.current.clientHeight}x${middle1Ref.current.clientWidth}`,
      middle2: `${middle2Ref.current.clientHeight}x${middle2Ref.current.clientWidth}`,
      bottom1: `${bottom1Ref.current.clientHeight}x${bottom1Ref.current.clientWidth}`,
      bottom2: `${bottom2Ref.current.clientHeight}x${bottom2Ref.current.clientWidth}`,
    });
  }, [height, width]);

  return (
    <div className={styles.gridContainer}>
      <div ref={top1Ref} className={styles.top1}>
        Top 1<span className={styles.dimensions}>{dimensions?.top1}</span>
      </div>
      <div ref={top2Ref} className={styles.top2}>
        Top 2<span className={styles.dimensions}>{dimensions?.top2}</span>
      </div>
      <div ref={middle1Ref} className={styles.middle1}>
        Middle 1<span className={styles.dimensions}>{dimensions?.middle1}</span>
      </div>
      <div ref={middle2Ref} className={styles.middle2}>
        Middle 2<span className={styles.dimensions}>{dimensions?.middle2}</span>
      </div>
      <div ref={bottom1Ref} className={styles.bottom1}>
        Bottom 1<span className={styles.dimensions}>{dimensions?.bottom1}</span>
      </div>
      <div ref={bottom2Ref} className={styles.bottom2}>
        Bottom 2<span className={styles.dimensions}>{dimensions?.bottom2}</span>
      </div>
    </div>
  );
}

export default ResponsiveGrid;
