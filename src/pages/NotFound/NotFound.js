import "./Not Found.scss";

const NotFoundPage = () => {
  return (
    <div className="not-found-page">
      <h1>404 Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <div>
        <a href="/">Go to the homepage</a>
      </div>
    </div>
  );
};

export default NotFoundPage;
