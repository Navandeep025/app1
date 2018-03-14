import React, {Component} from 'react';
import {
  Card,
  Dimmer,
  Button,
  Icon,
  Grid,
} from 'semantic-ui-react';
const {Link} = require('react-router');
const {hashHistory} = require('react-router');
import Service from './service';
import { Fade, Flip, Rotate, Zoom} from 'react-reveal';
import ReactCardFlip from 'react-card-flip';
import Cookies from 'universal-cookie';
const cookies = new Cookies();
class MenuExampleContentProp extends Component {
  constructor() {
    super();
    this.state = {
      active: true,
      openModal: false,
      value: "",
      data : [
        {
          name: 'Continuous Integration',
          description: 'Continuous Integration (CI) is a development practice that requires developers to integrate code into a shared repository several times a day.',
          subCategory1: 'Dependency Management',
          subCategory2: 'Code Quality',
          subCategory3: 'Build/Unit Testing',
          subCategory4: 'Pre Commit Testing'
        }, {
          name: 'Continuous Testing',
          description: 'Continuous Testing is the process of executing automated tests as part of the software delivery pipeline in order to obtain feedback on the business risks associated with a software release candidate as rapidly as possible.',
          subCategory1: 'TEM | TDM',
          subCategory2: 'Automation',
          subCategory3: 'Test Management',
          subCategory4: 'Functional | Non Functional'
        }, {
          name: 'Continuous Development',
          description: 'Continuous Development is an umbrella term that describes several aspects of iterative software application development, including continuous integration, continuous delivery, continuous testing and continuous deployment.',
          subCategory1: 'Version Control',
          subCategory2: 'Branching Strategy',
          subCategory3: 'Unit Testing',
          subCategory4: 'Code Review'
        }, {
          name: 'Continuous Deployment',
          description: 'Continuous Deployment is a software engineering approach in which teams produce software in short cycles, ensuring that the software can be reliably released at any time. It aims at building, testing, and releasing software faster and more frequently.',
          subCategory1: 'Configuration Management',
          subCategory2: 'Change Management',
          subCategory3: 'Deployment Automation',
          subCategory4: 'Artifact Management'
        }, {
          name: 'Continuous Planning',
          description: 'Continuous Planning refers to the process of planning in a world under continual change. Traditionally, as new world information is encountered, a planner adapts to it through the refinement of the plans that are under construction.',
          subCategory1: 'Architecture',
          subCategory2: 'Release Scope',
          subCategory3: 'Security Debt',
          subCategory4: 'Technical Debt'
        }, {
          name: 'Agile Infrastructure',
          description: 'An agile IT infrastructure enabled with cloud computing and latest models have the potential to drive new business value, reduce cost and time to market',
          subCategory1: 'On Demand Provisioning',
          subCategory2: 'CMDB',
          subCategory3: 'Environmen Management',
          subCategory4: 'Auto Discovery'
        }, {
          name: 'Continuous Release',
          description: 'Continuous Release is a software engineering approach in which teams produce software in short cycles, ensuring that the software can be reliablyreleased at any time. It aims at building, testing, andreleasing software faster and more frequently.',
          subCategory1: 'Release Strategy',
          subCategory2: 'Roll Back & Forward Strategy',
          subCategory3: 'Governance',
          subCategory4: 'Release Management'
        }, {
          name: 'Continuous Monitering',
          description: 'Continuous Monitoring is the process and technology used to detect compliance and risk issues associated with an organization financial and operational environment',
          subCategory1: 'Infra Monitoring',
          subCategory2: 'Visualization',
          subCategory3: 'Performance Monitoring',
          subCategory4: 'Metrics & KPI'
        }, {
          name: 'Collaborative Ops',
          description: 'Continuous Testing is the process of executing automated tests as part of the software delivery pipeline in order to obtain feedback on the business risks.',
          subCategory1: 'PBPM',
          subCategory2: 'Self Service & Healing',
          subCategory3: 'Incident Management',
          subCategory4: 'Shared Services'
        }, {
          name: 'Continuous Feedback',
          description: 'Continuous Feedback focuses on providing ongoing feedback and coaching by openly discussing an employees strengths and weaknesses on a regular basis. Benefits of Continuous Feedback.',
          subCategory1: 'Action',
          subCategory2: 'Ownership',
          subCategory3: 'Frequency',
          subCategory4: 'Mechanism'
        }, {
          name: 'Continuous Improvement',
          description: 'Continuous Improvement is an ongoing effort to improve products, services or processes.',
          subCategory1: 'Optimization',
          subCategory2: 'Lean Thinking',
          subCategory3: 'Waste Reduction',
          subCategory4: 'Value Engineering'
        }, {
          name: 'Information Management',
          description: 'Information Management concerns the acquisition of information from one or more sources, the custodianship and the distribution of that information to those who need it, and its ultimate disposition through archiving or deletion.',
          subCategory1: 'Reporting',
          subCategory2: 'Metrics',
          subCategory3: 'Dashboard',
          subCategory4: 'Audit Trails'
        }, {
          name: 'Tool Management',
          description: 'Tool Management is needed in metalworking so that the information regarding the tools on hand can be uniformly organized and integrated.',
          subCategory1: 'Patch Management',
          subCategory2: 'Audit Mechanism',
          subCategory3: 'Access Control',
          subCategory4: 'Setup & Installation'
        }, {
          name: 'Knowledge Management',
          description: 'Knowledge Management (KM) is the process of creating, sharing, using and managing the knowledge and information of an organisation.[1] It refers to a multidisciplinary approach to achieving organisational objectives by making the best use of knowledge.',
          subCategory1: 'Bus Factor',
          subCategory2: 'Capture & Retention',
          subCategory3: 'KEDB',
          subCategory4: 'Sharing'
        }, {
          name: 'More',
          description: 'Additional Information about the people, process and technology.',
          subCategory1: 'Sub Category1',
          subCategory2: 'Sub Category2',
          subCategory3: 'Sub Category3',
          subCategory4: 'Sub Category4'
        }
      ]
    }
  }

