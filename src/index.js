import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Line} from 'react-chartjs-2';
import Amplify  from 'aws-amplify';
import awsconfig from './aws-exports';
import { withAuthenticator } from 'aws-amplify-react';
import {API, Storage, graphqlOperation} from 'aws-amplify';

Amplify.configure (awsconfig);

// Chart related components 
 
class Chart_Canvas_Component extends React.Component {
  render() {
  return (
    <div style={{height: '400 px'}}>
      <center> 
        <LineClass />
      </center>
    </div>
    );
  }
}

const state = {
  labels: ['Jan','Feb','Mar','Apr','May','June','July','Aug','Sep','Oct','Nov','Dec'],
  datasets: [
    {
      label: 'Email Sends',
      fill: false,
      lineTension: 0.5,
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 5,
      data: [70,75, 80, 81, 75,83,74,81,76,82,70,74]
    }
  ]
}

class LineClass extends React.Component {
  render() {
    return (
      <div>
        <Line 
            data={state}
            options={{
              title: {
                display:false,
                text: 'Avg Rainfall',
                fontSize: 20
              },
              legend: {
                display: false,
                position: 'bottom'
              },
              scaleLabel: {
                display: false
              },
              scales: {
                xAxes: [{
                    gridLines: {
                        display: false,
                        drawOnChartArea: false,
                        drawBorder: false
                    },
                    ticks: {
                      display: false
                    }
                }],
                yAxes: [{
                    gridLines: {
                        display: false,
                        drawOnChartArea: false,
                        drawBorder: false
                    },
                    ticks: {
                      display: false
                    },
                    angleLines: {
                      display: false
                    }
                }]
            },
            maintainAspectRatio: false,
            }}
            />
      </div>

    );
  }
}

// Journey related components 

class JourneyCanvasComponent extends React.Component {

  render() {
  
    return (
      <div>
        <center>
          <table>
            <tr>
              <td colspan = '3' style={{background:"yellow"}}><label><b>JOURNEY STATS</b></label></td>
            </tr>
            <tr>
              <td><br /><JourneyComponent value={'Journey 1'} /></td>
            </tr>
            <tr>
              <td><br /><JourneyComponent value={'Journey 2'} /></td>
            </tr>
            <tr>
              <td><br /><JourneyComponent value ={'Journey 3'} /></td>
            </tr>
          </table>
        </center>
      </div>
    );
    }
  }

class JourneyComponent extends React.Component {
  render() {

    var dropshadow={ boxShadow: "1px 4px 1px 1px #000000", border: "1px solid black" }
  
    return (
      <div>
        <b>{this.props.value}</b>
        <center>
          <table>
            <tr>
              <td><JourneyChildComponent value={'Sends'} /></td>
              <td><JourneyChildComponent value={'Opens'}/></td>
              <td><JourneyChildComponent value={'Clicks'}/></td>
            </tr>
          </table>
        </center>
      </div>
    );
    }
}

class JourneyChildComponent extends React.Component {
    render() {
  
      var dropshadow={ boxShadow: "1px 4px 1px 1px #000000", border: "1px solid black"}

      return (
        <div>
            <div className="dataCell" style = {dropshadow}>
              <table border='0' width="225px" >
                <tr>
                  <td valign="top">
                    <label>{this.props.value}</label>
                  </td>
                  <td valign="top">
                    <div className="countsLargerFont" align="right" valign="top">
                      <b>1,153</b>
                    </div>
                  </td>
                </tr>
              </table>
            </div>
        </div>
      );
      
      }
}

// Campaign related components 

class Campaign_Canvas_Component extends React.Component {

  render() {
  
    return (
      <div>
        <br />p
        <center>
          <table>
            <tr>
              <td colspan = '3' style={{background:"yellow"}}><label><b>CAMPAIGN STATS</b></label></td>
            </tr>
            <tr>
              <td><br /><Campaign_Component value={'LEX'} /></td>
            </tr>
            <tr>
              <td><br /><Campaign_Component value={'CPS'} /></td>
            </tr>
            <tr>
              <td><br /><Campaign_Component value ={'OPCITY'} /></td>
            </tr>
          </table>
        </center>
      </div>
    );
    }
  }

  class Campaign_Component extends React.Component {
    render() {
  
      var dropshadow={ boxShadow: "1px 4px 1px 1px #000000", border: "1px solid black" }
    
      return (
        <div>
          <b>{this.props.value}</b>
          <center>
            <table>
              <tr>
                <td><Campaign_Child_Component value={'Sends'} /></td>
                <td><Campaign_Child_Component value={'Opens'}/></td>
                <td><Campaign_Child_Component value={'Clicks'}/></td>
              </tr>
            </table>
          </center>
        </div>
      );
      }
  }
  
  class Campaign_Child_Component extends React.Component {
      render() {
    
        var dropshadow={ boxShadow: "1px 4px 1px 1px #000000", border: "1px solid black"}
  
        return (
          <div>
              <div className="dataCell" style = {dropshadow}>
                <table border='0' width="225px" >
                  <tr>
                    <td valign="top">
                      <label>{this.props.value}</label>
                    </td>
                    <td valign="top">
                      <div className="countsLargerFont" align="right" valign="top">
                        <b>1,153</b>
                      </div>
                    </td>
                  </tr>
                </table>
              </div>
          </div>
        );
        
        }
  }

  // Page Bottom components 

