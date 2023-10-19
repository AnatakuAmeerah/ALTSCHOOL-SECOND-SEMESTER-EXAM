
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function RepoDetails() {
  const [details, setDetails] = useState({});
  const { id } = useParams();
  const [branch, setBranch] = useState({});

  
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://api.github.com/repos/AnatakuAmeerah/${id}`
      );
      setDetails(result.data);
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
        <h2 id="repo-name">{details.name}</h2>
        <div id="repo-mini-details">
          <p> Stars: {details.stargazers_count}</p>
          <p> Forks: {details.forks}</p>
          <p> Watch: {details.watchers}</p>
          <p> Branches: {branch.length}</p>
        </div>
        <p>
          Main Language: {details.language === null ? "none" : details.language}
        </p>
        <p>
          <a id="view" href={`https://github.com/${details.full_name}`}>View on Github</a>
        </p>
        <br />
        <br />
        <p id="homeininfo"><Link to="/"><b>Home Page</b></Link></p>
      </div>
    </div>
  );
}

export default RepoDetails;
