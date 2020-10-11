import React from "react";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    console.log(this.props);

    if (location.state === undefined) {
      // state가 없는 경우
      history.push("/"); // '/' home으로 이동
    }
  }

  render() {
    const { location } = this.props;
    if (location.state) {
      return <span>{location.state.title}</span>;
    } else {
      return null;
    }
  }
}

export default Detail;
