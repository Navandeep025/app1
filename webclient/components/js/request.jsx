import React, { Component } from 'react'
import { Accordion, Icon ,Segment, Menu} from 'semantic-ui-react'
import _ from 'lodash';
import { Fade, Flip, Rotate, Zoom} from 'react-reveal';
const {hashHistory} = require('react-router');
import Cookies from 'universal-cookie';
const cookies = new Cookies();
class AccordionExampleStyled extends Component {
constructor(){
super();
this.state = {
  accordionData : [],
arr:[],
arr1:[],
  menuTodayClick:'gainsboro',
  menuUpcomingClick:'',
  menuCompletedClick:'',
      activeItem: 'Not Started',
      arrToAccordion:[],
      arrToAccordion1:[],
      arrToAccordion2:[]
  },
this.viewStatus = this.viewStatus.bind(this);

}
componentWillMount(){
this.viewStatus();
// var arrToAccordion = [{title: 1, content: <div>aaaa</div>},{title: 2, content: <div>bbbb</div>},{title: 3, content: <div>cccc</div>}]
}
viewStatus(){
let context = this;
let viewData = [];
 let requiredData = [];
  $.ajax({
    url: "http://10.142.207.15:8080/redmine/issues.json?key=b7e7bfe91e3258ef71ff3cea2ba4d747b1c05e5c&include=attachments",
    type: 'GET',
    success: function(data) {
      //  console.log('success',typeof data,data);
      //  Object.keys(data).forEach(function(key) {
      // key: data.issues.id
      viewData.push(data);
      // context.setState({arr2:data});
    // console.log('viewdata object', viewData);
viewData.map((item)=>{
// console.log(item);
item.issues.map((item1)=>{
// console.log("ii",item1.attachments);
  requiredData.push({id:item1.id,status:item1.status.name, subject:item1.subject, desc:item1.description, prior:item1.priority.name, startDate: item1.start_date, attachments: item1.attachments});
});


});
// console.log("ssss",requiredData, typeof requiredData);
// this.setState({accordionData:requiredData},function(){
// console.log("hiiii",this.state.accordionData);
// });
this.setState({arr1:requiredData},function(){
  console.log("before func.....");
  this.func();
});
// console.log("gujdasdgjasdg",this.state.arr1);
  }.bind(this),
    error: function(err) {
    console.log('error occurred on AJAX',err);
    }.bind(this)
  });
}
func() {
  var arrToAccordion=[];
  var arrToAccordion1=[];
  var arrToAccordion2=[];
  // console.log("aaa",this.state.arr1);
  this.state.arr1.map(function(item, key){
    // console.log(item.attachments);
    let attachementsData = item.attachments.map(function (item1, key) {
        return(<a style={{padding:"5px"}} href={item1.content_url}>{item1.filename} </a>);
    })
  let id =  item.subject;
  if(item.status == 'New'){
    arrToAccordion.push({title: id, content: <div><table style={{marginLeft:'4%'}}><tr><td style={{paddingTop:'2%'}}> Description </td><td style={{paddingTop:'2%'}}>: {item.desc}</td></tr>
    <tr><td style={{paddingTop:'2%'}}> Status </td><td style={{paddingTop:'2%'}}>: {item.status}</td></tr>
    <tr><td style={{paddingTop:'2%'}}> Priority </td><td style={{paddingTop:'2%'}}>: {item.prior}</td></tr>
    <tr><td style={{paddingTop:'2%'}}> attachment</td><td style={{paddingTop:'2%'}}>:{attachementsData}</td></tr>
    {/* <tr><td style={{paddingTop:'2%'}}> attachment name </td><td style={{paddingTop:'2%'}}>: {item.att}</td></tr> */}
    <tr><td style={{paddingTop:'2%'}}> StartDate </td><td style={{paddingTop:'2%'}}>: {item.startDate}</td></tr></table></div>});
    }
    else if (item.status == 'In Progress'){
      arrToAccordion1.push({title: id, content: <div><table style={{marginLeft:'4%'}}><tr><td style={{paddingTop:'2%'}}> Description </td><td style={{paddingTop:'2%'}}>: {item.desc}</td></tr>
      <tr><td style={{paddingTop:'2%'}}> Status </td><td style={{paddingTop:'2%'}}>: {item.status}</td></tr>
      <tr><td style={{paddingTop:'2%'}}> Priority </td><td style={{paddingTop:'2%'}}>: {item.prior}</td></tr>
      <tr><td style={{paddingTop:'2%'}}> attachment</td><td style={{paddingTop:'2%'}}>:{attachementsData}</td></tr>
      {/* <tr><td style={{paddingTop:'2%'}}> attachment name </td><td style={{paddingTop:'2%'}}>: {item.att}</td></tr> */}
      <tr><td style={{paddingTop:'2%'}}> StartDate </td><td style={{paddingTop:'2%'}}>: {item.startDate}</td></tr></table></div>});
    }
    else{
      arrToAccordion2.push({title: id, content: <div><table style={{marginLeft:'4%'}}><tr><td style={{paddingTop:'2%'}}> Description </td><td style={{paddingTop:'2%'}}>: {item.desc}</td></tr>
      <tr><td style={{paddingTop:'2%'}}> Status </td><td style={{paddingTop:'2%'}}>: {item.status}</td></tr>
      <tr><td style={{paddingTop:'2%'}}> Priority </td><td style={{paddingTop:'2%'}}>: {item.prior}</td></tr>
      <tr><td style={{paddingTop:'2%'}}> attachment</td><td style={{paddingTop:'2%'}}>:{attachementsData}</td></tr>
      {/* <tr><td style={{paddingTop:'2%'}}> attachment name </td><td style={{paddingTop:'2%'}}>: {item.att}</td></tr> */}
      <tr><td style={{paddingTop:'2%'}}> StartDate </td><td style={{paddingTop:'2%'}}>: {item.startDate}</td></tr></table></div>});
    }
  // return(<p></p>)
  });
  this.setState({arrToAccordion:arrToAccordion,arrToAccordion1:arrToAccordion1,arrToAccordion2:arrToAccordion2},function(){
    this.setState({container:(<div><Accordion style={{margin:"3%",width:"90%"}} panels={this.state.arrToAccordion} /></div>)});
  });
}
TodayClick(e, { name }){
  var arrToAccordion = [{title: 1, content: <div>aaaa</div>},{title: 2, content: <div>bbbb</div>},{title: 3, content: <div>cccc</div>}]
  this.setState({activeItem: name,menuTodayClick:'gainsboro',menuUpcomingClick:'',menuCompletedClick:'',container:(<div><Accordion style={{margin:"3%",width:"90%"}} panels={this.state.arrToAccordion} /></div>)});
}
planClick(e, { name }){
  var arrToAccordion = [{title: 1, content: <div>aaaa</div>},{title: 2, content: <div>bbbb</div>},{title: 3, content: <div>cccc</div>}]
  this.setState({activeItem: name,menuTodayClick:'',menuUpcomingClick:'gainsboro',menuCompletedClick:'',container:(<div><Accordion style={{margin:"3%",width:"90%"}} panels={this.state.arrToAccordion1} /></div>)});
}
nextClick(e, { name }){
  var arrToAccordion = [{title: 1, content: <div>aaaa</div>},{title: 2, content: <div>bbbb</div>},{title: 3, content: <div>cccc</div>}]
  this.setState({activeItem: name,menuTodayClick:'',menuUpcomingClick:'',menuCompletedClick:'gainsboro',container:(<div><Accordion style={{margin:"3%",width:"90%"}} panels={this.state.arrToAccordion2} /></div>)});
}

