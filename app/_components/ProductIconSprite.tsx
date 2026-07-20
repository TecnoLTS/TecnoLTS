export default function ProductIconSprite() {
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute h-0 w-0 overflow-hidden"
      focusable="false"
    >
      <symbol id="product-icon-loyalty" viewBox="0 0 24 24">
        <rect x="3" y="8" width="18" height="4" rx="1" />
        <path d="M12 8v13" />
        <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7" />
        <path d="M7.5 8a2.5 2.5 0 0 1 0-5C11 3 12 8 12 8" />
        <path d="M16.5 8a2.5 2.5 0 0 0 0-5C13 3 12 8 12 8" />
      </symbol>
      <symbol id="product-icon-invoicing" viewBox="0 0 24 24">
        <path d="M4 2v20l2-1.1 2 1.1 2-1.1 2 1.1 2-1.1 2 1.1 2-1.1 2 1.1V2l-2 1.1L16 2l-2 1.1L12 2l-2 1.1L8 2 6 3.1 4 2Z" />
        <path d="M8 7h8" />
        <path d="M8 11h8" />
        <path d="M9.5 15h5" />
      </symbol>
      <symbol id="product-icon-monitoring" viewBox="0 0 24 24">
        <path d="m12 14 4-4" />
        <path d="M3.34 19a10 10 0 1 1 17.32 0" />
      </symbol>
      <symbol id="product-icon-ecommerce" viewBox="0 0 24 24">
        <circle cx="8" cy="21" r="1" />
        <circle cx="19" cy="21" r="1" />
        <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
      </symbol>
      <symbol id="product-icon-mail" viewBox="0 0 24 24">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </symbol>
    </svg>
  );
}
