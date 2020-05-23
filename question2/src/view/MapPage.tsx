import React from "react";
import { connect } from "react-redux";
import { IPeople } from "../redux/people/interface";
import { IRootState } from "../store";
import queryString from "query-string";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
} from "react-simple-maps";
import PeopleCard from "../component/PeoplesCard";
import TopAppBar from "../component/TopAppBar";
import NotFoundPage from "./NotFoundPage";

interface IProps {
  peoples: IPeople[];
  loading: boolean;
  params: string;
  location: any;
}

function MapPage(props: IProps) {
  const { peoples } = props;
  const peopleId = queryString.parse(props.location.search);
  const selectedPeopleInfo = peoples.find(
    (people) => people._id === peopleId?.id
  );

  const peopleExist = selectedPeopleInfo?._id;

  const lat = selectedPeopleInfo?.location.latitude ?? 0;
  const lng = selectedPeopleInfo?.location.longitude ?? 0;

  const geoUrl =
    "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

  return peopleExist ? (
    <>
      <TopAppBar homePage={true} title="Your friends" />
      <div style={{ height: "100vh", width: "100%" }}>
        <ComposableMap>
          <ZoomableGroup zoom={1}>
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill="#DDD"
                    stroke="#FFF"
                  />
                ))
              }
            </Geographies>
            <Marker coordinates={[lat, lng]}>
              <circle r={8} fill="#F53" />
            </Marker>
          </ZoomableGroup>
        </ComposableMap>
        <PeopleCard
          rel={false}
          email={selectedPeopleInfo?.email ?? "demo@gmail.com"}
          name={
            selectedPeopleInfo?.name.first + " " + selectedPeopleInfo?.name.last
          }
          iconPath={selectedPeopleInfo?.picture ?? " "}
          id={selectedPeopleInfo?._id ?? "demo@gmail.com"}
          lat={lat}
          long={lng}
        />
      </div>
    </>
  ) : (
    <NotFoundPage />
  );
}

const mapStateToProps = (state: IRootState) => {
  return {
    peoples: state.people.people,
    loading: state.people.loading,
  };
};

export default connect(mapStateToProps)(MapPage);
