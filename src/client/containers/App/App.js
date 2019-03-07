import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import ConnectedComponent from '../Container1';
import { Link, Redirect } from "react-router-dom";
import { detectLanguage } from '../../utils/index';
import { setupLanguage } from '../../redux/actions';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

const Button = styled.button`
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};
  cursor: pointer;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;

class App extends Component {

  componentDidMount () {
    const lang = detectLanguage(navigator.language || navigator.userLanguage);
    this.props.setupLanguage(lang);
    console.log(this.props);
  }

  render() {
    const lang = this.props.lang;
    // return (lang) ? (<Redirect to={`/${lang}`} />) : (<div />)
    console.log(lang);
    if(lang) {
      return <Redirect to={'/'+lang} />
    } else {
      return <div>Load</div>
    }
      // <div>
      //   <Redirect to={'/'+lang} />
      //   {/* <TomatoButton onClick={() => }> SetupLang </TomatoButton> */}
      //   {/* <TomatoButton onClick={() => this.test()}> SetupLang </TomatoButton> */}
      // </div>
      
      // <Wrapper>
      // <Title> Main Page </Title>
      // <Link to={`/landing1`} activeStyle={{ }}><Button> Landing 1 </Button></Link>
      // <Link to={`/landing2`} activeStyle={{ }}><Button primary> Landing 2 </Button></Link>
      // <Link to={`/landing3`} activeStyle={{ }}><TomatoButton> Landing 3 </TomatoButton></Link>
      // <ConnectedComponent></ConnectedComponent>
      // </Wrapper>
  }
}

const mapStateToProps = state => { return {lang : state.lang} }
const mapDispatchToProps = dispatch => {
  return {
    setupLanguage: (lang) => dispatch(setupLanguage(lang)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
