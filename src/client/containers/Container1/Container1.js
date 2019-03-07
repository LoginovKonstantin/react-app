import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Link, Redirect } from "react-router-dom";
import { detectLanguage } from '../../utils/index';
import { setupLanguage } from '../../redux/actions';
import flags from '../../assets/images/flags.png'

const RuFlag = styled.div`
  background: url(${flags});
  width: 24px; height: 16px;
  cursor: pointer;
`;

const EnFlag = styled(RuFlag)`background-position: -24px;`;
const DeFlag = styled(RuFlag)`background-position: -48px;`;
const BrFlag = styled(RuFlag)`background-position: -96px;`;
const PlFlag = styled(RuFlag)`background-position: -120px;`;
const EsFlag = styled(RuFlag)`background-position: -144px;`;
const FaFlag = styled(RuFlag)`background-position: -168px;`;

class Container1 extends Component {

  componentDidMount () {
    console.log(this.props);
    console.log(this.props.match.params.lang)
  }

  render() {
    return (
      <div>
        sadfasdf
        <Link to={`/ru`} activeStyle={{ }}><RuFlag/></Link>
        <Link to={`/en`} activeStyle={{ }}><EnFlag/></Link>
        <Link to={`/de`} activeStyle={{ }}><DeFlag/></Link>
        <Link to={`/br`} activeStyle={{ }}><BrFlag/></Link>
        <Link to={`/pl`} activeStyle={{ }}><PlFlag/></Link>
        <Link to={`/es`} activeStyle={{ }}><EsFlag/></Link>
        <Link to={`/fa`} activeStyle={{ }}><FaFlag/></Link>
        {/* <Content/> */}
        {/* <img src={flags} alt="Flags"/> */}
      </div>
    )
  }
}

const mapStateToProps = state => { return {lang : state.lang} }
const mapDispatchToProps = dispatch => {
  return {
    setupLanguage: (lang) => dispatch(setupLanguage(lang)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container1);
