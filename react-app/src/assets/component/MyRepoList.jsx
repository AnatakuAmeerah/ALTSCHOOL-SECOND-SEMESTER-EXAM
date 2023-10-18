
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function MyRepoList() {
  const [user, setUser] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showViewMore, setShowViewMore] = useState("");

  const instance = axios.create({
    baseURL: "https://api.github.com/users/AnatakuAmeerah/repos",
    params: {
      per_page: 6,
      page: currentPage,
    },
  });

  const fetchRepos = async () => {
    try {
      const response = await instance.get();
      const data = response.data;

      if (data.length === 0) {
        setShowViewMore("End of Repos");
      } else {
        setUser([...user, ...data]);
        setShowViewMore("View More");
      }
    } catch (error) {
      console.error("Error fetching repos:", error);
    }
  };

  useEffect(() => {
    fetchRepos();
  }, [currentPage]);

  const viewMore = () => {
    setCurrentPage(currentPage + 1);
  };

  const userDetails= user.map((userDetail) => {
    return (
      <section id="repo-list-box">
      <div id="repo-card" key={userDetail.id}>
        <Link to={`/repodetails/${userDetail.name}`}>
          <h2 id="repo-name">{userDetail.name}</h2>
        </Link>
        <p id="language">
          Langauge:{" "}
          {userDetail.language === null ? "none" : userDetail.language}
        </p>
        <p id="date">Start date & time: {userDetail.created_at}</p>
        <p id="visibility">Visibility: {userDetail.visibility}</p>
      </div>
      </section>
    );
  });

  return (
    <>
     <p><Link id="errorinstance" to="/errorinstance">
            ErrorBoundarytest
          </Link> </p>
      <section id="repo-container">{userDetails}</section>
      <p id="view-more" onClick={viewMore}>
        {showViewMore}
      </p>
    </>
  );
}
export default MyRepoList;
