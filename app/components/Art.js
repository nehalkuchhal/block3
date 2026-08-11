const INNER = {
  a1: (
    <>
      <span className="c1" />
      <span className="c2" />
    </>
  ),
  a2: <div className="g">P</div>,
  a4: (
    <>
      <span className="b b1" />
      <span className="b b2" />
      <span className="b b3" />
    </>
  ),
  a6: <span className="dot" />,
  a7: (
    <>
      <span className="sun" />
      <span className="ln" />
    </>
  ),
  a8: (
    <>
      <span className="s s1" />
      <span className="s s2" />
    </>
  ),
  a9: (
    <>
      <span className="q" />
      <span className="q2" />
    </>
  ),
  a10: <div className="g">&amp;</div>,
  a12: (
    <>
      <span className="r" />
      <span className="r2" />
    </>
  ),
  toy: (
    <div className="tg">
      <span>TOY</span>
      <span>SUN</span>
    </div>
  ),
};

export default function Art({ kind, className = "" }) {
  return <div className={`art ${kind} ${className}`}>{INNER[kind] || null}</div>;
}
