const FooterBar = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer py-2 mt-5">
      <p className="has-text-centered">
        Copyright &copy; {currentYear} - Created By:{" "}
        <a href="#">HE&gt;i Ministries</a>
      </p>
    </footer>
  );
};

export default FooterBar;
