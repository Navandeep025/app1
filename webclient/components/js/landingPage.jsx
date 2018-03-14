import React, {Component} from 'react';
import {
  Menu,
  Dimmer,
  Image,
  Card,
  Button,
  Label,
  Grid
} from 'semantic-ui-react';
const {Link} = require('react-router');
import SubCategoryModal from './subCategoryModal';
import { Fade, Flip, Rotate, Zoom} from 'react-reveal';
import ReactCardFlip from 'react-card-flip';
import { HexGrid, Layout, Hexagon, Text, Pattern } from 'react-hexgrid';
const {hashHistory} = require('react-router');
import Cookies from 'universal-cookie';
const cookies = new Cookies();

class MenuExampleContentProp extends Component {
  constructor() {
    super();
    this.state = {
      // active: true,
      categoryModal: false,
      isFlipped: false,
      values1: '',
      values:'' ,
      value: ''
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
  e.preventDefault();
  this.setState({ isFlipped: !this.state.isFlipped });
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
    const {active} = this.state
    let MenuExampleContentProp;
    if (cookies.get('usertype') == "User" || cookies.get('usertype') == "Pair") {
  MenuExampleContentProp=( <div  id='landinglap' style={{
    paddingLeft:'4%'
  }}>
      {this.state.categoryModal
      ? <SubCategoryModal  value= {this.state.value} closeModal={this.closeModal.bind(this)}/>
      : null}

      <Grid columns={4} style={{
      marginLeft: '2%',
    }}>
    {Array(1).fill(void 0).map( (val, index) =>
      <Zoom key={index} duration={1500}>
      <Grid.Row  style={{
      marginTop: '3%'
    }}>
        <Fade down big>
        <Grid.Column style={{paddingRight:'5%',paddingBottom:'3%'}}>
    <Card color='olive' onClick={this.openSubCategoryModal.bind(this)} value={'Continuous Integration'}  style={{
            height: '221.11px',
            width: '290px'
          }}>
             <Card.Content>
              <Label as='a' attached='top' color='olive' ribbon>Continuous Integration</Label>
              <Card.Description>
                 <Rotate up left delay={1000}>
                   <Image floated='left' size='tiny' src='../image/ci.PNG'/>Continuous Integration (CI) is a development practice that requires developers to integrate code into a shared repository several times a day.
               </Rotate>
               </Card.Description>
             </Card.Content>
         </Card>
        </Grid.Column>
      </Fade>
      <Fade left big>
        <Grid.Column style={{paddingRight:'5%',paddingBottom:'3%'}}>
          <Card color='blue' onClick={this.openSubCategoryModal.bind(this)} value={'Continuous Testing'} style={{
            height: '221.11px',
            width: '290px'
          }}>
            <Card.Content>
              <Label as='a' color='blue' attached='top' ribbon>Continuous Testing</Label>
              <Card.Description>
                <Rotate down left delay={1000}>
                <Image floated='left' size='tiny' src='../image/ct.PNG'/>Continuous Testing is the process of executing automated tests as part of the software delivery pipeline in order to obtain feedback on the business risks associated with a software release candidate as rapidly as possible.
                </Rotate>
              </Card.Description>
            </Card.Content>
          </Card>
        </Grid.Column>
      </Fade>
      <Fade up big>
        <Grid.Column style={{paddingRight:'5%',paddingBottom:'3%'}}>
          <Card color='violet' onClick={this.openSubCategoryModal.bind(this)} value={'Continuous Development'} style={{
            height: '221.11px',
            width: '290px'
          }}>
            <Card.Content>
              <Label as='a' color='violet' attached='top' ribbon>Continuous Development</Label>
              <Card.Description>
                <Rotate up right delay={1000}>
                <Image floated='left' size='tiny' src='../image/cd.PNG'/>Continuous Development is an umbrella term that describes several aspects of iterative software application development, including continuous integration, continuous delivery, continuous testing and continuous deployment.
              </Rotate>
              </Card.Description>
            </Card.Content>
          </Card>
        </Grid.Column>
      </Fade>
      <Fade right big>
        <Grid.Column>
          <Card color='red' onClick={this.openSubCategoryModal.bind(this)} value={'Continuous Deployment'} style={{
            height: '221.11px',
            width: '290px'
          }}>
            <Card.Content>
              <Label as='a' color='red' attached='top' ribbon>Continuous Deployment</Label>
              <Card.Description>
                <Rotate down left delay={1000}>
                <Image floated='left' size='tiny' src='../image/cdr.PNG'/>Continuous Deployment is a software engineering approach in which teams produce software in short cycles, ensuring that the software can be reliably released at any time. It aims at building, testing, and releasing software faster and more frequently.
              </Rotate>
              </Card.Description>
            </Card.Content>
          </Card>
        </Grid.Column>
      </Fade>
      </Grid.Row>
</Zoom>
)}
{Array(1).fill(void 0).map( (val, index) =>
<Zoom key={index} duration={1500}>
      <Grid.Row>
      <Fade right big>
        <Grid.Column style={{paddingRight:'5%',paddingBottom:'3%'}}>
          <Card color='green' onClick={this.openSubCategoryModal.bind(this)} value={'Continuous Planning'} style={{
            height: '221.11px',
            width: '290px'
          }}>
            <Card.Content>

              <Label as='a' attached='top' color= "green" ribbon >Continuous Planning</Label>
              <Card.Description>
                <Flip x delay={1000}>
                <Image floated='left' size='tiny' src='../image/cp.PNG'/>Continuous Planning refers to the process of planning in a world under continual change. Traditionally, as new world information is encountered, a planner adapts to it through the refinement of the plans that are under construction.
              </Flip>
              </Card.Description>
            </Card.Content>
          </Card>
        </Grid.Column>
      </Fade>
      <Fade up big>
        <Grid.Column style={{paddingRight:'5%',paddingBottom:'3%'}}>
          <Card color='orange' onClick={this.openSubCategoryModal.bind(this)} value={'Agile Infrastructure'}  style={{
            height: '221.11px',
            width: '290px'
          }}>
            <Card.Content>

              <Label as='a' color='orange' attached='top' ribbon>Agile Infrastructure</Label>

              <Card.Description>
                <Flip y delay={1000}>
                <Image floated='left' size='tiny' src='../image/agile.PNG'/>An agile IT infrastructure enabled with cloud computing and latest models have the potential to drive new business value, reduce cost and time to market.
              </Flip>
              </Card.Description>
            </Card.Content>
          </Card>
        </Grid.Column>
      </Fade>
      <Fade down big>
        <Grid.Column style={{paddingRight:'5%',paddingBottom:'3%'}}>
          <Card color='green' onClick={this.openSubCategoryModal.bind(this)} value={'Continuous Release'} style={{
            height: '221.11px',
            width: '290px'
          }}>
            <Card.Content>

              <Label as='a' color='green' attached='top' ribbon>Continuous Release</Label>

              <Card.Description>
                <Flip x delay={1000}>
                <Image floated='left' attached='top' size='tiny' src='../image/cr.PNG'/>
                Continuous Release is a software engineering approach in which teams produce software in short cycles, ensuring that the software can be reliablyreleased at any time. It aims at building, testing, andreleasing software faster and more frequently.
              </Flip>
              </Card.Description>
            </Card.Content>
          </Card>
        </Grid.Column>
      </Fade>
      <Fade left big>
        <Grid.Column>
          <Card color='brown' onClick={this.openSubCategoryModal.bind(this)} value={'Continuous Monitering'} style={{
            height: '221.11px',
            width: '290px'
          }}>
            <Card.Content>

                <Label as='a' color='brown' attached='top' ribbon>Continuous Monitering</Label>
              <Card.Description>
                <Flip y delay={1000}>
                <Image floated='left' size='tiny' src='../image/cm.PNG'/>Continuous Monitoring is the process and technology used to detect compliance and risk issues associated with an organization's financial and operational environment.
              </Flip>
              </Card.Description>
            </Card.Content>
          </Card>
        </Grid.Column>
      </Fade>
      </Grid.Row>
    </Zoom>
  )}
  {Array(1).fill(void 0).map( (val, index) =>
    <Zoom key={index} duration={1500}>
      <Grid.Row>
      <Fade left big>
        <Grid.Column style={{paddingRight:'5%',paddingBottom:'3%'}}>
          <Card color='yellow' onClick={this.openSubCategoryModal.bind(this)} value={'Collaborative Ops'} style={{
            height: '221.11px',
            width: '290px'
          }}>
            <Card.Content>

                <Label as='a' color='yellow' attached='top' ribbon>Collaborative Ops</Label>
              <Card.Description>
                <Rotate down left delay={1000}>
                <Image floated='left' size='tiny' src='../image/co.PNG'/>Continuous Testing is the process of executing automated tests as part of the software delivery pipeline in order to obtain feedback on the business risks
              </Rotate>
              </Card.Description>
            </Card.Content>
          </Card>
        </Grid.Column>
      </Fade>
      <Fade up big>
        <Grid.Column style={{paddingRight:'5%',paddingBottom:'3%'}}>
          <Card color='brown' onClick={this.openSubCategoryModal.bind(this)} value={'Continuous Feedback'} style={{
            height: '221.11px',
            width: '290px'
          }}>
            <Card.Content>

                <Label as='a' color='brown' attached='top' ribbon>Continuous Feedback</Label>
              <Card.Description>
                <Rotate up right delay={1000}>
                <Image floated='left' size='tiny' src='../image/cf.PNG'/>Continuous Feedback focuses on providing ongoing feedback and coaching by openly discussing an employee's strengths and weaknesses on a regular basis. Benefits of Continuous Feedback.
              </Rotate>
              </Card.Description>
            </Card.Content>
          </Card>
        </Grid.Column>
      </Fade>
      <Fade down big>
        <Grid.Column style={{paddingRight:'5%',paddingBottom:'3%'}}>
          <Card color='blue' onClick={this.openSubCategoryModal.bind(this)} value={'Continuous Improvement'} style={{
            height: '221.11px',
            width: '290px'
          }}>
            <Card.Content>

                <Label as='a' color='blue' attached='top' ribbon>Continuous Improvement</Label>
              <Card.Description>
                <Rotate down right delay={1000}>
                <Image floated='left' size='tiny' src='../image/cip.PNG'/>Continuous Improvement is an ongoing effort to improve products, services or processes.
              </Rotate>
              </Card.Description>
            </Card.Content>
          </Card>
        </Grid.Column>
      </Fade>
      <Fade right big>
        <Grid.Column>
          <Card color='blue' onClick={this.openSubCategoryModal.bind(this)} value={'Information Management'} style={{
            height: '221.11px',
            width: '290px'
          }}>
            <Card.Content>

                <Label as='a' color='blue' attached='top' ribbon style={{backgroundColor:"#82c440"}}>Information Management</Label>
              <Card.Description>
                <Rotate up left delay={1000}>
                <Image floated='left' size='tiny' src='../image/im.PNG'/>Information Management concerns the acquisition of information from one or more sources, the custodianship and the distribution of that information to those who need it, and its ultimate disposition through archiving or deletion.
              </Rotate>
              </Card.Description>
            </Card.Content>
          </Card>
        </Grid.Column>
      </Fade>
      </Grid.Row>
    </Zoom>
  )}
  {Array(1).fill(void 0).map( (val, index) =>
    <Zoom key={index} duration={1500}>
      <Grid.Row>
      <Fade left big>
        <Grid.Column style={{paddingRight:'5%',paddingBottom:'3%'}}>
          <Card color='orange' onClick={this.openSubCategoryModal.bind(this)} value={'Tool Management'} style={{
            height: '221.11px',
            width: '290px'
          }}>
            <Card.Content>

                <Label as='a' color='orange' attached='top' ribbon>Tool Management</Label>
              <Card.Description>
                <Rotate down left delay={1000}>
                <Image floated='left' size='tiny' src='../image/tm.PNG'/>Tool Management is needed in metalworking so that the information regarding the tools on hand can be uniformly organized and integrated.
              </Rotate>
              </Card.Description>
            </Card.Content>
          </Card>
        </Grid.Column>
      </Fade>
      <Fade down big>
        <Grid.Column style={{paddingRight:'5%',paddingBottom:'3%'}}>
          <Card color='violet' onClick={this.openSubCategoryModal.bind(this)} value={'Knowledge Management'} style={{
            height: '221.11px',
            width: '290px'
          }}>
            <Card.Content>
                <Label as='a' color='violet' attached='top' ribbon>Knowledge Management</Label>
              <Card.Description>
                <Rotate up left delay={1000}>
                <Image floated='left' size='tiny' src='../image/km.PNG'/>Knowledge Management (KM) is the process of creating, sharing, using and managing the knowledge and information of an organisation.[1] It refers to a multidisciplinary approach to achieving organisational objectives by making the best use of knowledge
              </Rotate>
              </Card.Description>
            </Card.Content>
          </Card>
        </Grid.Column>
      </Fade>
      <Fade up big>
        <Grid.Column>
          <Card color='blue' onClick={this.openSubCategoryModal.bind(this)} value={'More'} style={{
            height: '221.11px',
            width: '290px'
          }}>
            <Card.Content style={{paddingRight:'5%'}}>

                <Label as='a' color='blue' attached='top' ribbon>More</Label>
              <Card.Description>
                <Rotate down right delay={1000}>
                <Image floated='left' size='tiny' src='../image/more.PNG'/>Additional Information.
              </Rotate>
              </Card.Description>
            </Card.Content>
          </Card>
        </Grid.Column>
      </Fade>
      </Grid.Row>
        </Zoom>
        )}
    </Grid>
  </div>
  );
}
else{
    hashHistory.push('/');
}
    return (
      <div>
            {MenuExampleContentProp}
          </div>
    )
  }
}

module.exports = MenuExampleContentProp;
