import React from "react";
import { connect } from "react-redux";
import { IPeople } from "../redux/people/interface";
import { IRootState, ExportThunkDispatch } from "../store";
import { getPeopleInfo } from "../redux/people/thunks";
import TopAppBar from "../component/TopAppBar";
import PeopleCard from "../component/PeoplesCard";
import ClipLoader from "react-spinners/ClipLoader";
import { Redirect } from "react-router-dom";
import { override } from "../utils/Config";

interface IProps {
  peoples: IPeople[];
  loading: boolean;
  getPeopleInfo: () => void;
  error: boolean | null;
}

function HomePage(props: IProps) {

  const { getPeopleInfo , loading , error} = props;

  React.useEffect(() => {
      getPeopleInfo();
  }, [getPeopleInfo]);

  if (error) {
    return <Redirect to={"/error"} />;
  }

  return (
    <>
      <TopAppBar homePage={false} title="All friends" />
      <ClipLoader
        css={override}
        size={150}
        color={"#123abc"}
        loading={loading}
      />
      {props.peoples.map((people, index) => (
        <PeopleCard
          rel={true}
          email={people.email}
          name={people.name.first + " " + people.name.last}
          iconPath={people.picture}
          id={people._id}
          key={index}
        />
      ))}
    </>
  );
}

const mapStateToProps = (state: IRootState) => {
  return {
    peoples: state.people.people,
    loading: state.people.loading,
    error: state.people.error,
  };
};

const mapDispatchToProps = (dispatch: ExportThunkDispatch) => {
  return {
    getPeopleInfo: () => dispatch(getPeopleInfo()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
