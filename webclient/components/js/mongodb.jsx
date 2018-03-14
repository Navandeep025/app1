import React, {Component} from 'react';
import {
  Card,
  Dimmer,
  Button,
  Icon,
  Grid,
  Step,
  Progress,
  Image
} from 'semantic-ui-react';
const {Link} = require('react-router');
import _ from 'lodash';
const {hashHistory} = require('react-router');
import Cookies from 'universal-cookie';
const cookies = new Cookies();
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import SubCategoryModal from './subCategoryModal';
import {Scrollbars} from 'react-custom-scrollbars';
import Fetchjsondata from '../../../json/user.json';
class MenuExampleContentProp extends Component {
  constructor() {
    super();
    this.state = {
      scoredata: []
    }
  }
  componentWillMount() {
    this.dashboard();
    // this.convertjson();
    // this.importmongo();
  }
  dashboard(){
    let dataContent = [];
    let context = this;
    $.ajax({
      url: '/users/mongo',
      type: 'GET',
      success: function(data) {
        for (let i = 0; i < data.length; i++) {
          for (let j = 0; j < data.length; j++) {
            if (data[i].score > data[j].score) {
              let a = data[i].score;
              data[i].score = data[j].score;
              data[j].score = a;
              let b = data[i].username;
              data[i].username = data[j].username;
              data[j].username = b;
            }
          }
        }

        for (let i = 0; i < data.length; i++) {
          let statusbarscore = ((data[i].score)/500)*100;
          dataContent.push({name: data[i].username, score: data[i].score, progress: statusbarscore});
        }
        this.setState({scoredata: dataContent});

      }.bind(this),
      error: function(err) {
        //console.log('error occurred on AJAX');
      }.bind(this)
    });
  }
  // convertjson(){
  //   Fetchjsondata.map((item, index) => {
  //     namearray.push({name:item.username});
  //     console.log("ch ",item.username);
  //     // namearray.includes(item.username){
  //     //   namearray.push({score: item.score});
  //     // }
  //   })
  //   // console.log("namearray ",namearray);
  // }
  importmongo(){
    $.ajax({
      url: '/trial/mongoimport',
      type: 'GET',
      success: function(data) {
        console.log("data");
      }.bind(this),
      error: function(err) {
        //console.log('error occurred on AJAX');
      }.bind(this)
    });

  }
  openSubCategoryModal(e, a) {
    // console.log("open ",a);
    this.setState({categoryModal: true});
    this.setState({value: a.value});
  }
  closeModal() {
    this.setState({categoryModal: false})
  }
  render() {
    {
      this.state.categoryModal
        ? <SubCategoryModal value={this.state.value} closeModal={this.closeModal.bind(this)}/>
        : null
    }
    //   const data = [{
    //   Name: this.state.scoredata.name,
    //   Score: 26,
    // }]
    const columns = [
      {
        Header: 'Name',
        accessor: 'name' // String-based value accessors!
      }, {
        Header: 'Score',
        accessor: 'usertype'
      }
    ]
    // console.log("progress ",typeof this.state.statusbarscore);
    const {active} = this.state
    let category = this.state.value;
    let subcategory;
    if (cookies.get('usertype') == "User" || cookies.get('usertype') == "Pair") {
      subcategory = this.state.scoredata.map((item, index) => {
        if (index == 0) {
          return (
            <div>
              {/* <h1>{Fetchjsondata[0].username}</h1> */}
              <Grid style={{
                width: '80%'
              }}>
                <Grid.Row>
                  <div id="image">
                    <div style={{
                      marginLeft: "47%",
                      width: '13%',
                      height: '13%',
                      position: "fixed",
                      marginTop: "0%"
                    }}>
                      <Image src='../image/trophy.jpg'/></div>
                    {/* <div  style={{marginLeft:"51.5%",marginTop:"-110",borderRadius:'25px',width:"4%",height:"4%",position:'fixed'}}><Image avatar id="trophyimage"  src='../image/background.jpg'/></div> */}
                  </div>
                </Grid.Row>
                <div id="gridelement" style={{
                  width: '65px',
                  height: '65px',
                  borderRadius: '40px',
                  backgroundColor: 'white',
                  marginTop: '20%',
                  marginLeft: '20%',
                  textAlign: 'center',
                  paddingTop: '2%',
                  border: 'solid transparent',
                  borderColor: '#ffbf00',
                  color: '#ffbf00'
                }}>{index + 1}</div>
                <Grid.Row columns={5} style={{
                  borderRadius: '25px',
                  borderStyle: 'groove',
                  marginLeft: '30%',
                  marginTop: '-6%'
                }}>
                  <Grid.Column width={3}>
                    {/* <Circle r={30} fill={{"text":'HH'}} text="hjb" stroke={{color:'#E65243'}} strokeWidth={2} /> */}
                    {/* <div style={{width:'25px',height:'25px',borderRadius:'25px',backgroundColor:'blue'}}>1</div> */}
                    <div><Image avatar src='../image/DSC00073.jpg' onClick={this.openSubCategoryModal.bind(this)} value={'Continuous Integration'} style={{
              width: '40%',
              height: '40px',
              borderRadius: '50px',
              border: 'solid transparent',
              borderColor: '#ffbf00'
            }}/></div>
                  </Grid.Column>
                  <Grid.Column width={2}>
                    <h3 style={{
                      paddingTop: '7%',
                      color: "#c12076"
                    }} onClick={this.openSubCategoryModal.bind(this)} value={'Continuous Integration'}>{item.name}</h3>
                  </Grid.Column>
                  <Grid.Column width={3}>
                    <h3 style={{
                      paddingTop: '4%',
                      color: "#c12076"
                    }} onClick={this.openSubCategoryModal.bind(this)} value={'Continuous Integration'}>{item.score}</h3>
                  </Grid.Column>
                  <Grid.Column width={6}>{item.statusbarscore}
                    <Progress percent={parseInt(item.progress)} size='small' style={{
                      marginTop: '4%',
                      color: "#ff7272"
                    }} onClick={this.openSubCategoryModal.bind(this)} value={'Continuous Integration'}></Progress>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </div>
          )
        } else {
          return (
            <div>
              <Grid style={{
                width: '80%'
              }}>
                {/* <Grid.Row columns={2} width={4}> */}
                {/* <Segment style={{width:'90%',height:'10%',marginTop:"3%",borderRadius:'25px',marginLeft:'50px'}}> */}

                <div style={{
                  width: '65px',
                  height: '65px',
                  borderRadius: '40px',
                  backgroundColor: 'white',
                  marginTop: '3%',
                  marginLeft: '20%',
                  textAlign: 'center',
                  paddingTop: '2%',
                  border: 'solid transparent',
                  borderColor: '#ffbf00',
                  color: '#ffbf00'
                }}>{index + 1}</div>
                <Grid.Row columns={5} style={{
                  borderRadius: '25px',
                  borderStyle: 'groove',
                  marginLeft: '30%',
                  marginTop: '-6%'
                }}>

                  {/* <div class="circle" style={{width: "50px",height: "50px", borderRadius: "50%", fontSize: "50px",textAlign: "center"}}>Hello I am A Circle</div> */}
                  <Grid.Column width={3}>
                    {/* <Circle r={30} fill={{"text":'HH'}} text="hjb" stroke={{color:'#E65243'}} strokeWidth={2} /> */}
                    {/* <div style={{width:'25px',height:'25px',borderRadius:'25px',backgroundColor:'blue'}}>1</div> */}
                    <div><Image src='../image/DSC00073.jpg' style={{
              width: '40%',
              height: '40px',
              borderRadius: '50px',
              border: 'solid transparent',
              borderColor: '#ffbf00'
            }}/></div>
                  </Grid.Column>
                  <Grid.Column width={2}>
                    <h3 style={{
                      paddingTop: '7%',
                      color: "#c12076"
                    }}>{item.name}</h3>
                  </Grid.Column>
                  <Grid.Column width={3}>
                    <h3 style={{
                      paddingTop: '4%',
                      color: "#c12076"
                    }}>{item.score}</h3>
                  </Grid.Column>
                  <Grid.Column width={6}>
                    <Progress percent={parseInt(item.progress)} size='small' style={{
                      marginTop: '4%',
                      color: "#ff7272"
                    }} onClick={this.openSubCategoryModal.bind(this)} value={'Continuous Integration'}></Progress>
                  </Grid.Column>
                </Grid.Row>
                {/* </Grid.Column> */}
                {/* </Segment> */}
                {/* </Grid.Row> */}
              </Grid>

            </div>
          )
        }
      }// console.log("inside map ",item.name);

      );
    } else {
      hashHistory.push('/');
    }
    return (
      <div style={{

      }}>
        {subcategory}
      </div>
    )

  }
}

module.exports = MenuExampleContentProp;
