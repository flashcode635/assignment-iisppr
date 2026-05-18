export default function Quote() {
  return (
    <div className="relative bg-(--color-quote-bg) rounded-2xl p-7 pb-6 max-w-full font-serif leading-[1.55]">
      {/* Quote body */}
      <p className="m-0 text-[15px] text-(--color-text-dark) font-normal font-serif">
        <span className="text-[30px] text-(--color-quote-mark) font-serif px-2.5 ml-0.5 align-sub">
          &ldquo;
        </span>
        <i>
          In a world where policy decisions shape education, governance, and
          climate action, IISPPR empowers learners to decode complex systems,
          apply data responsibly, and communicate insights that create real-world
          impact.
        </i>
        {/* Inline closing quote mark, smaller than the opening one */}
        <span className="text-[30px] text-(--color-quote-mark) font-serif px-2.5 ml-0.5 align-sub">
          &rdquo;
        </span>
      </p>
    </div>
  );
}
