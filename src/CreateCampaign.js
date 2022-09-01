import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./style/CreateCampaign.css";
import "./style/App.css";
const STEPS = {
  CAMPAIGN_NAME: "Campaign Name",
  SELECT_CHALLENGES: "Select Challenges",
  CREATE_LINK: "Create Link",
};

const ChallengesSelector = ({
  challengesList,
  selectedChallenges,
  setSelectedChallenges,
}) => {
  const toggleChallengeSelected = (challenge) => {
    console.log(challenge.title);
  };

  const tableHeaderRow = (
    <tr>
      <th>Selection</th>
      <th>Title</th>
      <th>Expected Time</th>
      <th>Difficulty Level</th>
      <th>XP</th>
      <th>View Details</th>
    </tr>
  );

  const tableData =
    challengesList &&
    challengesList.map((challenge,idx) => {
      return (
        <tr key={idx}>
          <td>
            <input
              type="checkbox"
              onChange={() => toggleChallengeSelected(challenge)}
            ></input>
          </td>
          <td>{challenge.title}</td>
          <td>{challenge.expected_time}</td>
          <td>{challenge.difficulty_level}</td>
          <td>{challenge.xp}</td>
          <td>
            <button className="view-button">View Detail</button>
          </td>
        </tr>
      );
    });

  return (
    <table className="challenge-table">
      <thead className="challenge-table-head">{tableHeaderRow}</thead>
      <tbody className="challenge-table-body">{tableData}</tbody>
    </table>
  );
};

const CreateCampaign = ({ challenges }) => {
  const [selectedChallenges, setSelectedChallenges] = useState([]);
  const [campaignName, setCampaignName] = useState("");
  const [currentStep, setCurrentStep] = useState(STEPS.CAMPAIGN_NAME);
  const heading = <h2> Create a Campaign</h2>;
  const handleNextStep = () => {
    setCurrentStep(STEPS.CREATE_LINK);
    navigator.clipboard.writeText("http://localhost:3000/instructions");
  };
  switch (currentStep) {
    case STEPS.CAMPAIGN_NAME:
      return (
        <div className="main-container">
          <div className="form-container">
            {heading}
            <h3>What would you like to name your campaign?</h3>
            <input
              className="textbox"
              value={campaignName}
              onChange={(e) => setCampaignName(e.target.value)}
            ></input>
            <button
              className="button"
              onClick={() => setCurrentStep(STEPS.SELECT_CHALLENGES)}
            >
              Start your Campaign
            </button>
          </div>
        </div>
      );
    case STEPS.SELECT_CHALLENGES:
      return (
        <div className="main-container">
          <div className="challenge-container">
            {heading}
            <h3>Select Challenges for your campaign</h3>
            <ChallengesSelector
              challengesList={challenges}
              selectedChallenges={selectedChallenges}
              setSelectedChallenges={setSelectedChallenges}
            ></ChallengesSelector>
            <button className="button" onClick={() => handleNextStep()}>
              Finish
            </button>
          </div>
        </div>
      );
    case STEPS.CREATE_LINK:
      return (
        <div className="main-container">
          <div className="link-container">
            {heading}
            <h2>Link Copied </h2>
            <h4>You can now send this link to your list of candidates.</h4>
            <Link to="/campaigns">
              <button className="button"> Back to My Campaigns </button>
            </Link>
          </div>
        </div>
      );
    default:
      return <div>Something is wrong</div>;
  }
};
export default CreateCampaign;
