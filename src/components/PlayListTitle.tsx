interface PlayListTitleProps {
  title: string;
}

const PlayListTitle = ({ title }: PlayListTitleProps) => {
  return (
    <div className={`d-flex align-items-center mt-4 px-2`}>
      <h5 className="text-white fw-bold mb-0 me-1">{title}</h5>
      <i
        className="bi bi-chevron-right text-secondary"
        style={{ fontSize: "0.8rem" }}
      ></i>
    </div>
  );
};

export default PlayListTitle;
