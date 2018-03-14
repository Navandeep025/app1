import React from 'react';
import {Button, Input, Dropdown} from 'semantic-ui-react';
class MainComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      url: '',
      password: '',
      jobName: '',
      gitarr: [
        {
          text: 'Freestyle Project',
          value: 'freestyle'
        }, {
          text: 'Pipeline Project',
          value: 'pipeline'
        }
      ]
    };
  }
  // getDomainDetails() {
  //            console.log("domain");
  //            $.ajax({
  //                             url:"http://10.142.207.15:8100/job/test/config.xml",
  //                             method:'GET',
  //  headers: {
  //                                                                                                            Access-Control-Allow-Methods': 'GET, POST',
  //                                                                                                            Access-Control-Allow-Headers: 'X-Custom-Header'
  //                                                                            },
  //  dataType:"application/xml",
  //  data:{
  //    username:'adapt',
  //    password:'indian123'
  //  },
  //  dataType: "xml",
  //  processData: false,
  //  contentType: "application/x-www-form-urlencoded",
  //  xhrFields:{
  //    withCredentials: true
  //  },
  //     beforeSend: function(request) {
  //                  request.setRequestHeader("Authorization", "Basic " + btoa('adapt:indian@123'));
  //              },
  //                            success: function(data)
  //                            {
  //       console.log("data",data);
  //                            }.bind(this),
  //                            error: function(err)
  //                            {
  //                                            console.log('error occurred on AJAX', err);
  //                            }.bind(this)
  //            });
  // }
  createJob() {
    let data1 = "hudson.scm.NullSCM";
    let name = this.state.jobName;
    let content = '';
    let workflows = "workflow-job@2.12.2";
    let urlss = "org.jenkinsci.plugins.workflow.cps.CpsFlowDefinition";
    let plugs = "workflow-cps@2.40";
    if (this.state.selected == 'pipeline') {
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
        console.log("success", data);
      }.bind(this),
      error: function(err) {
        console.log("err", err);
      }.bind(this)
    })
  }
  triggerBuild() {
    console.log("inside", this.state.jobName);
    let name = this.state.jobName;
    $.ajax({
      url: 'http://10.142.207.15:8100/job/' + name + '/build',
      // url:'http://10.142.207.15:8100/createItem?name=' +name,
      method: 'POST',
      beforeSend: function(request) {
        request.setRequestHeader("Authorization", "Basic " + btoa('adapt:indian@123'));
      },
      success: function(data) {
        console.log("success", data);
      }.bind(this),
      error: function(err) {
        console.log("err", err);
      }.bind(this)
    })
  }
  deleteJob() {
    console.log("inside", this.state.jobName);
    let name = this.state.jobName;
    $.ajax({
      url: 'http://10.142.207.15:8100/job/' + name + '/doDelete',
      method: 'POST',
      beforeSend: function(request) {
        request.setRequestHeader("Authorization", "Basic " + btoa('adapt:indian@123'));
      },
      success: function(data) {
        console.log("success", data);
      }.bind(this),
      error: function(err) {
        console.log("err", err);
      }.bind(this)
    })
  }
  connectToGit() {
    let data1 = "hudson.plugins.git.GitSCM";
    let name = this.state.jobName;
    // let url = this.state.url;
    // let password = this.state.password;
    let pluginss = "gitlab-plugin@1.4.8";
    let gits = "git@3.5.1";
    let list = "list";
    $.ajax({
      url: 'http://10.142.207.15:8100/job/' + name + '/config.xml',
      method: 'POST',
      beforeSend: function(request) {
        request.setRequestHeader("Authorization", "Basic " + btoa('adapt:indian@123'));
      },
      data: "<project><properties><com.dabsquared.gitlabjenkins.connection.GitLabConnectionProperty plugin='" + pluginss + "'><gitLabConnection>Gitlab_Jenkins</gitLabConnection></com.dabsquared.gitlabjenkins.connection.GitLabConnectionProperty></properties><scm class='" + data1 + "' plugin='" + gits + "'><configVersion>2</configVersion><userRemoteConfigs><hudson.plugins.git.UserRemoteConfig><url>https://github.com/keerthi-351553/sample.git</url><credentialsId>abcds</credentialsId></hudson.plugins.git.UserRemoteConfig></userRemoteConfigs><branches><hudson.plugins.git.BranchSpec><name>*/master</name></hudson.plugins.git.BranchSpec></branches><doGenerateSubmoduleConfigurations>false</doGenerateSubmoduleConfigurations><submoduleCfg class='" + list + "'/><extensions/></scm><canRoam>true</canRoam><disabled>false</disabled><blockBuildWhenDownstreamBuilding>false</blockBuildWhenDownstreamBuilding><blockBuildWhenUpstreamBuilding>false</blockBuildWhenUpstreamBuilding><triggers><hudson.triggers.SCMTrigger><spec>* * * * *</spec><ignorePostCommitHooks>false</ignorePostCommitHooks></hudson.triggers.SCMTrigger></triggers></project>",
      success: function(data) {
        console.log("success", data);
      }.bind(this),
      error: function(err) {
        console.log("err", err);
      }.bind(this)
    })
  }
  selectType(e, a) {
    this.setState({selected: a.value});
  }
  url(e, a) {
    this.setState({url: a.value});
  }
  jobName(e, a) {
    this.setState({jobName: e.target.value});
  }
  password(e, a) {
    this.setState({password: e.target.value});
  }

  getLastBuildInfo() {
    $.ajax({
      url: 'http://10.142.207.15:8100/job/test1/lastBuild/api/json?pretty=true',
      method: 'GET',
      beforeSend: function(request) {
        request.setRequestHeader("Authorization", "Basic " + btoa('adapt:indian@123'));
      },
      success: function(data) {
        console.log("success.........", data.id, data.result, data.changeSet.items[0].authorEmail, data.changeSet.items[0].author.fullName);
      }.bind(this),
      error: function(err) {
        console.log("err", err);
      }.bind(this)
    })
  }

  render() {
    return (
      <div style={{
        fontFamily: 'Arial'
      }}>
        <center>
          <h3>Jenkins Bot</h3>
        </center>
        Select type:<Dropdown placeholder='Job type' onChange={this.selectType.bind(this)} search selection options={this.state.gitarr}/><br/><br/>

        Enter job name:<Input type="text" placeholder="Job name" onBlur={this.jobName.bind(this)}/><br/><br/>
        <Button onClick={this.createJob.bind(this)}>Create Job</Button>
        <Button onClick={this.triggerBuild.bind(this)}>Trigger Build</Button>
        <Button onClick={this.deleteJob.bind(this)}>Delete Job</Button><br/><br/>
        Enter url:<Input type="text" placeholder="Enter your git url" onBlur={this.url.bind(this)}/><br/><br/>
        Enter password:<Input type="password" placeholder="Enter your git url password" onBlur={this.password.bind(this)}/><br/><br/>
        <Button onClick={this.connectToGit.bind(this)}>CI</Button><br/><br/>

        <Button onClick={this.getLastBuildInfo.bind(this)}>get data</Button>
      </div>
    );
  }
}

module.exports = MainComponent;
