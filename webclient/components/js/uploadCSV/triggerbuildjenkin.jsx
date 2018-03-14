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
    //  this.checkfile = this.checkfile.bind(this);
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
                  console.log("data",data);
                  let name = data.Job[0];
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
                }.bind(this),
                error: function(err) {
                  console.log("error ",err);
                }.bind(this)
            })
        }
 render() {
       return (
         <div id="jobdropdown" style={{marginLeft:'5%',color:'black',marginTop:'3%'}}>
            {/* <p>Add a .yml file to create a new job.</p><p>To download sample template <CSVLink data={csvData} filename={"UserTemplate.yml"}>click here</CSVLink></p> */}
            <p><a href="/deletejobjenkin">Click here </a>to download sample <p>template of trigger a job to build.</p></p>
           <div style={{'marginLeft': '10%', 'marginTop': '5%', width:'50%'}} id="jobdropdown">
               <Form method='post' encType='multipart/form-data' >
                 <Input type='file' name='uploadedFile' accept='.yml'  onChange={this.changeFile.bind(this)} style={{width:'115%'}}/>
                </Form>
                  <Button color = 'red' type = 'submit'  onClick={this.importFile.bind(this)} disabled={this.state.checkfile} style={{ 'marginTop': '5%'}}><Icon name='upload'/>Submit</Button>
           </div>
            </div>
       );
   }
}
module.exports = IndexComponent;
