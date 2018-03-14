import React, {Component} from 'react';
import {
  Dropdown,
  Grid,
  Header,
  List,
  Button,
  Icon,
  Form,
  Input,
  TextArea
} from 'semantic-ui-react';
const {Link} = require('react-router');
import { Segment } from 'semantic-ui-react'
const ReactToastr = require('react-toastr');
import { Fade, Flip, Rotate, Zoom} from 'react-reveal';
const {ToastContainer} = ReactToastr;
const ToastMessageFactory = React.createFactory(ReactToastr.ToastMessage.animation);
const {hashHistory} = require('react-router');
import Cookies from 'universal-cookie';
import Uploadfile from './uploadCSV/uploadCSV.jsx';
import Deletejonjenkins from './uploadCSV/deletejobjenkin.jsx';
import Triggerbuildjenkins from './uploadCSV/triggerbuildjenkin.jsx';
const cookies = new Cookies();
class MenuExampleContentProp extends Component {
  constructor() {
    super();
    this.state = {
      header: '',
      description: '',
      checkfile: true,
      dataFile: '',
      token: "",
      temp: 0,
      option:'',
    jobs : [
        {
          text: 'Create job',
          value: 'create'
        }, {
          text: 'Delete job',
          value: 'delete'
        }, {
          text: 'Tigger job',
          value: 'triggerBuild'
        }
      ],
      gitarr: [
        {
          text: 'Freestyle Project',
          value: 'freestyle'
        }, {
          text: 'Pipeline Project',
          value: 'pipeline'
        }
      ],
    options : [
        {
          text: 'Jenkins',
          value: 'Jenkins',
          image: { avatar: true, src: '../image/JenkinsLogo.jpg' }
        }, {
          text: 'Bamboo',
          value: 'Bamboo',
          image: { avatar: true, src: '../image/logoBambooPNG.png' }
        }
      ],
      data : [
        {
          header: 'Dependency Management',
          description: 'Dependency Management allows to consolidate and centralize the management of dependency versions without adding dependencies which are inherited by all children. This is especially useful when you have a set of projects (i.e. more than one) that inherits a common parent.'
        }, {
          header: 'Code Quality',
          description: 'Code Quality is a loose approximation of how long-term useful and long-term maintainable the code is.'
        }, {
          header: 'Build/ Unit Testing',
          description: 'Unit Testing is a software development process in which the smallest testable parts of an application, called units, are individually and independently scrutinized for proper operation. Unit testing can be done manually but is often automated.'
        }, {
          header: 'Pre Commit Testing',
          description: 'A pre-commit check is invoked right before a change is committed into the repository. This is a perfect place to run a quick smoke test to ensure that no broken code is ever checked in. Many source control systems, including the powerful Git, support pre-commit check as part of its hooks system. Unfortunately, based on my (limited) observations, leveraging pre-commit feature is not something every single developer practices yet.'
        }, {
          header: 'TEM | TDM',
          description: 'Test Data Management is the process of quickly creating realistic test data at the time it is required for testing without manual intervention.'
        }, {
          header: 'Automation',
          description: 'Agile Automation refers to the application of select Agile software development principles, patterns and practices, to the area of industrial automation and process control software development.'
        }, {
          header: 'Test Management',
          description: 'Continuous testing acts as the key driver for DevOps initiatives to yield desired outcomes.Automated test orchestration solutions build end-to-end automated solutions for Continuous Testing that work with Continuous Integration and Continuous Delivery tools.'
        }, {
          header: 'Functional | Non Functional',
          description: 'For testing functional requirements, Continuous Testing often involves unit tests, API testing, integration testing, and system testing. For testing non-functional requirements, it involves practices such as static code analysis, security testing, performance testing,compliance etc.'
        }, {
          header: 'Version Control',
          description: 'Version Control is not strictly speaking an Agile "practice" insofar as it is now (fortunately) widespread in the industry as a whole.'
        }, {
          header: 'Branching Strategy',
          description: 'Almost all version control systems today support branches–independent lines of work that stem from one central code base.Three branching strategies for agile teams : Release branching,Feature branching,Task branching.Many agile teams looking for a more flexible branching model have moved from release branching to feature branching.'
        }, {
          header: 'Unit Testing',
          description: 'Unit Testing is probably the most ignored and misunderstood software engineering process in the Agile software development process. For developers, unit testing is boring, tedious and time-consuming.'
        }, {
          header: 'Code Review',
          description: 'To ensure software quality, every line of code must be reviewed. A CI server can check developed code for test coverage.'
        }, {
          header: 'Configuration Management',
          description: 'Configuration management refers to the process by which all artifacts relevant to your project, and the relationships between them, are stored, retrieved, uniquely identified, and modified.These capabilities give us several very important benefits:Disaster Recovery,Auditability,Higher Quality,Capacity Management,Response to defects.'
        }, {
          header: 'Change Management',
          description: ''
        }, {
          header: 'Deployment Automation',
          description: ''
        }, {
          header: 'Artifact Management',
          description: ''
        }, {
          header: 'Architecture',
          description: ''
        }, {
          header: 'Release Scope',
          description: ''
        }, {
          header: 'Security Debt',
          description: ''
        }, {
          header: 'Technical Debt',
          description: ''
        }, {
          header: 'On Demand Provisioning',
          description: ''
        }, {
          header: 'CMDB',
          description: ''
        }, {
          header: 'Environmen Management',
          description: ''
        }, {
          header: 'Auto Discovery',
          description: ''
        }, {
          header: 'Release Strategy',
          description: ''
        }, {
          header: 'Roll Back & Forward Strategy',
          description: ''
        }, {
          header: 'Governance',
          description: ''
        }, {
          header: 'Release Management',
          description: ''
        }, {
          header: 'Infra Monitoring',
          description: ''
        }, {
          header: 'Visualization',
          description: ''
        }, {
          header: 'Performance Monitoring',
          description: ''
        }, {
          header: 'Metrics & KPI',
          description: ''
        }, {
          header: 'PBPM',
          description: ''
        }, {
          header: 'Self Service & Healing',
          description: ''
        }, {
          header: 'Incident Management',
          description: ''
        }, {
          header: 'Shared Services',
          description: ''
        }, {
          header: 'Action',
          description: ''
        }, {
          header: 'Ownership',
          description: ''
        }, {
          header: 'Frequency',
          description: ''
        }, {
          header: 'Mechanism',
          description: ''
        }, {
          header: 'Optimization',
          description: ''
        }, {
          header: 'Lean Thinking',
          description: ''
        }, {
          header: 'Waste Reduction',
          description: ''
        }, {
          header: 'Value Engineering',
          description: ''
        }, {
          header: 'Reporting',
          description: ''
        }, {
          header: 'Metrics',
          description: ''
        }, {
          header: 'Dashboard',
          description: ''
        }, {
          header: 'Audit Trails',
          description: ''
        }, {
          header: 'Patch Management',
          description: ''
        }, {
          header: 'Audit Mechanism',
          description: ''
        }, {
          header: 'Access Control',
          description: ''
        }, {
          header: 'Setup & Installation',
          description: ''
        }, {
          header: 'Bus Factor',
          description: ''
        }, {
          header: 'Capture & Retention',
          description: ''
        }, {
          header: 'KEDB',
          description: ''
        }, {
          header: 'Sharing',
          description: ''
        }, {
          header: 'Sub Category1',
          description: ''
        }, {
          header: 'Sub Category2',
          description: ''
        }, {
          header: 'Sub Category3',
          description: ''
        }, {
          header: 'Sub Category4',
          description: ''
        }
      ]
    }
    this.getData = this.getData.bind(this);
    this.ticketFile = this.ticketFile.bind(this);
    this.check = this.check.bind(this);
    this.ticket = this.ticket.bind(this);
    this.submitData = this.submitData.bind(this);
    this.checkForaddedNewScenarioAlert = this.checkForaddedNewScenarioAlert.bind(this);
  }
  componentWillMount() {
    this.getData();
  }
  checkForaddedNewScenarioAlert() {
    this.refs.asd.success(
      'ticket raised successfully',
      '', {
        timeOut: 3000,
        extendedTimeOut: 3000
      }
    );
  }
  getData() {
    // $.ajax({
    //     url: '/trial',
    //     type: 'GET',
    //     success: function(data) {
    //       console.log("data");
    //     }.bind(this),
    //     error: function(err) {
    //       console.log('error occurred on AJAX');
    //     }.bind(this)
    //   });
    let theme = window.location.hash.split('theme=')[1];
    this.state.data.map((item,index)=>{
      if(theme == item.header){
        // console.log('getdata', theme, " ",item.header);
        this.setState({header: item.header});
        this.setState({description: item.description})
      }
    })
  }
  updatesearchQueryDomain(e, a) {
    let res = a.value;
    this.setState({tools: res})
  }
  updatesearchQueryPriority(e, a) {
    let res = a.value;
    this.setState({proirity: res})
  }
  selectType(e, a) {
    this.setState({selected: a.value});
  }
  check(){
    if(this.state.temp == 0){
      this.ticket();
    }
    else{
      this.ticketFile();
    }
  }
  ticket() {
    let n = 1;
    let context = this;
    let subject = this.state.header + "-" + this.state.tools;
    let description = this.refs.desc.value;
    let pid = this.state.proirity;
    $.ajax({
      url: "http://10.142.207.15:8080/redmine/issues.json?key=b7e7bfe91e3258ef71ff3cea2ba4d747b1c05e5c",
      type: 'POST',
      data: {
        issue: {
          project_id: n,
          subject: subject,
          description: description,
          priority_id: pid
        }
      },
      success: function(data) {
        // console.log('success', data);
        location.reload();
        context.checkForaddedNewScenarioAlert();
      }.bind(this),
      error: function(err) {
        console.log('error occurred on AJAX', err);
      }.bind(this)
    });
  }
  submitData(e) {
    e.preventDefault();
    let data = new FormData();
    this.setState({temp:1});
    let context = this;
    data.append('file', this.state.dataFile);
    $.ajax({
      type: "POST",
      url: "/files",
      data: data,
      dataType: "JSON",
      processData: false,
      contentType: false
    }).done(function(json) {
      context.setState({token: json.upload.token});
    });
  }
  changeFile(e) {
    this.setState({dataFile: e.target.files[0]});
  }
  joboperations(e,a){
    console.log("inside",a.value);
    let result = a.value;
    if(result === 'create'){
      this.setState({option:'create'})
    }
    else if(result == 'delete'){
      this.setState({option:'delete'})
    }
    else if(result == 'triggerBuild'){
      this.setState({option:'trigger build'})
    }

  }