  openCategoryModal(b, a) {
    this.setState({
      value: a.value
    }, function() {
      // console.log("second", a);
      hashHistory.push('/Service?theme=' + this.state.value);
    });
    // this.setState({active:false});
    this.setState({openModal: true})
  }

  closeModal() {
    this.setState({openModal: false})
  }

  handleClose = () => {
    this.setState({active: false});
    this.props.closeModal();
  }
  render() {
    const {active} = this.state
    let category = this.state.value;
    let subcategory;
      if (cookies.get('usertype') == "User" || cookies.get('usertype') == "Pair") {
      subcategory = (
      this.state.data.map((item,index)=>{
        if(this.props.value == item.name){
          return (
        <Dimmer onClickOutside={this.handleClose} active={active} page>
          <div>
            <Card stackable style={{
              padding: '20px',
              background: 'linear-gradient(to right, #17202A, #1C2833 ,#212F3D, #273746, #2C3E50)',
              marginLeft: '25%',
              color: 'black',
              width: '55%'
            }}>
              <Icon name='cancel' style={{
                float: 'left',
                position: 'absolute',
                float: 'right',
                marginTop: '-5%',
                color: 'orange',
                marginLeft: '100%',
                cursor: 'pointer'
              }} onClick={this.handleClose.bind(this)}/>

              <Grid stackable>
                 <Zoom>

              <Grid.Row>
                <Grid.Column width={12}>
                   <h3 style ={{
                     fontSize: '130%',
                     paddingTop: '15px',
                     color: 'white',
                      fontStyle: 'Arial',
                     marginLeft: '100%',
                     width: '250px',
                     marginBottom: '0%'
                   }}>
                    {item.name}</h3>
                     </Grid.Column>
                 </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={4}></Grid.Column>
                  <Grid.Column width={4}>
                    </Grid.Column>
                    <Grid.Column width={4}></Grid.Column>
                </Grid.Row>
                <Grid.Row stackable>
                  <p style ={{
                    fontSize: '120%',
                    paddingLeft: '4%',
                    fontStyle: 'Arial',
                    color: 'white',
                    textAlign:'justify',
                    paddingTop: '3%',
                    paddingRight: '3%',
                  }}>
                    {item.description}
                  </p>
                </Grid.Row>
                <Grid.Row stackable centered style ={{
                  fontSize: '100%',
                  fontStyle: 'Arial',
                  paddingLeft: '4%',
                  paddingTop: '4%',

                }}>
                  <Button stackable inverted centered id="Buttonmodel" onClick={this.openCategoryModal.bind(this)} value={item.subCategory1} color='green'>{item.subCategory1}</Button>
                  <Button stackable inverted centered id="Buttonmodel" onClick={this.openCategoryModal.bind(this)} value={item.subCategory2} color="blue">{item.subCategory2}</Button>
                  <Button inverted stackable centered id="Buttonmodel" onClick={this.openCategoryModal.bind(this)} value={item.subCategory3} color='red'>{item.subCategory3}</Button>
                  <Button stackable inverted centered id="Buttonmodel" onClick={this.openCategoryModal.bind(this)} value={item.subCategory4} color='teal'>{item.subCategory4}</Button>
                </Grid.Row>
            </Zoom>
              </Grid>
            </Card>
          </div>
        </Dimmer>
        )
        }
      })
    );
  }
  else{
      hashHistory.push('/');
  }
    return (
      <div>
        {subcategory}
      </div>
    )

  }
}

module.exports = MenuExampleContentProp;
