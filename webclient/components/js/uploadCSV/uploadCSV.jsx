import React from 'react';
import {Form, Input, Button, Grid, Icon} from 'semantic-ui-react';
import FileUploadProgress  from './fileUpload';
import {CSVLink, CSVDownload} from 'react-csv';
const yaml = require('yaml-template')

class IndexComponent extends React.Component {
  constructor() {
     super();
     this.state = {
       checkfile: true
     }
 }
changeFile(e,a) {
  var validExts = new Array(".yml");
  var fileExt = e.target.files[0].name;
  fileExt = fileExt.substring(fileExt.lastIndexOf('.'));
  if (validExts.indexOf(fileExt) < 0) {
    alert("Invalid file selected, valid files are of " +
             validExts.toString() + " types.");
             e.target.files[0].name = "";
             this.setState({checkfile:true});
    return false;
  }
  else {
    this.setState({checkfile:false});
    this.setState({csvFile: e.target.files[0]});
    return true;
  }
        }

importFile(){

            let data = new FormData();
            data.append('file', this.state.csvFile);
            $.ajax({
                type: "POST",
                url: '/trial',
                data: data,
                dataType: "JSON",
                processData: false,
                contentType: false,
                success:function(data) {
                  let data1 = "hudson.scm.NullSCM";
                  let name = data.Job[0];
                  let content = '';
                  let workflows = "workflow-job@2.12.2";
                  let urlss = "org.jenkinsci.plugins.workflow.cps.CpsFlowDefinition";
                  let plugs = "workflow-cps@2.40";
                  if (this.props.selectedjob == 'pipeline') {
                    content = "<flow-definition plugin='" + workflows + "'><description/><keepDependencies>false</keepDependencies><properties><org.jenkinsci.plugins.workflow.job.properties.PipelineTriggersJobProperty><triggers/></org.jenkinsci.plugins.workflow.job.properties.PipelineTriggersJobProperty></properties><definition class='" + urlss + "' plugin='" + plugs + "'><script/><sandbox>true</sandbox></definition><triggers/><disabled>false</disabled></flow-definition>";
                  } else {
                    content = "<?xml version='1.0' encoding='UTF-8'?><project><keepDependencies>false</keepDependencies><properties/><scm class='" + data1 + "'/><canRoam>false</canRoam><disabled>false</disabled><blockBuildWhenDownstreamBuilding>false</blockBuildWhenDownstreamBuilding><blockBuildWhenUpstreamBuilding>false</blockBuildWhenUpstreamBuilding><triggers/><concurrentBuild>false</concurrentBuild><builders/><publishers/><buildWrappers/></project>";
                  }
                  $.ajax({
                    url: 'http://10.142.207.15:8100/createItem?name=' + name,
                    method: 'POST',
                    contentType: "application/xml",
                    dataType: "xml",
                    beforeSend: function(request) {
                      request.setRequestHeader("Authorization", "Basic " + btoa('adapt:indian@123'));
                    },
                    data: content,
                    success: function(data) {
                      console.log("success");
                    }.bind(this),
                    error: function(err) {
                      console.log("err", err);
                    }.bind(this)
                  })
                }.bind(this),
                error: function(err) {
                  console.log("error ",err);
                }.bind(this)
            })
        }
 render() {
let urlvalue = '/trial?job='+this.props.selectedjob;
       return (
         <div id="jobdropdown" style={{marginLeft:'5%',color:'black',marginTop:'3%'}}>
            {/* <p>Add a .yml file to create a new job.</p><p>To download sample template <CSVLink data={csvData} filename={"UserTemplate.yml"}>click here</CSVLink></p> */}
            <p><a href="/createjobtemplate">Click here </a>to download sample template<p> of create a job.</p></p>
           <div style={{'marginLeft': '10%', 'marginTop': '5%'}}>
               <Form method='post' encType='multipart/form-data' >
                 <Input type='file' name='uploadedFile' accept='.yml'  onChange={this.changeFile.bind(this)}/>
                </Form>
                  <Button color = 'red' type = 'submit'  onClick={this.importFile.bind(this)} disabled={this.state.checkfile}><Icon name='upload'/>Upload</Button>
           </div>
            </div>
       );
   }
}
module.exports = IndexComponent;
