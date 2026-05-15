import AppleMusicLogo from "./AppleMusicLogo";
import MyMenu from "./MyMenu";

const SidebarDesktop = () => {
  return (
    <section
      className="d-none d-lg-flex flex-column p-3 border-end border-secondary vh-100"
      style={{ width: "260px", backgroundColor: "rgba(37, 37, 38)" }}
    >
      <AppleMusicLogo mb="4" />
      <MyMenu />
    </section>
  );
};

export default SidebarDesktop;
