const Footer = () => {
  return (
    <div
      className="mt-5 d-flex flex-column px-5 pt-4 pb-1"
      style={{ backgroundColor: "rgba(50, 50, 50)", fontSize: "0.8rem" }}
    >
      <p className="text-white mb-3">
        Italia <span className="text-secondary">| English (UK)</span>
      </p>

      <p className="text-secondary mb-1">
        Copyright © 2024 <span className="text-white">Apple Inc.</span> Tutti i
        diritti riservati.
      </p>

      <p className="text-secondary">
        Condizioni dei servizi internet <span className="mx-1">|</span>
        Apple Music e privacy <span className="mx-1">|</span>
        Avviso sui cookie <span className="mx-1">|</span>
        Supporto <span className="mx-1">|</span>
        Feedback
      </p>
    </div>
  );
};

export default Footer;
