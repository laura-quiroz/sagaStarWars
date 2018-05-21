import React, {Component} from 'react';
import {connect} from 'react-redux'
import './App.css';
import logo from "./swlogo.png";
import { Menu, Dimmer, Loader, Popup} from 'semantic-ui-react'

class App extends Component {

  state = { activeItem: 'people' }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
    this.props.triggerSaga(name)
  }

  render() {
    const { activeItem } = this.state

    return (
      <div className="App">
        {
          this.props.stateL && <Dimmer active>
            <Loader />
          </Dimmer>
        }
        <header className="App-header">
          <img id="logo" src={logo} alt="Logo Star Wars"/>
        </header>
          <div className="App_Menu">
            <Menu secondary>
               <Menu.Item name='people' active={activeItem === 'people'} onClick={this.handleItemClick}/>
               <Menu.Item name='films' active={activeItem === 'films'} onClick={this.handleItemClick}/>
               <Menu.Item name='species' active={activeItem === 'species'} onClick={this.handleItemClick}/>
               <Menu.Item name='vehicles' active={activeItem === 'vehicles'} onClick={this.handleItemClick}/>
               <Menu.Item name='starships' active={activeItem === 'starships'} onClick={this.handleItemClick}/>
              <Menu.Item name='Error' active={activeItem === 'error'} onClick={this.handleItemClick} />
           </Menu>


            <div className="App_Menu_Cont">
              {this.state.activeItem === 'people'
              && this.props.starWars && !this.props.errorL
              && this.props.starWars.results.map(item => (<Popup key={item.name}
                trigger={<p>{item.name}</p>}
                content={<div>
                  <p>Mass: {item.mass}</p>
                  <p>Height: {item.height}</p>
                  <p>Eye Color: {item.eye_color}</p>
                  <p>Hair Color: {item.hair_color}</p>
                  <p>Gender: {item.gender}</p>
                </div>}/>))}

                {this.state.activeItem === 'films'
                && this.props.starWars && !this.props.errorL
                && this.props.starWars.results.map(item => (<Popup key={item.title}
                  trigger={<p>{item.title}</p>}
                  content={<div>
                    <p>Title: {item.title}</p>
                  </div>}/>))}

                  {this.state.activeItem === 'species'
                  && this.props.starWars && !this.props.errorL
                  && this.props.starWars.results.map(item => (<Popup key={item.name}
                    trigger={<p>{item.name}</p>}
                    content={<div>
                      <p>Nombre: {item.name}</p>
                    </div>}/>))}

                    {this.state.activeItem === 'vehicles'
                    && this.props.starWars && !this.props.errorL
                    && this.props.starWars.results.map(item => (<Popup key={item.name}
                      trigger={<p>{item.name}</p>}
                      content={<div>
                        <p>Nombre: {item.name}</p>
                      </div>}/>))}

                      {this.state.activeItem === 'starships'
                      && this.props.starWars && !this.props.errorL
                      && this.props.starWars.results.map(item => (<Popup key={item.name}
                        trigger={<p>{item.name}</p>}
                        content={<div>
                          <p>Nombre: {item.name}</p>
                        </div>}/>))}
                {this.props.errorL && <h2 key='{item.error}'>Ocurrio un error, intentalo de nuevo!!</h2>}
            </div>
          </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  starWars: state.starWars,
  stateL: state.loading,
  errorL: state.error
})

const mapDispatchToProps = (dispatch) => ({
  triggerSaga: (name) => dispatch({type: "API_CALL_REQUEST", payload: name}),
})



export default connect(mapStateToProps, mapDispatchToProps)(App);
