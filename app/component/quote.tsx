export default function Quote() {
  return (
    <div className="relative bg-[var(--color-quote-bg)] rounded-2xl p-[28px] pb-[24px] max-w-full font-serif leading-[1.55]">
      {/* Quote body */}
      <p className="m-0 text-[15px] text-[var(--color-text-dark)] font-normal font-serif">
        <span className="text-[30px] text-[var(--color-quote-mark)] font-serif px-[10px] ml-[2px] align-sub">
          &ldquo;
        </span>
        <i>
          In a world where policy decisions shape education, governance, and
          climate action, IISPPR empowers learners to decode complex systems,
          apply data responsibly, and communicate insights that create real-world
          impact.
        </i>
        {/* Inline closing quote mark, smaller than the opening one */}
        <span className="text-[30px] text-[var(--color-quote-mark)] font-serif px-[10px] ml-[2px] align-sub">
          &rdquo;
        </span>
      </p>
    </div>
  );
}