  ticketFile() {
    let n = 1;
    let subject = this.state.header + "-" + this.state.tools;
    let description = this.refs.desc.value;
    let pid = this.state.proirity;
    let context = this;
    $.ajax({
      url: "http://10.142.207.15:8080/redmine/issues.json?key=b7e7bfe91e3258ef71ff3cea2ba4d747b1c05e5c",
      type: 'POST',
      data: {
        issue: {
          project_id: n,
          subject: subject,
          description: description,
          priority_id: pid,
          uploads: [
            {
              token: context.state.token,
              filename: this.state.dataFile.name
            }
          ]
        }
      },
      success: function(data) {
        // console.log('success', data);
        context.checkForaddedNewScenarioAlert();
        location.reload();
      }.bind(this),
      error: function(err) {
        console.log('error occurred on AJAX', err);
      }.bind(this)
    });
  }
  render() {
    // console.log(",,,,,,,,,,,,,",this.state.selected);
    // const csvData = [
    //   ['name', 'category', 'description', 'errormsg'],
    //   ['login', 'devops', 'login description', 'error occured'],
    //   ['home page', 'test', 'home page description', 'error occured'],
    //   ['landing page', 'code', 'landing page description', 'error occured'],
    //   ['logout', 'environmentalsetup', 'logout description', 'error occured']
    // ];
    // let options = [
    //   {
    //     text: 'Jenkins',
    //     value: 'Jenkins',
    //     image: { avatar: true, src: '../image/JenkinsLogo.jpg' }
    //   }, {
    //     text: 'Bamboo',
    //     value: 'Bamboo',
    //     image: { avatar: true, src: '../image/logoBambooPNG.png' }
    //   }
    // ];
    let options1 = [
      {
        text: 'Low',
        value: '1',
        image: { avatar: true, src: '../image/low.png' }
      }, {
        text: 'Normal',
        value: '2',
        image: { avatar: true, src: '../image/normal.jpg' }
      }, {
        text: 'High',
        value: '3',
        image: { avatar: true, src: '../image/high.png' }
      }, {
        text: 'Immediate',
        value: '5',
        image: { avatar: true, src: '../image/urgent.jpg' }
      }
    ];

    let services;
    if (cookies.get('usertype') == "User" || cookies.get('usertype') == "Pair") {
  services=(
    <div id='lapgirl'>
      <Grid>
        <Grid.Column width={1}/>

        <Grid.Column width={7} style={{
          marginTop: '1%'
        }}>
        <Zoom>
        <Segment raised style={{  marginTop: '3%', borderRadius: '15px'}}>
        <Fade right>  <Header style={{ fontStyle:'Arial', fontSize:'125%',color:'black',textAlign:'center',margin:'2%'}}>{this.state.header}</Header></Fade>
          <Fade right delay={800}><h3 style={{fontStyle:'Arial', fontSize:'105%', textAlign:'justify',color:'rgba(0, 0, 0, 0.7)',margin:'2%'}}>{this.state.description}</h3></Fade>
        </Segment>
      </Zoom>
        </Grid.Column>
        <Grid.Column width={2}/>
        <Zoom>
          <div style={{backgroundColor:'white',marginTop: '3%', borderRadius: '15px', width:'130%' }}>
          {/* <Segment raised style={{  marginTop: '3%', borderRadius: '15px'}}> */}
          <Fade left delay={900}>
        <Grid.Column width={5} style={{  marginTop: '3%',marginLeft:'9%'}}>
          <div style={{
            paddingBottom: '3%',marginTop:'11%',paddingLeft:'7%'
          }}>
            <h3 >{this.props.category}</h3>
            <Header style={{ fontStyle:'Arial', fontSize:'125%',color:'black', paddingLeft: '5px',paddingTop:'8%'}}>Tool</Header>
            <Dropdown style={{width:"50%", fontStyle:'Arial', fontSize:'95%'}} placeholder='Select Tools' onChange={this.updatesearchQueryDomain.bind(this)} selection options={this.state.options}/>
            {this.state.tools == 'Jenkins' ?
            // <div><p style={{color:'black'}}>create</p></div>
            <div>
              <Header style={{ fontStyle:'Arial', fontSize:'125%',color:'black', paddingLeft: '5px',paddingTop:'8%'}}>Jobs</Header>
              <Dropdown id="jobdropdown" onChange={this.joboperations.bind(this)} placeholder='Select Customer Journey' style={{
                  fontFamily: 'Arial',color:'black'
                }} search selection options={this.state.jobs}/></div>
                 :null
            }
            {this.state.option == 'create' ?
            <div>
            <Header style={{ fontStyle:'Arial', fontSize:'125%',color:'black', paddingLeft: '5px',paddingTop:'8%'}}>Select type of Job</Header>
            <Dropdown id="jobdropdown" placeholder='Job type' onChange={this.selectType.bind(this)} search selection options={this.state.gitarr} style={{marginTop:'3%'}}/><br/><br/>
            <Uploadfile selectedjob={this.state.selected}/>
          </div>:null}
            {this.state.option == 'delete' ?
            <div>
            <Deletejonjenkins/>
          </div> : null}
          {this.state.option == 'trigger build' ?
          <div>
          <Triggerbuildjenkins/>
        </div> : null}
          {/* <Header style={{ fontStyle:'Arial', fontSize:'125%',color:'black', paddingLeft: '5px'}}>Priority</Header>
          <Dropdown style={{width:"80%", fontStyle:'Arial', fontSize:'95%'}} placeholder='Select Priority' onChange={this.updatesearchQueryPriority.bind(this)} selection options={options1}/>

          <Header style={{ fontStyle:'Arial', fontSize:'125%',color:'black', paddingLeft: '5px'}}>Attachments</Header>
          <Form method='post' encType='multipart/form-data'>
            <Input style={{width:"80%",marginTop:"1%"}}  type='file' name='uploadedFile' onChange={this.changeFile.bind(this)}/><br/><br/>
            <Button color='teal' type='submit' onClick={this.submitData.bind(this)} style={{ fontStyle:'Arial', fontSize:'85%',color:'black'}}><Icon name='upload'/>Upload</Button>
          </Form>
          <Header style={{ fontStyle:'Arial', fontSize:'125%',color:'black', paddingLeft: '5px'}}>Note</Header>
          <Form style={{
            marginTop: '3%',
            width: '50%'
          }}>
            <textArea style={{width:"160%"}} rows="4" placeholder='Tell us more' ref='desc'/>
          </Form>
          <Button attached color='teal' style={{
            marginTop: '2%', fontStyle:'Arial', fontSize:'100%', borderRadius:'3px',color:'black',width:'80%',marginBottom:'3%'
          }} onClick={this.check.bind(this)}>Raise a ticket</Button> */}


          </div>
        </Grid.Column>
      </Fade>
        {/* </Segment> */}
      </div>
        </Zoom>
      </Grid>
      <ToastContainer ref='asd'
        toastMessageFactory={ToastMessageFactory}
        className='toast-top-center' style={{marginTop: '8%'}}/>

    </div>
  );
}
else{
    hashHistory.push('/');
}

    return (
      <div>
            {services}
          </div>

    )
  }
}

module.exports = MenuExampleContentProp;