  render() {
const {activeItem} = this.state

let i = 0;
let arr = this.state.arr1;
function problemStatement() {
      let seqTitle = 'Sequence';
      while (i < arr.length) {
        ++i;
        return seqTitle + ' ' + i;
      }
    }
    let a = 0;
    function problemDescription() {
      let mapData = '';
      if(arr.length > 0) {
      a = a + 1;
        let arrData = arr;
        // console.log("arrData: ",arrData);
        // mapData = arrData.map(function(item) {
if(a<arr.length) {
          return (<li style={{textAlign: 'left', color: 'black'}}>{arr[a].subject}</li>);
}
        // });
      }
      return (
        <div><ol>{mapData}</ol></div>
      );
    }
    // const panels = _.times(arr.length , () => ({title: problemStatement(), content: problemDescription()}));

    let arrToAccordion = [];
    let arrToNS = [];
    let arrToIP = [];
    let arrToComp = [];
      let container = <Accordion style={{margin:"3%",width:"90%"}} panels={arrToAccordion} />;
      let request;
      if (cookies.get('usertype') == "User" || cookies.get('usertype') == "Pair") {
    request=(
      <div id="request">
        <Flip down big>
        <h2 style={{marginLeft:"2%",paddingTop:'2%',color:'white'}}>My Requests</h2>
      </Flip>
      <Zoom delay={300}>
        <Segment style={{marginLeft:'5%',marginRight:'5%',border:'none',marginTop:'2%'}}>
          <Rotate delay={500}>
        <Menu attached='top' tabular>
                    <Menu.Item name='Not Started' style={{backgroundColor:this.state.menuTodayClick}} active={activeItem === 'Not Started'} onClick= {this.TodayClick.bind(this)}/>
                   <Menu.Item name='Inprogress' style={{backgroundColor:this.state.menuUpcomingClick}} active={activeItem === 'Inprogress'}  onClick= {this.planClick.bind(this)}/>
                   <Menu.Item name='Completed' style={{backgroundColor:this.state.menuCompletedClick}} active={activeItem === 'Completed'} onClick= {this.nextClick.bind(this)}/>
                 </Menu>
      {this.state.container}
      </Rotate>
      </Segment>
      </Zoom>
      </div>
    );
  }
  else{
      hashHistory.push('/');
  }

return (
  <div>
        {request}
      </div>

)
  }
}
module.exports = AccordionExampleStyled;