class PageBottom_Component extends React.Component {
  render() {
    const fontStyle = { fontSize: 14, background: "lightgray" }
  return (
    <div style={fontStyle} align="right">
      AWS Amplify App
    </div>
    );
  }
}

class Email_Parent_Component extends React.Component {
  render() {
    const fontStyle = { fontSize: 14, background: "lightgray" }
  return (
    <div  align="right">
      this is to show email
    </div>
    );
  }
}

class SMS_Parent_Component extends React.Component {
  render() {
    const fontStyle = { fontSize: 14, background: "lightgray" }
  return (
    <div  align="right">
      this is to show SMS
    </div>
    );
  }
}

// Master component 
class Sfmc_app extends React.Component {

constructor(props) {
    super(props) ;
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEmailSubmit = this.handleEmailSubmit.bind(this);
    this.handleSMSSubmit = this.handleSMSSubmit.bind(this);
    this.state = {showJourney: true, showCampaign: true, showChart: true }
    //this.setState({showCampaign: true})
    //this.setState({showChart: true})

    //alert(this.state.showJourney);
  }


handleChange(event) {
  //alert(event.target.value);
  this.setState({value: event.target.value});
}

handleSubmit(event) {
  //alert('Subscriber Key entered: '+this.state.value);
  //this.setState({showEmail: true})
  event.preventDefault()
}

handleEmailSubmit(event) {
  //alert('Subscriber Key entered: '+this.state.value);
  this.setState({showEmail: true,showSMS: false,showChart: false, showJourney: false, showCampaign: false})
  //event.preventDefault()
}

handleSMSSubmit(event) {
  //alert('Subscriber Key entered: '+this.state.value);
  this.setState({showSMS: true, showEmail: false, showChart: false, showJourney: false, showCampaign: false})
  //event.preventDefault()
}

post = async () => {
  console.log('calling api');
  const response = await API.post('myapi', '/items', {
    body: {
      type: '1',
      name: 'hello amplify!'
    }
  });
  alert(JSON.stringify(response, null, 2));
};

get = async () => {
  console.log('calling api');
  const response = await API.get('myapi', '/items/object/1');
  alert(JSON.stringify(response, null, 2));
};

list = async () => {
  console.log('calling api');
  const response = await API.get('myapi', '/items/1');
  alert(JSON.stringify(response, null, 2));
};

render() {

  var dropshadow={ boxShadow: "0px 0px 0px #000000" }

  return (
        
  <div> 
    <br />
      <div className = "board-row" style={dropshadow}>
        <table border="0" className="game" height="50">
          <tr className="game">
            <td width="25%">
              <center><b><label style={{background:"black", color:"yellow"}}>&nbsp; SFMC &nbsp;</label></b></center>
            </td>
            <td width="50%">
                <center>
                  <form onSubmit={this.handleSubmit} >
                      <button onClick={this.post}>POST</button>
                      <button onClick={this.get}>GET</button>
                      <input className="textboxStyling" placeholder="Email/Phone" type="text" value={this.state.value} onChange={this.handleChange} />
                      <input className="searchButtonStyling" type="submit" value="EMAIL" onClick={this.handleEmailSubmit} />
                      <input className="searchButtonStyling" type="submit" value="SMS" onClick={this.handleSMSSubmit} />
                  </form>
                </center>      
            </td>
            <td width="25%" align="right">
              <center>
                <div align="right"><center>+++**</center></div>
              </center>
            </td>
          </tr>
        </table>
        <br />
      </div>
      <br />
      
      <div className = "board-row">
        {this.state.showChart     ? <Chart_Canvas_Component  />     : null }
        {this.state.showJourney   ? <JourneyCanvasComponent  />     : null }
        {this.state.showCampaign  ? <Campaign_Canvas_Component  />  : null }
        {this.state.showEmail     ? <Email_Parent_Component  />     : null }
        {this.state.showSMS       ? <SMS_Parent_Component  />       : null }
        <br />
        
        <PageBottom_Component />
      </div>
  </div>
  );
}
}

ReactDOM.render(
<Sfmc_app />,
document.getElementById('root')
);
 