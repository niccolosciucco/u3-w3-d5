import musicLogo from "../assets/logos/music.svg";

interface AppleMusicLogoProps {
  mb?: string;
  pb?: string;
}

const AppleMusicLogo = ({ mb, pb = "0" }: AppleMusicLogoProps) => {
  return (
    <div className={`mb-${mb} ps-2 pb-${pb}`}>
      <img
        src={musicLogo}
        alt="Music Logo"
        style={{
          height: "24px",
          filter: "brightness(0) invert(1)",
        }}
      />
    </div>
  );
};

export default AppleMusicLogo;
