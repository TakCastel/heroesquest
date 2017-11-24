import React, { Component } from 'react'
import { Form, Input, Select } from 'antd'

const FormItem = Form.Item;
const Option = Select.Option

class Informations extends Component {

  // Handle the input change for name
  handleChange(event) {
    let name = event.target.value
    this.props.changeName(name)
  }

  selectRace(event) {
    let race = event
    this.props.changeRace(race)

    if (race === 'human') {
      this.props.checkSkill('blade')
    }
    if (race === 'sylvan') {
      this.props.checkSkill('accuracy')
    }
    if (race === 'greenskin') {
      this.props.checkSkill('hammer')
    }
    if (race === 'gnome') {
      this.props.checkSkill('alchemy')
    }
    if (race === 'reptilian') {
      this.props.checkSkill('hands')
    }
    if (race === 'magister') {
      this.props.checkSkill('spell')
    }
  }
  
  render() {

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 10 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 10 },
      },
    }

    return (
      <div className="spacer">
        <Form>
          <FormItem
            {...formItemLayout}
            label="Name"
          >
            <Input
              style={{ width: 175 }}  
              type="text" 
              value={this.props.name}
              placeholder='Enter a name'
              onChange={(event) => this.handleChange(event)} 
            />
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="Race"
          >
            <Select 
              style={{ width: 175 }}
              defaultValue="default" 
              value={this.props.race}          
              onChange={(event) => this.selectRace(event)} 
            >
              <Option value="default">Pick a race... </Option>
              <Option value="human">Human</Option>
              <Option value="sylvan">Sylvan</Option>
              <Option value="greenskin">Greenskin</Option>
              <Option value="gnome">Gnome</Option>
              <Option value="reptilian">Reptilian</Option>
              <Option value="magister">Magister</Option>
            </Select>
          </FormItem>
        </Form>
      </div>
    )
  }

}

export default Informations