import React, { useState } from "react";

function MenuItem({ title, date, excerpt }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <article className="menuItem" aria-label={title}>
        <div className="menuItemContent">
          <h2 className="menuItemTitle">{title}</h2>
          <div className="menuItemExcerpt">{excerpt}</div>

          <button className="menuItemRead" onClick={() => setOpen(true)}>
            Read
          </button>
        </div>
      </article>

      {open && (
        <div className="modalOverlay" onClick={() => setOpen(false)}>
          <div
            className="modalContent"
            role="dialog"
            aria-modal="true"
            aria-label={title}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modalClose" onClick={() => setOpen(false)} aria-label="Close">
              ×
            </button>
            <h2>{title}</h2>
            {/* date removed */}
            <div className="modalBody" style={{ whiteSpace: "pre-line" }}>{excerpt}</div>
          </div>
        </div>
      )}
    </>
  );
}

export default MenuItem;
