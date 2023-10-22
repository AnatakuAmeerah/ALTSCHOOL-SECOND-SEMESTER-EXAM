import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function RepoInfo() {
  const [repos, setRepos] = useState({});
  const { id } = useParams();
  const [branch, setBranch] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://api.github.com/repos/AnatakuAmeerah/${id}`
      );
      setRepos(result.data);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://api.github.com/repos/AnatakuAmeerah/${id}/branches`
      );
      setBranch(result.data);
    };

    fetchData();
  }, []);

  return (
    <div id="repodetail">
      <div id="repodetail-card">
        <h2 id="repo-name">{repos.name}</h2>
        <div id="repo-mini-details">
          <p> Stars: {repos.stargazers_count}</p>
          <p> Forks: {repos.forks}</p>
          <p> Watch: {repos.watchers}</p>
          <p> Branches: {repos.length}</p>
        </div>
        <p>
          Main Language: {repos.language === null ? "none" : repos.language}
        </p>
        <p>
          <a id="view" href={`https://github.com/${repos.full_name}`}>
            View on Github
          </a>
        </p>
        <br />
        <br />
        <p id="homeininfo">
          <Link to="/">
            <b>Home Page</b>
          </Link>
        </p>
      </div>
    </div>
  );
}

export default RepoInfo;
