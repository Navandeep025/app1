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
import { HexGrid, Layout, Text, Pattern } from 'react-hexgrid';
let hexagon={

}

class MenuExampleContentProp extends Component {
  constructor() {
    super();
    this.state = {
      // active: true,
      categoryModal: false,
      isFlipped: false
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
  // e.preventDefault();
  this.setState({ isFlipped: !this.state.isFlipped });
}
  openSubCategoryModal() {
    this.setState({categoryModal: true});
  }
  closeModal() {
    this.setState({categoryModal: false})
  }
  render() {
    const {active} = this.state;


    return (

      <div style={{
        marginTop: '5%',
        paddingLeft:'4%'
      }}>
      {/* <ReactCardFlip isFlipped={this.state.isFlipped}>
<Label as='a' attached='top' color='olive' ribbon >Continuous Integration
This is the front of the card.
<Image floated='left' size='tiny' src='../image/ci.PNG'/>

</Label>

<p key="back" onMouseOver={this.handleClick}>
This is the back of the card.
</p>
</ReactCardFlip> */}

          {this.state.categoryModal
          ? <SubCategoryModal closeModal={this.closeModal.bind(this)}/>
          : null}

          {/* <Grid style={{
          marginLeft: '2%'
        }}> */}
        {Array(1).fill(void 0).map( (val, index) =>
          <Zoom key={index} duration={700}>
          {/* <Grid.Row> */}
            <Fade down big>
            {/* <Grid.Column width={8}> */}
              <div style={{float:'left',width:'350px',height:'390px'}}>

              <ReactCardFlip isFlipped={this.state.isFlipped}>
              <div id="hexagon" style={{backgroundColor:'green'}} key="front" onClick={this.handleClick} ><div id="text"><p><b style={{fontSize:'550%',paddingTop:'50%'}}>CI</b></p></div></div>
              <div id="hexagon1" key="back" onClick={this.openSubCategoryModal.bind(this)}><div id="text1">Continuous Integration (CI) is a development practice that requires developers to integrate code into a shared repository several times a day.</div></div>
              </ReactCardFlip>
            </div>
              <div style={{float:'left',width:'350px',height:'390px'}}>

              <ReactCardFlip isFlipped={this.state.isFlipped}>
              <div id="hexagon" key="front" onClick={this.handleClick} ><div id="text"><p><b style={{fontSize:'550%',paddingTop:'50%'}}>CI</b></p></div></div>
              <div id="hexagon1" key="back" onClick={this.openSubCategoryModal.bind(this)}><div id="text1">Continuous Integration (CI) is a development practice that requires developers to integrate code into a shared repository several times a day.</div></div>
              </ReactCardFlip>
            </div>
              <div style={{float:'left',width:'350px',height:'390px'}}>

              <ReactCardFlip isFlipped={this.state.isFlipped}>
              <div id="hexagon" key="front" onClick={this.handleClick} ><div id="text"><p><b style={{fontSize:'550%',paddingTop:'50%'}}>CI</b></p></div></div>
              <div id="hexagon1" key="back" onClick={this.openSubCategoryModal.bind(this)}><div id="text1">Continuous Integration (CI) is a development practice that requires developers to integrate code into a shared repository several times a day.</div></div>
              </ReactCardFlip>
            </div>
              <div style={{float:'left',width:'350px',height:'390px'}}>

              <ReactCardFlip isFlipped={this.state.isFlipped}>
              <div id="hexagon" key="front" onClick={this.handleClick} ><div id="text"><p><b style={{fontSize:'550%',paddingTop:'50%'}}>CI</b></p></div></div>
              <div id="hexagon1" key="back" onClick={this.openSubCategoryModal.bind(this)}><div id="text1">Continuous Integration (CI) is a development practice that requires developers to integrate code into a shared repository several times a day.</div></div>
              </ReactCardFlip>
            </div>
              <div style={{float:'left',width:'350px',height:'390px'}}>

              <ReactCardFlip isFlipped={this.state.isFlipped}>
              <div id="hexagon" key="front" onClick={this.handleClick} ><div id="text"><p><b style={{fontSize:'550%',paddingTop:'50%'}}>CI</b></p></div></div>
              <div id="hexagon1" key="back" onClick={this.openSubCategoryModal.bind(this)}><div id="text1">Continuous Integration (CI) is a development practice that requires developers to integrate code into a shared repository several times a day.</div></div>
              </ReactCardFlip>
            </div>
              <div style={{float:'left',width:'350px',height:'390px'}}>

              <ReactCardFlip isFlipped={this.state.isFlipped}>
              <div id="hexagon" key="front" onClick={this.handleClick} ><div id="text"><p><b style={{fontSize:'550%',paddingTop:'50%'}}>CI</b></p></div></div>
              <div id="hexagon1" key="back" onClick={this.openSubCategoryModal.bind(this)}><div id="text1">Continuous Integration (CI) is a development practice that requires developers to integrate code into a shared repository several times a day.</div></div>
              </ReactCardFlip>
            </div>
              <div style={{float:'left',width:'350px',height:'390px'}}>

              <ReactCardFlip isFlipped={this.state.isFlipped}>
              <div id="hexagon" key="front" onClick={this.handleClick} ><div id="text"><p><b style={{fontSize:'550%',paddingTop:'50%'}}>CI</b></p></div></div>
              <div id="hexagon1" key="back" onClick={this.openSubCategoryModal.bind(this)}><div id="text1">Continuous Integration (CI) is a development practice that requires developers to integrate code into a shared repository several times a day.</div></div>
              </ReactCardFlip>
            </div>

              {/* <HexGrid width={1200} height={800} viewBox="-50 -50 100 100" >
          <Layout size={{ x: 10, y: 10 }} flat={true} spacing={1.1} origin={{ x: 0, y: 0 }}>
            <Hexagon q={0} r={-1} s={1} fill="pat-1"/>
            <Hexagon q={0} r={0} s={0} fill="pat-2"/>
            <Hexagon q={0} r={1} s={-1} fill="pat-3"/>
            <Hexagon q={1} r={-1} s={0} fill="pat-4"/>
            <Hexagon q={1} r={0} s={-1} fill="pat-5"/>
            <Hexagon q={-1} r={1} s={0} fill="pat-6"/>
            <Hexagon q={-1} r={0} s={1} fill="pat-7"/>
            <Hexagon q={-2} r={1} s={1} fill="pat-8"/>
            <Hexagon q={1} r={1} s={-1} fill="pat-9"/>
            <Hexagon q={-2} r={2} s={-1} fill="pat-10"/>
            <Hexagon q={2} r={0} s={0} fill="pat-11"/>
            <Hexagon q={-1} r={2} s={1} fill="pat-12"/>
            <Hexagon q={2} r={-1} s={2} fill="pat-13"/>
          </Layout>
        <Pattern id="pat-1" link="../image/ci.PNG" />
        <Pattern id="pat-2" link="../image/ct.PNG" />
        <Pattern id="pat-3" link="../image/cd.PNG" />
        <Pattern id="pat-4" link="../image/cdr.PNG" />
        <Pattern id="pat-5" link="../image/cp.PNG" />
        <Pattern id="pat-6" link="../image/agile.PNG" />
        <Pattern id="pat-7" link="../image/cm.PNG" />
        <Pattern id="pat-8" link="../image/co.PNG" />
        <Pattern id="pat-9" link="../image/cf.PNG" />
        <Pattern id="pat-10" link="../image/cip.PNG" />
        <Pattern id="pat-11" link="../image/im.PNG" />
        <Pattern id="pat-12" link="../image/tm.PNG" />
        <Pattern id="pat-13" link="../image/km.PNG" />
        <Pattern id="pat-14" link="../image/more.PNG" />
      </HexGrid> */}
              {/* <Card color='olive' onClick={this.openSubCategoryModal.bind(this)} style={{
                height: '221.11px',
                width: '290px'
              }}>
                 <Card.Content>
                  <ReactCardFlip isFlipped={this.state.isFlipped}>
                  <Label as='a' attached='top' color='olive' ribbon key="front" onMouseOver={this.handleClick}>Continuous Integration
                  <Image floated='left' size='tiny' src='../image/ct.PNG' key="front" onMouseOver={this.handleClick} style={{width:'980%',height:'50%'}}/>
                </Label>
                  <Card.Description key="back" onMouseOver={this.handleClick}>
                     <Rotate up left delay={1000}>
                    <p key="back" onMouseOver={this.handleClick}>Continuous Integration (CI) is a development practice that requires developers to integrate code into a shared repository several times a day.</p>
                   </Rotate>
                   </Card.Description>
                  </ReactCardFlip>
                 </Card.Content>
             </Card> */}

            {/* </Grid.Column>
            <Grid.Column width={8}> */}
              <div style={{float:'left',width:'350px',height:'390px'}}>

              <ReactCardFlip isFlipped={this.state.isFlipped}>
              <div id="hexagon" key="front" onClick={this.handleClick} ><div id="text"><p><b style={{fontSize:'550%',paddingTop:'50%'}}>CI</b></p></div></div>
              <div id="hexagon1" key="back" onClick={this.openSubCategoryModal.bind(this)}><div id="text1">Continuous Integration (CI) is a development practice that requires developers to integrate code into a shared repository several times a day.</div></div>
              </ReactCardFlip>
            </div>
          {/* </Grid.Column/> */}

          </Fade>
          {/* <Fade left big>
            <Grid.Column style={{paddingRight:'5%',paddingBottom:'3%'}}>
              <Card color='blue' onClick={this.openSubCategoryModal.bind(this)} style={{
                height: '221.11px',
                width: '290px'
              }}>
                <Card.Content>
                  <Label as='a' color='blue'attached='top' ribbon>Continuous Testing</Label>
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
              <Card color='violet' onClick={this.openSubCategoryModal.bind(this)} style={{
                height: '221.11px',
                width: '290px'
              }}>
                <Card.Content>

                  <Label as='a' color='violet' attached='top' ribbon>Continuous Developement</Label>
                  <Card.Description>
                    <Rotate up right delay={1000}>
                    <Image floated='left' size='tiny' src='../image/cd.PNG'/>Continuous development is an umbrella term that describes several aspects of iterative software application development, including continuous integration, continuous delivery, continuous testing and continuous deployment.
                  </Rotate>
                  </Card.Description>
                </Card.Content>
              </Card>
            </Grid.Column>
          </Fade>
          <Fade right big>
            <Grid.Column>
              <Card color='red' onClick={this.openSubCategoryModal.bind(this)} style={{
                height: '221.11px',
                width: '290px'
              }}>
                <Card.Content>

                  <Label as='a' color='red' attached='top' ribbon>Continuous Deployment</Label>
                  <Card.Description>
                    <Rotate down left delay={1000}>
                    <Image floated='left' size='tiny' src='../image/cdr.PNG'/>Continuous deployment is a software engineering approach in which teams produce software in short cycles, ensuring that the software can be reliably released at any time. It aims at building, testing, and releasing software faster and more frequently.
                  </Rotate>
                  </Card.Description>
                </Card.Content>
              </Card>
            </Grid.Column> */}
          {/* </Fade> */}
          {/* </Grid.Row> */}
</Zoom>
)}
{/* {Array(1).fill(void 0).map( (val, index) =>
  <Zoom key={index} duration={700}>
          <Grid.Row>
          <Fade right big>
            <Grid.Column style={{paddingRight:'5%',paddingBottom:'3%'}}>
              <Card color='green' onClick={this.openSubCategoryModal.bind(this)} style={{
                height: '221.11px',
                width: '290px'
              }}>
                <Card.Content>
                  <Label as='a' attached='top' color= "green" ribbon >Continuous Planning</Label>
                  <Card.Description>
                    <Flip x delay={1000}>
                    <Image floated='left' size='tiny' src='../image/cp.PNG'/>Continuous planning refers to the process of planning in a world under continual change. Traditionally, as new world information is encountered, a planner adapts to it through the refinement of the plans that are under construction.
                  </Flip>
                  </Card.Description>
                </Card.Content>
              </Card>
            </Grid.Column>
          </Fade>
          <Fade up big>
            <Grid.Column style={{paddingRight:'5%',paddingBottom:'3%'}}>
              <Card color='orange' onClick={this.openSubCategoryModal.bind(this)} style={{
                height: '221.11px',
                width: '290px'
              }}>
                <Card.Content>
                  <Label as='a' color='orange' attached='top' ribbon>Agile infrastructure</Label>

                  <Card.Description>
                    <Flip y delay={1000}>
                    <Image floated='left' size='tiny' src='../image/agile.PNG'/>An agile IT infrastructure enabled with cloud computing and latest models have the potential to drive new business value, reduce cost and time to market
                  </Flip>
                  </Card.Description>
                </Card.Content>
              </Card>
            </Grid.Column>
          </Fade>
          <Fade down big>
            <Grid.Column style={{paddingRight:'5%',paddingBottom:'3%'}}>
              <Card color='green' onClick={this.openSubCategoryModal.bind(this)} style={{
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
              <Card color='brown' onClick={this.openSubCategoryModal.bind(this)} style={{
                height: '221.11px',
                width: '290px'
              }}>
                <Card.Content>

                    <Label as='a' color='brown' attached='top' ribbon>Continuous Monitering</Label>
                  <Card.Description>
                    <Flip y delay={1000}>
                    <Image floated='left' size='tiny' src='../image/cm.PNG'/>Continuous monitoring is the process and technology used to detect compliance and risk issues associated with an organization's financial and operational environment
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
        <Zoom key={index} duration={700}>
          <Grid.Row>
          <Fade left big>
            <Grid.Column style={{paddingRight:'5%',paddingBottom:'3%'}}>
              <Card color='yellow' onClick={this.openSubCategoryModal.bind(this)} style={{
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
              <Card color='brown' onClick={this.openSubCategoryModal.bind(this)} style={{
                height: '221.11px',
                width: '290px'
              }}>
                <Card.Content>

                    <Label as='a' color='brown' attached='top' ribbon>Continuous Feedback</Label>
                  <Card.Description>
                    <Rotate up right delay={1000}>
                    <Image floated='left' size='tiny' src='../image/cf.PNG'/>Continuous feedback focuses on providing ongoing feedback and coaching by openly discussing an employee's strengths and weaknesses on a regular basis. Benefits of Continuous Feedback.
                  </Rotate>
                  </Card.Description>
                </Card.Content>
              </Card>
            </Grid.Column>
          </Fade>
          <Fade down big>
            <Grid.Column style={{paddingRight:'5%',paddingBottom:'3%'}}>
              <Card color='blue' onClick={this.openSubCategoryModal.bind(this)} style={{
                height: '221.11px',
                width: '290px'
              }}>
                <Card.Content>
                    <Label as='a' color='blue' attached='top' ribbon>Continuous Improvement</Label>
                  <Card.Description>
                    <Rotate down right delay={1000}>
                    <Image floated='left' size='tiny' src='../image/cip.PNG'/>Continuous improvement is an ongoing effort to improve products, services or processes.
                  </Rotate>
                  </Card.Description>
                </Card.Content>
              </Card>
            </Grid.Column>
          </Fade>
          <Fade right big>
            <Grid.Column>
              <Card color='blue' onClick={this.openSubCategoryModal.bind(this)} style={{
                height: '221.11px',
                width: '290px'
              }}>
                <Card.Content>

                    <Label as='a' color='blue' attached='top' ribbon style={{backgroundColor:"#82c440"}}>Information Management</Label>
                  <Card.Description>
                    <Rotate up left delay={1000}>
                    <Image floated='left' size='tiny' src='../image/im.PNG'/>Information management concerns the acquisition of information from one or more sources, the custodianship and the distribution of that information to those who need it, and its ultimate disposition through archiving or deletion.
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
        <Zoom key={index} duration={700}>
          <Grid.Row>
          <Fade left big>
            <Grid.Column style={{paddingRight:'5%',paddingBottom:'3%'}}>
              <Card color='orange' onClick={this.openSubCategoryModal.bind(this)} style={{
                height: '221.11px',
                width: '290px'
              }}>
                <Card.Content>

                    <Label as='a' color='orange' attached='top' ribbon>Tool Management</Label>
                  <Card.Description>
                    <Rotate down left delay={1000}>
                    <Image floated='left' size='tiny' src='../image/tm.PNG'/>Tool management is needed in metalworking so that the information regarding the tools on hand can be uniformly organized and integrated.
                  </Rotate>
                  </Card.Description>
                </Card.Content>
              </Card>
            </Grid.Column>
          </Fade>
          <Fade down big>
            <Grid.Column style={{paddingRight:'5%',paddingBottom:'3%'}}>
              <Card color='violet' onClick={this.openSubCategoryModal.bind(this)} style={{
                height: '221.11px',
                width: '290px'
              }}>
                <Card.Content>
                    <Label as='a' color='violet' attached='top' ribbon>Knowledge Management</Label>
                  <Card.Description>
                    <Rotate up left delay={1000}>
                    <Image floated='left' size='tiny' src='../image/km.PNG'/>Knowledge management (KM) is the process of creating, sharing, using and managing the knowledge and information of an organisation.[1] It refers to a multidisciplinary approach to achieving organisational objectives by making the best use of knowledge
                  </Rotate>
                  </Card.Description>
                </Card.Content>
              </Card>
            </Grid.Column>
          </Fade>
          <Fade up big>
            <Grid.Column>
              <Card color='blue' onClick={this.openSubCategoryModal.bind(this)} style={{
                height: '221.11px',
                width: '290px'
              }}>
                <Card.Content style={{paddingRight:'5%'}}>

                    <Label as='a' color='blue' attached='top' ribbon>More</Label>
                  <Card.Description>
                    <Rotate down right delay={1000}>
                    <Image floated='left' size='tiny' src='../image/more.PNG'/>Continuous Testing is the process of executing automated tests as part of the software delivery pipeline in order to obtain feedback on the business risks
                  </Rotate>
                  </Card.Description>
                </Card.Content>
              </Card>
            </Grid.Column>
          </Fade>
          </Grid.Row>
            </Zoom>
            )} */}
        {/* </Grid> */}
      </div>

    )
  }
}

module.exports = MenuExampleContentProp;
