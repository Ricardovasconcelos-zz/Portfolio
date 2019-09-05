import React, { Component } from "react";

import "./Github.css";
import api from "../../services/api";
import LineUp from "../lineUp/LineUp";
import Git from "../img/git.png";
import { FiUsers } from "react-icons/fi";
import { FiUserCheck } from "react-icons/fi";

class Github extends Component {
  state = {
    repository: [],
    profile: []
  };

  componentDidMount() {
    this.loadRepository();
    this.loadProfile();
  }

  loadRepository = async () => {
    const response = await api.get("/repos");

    this.setState({ repository: response.data });
  };

  loadProfile = async () => {
    const response = await api.get("");

    this.setState({ profile: response.data });
  };

  render() {
    const { repository } = this.state;
    const { profile } = this.state;

    return (
      <div className="Github">
        <h3>Projects</h3>
        <LineUp />
        <div className="description-git">
          <img src={Git} className="git-icon" alt=''/>
          <div className="description">
            <p>
              I put some projects up that I made on github, you can see a little
              bit here.
            </p>
          </div>
        </div>
        <div className="all">
          <div className="profile-github">
            <div className="data-github">
              <div className="photo">
                <img src={profile.avatar_url} className="photo-github" alt=''/>
              </div>

              <div className="my-datas">
                <h4>{profile.name}</h4>
                <p>{profile.bio}</p>

                <div className="follow">
                  <p>
                    <FiUsers />{" "}
                    <span className="followers">
                      Followers {profile.followers}
                    </span>
                  </p>
                  <p>
                    <FiUserCheck />{" "}
                    <span className="following">
                      Following {profile.following}
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div className="projects-component">
              {repository.map(item => (
                  <div className="Repositories">
                    <span className="main-text">
                      <a href={item.html_url} >
                        <strong>{item.name}</strong>
                      </a>
                    </span>

                    <p>{item.description}</p>
                  </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Github;
