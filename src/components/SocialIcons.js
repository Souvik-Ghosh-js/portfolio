const SocialIcons = () => {
  const styles = {
    icon: {
      textDecoration: "none",
      fontSize: "22px",
      padding: "10px",
      transition: "0.2s ease-in",
    },
  };

  return (
    <div className="socialIcons" style={styles.socialIcons}>
      <a className="icon" style={styles.icon} href="https://github.com/Souvik-Ghosh-js">
        <i className="fa-brands fa-github" aria-hidden="true" title="Souvik Ghosh' GitHub Profile"></i>
      </a>
      <a className="icon" style={styles.icon} href="https://www.linkedin.com/in/souvik-ghosh-2335b7245">
        <i className="fa-brands fa-linkedin" aria-hidden="true" title="Souvik Ghosh' LinkedIn Profile"></i>
      </a>
      <a className="icon" style={styles.icon} href="https://www.instagram.com/sou_vik_ghosh/">
        <i className="fa-brands fa-instagram" aria-hidden="true" title="Souvik Ghosh' Instagram Profile"></i>
      </a>
      <a className="icon" style={styles.icon} href="https://twitter.com/Souvik_Ghosh_/">
        <i className="fa-brands fa-twitter" aria-hidden="true" title="Souvik Ghosh' Twitter Profile"></i>
      </a>
    </div>
  );
};

export default SocialIcons;
