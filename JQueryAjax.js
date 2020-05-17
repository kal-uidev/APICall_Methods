
import $ from 'jquery'
import React, { Component } from 'react'

 class JQueryAjax extends Component {
    constructor(props) {
        super(props)
        this.state = {
             data:[],
             postres:'',
             putres:'',
             patch_err:''
        }
    }
    componentDidMount() {
        $.ajax({
          url: 'https://reqres.in/api/users',
          type: 'GET',
          dataType: 'json',
          cache: false,
          success: function(data) {
            this.setState({data: data.data});
          }.bind(this),
          
        });
        $.ajax({
            url: 'https://reqres.in/api/users',
            type: 'POST',
            dataType: 'json',
            data: { 
                name: "morpheus",
                job: "leader"},
            success: function(res) {
              this.setState({postres: res});
            }.bind(this),
          });
        $.ajax({
                url: 'https://reqres.in/api/users/2',
                type: 'PUT',
                dataType: 'json',
                data: { 
                        name: "morpheus",
                        job: "zion resident"
                    },
                success:(res) => 
                  this.setState({putres: res})
              });
              $.ajax({
                url: 'https://reqres.in/api',
                type: 'PATCH',
                dataType: 'json',
                data: { 
                        name: "morpheus",
                        job: "zion resident"
                    },
                  error:(err) => 
                  this.setState({patch_err: err})
              });
              $.ajax({
                url: 'https://reqres.in/api/users/2',
                type: 'DELETE'
              });
      }
    render() {
        return (
            <div>
                Ajax{this.state.patch_err.status}
            </div>
        )
    }
}
export default JQueryAjax;

